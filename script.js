const chat=document.getElementById("chat"), form=document.getElementById("form"), input=document.getElementById("input");

function addMessage(text, who="agent"){
  const div=document.createElement("div");
  div.className=`message ${who}`;
  div.innerHTML=who==="agent"?`<b>Ahmer AI Agent</b><p>${escapeHtml(text)}</p>`:`<p>${escapeHtml(text)}</p>`;
  chat.appendChild(div); chat.scrollTop=chat.scrollHeight;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}

async function askAgent(task){
  addMessage("Thinking and planning…");
  try{
    const r=await fetch("/api/agent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task})});
    const data=await r.json();
    chat.lastElementChild.remove();
    addMessage(data.reply || data.error || "No response.");
  }catch(e){
    chat.lastElementChild.remove();
    addMessage("The agent server is not connected yet. Deploy the included server and add your API key.");
  }
}
form.addEventListener("submit",e=>{e.preventDefault();const v=input.value.trim();if(!v)return;addMessage(v,"user");input.value="";askAgent(v)});
document.querySelectorAll(".suggestions button").forEach(b=>b.onclick=()=>{input.value=b.textContent;input.focus()});
