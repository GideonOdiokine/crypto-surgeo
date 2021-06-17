$(document).ready(function(){
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
  //Calculator
  function calc1(){
    money = parseFloat($("#money1").val());

    if( (money >= 125 && money <= 3000)){
        var profitDaily1 = money / 100 * 300;
        var profitDaily1 = profitDaily1.toFixed(2);

        $("#profitDaily1").text(profitDaily1);

      } if (money < 125 || money > 3001) {
        $("#profitDaily4").text("Error!");

      }
  }
  function calc2(){
    money = parseFloat($("#money2").val());

    if( (money >= 30 && money <= 3000)){
        var profitDaily2 = money / 100 * 650;
        var profitDaily2 = profitDaily2.toFixed(2);

$("#profitDaily2").text(profitDaily2);

      } if (money < 30 || money > 3001) {
        $("#profitDaily2").text("Error!");

    }

  }
  function calc3(){
    money = parseFloat($("#money3").val());

    if( (money >= 250 && money <= 30000)){
        var profitDaily3 = money / 100 * 3500;
        var profitDaily3 = profitDaily3.toFixed(2);


        $("#profitDaily3").text(profitDaily3);
      } if (money < 250 || money > 30000) {
        $("#profitDaily3").text("Error!");

       }
  }
  function calc4(){
    money = parseFloat($("#money4").val());

    if (money >= 1000 && money <= 300000) {
        var profitDaily4 = money / 100 * 8500;
        var profitDaily4 = profitDaily4.toFixed(2);

        
        $("#profitDaily4").text(profitDaily4);

      } if (money < 1000 || money > 300001) {
        $("#profitDaily4").text("Error!");
      }
  }
  if($("#money1").length){
    calc1();
  }
  $("#money1").keyup(function(){
    calc1();
  });
  if($("#money2").length){
    calc2();
  }
  $("#money2").keyup(function(){
    calc2();
  });
   if($("#money3").length){
    calc3();
  }
  $("#money3").keyup(function(){
    calc3();
  });
  if($("#money4").length){
    calc4();
  }
  $("#money4").keyup(function(){
    calc4();
  });
});
