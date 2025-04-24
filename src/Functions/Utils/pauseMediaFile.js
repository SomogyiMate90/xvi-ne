
export default function pauseMediaFile(idText){

    if(typeof idText !== 'string') return;

    const parentEl = document.getElementById(idText);

    const mediaList = parentEl.querySelectorAll('video, audio')

    if(mediaList.length === 0) return;

    mediaList.forEach(media=>{
        if (!media.paused) {
            media.pause();  
          }
    })
}