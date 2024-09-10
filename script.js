console.log('etch-a-sketch!')


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 400; i++){
        let section = document.getElementById('sketchPad');
        let div = document.createElement('div');
        section.appendChild(div);
    }
});