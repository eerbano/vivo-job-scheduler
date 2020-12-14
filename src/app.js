const data = require('../src/data')
const scheduler = require('../src/scheduler')

let queues = scheduler.scheduler(data.jobs, data.windowStart, data.windowEnd)

queues.forEach((queue, index) =>
{
    console.log("Queue ", (index + 1), ": ", queue.toString())
})

