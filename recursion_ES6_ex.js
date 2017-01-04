
let countDown = (num) => {
  if (num === 0) return; // if(stuff){return;}

  console.log(num);
  countDown(num - 1); //the function calls itself until the above condition is met
}
countDown(10);
