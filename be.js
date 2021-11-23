document.getElementById("myChar").addEventListener("keyup", function (event) {
  str = document.getElementById("myChar").value;
  alert(str[str.length - 1]);
});
/*add event listner starts first  */
document.getElementById("displayTime").addEventListener("click", (event) => {
  alert("clock started");
});

/*start and stop timer************************************************************************** */
var myVar;
function myTimer() {
  let d = new Date();
  document.getElementById("btnTime").innerText =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function myStopFunction() {
  clearInterval(myVar);
}
function Display() {
  myVar = setInterval(myTimer, 1000);
}

/***********************************************************************/
window.addEventListener("keydown", function (event) {
  if (event.key === "w" && event.altKey) {
    myStopFunction();
  }
});

/*************************expand and shrink*******************************************/

document.getElementById("play").addEventListener("focusin", (e) => {
  document.getElementById("play").style.width = "400px";
});
document.getElementById("play").addEventListener("focusout", function (e) {
  document.getElementById("play").style.width = "100px";
});
/********************************************************************/
function fade(thisImg) {
  console.log("kk");
  thisImg.style.opacity = 0.3;
  thisImg.style.transition = "opacity 2s ease-in-out";
  console.log(thisImg.style.opacity);
}

function shine(thisImg) {
  thisImg.style.opacity = 1;
  thisImg.style.transition = "opacity 2s ease-in-out";
  console.log("shine " + thisImg.style.opacity);
}

for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
  document
    .getElementsByTagName("img")
    [i].addEventListener("mouseover", function (e) {
      fade(this);
    });
  document
    .getElementsByTagName("img")
    [i].addEventListener("mouseout", function (e) {
      shine(this);
    });
}


for (let i = 0; i < document.getElementsByTagName("i").length; i++) {
    document
    .getElementsByTagName("i")
    [i].addEventListener("click", function (e) {
      this.classList.toggle("myStar")
      
    });

}
/*******************************slider****************************************** */
let imgsUrl=["./images/cat2.jpg","./images/cat1.jpg","./images/dog.jpg"]
let imgsDes=["cat on gown","cat with sky blue eyes","cutest puppy"]

let nextBtn=document.getElementById("next")
let prevBtn=document.getElementById("prev")
let slider=document.getElementById("slider")
let sliderDes =document.getElementById("sliderDes")

let arrIndex=0;
let slideShow;
let slide=function(){
  slider.style.backgroundImage=`url(${imgsUrl[arrIndex]})`

  if(arrIndex>=2 ) arrIndex=0
  // else if(arrIndex==2) {--arrIndex}
  else{
    arrIndex++
  }
  console.log("index window "+arrIndex)
  }

nextBtn.addEventListener('click',function(e){
  clearInterval(slideShow)
  slider.style.backgroundImage=`url(${imgsUrl[ arrIndex==2 ? 0 : ++arrIndex ]})`
// sliderDes.textContent=imgsDes[arrIndex]
})
prevBtn.addEventListener('click',function(e){
  clearInterval(slideShow)
  slider.style.backgroundImage=`url(${imgsUrl[ arrIndex==0 ? 0 : --arrIndex ]})`


  })

    // setInterval(slide,1000)

 window.addEventListener('load',()=>{
  slideShow=setInterval(slide,2000)
 })

 

   slider.addEventListener("mouseover",function(){
     clearInterval(slideShow)
     let r=arrIndex ==0 ? 0 : arrIndex-1
     console.log("myindex  "+r)
     sliderDes.textContent=imgsDes[r]
   })

   slider.addEventListener("mouseout",function(){
    slideShow=setInterval(slide,2000)
  })