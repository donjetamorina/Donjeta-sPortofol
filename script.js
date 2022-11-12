
function ShowMore()
{
    var seemore = document.getElementById('load-more-div');
    var btn = document.getElementById('load-more-services');
    if (seemore ==="none"){
        btn.innerHTML="See More";
        seemore.style.display='none';
    }
    else{
        btn.style.display='none';
        seemore.style.display='flex';
    }


}

// function sendEmail (){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "donjetam33@gmail.com",
//         Password : "",
//         To : 'donjetam33@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Contact Form",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
