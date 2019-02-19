    const counter = document.querySelector('.counter span');
    let number = new Date();
    if (number.getMonth() == 1) {
      counter.textContent = number.getDate() - 9;
    } else if (number.getMonth() == 2) {
      counter.textContent = number.getDate() + 19;
    } else if (number.getMonth() == 3) {
      counter.textContent = number.getDate() + 50;
    } else if (number.getMonth() == 4) {
      counter.textContent = number.getDate() + 80;
    }
  
