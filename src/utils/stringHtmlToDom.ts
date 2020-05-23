export const stringHtmlToDom = (htmlChunk: string) => {
    const htmlString: any = new DOMParser().parseFromString(
        htmlChunk,
        'text/html'
    );
    return htmlString.firstChild.innerHTML;
};
