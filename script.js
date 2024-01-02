const butt = document.querySelector("button")
const out = document.querySelector("#output")
butt.innerText = "Tip"
butt.addEventListener("click", () => {
    const cost = document.querySelector("input").value;
    let tip = cost * 0.15.toFixed(2);
    out.innerHTML = `<h2>you've to give a bheek of $${tip} on $${cost}</h2>`

})