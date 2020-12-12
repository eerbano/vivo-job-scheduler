const scheduler = {};

scheduler.buildQueue = (jobs) =>
{
    let array = []
    let timelimit = 8
    let index = 0
    while ((timelimit > 0) && (index < jobs.length))
    {
        let job_time = jobs[index].tempo_estimado.match(/\d+/)[0]
        if ((timelimit - job_time) >= 0)
        {
            timelimit = timelimit - job_time
            array.push(jobs[index].id)
            jobs.splice(index, 1);
        }
        else
        {
            index++
        }
    }
    return array
}

scheduler.buildWindowFrame = (jobs, window_start, window_end) =>
{
    jobs.push({
        id: 0,
        descricao: "start",
        data_maxima_conclusao: window_start,
    })
    jobs.push({
        id: 999,
        descricao: "end",
        data_maxima_conclusao: window_end,
    })
    scheduler.sortJobs(jobs)
}

scheduler.sortJobs = (jobs) =>
{
    jobs.sort((a, b) => a.data_maxima_conclusao.localeCompare(b.data_maxima_conclusao))
}

scheduler.checkJobsToWindowLimits = (jobs) =>
{
    const frameStart = jobs[0].id === 0
    const frameEnd = jobs[jobs.length - 1].id === 999

    return frameStart && frameEnd
}

scheduler.scheduler = (jobs, window_start, window_end) =>
{
    let queues = []

    if (scheduler.validateDate([window_start, window_end]))
    {
        scheduler.buildWindowFrame(jobs, window_start, window_end)

        if (scheduler.checkJobsToWindowLimits(jobs))
        {
            jobs.shift()
            jobs.pop()
            while (jobs.length > 0)
            {
                let queue = scheduler.buildQueue(jobs)
                queues.push(queue)
            }
        }
        else
        {
            console.log("There is jobs outside window limits")
        }
    }
    else
    {
        console.log("There is an invalid time in window frame")
    }
    return queues
}

scheduler.validateDate = (array) =>
{
    let validDate = true
    array.forEach((date) => 
    {
        timestamp = new Date(date)
        if (!isNaN(timestamp.getTime()) && date.length === 19)
        {
            validDate = validDate ? true : false
        }
        else
        {
            validDate = false
        }
    });
    return validDate
}

module.exports = scheduler;
