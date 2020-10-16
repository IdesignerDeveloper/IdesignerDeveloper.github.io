export var cursor = function(){
    let cursor = document.getElementsByClassName("cursor")[0]; 
    var number_of_designs = document.getElementsByClassName("design").length;
    document.addEventListener('mousemove',function(e){
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
    });
    var number_of_projects = document.getElementsByClassName("project").length;
    for(var i=0;i<number_of_projects;i++){
        var project = document.getElementsByClassName("project")[i];
        project.addEventListener("mousemove",function(e){
            cursor.classList.add("cursor_on_project");
            cursor.style.transform = "scale(2.5)";
        })
        project.addEventListener("mouseout",function(e){
            cursor.classList.remove("cursor_on_project");
            cursor.style.transform = "scale(1)";
        })
    }
    var number_of_cursors_on_designs = document.getElementsByClassName("cursor_on_design").length;
    for(var j=1;j<number_of_designs;j++){
        document.getElementsByClassName("design")[j].addEventListener("mousemove",function(e){
            cursor.style.transform = "scale(0.25)";
            for(var i=0;i<number_of_cursors_on_designs;i++){
                let cursor_on_design = document.getElementsByClassName("cursor_on_design")[i];
                cursor_on_design.style.backgroundImage = "url('./assets/design-2.jpg')";
                cursor_on_design.style.transform = "scale(1)";
                cursor_on_design.style.top = e.pageY + "px";
                cursor_on_design.style.left = e.pageX + "px";
            }
        });
        document.getElementsByClassName("design")[j].addEventListener("mouseout",function(e){
            cursor.style.transform = "scale(1)";
            for(var i=0;i<number_of_cursors_on_designs;i++){
                let cursor_on_design = document.getElementsByClassName("cursor_on_design")[i];
                cursor_on_design.style.transform = "scale(0)";
            }
        });
    }
}