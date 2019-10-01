$(function() { 
$('a[href^="mailto:"]').each(function() {
this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');

// Remove this line if you don't want to set the email address as link
// text:

this.innerHTML = this.href.replace('mailto:', '');

}); 

});


var $window           = $(window),
       win_height_padded = $window.height() * 1.1;
$window.on('scroll', revealOnScroll);
$window.on('resize', revealOnScroll);
function revealOnScroll() {
     var scrolled = $window.scrollTop();
     $('.revealOnScroll').each(function () {
       var $this     = $(this),
           offsetTop = $this.offset().top;
       var vis = $(this).css('visibility');
       if ($(this).isOnScreen(0.20, 0.20) && (vis === 'hidden')) {
         $(this).css('visibility','visible').hide().fadeIn('fast');
         $(this).removeClass("revealOnScroll");
       }
     });
}
$(document).ready(function(){
    $('.revealOnScroll').each(function () { /* Make the elements visible that are on screen initially. */
      if ($(this).isOnScreen(0.05, 0.05)) {
        $(this).css('visibility', 'visible');
        $(this).removeClass("revealOnScroll");
      }
    });

    var href = window.location.href;
    if(href.indexOf("#Publications") > -1) {
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("current");
        $("a#publications").removeClass("inactive");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    } 
    if(href.indexOf("#") === -1){
        $("a#about").addClass("current");
        $("a#about").removeClass("inactive");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    }
    if(href.indexOf("#Code") > -1) {
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("current");
        $("a#code").removeClass("inactive");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    }
    if(href.indexOf("#Teaching") > -1) {
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("current");
        $("a#teaching").removeClass("inactive");
    }
    if(href.indexOf("#Misc") > -1) {
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("current");
        $("a#misc").removeClass("inactive");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    }
    $("a#about").click(function(){
        $("a#about").addClass("current");
        $("a#about").removeClass("inactive");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    });

    $("a#publications").click(function(){
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("current");
        $("a#publications").removeClass("inactive");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    });
    $("a#code").click(function(){
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("current");
        $("a#code").removeClass("inactive");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    });
    $("a#misc").click(function(){
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("current");
        $("a#misc").removeClass("inactive");
        $("a#teaching").addClass("inactive");
        $("a#teaching").removeClass("current");
    });
    $("a#teaching").click(function(){
        $("a#about").addClass("inactive");
        $("a#about").removeClass("current");
        $("a#publications").addClass("inactive");
        $("a#publications").removeClass("current");
        $("a#code").addClass("inactive");
        $("a#code").removeClass("current");
        $("a#misc").addClass("inactive");
        $("a#misc").removeClass("current");
        $("a#teaching").addClass("current");
        $("a#teaching").removeClass("inactive");
    });

    // Abstract show/hide:
    $("a.abstractToggle").click(function(){
        var state = $(this).hasClass('invisibleAbstract');
        $(this).html(state ? '<span class="fa fa-minus-square-o"> Hide Abstract...' : '<span class="fa fa-plus-square-o"> Abstract...')
               .toggleClass('invisibleAbstract')
               .nextAll("div.abstract").slideToggle('fast');
        // Manually add the class since we can't do it directly within
        // Pandoc:
        $(this).next("div.abstract").find("p").addClass("abstract");
    });
    // Read more expansion:
    $("a.readExpand").click(function(){
        $(this).toggle();
        $(this).parent().nextAll(".readMore").slideToggle('fast');
        $(this).nextAll(".readMore").slideToggle('fast');
    });

    // Setting a waypoint for scroll notifications:
    var waypoint = new Waypoint({
      element: document.getElementById('Publications'),
      offset: 20,
      handler: function(direction) {
        if(direction==='down'){
            $("a#publications").click(); 
        } else {
            $("a#about").addClass("current");
            $("a#about").removeClass("inactive");
            $("a#publications").addClass("inactive");
            $("a#publications").removeClass("current");
            $("a#code").addClass("inactive");
            $("a#code").removeClass("current");
            $("a#misc").addClass("inactive");
            $("a#misc").removeClass("current");
            $("a#teaching").addClass("inactive");
            $("a#teaching").removeClass("current");
        }
     } 
    }) 
    var waypoint2 = new Waypoint({
      element: document.getElementById('Code'),
      offset: 20,
      handler: function(direction) {
        if(direction==='down'){
            $("a#code").click(); 
        } else {
            $("a#publications").addClass("current");
            $("a#publications").removeClass("inactive");
            $("a#code").addClass("inactive");
            $("a#code").removeClass("current");
            $("a#misc").addClass("inactive");
            $("a#misc").removeClass("current");
            $("a#about").addClass("inactive");
            $("a#about").removeClass("current");
            $("a#teaching").addClass("inactive");
            $("a#teaching").removeClass("current");
        }
     } 
    }) 
    var waypoint3 = new Waypoint({
      element: document.getElementById('Teaching'),
      offset: 20,
      handler: function(direction) {
        if(direction==='down'){
            $("a#teaching").click(); 
        } else {
            $("a#publications").addClass("inactive");
            $("a#publications").removeClass("current");
            $("a#code").addClass("current");
            $("a#code").removeClass("inactive");
            $("a#misc").addClass("inactive");
            $("a#misc").removeClass("current");
            $("a#about").addClass("inactive");
            $("a#about").removeClass("current");
            $("a#teaching").addClass("inactive");
            $("a#teaching").removeClass("current");
        }
     } 
    }) 
    var waypoint4 = new Waypoint({
      element: document.getElementById('Misc'),
      offset: 20,
      handler: function(direction) {
        if(direction==='down'){
            $("a#misc").click(); 
        } else {
            $("a#publications").addClass("inactive");
            $("a#publications").removeClass("current");
            $("a#code").addClass("inactive");
            $("a#code").removeClass("current");
            $("a#misc").addClass("inactive");
            $("a#misc").removeClass("current");
            $("a#about").addClass("inactive");
            $("a#about").removeClass("current");
            $("a#teaching").addClass("current");
            $("a#teaching").removeClass("inactive");
        }
     } 
    }) 
});
