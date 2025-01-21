function action() {
    let input = document.getElementById('password'); 
    let icon = document.getElementById('icon'); 

    if (input.type === 'password') {
        input.type = 'text'; 
        icon.src = 'asset/eye.png'; 
    } else {
        input.type = 'password';  
        icon.src = 'asset/hide.png'; 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let icon = document.getElementById('icon');
    icon.addEventListener('click', action); 
});