window.addEventListener('keydown', (e)=>{
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(audio){
        audio.play();
        audio.currentTime = 0;
        key.classList.add('active');
    }
    setInterval(() => {
        key.classList.remove('active');
        
    }, 300);

    // console.log(audio);

})