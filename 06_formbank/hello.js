var getam = 0, dopam, widam, showam;

function addamount(){
  getam = parseInt(document.getElementById("option1").value);
  console.log(getam);
  if(isNaN(getam)){
    alert("please enter your amount");
  } else {
    alert(`your amount is submitted ${getam}`);
  }
}

function deopsite(){
  dopam = parseInt(document.getElementById("option2").value);
  if(isNaN(dopam)){
    alert("please enter your amount");
  } else {
    getam = getam + dopam;
    alert(`your amount is deposit ${dopam}`);
  }
  console.log(getam);
}

function withdraw(){
  widam = parseInt(document.getElementById("option3").value);
  if(isNaN(widam)){
    alert("please enter your amount");
  } else {
    getam = getam - widam;
    alert(`your amount is withdraw ${widam}`);
  }
  console.log(getam);
}

function showbalc(){
  document.getElementById("result").innerHTML = `the final amount is ${getam}`;
  alert(`your final amount is ${getam}`);
}