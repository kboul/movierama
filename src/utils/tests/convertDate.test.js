const { convertDate } = require('../convertDate');

it('converts the date from YYYY-MM-DD format to month DD, YYYY', () => {
    expect(convertDate('2019-03-12')).toBe('March 12, 2019');
});
