(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var pd=$('pl-d');if(pd){var t=new Date();t.setDate(t.getDate()+42);pd.value=t.toISOString().slice(0,10);var ps=$('pl-s'),C=['#183A2E','#B08D57','#7C9A8A','#C4703F','#5B6E8C','#8C6A3E','#A64B4B','#6B8F5E','#4F7C8C','#9C7A3C'];
 function pl(){var s=+ps.value;$('pl-so').textContent=s;var d=new Date(pd.value),now=new Date();now.setHours(0,0,0,0);var days=Math.round((d-now)/864e5);if(isNaN(days))days=0;$('pl-n').textContent=Math.max(0,days);
  var wk=Math.max(1,Math.min(10,Math.ceil(days/7))),o='';if(days<=0){$('pl-w').innerHTML='<p>Pick a date in the future to build your plan.</p>';return;}
  for(var w=1;w<=wk;w++){var ph=w>wk-1?'Rest, light review and past papers':w>wk-3?'Timed practice papers and weak topics':'Cover topics, test yourself as you go';var c='';for(var k=0;k<Math.min(s,7);k++){c+='<i style="--c:'+C[(k+w)%C.length]+';animation-delay:'+(k*40)+'ms"></i>';}o+='<div class="sd-wk"><b>Week '+w+'</b><div>'+c+'</div><span>'+ph+'</span></div>';}
  $('pl-w').innerHTML=o+'<p class="sd-small">About '+Math.max(1,Math.round(s*2/Math.max(1,Math.min(5,wk))))+' sessions per subject each week. Rotate subjects daily.</p>';}
 pd.addEventListener('change',pl);ps.addEventListener('input',pl);pl();}
var dc=[].slice.call(document.querySelectorAll('.sd-dp-c')),dg=document.querySelector('.sd-dp-g');if(dc.length&&!rm){function dp(){if(innerWidth<=1000)return;var r=dg.getBoundingClientRect(),p=(innerHeight-r.top)/(innerHeight+r.height);dc.forEach(function(c){c.style.transform='translate3d(0,'+((p-.5)*+c.getAttribute('data-s')*900).toFixed(1)+'px,0)';});}addEventListener('scroll',dp,{passive:true});dp();}
var NT=[['Cornell','Notes on the right, questions in a narrow left column, a summary across the bottom. Cover the notes and answer the questions to revise.'],['Outline','Main headings with indented points beneath. Fast and tidy for lectures that follow a clear structure.'],['Mind map','A central topic with branches for ideas and sub-ideas. Shows connections at a glance and is great for brainstorming.'],['Charting','A table: items in rows, features in columns. Perfect for comparing theories, periods or experiments side by side.']];
var tb=[].slice.call(document.querySelectorAll('.sd-tabs button'));if(tb.length){var L='';for(var y=40;y<430;y+=22)L+='<line class="ln" x1="10" y1="'+y+'" x2="330" y2="'+y+'"/>';
 var D=['<line class="bx" x1="100" y1="10" x2="100" y2="340"/><line class="bx" x1="10" y1="340" x2="330" y2="340"/><text class="tx" x="20" y="30">CUES</text><text class="tx" x="112" y="30">NOTES</text><text class="tx" x="20" y="366">SUMMARY</text>'+[70,110,160,220].map(function(y){return '<line class="sc" x1="20" y1="'+y+'" x2="80" y2="'+y+'"/>';}).join('')+[60,82,104,148,170,214,236,280].map(function(y,i){return '<line class="sc" x1="'+(i%3?130:115)+'" y1="'+y+'" x2="'+(250+i*8)+'" y2="'+y+'" style="animation-delay:'+(i*80)+'ms"/>';}).join('')+'<line class="sc" x1="20" y1="392" x2="300" y2="392"/>',
 [[40,'I.',30],[62,'',60],[84,'',60],[128,'II.',30],[150,'',60],[172,'',90],[194,'',90],[238,'III.',30],[260,'',60],[282,'',60]].map(function(r,i){return (r[1]?'<text class="tx" x="20" y="'+(r[0]+4)+'">'+r[1]+'</text>':'')+'<line class="sc" x1="'+(r[2]+20)+'" y1="'+r[0]+'" x2="'+(r[2]+170)+'" y2="'+r[0]+'" style="animation-delay:'+(i*70)+'ms"/>';}).join(''),
 '<ellipse class="bx" cx="170" cy="220" rx="50" ry="28"/><text class="tx" x="170" y="225" text-anchor="middle">TOPIC</text>'+[[60,90],[280,90],[50,340],[290,340],[170,390],[170,60]].map(function(p,i){return '<line class="sc" x1="170" y1="220" x2="'+p[0]+'" y2="'+p[1]+'" style="animation-delay:'+(i*90)+'ms"/><circle class="bx" cx="'+p[0]+'" cy="'+p[1]+'" r="16"/>';}).join(''),
 '<rect class="bx" x="20" y="40" width="300" height="300"/>'+[100,160,220,280].map(function(x){return '<line class="bx" x1="'+x+'" y1="40" x2="'+x+'" y2="340"/>';}).join('')+[90,140,190,240,290].map(function(y){return '<line class="bx" x1="20" y1="'+y+'" x2="320" y2="'+y+'"/>';}).join('')+[110,170,230].map(function(x,i){return '<line class="sc" x1="'+x+'" y1="115" x2="'+(x+40)+'" y2="115" style="animation-delay:'+(i*90)+'ms"/><line class="sc" x1="'+x+'" y1="165" x2="'+(x+30)+'" y2="165" style="animation-delay:'+(i*90+200)+'ms"/>';}).join('')];
 function nt(i){tb.forEach(function(b,j){b.setAttribute('aria-selected',i===j?'true':'false');});$('nt-svg').innerHTML=L+D[i];$('nt-o').innerHTML='<h3>'+NT[i][0]+'</h3><p>'+NT[i][1]+'</p>';}
 tb.forEach(function(b,i){b.addEventListener('click',function(){nt(i);});});nt(0);}
})();
