const app = {};

const jobs =
    [
        {
            id: 1,
            descricao: "Importação de arquivos de fundos",
            data_maxima_conclusao: "2019-11-10 12:00:00",
            tempo_estimado: "2 horas",
        },
        {
            id: 2,
            descricao: "Importação de dados da Base Legada",
            data_maxima_conclusao: "2019-11-11 12:00:00",
            tempo_estimado: "4 horas",
        },
        {
            id: 3,
            descricao: "Importação de dados de integração",
            data_maxima_conclusao: "2019-11-11 08:00:00",
            tempo_estimado: "6 horas",
        },
    ]

const window_start = "2019-11-10 09:00:00"
const window_end = "2019-11-11 12:00:00"

app.buildQueue = (firstJob, jobs) =>
{
    let array = []
    let timelimit = 8
    let index = 0
    array.push(firstJob.id)
    timelimit = timelimit - (firstJob.tempo_estimado.match(/\d+/)[0])
    while ((timelimit > 0) && (jobs.length > 0))
    {
        let job_time = jobs[index].tempo_estimado.match(/\d+/)[0]
        if ((timelimit - job_time) >= 0)
        {
            timelimit = timelimit - job_time
            array.push(jobs[index].id)
            jobs.splice(index, 1);
        }
        index++
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
    app.buildWindowFrame(jobs, window_start, window_end)

    if (app.checkJobsToWindowLimits(jobs))
    {
        jobs.shift()
        jobs.pop()
        while (jobs.length > 0)
        {
            let queue = app.buildQueue(jobs.shift(), jobs)
            queues.push(queue)
        }
    }
    else 
    {
        console.log("Jobs outside window limits")
    }
    return queues
}



app.scheduler(jobs, window_start, window_end)

module.exports = app;