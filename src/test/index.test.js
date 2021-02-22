describe('some feature', () => {
    // always we want to use defined modules as initial state
    beforeEach(() => jest.resetModules());

    it('getting module name', () => {
        // we need to reload module
        const {getName} = require('../module');
        expect(getName()).toBe('module.js');
    });

    it('getting mocked module name', () => {
        jest.doMock('../module', () => {
            // '../module' mock
            return {
                getName: () => 'mocked module.js'
            };
        });
        // we need to reload module
        const {getName} = require('../module');
        expect(getName()).toBe('mocked module.js');
    });
})