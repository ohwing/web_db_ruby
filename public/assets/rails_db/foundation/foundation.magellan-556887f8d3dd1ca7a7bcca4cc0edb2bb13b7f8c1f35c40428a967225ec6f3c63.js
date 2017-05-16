!function(t,a){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.3",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(t,a,e){Foundation.inherit(this,"throttle"),this.bindings(a,e)},events:function(){var a=this,e=a.S,i=a.settings;a.set_expedition_position(),e(a.scope).off(".magellan").on("click.fndtn.magellan","["+a.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(e){var i=this.hostname===location.hostname||!this.hostname,n=a.filterPathname(location.pathname)===a.filterPathname(this.pathname),s=this.hash.replace(/(:|\.|\/)/g,"\\$1"),o=this;if(i&&n&&s){e.preventDefault();var l=t(this).closest("["+a.attr_name()+"]"),r=l.data("magellan-expedition-init"),d=this.hash.split("#").join(""),f=t('a[name="'+d+'"]');0===f.length&&(f=t("#"+d));var h=f.offset().top-r.destination_threshold+1;r.offset_by_height&&(h-=l.outerHeight()),t("html, body").stop().animate({scrollTop:h},r.duration,r.easing,function(){history.pushState?history.pushState(null,null,o.pathname+o.search+"#"+d):location.hash=o.pathname+o.search+"#"+d})}}).on("scroll.fndtn.magellan",a.throttle(this.check_for_arrivals.bind(this),i.throttle_delay))},check_for_arrivals:function(){var t=this;t.update_arrivals(),t.update_expedition_positions()},set_expedition_position:function(){var a=this;t("["+this.attr_name()+"=fixed]",a.scope).each(function(){var e,i,n=t(this),s=n.data("magellan-expedition-init"),o=n.attr("styles");n.attr("style",""),e=n.offset().top+s.threshold,i=parseInt(n.data("magellan-fixed-top")),isNaN(i)||(a.settings.fixed_top=i),n.data(a.data_attr("magellan-top-offset"),e),n.attr("style",o)})},update_expedition_positions:function(){var e=this,i=t(a).scrollTop();t("["+this.attr_name()+"=fixed]",e.scope).each(function(){var a=t(this),n=a.data("magellan-expedition-init"),s=a.attr("style"),o=a.data("magellan-top-offset");if(i+e.settings.fixed_top>=o){var l=a.prev("["+e.add_namespace("data-magellan-expedition-clone")+"]");0===l.length&&(l=a.clone(),l.removeAttr(e.attr_name()),l.attr(e.add_namespace("data-magellan-expedition-clone"),""),a.before(l)),a.css({position:"fixed",top:n.fixed_top}).addClass("fixed")}else a.prev("["+e.add_namespace("data-magellan-expedition-clone")+"]").remove(),a.attr("style",s).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var e=this,i=t(a).scrollTop();t("["+this.attr_name()+"]",e.scope).each(function(){var a=t(this),n=a.data(e.attr_name(!0)+"-init"),s=e.offsets(a,i),o=a.find("["+e.add_namespace("data-magellan-arrival")+"]"),l=!1;s.each(function(t,i){if(i.viewport_offset>=i.top_offset){return a.find("["+e.add_namespace("data-magellan-arrival")+"]").not(i.arrival).removeClass(n.active_class),i.arrival.addClass(n.active_class),l=!0,!0}}),l||o.removeClass(n.active_class)})},offsets:function(a,e){var i=this,n=a.data(i.attr_name(!0)+"-init"),s=e;return a.find("["+i.add_namespace("data-magellan-arrival")+"]").map(function(){var e=t(this).data(i.data_attr("magellan-arrival")),o=t("["+i.add_namespace("data-magellan-destination")+"="+e+"]");if(o.length>0){var l=o.offset().top-n.destination_threshold;return n.offset_by_height&&(l-=a.outerHeight()),l=Math.floor(l),{destination:o,arrival:t(this),top_offset:l,viewport_offset:s}}}).sort(function(t,a){return t.top_offset<a.top_offset?-1:t.top_offset>a.top_offset?1:0})},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){this.S(this.scope).off(".magellan"),this.S(a).off(".magellan")},filterPathname:function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var a=this;t("["+a.add_namespace("data-magellan-expedition-clone")+"]",a.scope).remove()}}}(jQuery,window,window.document);