export default (text = 'Privet гайз!!!') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};