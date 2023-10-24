document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("textContainer");
    const words = ["Software", "Developer"];
    const colors = ["#db2777", "green"];
    let currentIndex = 0;

    function updateText() {
        textContainer.innerHTML = `Aditya Raj aspiring <span style="color: ${colors[currentIndex]}">${words[currentIndex]}</span>`;
        currentIndex = (currentIndex + 1) % words.length;
        setTimeout(updateText, 1000); // Adjust the delay (in milliseconds) as needed
    }

    updateText();
});
