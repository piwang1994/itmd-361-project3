function myFunction() {
  document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

window.initMap = function() {
  // JS API is loaded and available
  new google.maps.Map(document.getElementById("map"), {
    center: { lat: 22.128, lng: 114.253 },
    zoom: 10,
  });
};

class SliderBox {
  constructor(delay = 1000) {
    this.swiper = document.querySelector('.swiper')
    this.swiperItemList = document.querySelectorAll('.swiper-item')
    this.totalLength = this.swiperItemList.length
    this.delay = delay
    this.init()
  }

  init() {
    const cloneFirst = document.querySelectorAll('.swiper-item')[0].cloneNode(true)
    this.swiper.appendChild(cloneFirst)
    const cloneLast = document.querySelectorAll('.swiper-item')[this.totalLength - 1].cloneNode(true)
    this.swiper.insertBefore(cloneLast, this.swiper.firstChild)
    this.swiper.style.width = (this.totalLength + 2) * 50 + 'em'
    this.currentPosition = 1
    this.swiper.style.transform = `translateX(${-this.currentPosition * 50}em`
  }

  goSlider() {
    this.swiper.style.transition = `transform ${this.delay / 1000}s ease`
    this.swiper.style.transform = `translateX(${-this.currentPosition * 50}em`
    this.swiper.classList.add('isAnimating')
    setTimeout(() => {
      this.swiper.style.transition = ''
      this.swiper.classList.remove('isAnimating')
    }, this.delay)
  }

  animate() {
    if (this.swiper.classList.contains('isAnimating')) return
    if (this.currentPosition === this.totalLength) {
      this.currentPosition = 0
      this.swiper.style.transform = `translateX(${-this.currentPosition * 50}em`
    }
    this.currentPosition++
    setTimeout(() => {
      this.goSlider()
    }, 20)
  }

  start() {
    setInterval(() => this.animate(), this.delay)
  }
}

window.onload = function() {
  const slider = new SliderBox(2000)
  slider.start()
}