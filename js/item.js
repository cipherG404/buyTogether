document.addEventListener( 'DOMContentLoaded', function() {
      var splide = new Splide( '.splide', {
        rewind: true,
        rewindByDrag: true,
      } );
      splide.mount();
    } );

let index = 0;
let qty = "";
let qtyValue = 0;
let qtyLabel = "";
let cost =0;

function calCost(){
  // console.log("start");
  let costCal = 0;
  let price = 0;
  let qtyCal = 0;
  
  price = document.getElementById("price").innerHTML.split("$")[1];
  qtyCal = document.getElementById("qty").innerHTML;
  costCal = price*qtyCal;
  document.getElementById("cost").innerHTML = "$"+costCal.toString();
}

$(document).ready(calCost());

qty = parseInt(document.getElementById("qty").innerHTML);
      
qtyValue = document.getElementById("qty");
qtyLabel = document.getElementById("label");
cost = document.getElementById("cost");

$('.plus').click(function(){
  // console.log("add"+qty);
  qtyLabel.style.color = '#666666';
  
  qty = qty + 1;
  qtyValue.innerHTML = qty;
  calCost();
  
  if(qtyLabel.innerHTML!=""){
    qtyLabel.innerHTML = "";
    qtyLabel.classList.remove("active");
  }
});

$('.min').click(function(){
  // console.log("min"+qty);
  qtyLabel.style.color = '#666666';
  
  if(qty>1){
    qtyLabel.innerHTML = "";
    qty = qty - 1;
    qtyValue.innerHTML = qty;
    calCost(); 
  }else{
    qtyLabel.classList.add("active");
    qtyLabel.innerHTML = "At least buy 1.";
    qtyLabel.style.color = 'red';
  }
});