$(document).ready(function(){

    $(document).on("click", "#feedback_form_map .close", function(e){
        $("#feedback_form_map").removeClass("active");
    });

    $(document).on("click", ".scroll_bot", function(e){
        var main_screen = $("#main_screen").outerHeight(),
            main_head = $("#main_header").outerHeight(),
            finish_num = main_screen - main_head;
        $('body, html').animate({scrollTop: finish_num})
    });

    function anchor_slides(){
        var href_page = $(location).attr("href");
        var reg1=/#vita/i ;
        var reg2=/#design/i ;
        var reg3=/#deco/i ;
        var reg4=/#titan/i ;
        var reg5=/#vario/i ;
        var reg6=/#space/i ;
        var reg7=/#trapeze/i ;
        var reg8=/#triangular/i ;
        var reg9=/#polygon/i ;
        var reg10=/#round/i ;
        var reg11=/#arched/i ;
        var reg12=/#panoramic/i ;
        var reg13=/#bay_window/i ;
        var reg14=/#french/i ;


        if(reg1.test(href_page)) {
            get_started('#vita')
        } else if(reg2.test(href_page)) {
            get_started('#design')
        } else if(reg3.test(href_page)) {
            get_started('#deco')
        } else if(reg4.test(href_page)) {
            get_started('#titan')
        } else if(reg5.test(href_page)) {
            get_started('#vario')
        } else if(reg6.test(href_page)) {
            get_started('#space')
        } else if(reg7.test(href_page)) {
            get_started2('#trapeze')
        } else if(reg8.test(href_page)) {
            get_started2('#triangular')
        } else if(reg9.test(href_page)) {
            get_started2('#polygon')
        } else if(reg10.test(href_page)) {
            get_started2('#round')
        } else if(reg11.test(href_page)) {
            get_started2('#arched')
        } else if(reg12.test(href_page)) {
            get_started2('#panoramic')
        } else if(reg13.test(href_page)) {
            get_started2('#bay_window')
        } else if(reg14.test(href_page)) {
            get_started2('#french')
        } 
     }
     
    function get_started(this_elem) {
        var data_el = $(this_elem).attr("data-slide"),  
            this_elem = $(this_elem);
        this_elem.closest(".us_slides").find(".slide_item").removeClass("active");
        this_elem.closest(".us_slides").find(".slide_item[data-slide="+data_el+"]").addClass("active");
        this_elem.closest(".us_slides").find(".pag_item").stop().removeClass("active");
        this_elem.closest(".us_slides").find(".pag_item[data-pag="+data_el+"]").addClass("active");
        
        setTimeout(function(){
            var bl_p = $(this_elem).offset().top - $('#main_header').outerHeight();
            $('body, html').animate({scrollTop: bl_p})
        }, 200);
    }

    function get_started2(this_elem) {
        var data_el = $(this_elem).attr("data-slide"),  
            this_elem = $(this_elem);
        this_elem.closest(".us_slides").find(".slide_item").removeClass("active");
        this_elem.closest(".us_slides").find(".slide_item[data-slide="+data_el+"]").addClass("active");
        this_elem.closest(".us_slides").find(".pag_item").stop().removeClass("active");
        this_elem.closest(".us_slides").find(".pag_item[data-slides="+data_el+"]").addClass("active");
        
        setTimeout(function(){
            var bl_p = $(this_elem).offset().top - $('#main_header').outerHeight();
            $('body, html').animate({scrollTop: bl_p})
        }, 200);
    }
    anchor_slides();

    function return_status(){
        $(".us_slides").find(".slides_popup").removeClass("active");
        $(".us_slides .wrap_btn").removeClass("hidden");
    }

    $(document).on("click", ".return_btn", function(e){
        return_status();
    });

    $(document).on("click", ".us_slides .properties", function(e){
        $(this).closest(".us_slides").find(".slide_item.active .characteristics").addClass("active");
        $(".us_slides .wrap_btn").addClass("hidden");
        var bl_p = $(".window_screen").offset().top - $('#main_header').outerHeight();
        $('body, html').animate({scrollTop: bl_p})
        e.preventDefault();
    });

     $(document).on("click", ".us_slides .price_btn", function(e){
        $(this).closest(".us_slides").find(".feedback_form").addClass("active");
        $(".us_slides .wrap_btn").addClass("hidden");
        var bl_p = $(".window_screen").offset().top - $('#main_header').outerHeight();
        $('body, html').animate({scrollTop: bl_p})
        e.preventDefault();
    });

    $(function() {
         $('input[type=text]').focus(function(){
            var txt = $(this).val();
            var ph = $(this).attr('data-ph');
            
            if (typeof ph !== typeof undefined && ph !== false) {
                if(txt == ph) {
                    $(this).val('');
                }
            }
         });
         
         $('input[type=text]').blur(function(){
            var txt = $(this).val();
            var ph = $(this).attr('data-ph');
            if (typeof ph !== typeof undefined && ph !== false) {
                if(txt == '') {
                    $(this).val(ph);
                }
            }
         });
         
         $('input[type=text]').each(function(){
             var ph = $(this).attr('placeholder');
             
             if (typeof ph !== typeof undefined && ph !== false) {
                 if(ph.length > 0) {
                     $(this).attr({'data-ph': ph, 'placeholder':''});
                     $(this).val(ph);
                 }
             }
         })
     });
    
	$(".index_form select").change(function(){
		var this_form = $(this).closest(".index_form");
		setTimeout(function(){
			select_text = this_form.find("select option:selected").text();
        	this_form.find("input.region").val(select_text);
		},100);
	});


    $("form").submit(function(e){
        var this_url = window.location.hostname + window.location.pathname ;
        $(this).find(".page_url").val(this_url);
        var dfdfd = $(this).find(".page_url").val();
        console.log(dfdfd, this_url);
        var postData = $(this).serializeArray(),
            formURL = "mail.php",
            error = 0,
            form = $(this),
            phone = form.find("input[name='u_phone']");
        if ((phone.val() == '') || (phone.val() == phone.attr("data-ph"))){
            phone.closest(".line_wrap").addClass("error");
            error = 1;
        }

        if (error == 0) {
            setTimeout(function(){
                $.ajax({
                    url : formURL,
                    type: "POST",
                    data: postData,
                    success: function(data){
                        phone.closest(".line_wrap").removeClass("error");
                        $("body").addClass("o_h");
                        $(".feedback_popup").fadeOut(400);
                        $(".thank_popup").fadeIn(400);
                        setTimeout(function(){
                             $("body").removeClass("o_h");
                             $(".thank_popup").fadeOut(400); 
                        }, 2000);
                    }
                });
            }, 500);

        }

         e.preventDefault();
    });


    if ($("select").length > 0 ){
        $('select').selectbox();    
    }


     $(document).on("click", ".video_link", function(e){
        $("body").addClass("o_h");
        $(".video_popup").fadeIn(400);
        if ($(this).hasClass("space")){
            var this_link = $(".video_wrap").find(".src_vario").attr("src");
        } else if ($(this).hasClass("vario")) {
             var this_link = $(".video_wrap").find(".src_space").attr("src");
        } else {
            var this_link = $(".video_wrap").find(".video_src").attr("src");
        }
        $(".video_popup").find("iframe").attr("src", this_link);
        e.preventDefault();
    });

    $(document).on("click", ".video_popup .close, .video_popup .overlay_popup", function(e){
        $(".video_popup").find("iframe").attr("src", "");
        $("body").removeClass("o_h");
        $(".video_popup").fadeOut(400);
        e.preventDefault();
    });

    var start_text_button = $(".feedback_popup .main_btn").text();
    $(document).on("click", ".main_feed_open", function(e){
        $("body").addClass("o_h");
        if ($(this).hasClass("change-text")) {
            var text = $(this).data("popup-text");
            $(".feedback_popup .main_btn").text(text);
        } else {
            $(".feedback_popup .main_btn").text(start_text_button);
        }
        $(".feedback_popup").fadeIn(400);
        e.preventDefault();
    });

    $(document).on("click", ".feedback_popup .close", function(e){
        $("body").removeClass("o_h");
        $(".feedback_popup ").fadeOut(400);
        e.preventDefault();
    });

    // function full_screen(){
    //     var window_h = $(window).outerHeight();
    //     $(".full_screen").css("min-height", window_h);
    // }

    // full_screen();

    // $(window).resize(function(){
    //      full_screen();
         
    // });

    function initialization_slide_pag(){
        $(".us_slides .pag_units").each(function(){
            var attr = $(this).attr("data-num");
            if ( attr !== undefined && attr !== false) {
                var parent_w = $(this).outerWidth(),
                    it_w = $(this).find(".pag_item").outerWidth(),
                    finish_num = parent_w/attr;
                    $(this).find(".pag_item").outerWidth(finish_num);
            } 
        });
       
    }


    $(".nav_pag .pag_item").click(function(){
        return_status();
        var this_slides = $(this).closest(".us_slides"),
            this_data = $(this).attr("data-pag");
        this_slides.children(".pag_units").find(".pag_item").removeClass("active");
        $(this).addClass("active");
        this_slides.children(".slide_units").children(".slide_item").removeClass("active");
        this_slides.children(".slide_units").children(".slide_item[data-slide="+this_data+"]").addClass("active");
    });

    $(document).scroll(function(){
        var bg_pos = $(".map_block").offset().top,
            w_height = $(window).outerHeight(),
            scroll_top = $(window).scrollTop(),
            map_pos = bg_pos + w_height - 500,
            window_pos = scroll_top + w_height;
        if (window_pos > map_pos ){
            $(".map_block .anim_circle").addClass("first_stage");
            setTimeout(function(){
               $(".map_block .anim_circle").addClass("last_stage"); 
            },500);
        } 
    });

    $(document).on("click", ".picnic_carousel .pag_item", function(e){
        return_status();
    });



    /*$(".slide_nav .nav-btn").click(function(e){
        return_status();
        var this_slides = $(this).closest(".us_slides"),
            delay = 500,
            this_pag = this_slides.children(".pag_units"),
            num_el = parseInt(this_pag.attr("data-num")),
            pag_item =  this_slides.children(".pag_units").find(".pag_item"),
            pag_active =  this_slides.children(".pag_units").find(".pag_item.active"),
            slides_item = this_slides.children(".slide_units").children(".slide_item"),
            active_item = this_slides.children(".slide_units").children(".slide_item.active");

        if (this_slides.hasClass("anim_rdy")) {
            this_slides.removeClass("anim_rdy");
            if ($(this).hasClass("prev")) {
                var pag_last = parseInt(pag_item.last().attr("data-pag"));
                if ((slides_item.eq(0).hasClass("active")) && (pag_last > num_el)) {
                    var pag_last_el = pag_item.last(),
                        pos_last = pag_last_el.position().left,
                        w_pag_units = this_pag.outerWidth(),
                        w_last = pag_last_el.outerWidth(),
                        finish_num = (pos_last + w_last) - w_pag_units;
                        this_pag.find(".pag_wrap").animate({left: -finish_num}, delay, function() {
                        this_slides.addClass("anim_rdy");
                    });
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    slides_item.last().addClass("active");
                    pag_item.last().addClass("active");
                } else if ((parseInt(pag_active.attr("data-pag")) > num_el) && (this_pag.find(".pag_wrap").css("left") != 0)) {
                    var pos_left = parseInt(this_pag.find(".pag_wrap").css("left")),
                        w_us_el = pag_item.outerWidth(),
                        finish_num = pos_left + w_us_el;
                        this_pag.find(".pag_wrap").animate({left: finish_num}, delay, function() {
                            this_slides.addClass("anim_rdy");
                        });
                        slides_item.removeClass("active");
                        pag_item.removeClass("active");
                        active_item.prev().addClass("active");
                        pag_active.prev().addClass("active");
                } else if (parseInt(this_pag.find(".pag_wrap").css("left")) != 0) {
                    var pos_left = parseInt(this_pag.find(".pag_wrap").css("left")),
                        w_us_el = pag_item.outerWidth(),
                        finish_num = pos_left + w_us_el;
                        slides_item.removeClass("active");
                        pag_item.removeClass("active");
                        active_item.prev().addClass("active");
                        pag_active.prev().addClass("active");
                        this_pag.find(".pag_wrap").animate({left: finish_num}, delay, function() {
                            this_slides.addClass("anim_rdy");
                        });
                } else if (slides_item.eq(0).hasClass("active")){
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    slides_item.last().addClass("active");
                    pag_item.last().addClass("active");
                    this_slides.addClass("anim_rdy");
                } else {
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    active_item.prev().addClass("active");
                    pag_active.prev().addClass("active");
                    this_slides.addClass("anim_rdy");
                }
            } else {
                var pag_last = parseInt(pag_item.last().attr("data-pag"));
                    pos_l = parseInt(this_pag.find(".pag_wrap").css("left")),
                    pos_last = pag_item.outerWidth() * (pag_last - num_el);
                if ((slides_item.last().hasClass("active")) && (pag_last > num_el)) {
                        slides_item.removeClass("active");
                        pag_item.removeClass("active");
                        slides_item.eq(0).addClass("active");
                        pag_item.eq(0).addClass("active");
                        this_pag.find(".pag_wrap").animate({left: 0}, delay, function() {
                            this_slides.addClass("anim_rdy");
                        });
                } else if ((parseInt(pag_active.attr("data-pag")) > (num_el-1)) && (pag_last > num_el ) && ((pos_l * -1) != pos_last) ) {
                    var pos_left = parseInt(this_pag.find(".pag_wrap").css("left")),
                        w_us_el = pag_item.outerWidth(),
                        finish_num = pos_left - w_us_el;
                        slides_item.removeClass("active");
                        pag_item.removeClass("active");
                        active_item.next().addClass("active");
                        pag_active.next().addClass("active");
                        this_pag.find(".pag_wrap").animate({left: finish_num}, delay, function() {
                            this_slides.addClass("anim_rdy");
                        });
                } else if (slides_item.last().hasClass("active")){
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    slides_item.eq(0).addClass("active");
                    pag_item.eq(0).addClass("active");
                    this_slides.addClass("anim_rdy");
                } else {
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    active_item.next().addClass("active");
                    pag_active.next().addClass("active");
                    this_slides.addClass("anim_rdy");
                }

            }

        }
       
    e.preventDefault();
    });*/
    


    $(".slide_nav .nav-btn").click(function(e){
        return_status();
        var this_slides = $(this).closest(".us_slides"),
            delay = 500,
            this_pag = this_slides.children(".pag_units"),
            num_el = parseInt(this_pag.attr("data-num")),
            pag_item =  this_slides.children(".pag_units").find(".pag_item"),
            pag_active =  this_slides.children(".pag_units").find(".pag_item.active"),
            slides_item = this_slides.children(".slide_units").children(".slide_item"),
            active_item = this_slides.children(".slide_units").children(".slide_item.active");

            if ($(this).hasClass("prev")) {
                if (slides_item.eq(0).hasClass("active")){
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    slides_item.last().addClass("active");
                    pag_item.last().addClass("active");
                    this_slides.addClass("anim_rdy");
                } else {
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    active_item.prev().addClass("active");
                    pag_active.prev().addClass("active");
                    this_slides.addClass("anim_rdy");
                }
            } else {
                if (slides_item.last().hasClass("active")){
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    slides_item.eq(0).addClass("active");
                    pag_item.eq(0).addClass("active");
                    this_slides.addClass("anim_rdy");
                } else {
                    slides_item.removeClass("active");
                    pag_item.removeClass("active");
                    active_item.next().addClass("active");
                    pag_active.next().addClass("active");
                    this_slides.addClass("anim_rdy");
                }

            }
        e.preventDefault();
    });


});