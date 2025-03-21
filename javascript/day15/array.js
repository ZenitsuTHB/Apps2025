const data = [];

function addData(input){

  data.push(input);
}

addData("Joe bananas");
addData("Crazy Gallo");

data.forEach(function(mafioso) {
  
  console.log(mafioso);
})