(function($){
    $.fn.searchDrop=function(){
        var select=$("<div></div>")
        select.addClass("wrapper")
        for(var i=0 ; i<arguments.length;i++){
            select.html(select.html()+"<span>"+arguments[i]+"</span>")
        }
        var wrapdiv=$("<div></div>")
        wrapdiv.addClass("wrap")
        $(this).wrap(wrapdiv)
        this.after(select)
        var marginTop=this.css("marginTop")
        marginTop=Number(marginTop.slice(0,marginTop.length-2));
        var top=this.outherHeight()+marginTop

        select.css({top:top+"px"})
    }


}(jQuery))