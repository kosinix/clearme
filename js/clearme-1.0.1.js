/*
 * Clearme jQuery Plugin 1.0.1
 * https://github.com/nicnacks
 * Clears textbox and textarea fields on click
 * Features: Clears field on focus and returns the initial value if it loses focus and value of the field is empty blank. Can be set to clear field on first click and remain blank after losing focus. Upon form submission, the fields that are empty are cleared of the watermark text.
 * Tested: IE7, IE8, Chrome 19, FF12, Safari 5.1.2 Windows, Opera 11.64
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
				restoreValue:true,//restores initial value of the field when it loses focus and value is empty. Set to false for one time clear.
				classUncleared: 'uncleared',//css class when field has not been cleared yet
				classCleared: 'cleared'//css class when field has been cleared
			};
			options = $.extend(true, {}, defaults, options);
			
			return this.each(function() {
				var field = $(this);//jquery object of our select element
				
				if(field.is('input[type=text]') || 'input[type=email]' || field.is('textarea')){//check if its the correct element
					
					if(options.autocomplete==false){
						field.attr('autocomplete','off'); //prevent previous form values to appear on page refresh in Firefox
					}
					
					//init field
					if($.trim(field.val())==''){//input empty = yes
						_unClearMe(field, options);
					}
					//events callbacks
					field.focus(function(){
						if($.trim(field.val())!=''){//input empty = no
							if(!field.data('clearme.cleared')){//clearflag = no
								_clearMe(field, options);
							}
						}
						
					}).blur(function(){
						if($.trim(field.val())==''){//input empty = yes
							if(options.restoreValue){//restoreflag = yes
								_unClearMe(field, options);
							}
						}
					});
					//remove field watermark texts on submit
					field.parents('form').submit(function(){
						$(this).find('input[type=text],input[type=email],textarea').each(function(){
							if($(this).data('clearme.cleared')==false){
								$(this).val('');
							}
						});
					})
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
	function _clearMe(field, options){
		field.data('clearme.cleared', true).val('').removeClass(options.classUncleared).addClass(options.classCleared);
	}
	function _unClearMe(field, options){
		field.data('clearme.cleared', false).val(field.attr('title')).removeClass(options.classCleared).addClass(options.classUncleared);//add watermark texts
	}
})(jQuery);