(function( $ ){

  var currentTime = new Date();

  var methods = {

	
	
	init : function( options){
		
		var settings = $.extend( {
		  'hours'         : currentTime.getHours(),
		  'minutes'         : currentTime.getMinutes(),
		  'seconds'         : currentTime.getSeconds()
		}, options);
	
		this.geekClock('update',settings);
	},
  
	display: function (options){
		this.empty();
		this.geekClock('hours',options);
		this.append($('<span>').html(':'));
		this.geekClock('minutes',options);
		this.append($('<span>').html(':'));
		this.geekClock('seconds',options);
	},
	
    hours : function(options) {
		var settings = $.extend( {
		  'hours'         : currentTime.getHours()
		}, options);
		

		var h = currentTime.getHours();
		this.append($('<span>').addClass('geekClock-hours').html(settings.hours));

    },
    minutes : function( options) {
		var settings = $.extend( {
		  'minutes'         : currentTime.getMinutes()
		}, options);

		var h = currentTime.getMinutes();
		this.append($('<span>').addClass('geekClock-minutes').html(settings.minutes));

    },
    seconds : function( options) { 
		var settings = $.extend( {
		  'seconds'         : currentTime.getSeconds()
		}, options);
      		
		this.append($('<span>').addClass('geekClock-seconds').html(settings.seconds));

    },
	update : function(options){
		
		currentTime=new Date();
		var self = this;
		setTimeout(
			function (){
			self.geekClock('init');
			self.geekClock('display',options);
			
			}
			,
			1000
		);
	},

  };

  $.fn.geekClock = function( method ) {  
	
	if ( methods[method] ) {
       methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	   return this;
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'method ' +  method + ' does not exist on jQuery.geekClock' );
    }  

  };
  
})( jQuery );