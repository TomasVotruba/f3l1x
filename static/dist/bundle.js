$(function(){$("pre code").each(function(a,l){var o=$(l);$.each(o.prop("classList"),function(a,l){o.removeClass(l),l=l.replace("language-",""),o.hasClass(l)||o.addClass(l)}),hljs.highlightBlock(l)}),$('[data-toggle="tooltip"]').tooltip()});