/*
 * Clearme jQuery Plugin 1.0.6
 * https://github.com/nicnacks
 * Clears textbox and textarea fields on click
 * Features: Clears field on focus and returns the initial value if it loses focus and value of the field is empty blank. Can be set to clear field on first click and remain blank after losing focus.
 * Tested: IE7, IE8, Chrome 10, FF3, Safari 3.2 windows, Opera 11
 * 
 * Copyright 2012, Nico Amarilla
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($){
	var methods = {
		init : function( options ) {
			//Settings list and the default values
			var defaults = {
				autocomplete:false,//disable firefox default behavior of preserving initial values on refresh
				restoreValue:true//restores initial value of the field when it loses focus and value is empty
			};
			options = $.extend(true, {}, defaults, options);
			
			return this.each(function() {
				var field = $(this);//jquery object of our select element
				
				if(field.is('input[type=text]') || field.is('textarea')){//check if its the correct element
					
					if(options.autocomplete==false){
						field.attr('autocomplete','off'); //prevent previous form values to appear on page refresh in Firefox
					}
					field.addClass('uncleared');
					field.focus(function(){
						if(!$(this).data('cleared')){
							$(this).data('value', $(this).val());
							$(this).data('cleared', true).val('').removeClass('uncleared').addClass('cleared');
						}
					}).blur(function(){
						if($.trim($(this).val())=='' && options.restoreValue){//treat spaces only as blanks too
							$(this).data('cleared', false).val($(this).data('value')).removeClass('cleared').addClass('uncleared');
						}
					});	
				}
			});
		}
	};
	/*** Plugin Main ***/
	$.fn.clearme = function(method) {
		
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.clearme' );
		}
		return false;
	}
	/*** Private Functions Here***/
})(jQuery);