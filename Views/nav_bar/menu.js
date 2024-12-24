const menuD = document.querySelector('.menuD');
const menuDespegable = document.querySelector('.menu_despegable')
menuD.addEventListener('click',()=>{
    menuD.classList.toggle("active");
    menuDespegable.classList.toggle("click");
})