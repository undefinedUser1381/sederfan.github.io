const $ = document;
// Header text 
const headerText = $.querySelector(".header-content__text");
// Menus Variables
const navLinks = $.querySelector(".nav-links");
const mobileMenu = $.querySelector(".mobile-menu");
const overlay = $.querySelector(".overlay");
// Music Variables
const musicBoxBtn = $.querySelector(".music-box__button");
const musicBox = $.querySelector(".music-box");
const musicBoxClose = $.querySelector(".music-box__close");
const audioElem = $.querySelector("#audio");
const playMusic = $.querySelector("#play");
const stopMusic = $.querySelector("#stop");
const nextMusic = $.querySelector("#next");
const backMusic = $.querySelector("#back");
const singer = $.querySelector(".singer");
const musicName = $.querySelector(".music-name");
// Theme Variables
const themeClose = $.querySelector(".theme-box__close");
const themeBox = $.querySelector(".theme-box");
const themeBoxBtn = $.querySelector(".theme-box__button");
const themes = $.querySelectorAll(".themes");
// Form Variables
const form = $.querySelector(".message-box__form");
const submitBtn = $.querySelector("#submit-btn");

let musics = [
 {name:"FlatLine",singer:"Justin Bieber",src:"./musics/justin_bieber_flatline 128.mp3"},
 {name:"All Around Me",singer:"Justin Bieber",src:"./musics/All_Around_Me.mp3"},
 {name:"Habitual",singer:"Justin Bieber",src:"./musics/Habitual.mp3"},
 {name:"Unastable",singer:"Justin Bieber",src:"./musics/Justin Bieber Unstable (feat. The Kid LAROI) 128.mp3"},
 {name:"Company",singer:"Justin Bieber",src:"./musics/justin-bieber-company.mp3"},
 {name:"Dancing With Your Ghost",singer:"Sasha Sloan",src:"./musics/Sasha-Sloan-Dancing-With-Your-Ghost-128.mp3"}
];

let musicIndex = 0;

let commentsArray = [];

navLinks.addEventListener("click",function(){
    mobileMenu.classList.add("mobile-menu--active");
    overlay.classList.add("overlay--active");
});

overlay.addEventListener("click",function(){
    mobileMenu.classList.remove("mobile-menu--active");
    overlay.classList.remove("overlay--active");
});

musicBoxBtn.addEventListener("click",function(){

   musicBox.classList.add("music-box--open");
   musicBoxClose.addEventListener("click",function(){
    musicBox.classList.add("music-box--close");
    musicBox.classList.remove("music-box--open");
    if(musicBox.classList.contains("music-box--close")){
       musicBox.classList.remove("music-box--close");
    }
   });

  playMusic.addEventListener("click",function(){
     putMusicDetails();
  });

  nextMusic.addEventListener("click",function(){
    musicIndex++;
    if(musicIndex > musics.length-1){
       musicIndex = 0;
    }
    putMusicDetails();
   });

   backMusic.addEventListener("click",function(){
    musicIndex--;
    if(musicIndex < 0){
        musicIndex = 5;
     }
    putMusicDetails();
   });

  stopMusic.addEventListener("click",function(){
    audioElem.pause();
  });

});

function putMusicDetails () {
  audioElem.src = musics[musicIndex].src;
  audioElem.play();
  singer.innerHTML = musics[musicIndex].singer;
  musicName.innerHTML = musics[musicIndex].name;
}

themeBoxBtn.addEventListener("click",function(){
    themeBox.classList.add("theme--open");
    themeClose.addEventListener("click",function(){
      themeBox.classList.add("theme--close");
      themeBox.classList.remove("theme--open");
      if(themeBox.classList.contains("theme--close")){
         themeBox.classList.remove("theme--close");
      }
    });
});

themes.forEach(function(theme){
 theme.addEventListener("click",function(e){
  let themeColor = e.target.dataset.color;
  document.documentElement.style.setProperty("--theme-color",themeColor);
 });
});

form.addEventListener("submit",function(e){
   e.preventDefault();
   submitBtn.value = "پیامت ارسال شد !!";
});

// TypeWriter

let textTypeWriter = new Typewriter(headerText,{
    loop:true
});

textTypeWriter.typeString('سلام من عرفانم!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('من وب دیزاینر هستم')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('و همچنین برنامه نویس فرانت اند!')
    .pauseFor(2500)
    .start();




