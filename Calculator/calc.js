let btn = document.querySelector(".button");
let velocity = document.querySelector(".velocity");
let acceleration = document.querySelector(".acceleration");

btn.addEventListener('click', () => {
  let speed = document.getElementById("inspeed").value.trim();
  let time = document.getElementById("intime").value.trim();

  
  if (speed === "" || time === "") {
    alert("Please enter both speed and time values.");
    return; 
  }

 
  let v = speed / time;
  let result_v = v.toFixed(5);
  let a = v / time;
   let result_a = a.toFixed(5);

  velocity.innerHTML = `<h2>Velocity : ${result_v} m/s</h2>`;
  acceleration.innerHTML = `<h2>Acceleration : ${result_a} m/s<sup>2</sup></h2>`;
});
