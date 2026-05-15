let index = 0;
let qty = "";
let qtyValue = 0;
let qtyLabel = "";
let cost =0;

let mobileIndex = 0;
let mobileQty = "";
let mobileQtyValue = 0;
let mobileQtyLabel = "";
let mobileCost =0;

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
    document.getElementById("cost"+i).innerHTML = "$"+costCal.toString();
    document.getElementById("mobileCost"+i).innerHTML = "$"+costCal.toString();
    // console.log(costCal); 
  });
}

$(document).ready(calCost());

$('.btn,.btnMobile').click(function() {
  index = $('.table tbody tr').index($(this).closest('tr'));
  mobileIndex = $('.tableMobile tbody tr').index($(this).closest('tr'));

  
  qty = parseInt(document.getElementById("qty"+(index==-1?mobileIndex:index)).innerHTML);
      
  qtyValue = document.getElementById("qty"+(index==-1?mobileIndex:index));
  qtyLabel = document.getElementById("label"+(index==-1?mobileIndex:index));
  cost = document.getElementById("cost"+(index==-1?mobileIndex:index));
  
  mobileQty = parseInt(document.getElementById("mobileQty"+(mobileIndex==-1?index:mobileIndex)).innerHTML);
  mobileQtyValue = document.getElementById("mobileQty"+(mobileIndex==-1?index:mobileIndex));
  mobileQtyLabel = document.getElementById("mobileLabel"+(mobileIndex==-1?index:mobileIndex));
  mobileCost = document.getElementById("mobileCost"+(mobileIndex==-1?index:mobileIndex));
  // console.log("click"+index+"/"+qty+"m"+mobileIndex+"/"+mobileQty);
});

$('.plus').click(function(){
  // console.log("add"+qty+"m"+mobileQty);
  qtyLabel.style.color = '#666666';
  mobileQtyLabel.style.color = '#666666';
  
  qty = qty + 1;
  qtyValue.innerHTML = qty;
  mobileQtyValue.innerHTML = qty;
  calCost();
  
  if(qtyLabel.innerHTML!=""){
    qtyLabel.innerHTML = "";
    qtyLabel.classList.remove("active");
  }

  if(mobileQtyLabel.innerHTML!=""){
    mobileQtyLabel.innerHTML = "";
    mobileQtyLabel.classList.remove("active");
  }
});

$('.min').click(function(){
  // console.log("min"+qty+"m"+mobileQty);
  qtyLabel.style.color = '#666666';
  mobileQtyLabel.style.color = '#666666';
  
  if(qty>1){
    qtyLabel.innerHTML = "";
    qty = qty - 1;
    qtyValue.innerHTML = qty;
    mobileQtyValue.innerHTML = qty;
    calCost(); 
  }else{
    qtyLabel.classList.add("active");
    qtyLabel.innerHTML = "At least buy 1.";
    qtyLabel.style.color = 'red';

    mobileQtyLabel.classList.add("active");
    mobileQtyLabel.innerHTML = "At least buy 1.";
    mobileQtyLabel.style.color = 'red';
  }
});
