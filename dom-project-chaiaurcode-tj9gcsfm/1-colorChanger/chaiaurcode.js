const buttons = document.querySelectorAll(".button")
// console.log(buttons)
const body = document.querySelector("body")
// console.log(body)

buttons.forEach((button)=>{
  // console.log(button);
  button.addEventListener('click', (e)=> {
    //  console.log(e)
    //  console.log(e.target)
    //  console.log(e.target.id)
    // if(e.target.id === 'grey' ){
    //   body.style.backgroundColor = "grey"
    // }
    const color = e.target.id;
    console.log(color)
    switch(color){
      case "grey":
        body.style.backgroundColor = e.target.id
        break;

      case "white":
        body.style.backgroundColor = e.target.id
        break;
      
      case "blue":
        body.style.backgroundColor = e.target.id
        break;

      case "yellow":
        body.style.backgroundColor = e.target.id
        break;

      default :
        body.style.backgroundColor  = "black";
        break;
    }


     
  })
})
