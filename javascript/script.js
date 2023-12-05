/*
const line=document.querySelector('.threedot-div');
const navbar = document.querySelector('.nev-list');

line.addEventListener('click', () => {
    navbar.classList.toggle('hide');
   // navbar.classList.remove("hide");
  });
  
  */



  const threedot=document.querySelector(".threedot-div");
  const navbar=document.querySelector(".navi");
  const navba=document.querySelector(".navc");
  const navb=document.querySelector(".navb");
  const nava=document.querySelector(".nava");
  const navl=document.querySelector(".navl");
  const navt=document.querySelector(".navt");

  const navClose = document.querySelector(".nav-close");
 // const displayClose = document.querySelector(".display-close");
 // navbar.style.display="none";     

  threedot.addEventListener("click", ()=>{
   navbar.classList.remove("display-close");
    threedot.classList.add("display-close");
    navClose.classList.remove("display-close");
    navbar.style.display="block";
    navba.style.display="block";
    navb.style.display="block";
    nava.style.display="block";
    navl.style.display="block";
    navt.style.display="block";
  // navbar.style.display="none";
  });

  navClose.addEventListener("click", () => {
   navClose.classList.add("display-close");
   threedot.classList.remove("display-close");
    navbar.classList.add("display-close");
   navbar.style.display="none";
   navba.style.display="none";
   navb.style.display="none";
    nava.style.display="none";
    navl.style.display="none";
    navt.style.display="none";
   // */
  });
