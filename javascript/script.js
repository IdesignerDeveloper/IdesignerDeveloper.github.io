import { cursor } from '../javascript/cursor.js';
import { hero } from '../javascript/hero_section.js';
import { menu_function } from '../javascript/menu.js'
import { remove_loader } from '../javascript/remove_loader.js'

menu_function();
cursor();
menu_function();
hero();
remove_loader();

document.getElementById("menu_switch").addEventListener("click",function(){
    document.getElementsByClassName("menu")[0].classList.toggle("menu_active")
});
document.getElementsByClassName("close_button")[0].addEventListener("click",function(){
    document.getElementsByClassName("menu")[0].classList.toggle("menu_active")
});
for(let i=0;i<5;i++){
    document.getElementsByClassName("menu_item")[i].addEventListener("mousemove",function(){
        if(i==0){ 
            document.getElementsByClassName("menu_item")[i].style.backgroundImage = "url(./assets/menu_item__1.png)";
        }
        if(i==1){ 
            document.getElementsByClassName("menu_item")[i].style.backgroundImage = "url(./assets/menu_item_2.jpg)";
        }
        if(i==2){ 
            document.getElementsByClassName("menu_item")[i].style.backgroundImage = "url(./assets/menu_item_3.jpg)";
        }
        if(i==3){ 
            document.getElementsByClassName("menu_item")[i].style.backgroundImage = "url(./assets/menu_item_4.jpg)";
        }
        if(i==4){ 
            document.getElementsByClassName("menu_item")[i].style.backgroundImage = "url(./assets/menu_item__1.png)";
        }
    })
    document.getElementsByClassName("menu_item")[i].addEventListener("mouseout",function(){    
        document.getElementsByClassName("menu_item")[i].style.backgroundImage = "none";
    });
}