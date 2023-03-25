const burger = document.querySelector('.menu-btn');
const menuItem = document.querySelectorAll('.btn');
const mobileMenu = document.querySelector('.menu-box');
const wrapper = document.querySelector('.menu-wrapper');
const headerLogo = document.querySelector('.header_logo');


burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  mobileMenu.classList.toggle('_active');
  wrapper.classList.toggle('_active');
  document.body.classList.toggle('_lock');
  headerLogo.classList.toggle('hidden');
  
})

menuItem.forEach(el => {
  el.addEventListener('click', (e) => {
    if(burger.classList.contains('_active')){
      burger.classList.remove('_active');
      mobileMenu.classList.remove('_active');
      wrapper.classList.remove('_active');
      document.body.classList.remove('_lock');
      headerLogo.classList.toggle('hidden');
     
    }    
  });
});

wrapper.addEventListener('click', () => {
  if(burger.classList.contains('_active')){
    burger.classList.remove('_active');
    mobileMenu.classList.remove('_active');
    wrapper.classList.remove('_active');
    document.body.classList.remove('_lock');
    headerLogo.classList.remove('hidden');
  }    
})