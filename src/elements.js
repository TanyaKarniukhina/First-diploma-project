export function createElement(tag, className, text, location, attribute, value) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = text;
    location.append(element);
    if (attribute && value) {
        element.setAttribute(attribute, value);
    }
    return element;
}