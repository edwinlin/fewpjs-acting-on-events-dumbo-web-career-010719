
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

// function moveDodgerRight() {
//   var rightNumbers = dodger.style.right.replace('px', '')
//   var right = parseInt(rightNumbers, 350)
 
//   if (right < 360) {
//     dodger.style.right = `${right - 1}px`
//   }
// }

function moveDodgerRight() {
  dodger.style.right = dodger.style.left;
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)
 
  if (right < 360) {
  	console.log(dodger.style.left)
    dodger.style.left = `${right + 1}px`
  }
}

// function moveDodgerRight() {
// 	console.log("RIGHT");
//   var rightNumbers = dodger.style.right.replace('px', '');
//   var right = parseInt(rightNumbers, 10)
//   if (right < 360) {
//     dodger.style.right = `${right - 1}px`
//   }
// }



document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
	moveDodgerLeft();
  } else if (e.which === 39){
  	moveDodgerRight();
  }
})


