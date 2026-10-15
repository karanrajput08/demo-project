function showPage(id){
 document.querySelectorAll('section.page').forEach(s=>s.classList.toggle('active',s.id===id));
 document.querySelectorAll('#mainNav a').forEach(a=>a.classList.toggle('active',a.dataset.page===id));
 document.querySelector('#mainNav').classList.remove('open');
 history.replaceState(null,'','#'+id);
 window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showPage(a.dataset.page)}));
function demoSubmit(event,kind){event.preventDefault();alert(kind+' demo enquiry checked! This prototype does not send or save your details. Connect a secure backend before using it for real enquiries.');event.target.reset();}
window.addEventListener('load',()=>{const id=location.hash.slice(1);if(['home','fyjc','syjc','courses','events'].includes(id))showPage(id)});
