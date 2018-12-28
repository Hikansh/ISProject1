$('a.upload').hover(function(){
    $(this).addClass('btn btn-primary btn-sm');
    },
    function(){
    $(this).removeClass('btn btn-primary btn-sm');
    });

    var myVideo=document.getElementById("video1"); 

function Pause()
{ 
  myVideo.pause(); 
}
function Play()
{
if (myVideo.paused) 
  myVideo.play();     
}   
$('.anim').click(function(){
  $(this).addClass('animated flash'); 
});

$('.sidebar_anchors').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});