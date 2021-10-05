const image = document.getElementsByTagName('img')[0];

image.addEventListener('click', () => {
    const start = performance.now();

    for (let i = 0; i < Infinity; i++) {
        if ((performance.now() - start) >= 2000) {
            alert('Done!');
            break;
        }
    }
});