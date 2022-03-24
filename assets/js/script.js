/*  RESPONSIVE SLIDER*/

$(".slider").each(function () {
    var $this = $(this);
    var $group = $this.find(".slide-group");
    var $slides = $this.find(".slide");
    var buttonArray = [];
    var currentIndex = 0;
    var timeout;
  
    function move(newIndex) {
      var animateLeft, slideLeft;
  
      advance();
  
      if ($group.is(":animated") || currentIndex === newIndex) {
        return;
      } //end if
  
      buttonArray[currentIndex].removeClass("active");
      buttonArray[newIndex].addClass("active");
  
      if (newIndex > currentIndex) {
        slideLeft = "100%";
        animateLeft = "-100%";
      } else {
        slideLeft = "-100%";
        animateLeft = "100%";
      } // end if
  
      $slides.eq(newIndex).css({ left: slideLeft, display: "block" });
      $group.animate({ left: animateLeft }, function () {
        $slides.eq(currentIndex).css({ display: "none" });
        $slides.eq(newIndex).css({ left: 0 });
        $group.css({ left: 0 });
        currentIndex = newIndex;
      });
    } // end move function
  
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        if (currentIndex < $slides.length - 1) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
  
    $.each($slides, function (index) {
      var $button = $('<button type="button" class="slide-btn">&bull;</button>');
      if (index === currentIndex) {
        $button.addClass("active");
      }
      $button
        .on("click", function () {
          move(index);
        })
        .appendTo($this.find(".slide-buttons"));
      buttonArray.push($button);
    });
    advance();
  });

  /*  RESPONSIVE SLIDER END */

  /*  GOOGLE MAPS */

  function init () {
    var mapOptions = {
      center: new google.maps.LatLng(51.56300, 0.22009),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoom:13
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

    function loadScript() {
      var script = document.createElement('script');
      script.src = 'http//maps.googleapis.com.maps/api/js?sensor=false&callback=init';
      document.body.appendChild(script);
    }
    
    window.onload = loadScript;
 
