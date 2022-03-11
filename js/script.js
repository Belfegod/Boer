const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    320: {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
    480: {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
    640: {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    },
  },
});

/* $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  $(this)
    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
  $(item).each(function(i) {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  })
}; */

/* toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back') */

//Modal

$('.button_main').on('click', function() {
  $('.modal').addClass('active');
});
$('.overlay').on('click', function() {
  $('.modal').removeClass('active');
});



/* $('.button_mini').each(function(i) {
  $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
  })
}); */


function validateForms(form) {
    $(form).validate({
      rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true,
          }
      },
      messages: {
        name: {
          required: "Пожалуйста введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста введите свой номер телефона",
        email: {
          required: "Пожалуйста введите свою почту",
          email: "Неправильно введён адрес почты"
        }
      }
  });
};

validateForms('.feed-form1');
validateForms('.feed-form2');

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});

/* Menu_scr */
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
})

close.addEventListener('click', () => {
    menu.classList.remove('active');
})
//smooth scrol and pageup

/* $(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href=#]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

new WOW().init(); */

$("a[href=#]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

