window.onload = function() {
  console.log("JavaScript is alive!");
  //1. Change the greeting from "Hello, There!" to "Hello, World!".
  document.getElementById("greeting").innerHTML = "Hello, World!";

  //2. Set the background color of each `<li>` to `yellow`.
  let allListItems = document.querySelectorAll("li");
  allListItems.forEach((listItem) =>{
    listItem.style.backgroundColor = "yellow"
    listItem.addEventListener("click", namedFunction);
})

  //3. Create an image tag, set its `src` attribute to...and append the to the `#greeting` div.
  let createImage = document.createElement("img");
  createImage.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif")
  document.getElementById("greeting").appendChild(createImage);

  //4. Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
  function namedFunction(event){
  let elem = document.querySelector(".selected")
    if(elem) {
      elem.className = "";
    }
      this.className = "selected"
  // 5. Change the image to be the most recently clicked food item.
      let picture = this.innerHTML
      document.getElementsByTagName("img")[1].src = "images/"+picture+".jpeg"
  }


  // 6. When the gray div is moused over, it's removed from the DOM.
  let disappear = document.getElementById("ghosting")//.addEventListener("mouseover", mouseOver);
  disappear.onmouseover = function() {
    disappear.remove("ghosting");
  }

  //7. When the orange div is moused over, its width doubles.
  //   When the mouse moves out of the div, it returns to its original size.
  let double = document.getElementById("resize")
  double.onmouseover = mouseOver;
  double.onmouseout = mouseOut;
  function mouseOver() {
    double.style.width = "400px";
  }
  function mouseOut() {
    double.style.width = "200px";
  }

//8. When the reset button is clicked- remove the `selected` class
//   from each `<li>` and change the image to `panic.jpeg`.

document.querySelector("#reset")
    .addEventListener("click",function(){
      let currentSelected = document.querySelector(".selected");
      if ( currentSelected ) {
        currentSelected.className = "";
        allListItems[1].className = "selected";
      }
      document.querySelectorAll("img")[1].setAttribute("src","./images/panic.jpeg")
    })

//9. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the
//   page alerts the message "I HATE NUMBERZZZ!"
  document.addEventListener("keypress", (event) => {
    const keyName = event.key;
    if(keyName >= 0 && keyName <= 9) {
    alert("I HATE NUMBERZZZ");
      }
    });
}
