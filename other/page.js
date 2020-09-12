var shut = false;

var template = function(name, body) {
  document.body.innerHTML = '<head><title>'+ name +' - Cope</title><link rel="stylesheet" href="other/page.css"></head><body><div class="dash">&nbsp; <b>Cope</b>&nbsp;&nbsp;&nbsp; <a href="https://dpla-s.github.io/">Home</a> <a href="https://dpla-s.github.io/Cope-DPLA">About</a> <span class="dash">&nbsp;</span> <a class="white" href="https://dpla-s.github.io/Cope-DPLA/#nice-were-can-i-downloaduse-this">Download</a> <div class="f"> <a class="white" style="float:right;" href="https://github.com/DPLA-S" target="_blank">Github</a> <span style="float:right;">&nbsp</span> </div> </div>'+
  body + '</body>';
  
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
