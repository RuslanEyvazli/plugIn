(function($){
    $.fn.changeBg=function(color,font){
        $(this).css({backgroundColor:color,
                    fontSize:font,
    })
    $.fn.floatAnima=function(option){
        var myDefault={
            speed:1000,
            minutes:300,
            trigger:"click"
        }
        var settings=$.extend(myDefault, option)
        this.on(settings.trigger ,function(){
            $(this).css("position","relative").animate({
                left:"+="+settings.speed +"px",},settings.minutes,function(){
                    $(this).animate({
                        left:"0px",} ,settings.minutes)
                })
        })
       
    }
    }
}(jQuery))