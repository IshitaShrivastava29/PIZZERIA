name_of_pizza=[];

function submit(){
    var name1=document.getElementById("pizza_1").value;

    var name2=document.getElementById("pizza_2").value;

    var name3=document.getElementById("pizza_3").value;

    var name4=document.getElementById("pizza_4").value;

    var name5=document.getElementById("pizza_5").value;

     name_of_pizza.push(name1);

     name_of_pizza.push(name2);

     name_of_pizza.push(name3);

     name_of_pizza.push(name4);

     name_of_pizza.push(name5);

     document.getElementById("display_name").innerHTML= name_of_pizza;
     document.getElementById("submit").style.display ="none";
     document.getElementById("sort").style.display ="inline-block";
}
function sort(){
   name_of_pizza.sort();
   console.log(name_of_pizza);
   document.getElementById("display_name").innerHTML=name_of_pizza;
}

