const container = document.getElementById('container');
const start = document.getElementById('start');
const clear = document.getElementById('clear');

start.addEventListener('click', createBoard);
clear.addEventListener('click', clearBoard);

function createBoard() {
    let size = prompt('What size of board would you like?');
    if (size > 100) {
        alert('Please enter a number less than 100!');
        return;
    }
    for (let i = 0; i < size; i++) {
        const row = container.appendChild(document.createElement('div'));
        row.style.height = (500 / size) + 'px';
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            square.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'black';
            });
            square.style.height = (500 / size) + 'px';
            square.style.width = (500 / size) + 'px';
            row.appendChild(square);
        }
    }
}

function clearBoard() {
    while (container.firstChild) container.removeChild(container.firstChild);
}