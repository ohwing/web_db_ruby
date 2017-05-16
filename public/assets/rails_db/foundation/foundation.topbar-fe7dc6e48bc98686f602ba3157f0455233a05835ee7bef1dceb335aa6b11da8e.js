!function(t,a,s){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.3",settings:{index:0,start_offset:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(a,s,e){Foundation.inherit(this,"add_custom_rule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(s,e),i.S("["+this.attr_name()+"]",this.scope).each(function(){var a=t(this),s=a.data(i.attr_name(!0)+"-init");i.S("section, .top-bar-section",this);a.data("index",0);var e=a.parent();e.hasClass("fixed")||i.is_sticky(a,e,s)?(i.settings.sticky_class=s.sticky_class,i.settings.sticky_topbar=a,a.data("height",e.outerHeight()),a.data("stickyoffset",e.offset().top)):a.data("height",a.outerHeight()),s.assembled||i.assemble(a),s.is_hover?i.S(".has-dropdown",a).addClass("not-click"):i.S(".has-dropdown",a).removeClass("not-click"),i.add_custom_rule(".f-topbar-fixed { padding-top: "+a.data("height")+"px }"),e.hasClass("fixed")&&i.S("body").addClass("f-topbar-fixed")})},is_sticky:function(t,a,s){var e=a.hasClass(s.sticky_class),i=matchMedia(Foundation.media_queries.small).matches,n=matchMedia(Foundation.media_queries.medium).matches,o=matchMedia(Foundation.media_queries.large).matches;return!(!e||"all"!==s.sticky_on)||(!(!(e&&this.small()&&-1!==s.sticky_on.indexOf("small")&&i)||n||o)||(!(!(e&&this.medium()&&-1!==s.sticky_on.indexOf("medium")&&i&&n)||o)||!!(e&&this.large()&&-1!==s.sticky_on.indexOf("large")&&i&&n&&o)))},toggle:function(s){var e,i=this;e=s?i.S(s).closest("["+this.attr_name()+"]"):i.S("["+this.attr_name()+"]");var n=e.data(this.attr_name(!0)+"-init"),o=i.S("section, .top-bar-section",e);i.breakpoint()&&(i.rtl?(o.css({right:"0%"}),t(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),t(">.name",o).css({left:"100%"})),i.S("li.moved",o).removeClass("moved"),e.data("index",0),e.toggleClass("expanded").css("height","")),n.scrolltop?e.hasClass("expanded")?e.parent().hasClass("fixed")&&(n.scrolltop?(e.parent().removeClass("fixed"),e.addClass("fixed"),i.S("body").removeClass("f-topbar-fixed"),a.scrollTo(0,0)):e.parent().removeClass("expanded")):e.hasClass("fixed")&&(e.parent().addClass("fixed"),e.removeClass("fixed"),i.S("body").addClass("f-topbar-fixed")):(i.is_sticky(e,e.parent(),n)&&e.parent().addClass("fixed"),e.parent().hasClass("fixed")&&(e.hasClass("expanded")?(e.addClass("fixed"),e.parent().addClass("expanded"),i.S("body").addClass("f-topbar-fixed")):(e.removeClass("fixed"),e.parent().removeClass("expanded"),i.update_sticky_positioning())))},timer:null,events:function(){var s=this,e=this.S;e(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(t){t.preventDefault(),s.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(){var a=t(this).closest("li"),e=a.closest("["+s.attr_name()+"]"),i=e.data(s.attr_name(!0)+"-init");if(i.dropdown_autoclose&&i.is_hover){t(this).closest(".hover").removeClass("hover")}!s.breakpoint()||a.hasClass("back")||a.hasClass("has-dropdown")||s.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(a){var i=e(this),n=e(a.target),o=i.closest("["+s.attr_name()+"]"),r=o.data(s.attr_name(!0)+"-init");if(n.data("revealId"))return void s.toggle();s.breakpoint()||r.is_hover&&!Modernizr.touch||(a.stopImmediatePropagation(),i.hasClass("hover")?(i.removeClass("hover").find("li").removeClass("hover"),i.parents("li.hover").removeClass("hover")):(i.addClass("hover"),t(i).siblings().removeClass("hover"),"A"===n[0].nodeName&&n.parent().hasClass("has-dropdown")&&a.preventDefault()))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(t){if(s.breakpoint()){t.preventDefault();var a=e(this),i=a.closest("["+s.attr_name()+"]"),n=i.find("section, .top-bar-section"),o=(a.next(".dropdown").outerHeight(),a.closest("li"));i.data("index",i.data("index")+1),o.addClass("moved"),s.rtl?(n.css({right:-100*i.data("index")+"%"}),n.find(">.name").css({right:100*i.data("index")+"%"})):(n.css({left:-100*i.data("index")+"%"}),n.find(">.name").css({left:100*i.data("index")+"%"})),i.css("height",a.siblings("ul").outerHeight(!0)+i.data("height"))}}),e(a).off(".topbar").on("resize.fndtn.topbar",s.throttle(function(){s.resize.call(s)},50)).trigger("resize.fndtn.topbar").load(function(){e(this).trigger("resize.fndtn.topbar")}),e("body").off(".topbar").on("click.fndtn.topbar",function(t){e(t.target).closest("li").closest("li.hover").length>0||e("["+s.attr_name()+"] li.hover").removeClass("hover")}),e(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(t){t.preventDefault();var a=e(this),i=a.closest("["+s.attr_name()+"]"),n=i.find("section, .top-bar-section"),o=(i.data(s.attr_name(!0)+"-init"),a.closest("li.moved")),r=o.parent();i.data("index",i.data("index")-1),s.rtl?(n.css({right:-100*i.data("index")+"%"}),n.find(">.name").css({right:100*i.data("index")+"%"})):(n.css({left:-100*i.data("index")+"%"}),n.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",r.outerHeight(!0)+i.data("height")),setTimeout(function(){o.removeClass("moved")},300)}),e(this.scope).find(".dropdown a").focus(function(){t(this).parents(".has-dropdown").addClass("hover")}).blur(function(){t(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var a,e=t.S(this),i=e.data(t.attr_name(!0)+"-init"),n=e.parent("."+t.settings.sticky_class);if(!t.breakpoint()){var o=e.hasClass("expanded");e.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&t.toggle(e)}t.is_sticky(e,n,i)&&(n.hasClass("fixed")?(n.removeClass("fixed"),a=n.offset().top,t.S(s.body).hasClass("f-topbar-fixed")&&(a-=e.data("height")),e.data("stickyoffset",a),n.addClass("fixed")):(a=n.offset().top,e.data("stickyoffset",a)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(a){var s=this,e=a.data(this.attr_name(!0)+"-init"),i=s.S("section, .top-bar-section",a);i.detach(),s.S(".has-dropdown>a",i).each(function(){var a,i=s.S(this),n=i.siblings(".dropdown"),o=i.attr("href");n.find(".title.back").length||(a=t(1==e.mobile_show_parent_link&&o?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+o+'">'+i.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),1==e.custom_back_text?t("h5>a",a).html(e.back_text):t("h5>a",a).html("&laquo; "+i.html()),n.prepend(a))}),i.appendTo(a),this.sticky(),this.assembled(a)},assembled:function(a){a.data(this.attr_name(!0),t.extend({},a.data(this.attr_name(!0)),{assembled:!0}))},height:function(a){var s=0,e=this;return t("> li",a).each(function(){s+=e.S(this).outerHeight(!0)}),s},sticky:function(){var t=this;this.S(a).on("scroll",function(){t.update_sticky_positioning()})},update_sticky_positioning:function(){var t="."+this.settings.sticky_class,s=this.S(a),e=this;if(e.settings.sticky_topbar&&e.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var i=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;e.S(t).hasClass("expanded")||(s.scrollTop()>i?e.S(t).hasClass("fixed")||(e.S(t).addClass("fixed"),e.S("body").addClass("f-topbar-fixed")):s.scrollTop()<=i&&e.S(t).hasClass("fixed")&&(e.S(t).removeClass("fixed"),e.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(a).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);