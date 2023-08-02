const password = document.getElementById('password');
const strength = document.getElementById('strength');
const weak = document.querySelector('.weak');
const medium = document.querySelector('.medium');
const strong = document.querySelector('.strong');
const checkBtn = document.getElementById('check-btn');

function checkPassword() {
    const value = password.value;
    const length = value.length;
    let score = 0;

    if (length < 6) {
        score = 1;
    } else if (length < 10) {
        score = 2;
    } else {
        score = 3;
    }

    switch(score) {
        case 1:
            weak.style.backgroundColor = '#ff4757';
            medium.style.backgroundColor = '';
            strong.style.backgroundColor = '';
            break;
        case 2:
            weak.style.backgroundColor = '#ffa502';
            medium.style.backgroundColor = '#ffa502';
            strong.style.backgroundColor = '';
            break;
        case 3:
            weak.style.backgroundColor = '#2ed573';
            medium.style.backgroundColor = '#2ed573';
            strong.style.backgroundColor = '#2ed573';
            break;
    }
}

checkBtn.addEventListener('click', checkPassword);