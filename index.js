const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);


function highlightLink(){
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    height: linkCoords.height,
    width: linkCoords.width,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY
  }

  highlight.style.height = `${coords.height}px`;
  highlight.style.width = `${coords.width}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;


}


triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
