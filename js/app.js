const mainBox = document.querySelector('.main-box');
const redBox = document.querySelector('.red');
const greenBox = document.querySelector('.green');
const blueBox = document.querySelector('.blue');
const yellowBox = document.querySelector('.yellow');
const mainBoxText = document.querySelector('.main-box_text');

redBox.addEventListener('click', (event) => {

    const redBoxcolor = getComputedStyle(event.target).backgroundColor; 
    console.log(redBoxcolor);
    const redBoxText = event.target.innerText
    console.log(redBoxText);

    mainBox.style.backgroundColor = `${getComputedStyle(event.target).backgroundColor}`;
    mainBoxText.innerText = redBoxText;
    
});