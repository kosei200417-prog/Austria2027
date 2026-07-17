
const header=document.querySelector('.editorial-header');const bar=document.querySelector('.scroll-progress span');
function ui(){const y=scrollY;header?.classList.toggle('scrolled',y>40);const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h?y/h*100:0)+'%'}
addEventListener('scroll',ui,{passive:true});ui();
const menu=document.querySelector('.menu-button'),mobile=document.querySelector('.mobile-menu');menu?.addEventListener('click',()=>{const o=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.18});document.querySelectorAll('.feature,.stay-card,.food-scroll article').forEach(el=>io.observe(el));
