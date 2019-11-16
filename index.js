import {arr4x4} from './Arr4x4.js';
import {arr32x32} from './Arr32x32.js';
const sizeCanvas = 512;

function selected () {
    document.querySelectorAll('.switcher li').forEach(li => li.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
}

function draw4() {
    const arr = arr4x4;
    let n = arr.length;
    let ctx = document.getElementById('canvas').getContext('2d');
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            ctx.fillStyle = `#${arr[i][j]}`;
            ctx.fillRect(j*(sizeCanvas/n), i*(sizeCanvas/n), sizeCanvas/n, sizeCanvas/n);
        }
    }
    selected();
}

function draw32() {
    const arr = arr32x32;
    let n = arr.length;
    let ctx = document.getElementById('canvas').getContext('2d');
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            ctx.fillStyle = `rgba(${arr[i][j].toString()})`;
            ctx.fillRect(j*(sizeCanvas/n), i*(sizeCanvas/n), sizeCanvas/n, sizeCanvas/n);
        } 
    }
    selected();
}

function drawImg() {
    let ctx = document.getElementById('canvas').getContext('2d');
    let img = new Image();
    img.onload = function(){
        ctx.drawImage(img, 0, 0, sizeCanvas, sizeCanvas);
    };
    img.src = './assets/img/image.png';
    selected();
}

document.querySelector('#matrix4').addEventListener('click', draw4);
document.querySelector('#matrix32').addEventListener('click', draw32);
document.querySelector('#image').addEventListener('click', drawImg);
