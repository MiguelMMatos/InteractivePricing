const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')
const price = document.querySelector(".price")
const numberOfPages = document.querySelector(".price-information")

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const updateSlider = (value) => {
    const newValue = scale(value, range.min, range.max, 0, 100)
    track.style.width = newValue + 2 + "%" ;
    thumb.style.left = newValue - 2 + "%";
    range.value = value;
    price.innerHTML = "$" + value;
    numberOfPages.innerHTML = scale(value, range.min, range.max, 10, 100) + "k PAGEVIWES"
}

range.oninput = (e) =>
  updateSlider(e.target.value)

updateSlider(5) // Init value