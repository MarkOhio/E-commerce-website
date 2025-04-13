const productImages = {
    1: {
      green: 'pic/product-2 shirtg.png',
      blue: 'pic/product-2 shirt.jpg',
      red: 'pic/product-2 shirtr.png',
      yellow: 'pic/product-2 shirty.png'
    },
    2: {
      green: 'pic/product-3 lampg.png',
      blue: 'pic/product-3 lampb.png',
      red: 'pic/product-3 lampr.png',
      yellow: 'pic/product-3 lamp.jpg'
    },
    3: {
      green: 'pic/product-4 sneakersg.png',
      blue: 'pic/product-4 sneakersb.png',
      red: 'pic/product-4 sneakersr.png',
      yellow: 'pic/product-4 sneakers.jpg'
    },
    4: {
      green: 'pic/product-5 droneg.png',
      blue: 'pic/product-5 droneb.png',
      red: 'pic/product-5 droner.png',
      yellow: 'product-5 drone.jpg'
    },
    5: {
      green: 'pic/product-9 chairg.png',
      blue: 'pic/product-9 chair.jpg',
      red: 'pic/product-9 chairr.png',
      yellow: 'pic/product-9 chair.jpg'
    },
    6: {
      green: 'pic/product-7.jpg',
      blue: 'pic/product-7.jpg',
      red: 'pic/product-7.jpg',
      yellow: 'pic/product-7.jpg'
    },
    7: {
      green: 'pic/product-6 watch.jpg',
      blue: 'pic/product-6 watch.jpg',
      red: 'pic/product-6 watch.jpg',
      yellow: 'pic/product-6 watch.jpg'
    },
    8: {
      green: 'pic/product-1 camera.jpg',
      blue: 'pic/product-1 camera.jpeg',
      red: 'pic/product-1 camera.jpg',
      yellow: 'pic/product-1 camera.jpeg'
    },
    9: {
      green: 'pic/product-2 shirtg.png',
      blue: 'pic/product-2 shirt.jpg',
      red: 'pic/product-2 shirtr.png',
      yellow: 'pic/product-2 shirty.png'
    },
    10: {
      green: 'pic/product-4 sneakersg.png',
      blue: 'pic/product-4 sneakersb.png',
      red: 'pic/product-4 sneakersr.png',
      yellow: 'pic/product-4 sneakers.jpg'
    },
    11: {
      green: 'pic/product-9 chairg.png',
      blue: 'pic/product-9 chair.jpg',
      red: 'pic/product-9 chairr.png',
      yellow: 'pic/product-9 chair.jpg'
    },
    12: {
      green: 'pic/product-3 lampg.png',
      blue: 'pic/product-3 lampb.png',
      red: 'pic/product-3 lampr.png',
      yellow: 'pic/product-3 lamp.jpg'
    },
  };

  function changeColor(event, id, color) {
    event.stopPropagation();
    const img = document.getElementById(`product-img-${id}`);
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = productImages[id][color];
      img.style.opacity = 1;
    }, 300);
  }

  // Lazy load using data-src
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img[data-src]").forEach(img => {
      img.src = img.getAttribute("data-src");
    });
  });










