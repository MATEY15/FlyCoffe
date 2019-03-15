//= jquery.min.js
//= slick.min.js
//= slick-lightbox.min.js
//= jquery.magnific-popup.min.js
//= jquery.maskedinput.min.js
//= jquery.validate.min.js
//= PageScroll2id.min.js
//= jquery.overlayScrollbars.js


$(".nav-scroll li a").mPageScroll2id({
  offset: 0
});

$(document).ready(function() {


  $('.posonal-info').click(function(){
$('.porsone-information').addClass('is-active');
  });
  $('.closed--porsone-information').click(function(){
$('.porsone-information').removeClass('is-active');
  });

  $(function() {
    $('.porsone-scroll').overlayScrollbars({});
  });

  var formValid = $(".main-form, .section--business-model").find('.formValidate');

  var errorRequired = formValid.find('input');
  var errorValueEnd;
  $.each(errorRequired, function(){
    errorValueEnd = $(this).data('required');
  });

  formValid.click(function(){
    $(this).validate({
      rules: {
        email_input: {
          //required: true,
          email: true
        },
        name_input: {
          required: true,
        },
        phone_input: {
          required: true,
        },
        check_input: {
          required: true,
        },
        cyti_input: {
          required: true,
        }
      },
      messages: {
        email_input: {
          required: "Введите E-mail",
          email: "Неверный E-mail"
        },
        name_input: {
          required: "Введите Имя"
        },
        phone_input: {
          required: "Введите Телефон"
        },
        cyti_input: {
          required: "Введите название города"
        },
        check_input: {
          required: "*"
        }
      },
      errorElement: "span",
      submitHandler: function (form) {
       $.ajax({
         type: "POST",
         url: "mail.php",
         data: $(form).serialize(),
         success: function () {
           $.magnificPopup.open({
            items: {
              src: '<div id="go_popup" class="main-form zoom-anim-dialoghid_popup"><div class="one_go_popup"><h4>Ваша заявка отправлена</h4><span>В ближайшее время с Вами свяжется<br>наш сотрудник.</span></div><div class="two_go_popup my_stl_btn"></div></div>',
              type: 'inline'
            }
          });
           $("form").trigger("reset");
           setTimeout(function() {
            $.magnificPopup.close();
          }, 3000);
         }
       });
       return false;
     }
    });
  });

});

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */

/* Masked Input */

$('.phones-mask').mask('+7(999)-999-99-99', {autoclear: false});

/* Masked Input End */

function openModal(id) {
  $(id).css("display", "flex");
  $(id).toggle();
  $(id).fadeIn(300);
  $("#bg-modal").fadeIn(300);
}

$("#bg-modal").on("click", function() {
  $("#bg-modal").fadeOut(300);
  $(".modal").fadeOut(300);
});

function closeModal(id) {
  $(id).fadeOut(300);
  $("#bg-modal").fadeOut(300);
  $(".modal iframe").each(function() {
    var el_src = $(this).attr("src");
    $(this).attr("src", el_src);
  });
}
$("[data-open]").on("click", function() {
  var id = $(this).attr("data-open");
  openModal(id);
});
$("[data-close]").on("click", function(e) {
  var id = $(this).attr("data-close");
  closeModal(id);
});

// $("form").submit(function(e) {
//   e.preventDefault();
//   var form = $(this);
//   var data = form.serializeArray();
//   var dataObject = {};
//   var validate = form.find('[data-req="true"]');
//   var send = true;
//   for (i = 0; i < data.length; i++) {
//     dataObject[data[i].name] = data[i].value;
//   }
//   $.each(validate, function(index, value) {
//     var value = $(value);
//     var key = value.attr("name");
//     if (dataObject[key] == "" || dataObject[key] == null) {
//       value.addClass("js-error");
//       console.log(key);
//       send = false;
//     } else {
//       value.removeClass("js-error");
//     }
//   });
//   if (send) {
//     console.log("Send");
//     cleararray = form.find('[data-clear="true"]');
//     $.each(cleararray, function(index, value) {
//       $(value).val("");
//     });
//     $.ajax(
//     {
//       method: "post",
//       url: "php/send.php",
//       data: data,
//       error: function(xhr, status, error) {
//         console.log(xhr.responseText + "|\n" + status + "|\n" + error);
//       }
//     },
//     "json"
//     );
//     $(".modal").fadeOut(300);
//     openModal("#modal-thx");
//     return false;
//   }
// });

