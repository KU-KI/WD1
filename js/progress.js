const elem = document.getElementById('dynamic');

setInterval(() => {
    elem.value += 1;
    if (elem.value === 100) {
        elem.value = 0;
    }
}, 20);