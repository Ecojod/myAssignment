

const right = document.querySelector('.right');
const navbar = document.querySelector('.navbar');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click', function(){
  right.style.display = 'block';
  navbar.style.height = '100vh';
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
})

closeMenu.addEventListener('click', function(){
  right.style.display = 'none';
  navbar.style.height = '45px';
  closeMenu.style.display = 'none';
  openMenu.style.display = 'block';

})
$('.slider').slick({
  arrows: 'false',
  // autoplay: 'true'
});
      

