// document.write(1234)

function aboutSelectOninput()
{
    document.getElementById('aboutSelect').style.border="none"
    document.getElementById('aboutSelect').style.outline="none"
}
function servicesSelectOninput()
{
    document.getElementById('servicesSelect').style.border="none"
    document.getElementById('servicesSelect').style.outline="none"
}
function aboutSelectOnchange()
{
    let aboutSelectValue=document.getElementById('aboutSelect').value
    if(aboutSelectValue=='JSPIDERS')
    {
        window.open("https://jspiders.com/")
    }
    else if(aboutSelectValue=='CEO')
    {
        window.open("https://yourstory.com/people/girish-shivanna?origin=awards#:~:text=Girish%20Shivanna%20Mr.%20Girish%20is%20a%20seasoned%20Executive,Test%20Yantra%20Software%20Solutions%2C%20Qspiders%2C%20Jspiders%20%26%20Flagroot.")
    }
    else if(aboutSelectValue=='FACULTIES')
    {
        document.getElementById('div2').remove()
        let facultiesApi=window.fetch("homepage.json")
console.log(facultiesApi)
facultiesApi.then((element)=>{element.json().then((facultyObject)=>{console.log(facultyObject) 
facultyObject.map((obj)=>{console.log(obj)
document.getElementById('mainSection1').innerHTML+=`<span id="mainSpan1">
<img id="facultyImg" src="${obj.facultyImage}">
<h3 id="h3">${obj.facultyName}</h3>
<p id="p">${obj.expertIn}</p>
</span>`})
})})
    }
}
function signupLoad()
{
    setInterval(()=>{document.getElementById('signupButton').style.color="black";
    document.getElementById('signupButton').style.fontSize=""},500)
    setInterval (()=>{document.getElementById('signupButton').style.color="red";
    document.getElementById('signupButton').style.fontSize="larger"},1000)
    setInterval (()=>{document.getElementById('thAbout').style.color="lime"},1000)
    setInterval (()=>{document.getElementById('thAbout').style.color="black"},2000)
    setInterval (()=>{document.getElementById('thAbout').style.color="black"},3000)
    setInterval (()=>{document.getElementById('thServices').style.color="black"},1000)
    setInterval (()=>{document.getElementById('thServices').style.color="lime"},2000)
    setInterval (()=>{document.getElementById('thServices').style.color="black"},3000)
    setInterval (()=>{document.getElementById('thContacts').style.color="black"},1000)
    setInterval (()=>{document.getElementById('thContacts').style.color="black"},2000)
    setInterval (()=>{document.getElementById('thContacts').style.color="lime"},3000)
    setInterval (()=>{document.getElementById('jspSpan').style.color="white"},1000)
    setInterval (()=>{document.getElementById('jspSpan').style.color="black"},2000)
    setInterval (()=>{document.getElementById('div2').style.backgroundImage="linear-gradient(orange,black)"},1000)
    setInterval (()=>{document.getElementById('div2').style.backgroundImage="linear-gradient(black,orange)"},2000)
    setInterval (()=>{document.getElementById('bd').style.backgroundImage="linear-gradient(white,black)"},5000)
    setInterval (()=>{document.getElementById('bd').style.backgroundImage="linear-gradient(black,white)"},10000)

}

//the below js code is for 3 page of payment vallet that is register page

function submitButtonOnClick() 
{
    let registerInputClassInputs=document.getElementsByClassName('registerInputClass')
    let registerInputClassInputsPureArray=Array.from(registerInputClassInputs)
    registerInputClassInputsPureArray.map((iteratedElements)=>
    {
        let iteratedElementsValues=iteratedElements.value
        if(iteratedElementsValues=='')
        {
            document.getElementById('EmptyFieldErrorSpan').innerHTML='The Given Fields Are Mandatory'
            iteratedElements.style.border='red'
        }
        else if(iteratedElementsValues!=='')
        {
            document.getElementById("empty".innerHTML="")
            iteratedElements.style.border='red'
        }
    })
}

if(emailInputValue==emailInputValue.slice(0,-10)+'@gmail.com')
{

}
else if(emailInputValue==emailInputValue.slice(0,-10)+'@gmail.com')
{
   alert('please mention @gmail.com properly')
   setTimeout(()=>{emailInput.style.border=""},2000)
   setTimeout(()=>{emailInput.style.border="red solid 2px"},4000)
}