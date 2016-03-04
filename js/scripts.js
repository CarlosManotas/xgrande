$(function(){
    var $dinamico = $("#movil-off");
    var $paraBtn = $(".btn-llamar");
    var $btnPreguntas = $(".preguntas");
    var $pasos = $(".h2");
    var $window = $(window);
    var $barra = $(".barra");
    var $preload = $(".preload");
    var $pantalla = $(window).width();

    if($pantalla >= 480 & $pantalla < 1024){
    	var toy = $("img[alt='change']");
    	console.log(toy);
    	toy.attr("src","img/bigpack.png");
    }
    window.onload= function(){
    	$preload.hide();
    };
    
    $pasos.css({
		width:"0%",
		opacity:"0"
	});

    $window.on("scroll",function(){
    	var $breakPoint = $("#seccion3").offset().top;
    	var $breakPoint2 = $("#seccion2").offset().top;
    	var $top = $window.scrollTop();

    	if($top >= ($breakPoint - 200)){
    		$pasos.css({
    			width:"100%",
    			opacity:"1",
    			overflow:"visible"
    		});
    	}
    	if($top >= $breakPoint2){
    		$barra.css({
    			position:"fixed"
    		});
    	}else{
    		$barra.css({
    			position:"relative"
    		});
    	}
    });


    $btnPreguntas.on("click", "h3" ,function(){
    	t = $(this);
    	t.parent().find(".aparece").removeClass("aparece");
    	t.next().addClass("aparece");
    });

    $.getScript('/js/isMobile.js', function()
	{

	    if (isMobile.apple.phone || isMobile.android.phone || isMobile.windows_phone) {
	        $dinamico.remove();
	        $paraBtn.append('<a href="tel:+541152774997"><button class="icon-telefono espacio btn-gracias">LLAMANOS!</button></a>');
      	}
	    
	});
	$.getScript('https://cdn.jsdelivr.net/scrollreveal.js/3.0.9/scrollreveal.min.js', function()
	{

	    window.sr = ScrollReveal();
		sr.reveal(".aparecer-arriba",{duration:1000,useDelay:"always"});
		sr.reveal(".aparecer-derecha",{duration:1000,useDelay:"always",origin:"left"});
		sr.reveal(".aparecer-izquierda",{duration:1000,useDelay:"always",origin:"right",delay:500});
		sr.reveal(".aparecer-abajo",{duration:1000,useDelay:"always",origin:"top"});
	});
});
