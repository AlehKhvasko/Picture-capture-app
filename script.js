const videoElement = document.querySelector('#video');
const button = document.querySelector('#button')

// prompt to select media stream, pass to video element
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        console.log(mediaStream);
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    } catch(e){

    }
}


button.addEventListener('click',  async ()=> {
    // Disable button
    button.disabled = true;
    // Start Picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;

})
selectMediaStream();