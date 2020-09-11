$(document).ready(function () {


    // Мобильное меню
    const hamburger = document.querySelector('.hamburger');
    const mobNav = document.querySelector('.mobail__nav');
    const overlay = document.querySelector('#overlay');
    const noScroll = document.body;

    hamburger.addEventListener('click', function () {

        this.classList.toggle("active");
        mobNav.classList.toggle("active");
        overlay.classList.toggle("active");
        noScroll.classList.toggle("noscroll");
        console.log(mobNav);
    });

    mobNav.addEventListener('click', function() {

        this.classList.remove('active');
        overlay.classList.remove("active");
        noScroll.classList.remove("noscroll");
        hamburger.classList.remove("active");
    });

    // Закрытие мобильного меню при ресайзе экрана
    window.addEventListener('resize', function(){
        mobNav.classList.remove('active');
        overlay.classList.remove("active");
        noScroll.classList.remove("noscroll");
        hamburger.classList.remove("active");
    })

    //Placeholder формы
    const formInputs = document.querySelectorAll('.form__field');
    for (let item of formInputs) {
        const thisPlaceholder = item.nextElementSibling;
        item.addEventListener('focus', function(){
            thisPlaceholder.classList.add('active');
        });
        item.addEventListener('blur', function(){
            if(item.value == ''){
                thisPlaceholder.classList.remove('active');
            }
        })
    }

    //Фильтр блока портфолио
    let containerEl = document.querySelector('#portfolio-project');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    })

    //Валидация формы
    $('#contact-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            topic: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'отсутсвует символ @'
            },
            theme: {
                required: 'Введите тему сообщения'
            },
            message: {
                required: 'Введите текст сообщения'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    })

    // Подключение точек пагинации справа page-nav
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });

    // Функция AJAX запрса на сервер
    function ajaxFormSubmit() {

        let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

        //Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепочку срабатывания остальных функций
        return false;
    }


});