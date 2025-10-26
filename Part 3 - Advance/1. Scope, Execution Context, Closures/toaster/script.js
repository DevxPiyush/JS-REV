function createToaster(config) {
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block  px-6 py-3 rounded shadow-lg pointer-events-none transition-opacity ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-white-800 text-black"}`;
        document.querySelector(".parent").appendChild(div);

        if (config.positionx !== "left" || position !== "top") {
            document.querySelector(".parent").className += `${config.positionx === "right" ? "fixed right-5" : "fixed left-5"} ${config.positiony === "bottom" ? "fixed bottom-5" : "fixed top-5"}`;
        }
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration);
    }
}

let toaster = createToaster({
    positionx: 'right',
    positiony: 'bottom',
    theme: 'dark',
    duration: 3000
});

toaster("Download Done");
setTimeout(() => {
           toaster("New one Generated");
        }, 2000);
