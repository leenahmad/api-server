'use strict';

const logger = require('../src/middleware/logger');

describe('testing logger middleware', () => {
    let consoleSpy;
    let request = {};
    let response = {};
    let next = jest.fn();

    beforeEach(() => {
        
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    })

    afterEach(() => {
       
        consoleSpy.mockRestore()
    })

    it('test log', () => {
        logger(request, response, next);
       expect(consoleSpy).toHaveBeenCalled();
    })
    
    it ('test next', () => {
        logger(request, response, next);
       expect(next).toHaveBeenCalled();

    })
})