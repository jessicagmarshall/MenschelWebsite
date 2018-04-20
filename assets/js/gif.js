document.addEventListener('DOMContentLoaded', function (event) {
  startTimer()

  jQuery(function ($) {
    $('.carousel').carousel()
    var caption = $('div.item:nth-child(1) .carousel-caption')
    $('.new-caption-area').html(caption.html())
    caption.css('display', 'none')

    $('.carousel').on('slide.bs.carousel', function (evt) {
      var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption')
      $('.new-caption-area').html(caption.html())
      caption.css('display', 'none')
    })
  })
})

function changeImage () {
  let srcVal = document.getElementById('desktopGif').src
  let name = srcVal.substr(srcVal.length - 7)
  console.log(name)
  if (name !== 'ain.jpg') {
    document.getElementById('desktopGif').src = './assets/img/seized_domain.jpg'
  } else {
    document.getElementById('desktopGif').src = './assets/img/cat.jpg'
  }

  let srcValMobile = document.getElementById('mobileGif').src
  let nameMobile = srcValMobile.substr(srcVal.length - 7)
  console.log(nameMobile)
  if (name !== 'ain.jpg') {
    document.getElementById('mobileGif').src = './assets/img/seized_domain.jpg'
  } else {
    document.getElementById('mobileGif').src = './assets/img/cat.jpg'
  }
}

function startTimer () {
  setInterval(changeImage, 1500)
}
