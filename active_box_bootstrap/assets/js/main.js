$(document).ready(function(){
	
	$('.section-slider').slick({
  'dots': true,
  'arrows':false,
  'speed': 500,
  //'fade': true,
  'slidesToShow': 1,
  'slidesToScroll': 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        'slidesToShow': 1,
        'slidesToScroll': 1,
        'dots': true
      }
    },
    {
      breakpoint: 600,
      settings: {
        'slidesToShow': 1,
        'slidesToScroll': 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        'slidesToShow': 1,
        'slidesToScroll': 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down
 */
myNavBar.init(  [
    "header",
    "header-container",
    "brand"
]);

/**
 * Function that manage the direction
 * of the scroll
 */
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

/**
 * bind to the document scroll detection
 */
window.onscroll = function(e) {
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 */
offSetManager();

});
$(document).ready(function(){
        function Anchor(active){
            if(active==true){
                var hash=window.location.hash;
                if(hash){
                    $("#about a").removeClass("active");
                    $("a[href="+hash+"]").addClass("active");
                }
            }
            function AnchorHref(){
                var anchor=$(this);
                if(hash){
                    $("#home a").removeClass("active");
                    anchor.addClass("active");
                }
                $("html, body").animate({
                    scrollTop: $(anchor.attr("href")).offset().top
                }, 500);
            }
            $("a[href*='#']").click(AnchorHref);
        }
        $(Anchor(false));
});﻿