$("#slider-iphone").slick({
  arrows: false,
  asNavFor: $("#slider-instaramm"),
  fade: true,
  draggable: false,
});

$("#slider-instaramm").slick({
  arrows: false,
  asNavFor: $("#slider-iphone"),
  slidesToShow: 4,
  centerMode: true,
  draggable: false,
  autoplay:true,
  mobileFirst:true,
  responsive: [
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 780,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 639,
    settings: {
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 0,
    settings: {
      slidesToShow: 1,
    }
  },
  ]
});

$("#slider-instaramm-next").on("click", function() {
  $("#slider-instaramm").slick("slickPrev");
});

$("#slider-instaramm-prev").on("click", function() {
  $("#slider-instaramm").slick("slickNext");
});

$("#slider-training").slick({
  arrows: false,
  slidesToShow: 2,
  variableWidth: true,
  draggable: false
});

$("#slider-training-next").on("click", function() {
  $("#slider-training").slick("slickPrev");
});

$("#slider-training-prev").on("click", function() {
  $("#slider-training").slick("slickNext");
});

$(".list--faq .list_item").on("click", function(item) {
  if($(item.currentTarget).hasClass("js-active")) {
    $(item.currentTarget).removeClass("js-active");
    $(item.currentTarget).find(".list_answer").slideUp(300);
  } else {
   $(".list--faq .list_item .list_answer").slideUp(300);
   $(item.currentTarget).find(".list_answer").slideDown(300);
   $(".list--faq .list_item").removeClass("js-active");
   $(item.currentTarget).addClass("js-active");
 }
});

$("#slider-cups").slick({
  arrows: false,
  dots: true,
  variableWidth: true,
  slidesToShow: 3,
  centerMode: true,
  draggable: false,
});

$("#slider-cups-next").on("click", function() {
  $("#slider-cups").slick("slickNext");
});

$("#slider-cups-prev").on("click", function() {
  $("#slider-cups").slick("slickPrev");
});

$(".tabs_tab[data-tab-about-plan]").on("click", function(item) {
  var target = $(item.currentTarget);
  var tabs = target.parent().parent();

  $(tabs)
  .find("[data-tab-about-plan]")
  .removeClass("js-active");
  target.addClass("js-active");

  var tabId = target.attr("data-tab-about-plan");
  $(tabs)
  .find(
    ".tabs_tab-content[data-tab-about-plan]:not([data-tab-about-plan=" +
    tabId +
    "])"
    )
  .fadeOut(300);
  $(tabs)
  .find(".tabs_tab-content[data-tab-about-plan=" + tabId + "]")
  .fadeIn(300);
});

