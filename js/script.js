// Get the buttons and the overlay elements
let buttonYes = document.querySelector(".button-yes");
let buttonNo = document.querySelector(".button-no");
let overlay = document.querySelector(".overlay");

// Add a click event listener to the yes button
buttonYes.addEventListener("click", function () {
    // Show the overlay with the thank you message
    overlay.style.display = "flex";
});

// Add a mouseover event listener to the no button
buttonNo.addEventListener("mouseover", function () {
    // Move the no button to a random position
    let randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    let randomY = Math.floor(Math.random() * (window.innerHeight - 50));
    buttonNo.style.position = "absolute";
    buttonNo.style.left = randomX + "px";
    buttonNo.style.top = randomY + "px";
});

document.getElementById('movingButton').addEventListener('click', function () {
    // Генерируем случайные координаты для нового местоположения
    let randomX = Math.floor(Math.random() * (window.innerWidth - 150));
    let randomY = Math.floor(Math.random() * (window.innerHeight - 150));

    // Устанавливаем новые координаты для кнопки
    this.style.top = randomY + 'px';
    this.style.left = randomX + 'px';
});