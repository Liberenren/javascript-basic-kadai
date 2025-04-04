const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',() => {
    if (text) {
        text.style.display = 'none';
    }
    const childtext = document.createElement('h2');
    childtext.textContent = 'ボタンがクリックされました';
    text.appendChild(childtext);
});