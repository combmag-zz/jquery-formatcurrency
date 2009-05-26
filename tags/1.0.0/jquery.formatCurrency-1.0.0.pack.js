(function(c){c.formatCurrency={};c.formatCurrency.regions=[];c.formatCurrency.regions[""]={symbol:"$",positiveFormat:"%s%n",negativeFormat:"(%s%n)",decimalSymbol:".",digitGroupSymbol:",",groupDigits:true};
c.fn.formatCurrency=function(d,e){if(arguments.length==1&&typeof d!=="string"){e=d;d=false}var f={name:"formatCurrency",colorize:false,region:"",global:true};
f=c.extend(f,c.formatCurrency.regions[""]);e=c.extend(f,e);if(e.region.length>0){e=c.extend(e,a(e.region))}return this.each(function(){$this=c(this);
var j="0";j=$this[$this.is("input, select, textarea")?"val":"html"]();var h=new RegExp("[^\\d"+e.decimalSymbol+"-]","g");j=j.replace(h,"");if(e.decimalSymbol!="."){j=j.replace(e.decimalSymbol,".")
}if(isNaN(j)){j="0"}var n=(j==(j=Math.abs(j)));j=Math.floor(j*100);var g=j%100;j=Math.floor(j/100).toString();if(g<10){g="0"+g}if(e.groupDigits){for(var k=0;
k<Math.floor((j.length-(1+k))/3);k++){j=j.substring(0,j.length-(4*k+3))+e.digitGroupSymbol+j.substring(j.length-(4*k+3))}}j=j+e.decimalSymbol+g;
var m=n?e.positiveFormat:e.negativeFormat;var l=m.replace(/%s/g,e.symbol);l=l.replace(/%n/g,j);if(!d){d=$this}else{d=c(d)}d[d.is("input, select, textarea")?"val":"html"](l);
if(e.colorize){d.css("color",n?"black":"red")}})};c.fn.toNumber=function(d){var e=c.extend({name:"toNumber",region:"",global:true},c.formatCurrency.regions[""]);
d=jQuery.extend(e,d);if(d.region.length>0){d=c.extend(d,a(d.region))}return this.each(function(){var g=c(this).is("input, select, textarea")?"val":"html";
var f=new RegExp("[^\\d"+d.decimalSymbol+"-]","g");c(this)[g](c(this)[g]().replace(f,""))})};c.fn.asNumber=function(f){var g=c.extend({name:"asNumber",region:"",parse:true,parseType:"Float",global:true},c.formatCurrency.regions[""]);
f=jQuery.extend(g,f);if(f.region.length>0){f=c.extend(f,a(f.region))}f.parseType=b(f.parseType);var h=c(this).is("input, select, textarea")?"val":"html";
var d=new RegExp("[^\\d"+f.decimalSymbol+"-]","g");var e=c(this)[h]().replace(d,"");if(!f.parse){return e}if(e.length==0){e="0"}if(f.decimalSymbol!="."){e=e.replace(f.decimalSymbol,".")
}return window["parse"+f.parseType](e)};function a(f){var e=c.formatCurrency.regions[f];if(e){return e}else{if(/(\w+)-(\w+)/g.test(f)){var d=f.replace(/(\w+)-(\w+)/g,"$1");
return c.formatCurrency.regions[d]}}return null}function b(d){switch(d.toLowerCase()){case"int":return"Int";case"float":return"Float";default:throw"invalid parseType"
}}})(jQuery);