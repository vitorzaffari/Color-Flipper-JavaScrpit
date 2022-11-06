const cores = [ "green", "red", "blue", "orange", "yellow", "grey", "pink", "brown", "white", "black"];
const btn = document.getElementById('btn');
const cor = document.querySelector('.cor');

btn.addEventListener('click', function() {
    //get random number between 0 - 9
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = cores[randomNumber];
    cor.textContent = cores[randomNumber];
    console.log(randomNumber);
});

function getRandomNumber() {
    return Math.floor(Math.random() * cores.length);
}