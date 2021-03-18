function myLightMode() {
    const head = document.head;
    let loader = document.createElement('link');
    loader.href="/css/lightmode.css";
    loader.rel="stylesheet";
    console.log(head.lastChild);
    const element = document.body;
    if (element.classList.contains("lightmode") == true) {
        element.classList.add("darkmode");
        element.classList.remove("lightmode");
        head.removeChild(head.lastChild);
    }
    else {
        element.classList.add("lightmode");
        element.classList.remove("darkmode");
        head.appendChild(loader);
    }
}