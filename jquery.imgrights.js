/*!
 * jQuery IMGRights Plugin v1.0
 * http://jeka-kiselyov.github.com/jquery-imgrights/
 *
 * Copyright 2012, Jeka Kiselyov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 * Requires: 1.4.3+
 */
(function($) {

	$.fn.imgrights = function(options) {

		var settings = {
			format       : "&copy; <a href='%copyright_url%'>%copyright%</a>",
			hideTimeout : 1000,
			showSpeed   : "fast",
			hideSpeed   : "fast"
		};

		if(options) {
			$.extend(settings, options);
		}

		return this.each(function() {
			var $this = $(this);
			var $img = $this;
			var copyright_name = "";
			var copyright_url = "";

			if (this.nodeName.toLowerCase() != "img" && !$this.hasClass('hmedia'))
				return;

			if (this.nodeName.toLowerCase() == 'img' && typeof ($this.data) == 'function' && ($this.data('copyright') || $this.data('copyright-url')))
			{
				copyright_name = $this.data('copyright');
				copyright_url = $this.data('copyright-url');
			} else if ($this.hasClass('hmedia') && $('img', $this).length && $('.contributor', $this).length)
			{
				$img = $('img.photo', $this);
				copyright_name = $('.contributor>.fn', $this).text();
				copyright_url = $('.contributor>.url').attr('href');
			} else
				return;

			if (typeof(copyright_url) == 'undefined')
				copyright_url = '';
			if (typeof(copyright_name) == 'undefined')
				copyright_name = '';

			if (!copyright_name && !copyright_url)
				return;

			$img.data('copyright_name', copyright_name);
			$img.data('copyright_url', copyright_url);

			$img.mouseenter(function() {

				if (!$('#imgrights_popup_div').length)
				{
					$("<div id='imgrights_popup_div'></div>").appendTo('body').css('position', 'absolute').css('z-index','9999').css('color', 'black').css('padding', '1px 8px 1px 8px');
					$('#imgrights_popup_div').css('background', "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8+PX/GQAJdwOz7+Id3gAAAABJRU5ErkJggg==')");
					$('#imgrights_popup_div').css('border-radius', '2px');
				}

				var image_offset = $(this).offset();
				var popup_x = image_offset.left + $(this).width() - 5;
				var popup_y = image_offset.top + $(this).height() - 5;

				// Add formatted html into popup
				$('#imgrights_popup_div').html(settings.format.split('%copyright%').join($.data(this, "copyright_name")).split('%copyright_url%').join($.data(this, "copyright_url")));

				// Remove A tag, if copyright URL is empty
				if (!$.data(this, "copyright_url"))
					$('a', '#imgrights_popup_div').replaceWith($('a', '#imgrights_popup_div').contents());

				$('#imgrights_popup_div').css('left', (popup_x - $('#imgrights_popup_div').width() - 16 )+"px");  // 16, 2 - paddings*2
				$('#imgrights_popup_div').css('top', (popup_y - $('#imgrights_popup_div').height() - 2 )+"px");
				$('#imgrights_popup_div').fadeIn(settings.showSpeed);

				// mouuseenter from image to div
				$('#imgrights_popup_div').mouseenter(function(){
					clearTimeout( $('#imgrights_popup_div').data('hide_timeout') );
				});

				clearTimeout( $('#imgrights_popup_div').data('hide_timeout') );

			});


			$img.mouseleave(function() {

				// Save timeout id in popup div attr
				$('#imgrights_popup_div').data('hide_timeout', setTimeout(function(){ $('#imgrights_popup_div').fadeOut(settings.hideSpeed); }, settings.hideTimeout));
			
			});

		});	//	end each

	}


})(jQuery);