// let home = document.getElementsByClassName('home');
// let about = document.getElementsByClassName('about');
// let services = document.getElementsByClassName('services');
// let portfolio = document.getElementsByClassName('portfolio');
// let contact = document.getElementsByClassName('contact');

// let showhome = document.getElementsByClassName('showhome');
// let showabout = document.getElementsByClassName('showabout');
// let showservices = document.getElementsByClassName('showservices');
// let showportfolio = document.getElementsByClassName('showportfolio');
// let showcontact = document.getElementsByClassName('showcontact');
// let a = document.querySelector('a');

// a.addEventListener('click', ()=>
// {
//     if(showhome.style.display==='none')
//     {
//         showhome.style.display= 'block';
//     }
//     elseif(showabout.style.display==='none')
//     {
//         showabout.style.display= 'block';
//     }
//     elseif(showservices.style.display==='none')
//     {
//         showservices.style.display= 'block';
//     }
//     elseif(showportfolio.style.display==='none')
//     {
//         showportfolio.style.display= 'block';
//     }
//     else(showcontact.style.display==='none')
//     {
//         showcontact.style.display= 'block';
//     }
// })

// const parent = document.querySelector('.box-container-services');

// parent.addEventListener('click', event->{

//     const current = event.target;

//     const showMore = current.className.includes('load-more-services');

//     if(!showMore) return;

//     const showDivs = event,target.parentNode.querySelector('.load-more-div');

   
// })
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