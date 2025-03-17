
function jumpToFAQ() {
    const faqSection = document.getElementById('faq');
    window.location.hash = 'faq';

    setTimeout(() => {
        window.scrollBy(0, -80); 
    }, 10);
}

function toggleAnswer(id) {
    let answer = document.getElementById(id);
    let icon = document.getElementById(id + "-icon");

    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        icon.innerHTML = "&minus;"; // Proper minus sign
    } else {
        answer.classList.add("hidden");
        icon.innerHTML = "&plus;"; // Proper plus sign
    }
}





