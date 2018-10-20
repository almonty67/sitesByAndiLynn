

//FaceBook Button//
(function(d, s, id) {
 var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id))return;
      js = d.createElement(s); js.id = id;
         js.src = "http:connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
            fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));


//Twitter Button//

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)    [0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id))  {js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js,fjs); } }(document, 'script', 'twitter-wjs');


$(document).ready(function(){
    //Smooth Scrolling//

  var $root = $('html, body');
    $('.navbar-nav a').click(function(){
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });




    //Stellar
    $(window).stellar();


     //Tool Tips//

    $(function () {
      $('#item1').tooltip();
       $('[data-toggle="tooltip"]').tooltip();
  });

    $("#message-box").on("keyup", function(){
        console.log("keyup happened");//here we make sure we catch the keyup
        var comment = $("#message-box").val();
        var charCount =$("#message-box").val().length; //here we set the length of the content of the textarea to a variable
        console.log(charCount);
        $("#charCount").html(charCount); //running count of character count to the user

        if(charCount > 50) {
           $("#char-count").css("color", "red");
            console.log("over 50");
        } else {
             $("#char-count").css("color", "black");
        }
    });






    $(".btn").on("click", function() {
       console.log("clicked");
        var comment = $("#message-box").val();
        console.log("comment");
        $("#visible-comment").html(comment);
        $("#message-box").hide();
         return false;
    });

      //TextArea//
    $("#message-box").css("border", "2px solid red");

	//work section//
   for(var i = 0; i < works.length; ++i ) {
     $("#work").append("\
     <div class='col-lg-3 col-md-4 col-xs-12'>\
     <a href='" + works[i].url + "' class='work-img'>\
     <img class='img-responsive' src='" + works[i].pic + "'>\
     <span class='info'><p class='project-title'>Title:</p>'" + works[i].title + "'\
     </span>\
      </a>\
     </div>\
     ");
     var images =$("#work img");
     if(i%2===0){
       $(images[i]).css("border", "2px  solid DodgerBlue");
     } else{
       $(images[i]).css("border", "2px solid salmon");
     }
   };

     $(".work-img").mouseenter( function()  {
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
     });

});

//Google Map//
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.541105, lng: -87.473907},
          zoom: 15
        });
    }
