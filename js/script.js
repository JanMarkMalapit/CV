// js to open tab links

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// sidemenu
var sidemeu= document.getElementById("sidemenu");

function openmenu(){
  sidemeu.style.right = "0";
}
function closemenu(){
  sidemeu.style.right = "-200px";
}
// contact

  const scriptURL = 'https://script.google.com/macros/s/AKfycbylSVkKtJDAapI5hxMwjHkTKuq7U5uObg9X3oFNbmq-k9M7fDhWo-tx58vssMyHLqUz9A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your message was sent successfully,Thank you!"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  let loadMoreBtn = document.querySelector('#see-more');
  let currentItem = 3;

  loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.container .services-list .box')];
    for (var i = currentItem; i < currentItem +3 ; i++){
      boxes[i].style.display = 'inline-block';
    }
      currentItem += 3;

      if(currentItem != boxes.lenght){
        loadMoreBtn.style.display ='none';
     
    }
  }
  
  
  let loadMore = document.querySelector('#more-work');
  let currentItems = 3;  

  loadMore.onclick = () =>{
    let boxWork = [...document.querySelectorAll('.container .work-list .work')];
    for (var i = currentItems; i < currentItems +3 ; i++){
      boxWork[i].style.display = 'inline-block';
    }
      currentItems += 3;

      if(currentItems >= 15){
        loadMore.style.display ='none';
    }
  }

  const dl = document.getElementById("dl");

  dl.onclick = () =>{
  text.innerHTML = "Downloading Please wait thank you!"
  setTimeout(function(){
    text.innerHTML = ""
  },5000)
  dl.reset()
}
// -------------------------------------slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//--------------------------------------------------
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "103380869288780");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v15.0'
  });
};
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));









  