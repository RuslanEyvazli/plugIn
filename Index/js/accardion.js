$("button").click( 
    function(){
        $(this).stop().siblings(".acc").slideUp(200)
        $(this).next(".acc").slideDown(200)  
    }
)