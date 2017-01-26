$(document).ready(function () {

    /*$(".onyx-carousel").each(function () {
        var carousel = $(this),
            step = carousel.find(".onyx-dot").outerWidth(),
            coordinate = 0,
            dots_wrapper = carousel.find(".onyx-dots-wrapper").outerWidth(),
            dots_width = carousel.find(".onyx-dots").outerWidth(),
            pos_dots;


        carousel.find(".onyx-dot").click(function () {
            var this_dot = $(this).data("onyx-dot");

            carousel.find(".onyx-dot").removeClass("active");
            $(this).addClass("active");


            carousel.find(".onyx-item").removeClass("active");
            carousel.find(".onyx-item[data-onyx-slide=" + this_dot + "]").addClass("active");


            if ($(this).hasClass("left_edge")) {
                step_left();
            } else if ($(this).hasClass("right_edge")) {
                step_right();
            }
            load_img();
        });


        carousel.find(".onyx-next").click(function () {
            var active_dot = carousel.find(".onyx-dot.active"),
                active_item = carousel.find(".onyx-item.active");

            step_right();

            if ((active_dot.next().length > 0) && !(active_dot.hasClass("right_edge"))) {
                active_dot.removeClass("active");
                active_dot.next().addClass("active");
            }

            if (active_item.next().length > 0) {
                active_item.removeClass("active");
                active_item.next().addClass("active");
            }


            load_img();
        });

        carousel.find(".onyx-prev").click(function () {
            var active_dot = carousel.find(".onyx-dot.active"),
                active_item = carousel.find(".onyx-item.active");


            step_left();

            if ((active_dot.prev().length > 0) && !(active_dot.hasClass("left_edge"))) {
                active_dot.removeClass("active");
                active_dot.prev().addClass("active");
            }

            if (active_item.prev().length > 0) {
                active_item.removeClass("active");
                active_item.prev().addClass("active");
            }

            load_img();
        });


        function step_left() {
            var left_edge = carousel.find(".onyx-dot.left_edge"),
                right_edge = carousel.find(".onyx-dot.right_edge");

            if (!coordinate == 0) {
                coordinate = coordinate + step;

                carousel.find(".onyx-dots").css({
                    transform: 'translate3d(' + (coordinate) + 'px' + ',0px, 0px)'
                });


                left_edge.removeClass("left_edge");
                left_edge.prev().addClass("left_edge");
                right_edge.removeClass("right_edge");
                right_edge.prev().addClass("right_edge");


            }
        }

        function step_right() {
            pos_dots = coordinate - dots_wrapper;

            var left_edge = carousel.find(".onyx-dot.left_edge"),
                right_edge = carousel.find(".onyx-dot.right_edge");

            if ((pos_dots + dots_width) > 0) {
                coordinate = coordinate - step;

                carousel.find(".onyx-dots").css({
                    transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)'
                });


                left_edge.removeClass("left_edge");
                left_edge.next().addClass("left_edge");
                right_edge.removeClass("right_edge");
                right_edge.next().addClass("right_edge");


            }
        }


        function load_img() {
            var active_item = carousel.find(".onyx-item.active"),
                img_src = active_item.data("img-src"),
                loading_img = active_item.find("img");

            if (loading_img.length == 0) {
                active_item.find(".onyx-item__img").prepend("<img src='" + img_src + "' alt=''>");

                loading_img = active_item.find("img");

                $(loading_img).load(function () {
                    loading_img.addClass("loaded");
                });
            }
        }


        init_slider();

        function init_slider() {
            var first_dot = carousel.find(".onyx-dot:eq(0)"),
                val_dots = carousel.find(".onyx-dots").data("dots-items");

            $(".onyx-dot:eq(0)").addClass("left_edge");
            $(".onyx-dot:eq(" + (val_dots - 1) + ")").addClass("right_edge");

            first_dot.trigger("click");

            load_img();

        }


    });*/


});

