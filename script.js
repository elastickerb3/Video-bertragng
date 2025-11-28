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
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" }, // "user" = Frontkamera, "environment" = Rückkamera
            audio: false
        });

        // Stream im Video-Element anzeigen
        videoElement.srcObject = stream;
    
        // Fehler beim Zugriff auf die Webcam
        if (errorMsgElement) {
            errorMsgElement.textContent = err.message;
        }
        console.error("Webcam-Fehler:", err);
    
}