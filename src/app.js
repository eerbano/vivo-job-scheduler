const data = require('../src/data')

const app = {};

app.buildQueue = (jobs) =>
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

app.buildWindowFrame = (jobs, window_start, window_end) =>
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
    app.sortJobs(jobs)
}

app.sortJobs = (jobs) =>
{
    jobs.sort((a, b) => a.data_maxima_conclusao.localeCompare(b.data_maxima_conclusao))
}

app.checkJobsToWindowLimits = (jobs) =>
{
    const frameStart = jobs[0].id === 0
    const frameEnd = jobs[jobs.length - 1].id === 999

    return frameStart && frameEnd
}

app.scheduler = (jobs, window_start, window_end) =>
{
    let queues = []

    if (app.validateDate([window_start, window_end]))
    {
        app.buildWindowFrame(jobs, window_start, window_end)

        if (app.checkJobsToWindowLimits(jobs))
        {
            jobs.shift()
            jobs.pop()
            while (jobs.length > 0)
            {
                let queue = app.buildQueue(jobs)
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

app.validateDate = (array) =>
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

//app.scheduler(data.jobs, data.window_start, data.window_end)

module.exports = app;