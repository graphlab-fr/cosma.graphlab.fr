(() => {
    let OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows") != -1) OSName = "Windows";
    if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "MacOs";
    if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Unknown";
    document.querySelectorAll(`a.btn[data-os="${OSName}"]`).forEach(elt => elt.classList.add('active'));
    console.log(OSName);
})();