exports.validHtml = (html) => {
    var doc = document.createElement('div');
    doc.innerHTML = html;
    return doc.innerHTML === html;
};
