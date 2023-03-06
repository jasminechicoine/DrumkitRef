// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!

console.log('music player script file');
let allDivs = document.querySelectorAll('.key');

window.addEventListener('keyup', findMatchingAudio);


function findMatchingAudio(event) {
    //debugger;
    //try to find the matching audio element using the keycode
    //that we get from the event Object
    let targetAudio = document.querySelector('audio[data-key="${event.keyCode}"]'),
        targetDiv = document.querySelector('div[data-key="${event.keyCode}"]');
    
    if (!targetAudio) {return;} // no point in running any js
    
    targetAudio.currentTime = 0;
    targetAudio.play();

    targetDiv.classList.add('playing');

    //data-key="65"
}

function resetKey() {this.classList.remove('playing');}

allDivs.forEach(key => key.addEventListener('transitionend', resetKey));
ctx.drawImage(playerImg, 10 + (index * 26), 10, 20, 20);

