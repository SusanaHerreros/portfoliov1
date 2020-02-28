const animateView = () => {
    var layerClass = ".left-layer";
    var layers = document.querySelectorAll(layerClass);
    for (const layer of layers) {
        layer.classList.toggle("active");
    }
};

window.onload = () => {
    
    document.querySelector('#about').addEventListener('click', () => {
        animateView()
        setTimeout(() => {
            window.location.href = 'aboutme.html'
        }, 600)
    })
    
}
