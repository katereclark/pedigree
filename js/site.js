
//#region Responsive Navigation Bar
// document.querySelector('.bar-icon').addEventListener('click', () => {
//     document.querySelector('.navigation').classList.toggle('responsive');
// }, false);

// window.onresize = () => {
//     if (window.innerWidth > 675) document.querySelector('.navigation').classList.remove('responsive')
// };
//#endregion

let selectGen = document.querySelector('select#gen');

for(let i=2; i<5; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', `${i}`);
    option.textContent = i;

    selectGen.appendChild(option);
};



// let selectChildren = document.querySelector('select#children');
// let initalNumberOfChildren = selectChildren.options[selectChildren.selectedIndex].text;
// console.log(initalNumberOfChildren);


// let numberOfGens = selectGen.options[selectGen.selectedIndex].text;
// console.log(numberOfGens);

//#region Responsive Layout Buttons
// document.querySelector('.selection-spouse').addEventListener('click', () => {
//     document.querySelector('.directory-info').classList.add('grid-layout');
//     document.querySelector('.directory-info').classList.remove('list-layout');
// }, false);

// document.querySelector('.selection-spouse').addEventListener('click', () => {
//     document.querySelector('.directory-info').classList.add('list-layout');
//     document.querySelector('.directory-info').classList.remove('grid-layout');
// }, false);
//#endregion

;(() => {
    let canvas, ctx;

    let createCarrier = (gender) => {
        if (gender === 'male') {
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'blue';
            // ctx.strokeRect(50, 35, 50, 50);
            ctx.fillRect(50, 35, 50, 50);
        } 
        
        if (gender === 'female') {
            // filled square X: 125, Y: 35, width/height 50
            // ctx.save();
            ctx.beginPath();
            // ctx.strokeStyle = 'black';
            // ctx.fillStyle = 'red';
            // ctx.fillRect(125, 35, 50, 50);
            // ctx.beginPath()
            ctx.arc((125+25), (35+25), 25, 0, 2 * Math.PI, false); // full circle
            ctx.strokeStyle = 'black';
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.stroke();
            // ctx.restore();
        }

        ctx.beginPath();
        ctx.moveTo(100, 35+25);
        ctx.lineTo(125, 35+25);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100+25/2, 35+25);
        ctx.lineTo(100+25/2, 35+100);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50, 35+100);
        ctx.lineTo(50+50+25+25+25, 35+100);
        ctx.stroke();
    }

    const init = () => {
        canvas = document.getElementById('pedigree-canvas');
        ctx = canvas.getContext('2d');

        createCarrier('male');
        createCarrier('female');
    }

    document.addEventListener('DOMContentLoaded', init);
})()

//#region Copyright Year
const date = new Date();

document.querySelector("#copyright-year").textContent = date.getFullYear();
//#endregion