var OnyxCarousel = function (className) {
    $(className).each(function () {
        var self = this;

        self.el = $(this);
        self.length = self.el.find('.onyx-carousel__item').length;
        self.visibleElements = self.el.data('visible-elements');
        self.step = self.el.find(".onyx-dot").outerWidth();
        self.coordinate = 0;
        self.pagination = self.el.find(".onyx-carousel__pagination");
        self.paginationItem = self.el.find('.onyx-carousel__pagination-item');
        self.paginationWidth = self.pagination.outerWidth();
        self.paginationNum = parseInt(self.pagination.attr('data-desctop-num'));
        self.paginationItemWidth = parseInt(self.paginationWidth / self.paginationNum);
        self.paginationWrapper = self.el.find(".onyx-carousel__pagination-wrapper");
        self.nextBtn = self.el.find('.onyx-carousel__pagination-right');
        self.prevBtn = self.el.find('.onyx-carousel__pagination-left');
        self.position = 0;

        // self vars
        self.current = 1;

        self.init = function () {
            var Array = [];

            self.paginationInit();

            self.el.find('.onyx-carousel__item').each(function () {
                Array.push($(this).attr('data-slide'));
                self.el
                    .find('.onyx-carousel__pagination-item:eq(' + $(this).index() + ')')
                    .attr('data-slide', $(this).attr('data-slide'));
            });

            self.bindings();
        };

        self.paginationInit = function () {
            self.paginationWrapper.css({width: self.length * self.paginationItemWidth});

            self.paginationItem.css({width: self.paginationItemWidth})
        };

        self.bindings = function () {

            // inside pagination binding
            self.el.find('.pag_item').on('click', function () {
                var $this = $(this);
                var current = $this.attr('data-pag');
                self.switchImage(current, $this);
            });

            // bottom pagination binding
            self.el.find('.onyx-carousel__pagination-item').on('click', function () {
                var $this = $(this);
                var slideNum = parseInt($this.attr('data-slide'));
                var slideDirection;

                self.switchSlide(slideNum);

                if(slideNum > self.current) {
                    slideDirection = "right";
                } else if(slideNum < self.current) {
                    slideDirection = "left";
                } else {
                    return;
                }

                self.current = slideNum;
                self.movePag(slideDirection, self.paginationItemWidth, slideNum);
            });

            // next button binding
            self.nextBtn.on('click', function () {
                self.next();
            });

            // prev button binding
            self.prevBtn.on('click', function () {
                self.prev();
            });
        };

        self.next = function () {
            if (self.current > 0 && self.current < self.length) {
                var past = self.current;
                self.current = self.current + 1;
                self.switchSlide(self.current, past);
            }

            self.movePag('right', self.paginationItemWidth, self.current);
        };

        self.prev = function (slide) {
            if (self.current > 1) {
                self.current = self.current - 1;

                self.switchSlide(slide);
                self.movePag('left', self.paginationItemWidth, self.current);
            }
        };

        self.movePag = function (direction, step, slideNum) {
            console.log(self.current)
            var maxLeft = self.paginationItemWidth * self.length - self.paginationItemWidth * self.paginationNum;
            var curLeft = self.position;
            if (direction == "right" && curLeft > -maxLeft) {
                self.paginationWrapper.css({left: curLeft - self.paginationItemWidth});
                self.position -= self.paginationItemWidth;
            } else if (direction == "left" && curLeft < 0 && curLeft >= -maxLeft) {
                self.paginationWrapper.css({left: curLeft + self.paginationItemWidth});
                self.position += self.paginationItemWidth;
            }

            var pag = self.paginationItem.filter('[data-slide="' + slideNum + '"]');
            pag.siblings().removeClass('active').end().addClass('active');
        };

        self.switchSlide = function (current, past) {
            var item = self.el.find('.onyx-carousel__item[data-slide="' + current + '"]');

            if (!item.hasClass('active'))
                item.siblings().removeClass('active').end().addClass('active');
        };

        self.switchImage = function (slide, inside_pag) {
            var item = self.el.find('.onyx-carousel__item.active .onyx-carousel__subitem[data-slide="' + slide + '"]');
            if (!inside_pag.hasClass('active')) {
                item.siblings().removeClass('active').end().addClass('active');
                inside_pag.siblings().removeClass('active').end().addClass('active');
            }
        };

        self.init();
    });
};

$(document).ready(function () {
    new OnyxCarousel('.onyx-carousel');
});