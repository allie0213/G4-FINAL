$(document).ready(function(){
  $('#navButton').click(function(){
    if($('.mainMenu.menu').hasClass('open')){
       $('#nav').animate({'background-color':'rgba(0,0,0,.6)'},500);
      $('body').css('overflow','visible');
      $('#navButton').children('i').attr('class', 'fa fa-bars');
      $('.mainMenu.menu').stop().animate({'left':'-100%'},400).removeClass('open');
    }else{
      $('#nav').animate({'background-color':'#020202'},500);
      $('.mainMenu.menu').stop().animate({'left':'0'},400).addClass('open');
      $('body').css('overflow','hidden');
      $('#navButton').children('i').attr('class','fa fa-times');
    }
  })

//會員頭像點擊後出現會員專區選單&登出按鈕
$('#navMemPhoto').click(function(){
  // alert('123');
      $('.subMenu').toggleClass('show');
      // $('.subMenu').slideToggle(500);

    })


})
