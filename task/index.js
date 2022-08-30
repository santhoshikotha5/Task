var submit=document.querySelectorAll("button")[0];
var r,table=document.getElementById("table");
submit.addEventListener("click",function(){
   var tot= parseInt(document.getElementById("math").value)+parseInt(document.getElementById("english").value)+parseInt(document.getElementById("physics").value)+parseInt(document.getElementById("chemistry").value)+parseInt(document.getElementById("biology").value);
   
   document.getElementById("total").setAttribute("value",tot);
   if(tot>70 && tot<=100){

     document.getElementById("grade").setAttribute("value",'A');
   }

   else if(tot>50 && tot<=70){
     document.getElementById("grade").setAttribute("value",'B');
   }

   else{
     document.getElementById("grade").setAttribute("value",'C');
   }
})
const arr=[];
var save=document.querySelectorAll("button")[2];
function classA(id,name,math,english,physics,chemistry,biology,total,grade){
  this.id=id;
  this.name=name;
  this.math=math;
  this.english=english;
  this.physics=physics;
  this.biology=biology;
  this.chemistry=chemistry;
  this.total=total;
  this.grade=grade;
}

function checkEmpty(){
  var isEmpty=false,
  id=document.getElementById("id").value,name=document.getElementById("stuname").value;
  if(id==="" || name===""){
    alert("ID or Name can't be empty");
    isEmpty=true;
  }
  
  return isEmpty;
}

save.addEventListener("click",function(e){
  if(!checkEmpty()){
    const formEl=document.querySelector("form");
    const tbodyEl=document.querySelector("tbody");
    e.preventDefault();
    const id=document.getElementById("id").value;
    const name=document.getElementById("stuname").value;
    const total=document.getElementById("total").value;
    const grade=document.getElementById("grade").value;
    const math=document.getElementById("math").value;
    const english=document.getElementById("english").value;
    const physics=document.getElementById("physics").value;
    const chemistry=document.getElementById("chemistry").value;
    const biology=document.getElementById("biology").value;
    a=new classA(id,name,math,english,physics,chemistry,biology,total,grade);
    
    arr.push(a);
    
  
    tbodyEl.innerHTML+=`
    <tr>
    <td>${arr[id-1].id}</td>
    <td>${arr[id-1].name}</td>
    <td>${arr[id-1].math}</td>
     <td>${arr[id-1].english}</td>
      <td>${arr[id-1].physics}</td>
       <td>${arr[id-1].chemistry}</td>
        <td>${arr[id-1].biology}</td>
    <td>${arr[id-1].total}</td>
    <td>${arr[id-1].grade}</td>
    </tr>
    `;

  myFunction();
  display();
  }   
})
function display(){
  
   console.log(arr);
  
}

function myFunction(){
   
   for(var i=0;i<table.rows.length;i++){
    table.rows[i].onclick=function(){
      r=this.rowIndex;
      console.log(r);
      
    document.getElementById("id").value=arr[r-1].id;
    document.getElementById("stuname").value=arr[r-1].name;
    document.getElementById("math").value=arr[r-1].math;
    document.getElementById("english").value=arr[r-1].english;
    document.getElementById("physics").value=arr[r-1].physics;
    document.getElementById("chemistry").value=arr[r-1].chemistry;
    document.getElementById("biology").value=arr[r-1].biology;
    document.getElementById("total").setAttribute("value",arr[r-1].total);
    document.getElementById("grade").setAttribute("value",arr[r-1].grade);
  
    };
   }
}
  
var reset=document.querySelectorAll("button")[3];
reset.addEventListener("click",function(){
    document.getElementById("id").value='';
    document.getElementById("stuname").value='';
    document.getElementById("math").value='';
    document.getElementById("english").value='';
    document.getElementById("physics").value='';
    document.getElementById("chemistry").value='';
    document.getElementById("biology").value='';
    document.getElementById("total").setAttribute("value",'');
    document.getElementById("grade").setAttribute("value",'');


})
myFunction();
var modify=document.querySelectorAll("button")[4];
modify.addEventListener("click",function(e){
   
    const id=document.getElementById("id").value;
    const name=document.getElementById("stuname").value;
     const math=document.getElementById("math").value;
    const english=document.getElementById("english").value;
    const physics=document.getElementById("physics").value;
    const chemistry=document.getElementById("chemistry").value;
    const biology=document.getElementById("biology").value;
   const total= parseInt(document.getElementById("math").value)+parseInt(document.getElementById("english").value)+parseInt(document.getElementById("physics").value)+parseInt(document.getElementById("chemistry").value)+parseInt(document.getElementById("biology").value);
   
    const grade=document.getElementById("grade").value;
    arr[r-1].id=id;
    arr[r-1].name=name;
    arr[r-1].math=math;
    arr[r-1].english=english;
    arr[r-1].physics=physics;
    arr[r-1].chemistry=chemistry;
    arr[r-1].biology=biology;
    arr[r-1].total=total;
    arr[r-1].grade=grade;
    display();
    table.rows[r].cells[1].innerHTML=name;
    table.rows[r].cells[2].innerHTML=math;
    table.rows[r].cells[3].innerHTML=english;
    table.rows[r].cells[4].innerHTML=physics;
    table.rows[r].cells[5].innerHTML=chemistry;
    table.rows[r].cells[6].innerHTML=biology;
    table.rows[r].cells[7].innerHTML=total;
    table.rows[r].cells[8].innerHTML=grade;
    

})

var del=document.querySelectorAll("button")[1];

del.addEventListener("click",function(){
  table.deleteRow(r);
  
  arr.splice(r-1,1);
  display();
})

