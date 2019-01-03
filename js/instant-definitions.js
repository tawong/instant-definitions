(function ($) {

    $.fn.instantDefinitions = function (options) {

        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "red"
        }, options);

        $(this).find("a").css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });

    };

}(jQuery));
