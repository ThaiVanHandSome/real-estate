const aboutBtnLeft = $(".about__btn-left");
const aboutBtnRight = $(".about__btn-right");
const aboutImageContainer = $(".about__meyhomes-img");
const aboutOptionItems = $$(".about__option-item");

const about = {
  currentIndex: 0,
  aboutImageInterval: null,
  aboutImageDuration: 3000,
  aboutImgs: [
    {
      pathImg: "asset/img/about-meyhomes/slide-01.jpg",
    },
    {
      pathImg: "asset/img/about-meyhomes/slide-02.jpg",
    },
    {
      pathImg: "asset/img/about-meyhomes/slide-03.jpg",
    },
    {
      pathImg: "asset/img/about-meyhomes/slide-04.jpg",
    },
    {
      pathImg: "asset/img/about-meyhomes/slide-05.jpg",
    },
    {
      pathImg: "asset/img/about-meyhomes/slide-06.jpg",
    },
  ],

  defineProperties: function () {
    Object.defineProperty(this, "aboutImg", {
      get: function () {
        return this.aboutImgs[this.currentIndex];
      },
    });
  },
  loadCurrentImage: function () {
    aboutImageContainer.style.backgroundImage = `url(${this.aboutImg.pathImg})`;
    aboutImageContainer.style.opacity = "1";
  },
  nextImage: function () {
    this.currentIndex = (this.currentIndex + 1) % this.aboutImgs.length;
    $(".about__option-item.active").classList.remove("active");
    aboutOptionItems[this.currentIndex].classList.add("active");
    this.loadCurrentImage();
  },
  prevImage: function () {
    this.currentIndex =
      (this.currentIndex - 1 + this.aboutImgs.length) % this.aboutImgs.length;
    $(".about__option-item.active").classList.remove("active");
    aboutOptionItems[this.currentIndex].classList.add("active");
    this.loadCurrentImage();
  },
  setAgainInterval: function() {
    clearInterval(this.aboutImageInterval);
    this.aboutImageInterval = setInterval(() => {
        this.nextImage();
    }, this.aboutImageDuration);
  },
  handleEvent: function () {
    const _this = this;

    //Click Button Right
    aboutBtnRight.onclick = function () {
      _this.nextImage();
      _this.setAgainInterval();
    };

    //Click Button Left
    aboutBtnLeft.onclick = function () {
      _this.prevImage();
      _this.setAgainInterval();
    };

    //Click button direct
    aboutOptionItems.forEach((aboutOptionItem, index) => {
      aboutOptionItem.onclick = function () {
        $(".about__option-item.active").classList.remove("active");
        aboutOptionItem.classList.add("active");
        _this.currentIndex =
          Number(aboutOptionItem.getAttribute("data-index")) - 1;
        _this.loadCurrentImage();
        _this.setAgainInterval();
      };
    });
  },
  start: function () {
    this.defineProperties();
    this.loadCurrentImage();
    this.handleEvent();
    this.aboutImageInterval = setInterval(() => {
        this.nextImage();
    }, this.aboutImageDuration);
  },
};

about.start();
