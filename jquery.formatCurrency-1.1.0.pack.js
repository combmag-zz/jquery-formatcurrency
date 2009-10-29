(function(c){c.formatCurrency={};c.formatCurrency.regions=[];c.formatCurrency.regions[""]={symbol:"$",positiveFormat:"%s%n",negativeFormat:"(%s%n)",decimalSymbol:".",digitGroupSymbol:",",groupDigits:true};
c.fn.formatCurrency=function(d,e){if(arguments.length==1&&typeof d!=="string"){e=d;d=false}var f={name:"formatCurrency",colorize:false,region:"",global:true,roundToDecimalPlace:2,eventOnDecimalsEntered:false};
f=c.extend(f,c.formatCurrency.regions[""]);e=c.extend(f,e);if(e.region.length>0){e=c.extend(e,a(e.region))}return this.each(function(){$this=c(this);
var m="0";m=$this[$this.is("input, select, textarea")?"val":"html"]();if(m.search("\\(")>=0){m="-"+m}var o=new RegExp("[^\\d"+e.decimalSymbol+"-]","g");
m=m.replace(o,"");if(e.decimalSymbol!="."){m=m.replace(e.decimalSymbol,".")}if(isNaN(m)){m="0"}var k=String(m).split(".");m=k[0];var q=(m==(m=Math.abs(m)));
var j=(k.length>1);var h=(j?k[1].toString():"0");if(e.roundToDecimalPlace>=0){h=parseFloat("1."+h);h=h.toFixed(e.roundToDecimalPlace);if(h.substring(0,1)=="2"){m=Number(m)+1
}h=h.substring(2)}m=String(m);if(e.groupDigits){for(var l=0;l<Math.floor((m.length-(1+l))/3);l++){m=m.substring(0,m.length-(4*l+3))+e.digitGroupSymbol+m.substring(m.length-(4*l+3))
}}if((j&&e.roundToDecimalPlace==-1)||e.roundToDecimalPlace>0){m+=e.decimalSymbol+h}var p=q?e.positiveFormat:e.negativeFormat;var g=p.replace(/%s/g,e.symbol);
g=g.replace(/%n/g,m);var n=c([]);if(!d){n=$this}else{n=c(d)}n[n.is("input, select, textarea")?"val":"html"](g);if(j&&e.eventOnDecimalsEntered){n.trigger("decimalsEntered",h)
}if(e.colorize){n.css("color",q?"black":"red")}})};c.fn.toNumber=function(d){var e=c.extend({name:"toNumber",region:"",global:true},c.formatCurrency.regions[""]);
d=jQuery.extend(e,d);if(d.region.length>0){d=c.extend(d,a(d.region))}return this.each(function(){var g=c(this).is("input, select, textarea")?"val":"html";
var f=new RegExp("[^\\d"+d.decimalSymbol+"-]","g");c(this)[g](c(this)[g]().replace(f,""))})};c.fn.asNumber=function(f){var g=c.extend({name:"asNumber",region:"",parse:true,parseType:"Float",global:true},c.formatCurrency.regions[""]);
f=jQuery.extend(g,f);if(f.region.length>0){f=c.extend(f,a(f.region))}f.parseType=b(f.parseType);var h=c(this).is("input, select, textarea")?"val":"html";
var d=new RegExp("[^\\d"+f.decimalSymbol+"-]","g");var e=c(this)[h]();e=e?e:"";e=e.replace(d,"");if(!f.parse){return e}if(e.length==0){e="0"}if(f.decimalSymbol!="."){e=e.replace(f.decimalSymbol,".")
}return window["parse"+f.parseType](e)};function a(f){var e=c.formatCurrency.regions[f];if(e){return e}else{if(/(\w+)-(\w+)/g.test(f)){var d=f.replace(/(\w+)-(\w+)/g,"$1");
return c.formatCurrency.regions[d]}}return null}function b(d){switch(d.toLowerCase()){case"int":return"Int";case"float":return"Float";default:throw"invalid parseType"
}}})(jQuery);