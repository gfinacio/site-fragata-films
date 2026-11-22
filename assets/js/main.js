gsap.registerPlugin(ScrollTrigger);
const mm=gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)',()=>{
gsap.from('.hero-copy > *',{y:24,opacity:0,duration:1,stagger:.12,ease:'power3.out',delay:.1});
gsap.from('.hero-photo',{opacity:0,scale:.97,duration:1.2,ease:'power3.out'});
gsap.fromTo('.hero-photo img',{yPercent:-4,scale:1.08},{yPercent:4,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
gsap.utils.toArray('[data-reveal]').forEach(el=>gsap.from(el,{y:28,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%'}}));
ScrollTrigger.batch('.item',{start:'top 92%',onEnter:b=>gsap.from(b,{y:30,opacity:0,duration:.9,stagger:.08,ease:'power3.out',overwrite:true})});
});
if(matchMedia('(hover: none)').matches){const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('on',e.isIntersecting)),{rootMargin:'-30% 0px -30% 0px'});document.querySelectorAll('.ph').forEach(e=>io.observe(e));}
