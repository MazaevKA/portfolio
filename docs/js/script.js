// $(document).ready(function () {
//     const hamburger = document.querySelector('.hamburger');
//     const mobNav = document.querySelector('.header__nav');
//     const overlay = document.querySelector('#overlay');
//     const noScroll = document.body;

//     hamburger.addEventListener('click', function () {

//         this.classList.toggle("is-active");
//         mobNav.classList.toggle("is-active");
//         overlay.classList.toggle("is-active");
//         noScroll.classList.toggle("noscroll");
//     });

//     mobNav.addEventListener('click', function() {
//         this.classList.remove('is-active');
//         overlay.classList.remove("is-active");
//         noScroll.classList.remove("noscroll");
//         hamburger.classList.remove("is-active");
//     })
// });

// Form placeholder

const formInputs = document.querySelectorAll('.form__field');
for (let item of formInputs) {
    const thisPlaceholder = item.nextElementSibling;
    console.log(thisPlaceholder);
    item.addEventListener('focus', function(){
        thisPlaceholder.classList.add('active');
    });
    item.addEventListener('blur', function(){
        if(item.value == ''){
            thisPlaceholder.classList.remove('active');
        }
    })
}