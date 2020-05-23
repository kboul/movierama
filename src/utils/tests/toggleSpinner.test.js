/**
 * @jest-environment jsdom
 */

const { toggleSpinner } = require('../toggleSpinner');

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(
    path.resolve(__dirname, '../../../index.html'),
    'utf8'
);

jest.dontMock('fs');

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
    jest.resetModules();
});

it('displays the spinner on the UI', () => {
    toggleSpinner('show');
    expect(document.querySelector('.fa-spinner')).toBeTruthy();
});

it('removes the spinner from the UI', () => {
    toggleSpinner('');
    expect(document.querySelector('.fa-spinner')).not.toBeTruthy();
});
