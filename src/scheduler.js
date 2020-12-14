const scheduler = {};

scheduler.scheduler = (jobs, windowStart, windowEnd) =>
{
    let queues = []

    if (integrityChecks(jobs, [windowStart, windowEnd]))
    {
        buildWindowFrame(jobs, windowStart, windowEnd)

        let jobsInsideWindow = getJobsInsideWindow(jobs)
        if (jobsInsideWindow)
        {
            while (jobsInsideWindow.length > 0)
            {
                let queue = buildQueue(jobsInsideWindow)
                queues.push(queue)
            }
        }
    }
    return queues
}

const buildQueue = (jobs) =>
{
    let queue = []
    let timeLimit = 8
    let index = 0
    while ((timeLimit > 0) && (index < jobs.length))
    {
        let job = jobs[index]
        let jobDuration = getNumber(job.tempo_estimado)
        if ((timeLimit - jobDuration) >= 0)
        {
            timeLimit = timeLimit - jobDuration
            queue.push(job.id)
            jobs.splice(index, 1);
        }
        else
        {
            index++
        }
    }
    return queue
}

const buildWindowFrame = (jobs, windowStart, windowEnd) =>
{
    jobs.push({
        id: 0,
        descricao: "start",
        data_maxima_conclusao: windowStart,
        tempo_estimado: "0 horas",
    })
    jobs.push({
        id: 999,
        descricao: "end",
        data_maxima_conclusao: windowEnd,
        tempo_estimado: "0 horas",
    })
    jobs.sort((a, b) => a.data_maxima_conclusao.localeCompare(b.data_maxima_conclusao))
}

const getJobsInsideWindow = (jobs) =>
{
    let jobsInsideWindow = []
    let startIndex = 0, endIndex = 0
    jobs.forEach((job, index) =>
    {
        if (job.id === 0)
        {
            startIndex = index + 1
        }
        else if (job.id === 999)
        {
            endIndex = index
        }
    })
    jobsInsideWindow = jobs.slice(startIndex, endIndex)
    if ((jobsInsideWindow.length + 2) < jobs.length) 
    {
        console.log("There are jobs outside window limits")
    }
    return jobsInsideWindow
}

const integrityChecks = (jobs, windowArray) =>
{
    let integrityChecks = []
    validateWindow(windowArray) ? integrityChecks.push(true) : console.log("There is an invalid time in window frame")
    validateJobs(jobs) ? integrityChecks.push(true) : false
    return (integrityChecks.length === 2) ? true : false
}

const validateJobs = (jobs) =>
{
    let index = 0
    while (index < jobs.length)
    {
        let job = jobs[index]
        let removeJob = false
        if (Object.keys(job).length === 4)
        {
            if (!validDate(job.data_maxima_conclusao))
            {
                console.log("Job id:", job.id, " have data_maxima_conclusao corrupted")
                removeJob = true
            }
            if (!validNumber(getNumber(job.tempo_estimado)))
            {
                console.log("Job id:", job.id, " have tempo_estimado corrupted")
                removeJob = true
            }
        }
        else
        {
            console.log("Job id:", job.id, " object is missing a Key")
            removeJob = true
        }
        if (removeJob)
        {
            jobs.splice(index, 1);
            console.log("Job id:", job.id, " removed from jobs list")
        }
        else
        {
            index++
        }
    }
    return true
}

const validateWindow = (windowArray) =>
{
    let windowChecks = []
    windowArray.forEach((date) => 
    {
        if (validDate(date))
        {
            windowChecks.push(true)
        }
    });
    return (windowChecks.length === 2) ? true : false
}

const validDate = (date) =>
{
    let isDate = false
    let dateObject = new Date(date)
    if (!isNaN(dateObject.getTime()) && date.length === 19)
    {
        isDate = true
    }
    return isDate
}

const validNumber = (number) =>
{
    let validNumber = false
    if (!isNaN(number))
    {
        validNumber = true
    }
    return validNumber
}
const getNumber = (string) =>
{
    let regex = string.match(/\d+/)
    let number = parseInt(regex ? regex[0] : null)
    return number
}

module.exports = scheduler;
