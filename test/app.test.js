const expect = require('chai').expect;
const app = require('../src/app')
const data = require('../src/data')

describe('app.js scheduler tests', () =>
{
    //     describe('app.sequencer()', () =>
    //     {
    // it('app.sequencer(), condition = ', () =>
    // {
    //     const result = app.sequencer()
    //     expect(result).to.equal();
    // })
    // it('app.sequencer(), condition = ', () =>
    // {
    //     const result = app.sequencer()
    //     expect(result).to.equal();
    // })
    // it('app.sequencer(), condition = ', () =>
    // {
    //     const result = app.sequencer()
    //     expect(result).to.equal();
    // })

    // })

    // describe('app.limiter()', () =>
    // {
    // it('app.limiter(), condition = ', () =>
    // {
    //     const result = app.limiter()
    //     expect(result).to.equal();
    // })
    // it('app.limiter(), condition = ', () =>
    // {
    //     const result = app.limiter()
    //     expect(result).to.equal();
    // })
    // it('app.limiter(), condition = ', () =>
    // {
    //     const result = app.limiter()
    //     expect(result).to.equal();
    // })
    // })

    describe('app.scheduler()', () =>
    {
        it('normal condition', () =>
        {
            const result = app.scheduler(data.jobs, data.window_start, data.window_end)
            expect(result).to.eql([[1, 3], [2]]);
        })
        it('invalid window time condition', () =>
        {
            const result = app.scheduler(data.jobs, data.invalid_date, data.window_end)
            expect(result).to.eql([]);
        })
        // it('app.scheduler(), condition = ', () =>
        // {
        //     const result = app.scheduler()
        //     expect(result).to.equal();
        // })
    })

})