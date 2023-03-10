// my contact-box submit button
btn.addEventListener('click', function(e){
    let show = confirm("Please Confirm Your Details!");
    if(show){
        alert("Your Query is Summited Succesfully!");
    }
    else(
        alert("please check again!")
    )
})