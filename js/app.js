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
          var author = data[0].title;      
          var uri = 'https://twitter.com/intent/tweet?text='+encodeURIComponent(author+" - "+quote);
          
          $('.inner-container').fadeOut(1000);  
          setTimeout(function(){ 
            $('#quote-content').html('<i class="fa fa-quote-left"></i> '+quote);
            $('#quote-title').text('~ ' +author);            
            $('.twitter-share').attr('href', uri);
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


