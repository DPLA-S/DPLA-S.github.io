var projectID = window.location.hash;
projectID = projectID.replace("#", "");
if (projectID == "run"){
  window.location.replace("https://dpla-s.github.io/Beta-Editor-CSS/");
}

var shut = false;

var template = function(name, body) {
  document.body.innerHTML = '<head><title>'+ name +' - Cope</title><link rel="stylesheet" href="other/page.css"></head><body><div class="dash">&nbsp; <b>Cope</b>&nbsp;&nbsp;&nbsp; <a href="https://dpla-s.github.io/">Home</a><a href="https://dpla-s.github.io/about">About</a><a href="https://dpla-s.github.io/document">Documentation</a> <div class="dropdown" style=""> <button class="dropbtn">Links</button> <div class="dropdown-content" style="left:0;"> <a href="https://github.com/DPLA-S/">Github</a> <a href="https://github.com/DPLA-S/DPLA-S.github.io">Source Code</a> <a href="https://github.com/Daniel4-Scratch" class="b">Daniel4-Scratch</a> </div> </div> <span class="dash">&nbsp;</span> <a class="white" href="https://dpla-s.github.io/about">Download</a> <div class="f"> <a class="white" style="float:right;" href="https://github.com/DPLA-S" target="_blank">Github</a> <span style="float:right;">&nbsp</span> </div> </div><div class="te">'+
  body + '</div></body>';
  
  if (shut) {
   document.body.innerHTML = '<head><title>'+ name +' - Cope</title><link rel="stylesheet" href="other/page.css"></head><body><div class="dash">&nbsp; <b>Cope</b>&nbsp;&nbsp;&nbsp; <a href="https://dpla-s.github.io/">Home</a> <a href="https://dpla-s.github.io/Cope-DPLA">About</a> <span class="dash">&nbsp;</span> <a class="white" href="#">Download</a> <div class="f"> <a class="white" style="float:right;" href="https://github.com/DPLA-S" target="_blank">Github</a> <span style="float:right;">&nbsp</span> </div> </div> Error</body>';
  }
};
/*
<div class="dash">&nbsp; <b>Cope</b>&nbsp;&nbsp;&nbsp; 
<a href="https://dpla-s.github.io/">Home</a> 
<a href="https://dpla-s.github.io/Cope-DPLA">About</a> <span class="dash">&nbsp;</span>
<a class="white" href="#">Download</a>
<div class="f">
<a class="white" style="float:right;" href="https://github.com/DPLA-S" target="_blank">Github</a>
  <span style="float:right;">&nbsp</span>
</div>
</div>
*/
