const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let changeBackground;


const randomColor = ()=>{
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(let i =0;i<6;i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color; 
}

const backgroundColor = () => {
  document.body.style.backgroundColor = randomColor();
};

start.addEventListener('click', () => {
  if(!changeBackground){
    changeBackground = setInterval(backgroundColor, 1000);
  }
});

stop.addEventListener('click', () => {
  clearInterval(changeBackground);
  changeBackground = null
});
