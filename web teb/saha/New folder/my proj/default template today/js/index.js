/*
$("#options-container i").click(function(){
                                let length=$("#options-box").outerWidth()
if($("#options-box").css("left")=="0px"){
   $("#options-container").animate({left:'- '+length},1000)
   }
   else{
        $("#options-container").animate({left:'0px'},1000)
   }                             
 }))
 
 let lis=$("#options-container ul li");
let colors=[' orange','yellow','tomato','teal']
for(let i=0;i<colors.length;i++){
    lis.eq(i).css("backgroundColor",colors[i])
}
lis.click(function({
    let color=$(this).css("backgroundCollor");
    $("h1 ,h2,h3,p").css("color",color)
}))
*/

$("#option i").click(function(){
    let x=$("#options-color").outerWidth()
    if($("#option").css("left")=='0px'){
       $("#option").animate({left:'-'+x},1000)
    }else{
        $("#option").animate({left:"0px"},1000)
    }
    
})

let list=$("#option ul li")
let colors=["teal","blue","orange","tank","#09c","green"]

for( var i=0;i<colors.length;i++){
  list.eq(i).css("backgroundColor",colors[i])
}

$("#option ul li").click(function(){
  let matlop= $(this).css("backgroundColor");
  $("h1,h2,h3,h4,h5,h6,p").css("color", matlop)
""
})
$("#optionsImage img").click(function(){
let imgesource=$(this).attr("src");
$("#myimage").css("backgroundImage","url("+ imgesource +")")
})




















