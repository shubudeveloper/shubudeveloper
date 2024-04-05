// Gallery Section code...

let slideIndex = 1;
showSlides(slideIndex);
         
function plusSlides(n) 
{
    showSlides(slideIndex += n);
} 
        
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}
         
function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) 
    {
        slideIndex = 1
    }    
    if (n < 1) 
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

//Contact me section code...

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kumarshubham96341@gmail.com",
        Password : "Shubham@246",
        To : 'shubhamkr98355@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form enquiry",
        Body : "Name" + document.getElementById("name").value
             + "<br> Email: " + document.getElementById("email").value
             + "<br> Phone Number: " + document.getElementById("phone").value
             + "<br> Message: " + document.getElementById("message").value
    })
    .then(
    message =>
    {
        if(message=='OK')
        {
            swal("Successfull", "Ypour data is received successfully", "success");
        }
        else
        {
            swal("Something went wrong", "Data is not received", "error");
        }
    });
}


