//=============================
// EARTHVIA PRODUCT V5
//=============================

// Thumbnail Gallery

const mainImage = document.getElementById("mainImage");

const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb)=>{

thumb.addEventListener("click",()=>{

thumbs.forEach((t)=>t.classList.remove("active"));

thumb.classList.add("active");

mainImage.src = thumb.src;

});

});

//=============================
// Quantity
//=============================

const qtyBox = document.querySelector(".quantity span");

const qtyBtns = document.querySelectorAll(".quantity button");

let qty = 1;

qtyBtns[0].onclick = ()=>{

if(qty>1){

qty--;

qtyBox.innerText=qty;

}

};

qtyBtns[1].onclick = ()=>{

qty++;

qtyBox.innerText=qty;

};

//=============================
// Wishlist
//=============================

const wishlistBtn = document.querySelector(".extra button");

let liked=false;

wishlistBtn.onclick=()=>{

liked=!liked;

wishlistBtn.innerHTML=

liked?

"❤ Wishlisted"

:

"♡ Wishlist";

};

//=============================
// Share
//=============================

const shareBtn=document.querySelectorAll(".extra button")[1];

shareBtn.onclick=()=>{

if(navigator.share){

navigator.share({

title:"Earthvia Glow Soap",

text:"Check out Earthvia Glow Soap",

url:window.location.href

});

}else{

navigator.clipboard.writeText(window.location.href);

alert("Product link copied!");

}

};

//=============================
// Mobile Menu
//=============================

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

menu.onclick=()=>{

nav.classList.toggle("show");

};

//=============================
// Buy Button
//=============================

document.querySelector(".buy").onclick=(e)=>{

e.preventDefault();

window.location.href="https://wa.me/919978402702?text=Hi%20Earthvia,%20I%20want%20to%20order%20Earthvia%20Glow%20Soap.";

};

//=============================
// WhatsApp Button
//=============================

document.querySelector(".whatsapp").onclick=(e)=>{

e.preventDefault();

window.open("https://wa.me/919978402702","_blank");

};

//=============================
// Sticky Navbar Shadow
//=============================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>20){

navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow="none";

}

});

//=============================
// Fade Animation
//=============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(

".benefit-card,.ingredient,.review-card,.related-card,.step,.trust-item"

).forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});

