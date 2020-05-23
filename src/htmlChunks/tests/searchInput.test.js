/**
 * @jest-environment jsdom
 */

const { searchInput } = require('../searchInput');

let searchHtmlElement;
let searchInputIcon;

beforeAll(() => {
    const stringHtml = searchInput();
    const parentDiv = document.createElement('div');
    parentDiv.innerHTML = stringHtml;
    searchHtmlElement = parentDiv.querySelector('input');
    searchInputIcon = parentDiv.querySelector('span');
});

it('should contain an input element of type text with specific placeholder value', () => {
    expect(searchHtmlElement.tagName).toBe('INPUT');
    expect(searchHtmlElement.type).toBe('text');
    expect(searchHtmlElement.placeholder).toEqual('Search for a movie...');
});

it('should have a span element with specific class selector names', () => {
    expect(searchInputIcon.tagName).toBe('SPAN');
    expect(searchInputIcon.className).toContain('fa fa-search py-2');
});
