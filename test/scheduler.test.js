const expect = require('chai').expect;
const scheduler = require('../src/scheduler')
const data = require('../src/data')

describe('scheduler.js scheduler tests', () =>
{
    describe('scheduler.scheduler()', () =>
    {
        it('normal condition', () =>
        {
            const result = scheduler.scheduler(data.jobs, data.window_start, data.window_end)
            expect(result).to.eql([[1, 3], [2]]);
        })
        it('invalid window time condition', () =>
        {
            const result = scheduler.scheduler(data.jobs, data.invalid_date, data.window_end)
            expect(result).to.eql([]);
        })
        it('jobs outside window frame', () =>
        {
            const result = scheduler.scheduler(data.jobsOutside, data.window_start, data.window_end)
            expect(result).to.eql([]);
        })
        it('invalid jobs', () =>
        {
            const result = scheduler.scheduler(data.jobsInvalid, data.window_start, data.window_end)
            expect(result).to.eql([]);
        })
    })

})