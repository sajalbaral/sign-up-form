const pwd = document.getElementById('password');
const pwdConfirm = document.getElementById('password-cnfrm');
const message = document.getElementById('message')

let check = () => {
    if(pwd.value == pwdConfirm.value) {
        message.style.color = 'green';
        message.innerText = 'passwords match'
    } else {
        message.style.color = 'red';
        message.innerText = 'passwords do not match';
    }
}