(()=>{
  const script = document.currentScript || [...document.scripts].find(s=>/assets\/app\.js(?:\?|$)/.test(s.src));
  const rootUrl = new URL('../', script.src);
  const site = (path='') => new URL(String(path).replace(/^\/+/,''), rootUrl).href;
  const icon = {
    search:'<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.8-3.8"></path></svg>',
    menu:'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>',
    close:'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"></path></svg>',
    arrow:'<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>'
  };

  const groups = [
    ['School','/about-2/',[
      ['About Broadway','/about-2/'],['Values','/about-2/values/'],['Vision','/about-2/vision/'],['Leadership','/leadership/'],['Governance','/about-2/governing-body/'],['Admissions','/about-2/admissions/'],['Attendance','/about-2/attendance-3/'],['Policies','/about-2/policies/'],['Ofsted','/about-2/ofsted-reports/'],['Statutory information','/about-2/statutory-requirements/'],['Jobs','/job-opportunities/']
    ]],
    ['Learning','/learning/',[
      ['Learning overview','/learning/'],['Curriculum','/new-curriculum-page/'],['Careers','/curriculum/ceiag/'],['SEND','/curriculum/sen/'],['Personal development','/curriculum/psheceiag/'],['More Able','/more-able-students/'],['Exams & results','/exams/']
    ]],
    ['Student life','/student-life/',[
      ['Student life overview','/student-life/'],['Student support','/curriculum/pastoral/'],['Student voice','/student-voice/'],['Student leadership','/student-leadership/'],['Co-curricular','/curriculum/extra-curricular/'],['Music','/broadway-academy-music/'],['Outdoor education','/pool-island/'],['Sport','/sports-academies/'],['Broadway Seven','/our-academy-pledges/']
    ]],
    ['Sixth Form','/sixth-form/',[
      ['Sixth Form','/sixth-form/'],['Sports academies','/sports-academies/'],['Careers','/curriculum/ceiag/'],['Results day','/exams/collecting-results/']
    ]],
    ['Community','/community-2/',[
      ['Community Centre','/community-2/'],['What’s on','/community-2/community-whats-on/'],['Pricing','/community-2/community-centre-pricing/'],['Fitness suite','/community-2/fitness-suite/'],['Room hire','/community-2/function-room-hire/'],['Inter-faith work','/community-2/inter-faith-work/'],['Partners','/community-2/our-partners/']
    ]],
    ['News','/news/',[
      ['Latest news','/news/'],['Newsletters','/news/weekly-news-letters/'],['Term dates & calendar','/calendar/'],['Sports report','/news/broadway-sports-report/']
    ]]
  ];
  const navGroup = (g,i)=>`<div class="navgroup"><button aria-controls="mega-${i}" aria-expanded="false" class="navbtn">${g[0]}</button><div class="mega" id="mega-${i}">${g[2].map(x=>`<a href="${site(x[1])}">${x[0]}</a>`).join('')}</div></div>`;
  const mobileGroup = g=>`<details><summary>${g[0]}</summary>${g[2].map(x=>`<a href="${site(x[1])}">${x[0]}</a>`).join('')}</details>`;

  const headerSlot=document.getElementById('site-header-slot');
  if(headerSlot){
    headerSlot.innerHTML=`<header class="site-header" id="site-header"><div class="head-main">
      <a class="brand" href="${site('')}"><img alt="Broadway Academy crest" src="${site('assets/badge.png')}"><span class="brand-copy"><strong>Broadway Academy</strong><span class="brand-motto">Our Children. Our Community. Believe it can be done.</span></span></a>
      <nav aria-label="Main navigation" class="mainnav">${groups.map(navGroup).join('')}
        <a class="plainnav parents-link" href="${site('about-2/parents/')}">Parents &amp; carers</a>
        <a class="plainnav" href="${site('safeguarding-3/')}">Safeguarding</a>
        <a class="plainnav" href="${site('contact/')}">Contact</a>
        <button aria-label="Search the site" class="iconbtn" data-search-open>${icon.search}</button>
      </nav>
      <button aria-controls="mobile-panel" aria-expanded="false" aria-label="Open menu" class="iconbtn mobile-menu" id="mobile-menu">${icon.menu}</button>
    </div></header>
    <div class="mobile-panel" id="mobile-panel"><div class="mobile-head"><a class="brand" href="${site('')}"><img alt="" src="${site('assets/badge.png')}"><span class="brand-copy"><strong>Broadway Academy</strong></span></a><button aria-label="Close menu" class="iconbtn" id="mobile-close">${icon.close}</button></div>
      ${groups.map(mobileGroup).join('')}
      <div class="utility"><a href="${site('about-2/parents/')}">Parents &amp; carers</a><a href="${site('safeguarding-3/')}">Safeguarding</a><a href="${site('contact/')}">Contact</a><button class="btn btn-light" data-search-open>Search</button></div>
    </div>`;
  }

  const academicYears=[
    {label:'2026–27',start:'2026-09-01',end:'2027-08-31',terms:[
      {name:'Autumn',startText:'1 September',endText:'18 December 2026',halfText:'26–30 October'},
      {name:'Spring',startText:'4 January',endText:'25 March 2027',halfText:'15–19 February'},
      {name:'Summer',startText:'12 April',endText:'21 July 2027',halfText:'31 May–4 June'}
    ]},
    {label:'2027–28',start:'2027-09-01',end:'2028-08-31',terms:[
      {name:'Autumn',startText:'2 September',endText:'17 December 2027',halfText:'25–29 October'},
      {name:'Spring',startText:'4 January',endText:'7 April 2028',halfText:'14–18 February'},
      {name:'Summer',startText:'24 April',endText:'21 July 2028',halfText:'29 May–2 June'}
    ]}
  ];
  const noon=d=>new Date(d+'T12:00:00');
  function academicYearStatus(){
    const now=new Date(); now.setHours(12,0,0,0);
    const current=academicYears.find(y=>now>=noon(y.start)&&now<=noon(y.end));
    if(current) return current;
    const next=academicYears.find(y=>noon(y.start)>now);
    return next||academicYears[academicYears.length-1];
  }
  const academicYear=academicYearStatus();
  const footerSlot=document.getElementById('site-footer-slot');
  if(footerSlot){
    footerSlot.innerHTML=`<footer class="site-footer">
      <div class="footer-term"><div class="wrap footer-term-inner">
        <div class="footer-term-heading"><strong>Term dates ${academicYear.label}</strong></div>
        <div class="footer-term-grid">${academicYear.terms.map(t=>`<div class="footer-term-item"><strong>${t.name}</strong><span>${t.startText}–${t.endText}</span><small>Half-term ${t.halfText}</small></div>`).join('')}</div>
      </div></div>
      <div class="wrap footgrid"><div><h2>Broadway Academy</h2><p>The Broadway, Perry Barr,<br>Birmingham, B20 3DP</p><p><a href="tel:01215664334">0121 566 4334</a><br><a href="mailto:enquiry@broadway-academy.co.uk">enquiry@broadway-academy.co.uk</a></p></div>
      <div><h3>Families</h3><p><a href="${site('about-2/admissions/')}">Admissions</a><br><a href="${site('calendar/')}">Term dates &amp; calendar</a><br><a href="${site('about-2/parents/')}">Parents &amp; carers</a><br><a href="${site('about-2/attendance-3/')}">Attendance</a></p></div>
      <div><h3>Support</h3><p><a href="${site('safeguarding-3/')}">Safeguarding</a><br><a href="${site('curriculum/sen/')}">SEND</a><br><a href="${site('curriculum/pastoral/')}">Student support</a><br><a href="${site('curriculum/ceiag/')}">Careers</a></p></div>
      <div><h3>Website</h3><p><a href="${site('about-2/policies/')}">Policies</a><br><a href="${site('gdpr-privacy-notice-2/')}">Privacy</a><br><a href="${site('cookie-policy/')}">Cookies</a><br><a href="${site('sitemap/')}">Sitemap</a></p></div></div>
      <div class="wrap legal"><span>© Broadway Academy</span><span><a href="https://virticad.sharepoint.com/" rel="noopener" target="_blank">Home for Students <span class="sr-only">(opens in a new tab)</span></a> · <a href="https://outlook.office365.com/owa/" rel="noopener" target="_blank">Staff email <span class="sr-only">(opens in a new tab)</span></a></span></div>
    </footer>`;
  }

  if(!document.getElementById('search-overlay')){
    const holder=document.createElement('div');
    holder.innerHTML=`<div aria-hidden="true" class="search-overlay" id="search-overlay"><div aria-labelledby="search-label" aria-modal="true" class="searchbox" role="dialog"><div class="search-head"><label class="sr-only" for="site-search" id="search-label">Search Broadway Academy pages</label><span aria-hidden="true">${icon.search}</span><input autocomplete="off" id="site-search" placeholder="Search pages…" type="search"><button aria-label="Close search" class="iconbtn" id="search-close">${icon.close}</button></div><div class="search-results" id="search-results"></div></div></div>`;
    document.body.append(...holder.children);
  }

  // Turn intermediate breadcrumb labels into useful section links.
  const crumbs=document.querySelector('.breadcrumbs');
  if(crumbs){
    const map={
      'About Broadway':['About Broadway','about-2/'],
      'Curriculum And Support':['Learning','learning/'],
      'Co And Extra-Curricular':['Student life','student-life/'],
      'Exams And Results':['Exams & results','exams/'],
      'News And Dates':['News & dates','news/'],
      'Community':['Community','community-2/'],
      'Sixth Form':['Sixth Form','sixth-form/'],
      'Website Information':['Website information','sitemap/']
    };
    [...crumbs.children].forEach(el=>{
      const t=(el.textContent||'').trim();
      if(t==='Start Here'){
        const prev=el.previousElementSibling;
        el.remove(); if(prev && prev.tagName==='SPAN' && prev.textContent.trim()==='/') prev.remove();
      } else if(map[t] && el.tagName==='SPAN'){
        const a=document.createElement('a'); a.href=site(map[t][1]); a.textContent=map[t][0]; el.replaceWith(a);
      }
    });
  }


  const siteHeader=document.getElementById('site-header');
  let headerTick=false;
  function updateHeader(){
    headerTick=false;
    if(!siteHeader) return;
    siteHeader.classList.toggle('is-compact', window.scrollY>18);
    const rect=siteHeader.getBoundingClientRect();
    document.documentElement.style.setProperty('--site-header-height', Math.ceil(rect.height)+'px');
  }
  if(siteHeader){
    updateHeader();
    window.addEventListener('scroll',()=>{if(!headerTick){headerTick=true;requestAnimationFrame(updateHeader)}},{passive:true});
    window.addEventListener('resize',updateHeader,{passive:true});
    window.addEventListener('load',updateHeader);
    if('ResizeObserver' in window) new ResizeObserver(updateHeader).observe(siteHeader);
  }

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
  document.querySelectorAll('.navbtn').forEach(btn=>btn.addEventListener('click',()=>{const g=btn.closest('.navgroup');document.querySelectorAll('.navgroup.open').forEach(x=>{if(x!==g){x.classList.remove('open');x.querySelector('.navbtn')?.setAttribute('aria-expanded','false')}});g.classList.toggle('open');btn.setAttribute('aria-expanded',g.classList.contains('open'))}));
  document.addEventListener('click',e=>{if(!e.target.closest('.navgroup'))document.querySelectorAll('.navgroup.open').forEach(g=>{g.classList.remove('open');g.querySelector('.navbtn')?.setAttribute('aria-expanded','false')})});
  function render(){const term=(q?.value||'').trim().toLowerCase();const matches=(term?data.filter(x=>(x.title+' '+x.group+' '+x.path).toLowerCase().includes(term)):data.slice(0,12)).slice(0,24);results.innerHTML=matches.map(x=>`<a class="search-result" href="${site(x.path)}"><span><strong>${x.title}</strong><small>${x.group}</small></span>${icon.arrow}</a>`).join('')||'<p style="padding:1rem">No pages found.</p>'}
  function openSearch(){search?.classList.add('open');search?.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';render();setTimeout(()=>q?.focus(),20)}
  function closeSearch(){search?.classList.remove('open');search?.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  searchBtns.forEach(b=>b.addEventListener('click',openSearch)); searchClose?.addEventListener('click',closeSearch); q?.addEventListener('input',render);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(search?.classList.contains('open'))closeSearch();else if(panel?.classList.contains('open'))closeMenu()} if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}});
})();
