const data = require('../src/data')
const scheduler = require('../src/scheduler')

scheduler.scheduler(data.jobs, data.window_start, data.window_end)
