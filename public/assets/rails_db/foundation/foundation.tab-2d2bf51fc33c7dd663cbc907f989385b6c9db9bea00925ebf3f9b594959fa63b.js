!function(t,a,e,n){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.3",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(t,a,e){var n=this;(0,this.S)("["+this.attr_name()+"] > .active > a",this.scope).each(function(){n.default_tab_hashes.push(this.hash)}),this.bindings(a,e),this.handle_location_hash_change()},events:function(){var t=this,e=this.S,n=function(a,n){e(n).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init").is_hover&&!Modernizr.touch||(9!==(a.keyCode||a.which)&&(a.preventDefault(),a.stopPropagation()),t.toggle_active_tab(e(n).parent()))};e(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var a=t.keyCode||t.which;if(13===a||32===a){n(t,this)}}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){n(t,this)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(){e(this).closest("["+t.attr_name()+"]").data(t.attr_name(!0)+"-init").is_hover&&t.toggle_active_tab(e(this).parent())}),e(a).on("hashchange.fndtn.tab",function(a){a.preventDefault(),t.handle_location_hash_change()})},handle_location_hash_change:function(){var a=this,e=this.S;e("["+this.attr_name()+"]",this.scope).each(function(){var i=e(this).data(a.attr_name(!0)+"-init");if(i.deep_linking){var s;if(""!=(s=i.scroll_to_content?a.scope.location.hash:a.scope.location.hash.replace("fndtn-",""))){var r=e(s);if(r.hasClass("content")&&r.parent().hasClass("tabs-content"))a.toggle_active_tab(t("["+a.attr_name()+"] > * > a[href="+s+"]").parent());else{var o=r.closest(".content").attr("id");o!=n&&a.toggle_active_tab(t("["+a.attr_name()+"] > * > a[href=#"+o+"]").parent(),s)}}else for(var c=0;c<a.default_tab_hashes.length;c++)a.toggle_active_tab(t("["+a.attr_name()+"] > * > a[href="+a.default_tab_hashes[c]+"]").parent())}})},toggle_active_tab:function(i,s){var r=this,o=r.S,c=i.closest("["+this.attr_name()+"]"),l=i.find("a"),h=i.children("a").first(),d="#"+h.attr("href").split("#")[1],_=o(d),f=i.siblings(),u=c.data(this.attr_name(!0)+"-init"),b=function(a){var n,i=t(this),s=t(this).parents("li").prev().children('[role="tab"]'),r=t(this).parents("li").next().children('[role="tab"]');switch(a.keyCode){case 37:n=s;break;case 39:n=r;break;default:n=!1}n.length&&(i.attr({tabindex:"-1","aria-selected":null}),n.attr({tabindex:"0","aria-selected":!0}).focus()),t('[role="tabpanel"]').attr("aria-hidden","true"),t("#"+t(e.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},g=function(t){(t!==(u.scroll_to_content?r.default_tab_hashes[0]:"fndtn-"+r.default_tab_hashes[0].replace("#",""))||a.location.hash)&&(a.location.hash=t)};h.data("tab-content")&&(d="#"+h.data("tab-content").split("#")[1],_=o(d)),u.deep_linking&&(u.scroll_to_content?(g(s||d),s==n||s==d?i.parent()[0].scrollIntoView():o(d)[0].scrollIntoView()):g(s!=n?"fndtn-"+s.replace("#",""):"fndtn-"+d.replace("#",""))),i.addClass(u.active_class).triggerHandler("opened"),l.attr({"aria-selected":"true",tabindex:0}),f.removeClass(u.active_class),f.find("a").attr({"aria-selected":"false"}),_.siblings().removeClass(u.active_class).attr({"aria-hidden":"true"}),_.addClass(u.active_class).attr("aria-hidden","false").removeAttr("tabindex"),u.callback(i),_.triggerHandler("toggled",[_]),c.triggerHandler("toggled",[i]),l.off("keydown").on("keydown",b)},data_attr:function(t){return this.namespace.length>0?this.namespace+"-"+t:t},off:function(){},reflow:function(){}}}(jQuery,window,window.document);