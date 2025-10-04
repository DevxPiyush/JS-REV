 let progressbar = document.querySelector("#progress-bar");
        let status = document.querySelector("#download-status");
        let count = 0;
        let intervalId = null;

        document.querySelector("#download-btn").addEventListener("click", function () {
            if (intervalId !== null) return; // Prevent multiple intervals

            intervalId = setInterval(function () {
                if (count <= 100) {
                    progressbar.style.width = count + "%";
                    status.textContent = `Downloading... ${count} %`;
                    count++;
                } else {
                    clearInterval(intervalId);
                    intervalId = null;
                    status.textContent = "Download Complete!";
                }
            }, 1000);
        });