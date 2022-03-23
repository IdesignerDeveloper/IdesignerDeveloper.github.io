export var hero = function(){
    let cursor = document.getElementsByClassName("cursor")[0];  
    for(let i=0;i<3;i++){
        document.getElementsByClassName("line_a")[i].addEventListener("mousemove",function(){
            //cursor.style.transform = "scale(1.5)";
            if(i==0){
                document.body.style.backgroundImage = "url(./assets/Interface_background-min.png)";
            }
            if(i==1){
                document.body.style.backgroundImage = "url(./assets/designer1.jpg)";
            }
            if(i==2){
                document.body.style.backgroundImage = "url(./assets/Developer_background-min.jpg)";
            }
        });
        document.getElementsByClassName("line_a")[i].addEventListener("mouseout",function(){
            //cursor.style.transform = "scale(1)";
            document.body.style.backgroundImage = "none";
        });
    }
}