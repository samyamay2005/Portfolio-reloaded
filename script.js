
    window.addEventListener("load", function () {
        const preloader = document.getElementById("preloader");
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500); // smooth fade out
    });

