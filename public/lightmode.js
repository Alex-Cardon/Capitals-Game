function myLightMode() {
    let styles= document.createElement('link');
    styles.href="/css/style.css";
    styles.rel="stylesheet";
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
        head.appendChild(styles);
    }
    else {
        head.removeChild(head.lastChild);
        element.classList.add("lightmode");
        element.classList.remove("darkmode");
        head.appendChild(loader);
    }
}