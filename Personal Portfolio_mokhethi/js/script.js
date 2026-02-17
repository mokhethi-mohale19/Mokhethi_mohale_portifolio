/* LOADER */
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

/* NAV SHADOW */
window.addEventListener("scroll",()=>{
const nav=document.querySelector("nav");
if(window.scrollY>50){
nav.style.boxShadow="0 5px 15px rgba(0,0,0,0.2)";
}else{
nav.style.boxShadow="none";
}
});

/* MOBILE MENU */
document.querySelector(".menu-toggle")
.addEventListener("click",()=>{
document.querySelector(".nav-links")
.classList.toggle("active");
});

/* SLIDER */
let slides=document.querySelectorAll('.slide');
let index=0;
setInterval(()=>{
slides.forEach(s=>s.classList.remove('active'));
index=(index+1)%slides.length;
slides[index].classList.add('active');
},4000);

/* TYPING */
const texts=["IT Professional","Software Developer","Business Analyst","AWS Cloud Enthusiast"];
let count=0,char=0,currentText="",isDeleting=false;
function type(){
let el=document.getElementById("typing");
if(count>=texts.length) count=0;
currentText=texts[count];
if(!isDeleting){
el.textContent=currentText.substring(0,char++);
if(char>currentText.length){isDeleting=true;setTimeout(type,1000);return;}
}else{
el.textContent=currentText.substring(0,char--);
if(char<0){isDeleting=false;count++;}
}
setTimeout(type,isDeleting?50:100);
}
type();

/* SKILL ANIMATION */
ScrollReveal().reveal('.progress-bar',{
beforeReveal:(el)=>{el.style.width=el.dataset.width;}
});

/* GITHUB FETCH */
fetch("https://api.github.com/users/YOUR_GITHUB_USERNAME/repos")
.then(res=>res.json())
.then(data=>{
let container=document.getElementById("repo-container");
data.slice(0,4).forEach(repo=>{
container.innerHTML+=`
<div class="project-card">
<h3>${repo.name}</h3>
<p>${repo.description || "No description provided"}</p>
<a href="${repo.html_url}" target="_blank" class="btn">View Repo</a>
</div>
`;
});
});

/* DARK MODE */
document.getElementById("darkModeToggle").addEventListener("click",()=>{
document.body.classList.toggle("dark-mode");
});

