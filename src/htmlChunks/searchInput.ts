export const searchInput = (): string => {
    return `
        <div class="input-group-prepend">
            <span 
                class="input-group-text 
                fa fa-search py-2">
            </span>
        </div>
        <input 
            type="text" 
            class="form-control" 
            id="searchInput"
            placeholder="Search for a movie..." 
            aria-label="Search"
            aria-describedby="addon-wrapping">
    `
}