!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";var r=/[\w$]+/,t=500;e.registerHelper("hint","anyword",function(o,i){for(var n=i&&i.word||r,f=i&&i.range||t,s=o.getCursor(),a=o.getLine(s.line),c=s.ch,l=c;l&&n.test(a.charAt(l-1));)--l;for(var d=l!=c&&a.slice(l,c),u=i&&i.list||[],p={},g=new RegExp(n.source,"g"),h=-1;h<=1;h+=2)for(var m=s.line,y=Math.min(Math.max(m+h*f,o.firstLine()),o.lastLine())+h;m!=y;m+=h)for(var b,v=o.getLine(m);b=g.exec(v);)m==s.line&&b[0]===d||d&&0!=b[0].lastIndexOf(d,0)||Object.prototype.hasOwnProperty.call(p,b[0])||(p[b[0]]=!0,u.push(b[0]));return{list:u,from:e.Pos(s.line,l),to:e.Pos(s.line,c)}})});