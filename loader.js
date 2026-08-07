document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const percentText = document.getElementById("loader-percentage");
    let progress = 0;
    
    // Determine which image to load based on screen width
    const isMobile = window.innerWidth <= 768;
    const imgUrl = isMobile ? 'MOBILE%20VIEW.png' : 'ChatGPT%20Image%20Aug%207,%202026,%2006_19_59%20PM.png';
    
    // Create image to trigger preloading
    const img = new Image();
    
    // Simulate loading percentage rapidly
    const progressInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 2; // Jump by 2-10%
        if (progress > 95) progress = 95; // Wait at 95% until image is fully loaded
        percentText.innerText = progress + "%";
    }, 50); // fast updates

    function completeLoading() {
        clearInterval(progressInterval);
        percentText.innerText = "100%";
        
        // Wait a tiny moment to show 100%, then hide loader
        setTimeout(() => {
            loader.classList.add("hidden");
            // Add loaded class to body to trigger CSS text animations
            document.body.classList.add("loaded");
        }, 400); 
    }

    img.onload = () => {
        completeLoading();
    };

    img.onerror = () => {
        // Fallback in case image fails to load (still show the page)
        completeLoading();
    };

    // Start loading the background image
    img.src = decodeURIComponent(imgUrl);
});
