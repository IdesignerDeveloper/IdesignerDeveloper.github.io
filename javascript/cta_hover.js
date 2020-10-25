export var cta_hover = function(){
    document.getElementsByClassName("animate_cta")[0].addEventListener("mousemove",function(){
        document.getElementsByClassName("cta_background")[0].style.width="55vh";
    });
    document.getElementsByClassName("animate_cta")[0].addEventListener("mouseout",function(){
        document.getElementsByClassName("cta_background")[0].style.width="0vh";
    });
}