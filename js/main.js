



       // navbar fix top 
       window.addEventListener('scroll', function () {
           if (window.scrollY > 300) {
               document.querySelector('.navbar').classList.add(
                   'fixed-top', 'shadow');
               navheight = document.querySelector('.navbar')
                   .offsetHeight;
               document.body.style.paddingTop = navheight +
                   'px';
           } else {
               document.querySelector('.navbar').classList
                   .remove('fixed-top', 'shadow');
               document.body.style.paddingTop = '0';
           }
       });

       //  scroll buttom to top
       var scroller = document.querySelector('.scrolltop');
       window.addEventListener('scroll', function () {
           if (window.pageYOffset > 500) {
               scroller.style.display = 'block';
           } else {
               scroller.style.display = 'none';
           }
       });
       scroller.addEventListener('click', function () {
           window.scrollTo({
               top: 0
           });
       });  
           
  
       //  pageloder 
   $(window).on('load',function(){
    $('#pageloder').fadeOut(1000);
    $('#wrappar').fadeIn(1000);
});