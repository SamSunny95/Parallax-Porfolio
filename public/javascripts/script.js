$(document).ready(function(){
  
 var $cssBar = document.getElementById('css-bar');
 var $htmlBar = document.getElementById('html-bar');
 var $jsBar = document.getElementById('js-bar');
  
 /* for(var i=0;i<80;i++)
 {
   $cssBar.className = "avatar-container p-"+ i;
   console.log(i);
   setTimeout(function() {
   }, i*2000);
 } 
 */
 var j=0;
 function bar1(){
   $cssBar.className = "avatar-container p-"+ j;
   if(j++<85){
     setTimeout(bar1,j*j/200);
   }
 }
 
 
 var k=0;
  function bar2(){
   $htmlBar.className = "avatar-container p-"+ k;
   if(k++<91){
     setTimeout(bar2,k*k/200);
   }
 }
 var l=0;

 function bar3(){
   $jsBar.className = "avatar-container p-"+ l;
   if(l++<88){
     setTimeout(bar3,l*l/200);
   }
 }

  // Progress Bar
/*var ProgressBar = require('progressbar.js')
                var bar = new ProgressBar.Circle('#progress-container', {
                strokeWidth: 6,
                easing: 'easeInOut',
                duration: 1400,
                color: '#FFEA82',
                trailColor: '#eee',
                trailWidth: 1,
                svgStyle: null
                });

                bar.animate(1.0); */
  
  
  var isTyped = false;
  var skillsoffset = $('.skills').offset().top;
  //var windowHeight = $(window).height();
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop().valueOf();
    //var skillsDistance =   skillsoffset - wScroll;
	
		$('.banner').css({'transform':'translate(0px,'+ wScroll/1.4 + '%)'});
		$('.banner').css({'-webkit-filter': 'blur('+ wScroll/100 +'px)'})
    $('.code3').css({'-webkit-filter': 'blur('+ wScroll/150 +'px)'})
		$('.code3').css({'transform':'translate(-50px,'+ wScroll/4 +'%)'});
    
    if(!isTyped)
    {
    /*if(skillsDistance < windowHeight/1.2)
    {
      bar1();
      bar2();
      bar3();
      isTyped = true;
    }*/
    
    if($(this).scrollTop()>=$('.skills').position().top/1.3){
        bar1();
      bar2();
      bar3();
      isTyped = true;
    }
    
    }
    
   /* if(!isTyped){
    if(aboutDistance < windowHeight/1.2)
    {
      $(function(){
      $(".typetest").typed({
        strings: ["<p>Here's my story.</p><p>I was born on the 22nd of April in 1996." +
				"</p><p>I started school when I was 5 and graduated High School on march 2014" + 
				"</p><p>I started college in Georgian College, Barrie in September, 2014 and enrolled in the Computer Programmer Diploma Program."+
				"</p><p>I was given the opportunity to work as a web-designer analyst for Avetti-Commerce, Barrie from May till end of August in 2015.</p>"+
				"<p>I'm currently back in college for my 2nd year of Computer Programmer Diploma.</p>"],
        typeSpeed: .1
      });
      });
      isTyped = true;
    }
    }*/
    
	});
	

  
  $(".banner").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});
  $("#home").click(function() {
     $("#wrapper").toggleClass("active");
     $('html,body').animate({
        scrollTop: $(".main-box").offset().top},
        1000);
   });
  $("#about").click(function() {
     $("#wrapper").toggleClass("active");
     $('html,body').animate({
        scrollTop: $(".about").offset().top},
        1000);
   });
   $("#skills").click(function() {
     $("#wrapper").toggleClass("active");
     $('html,body').animate({
        scrollTop: $(".skills").offset().top},
        1000);
   });
   $("#projects").click(function() {
     $("#wrapper").toggleClass("active");
     $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        1000);
   });
   $("#contact").click(function() {
     $("#wrapper").toggleClass("active");
     $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        1000);
   });
/*Menu-toggle*/
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

    /*Scroll Spy*/
    $('body').scrollspy({ target: '#spy', offset:80});

    
});

// Loader
window.addEventListener("load", function(){
  var loader = document.getElementById("loader");
  window.setTimeout(function(){
  document.body.removeChild(loader)
  },500);
  
});





// Avatar
$('.avatar-container').on('click',function(){
  
  if ($(this).find('.info').length <= 0) {
    $(this).append('<div class="info"><div class="info-inner"></div></div>');
  }
  
  var $info = $(this).find('.info'),
      $inner= $(this).find('.info-inner'),
      $p    = $(this).attr("class").match(/p-\w+/).toString().substring(2);
  
  $inner.text($p+'%');
  $info.toggleClass('js-active');
});

