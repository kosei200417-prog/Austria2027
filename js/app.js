const departure=new Date("2027-04-24T00:00:00+09:00");const days=document.querySelector("#days");function updateCountdown(){const difference=departure.getTime()-Date.now();days.textContent=Math.max(0,Math.ceil(difference/86400000)).toLocaleString("ja-JP")}updateCountdown();setInterval(updateCountdown,3600000);

const opening=document.querySelector(".opening");window.addEventListener("load",()=>{setTimeout(()=>{opening.classList.add("hide");document.body.classList.remove("is-loading")},900)});

const header=document.querySelector(".site-header");window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>24),{passive:true});

const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll(".reveal").forEach(element=>revealObserver.observe(element));

const storyImages=document.querySelectorAll(".story-image img");window.addEventListener("scroll",()=>{const center=window.innerHeight/2;storyImages.forEach(img=>{const rect=img.parentElement.getBoundingClientRect();const progress=(center-rect.top)/(window.innerHeight+rect.height);const clamped=Math.max(0,Math.min(1,progress));img.style.setProperty("--scroll-shift",`${(clamped-.5)*12}px`)})},{passive:true});

const menuButton=document.querySelector(".menu-button");const mobileMenu=document.querySelector(".mobile-menu");menuButton.addEventListener("click",()=>{const isOpen=mobileMenu.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(isOpen))});mobileMenu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileMenu.classList.remove("open");menuButton.setAttribute("aria-expanded","false")}));

const tabs=document.querySelectorAll(".mobile-tabbar a");tabs.forEach(tab=>tab.addEventListener("click",()=>{tabs.forEach(item=>item.classList.remove("active"));tab.classList.add("active")}));