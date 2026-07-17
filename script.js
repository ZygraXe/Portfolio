/* ===========================================
   Deepak M Portfolio
   script.js
=========================================== */

/* ===========================================
   Terminal Typing Animation
=========================================== */

const typingElement = document.getElementById("typing");

const commands = [
    "pwd",
    "nmap -sV target",
    "python3 scanner.py",
    "whoami",
    "ls -la",
    "cat report.md",
    "sudo ./exploit.sh",
    "echo \"Hack The Planet\"",
];

let commandIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {

    if (!typingElement) return;

    const currentCommand = commands[commandIndex];

    if (!deleting) {

        typingElement.textContent =
            currentCommand.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentCommand.length) {

            deleting = true;

            setTimeout(typeAnimation, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentCommand.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            commandIndex++;

            if (commandIndex >= commands.length)
                commandIndex = 0;
        }

    }

    setTimeout(typeAnimation, deleting ? 40 : 90);

}

typeAnimation();



/* ===========================================
   Scroll Reveal Animation
=========================================== */

const revealElements = document.querySelectorAll(
    ".section, .stat-card"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/* ===========================================
   Animate Skill Bars
=========================================== */

const bars = document.querySelectorAll(".progress-fill");

let skillsAnimated = false;

function animateBars() {

    if (skillsAnimated) return;

    const skills = document.getElementById("skills");

    if (!skills) return;

    const top = skills.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        bars.forEach(bar => {

            const width = bar.style.width;

            bar.style.width = "0";

            setTimeout(() => {

                bar.style.width = width;

            }, 200);

        });

        skillsAnimated = true;

    }

}

window.addEventListener("scroll", animateBars);

animateBars();



/* ===========================================
   Navbar Active Link
=========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* ===========================================
   Smooth Hover Tilt
=========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8;

        const rotateY = ((x - centerX) / centerX) * -8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});



/* ===========================================
   Animated Counter
=========================================== */

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    if (stats.getBoundingClientRect().top <
        window.innerHeight - 100) {

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 40;

            const update = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText =
                        Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

        counterStarted = true;

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();



/* ===========================================
   Scroll To Top Button
=========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "scrollTop";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:48px;
height:48px;
border:none;
border-radius:50%;
background:#c77dff;
color:#111;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 15px rgba(199,125,255,.5);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500)

        topBtn.style.display = "block";

    else

        topBtn.style.display = "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ===========================================
   Current Year
=========================================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Deepak M • Built with HTML, CSS & JavaScript`;

}



/* ===========================================
   Console Easter Egg 😎
=========================================== */

console.log("%cWelcome, Hacker 👾",
"color:#c77dff;font-size:24px;font-weight:bold;");

console.log(
"Interested in cybersecurity? Let's connect!"
);