var initializeShopDesign = function() {
  var shops = [
  {
    typeName: "Островок",
    cost: ["750", "000"],
    colors: [    {
      color: "#3f4557",
      preview: "island-10.png"
    },
    {
      color: "#8eb863",
      preview: "island-2.png"
    },
    {
      color: "#49495c",
      preview: "island-3.png"
    },
    {
      color: "#a3c9d9",
      preview: "island-4.png"
    },
    {
      color: "#535c7e",
      preview: "island-5.png"
    },
    {
      color: "#212130",
      preview: "island-6.png"
    },
    {
      color: "#4ca2a8",
      preview: "island-7.png"
    },
    {
      color: "#806eb2",
      preview: "island-8.png"
    },
    {
      color: "#dc7341",
      preview: "island-1.png"
    },
    {
      color: "#9bb9c6",
      preview: "island-9.png"
    },
    {
      color: "#faf8f6",
      preview: "island-11.png"
    },
    {
      color: "#f9ed66",
      preview: "island-12.png"
    }
    ]
  },
  {
    typeName: "Уличная",
    cost: ["1750", "000"],
    colors: [
    {
      color: "#a3c9d9",
      preview: "street-4.png"
    },
    {
      color: "#8eb863",
      preview: "street-2.png"
    },
    {
      color: "#49495c",
      preview: "street-3.png"
    },
    {
      color: "#dc7341",
      preview: "street-1.png"
    },
    {
      color: "#535c7e",
      preview: "street-10.png"
    },
    {
      color: "#212130",
      preview: "street-6.png"
    },
    {
      color: "#4ca2a8",
      preview: "street-7.png"
    },
    {
      color: "#806eb2",
      preview: "street-9.png"
    },
    {
      color: "#9bb9c6",
      preview: "street-8.png"
    },
    {
      color: "#536390",
      preview: "street-5.png"
    },
    {
      color: "#faf8f6",
      preview: "street-11.png"
    },
    {
      color: "#f9ed66",
      preview: "street-12.png"
    }
    ]
  },
  {
    typeName: "Полноформатная",
    cost: ["2750", "000"],
    colors: [
    {
      color: "#68bac1",
      preview: "full-10.png"
    },
    {
      color: "#8eb863",
      preview: "full-2.png"
    },
    {
      color: "#49495c",
      preview: "full-3.png"
    },
    {
      color: "#a3c9d9",
      preview: "full-4.png"
    },
    {
      color: "#535c7e",
      preview: "full-5.png"
    },
    {
      color: "#212130",
      preview: "full-6.png"
    },
    {
      color: "#4ca2a8",
      preview: "full-7.png"
    },
    {
      color: "#806eb2",
      preview: "full-8.png"
    },
    {
      color: "#9bb9c6",
      preview: "full-9.png"
    },
    {
      color: "#dc7341",
      preview: "full-1.png"
    },
    {
      color: "#faf8f6",
      preview: "full-11.png"
    },
    {
      color: "#f9ed66",
      preview: "full-12.png"
    }
    ]
  }
  ];

  var tabs = $("#shop-design-tabs");
  var img = $("#shop-design-preview");
  var colors = $("#shop-design-colors");
  var cost = $("#shop-design-cost");
  var type = $("#shop-design-type");

  function setShopType(shopType) {
    colors.empty();
    shopType.colors.forEach(function(color) {
      var preview = color.preview;
      var color = $(
        '<div class="colors_color" style="background-color: ' +
        color.color +
        "; border-color: " +
        color.color +
        ';"></div>'
        );
      colors.append(color);
      color.on("click", function() {
        colors.find(".js-active").removeClass("js-active");
        color.addClass("js-active");
        img.attr("src", "/img/shop/" + preview);
      });
    });

    cost.empty();
    cost.append("<span>" + shopType.cost[0] + "</span>" + shopType.cost[1]);

    type.empty();
    type.append(shopType.typeName);

    colors
    .children()
    .first()
    .trigger("click");
  }

  tabs.empty();
  shops.forEach(function(shopType) {
    var tab = $('<div class="tabs_tab">' + shopType.typeName + "</div>");
    tabs.append(tab);
    tab.on("click", function() {
      tabs.find(".js-active").removeClass("js-active");
      tab.addClass("js-active");
      setShopType(shopType);
    });
  });

  tabs
  .children()
  .first()
  .trigger("click");
  colors
  .children()
  .first()
  .trigger("click");
};

var flipping = new Flipping({
  duration: 1000,
  easing: "ease-in-out"
});

function showCreateOwnCup(id, head, body) {
  $("#create-own-cup")
  .find(".cup_head")
  .attr("src", head);
  $("#create-own-cup")
  .find(".cup_body")
  .attr("src", body);
  $("#create-own-cup").attr("data-flip-key", id);
  $("#create-own-cup").show();
}

