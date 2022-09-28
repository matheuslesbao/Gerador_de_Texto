function getValueInput() {
    let inputValue1 = document.querySelector("#getText__1").value; 
    let inputValue2 = document.querySelector("#getText__2").value; 
    let inputValue3 = document.querySelector("#getText__3").value;
    
    document.querySelector("#showText").innerHTML = `First input value: ${inputValue1} Second Input Value: ${inputValue2} Third Input Value: ${inputValue3}`; 
  }