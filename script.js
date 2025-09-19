// Lấy các phần tử cần thiết
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var images = document.getElementsByClassName("gallery-img");
var span = document.getElementsByClassName("close")[0];

// Lặp qua tất cả các ảnh trong thư viện
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Khi người dùng bấm vào nút (x) để đóng
span.onclick = function() { 
    modal.style.display = "none";
}

// Khi người dùng bấm ra ngoài ảnh cũng đóng modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// --- Hiệu ứng pháo giấy ---
for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.querySelector(".poster").appendChild(confetti);
}

// --- Hiệu ứng bóng bay ---
for (let i = 0; i < 6; i++) {
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 80 + 10 + "%";
    balloon.style.animationDuration = (Math.random() * 5 + 7) + "s";
    document.querySelector(".poster").appendChild(balloon);
}

// --- Hiệu ứng ngôi sao lấp lánh ---
for (let i = 0; i < 20; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = (Math.random() * 2 + 1) + "s";
    document.querySelector(".poster").appendChild(star);
}

// --- Nhạc nền ---
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Thử phát nhạc khi load (autoplay có thể bị chặn)
window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Trình duyệt chặn autoplay, hãy click nút để bật nhạc.");
    });
});

// Nút bật/tắt nhạc
musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔊 Tắt Nhạc";
    } else {
        music.pause();
        musicBtn.textContent = "🔈 Bật Nhạc";
    }
});
