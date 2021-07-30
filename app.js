const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links'); 
const navbarMenu = document.querySelector('.navbar-menu');


toggleButton.addEventListener('click',()=>{  
    navbarMenu.classList.toggle('activate');
    navbarLinks.classList.toggle('activate');  
}); 

const pageWidth = window.innerWidth; 
if(pageWidth > 770){
    removeMedia(8);
}else if(pageWidth > 420){
    removeMedia(6);
}else{
    removeMedia(3);
}
function removeMedia(needMedia){
    const media = document.getElementsByClassName('media');    
    console.log(needMedia);
    for(let ind= 0 ; ind < needMedia ; ind++){
        media[ind].childNodes[0].style.height = '40px'; 
        media[ind].childNodes[0].style.width = '70px'; 
    }
    for(let ind = needMedia ; ind < document.getElementById('platforms-container').childElementCount ; ind++){
        media[ind].style.display = 'none';
    }   

} 
