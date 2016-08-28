var getQuote = function() {
$.ajax( {
      url: 'https://crossorigin.me/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      type: 'POST',
      dataType: 'json',
      success: function(data){
        var quote = data[0].content.substring(3, data[0].content.length-5);          
        if(quote.length > 150){
          getQuote();
        } else {   
          var color = colors[Math.floor(Math.random()*20)].hex;
          var author = data[0].title;      
          var uri = 'https://twitter.com/intent/tweet?text='+encodeURIComponent(author+" - "+quote);
          console.log(quote);
          $('.inner-container').fadeOut(1000);  
          setTimeout(function(){ 
            $('body').css( "background-color", color);
            $('body').css( "color", color);
            $('#quote-content').html('<i class="fa fa-quote-left"></i> '+quote);
            $('#quote-title').text('~ ' +author);            
            $('.twitter-share').attr('href', uri);
            $('.button').css( "background-color", color);
            $('.inner-container').fadeIn(2000);
          },1000);         
        }
      },
      cache: false
    } );
};

getQuote();
jQuery( function( $ ) {
  $('#get-another-quote-button').on( 'click', getQuote);
} );


var colors = [    
    {
        "hex": "#78DBE2", 
        "name": "Aquamarine", 
        "rgb": "(120, 219, 226)"
    }, 
    {
        "hex": "#87A96B", 
        "name": "Asparagus", 
        "rgb": "(135, 169, 107)"
    }, 
   
    
    {
        "hex": "#9F8170", 
        "name": "Beaver", 
        "rgb": "(159, 129, 112)"
    }, 
    {
        "hex": "#FD7C6E", 
        "name": "Bittersweet", 
        "rgb": "(253, 124, 110)"
    }, 
   
   
    {
        "hex": "#6699CC", 
        "name": "Blue Gray", 
        "rgb": "(102, 153, 204)"
    }, 
    {
        "hex": "#0D98BA", 
        "name": "Blue Green", 
        "rgb": "(13, 152, 186)"
    }, 
    {
        "hex": "#7366BD", 
        "name": "Blue Violet", 
        "rgb": "(115, 102, 189)"
    }, 
    {
        "hex": "#DE5D83", 
        "name": "Blush", 
        "rgb": "(222, 93, 131)"
    }, 
     
     {
        "hex": "#17806D", 
        "name": "Tropical Rain Forest", 
        "rgb": "(23, 128, 109)"
    },   
    {
        "hex": "#EA7E5D", 
        "name": "Burnt Sienna", 
        "rgb": "(234, 126, 93)"
    }, 
    
   
    {
        "hex": "#1CD3A2", 
        "name": "Caribbean Green", 
        "rgb": "(28, 211, 162)"
    }, 
    {
        "hex": "#FFAACC", 
        "name": "Carnation Pink", 
        "rgb": "(255, 170, 204)"
    }, 
    {
        "hex": "#DD4492", 
        "name": "Cerise", 
        "rgb": "(221, 68, 146)"
    }, 
    {
        "hex": "#1DACD6", 
        "name": "Cerulean", 
        "rgb": "(29, 172, 214)"
    }, 
    {
        "hex": "#BC5D58", 
        "name": "Chestnut", 
        "rgb": "(188, 93, 88)"
    }, 
   
    {
        "hex": "#2B6CC4", 
        "name": "Denim", 
        "rgb": "(43, 108, 196)"
    }, 
   
   {
        "hex": "#CB4154", 
        "name": "Brick Red", 
        "rgb": "(203, 65, 84)"
    },
    {
        "hex": "#71BC78", 
        "name": "Fern", 
        "rgb": "(113, 188, 120)"
    }, 
    {
        "hex": "#6DAE81", 
        "name": "Forest Green", 
        "rgb": "(109, 174, 129)"
    }, 
    {
        "hex": "#C364C5", 
        "name": "Fuchsia", 
        "rgb": "(195, 100, 197)"
    }, 
    {
        "hex": "#CC6666", 
        "name": "Fuzzy Wuzzy", 
        "rgb": "(204, 102, 102)"
    }, 
   
   
];