const form = document.querySelector('.contactform')

form.addEventListener('submit' , e => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name == '') {
        alert("Please type in your name");
        form.name.style.borderColor = "red";
        return false;
    }

    if (email == '') {
        alert("Please type in your email");
        form.email.style.borderColor = "red";
        return false;
    }

    if (message == '') {
        alert("Please complete your message");
        form.message.style.borderColor = "red";
        return false;
    }
    
    form.submit();
})