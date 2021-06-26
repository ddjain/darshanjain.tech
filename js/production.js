!function(){window;const e=document.documentElement;if(e.classList.remove("no-js"),e.classList.add("js"),document.body.classList.contains("has-animations")){(window.sr=ScrollReveal()).reveal(".reveal-on-scroll",{duration:600,distance:"20px",easing:"cubic-bezier(0.5, -0.01, 0, 1.005)",origin:"bottom",interval:100})}}();
function onBtnclick(){
    var inputs=document.getElementsByTagName("input");
    var txtName=inputs[0]
    var txtEmail=inputs[1]
    var txtMessage=inputs[2]

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": txtName.value,
        "email": txtEmail.value,
        "message": txtMessage.value
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

fetch("https://7nrrg51sh6.execute-api.us-east-2.amazonaws.com/stage", requestOptions)
  .then(response => response.json())
  .then(result => {
      alert(result.body)
  })
  .catch(error => console.log('error', error));
}
