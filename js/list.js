let monthVar = document.getElementById('month').innerHTML

function calCost(){
  // console.log("start");
  let costCal = 0;
  let price = 0;
  let qtyCal = 0;
  
  $('.table tbody tr').each(function(i){
    // console.log(i);
    price = document.getElementById("price"+i).innerHTML.split("$")[1];
    qtyCal = document.getElementById("qty"+i).innerHTML;
    costCal = price*qtyCal;
    if(document.getElementById("cost"+i)){
      document.getElementById("cost"+i).innerHTML = "$"+costCal.toString();
    }
    if(document.getElementById("mobileCost"+i)){
      document.getElementById("mobileCost"+i).innerHTML = "$"+costCal.toString();
    }
    // console.log(costCal); 
  });
}

$(document).ready(calCost());

$('#selectMM').change(function(){
  $('.load').fadeToggle(300);
  let selectVar = $('#selectMM').val();
  console.log(selectVar);
  // $('.table').load('list'+selectVar+'.html #table');
  // $('.tableMobile').load('list'+selectVar+'.html #tableMobile');
  $('.table').load('list'+selectVar+'.html #table',function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success"){
      calCost();
    }else{
      alert("Error: "+xhr.status+": "+xhr.statusText);
    } 
  });
  $('.tableMobile').load('list'+selectVar+'.html #tableMobile',function(responseTxt,statusTxt,xhr){
    if(statusTxt=="success"){
      calCost();
    }else{
      alert("Error: "+xhr.status+": "+xhr.statusText);
    }
    $('.load').fadeToggle(300);
  });
  if(selectVar){
    document.getElementById('month').innerHTML = $('#selectMM option:selected').text();
  }else{
    document.getElementById('month').innerHTML = monthVar;
  }
});