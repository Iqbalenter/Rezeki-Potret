const counters = document.querySelectorAll('.count');
const speed = 200;

Array.from(counters).forEach((counter) => {
    function upData() {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        const inc = target / speed;
        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(upData, 1);
        } else {
            counter.innerText = target;
        }
    }
    upData();
});


function Callus() {
    window.open("https://www.instagram.com/rezeki.potret/", "_blank");
}

function facebook() {
    window.open("https://www.facebook.com/profile.php?id=100087801553563", "_blank");
}

function whatsapp() {
    window.open("https://api.whatsapp.com/send/?phone=%2B6283168194438&text&type=phone_number&app_absent=0", "_blank");
}