function initializeCupDesign() {
  var cups = {
    body: [
    {
      color: "#68bac1",
      preview: "cups-body-10.png"
    },
    {
      color: "#8eb863",
      preview: "cups-body-2.png"
    },
    {
      color: "#49495c",
      preview: "cups-body-11.png"
    },
    {
      color: "#a3c9d9",
      preview: "cups-body-4.png"
    },
    {
      color: "#535c7e",
      preview: "cups-body-5.png"
    },
    {
      color: "#212130",
      preview: "cups-body-8.png"
    },
    {
      color: "#4ca2a8",
      preview: "cups-body-7.png"
    },
    {
      color: "#806eb2",
      preview: "cups-body-3.png"
    },
    {
      color: "#9bb9c6",
      preview: "cups-body-9.png"
    },
    {
      color: "#dc7341",
      preview: "cups-body-6.png"
    },
    {
      color: "#e6e6e5",
      preview: "cups-body-1.png"
    },
    {
      color: "#f9ed66",
      preview: "cups-body-8.png"
    }
    ],
    head: [
    {
      color: "#e6e6e5",
      preview: "cups-head-white.png"
    },
    {
      color: "#212130",
      preview: "cups-head-black.png"
    },
    {
      color: "#8eb863",
      preview: "cups-head-green.png"
    },
    {
      color: "#806eb2",
      preview: "cups-head-purple.png"
    },
    {
      color: "#f9ed66",
      preview: "cups-head-yellow.png"
    },
    {
      color: "#68bac1",
      preview: "cups-head-blue.png"
    }
    ]
  };

  var head = $("#cup-head-design-colors");
  var body = $("#cup-body-design-colors");
  var bodyimg = $("#create-own-cup-body");
  var headimg = $("#create-own-cup-head");

  head.empty();
  body.empty();

  cups.body.forEach(function(color) {
    var preview = color.preview;
    var color = $(
      '<div class="colors_color" style="background-color: ' +
      color.color +
      "; border-color: " +
      color.color +
      ';"></div>'
      );
    body.append(color);
    color.on("click", function() {
      body.find(".js-active").removeClass("js-active");
      color.addClass("js-active");
      bodyimg.attr("src", "/img/cups/" + preview);
    });
  });

  cups.head.forEach(function(color) {
    var preview = color.preview;
    var color = $(
      '<div class="colors_color" style="background-color: ' +
      color.color +
      "; border-color: " +
      color.color +
      ';"></div>'
      );
    head.append(color);
    color.on("click", function() {
      head.find(".js-active").removeClass("js-active");
      color.addClass("js-active");
      headimg.attr("src", "/img/cups/" + preview);
    });
  });

  $("#create-own-cup")
  .find(".cup_head")
  .attr("src", "");
  $("#create-own-cup")
  .find(".cup_body")
  .attr("src", "");

  $("#slider-cups .cup")
  .parent()
  .on("click", function() {
    if ($(this).hasClass("slick-active")) {
      var cupParent = $(this);
      var cup = cupParent.find(".cup");
      var cupId = cup.attr("data-flip-key");
      var head = cup.find(".cup_head").attr("src");
      var body = cup.find(".cup_body").attr("src");
      flipping.read();
      cup.hide();
      showCreateOwnCup(cupId, head, body);
      $("#create-own-cup-screen").addClass("js-active");
      flipping.flip();
      $("#cup-body-design-colors")
      .children()
      .each(function(i) {
        $(this)
        .delay(1600 + 75 * i)
        .queue("fx", function() {
          $(this).addClass("js-visible").dequeue();
        });
      });
      $("#cup-head-design-colors")
      .children()
      .each(function(i) {
        $(this)
        .delay(1800 + 75 * i)
        .queue("fx", function() {
          $(this).addClass("js-visible").dequeue();
        });
      });
    }
  });
  $("#slider-cups .cup").each(function(i) {
    $(this).attr("data-flip-key", i);
  });
}

$(document).ready(function() {
  initializeShopDesign();
  initializeCupDesign();
});

$("#create-cup-open").on("click", function() {
  if (overlay.isAnimating) {
    return false;
  }
  overlay.toggle();
  if (overlay.isOpened) {
    document.body.style.overflowY = "hidden";
    $("#slider-cups").slick("slickGoTo", 0);
    $("#create-cup-screen").addClass("js-active");
    $("#create-cup-screen-title")
    .children()
    .each(function(i) {
      $(this)
      .delay(800 + 75 * i)
      .fadeIn(300);
    });
    $("#slider-cups .cup").each(function(i) {
      if (i < 7) {
        $(this)
        .delay(1000 + 200 * i)
        .fadeIn(1000);
      } else {
        $(this).show();
      }
    });
    $("#slider-cups .slick-dots").addClass("js-active");

    $("#slider-cups-next").addClass("js-active");
    $("#slider-cups-prev").addClass("js-active");
  } else {
    document.body.style.overflowY = "visible";
    $("#create-cup-screen").removeClass("js-active");
    $("#create-cup-screen-title")
    .children()
    .each(function(i) {
      $(this).hide();
    });
    $("#slider-cups .cup").each(function(i) {
      $(this).hide();
    });
    $("#slider-cups .slick-dots").removeClass("js-active");
    $("#slider-cups-next").removeClass("js-active");
    $("#slider-cups-prev").removeClass("js-active");
  }
});

$("#create-cup-screen .logo, .back-item").on("click", function() {
  $("#create-cup-open").trigger("click");
});

$("#create-own-cup-screen .logo, .cup-design_back-item").on("click", function() {
  console.log("3 window");
  $("#create-own-cup-screen").removeClass("js-active");
  showCreateOwnCup("none", "", "");
  $("#slider-cups .cup").each(function(i) {
    $(this).show();
  });
  $("#cup-body-design-colors")
  .children()
  .each(function() {
    $(this).dequeue('fx')
    $(this).removeClass("js-visible");
  });
  $("#cup-head-design-colors")
  .children()
  .each(function() {
    $(this).dequeue('fx')
    $(this).removeClass("js-visible");
  });
});
