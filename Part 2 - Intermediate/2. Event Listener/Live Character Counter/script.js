document.querySelector("input").addEventListener("input" , function (dets){
  if (dets.target.length !== 0){
      document.querySelector("span").innerText = dets.target.value.length;
  }  
})