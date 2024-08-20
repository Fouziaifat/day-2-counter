let counter = 0;

document.getElementById('increment-btn').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    counter--;
    document.getElementById('counter').textContent = counter;
});

document.getElementById('reset-btn').addEventListener('click', () => {
    counter = 0;
    document.getElementById('counter').textContent = counter;
});
