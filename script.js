// Fungsi untuk memicu animasi saat elemen masuk ke layar
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Hapus baris di bawah jika ingin animasi hanya sekali saja
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Menjalankan sekali saat halaman dimuat
reveal();