const accueil = document.querySelector(".accueil");
const text = document.querySelector(".central_text");
const video = document.getElementById("video");
const walkText = -15;
const walkVideo = -60;

function movingElements(e){
    const width = accueil.clientWidth;
    const height = accueil.clientHeight;

    let x = e.clientX;
    let y = e.clientY;

    const xWalkText = Math.round((x / width * walkText) - (walkText / 2)); //offsetting to get right position
    const yWalkText = Math.round((y / height *  walkText) - (walkText / 2));

    const xWalkVideo = Math.round((x / width * walkVideo) - (walkVideo / 2)); //offsetting to get right position
    const yWalkVideo = Math.round((y / height *  walkVideo) - (walkVideo / 2));

    text.style.transform = `translate(${xWalkText}px, ${yWalkText}px)`;
    video.style.transform = `translate(${xWalkVideo}px, ${yWalkVideo}px)`;
}

accueil.addEventListener("mousemove", movingElements);