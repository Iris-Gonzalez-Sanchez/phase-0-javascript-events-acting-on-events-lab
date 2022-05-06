  const dodger = document.getElementById("dodger");
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  //event listener for left works, but not for right

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
    console.log(left);
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });  