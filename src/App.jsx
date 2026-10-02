import React,{useState,useEffect,useRef} from 'react';
import PHOTO from './assets/photo.jpg';
import resumeUrl from './assets/Vishakan_S_Resume.pdf';
const h=React.createElement;
const isData=resumeUrl.startsWith('data:');
const L={li:'https://linkedin.com/in/vishakan-s',gh:'https://github.com/vishakan79',lc:'https://leetcode.com/u/5gEMKyWF81',mail:'vishakansundararaj@gmail.com'};
const NAV=[['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['education','Education'],['contact','Contact']];
const SK=[['>_','Languages',['Java','C','SQL','JavaScript']],['{ }','Backend',['Spring Boot','Spring MVC','Spring Security','JWT','REST APIs','Spring Data JPA','Hibernate']],['</>','Frontend',['HTML','CSS','React','Material-UI']],['DB','Databases',['MySQL','SQL']],['AWS','Cloud (basics)',['EC2','S3','RDS','VPC','IAM']],['↗','Deployment',['Render','Netlify','Vercel','Neon']],['Git','Dev tools',['Git','GitHub','Maven','IntelliJ IDEA','Postman']],['DSA','Core concepts',['OOP','Data Structures','Algorithms','Collections','Networking']]];
const PR=[{tag:'FULL STACK · AI',t:'Email AI Reactor',s:'AI email assistant with Gemini integration',d:'A full-stack assistant that uses Gemini AI to write context-aware, tone-specific email replies in real time. REST APIs in Spring Boot call Gemini through Spring WebClient, with a Material-UI frontend and a companion Chrome Extension.',pills:['Gemini AI integration','Chrome extension','Tested by 5+ users'],stack:['Java','Spring Boot','REST APIs','React','Gemini AI','Vercel'],url:'https://smart-email-writter.vercel.app'},
{tag:'FULL STACK · SECURITY',t:'URL Shortener',s:'Secure link shortening with click analytics',d:'A secure URL shortener with Spring Security and JWT authentication. Spring Data JPA and Hibernate over MySQL store URL mappings and click tracking, using a Controller-Service-Repository design validated with Postman.',pills:['JWT authentication','Click analytics','100+ URLs tracked'],stack:['Java','Spring Boot','Spring Security','JWT','MySQL','Hibernate','React','Render','Netlify','Neon'],url:'https://jade-pika-41d1bb.netlify.app'}];
const CERTS=[['JV','Java Core','Udemy'],['JS','JavaScript','Udemy'],['PY','Python','Skills India'],['FS','Full Stack Java Developer','Udemy'],['DSA','Data Structures and Algorithms','Take U Forward'],['LLD','LLD, Networking and DBMS','Take U Forward'],['AWS','Cloud AWS','Udemy']];
const ED=(yr,tag,name,deg,loc,chips,lab,val,sfx)=>h('div',{className:'ed'},
 h('div',{className:'yr'},yr.map((y,i)=>h('div',{key:i},y))),
 h('div',null,h('div',{className:'tg'},tag),h('h3',null,name),h('p',{className:'dg'},deg),h('p',{className:'lc'},loc),chips.length>0&&h('div',{className:'ch',style:{marginTop:18}},chips.map(c=>h('span',{key:c},c)))),
 h('div',{className:'sc'},h('small',null,lab),h('b',null,val),sfx&&h('span',null,sfx)));
const P={li:'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z',gh:'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z',lc:'M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z',ph:'M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z',pin:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',ml:'M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 6.5L2 5.9v-.4zM2 8.2v10.3A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5V8.2l-9.4 6.1a1.2 1.2 0 0 1-1.2 0L2 8.2z'};
const CI=(d,t,href,ext)=>h(href?'a':'span',{href,target:ext?'_blank':undefined,rel:ext?'noopener':undefined},h('span',{className:'ib'},h('svg',{viewBox:'0 0 24 24','aria-hidden':'true'},h('path',{d}))),t);
const TECH=['Java','Spring Boot','REST APIs','JWT','React','MySQL','Hibernate','AWS','Git','Postman'];
const tilt=e=>{const t=e.currentTarget,r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform='perspective(900px) rotateY('+x*8+'deg) rotateX('+(-y*8)+'deg)'};
const untilt=e=>{e.currentTarget.style.transform=''};
function Typer(){const W=['Spring Boot APIs','React frontends','secure JWT backends','cloud deployments'],[s,setS]=useState('');
 useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches){setS(W[0]);return}let i=0,j=0,del=false,t;const tick=()=>{const w=W[i];j+=del?-1:1;setS(w.slice(0,j));let d=del?35:70;if(!del&&j===w.length){del=true;d=1400}else if(del&&j===0){del=false;i=(i+1)%W.length;d=350}t=setTimeout(tick,d)};t=setTimeout(tick,700);return()=>clearTimeout(t)},[]);
 return s}
function Count({v}){const m=/^(\d+)(.*)$/.exec(v),[n,setN]=useState(0),ref=useRef(null);
 useEffect(()=>{if(!m)return;const to=+m[1];let raf;const run=()=>{const t0=performance.now(),f=t=>{const p=Math.min(1,(t-t0)/1400);setN(Math.round(to*(1-Math.pow(1-p,3))));if(p<1)raf=requestAnimationFrame(f)};raf=requestAnimationFrame(f)};
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){setN(to);return}
  const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){io.disconnect();run()}},{threshold:.6});io.observe(ref.current);return()=>{io.disconnect();cancelAnimationFrame(raf)}},[]);
 return h('span',{ref},m?String(n).padStart(m[1].length,'0')+m[2]:v)}
const T=(a,b)=>[a,h('em',null,b)];
const S=(id,cls,n,l,t,kids)=>h('section',{id,className:cls},h('div',{className:'wrap'},h('div',{className:'sh'},h('span',{className:'n'},n),h('div',null,h('div',{className:'lb'},l),h('h2',null,...t))),kids));
function App(){
 const [th,setTh]=useState(document.documentElement.getAttribute('data-theme')||'light');
 const [dl,setDl]=useState(false);
 const [act,setAct]=useState('');
 const [f,setF]=useState({n:'',e:'',m:''});
 useEffect(()=>{document.documentElement.setAttribute('data-theme',th);try{localStorage.setItem('theme',th)}catch(e){}},[th]);
 useEffect(()=>{
  const rm=matchMedia('(prefers-reduced-motion: reduce)').matches,bar=document.getElementById('prog');
  const sc=()=>{const d=document.documentElement;bar.style.transform='scaleX('+(scrollY/Math.max(1,d.scrollHeight-innerHeight))+')'};
  addEventListener('scroll',sc,{passive:true});sc();
  const mm=e=>{const t=e.target.closest&&e.target.closest('.cd,.ed,.ex,.hero');if(!t)return;const r=t.getBoundingClientRect();t.style.setProperty('--mx',e.clientX-r.left+'px');t.style.setProperty('--my',e.clientY-r.top+'px')};
  addEventListener('mousemove',mm,{passive:true});
  let io;
  if(!rm&&'IntersectionObserver' in window){
   const els=[...document.querySelectorAll('.sh,.stats>div,.cd,.pr,.tr,.ed,.cert,.ac li,.fm,.cl>*,.mq')];
   els.forEach((el,i)=>{el.classList.add('rv');el.style.setProperty('--d',(i%4)*.09+'s')});
   io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
   els.forEach(el=>io.observe(el));
  }
  const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)setAct(x.target.id)}),{rootMargin:'-45% 0px -50% 0px'});
  NAV.forEach(n=>{const el=document.getElementById(n[0]);el&&so.observe(el)});
  return()=>{removeEventListener('scroll',sc);removeEventListener('mousemove',mm);io&&io.disconnect();so.disconnect()};
 },[]);
 useEffect(()=>{if(window.claude&&claude.use)claude.use('downloads').then(d=>setDl(!!d)).catch(()=>{})},[]);
 const getResume=async()=>{try{const d=await claude.use('downloads');if(!d)return;const b=atob(resumeUrl.split(',')[1]),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);await d.save({filename:'Vishakan_S_Resume.pdf',data:u})}catch(e){}};
 const resumeEl=(cls,label)=>!isData?h('a',{className:cls,href:resumeUrl,download:'Vishakan_S_Resume.pdf'},label):dl?h('button',{className:cls,onClick:getResume},label):null;
 const send=()=>{location.href='mailto:'+L.mail+'?subject='+encodeURIComponent('Portfolio message from '+f.n)+'&body='+encodeURIComponent(f.m+'\n\n'+f.n+' ('+f.e+')')};
 const inp=(k,ph,tag)=>h(tag||'input',{value:f[k],placeholder:ph,rows:tag?5:undefined,onChange:e=>setF({...f,[k]:e.target.value})});
 const ex=(co,role,dt,body)=>h('div',{className:'tr'},h('div',{className:'dt'},dt),h('div',{className:'rail'},h('i')),h('div',{className:'ex'},h('div',{className:'dm'},dt),h('div',{className:'co'},co),h('h3',null,role),body));
 return h(React.Fragment,null,h('div',{id:'prog',className:'prog'}),
 h('header',{className:'nav'},h('div',{className:'wrap'},h('a',{className:'lg',href:'#top'},h('i',null,'V'),h('span',null,'Vishakan',h('b',null,'.'))),
  h('nav',{className:'lk'},NAV.map(x=>h('a',{key:x[0],href:'#'+x[0],className:act===x[0]?'on':''},x[1]))),
  resumeEl('pill-b','Resume ↓'),
  h('button',{className:'pill-b rnd','aria-label':'Switch light or dark theme',onClick:()=>setTh(th==='dark'?'light':'dark')},th==='dark'?'☀':'☾'))),
 h('nav',{className:'strip'},NAV.map(x=>h('a',{key:x[0],href:'#'+x[0],className:act===x[0]?'on':''},x[1]))),
 h('main',{id:'top'},
  h('section',{className:'hero',style:{padding:'72px 0 110px',borderTop:0}},h('div',{className:'wrap hg'},
   h('div',null,h('span',{className:'open'},'Open to entry-level Software Developer roles'),
    h('div',{className:'eb'},'Electronics & Communication Engineering · 2026'),
    h('h1',null,'Building secure backends ',h('em',null,'that people actually use.')),
    h('p',{className:'lead'},'I\'m Vishakan S, a Java and Spring Boot developer who builds REST APIs, full-stack apps and cloud deployments. An ECE graduate turned software engineer, ready to ship from day one.'),
    h('div',{className:'tp','aria-hidden':'true'},'> I build ',h(Typer),h('i',{className:'cr'})),h('div',{className:'btns'},h('a',{className:'btn p',href:'#projects'},'View projects'),resumeEl('btn','Download resume')||h('a',{className:'btn',href:'#contact'},'Get in touch')),
    h('div',{className:'soc'},[[P.li,L.li,'LinkedIn'],[P.gh,L.gh,'GitHub'],[P.ml,'mailto:'+L.mail,'Email']].map(x=>h('a',{key:x[2],href:x[1],target:x[2]==='Email'?undefined:'_blank',rel:'noopener','aria-label':x[2]},h('svg',{viewBox:'0 0 24 24','aria-hidden':'true'},h('path',{d:x[0]})))))),
   h('div',{className:'vis',onMouseMove:tilt,onMouseLeave:untilt},h('img',{src:PHOTO,alt:'Portrait of Vishakan S in a black blazer'}),
    
    h('div',{className:'code','aria-hidden':'true'},h('div',{className:'wd'},h('i'),h('i'),h('i'),h('span',null,'Vishakan.java')),
     h('pre',null,h('span',{className:'kw'},'public class'),' Developer {\n  String name = ',h('span',{className:'st'},'"Vishakan S"'),';\n  String role = ',h('span',{className:'st'},'"Software Dev"'),';\n  String[] stack = {\n    ',h('span',{className:'st'},'"Java", "Spring Boot",\n    "React", "MySQL", "AWS"'),'\n  };\n}'))))),
  h('div',{className:'mq','aria-hidden':'true'},h('div',{className:'tk'},[...TECH,...TECH].map((x,i)=>h('span',{key:i},x)))),
  S('about','','01','About me',T('Engineering with ','purpose.'),h('div',{className:'ab'},
   h('div',null,h('p',{className:'big'},'I\'m an Electronics & Communication graduate who found my craft in software, turning ideas into secure, working applications.'),h('p',{className:'mu'},'I build with Java, Spring Boot, REST APIs, SQL and React, deploy to Render, Netlify, Vercel and Neon, and sharpen my problem-solving by solving 250+ data structures and algorithms problems. Two internships have taught me to ship to production and learn from code review.')),
   h('div',{className:'stats'},[['02','Internships'],['02','Live projects'],['250+','DSA problems solved'],['1st','Ideathon prize']].map(x=>h('div',{key:x[1]},h('b',null,h(Count,{v:x[0]})),h('span',null,x[1])))))),
  S('skills','dk','02','Technical skills',T('Tools I use to ','build things.'),h('div',{className:'cards'},SK.map(x=>h('div',{className:'cd',key:x[1]},h('div',{className:'ic'},x[0]),h('h3',null,x[1]),h('div',{className:'ch'},x[2].map(c=>h('span',{key:c},c))))))),
  S('projects','','03','Selected work',T('Things I ','built and shipped.'),PR.map((p,i)=>h('article',{className:'pr',key:p.t},h('span',{className:'n'},'0'+(i+1)),h('div',null,h('div',{className:'tg'},p.tag),h('h3',null,p.t),h('p',{className:'sb'},p.s),h('p',{className:'d'},p.d),h('div',{className:'pl'},p.pills.map(x=>h('span',{key:x},x))),h('div',{className:'ch'},p.stack.map(c=>h('span',{key:c},c))),h('a',{className:'live',href:p.url,target:'_blank',rel:'noopener'},'Open live demo ↗'))))),
  S('experience','dk','04','Experience',T('Learning ','on the job.'),h('div',null,
   ex('Signals and Systems Pvt Ltd','Application Engineer Intern','Apr — Jun 2026',h('p',{style:{margin:0,color:'var(--mut)'}},'4 April 2026 to 6 June 2026.')),
   ex('Bluon Tech','Web Development Intern (Remote)','Jun — Sep 2023',h('ul',null,h('li',null,'Built 8+ responsive, cross-browser web pages with HTML, CSS and JavaScript.'),h('li',null,'Delivered 5 feature enhancements to a live production website with a remote engineering team.'),h('li',null,'Applied peer code review feedback to improve code quality.'))))),
  S('education','','05','Education',T('The foundation ','behind the code.'),h('div',null,
   ED(['2023','—','2026'],'BACHELOR OF ENGINEERING','P.S.R Engineering College','Electronics & Communication Engineering','Sivakasi, India',['Data Structures','Algorithms','OOP','Java Collections','Networking Basics'],'CGPA','8.1',' / 10'),
   ED(['2020','—','2023'],'DIPLOMA','P.S.R Polytechnic College','Electronics & Communication Engineering','Sivakasi, India',[],'SCORE','85%',''))),
  S('achievements','','06','Certifications & achievements',['Always learning.',h('br'),'Always ',h('em',null,'building.')],h('div',{className:'cc'},
   h('div',null,h('h3',null,'Certifications'),CERTS.map(c=>h('div',{className:'cert',key:c[1]},h('div',{className:'ci'},c[0]),h('div',null,h('b',null,c[1]),h('small',null,c[2]))))),
   h('div',null,h('h3',null,'Achievements'),h('ul',{className:'ac'},
    h('li',null,h('span',{className:'n'},'01'),h('div',null,h('b',null,'1st Prize, Ideathon'),h('small',null,'Kalasalingam University, Aug 2024. Presented an Advanced Electric Vehicle Charging Technology solution.'))),
    h('li',null,h('span',{className:'n'},'02'),h('div',null,h('b',null,'Participant, Wonders of AI Hackathon'),h('small',null,'Kalasalingam University, Aug 2024. Built AI-based solutions in a 24-hour team hackathon.')))))) ),
  h('section',{id:'contact'},h('div',{className:'wrap'},h('div',{className:'cg'},
   h('div',null,h('div',{className:'lb'},'07 · Let\'s connect'),h('h2',null,'Ready to ',h('em',null,'build together?')),h('p',{className:'mu',style:{marginTop:24}},'I\'m open to Software Developer, Backend and Full Stack roles. Send a message and I\'ll reply soon.'),
    h('div',{className:'cl'},CI(P.ml,L.mail,'mailto:'+L.mail),CI(P.ph,'+91 79042 18754','tel:+917904218754'),CI(P.li,'LinkedIn',L.li,1),CI(P.gh,'GitHub',L.gh,1),CI(P.lc,'LeetCode',L.lc,1),CI(P.pin,'Kovilpatti, Tamil Nadu'))),
   h('div',{className:'fm'},h('div',{className:'r2'},h('label',null,'Name',inp('n','Your name')),h('label',null,'Email',inp('e','you@example.com'))),h('label',null,'Message',inp('m','Tell me about the opportunity...','textarea')),h('button',{className:'send',onClick:send},'Send message ➤')))))),
 h('footer',null,h('div',{className:'wrap'},'Vishakan S. Built with React.')));
}

export default App;
