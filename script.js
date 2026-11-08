//your JS code here. If required.
        const buttons = document.getElementById("buttons")

        const sounds = ["applause", "boo", "gasp", "tada", "victory"]
        let currentAudio = null

        sounds.forEach((sound)=>{
            const button = document.createElement("button")
            button.className = "btn"
            button.innerText = sound
            button.addEventListener("click",()=>{
                if(currentAudio !==null){
                    currentAudio.pause()
                    currentAudio.currentTime = 0
                }
                currentAudio = new Audio(`sounds/${sound}.mp3`)
                currentAudio.play()
            })
            buttons.appendChild(button)
        })
        const stopButtons = document.createElement("button")
        stopButtons.className = "stop"
        stopButtons.innerText = "stop"

        stopButtons.addEventListener("click",()=>{
            if(currentAudio !==null){
                currentAudio.pause()
                currentAudio.currentTime = 0;
            }
        })
        buttons.appendChild(stopButtons);
