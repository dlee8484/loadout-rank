(function(){var q=document.getElementById("q"),chips=[].slice.call(document.querySelectorAll(".chip")),cat="all";
function run(){var s=q.value.trim().toLowerCase(),shown=0;
document.querySelectorAll(".cat").forEach(function(sec){var any=0;
sec.querySelectorAll(".card").forEach(function(c){var ok=(cat==="all"||sec.dataset.cat===cat)&&(!s||c.dataset.text.indexOf(s)>-1);c.hidden=!ok;if(ok)any++});
sec.hidden=!any;shown+=any});document.getElementById("empty").hidden=shown>0}
q.addEventListener("input",run);
chips.forEach(function(b){b.addEventListener("click",function(){cat=b.dataset.cat;chips.forEach(function(x){x.classList.toggle("on",x===b)});run()})});
document.getElementById("nlf").addEventListener("submit",function(ev){ev.preventDefault();document.getElementById("nlmsg").textContent="Demo only: signup is not connected yet. Nothing was sent or saved."})})();