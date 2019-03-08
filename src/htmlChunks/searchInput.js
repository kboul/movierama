export const searchInput = () => {
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
            placeholder="Search for a movie..." 
            aria-label="Search"
            aria-describedby="addon-wrapping">
    `
}