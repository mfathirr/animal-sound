let animalImage = document.querySelectorAll('.animal').length;
for (let i = 0; i < animalImage; i++) {
  document.querySelectorAll('.animal')[i].addEventListener('click', clickHandle);
}

function clickHandle() {
  let clickImage = this.innerHTML;
  switch (clickImage) {
    case 'l':
        let lion = new Audio('assets/sounds/lion.mp3')
        lion.play()
      break;
    case 'e':
        let elephant = new Audio('assets/sounds/elephant.mp3');
        elephant.play();
      break;
    case 'm':
      break;
    case 'c':
      break;
    case 'b':
      break;

    default:
        console.log(this.innerHTML);
      break;
  }
}
