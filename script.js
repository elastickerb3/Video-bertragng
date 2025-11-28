const videoElement = document.getElementById('webcam');
const errorMsgElement = document.getElementById('errorMsg');

// Zugriff auf Webcam anfordern
async function startWebcam() {
    // Prüfen, ob getUserMedia vom Browser unterstützt wird
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        // Wenn nicht unterstützt, Fehler anzeigen
        if (errorMsgElement) {
            errorMsgElement.textContent = "getUserMedia wird von diesem Browser nicht unterstützt.";
        }
        console.error("getUserMedia wird von diesem Browser nicht unterstützt.");
        return;
    }

    
        // Video-Stream anfordern (nur Video, kein Audio)
    try{ 
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }, // "user" = Frontkamera, "environment" = Rückkamera
            audio: false
        });

        // Stream im Video-Element anzeigen
        videoElement.srcObject = stream;

        setInterval(async () => {
            errorMsgElement.innerHTML="Test";
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(async (blob) => {
                const formData = new FormData();
                formData.append("frame", blob, "frame.jpg");

                await fetch("http://192.168.178.255:8000/", {
                    method: "POST",
                    body: formData
                });
            }, "image/jpeg");
        }, 200);
    }catch(err){  
    
        // Fehler beim Zugriff auf die Webcam
        if (errorMsgElement) {
            errorMsgElement.textContent = err.message;
        }
        console.error("Webcam-Fehler:", err);
    } 
}