export var cursor = function(){
    let cursor = document.getElementsByClassName("cursor")[0]; 
    let cursor_on_design = document.getElementsByClassName("cursor_on_design")[0];
    let number_of_designs = document.getElementsByClassName("design").length;
    document.addEventListener('mousemove',function(e){
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
    });
    var number_of_projects = document.getElementsByClassName("project").length;
    for(let i=0;i<number_of_projects;i++){
        let project = document.getElementsByClassName("project")[i];
        project.addEventListener("mousemove",function(e){
            cursor.classList.add("cursor_on_project");
            cursor.style.transform = "scale(2.5)";
        })
        project.addEventListener("mouseout",function(e){
            cursor.classList.remove("cursor_on_project");
            cursor.style.transform = "scale(1)";
        })
    }
    for(let i=1; i<number_of_designs; i++){
        let design = document.getElementsByClassName("design");
        //for every i th design we add a event listener and make changes to cursor on design.
        design[i].addEventListener("mousemove", function(e){
            //now for every i design...
            if(i==1){
                cursor_on_design.style.backgroundImage = "url('./assets/6.jpg')";
            }
            if(i==2){
                cursor_on_design.style.backgroundImage = "url('./assets/7.jpg')";
            }
            if(i==3){
                cursor_on_design.style.backgroundImage = "url('./assets/8.jpg')";
            }
            if(i==4){
                cursor_on_design.style.backgroundImage = "url('./assets/9.jpg')";
            }
            if(i==5){
                cursor_on_design.style.backgroundImage = "url('./assets/10.jpg')";
            }
            if(i==6){
                cursor_on_design.style.backgroundImage = "url('./assets/11.jpg')";
            }
            if(i==7){
                cursor_on_design.style.backgroundImage = "url('./assets/1.jpg')";
            }
            cursor_on_design.style.transform = "scale(1)";
            cursor_on_design.style.top = e.pageY + "px";
            cursor_on_design.style.left = e.pageX + "px";
        })
        design[i].addEventListener("mouseout", function(){
            cursor_on_design.style.transform = "scale(0)";
        })
    }
}