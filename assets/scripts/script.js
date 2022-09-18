  $(document).ready(function() {
        $('.carousel').carousel({
            interval: 5000
        }); 
        $('.carousel').carousel('cycle');
    
   $('#top-nav').onePageNav({
                 currentClass: 'active',
                 changeHash: true,
                 scrollSpeed: 500
                //  filter: ':not(.external)'
            });


});

// navbar background active custom
// var selector = '.nav li';

// $(selector).on('click', function(){
//     $(selector).removeClass('active');
//     $(this).addClass('active');
// });

// navbar custom ended

  // animation
$(window).scroll(function() {
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });


  });


// méthode bourrin pour navbar liens externes
function overridePreventDefault(event) {
  window.open(event.target.href)
}
// Must be called after the load of bootstrap.js
// $('.navbar a[target=_blank]').on("click", overridePreventDefault)

// fix links in navbar one by one
 document.getElementById("idspectacle").onclick = function () {
   location.href = "spectacle.html";
 };
 document.getElementById("idhome").onclick = function () {
   location.href = "index.html";
 };
 document.getElementById("idcours").onclick = function () {
   location.href = "cours_ateliers.html";
 };
 document.getElementById("idgalerie").onclick = function () {
   location.href = "galerie.html";
 };
 document.getElementById("idpartenaires").onclick = function () {
  location.href = "partenaires.html";
};
document.getElementById("iddates").onclick = function () {
  location.href = "dates.html";
};

 document.getElementById("facebooklogo").onclick = function () {
  location.href = "https://www.facebook.com/Le-Poil-Flou-100122569017777/?fref=mentions&__tn__=K-R";
  };



