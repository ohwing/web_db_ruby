!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],t):t(CodeMirror)}(function(t){"use strict";function r(t){return"[object Array]"==Object.prototype.toString.call(t)}function e(r){var e=r.doc.modeOption;return"sql"===e&&(e="text/x-sql"),t.resolveMode(e).keywords}function n(t){return"string"==typeof t?t:t.text}function o(t,e){return r(e)&&(e={columns:e}),e.text||(e.text=t),e}function i(t){var e={};if(r(t))for(var i=t.length-1;i>=0;i--){var s=t[i];e[n(s).toUpperCase()]=o(n(s),s)}else if(t)for(var a in t)e[a.toUpperCase()]=o(a,t[a]);return e}function s(t){return h[t.toUpperCase()]}function a(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);return r}function u(t,r){var e=t.length,o=n(r).substr(0,e);return t.toUpperCase()===o.toUpperCase()}function f(t,e,n,o){if(r(n))for(var i=0;i<n.length;i++)u(e,n[i])&&t.push(o(n[i]));else for(var s in n)if(n.hasOwnProperty(s)){var a=n[s];a=a&&!0!==a?a.displayText?{text:a.text,displayText:a.displayText}:a.text:s,u(e,a)&&t.push(o(a))}}function l(t){return"."==t.charAt(0)&&(t=t.substr(1)),t.replace(/`/g,"")}function c(t){for(var r=n(t).split("."),e=0;e<r.length;e++)r[e]="`"+r[e]+"`";var o=r.join(".");return"string"==typeof t?o:(t=a(t),t.text=o,t)}function p(t,r,e,n){for(var o=!1,i=[],u=r.start,p=!0;p;)p="."==r.string.charAt(0),o=o||"`"==r.string.charAt(0),u=r.start,i.unshift(l(r.string)),r=n.getTokenAt(y(t.line,r.start)),"."==r.string&&(p=!0,r=n.getTokenAt(y(t.line,r.start)));var g=i.join(".");f(e,g,h,function(t){return o?c(t):t}),f(e,g,v,function(t){return o?c(t):t}),g=i.pop();var x=i.join("."),m=!1,A=x;if(!s(x)){var b=x;x=d(x,n),x!==b&&(m=!0)}var C=s(x);return C&&C.columns&&(C=C.columns),C&&f(e,g,C,function(t){var r=x;return 1==m&&(r=A),"string"==typeof t?t=r+"."+t:(t=a(t),t.text=r+"."+t.text),o?c(t):t}),u}function g(t,r){if(t)for(var e=/[,;]/g,n=t.split(" "),o=0;o<n.length;o++)r(n[o]?n[o].replace(e,""):"")}function d(t,r){for(var e=r.doc,n=e.getValue(),o=t.toUpperCase(),i="",a="",u=[],f={start:y(0,0),end:y(r.lastLine(),r.getLineHandle(r.lastLine()).length)},l=n.indexOf(m.QUERY_DIV);-1!=l;)u.push(e.posFromIndex(l)),l=n.indexOf(m.QUERY_DIV,l+1);u.unshift(y(0,0)),u.push(y(r.lastLine(),r.getLineHandle(r.lastLine()).text.length));for(var c=null,p=r.getCursor(),d=0;d<u.length;d++){if((null==c||A(p,c)>0)&&A(p,u[d])<=0){f={start:c,end:u[d]};break}c=u[d]}for(var h=e.getRange(f.start,f.end,!1),d=0;d<h.length;d++){if(g(h[d],function(t){var r=t.toUpperCase();r===o&&s(i)&&(a=i),r!==m.ALIAS_KEYWORD&&(i=t)}),a)break}return a}var h,v,x,m={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},y=t.Pos,A=t.cmpPos;t.registerHelper("hint","sql",function(t,r){h=i(r&&r.tables);var n=r&&r.defaultTable,o=r&&r.disableKeywords;v=n&&s(n),x=e(t),n&&!v&&(v=d(n,t)),v=v||[],v.columns&&(v=v.columns);var a,u,l,c=t.getCursor(),g=[],m=t.getTokenAt(c);return m.end>c.ch&&(m.end=c.ch,m.string=m.string.slice(0,c.ch-m.start)),m.string.match(/^[.`\w@]\w*$/)?(l=m.string,a=m.start,u=m.end):(a=u=c.ch,l=""),"."==l.charAt(0)||"`"==l.charAt(0)?a=p(c,m,g,t):(f(g,l,h,function(t){return t}),f(g,l,v,function(t){return t}),o||f(g,l,x,function(t){return t.toUpperCase()})),{list:g,from:y(c.line,a),to:y(c.line,u)}})});