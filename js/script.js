
function validateForm() {
    if(document.forms[0].name.value == "") {
         alert('Please enter your name');
         document.forms[0].name.style.border = '2px solid rgb(206, 206, 150)'
         return false;
    }
 
    if(document.forms[0].email.value =="") {
 
         alert('Please enter your email');
         document.forms[0].email.style.border = '2px solid rgb(110, 97, 82)'
         return false;
    }
 
    if(document.forms[0].card.value =="") {
        alert('Please enter your credit card information.');
        document.forms[0].card.style.border = '2px solid rgb(206, 206, 150)'
        return false;
    }

    if(document.forms[0].card1.value =="") {
        alert('Please enter your Security Code.');
        document.forms[0].card1.style.border = '2px solid rgb(206, 206, 150)'
        return false;
    }

    if(document.forms[0].card2.value =="") {
        alert('Please enter your Expiration Date.');
        document.forms[0].card2.style.border = '2px solid rgb(206, 206, 150)'
        return false;
    }

    else{
        alert("purchase successful!");
        return true;
    }
 }