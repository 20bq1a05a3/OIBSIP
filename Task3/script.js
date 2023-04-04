function convertTemp() {
    var t = document.getElementById("input");
    var r = document.getElementById("output");
  
    var e = document.getElementById("degree");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
  
    if (t.value !== "") {
      if (optionSelIndex == 0) {
        alert("hey!...you forget to select the unit");
      } else {
        if (optionSelectedText === "Fahrenheit") {
          r.value = ((t.value - 32) * 5) / 9 + "°C";
        }
        if (optionSelectedText === "Celcius") {
          r.value = (t.value * 9) / 5 + 32 + "°F";
        }
      }
      
    } else {
      alert("hey!...you forget to enter the temperature");
    }
  }