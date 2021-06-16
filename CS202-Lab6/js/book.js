const forms = document.querySelector('.formBook');

forms.addEventListener('submit', e => {
    e.preventDefault();

    const bookDate = forms.bookDate.value;
    const bookDated = forms.bookDated.value;
    const bookEmail = forms.bookEmail.value;
    const bookMessage = forms.bookMessage.value;

    if (bookDate == '') {
        alert("Enter a Valid Arrival Date!");
        forms.bookDate.style.borderColor = "red"
        return false;
    }

    if (bookDated == '') {
        alert("Enter a Valid Departure Date!");
        forms.bookDated.style.borderColor = "red"
        return false;
    }

    if (room == '') {
        alert("Room Feild Must Not Be Empty!");
        forms.room.style.borderColor = "red"
        return false;
    }

    if (guest == '') {
        alert("Enter a Valid Guest Count!");
        forms.guest.style.borderColor = "red"
        return false;
    }

    if (bookEmail == '') {
        alert("Enter a Valid Email Address!");
        forms.bookEmail.style.borderColor = "red"
        return false;
    }

    if (bookMessage == '') {
        alert("Message Feild Must not Be Empty");
        forms.bookMessage.style.borderColor = "red"
        return false;
    }

    forms.submit();

})