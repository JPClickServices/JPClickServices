// Dark mode toggle with persistence & fade-in on scroll
(function(){
  const DM_BTN = document.getElementById("darkModeToggle");
  function setDM(on) {
    if(on) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
    localStorage.setItem('darkMode', on?"1":"0");
  }
  if(DM_BTN){
    DM_BTN.addEventListener("click", ()=>setDM(!document.body.classList.contains("dark-mode")));
  }
  window.addEventListener('DOMContentLoaded', ()=>{
    setDM(localStorage.getItem('darkMode')==="1");
    // Section fade-in animation
    const sections = document.querySelectorAll('.fade-in-section');
    function reveal() {
      sections.forEach(sec=>{
        if(sec.getBoundingClientRect().top < window.innerHeight - 90){
          sec.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', reveal);
    reveal();
  });
})();