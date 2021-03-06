(function ($) {
	'use strict';
    $.extend($.fn, {
        showOnHover: function (o) {
			var n = null,
				o = $.extend({
					fx: 'fade',
					easingIn: 'swing',
					easingOut: 'swing',
					durationIn: 400,
					durationOut: 400,
					enter: n,
					complete: n,
					out: n,
					end: n,
					t: 0,
					l: 0,
				}, o),
				ai = 'fadeIn',
				ao = 'fadeOut',
				e = o.fx.charAt(0),
				k,
				v,
				x;
				
			function fn(a) {if(/^f/.test(typeof a)) a.call();}
			
			if (e == 'h') ai = 'show', ao = 'hide';
			
			if (e.match(/t|b|l|r/) != n){
				for (x = 2; x--;)
				v = o.fx.charAt(x),
				v == 't' || v == 'b' ? k = 't' : k = 'l',
				v == 't' || v == 'l' ? o[k] = '-100%' : o[k] = '100%';
			}
			
			return this.each(function(){
				var a = $(this), p = a.parent();
				p.css('position') == 'static' ? p.css('position','relative') : n;
				p.css('overflow','hidden');
				a.css({'position': 'absolute', 'height': '100%', 'width': '100%', 'top': 0, 'left': 0, 'margin-top': o.t, 'margin-left' : o.l}); 
				
				if (e == 'h' || e == 'f') a[ao](0);
			
				p.hover(function () {
					fn(o.enter);
					e == 'f' || e == 'h' ?
					a.stop()[ai](o.durationIn, o.easingIn, function () {fn(o.complete); }) :
					a.stop().animate({'margin-top': '0', 'margin-left': '0'}, o.durationIn, o.easingIn, function () {fn(o.complete); });
				}, function () {
					fn(o.out);
					e == 'f' || e == 'h' ?
					a.stop()[ao](o.durationOut, o.easingOut, function () {fn(o.end); }) :
					a.stop().animate({'margin-top': o.t, 'margin-left': o.l}, o.durationOut, o.easingOut, function () {fn(o.end); });
				});
			});
		}
	});
})(jQuery);