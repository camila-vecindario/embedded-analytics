export const importResource = (options) => {
    const firstScript = document.getElementsByTagName('script')[0];
    if (options.id && document.getElementById(options.id)) return;
    if (options.style) {
        const style = document.createElement('link');
        style.id = options.id;
        style.rel = 'stylesheet';
        style.href = options.style;
        style.async = !!options.async;
        if (firstScript) {
            firstScript.parentNode.insertBefore(style, firstScript);
        } else {
            document.querySelector('head').appendChild(style);
        }
    } else {
        const script = document.createElement('script');
        script.src = options.script;
        script.id = options.id;
        script.type = 'text/javascript';
        script.defer = true;
        script.async = !!options.async;
        if (firstScript) {
            firstScript.parentNode.insertBefore(script, firstScript);
        } else {
            document.querySelector('head').appendChild(script);
        }
    }
};

export const removeResource = (selector) =>
    document.querySelector && document.querySelector(selector) && document.querySelector(selector).remove();

export const removeMultipleResources = (selector) => {
    document?.querySelectorAll(selector)?.forEach((element) => element.remove());
};
