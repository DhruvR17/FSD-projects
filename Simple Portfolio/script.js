document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    document.querySelector(".toggle-theme").addEventListener("click", function () {
        document.body.setAttribute(
            "data-theme",
            document.body.getAttribute("data-theme") === "light" ? "dark" : "light"
        );
    });

    // Typewriter Effect
    const text = "Hi, I'm a Web Developer!";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
