function isInDocument(node, string) {

    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log("Kollar element: ", node.tagName);
        for (let child of node.childNodes) {
            if (isInDocument(child, string)) {
                return true;
            }
        }
        return false;
    } 

    else if (node.nodeType === Node.TEXT_NODE) {
        console.log("Kollar textnod: ", node.nodeValue);
        return node.nodeValue.includes(string);
    }

    return false;
}

window.isInDocument = isInDocument;