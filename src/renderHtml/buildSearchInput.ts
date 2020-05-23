import { searchInput } from '../htmlChunks/searchInput';

export const buildSearchInput = () => {
    document.getElementById('searchInputContainer').innerHTML = searchInput();
};
