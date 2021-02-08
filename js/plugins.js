$(document).ready(function(){
  
  $(".introduction-text .bcs").click(function()
  {
      $(".introduction-text .coming-soon").fadeIn(600,function(){
          $(this).fadeOut(5000);
      })
  })

})



