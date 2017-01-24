(function($) {
	$.fn.picnic = function(opt) {
		
		var settings = $.extend({
			"responsive": "true",
			"play": "false",
			"playOpt": {
				"interval": "3000",
				"pauseOnHover": "true",
				"restartDelay": "2500"
			},
			"navigation":"true",
			"pagination":"false",
			"numbering":"true",
			"responsiveOpt": {
				"phoneWidth": "600",
				"padWidth": "768",
				"desctopNum": "3",
				"padNum": "2",
				"phoneNum": "1"
			},
			"animationSpeed": "800",
			"direction": 'horizontal'
		}, opt);
		
		return this.each(function(){
			var wrap, next_btn, prev_btn;
			
			var bl = $(this);
			
			if(settings.direction == 'vertical') {
				bl.children().addClass('carousel-item');
				bl.wrapInner('<div class="carousel-wrapper" style="max-width:100%; overflow:auto;"><div class="carousel-items clearfix" style="position:relative; overflow:hidden;">');
			} else {
				bl.children().addClass('carousel-item').css("float", "left");
				bl.wrapInner('<div class="carousel-wrapper" style="max-width:100%; overflow:hidden;"><div class="carousel-items clearfix" style="position:relative; overflow:hidden; width:20000px; left:0;">');
			}

			if (settings.pagination == 'true'){
				var data_el = 1;
				bl.append('<ul class="carousel-pagination"></ul>');
				bl.find(".carousel-item").each(function(){
					$(this).attr('data-slides', data_el);
					bl.find('.carousel-pagination').append('<li class="pagination-item" data-slides='+data_el+'><a href="#"></a></li>');
					data_el = data_el + 1;
				});
				var active_slide = bl.find(".carousel-item.active").attr("data-slides");
				bl.find(".carousel-pagination .pagination-item[data-slides="+active_slide+"]").addClass("current");
			} else if (settings.numbering == 'true') {
				var data_el = 1;
				bl.find(".carousel-item").each(function(){
					$(this).attr('data-slides', data_el);
					data_el = data_el + 1;
				});
			}

			wrap = bl.find('.carousel_wrapper');

			bl.append('<div class="carousel-navigation"></div>');
			bl.find('.carousel-navigation').append('<span class="nav-prev nav-btn"></span><span class="nav-next nav-btn"></span>');
			

				
			next_btn = bl.find('.nav-next');
			prev_btn = bl.find('.nav-prev');
			

		
			next_btn.bind('click', function(e,max_pos_left){
				var data_num = bl.attr("data-desctop-num"),
					elem_width = bl.find(".carousel-item:eq(0)").outerWidth(),
					last_elem = bl.find(".carousel-item").last().attr("data-slides"),
					max_pos_left = (last_elem - data_num) * elem_width,
					left_pos = data_num * elem_width,
					more_num = max_pos_left - elem_width,
					this_slides = $(this).closest(".us_slides"),
		            slides_item = this_slides.children(".slide_units").children(".slide_item"),
		            active_item = this_slides.children(".slide_units").children(".slide_item.active");
		            function right_switch() {
						slides_item.removeClass("active");
		                active_item.next().addClass("active");
					}

				if (bl.find('.carousel-item').hasClass("active")){
					var active_bl = bl.find('.carousel-item.active');
				}

				if (parseInt(bl.find('.carousel-items').css("left")) !== (-max_pos_left)){
					bl.addClass("overlay_l");
					
					if (settings.pagination == "true"){
						if(!bl.find('.carousel-items').hasClass('animation_on')) {
							var bw = bl.find('.carousel-item:eq(0)').outerWidth(),
								rp = bl.find('.carousel-item:last-child').offset().left + bw,
								car_pr = bl.offset().left + bl.outerWidth();
								
							// alert(rp +' || '+car_pr);
							if((rp-bw/2) > car_pr) {
								bl.find('.carousel-items').addClass('animation_on');
								var it_w = parseInt(bl.find('.carousel-items').css('left')) - bw;

								bl.find(".carousel-items").stop().animate({left: it_w +"px"}, settings.animationSpeed, function(){
									//bl.find(".carousel-items .carousel-item").eq(0).clone().appendTo(bl.find(".carousel-items")); 
									//bl.find(".carousel-items .carousel-item").eq(0).remove(); 
									//bl.find(".carousel-items").css({"left":"0px"}).removeClass('animation_on'); 
									bl.find(".carousel-items").removeClass('animation_on'); 
									right_switch();
								});
							} else {
								bl.find('.carousel-items').addClass('animation_on');	
								bl.find(".carousel-items").stop().animate({left:0}, settings.animationSpeed, function(){
									//bl.find(".carousel-items .carousel-item").eq(0).clone().appendTo(bl.find(".carousel-items")); 
									//bl.find(".carousel-items .carousel-item").eq(0).remove(); 
									//bl.find(".carousel-items").css({"left":"0px"}).removeClass('animation_on'); 
									bl.find(".carousel-items").removeClass('animation_on'); 
									right_switch();
								});
							}

							if (bl.find('.carousel-item').last().hasClass("active")){
								bl.find('.carousel-item').removeClass("active");
								bl.find('.carousel-item:eq(0)').addClass("active");
							} else {
								bl.find('.carousel-item').removeClass("active");
								active_bl.next().addClass("active");
							}

							var active_slide = bl.find('.carousel-item.active').attr("data-slides");
							bl.find(".carousel-pagination .pagination-item").removeClass("current");
							bl.find(".carousel-pagination .pagination-item[data-slides="+active_slide+"]").addClass("current");
						}
					} else {
						if(!bl.find('.carousel-items').hasClass('animation_on')) {
							bl.find('.carousel-items').addClass('animation_on');
							if(settings.direction == 'vertical') {
								var it_h = bl.find('.carousel-item:eq(0)').outerHeight() + parseInt(bl.find('.carousel-item:eq(0)').css('margin-top')) + parseInt(bl.find('.carousel-item:eq(0)').css('margin-bottom'));
								bl.find(".carousel-items").stop().animate({top: "-"+ it_h +"px"}, settings.animationSpeed, function(){
									bl.find(".carousel-items .carousel-item").eq(0).clone().appendTo(bl.find(".carousel-items")); 
									bl.find(".carousel-items .carousel-item").eq(0).remove(); 
									bl.find(".carousel-items").css({"top":"0px"}).removeClass('animation_on');
									right_switch(); 
								});
							} else {
								var it_w = bl.find('.carousel-item:eq(0)').outerWidth() + parseInt(bl.find('.carousel-item:eq(0)').css('margin-right')) + parseInt(bl.find('.carousel-item:eq(0)').css('margin-left'));
								bl.find(".carousel-items").stop().animate({left: "-"+ it_w +"px"}, settings.animationSpeed, function(){
									bl.find(".carousel-items .carousel-item").eq(0).clone().appendTo(bl.find(".carousel-items")); 
									bl.find(".carousel-items .carousel-item").eq(0).remove(); 
									bl.find(".carousel-items").css({"left":"0px"}).removeClass('animation_on'); 
									right_switch();
		
								});
							}


							bl.find('.carousel-item').removeClass("active");
							active_bl.next().addClass("active");
						}
					}
					if (parseInt(bl.find('.carousel-items').css("left")) == (-more_num)) {
						bl.removeClass("overlay_r");
					}

				} else if (active_bl.attr("data-slides") != last_elem) {
					right_switch();
					bl.find('.carousel-item').removeClass("active");
					active_bl.next().addClass("active");
				}
					e.preventDefault();

			});
			
			prev_btn.bind('click', function(e){
				var elem_width = bl.find(".carousel-item:eq(0)").outerWidth(),
				 	this_slides = $(this).closest(".us_slides"),
		            slides_item = this_slides.children(".slide_units").children(".slide_item"),
		            active_item = this_slides.children(".slide_units").children(".slide_item.active");
					function left_switch() {
						slides_item.removeClass("active");
		               	active_item.prev().addClass("active");
					}

				if (bl.find('.carousel-item').hasClass("active")){
					var active_bl = bl.find('.carousel-item.active');
				}

				if (parseInt(bl.find('.carousel-items').css("left")) !== 0){
					bl.addClass("overlay_r");
				
					if (settings.pagination == "true"){
						if(!bl.find('.carousel-items').hasClass('animation_on')) {
							var rp = bl.find('.carousel-item:first-child').offset().left,
								car_pr = bl.offset().left;
							if(rp < car_pr) {
								bl.find('.carousel-items').addClass('animation_on');
								var it_w = parseInt(bl.find('.carousel-items').css('left')) + bl.find('.carousel-item:eq(0)').outerWidth();
								
								bl.find(".carousel-items").stop().animate({left: it_w+'px'}, settings.animationSpeed, function(){
									bl.find('.carousel-items').removeClass('animation_on');
									left_switch();
								});
							} else {
								bl.find('.carousel-items').addClass('animation_on');
								var its = bl.offset().left + bl.outerWidth(),
									itl = bl.find('.carousel-item:last-child').offset().left + bl.find('.carousel-item:eq(0)').outerWidth(),
									need_left_an = its-itl;
								
								bl.find(".carousel-items").stop().animate({left: need_left_an+'px'}, settings.animationSpeed, function(){
									bl.find('.carousel-items').removeClass('animation_on');
									left_switch();
								});
							}

							if (bl.find('.carousel-item').first().hasClass("active")){
								bl.find('.carousel-item').removeClass("active");
								bl.find('.carousel-item').last().addClass("active");
							} else {
								bl.find('.carousel-item').removeClass("active");
								active_bl.prev().addClass("active");
							}
						}
					} else {
						if(!bl.find('.carousel-items').hasClass('animation_on')) {
							bl.find('.carousel-items').addClass('animation_on');
							
							if(settings.direction == 'vertical') {
								var it_h = bl.find('.carousel-item:eq(0)').outerHeight() + parseInt(bl.find('.carousel-item:eq(0)').css('margin-top')) + parseInt(bl.find('.carousel-item:eq(0)').css('margin-bottom'));
								
								bl.find('.carousel-item').eq(-1).clone().prependTo(bl.find('.carousel-items'));
								bl.find('.carousel-items').css({'top':'-'+it_h+'px'});
								bl.find('.carousel-item').eq(-1).remove();
								bl.find(".carousel-items").stop().animate({top: "0px"}, settings.animationSpeed, function(){
								bl.find('.carousel-items').removeClass('animation_on');
								left_switch();

								});
							} else {
								var it_w = bl.find('.carousel-item:eq(0)').outerWidth() + parseInt(bl.find('.carousel-item:eq(0)').css('margin-right')) + parseInt(bl.find('.carousel-item:eq(0)').css('margin-left'));
								
								bl.find('.carousel-item').eq(-1).clone().prependTo(bl.find('.carousel-items'));
								bl.find('.carousel-items').css({'left':'-'+it_w+'px'});
								bl.find('.carousel-item').eq(-1).remove();
								bl.find(".carousel-items").stop().animate({left: "0px"}, settings.animationSpeed, function(){
								bl.find('.carousel-items').removeClass('animation_on');
								left_switch();
								});
							}
							bl.find('.carousel-item').removeClass("active");
							active_bl.prev().addClass("active");
						}
					}
					if (parseInt(bl.find('.carousel-items').css("left")) == (-elem_width) ) {
						bl.removeClass("overlay_l");
					}
									
				} else if (active_bl.attr("data-slides") != 1) {
					left_switch();
					bl.find('.carousel-item').removeClass("active");
					active_bl.prev().addClass("active");


				}

		
				e.preventDefault();
			});
			
			bl.find(".pagination-item").bind('click', function(e){
				if(!bl.find('.carousel-items').hasClass('animation_on')) {
					if(!$(this).hasClass('current')) {
						bl.find('.carousel-items').addClass('animation_on');
						var data_this = $(this).attr("data-slides");
						bl.find('.pagination-item').removeClass('current');
						$(this).addClass('current');
						bl.find('.carousel-item').removeClass("active");
						bl.find('.carousel-item[data-slides='+data_this+']').addClass("active");
						/*bl.find(".carousel-items .carousel-item").each(function(){
							if (!$(this).index() == 0 && $(this).attr("data-slides") != data_this) {
								$(this).addClass("hidden");
							}
						});*/

						//bl.find(".carousel-item[data-slides="+data_this+"]").appendTo(bl.find(".carousel-items"));
						
						var it_w = bl.find('.carousel-item:eq(0)').outerWidth(),
							ind = bl.find('carousel-item:eq('+data_this+')'),
							left_need = (data_this-1)*(-it_w);
						
						bl.find(".carousel-items").stop().animate({left: left_need +"px"}, settings.animationSpeed, function(){
							/*bl.find(".carousel-items .carousel-item").eq(0).appendTo(bl.find(".carousel-items"));
							if (bl.find(".carousel-items .carousel-item").attr("data-slides") != data_this) {
								bl.find(".carousel-items .carousel-item").append(bl.find(".carousel-items")); 
								bl.find(".carousel-items .carousel-item").removeClass("hidden");
							} 
							bl.find(".carousel-items").css({"left":"0px"}).removeClass('animation_on'); */
							bl.find(".carousel-items").removeClass('animation_on');
						});
					}
				}
				e.preventDefault();
			});

			if(settings.play == "true") {
				setInterval(function(){
					if(settings.playOpt.pauseOnHover == "true") {
						if(!bl.is(':hover')) {
							next_btn.click();
						}
					} else {
						next_btn.click();
					}
				}, settings.playOpt.interval);
			}
			
			$(window).resize();
			var TimeOut;
			$(window).bind('resize', function(){
				clearTimeout(TimeOut);
				TimeOut = setTimeout(function(){
					var type = "data-desctop-num", 
						ww = $(window).width(); 	 	
					if (ww > settings.responsiveOpt.padWidth){
							type = "data-desctop-num";
					} 	else if  ( ww >= settings.responsiveOpt.phoneWidth && ww <= settings.responsiveOpt.padWidth) {
							type = "data-pad-num";
					} 	else if (ww < settings.responsiveOpt.phoneWidth) {
							type = "data-phone-num";
					}
					
					bl.find(".carousel-wrapper").each(function(){
						if (bl.is(':visible')) {
							var width_parent = bl.outerWidth(),
								mr = parseInt(bl.find('.carousel-item:eq(0)').css('margin-right')),
								pad_num = bl.attr(type);
								
								//alert(pad_num)
								if (typeof pad_num !== typeof undefined && pad_num !== "false") {
									pad_num = pad_num;
								} else {
									if(type == 'data-desctop-num') {
										pad_num = settings.responsiveOpt.desctopNum;
									} else if(type == 'data-pad-num') {
										pad_num = settings.responsiveOpt.padNum;
									} else if(type == 'data-phone-num') {
										pad_num = settings.responsiveOpt.phoneNum;
									}
								}
								
								
								
							var	pad_width = width_parent/pad_num,
								margin_num = pad_num - 1,
								w_minus = (mr*margin_num)/pad_num,
								pad_width = pad_width - w_minus;

							//alert(pad_width)
								
							bl.find(" .carousel-item ").css("width" , pad_width+'px' );
						}
					});
				}, 200);
			});
			
			  $(document).on("click", ".picnic_carousel .pag_item", function(e){
		        var left_pos = parseInt(bl.find(".carousel-items").css("left")),
		        	num_elem = bl.attr("data-desctop-num"),
		        	this_attr = $(this).attr("data-slides"),
		        	width_elem = bl.find('.carousel-item').outerWidth(),
		        	prev_event = (this_attr - 1) * width_elem;
		        	next_event = (this_attr - num_elem) * width_elem;
		        if ((left_pos + prev_event) == 0 ) {
		        	bl.find(".nav-prev").click();
		        } else  if ((left_pos + next_event) == 0 ){
		        	bl.find(".nav-next").click();
		        }
		        var this_slides = $(this).closest(".us_slides"),
		            this_data = $(this).attr("data-slides");
		        this_slides.children(".pag_units").find(".pag_item").removeClass("active");
		        $(this).addClass("active");
		        this_slides.children(".slide_units").children(".slide_item").removeClass("active");
		        this_slides.children(".slide_units").children(".slide_item[data-slide="+this_data+"]").addClass("active");
		    });
	

			$(function(){
				var type = "data-desctop-num", 
					ww = $(window).width(); 	 	
				if (ww > settings.responsiveOpt.padWidth){
						type = "data-desctop-num";
				} 	else if  ( ww >= settings.responsiveOpt.phoneWidth && ww <= settings.responsiveOpt.padWidth) {
						type = "data-pad-num";
				} 	else if (ww < settings.responsiveOpt.phoneWidth) {
						type = "data-phone-num";
				}
				
				bl.find(".carousel-wrapper").each(function(){
					if (bl.is(':visible')) {
						var width_parent = bl.outerWidth(),
							mr = parseInt(bl.find('.carousel-item:eq(0)').css('margin-right')),
							pad_num = bl.attr(type);
							
							//alert(pad_num)
							if (typeof pad_num !== typeof undefined && pad_num !== "false") {
								pad_num = pad_num;
							} else {
								if(type == 'data-desctop-num') {
									pad_num = settings.responsiveOpt.desctopNum;
								} else if(type == 'data-pad-num') {
									pad_num = settings.responsiveOpt.padNum;
								} else if(type == 'data-phone-num') {
									pad_num = settings.responsiveOpt.phoneNum;
								}
							}
							
							
							
						var	pad_width = width_parent/pad_num,
							margin_num = pad_num - 1,
							w_minus = (mr*margin_num)/pad_num,
							pad_width = pad_width - w_minus;

						//alert(pad_width)
							
						bl.find(" .carousel-item ").css("width" , pad_width+'px' );
					}
				});
			})
			
			var txs, txe, tys, tye;
			
			document.addEventListener('touchend', function(e) {
				var touch = e.touches[0];
				var target = e.target;
				//alert(touch.pageX + " - " + touch.pageY);
				if($(target).closest(bl).length > 0) {
					//alert(touch.data.touchstartx)
					var delX = txs - txe;
					var delY = tys - tye;
					var deltaX = parseInt(Math.abs(delX));
					var deltaY = parseInt(Math.abs(delY));
					
					if(deltaX > deltaY && deltaX > 80) {
						if(delX > 0) {
							next_btn.click();
						} else {
							prev_btn.click();
						}
					}
				}
			}, false);
			
			document.addEventListener('touchmove', function(e) {
				var touch = e.touches[0];
				var target = e.target;
				//alert(touch.pageX + " - " + touch.pageY);
				if($(target).closest(bl).length > 0) {
					//alert(touch.data.touchstartx)
					txe = touch.pageX;
					tye = touch.pageY;
					
					//alert(ts +" || "+ tm)
				}
			}, false);
			
			document.addEventListener('touchstart', function(e) {
				var touch = e.touches[0];
				var target = e.target;
				//alert(touch.pageX + " - " + touch.pageY);
				if($(target).closest(bl).length > 0) {
					//alert(touch.data.touchstartx)
					
					txs = touch.pageX
					tys = touch.pageY
					
				}
			}, false);
		});
	}
})(jQuery)