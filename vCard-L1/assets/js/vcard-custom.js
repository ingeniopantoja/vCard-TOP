
(function ($) {
"use strict";

function showPage(bt, pagename) {
    var btn = $(bt),
        pageContListID = $('.page-container li#' + pagename),
        pageContListSelected = $('.page-container li.selected'),
        pageTitleCont = pageContListID.find(".title-container"),
        pageDescription = pageContListID.find(".description");

    if (!pageContListID.hasClass('selected')) {
        pageContListSelected.find(".title-container h2").addClass('rotated');
        $(".nav-menu li.selected").removeClass('selected');
        btn.addClass('selected');
        if (window.innerWidth > 767) {
            $(".selected .description").jQueryTween({
                from: {
                    height: 475
                },
                to: {
                    height: 0
                },
                duration: 400,
                easing: TWEEN.Easing.Sinusoidal.Out
            }, function() { // callback when tween is finished  
                pageContListSelected.addClass('hidden');
                pageContListSelected.find(".description").css('height', '475px');
                pageContListSelected.removeClass('selected');
                pageContListID.removeClass('hidden');
                pageContListID.addClass('selected');
            });
            $(".selected .title-container").jQueryTween({
                from: {
                    translate: {
                        y: 0
                    }
                },
                to: {
                    translate: {
                        y: 140
                    }
                },
                duration: 400,
                easing: TWEEN.Easing.Sinusoidal.Out
            });
            pageTitleCont.jQueryTween({
                from: {
                    translate: {
                        y: 150
                    }
                },
                to: {
                    translate: {
                        y: 0
                    }
                },
                duration: 700,
                delay: 350,
                easing: TWEEN.Easing.Sinusoidal.In
            }, function() {
                pageTitleCont.find("h2").removeClass('rotated');
            });
        } else {
            $(".selected .description").jQueryTween({
                from: {
                    translate: {
                        y: 0
                    }
                },
                to: {
                    translate: {
                        y: 850
                    }
                },
                duration: 400,
                easing: TWEEN.Easing.Sinusoidal.Out
            }, function() { // callback when tween is finished  
                pageContListSelected.addClass('hidden');
                pageContListSelected.removeClass('selected');
                pageContListID.removeClass('hidden');
                pageContListID.addClass('selected');
            });
            $(".selected .title-container").jQueryTween({
                from: {
                    translate: {
                        x: 0
                    }
                },
                to: {
                    translate: {
                        x: -800
                    }
                },
                duration: 400,
                easing: TWEEN.Easing.Sinusoidal.Out
            });
            pageTitleCont.jQueryTween({
                from: {
                    translate: {
                        x: -800
                    }
                },
                to: {
                    translate: {
                        x: 0
                    }
                },
                duration: 700,
                delay: 350,
                easing: TWEEN.Easing.Sinusoidal.In
            }, function() {
                pageTitleCont.css('-webkit-transform', 'translate3d(0px, 0px, 0px)');
                pageTitleCont.find("h2").removeClass('rotated');
                pageDescription.css({
                    'height': 'auto',
                    '-webkit-transform': 'translate3d(0px, 0px, 0px)'
                });
            });
        }
    }
}

/*---------------Scripts for Page Trasition Animation Ends-------------------------*/
/* function for hide Front Screen*/
function hidefront() {
    var frontPage = $("#frontpage"),
        frontPageContent = $("#content"),
        pageHome = $("#home"),
        pageHomeDesc = pageHome.find(".description"),
        homeTitleContainer = pageHome.find(".title-container");

    frontPage.find(".front-img").css("opacity", 0);
    //$(".overlay-div").fadeOut(2000);  
    if (window.innerWidth > 767) {
        var top = frontPage.position().top - ((window.innerHeight - 620) / 2);
        frontPage.jQueryTween({
            from: {
                translate: {
                    x: 0,
                    y: 0
                },
                width: '550px',
                height: frontPage.height()
            },
            to: {
                translate: {
                    x: -287,
                    y: -top
                },
                width: '256px',
                height: '300px'
            },
            duration: 1000,
            easing: TWEEN.Easing.Circular.Out
        }, function() { // callback when tween i;'ll;'\s finished   
            frontPage.addClass("hidden");
            frontPageContent.removeClass("hidden");
            centerContent();
        });
    } else {
        var top = frontPage.position().top - 15;
        frontPage.jQueryTween({
            from: {
                translate: {
                    y: 0
                },
                height: frontPage.height()
            },
            to: {
                translate: {
                    y: -top
                },
                height: '300px'
            },
            duration: 1000,
            easing: TWEEN.Easing.Circular.Out
        }, function() { // callback when tween is finished  
            frontPage.addClass("hidden");
            frontPageContent.removeClass("hidden");
            centerContent();
        });
    }
    frontPage.find("h1").jQueryTween({
        from: {
            translate: {
                y: 0,
            }
        },
        to: {
            translate: {
                y: -150
            }
        },
        duration: 500,
        easing: TWEEN.Easing.Circular.Out
    });
    frontPage.find("h3").jQueryTween({
        from: {
            translate: {
                y: 0
            }
        },
        to: {
            translate: {
                y: -150
            }
        },
        duration: 500,
        easing: TWEEN.Easing.Circular.Out
    });
    frontPageContent.find("#menu-container").jQueryTween({
        from: {
            translate: {
                y: 250
            },
            opacity: 0
        },
        to: {
            translate: {
                y: 0
            },
            opacity: 1
        },
        duration: 500,
        delay: 950,
        easing: TWEEN.Easing.Circular.Out
    }, function() {
        homeTitleContainer.removeClass("hidden");
        $("#profile-img").removeClass('transparent');
    });
    
    homeTitleContainer.jQueryTween({
        from: {
            translate: {
                y: -150
            },
            opacity: 0
        },
        to: {
            translate: {
                y: 0
            },
            opacity: 1
        },
        duration: 500,
        delay: 1450,
        easing: TWEEN.Easing.Circular.Out
    }, function() {
        pageHomeDesc.removeClass("hidden");
    });
    pageHomeDesc.jQueryTween({
        from: {
            translate: {
                y: 250
            },
            opacity: 0
        },
        to: {
            translate: {
                y: 0
            },
            opacity: 1
        },
        duration: 500,
        delay: 1900,
        easing: TWEEN.Easing.Circular.Out
    }, function() {
        pageHome.find('.fade-text').removeClass('transparent');
        pageHome.find('ul.personal-info li.rotate-out').removeClass('rotated');
    });
}
/*Code for Centering the vCard*/
function centerContent() {
    var content = $('#content'),
        frontMain = $('#frontpage');
        
    if (window.innerWidth > 767) {
        content.css("top", (window.innerHeight - content.height()) / 2);
    } else {
        content.css("top", 15);
    }
    if (window.innerHeight > frontMain.height()) {
        frontMain.css("top", (window.innerHeight - frontMain.height()) / 2);
    } else {
        frontMain.css("top", 15);
    }
}

$(window).on('load', function() {
    $(".loading-screen").fadeOut("slow");
    centerContent();
});
$(window).on('resize', function() {
    if (window.innerWidth > 767) {
        $('.description').css('-webkit-transform', 'none');
        $('.description').css('height', '475px');
    } else {
        $('.description').css('height', 'auto');
    }
    centerContent();
});


/*-------------- Document Ready --------------*/
$(document).on('ready', function() {
    var eduTap = $('.education-class li'),
        frontPage = $("#frontpage");

    setTimeout(function(){
        $(".frontclick").addClass('active');
    },3000);

      
    frontPage.on('click', function() {
        $(".frontclick").removeClass('active');
        hidefront();
    });

    $('#menu-container .nav-btn').on('click', function() {
        var $this = $(this);
        showPage($this, $this.data('page'))
    });
 
    $('.folio-btn').on('click', function() {
        setTimeout(function() {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            $grid.isotope({
                filter: filterValue
            });
            $('.button-group .is-checked').removeClass('is-checked');
            $('.button-group li:first-child').addClass('is-checked');
        }, 1000);
    });
    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'li', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    var firstTime = false;
    $("#resume-btn").on('click', function() {
        if (!firstTime) {
            var startColor = '#f4d03f';
            var endColor = '#f4d03f';
            var element1 = document.getElementById('line-container1');
            var element2 = document.getElementById('line-container2');
            var element3 = document.getElementById('line-container3');
            var circle1 = new ProgressBar.Circle(element1, {
                color: startColor,
                trailColor: '#fff6da',
                trailWidth: 7,
                duration: 2000,
                easing: 'easeInOut',
                strokeWidth: 8,
                // Set default step function for all animate calls
                step: function(state, circle1) {
                    circle1.path.setAttribute('stroke', state.color);
                    $("#progress-text1").text((circle1.value() * 100).toFixed(0) + "%");
                }
            });
        }
    });
    $(".rotate").textrotator({
       animation: "flipUp",
        speed: 2250             
    });

});
}(jQuery));
