
const bars = document.querySelectorAll(".progress");

bars.forEach(bar => {
    bar.style.width = "0";
    bar.style.transition = "width 1.8s ease";
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll(".progress").forEach(bar => {
                bar.style.width = bar.dataset.width;
            });
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll(".skill-card").forEach(card => {
    observer.observe(card);
});

// CV Download button
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
    downloadBtn.textContent = "Rahila, CV Downloaded ✅";

    setTimeout(() => {
        downloadBtn.textContent = "Download CV";
    }, 3000);
});


// ===============================
// 🚀 EMAILJS CONTACT FORM (FINAL)
// ===============================

emailjs.init("0ddPZBIYvM0dRFTg2");

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    const params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send(
        "service_olstuf4",
        "template_akt7dit",
        params
    )
    .then(() => {
        successMsg.classList.remove("hidden");
        form.reset();

        setTimeout(() => {
            successMsg.classList.add("hidden");
        }, 3000);
    })
    .catch((error) => {
        console.log("Error:", error);
        alert("Message not sent");
    });
});

console.log(emailjs);