$(document).ready(function(){$('span.comments-link a').click(function(){$('html, body').animate({scrollTop:$("#comments").offset().top},'slow');return false;});$('span.comments-respond a').click(function(){$('html, body').animate({scrollTop:$("#respond").offset().top},'slow');return false;});});