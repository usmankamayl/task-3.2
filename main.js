const form = document.getElementById('form');
const input = document.createElement('input');
input.style.width = '100%';
input.style.padding = '10px';
input.style.boxSizing = 'border-box';
input.setAttribute('placeholder', 'Введите текст');
const p = document.createElement('p');
form.append(input, p);

const showText = () => {
    p.textContent = input.value;
}



const debounce = (fn, msec) => {
    let lastCall = 0;
    let lastCallTimer = 0;

    return (...args) => {
        const previousCall = lastCall;
        lastCall = Date.now();
        if (previousCall && (lastCall - previousCall) <= msec) {
            clearTimeout(lastCallTimer)
        }
        lastCallTimer = setTimeout(() => fn(...args), msec);
    }
}

const showTextDebounce = debounce(showText, 300);

input.addEventListener('input', showTextDebounce);


