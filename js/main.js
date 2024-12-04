//Create a new Vue instance
new Vue({
el: '.app',
data() {
return {
todoList: [


{"id":0,"title":"1. The Dubliner West Portal","done":false,"location":"328 W Portal Ave, San Francisco, CA 94127", "map":'https://goo.gl/maps/WQhxSxca1cgE1wcs8', "image":'pub-001.jpg', "distance":"0.3 miles, 6 mins (McCarthy's)", "contact":"(415) 566-9444", "quote":"Guinness commissioned a study in 2000, which found that an estimated 162,719 pints go to waste every year via facial hair."},
{"id":1,"title":"2. McCarthy's Irish Bar","done":false,"location":"46 West Portal Ave, San Francisco, CA  94127", "map":'https://goo.gl/maps/jdqSXVLN9ZCZ1JGH7', "image":'pub-00012.jpg', "distance":"0.7 miles, 18 mins (Shannon Arms)", "contact":"(415) 702-6227", "quote":"The Guinness Book of World records was founded in 1954 for the purpose of settling pub disputes."},

{"id":2,"title":"3. Shannon Arms","done":false,"location":"915 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/Y8Vb8JH7xmDgb4So8', "image":'pub-03.jpg', "distance":"0.3 miles, 5 mins (Karl's Beacon)", "contact":"(415) 665-1223", "quote":"Guinness's official color is ruby red. The roasted barley's subtle tint becomes visible when you hold the pint up to the light."},

{"id":3,"title":"4. Karl's Beacon","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://g.page/karlsbeaconbar?share', "image":'pub-005.jpg', "distance":"0.3 miles, 7 mins (O'Briens)", "contact":"(415) 592-9703", "quote":"Ireland ranks third in annual Guinness consumption, following Britain and Nigeria."},


{"id":4,"title":"5. O'Brien's","done":false,"location":"1940 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/1HG8vcK43v2BtR6y7', "image":'pub-006.jpg', "distance":"0.2 miles, 5 mins (Four Deuces)", "contact":"(415) 731-8900", "quote":"Pouring the perfect pint of Guinness takes 119.5 seconds, following six steps, including a nearly two-minute wait for the beer to settle between pours."},

{"id":5,"title":"6. The Four Deuces","done":false,"location":"2319 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/pPV9Xm4WHvgFWEdP8', "image":'pub-007.jpg', "distance":"0.8 miles, 16 mins (Riptide)", "contact":"(415) 566-9122", "quote":"Guinness became vegan in 2017 by removing isinglass, a fish byproduct, from its filtration process. Slainte, vegans!"},


{"id":6,"title":"7. The Riptide","done":false,"location":"3639 Taraval St, San Francisco, CA 94116", "map":'https://goo.gl/maps/cssMXiT4wxoEX4ym9', "image":'pub-0010.jpg', "distance":"Too far, Uber to The Little Shamrock", "contact":"(415) 681-8433", "quote":"Guinness owns five breweries around the world, and they are in Ireland, Malaysia, Nigeria, Ghana, and Cameroon."},

{"id":7,"title":"8. The Little Shamrock","done":false,"location":"807 Lincoln Way, San Francisco, CA 94122", "map":'https://goo.gl/maps/3BXSkJzb3KR74xuy6', "image":'pub-4.jpg', "distance":"0.9 miles, 19 mins (Kezar Pub)", "contact":"(415) 661-0060", "quote":"American Heart Association found that a single pint of Guinness could potentially reduce the risk of cardiovascular incidences."},

{"id":8,"title":"9. Kezar Pub (Wings!)","done":false,"location":"770 Stanyan St, San Francisco, CA 94117", "map":'https://goo.gl/maps/JY5EUQiCi2uwqnM17', "image":'pub-5.jpg', "distance":"0.4 miles, 9 mins (Mad Dog in the Fog)", "contact":"(415) 386-9292", "quote":"The Guinness Storehouse, which was erected in 1904, was the first skyscraper building in the British Isles. "},

{"id":9,"title":"10. The Mad Dog in the Fog","done":false,"location":"530 Haight St, San Francisco, CA 94117", "map":'https://goo.gl/maps/ZDEceBtWNHCBKFr87', "image":'pub-9.jpg', "distance":"Too far, Uber to The Plough and the Stars", "quote":"A Waterloo cavalry officer, Ethel M. Richardson, credited Guinness for aiding his recovery, writing in 1928, When I was well enough to eat, I craved a glass of Guinness."},

{"id":10,"title":"11. The Plough and the Stars","done":false,"location":"116 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/MMv6oGqZvc2mm9299', "image":'pub-11.jpg', "distance":"0.2 miles, 4 mins (Bitter End)", "contact":"(415) 751-1122", "quote":"A 20-ounce pint of Guinness only has 210 calories – that’s less than a glass of milk or orange juice!",},

{"id":11,"title":"12. The Bitter End","done":false,"location":"441 Clement St, San Francisco, CA 94118", "map":'https://goo.gl/maps/fkx1EKaceZhWmvcB9', "image":'pub-0012.jpg', "distance":"Go home - You're drunk!", "contact":"(415) 221-9538", "quote":"Half of all pints drunk in Ireland are Guinness, however, 40% of all Guinness is sold in Africa."},
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

