// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(function (){
	$("table#antibiogram tr td").each(function (){
		if( $(this).text() != '' )
			$(this).css({
				'background-color' : ( $(this).text() > 90 ) ? '#8F8' : 
						( $(this).text() > 80 ) ? 'yellow' : 
						( $(this).text() >= 0 ) ? '#F88' : ''
			});
	});

	$("table#antibiogram tr th.isolate").each(function (){
		if( $(this).text() < 30 )
			$(this).parent().find('td').css({ 'opacity' : '0.4' });
	});
});
