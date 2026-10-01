
(()=>{
 const panel=document.getElementById('mobile-panel');
 const menu=document.getElementById('mobile-menu');
 const close=document.getElementById('mobile-close');
 const search=document.getElementById('search-overlay');
 const searchBtns=[...document.querySelectorAll('[data-search-open]')];
 const searchClose=document.getElementById('search-close');
 const q=document.getElementById('site-search');
 const results=document.getElementById('search-results');
 const data=window.BA_PAGES||[];
 function openMenu(){panel?.classList.add('open');menu?.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';close?.focus()}
 function closeMenu(){panel?.classList.remove('open');menu?.setAttribute('aria-expanded','false');document.body.style.overflow='';menu?.focus()}
 menu?.addEventListener('click',openMenu); close?.addEventListener('click',closeMenu);
 document.querySelectorAll('.navbtn').forEach(btn=>btn.addEventListener('click',e=>{const g=btn.closest('.navgroup');document.querySelectorAll('.navgroup.open').forEach(x=>{if(x!==g)x.classList.remove('open')});g.classList.toggle('open');btn.setAttribute('aria-expanded',g.classList.contains('open'))}));
 document.addEventListener('click',e=>{if(!e.target.closest('.navgroup'))document.querySelectorAll('.navgroup.open').forEach(g=>{g.classList.remove('open');g.querySelector('.navbtn')?.setAttribute('aria-expanded','false')})});
 function render(){const term=(q?.value||'').trim().toLowerCase();const matches=(term?data.filter(x=>(x.title+' '+x.group+' '+x.path).toLowerCase().includes(term)):data.slice(0,12)).slice(0,24);results.innerHTML=matches.map(x=>`<a class="search-result" href="${x.href}"><span><strong>${x.title}</strong><small>${x.group}</small></span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>`).join('')||'<p style="padding:1rem">No pages found.</p>'}
 function openSearch(){search?.classList.add('open');search?.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';render();setTimeout(()=>q?.focus(),20)}
 function closeSearch(){search?.classList.remove('open');search?.setAttribute('aria-hidden','true');document.body.style.overflow=''}
 searchBtns.forEach(b=>b.addEventListener('click',openSearch));searchClose?.addEventListener('click',closeSearch);q?.addEventListener('input',render);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(search?.classList.contains('open'))closeSearch();else if(panel?.classList.contains('open'))closeMenu()} if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}})
})();
