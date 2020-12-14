const expect = require('chai').expect;
const scheduler = require('../src/scheduler')
const data = require('../src/data')

describe('scheduler.js scheduler tests', () =>
{
    describe('scheduler.scheduler()', () =>
    {
        it('normal condition', () =>
        {
            const result = scheduler.scheduler(data.jobs, data.windowStart, data.windowEnd)
            expect(result).to.eql([[1, 3], [2]]);
        })
        it('invalid window time condition', () =>
        {
            const result = scheduler.scheduler(data.jobs, data.invalid_date, data.windowEnd)
            expect(result).to.eql([]);
        })
        it('jobs outside window frame', () =>
        {
            const result = scheduler.scheduler(data.jobsOutside, data.windowStart, data.windowEnd)
            expect(result).to.eql([[1]]);
        })
        it('invalid jobs, date', () =>
        {
            const result = scheduler.scheduler(data.jobsInvalidDate, data.windowStart, data.windowEnd)
            expect(result).to.eql([[1]]);
        })
        it('invalid jobs, duration', () =>
        {
            const result = scheduler.scheduler(data.jobsInvalidDuration, data.windowStart, data.windowEnd)
            expect(result).to.eql([[1]]);
        })
    })

})