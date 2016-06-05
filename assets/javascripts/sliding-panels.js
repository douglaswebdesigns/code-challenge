/*  JavaScript Document                      */
/*  Written by Paul Douglas  */

var panelWidth = 0;
var startPanel = 3;

$(document).ready(function(){

	window.panelWidth = $('.sp').width();

	$('.panel-container .panel').each(function(index){

		$(this).css({'width':window.panelWidth+'px','left':(index*window.panelWidth)+'px'});

		$('.sp .panels').css('width',(index+1)*window.panelWidth+'px');

	});
		/*Add click event to items */
		$('.sp .items span').each(function(){
		$(this).on('click', function(){
			changePanels( $(this).index() );
		});
	});

		/* Trigger the first panel */
		$('.sp .items span:nth-child('+window.startPanel+')').trigger('click');

});


function changePanels(newIndex){
	
	var newPanelPosition = ( window.panelWidth * newIndex ) * -1;
	var newPanelHeight = $('.sp .panel:nth-child('+(newIndex+1)+')').find('.panel-content').height() + 0;

	$('.sp .items span').removeClass('selected');
	$('.sp .items span:nth-child('+(newIndex+1)+')').addClass('selected');

	$('.sp .panels').animate({left:newPanelPosition},1000);
	$('.sp .panel-container').animate({height:newPanelHeight},1000);

}



/*
$(document).ready(function(){
   $(".items").click(function(){
      
       $(".step-three").animate();
       $('.sp .items span').addClass('.step-two-img');
       var plusImg = "file:///C:/Sites/www.challenge.dev/assets/images/icons/individual/icons_small_bs3.png";
       var minusImg = "file:///C:/Sites/www.challenge.dev/assets/images/icons/individual/icons_small_bs3_blue.png";        
       $this = $(".step-three img");           
       
       if( $this.attr('src') == plusImg ) { $this.attr('src', minusImg); } 
       else { $this.attr('src', plusImg); }
      
   });
});



$(document).ready(function() {
  $('.items').click(function() {
    if (!$(this).hasClass('selected')) {
      $(this).css('background','url("file:///C:/Sites/www.challenge.dev/assets/images/icons/individual/icons_small_bs3.png")');
      $('.sp .items span:nth-child('+(newIndex+1)+')').addClass('selected')
    } else {
      $(this).css('background','url("file:///C:/Sites/www.challenge.dev/assets/images/icons/individual/icons_small_bs3_blue.png")');
      $(this).toggleClass('selected');
    }
  });
});*/