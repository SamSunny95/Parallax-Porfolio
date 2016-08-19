$(document).ready(function(){
  var isTyped = false;
  var aboutoffset = $('.about').offset().top;
  var windowHeight = $(window).height();
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop().valueOf();
    var aboutDistance =   aboutoffset - wScroll;
    console.log(aboutDistance);
	
		$('.banner').css({'transform':'translate(0px,'+ wScroll/1.4 + '%)'});
		$('.banner').css({'-webkit-filter': 'blur('+ wScroll/100 +'px)'})
    $('.code3').css({'-webkit-filter': 'blur('+ wScroll/150 +'px)'})
		$('.code3').css({'transform':'translate(-50px,'+ wScroll/4 +'%)'});
		//$('.main-box').css({'height': boxHeight - wScroll*2+'px'});
    
    if(!isTyped){
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
    }
    
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
/*Menu-toggle*/
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

    /*Scroll Spy*/
    $('body').scrollspy({ target: '#spy', offset:80});

    
});