
document.getElementById("myForm").addEventListener('submit',function(event){
   event.preventDefault()
   console.log(this.action)
  let userName=document.getElementById("userName").value;

  let passWord=document.getElementById("passWord");
  let repassWord=document.getElementById("rePassWord");

  let Mailbb=document.getElementById("myEmail");
  let myMail=document.getElementById("myEmail").value;

  let myDrop=document.getElementById("dropDown");

  let myPass=document.getElementById("passWord").value;
  let myRepass=document.getElementById("rePassWord").value;

  console.log(validateLetters(userName)+"  ----  "+validateMail(myMail) +"--drop "+myDrop)

  
  
 myDrop.setAttribute("name",myDrop.value)

 
  if(!validateMail(myMail)){
   Mailbb.style.backgroundColor="gray"
   document.getElementById("validateUserEmail").innerText=" mail must start with char no spaces no special chars except for .-_  yet not appearing consecutively two or more times "
  }
console.log(myPass +myRepass)

 
 if(!myPass){
 document.getElementById("validateUserPass").textContent="required"
 passWord.style.backgroundColor="gray"
}
if(!myRepass){
   document.getElementById("validateUserRePass").textContent="required"
   repassWord.style.backgroundColor="gray"
 }
  
 if((myPass==myRepass))
 {
   console.log("yesssssssss  "+(myPass==myRepass))
   passWord.style.backgroundColor="white"
   repassWord.style.backgroundColor="white"
 }
 if((myPass!=myRepass))
 {
  document.getElementById("validateUserRePass").textContent="match password please";
 passWord.style.backgroundColor="gray"
  repassWord.style.backgroundColor="gray"
 }
 if (myPass==myRepass && validateMail(myMail)) {
   this.submit();
 }
 //
});
function validateLetters(str) {
    let letters = /^[a-zA-Z]{3,}(\s*[a-zA-Z]{3,})*$/gm;
    // console.log("res "+ letters.test(str))
    return letters.test(str);
  }
  
  function validateMail(str) {
    let mails =
      /^[a-zA-Z]+(([0-9]*)|([_.-]{0,1}[a-zA-Z0-9]))*@[a-zA-Z]+.(com|edu|net|edu).eg$/gm;
    // console.log("mailres "+ mails.test(str))
    return mails.test(str);
  }
  
  document.getElementById("userName").addEventListener('focusin',function(event){
    this.style.border="6px solid blue";

    
  })
  
 
  document.getElementById("userName").addEventListener('focusout',function(event){
    this.style.border="none"
    if(!validateLetters(this.value)){
     this.style.backgroundColor="red"
      document.getElementById("validateUserName").innerText="user name must start with a word consists of 3 chars at least ,no numbers , spaces only allowed between word" 
    }
  })
  

  