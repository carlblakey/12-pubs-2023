//Create a new Vue instance
new Vue({
el: '.app',
data() {
return {
todoList: [


{"id":0,"title":"1. Finnegan's Wake","done":false,"location":"937 Cole St, San Francisco, CA 94117", "map":'https://maps.app.goo.gl/6Zwh5VexXxEX2oUCA', "image":'pub-0007.jpg', "distance":"0.4 miles, 8 mins (Kezar)", "contact":"(415) 731-6119","quote":"Hangover in Norwegian is directly translated to “carpenters in the head.”"},

{"id":1,"title":"2. Kezar Pub (Wings!)","done":false,"location":"770 Stanyan St, San Francisco, CA 94117", "map":'https://goo.gl/maps/JY5EUQiCi2uwqnM17', "image":'pub-5.jpg', "distance":"0.9 miles, 18 mins (Little Shamrock)", "contact":"(415) 386-9292", "quote":"Brewmeister’s Snake Venom is the strongest beer in the world. Its alcohol content is around 65%."},

{"id":2,"title":"3. The Little Shamrock","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://goo.gl/maps/3BXSkJzb3KR74xuy6', "image":'pub-4.jpg', "distance":"0.2 miles, 4 mins (Blackthorn)", "contact":"(415) 661-0060", "quote":"1 in 5 top 100 country music songs refer to alcohol."},

{"id":3,"title":"4. Blackthorn Tavern","done":false,"location":"834 Irving St, San Francisco, CA 94122", "map":'https://goo.gl/maps/2UitTz1sUPzsZPG77', "image":'pub-0009.jpg', "distance":"Too far, Uber time to The Dubliner!", "contact":"(415) 564-6626", "quote":"Fear of an empty glass has a scientific name, Cenosillicaphobia"},


{"id":4,"title":"5. The Dubliner West Portal","done":false,"location":"328 W Portal Ave, San Francisco, CA 94127", "map":'https://goo.gl/maps/WQhxSxca1cgE1wcs8', "image":'pub-001.jpg', "distance":"0.3 miles, 6 mins (McCarthy's)", "contact":"(415) 566-9444", "quote":"Texas state law prohibits taking more than three sips of beer at a time while standing."},

{"id":5,"title":"6. McCarthy's Irish Bar","done":false,"location":"46 West Portal Ave, San Francisco, CA  94127", "map":'https://goo.gl/maps/jdqSXVLN9ZCZ1JGH7', "image":'pub-002.jpg', "distance":"1 mile, 24 mins (Karl's Beacon)", "contact":"(415) 702-6227", "quote":"It is illegal to feed alcohol to Moose in Alaska and fishes in Ohio."},

{"id":6,"title":"7. Karl's Beacon","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://g.page/karlsbeaconbar?share', "image":'pub-005.jpg', "distance":"0.3 miles, 7 mins (O'Briens)", "contact":"(415) 592-9703", "quote":"The term “Dipsomania” refers to abnormal cravings for alcohol."},

{"id":7,"title":"8. O'Brien's","done":false,"location":"1940 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/1HG8vcK43v2BtR6y7', "image":'pub-006.jpg', "distance":"0.2 miles, 5 mins (Four Deuces)", "contact":"(415) 731-8900", "quote":"The pressure in a champagne bottle is 90 pounds per square inch, that is three times the pressure in automobile tires."},

{"id":8,"title":"9. The Four Deuces","done":false,"location":"2319 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/pPV9Xm4WHvgFWEdP8', "image":'pub-007.jpg', "distance":"0.8 miles, 16 mins (Riptide)", "contact":"(415) 566-9122", "quote":"Until 2011, in Russia, anything under 10% alcohol was considered foodstuff and not alcoholic."},

{"id":9,"title":"10. The Riptide","done":false,"location":"3639 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/cssMXiT4wxoEX4ym9', "image":'pub-06.jpg', "distance":"Too far, Uber time to The Plough & Stars!", "contact":"(415) 681-8433", "quote":" A gin & tonic will glow under a UV light because tonic contains quinines, which are UV light reactive."},

{"id":10,"title":"11. The Plough and the Stars","done":false,"location":"116 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/MMv6oGqZvc2mm9299', "image":'pub-11.jpg', "distance":"0.2 miles, 4 mins (Bitter End)", "contact":"(415) 751-1122", "quote":"Germany, instead of Father’s Day, has a “Men’s Day” where men young and old cart wagons filled with booze and food around.",},

{"id":11,"title":"12. The Bitter End","done":false,"location":"441 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/fkx1EKaceZhWmvcB9', "image":'pub-0012.jpg', "distance":"Go home - You're drunk!", "contact":"(415) 221-9538", "quote":"You can swim in a pool of beer at the Schloss Starkenberger brewery in Tarrentz, Austria. "},
],

new_todo: '',
showComplete: true,
};
},
computed: {},
mounted() {
this.getTodos();
},
watch: {
todoList: {
handler: function(updatedList) {
localStorage.setItem('todo_list', JSON.stringify(updatedList));
},
deep: true
}
},
computed:{
pending: function() {
return this.todoList.filter(function(item) {
return !item.done;
})
},
completed: function() {
return this.todoList.filter(function(item) {
return item.done;
}); 
},
completedPercentage: function() {
return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
},
today: function() {
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
  dd = '0'+dd
} 

if(mm<10) {
  mm = '0'+mm
} 

today = {
day: weekday[today.getDay()],
date:  mm + '-' + dd + '-' + yyyy,
}

return(today);
}
},
methods: {
// get all todos when loading the page
getTodos() {
if (localStorage.getItem('todo_list')) {
this.todoList = JSON.parse(localStorage.getItem('todo_list'));
}
},
// add a new item
addItem() {
// validation check
if (this.new_todo) {
this.todoList.unshift({
  id: this.todoList.length,
  title: this.new_todo,
  done: false,
});
}
// reset new_todo
this.new_todo = '';
// save the new item in localstorage
return true;
},
deleteItem(item) {
this.todoList.splice(this.todoList.indexOf(item), 1);
},
toggleShowComplete() {
this.showComplete = !this.showComplete;
},
clearAll() {
this.todoList = [];
}
},
});

// smooth scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// Modal Window
var globalModal = $('.global-modal');
    $( ".btn-green-flat-trigger" ).on( "click", function(e) {
      e.preventDefault();
      $( globalModal ).toggleClass('global-modal-show');
    });
    $( ".overlay" ).on( "click", function() {
      $( globalModal ).toggleClass('global-modal-show');
    });
    $( ".global-modal_close" ).on( "click", function() {
      $( globalModal ).toggleClass('global-modal-show');
    });
    $(".mobile-close").on("click", function(){
      $( globalModal ).toggleClass('global-modal-show');
    });


    // show hide
    $('.Show').click(function() {
      $('#target').show(500);
      $('.Show').hide(0);
      $('.Hide').show(0);
  });
  $('.Hide').click(function() {
      $('#target').hide(500);
      $('.Show').show(0);
      $('.Hide').hide(0);
  });
  $('.toggle').click(function() {
      $('#target').toggle('slow');
  });




  /*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/* Scroll to top when arrow up clicked END */

