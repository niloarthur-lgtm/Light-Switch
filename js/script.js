function soundClick(){
    const button = document.getElementById('toggle1')
    const sound = document.getElementById('sound1')

    button.addEventListener('click', () =>{
        sound.currentTime=0
        sound.play()
    })
}
soundClick()