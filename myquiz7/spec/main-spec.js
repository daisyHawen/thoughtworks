const main = require('../main/main');

describe('main()', () => {

    it('should validate email', () => {
        expect(main('tom@gmail.com', ['gmail.com'])).toBe(true);
        expect(main('tom@qq.com', ['qq.com'])).toBe(true);
        expect(main('tom@qq.com', ['gmail.com'])).toBe(false);
    });

});
