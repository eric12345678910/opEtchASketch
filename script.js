console.log('etch-a-sketch!')


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 400; i++){
        let section = document.getElementById('sketchPad');
        let div = document.createElement('div');
        div.className = 'sketchCell';
        section.appendChild(div);
    }

    const cells = document.querySelectorAll('.sketchCell');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = 'black';
        });
    });

    const reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.style.backgroundColor = 'antiquewhite';
        })
    })





});

