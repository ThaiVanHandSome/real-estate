const slider = $(".slider");
const sliderContent = $(".slider__content");
const sliderBtnLeft = $(".slider__btn-left");
const sliderBtnRight = $(".slider__btn-right");
var sliderBgs = $$(".slider__bg");
const sliderBgContainer = $(".slider__bg-container");

const sliderContainer = {
  currentIndex: 0,
  indexEnded: 0,
  isEnded: false,
  currentValue: 0,
  isStart: false,
  sliderTimer: null,
  sliderDuration: 5000,
  realEstates: [
    {
      place: "MEYHOMES CAPITAL - PHÚ QUỐC",
      desc: "THÀNH PHỐ ĐẢO NHIỆT ĐỚI",
      textActive: "ĐA SẮC MÀU",
      pathImage: "asset/img/slider/slider_3.jpg",
    },
    {
      place: "GRANDWORLD - PHÚ QUỐC",
      desc: "SIÊU DỰ ÁN CÓ",
      textActive: "VIỆT NAM",
      pathImage: "asset/img/slider/slider_4.jpg",
    },
    {
      place: "THE ORIGAMI",
      desc: "CĂN HỘ VƯỜN NHẬT",
      textActive: "ĐẸP NHẤT",
      pathImage: "asset/img/slider/slider_5.jpg",
    },
    {
      place: "Lumière Riverside",
      desc: "PHONG CÁCH SỐNG",
      textActive: "TRANG TRỌNG",
      pathImage: "asset/img/slider/slider_1.jpg",
    },
    {
      place: "Gem Sky World",
      desc: "TRÁI TIM LỘNG LẪY CỦA",
      textActive: "GEM SKY WORLD",
      pathImage: "asset/img/slider/slider_2.jpg",
    },
  ],
  defineProperties: function () {
    Object.defineProperty(this, "currentRealEstate", {
      get: function () {
        return this.realEstates[this.currentIndex];
      },
    });
  },
  handleInnerHTML: function () {
    sliderContent.innerHTML = `
                    <p>
                        <p class="slider__content-name">${
                          this.realEstates[this.currentIndex].place
                        }</p>
                        <p class="slider__content-desc">
                        ${
                          this.realEstates[this.currentIndex].desc
                        } <span style="color: var(--primary);">${
      this.realEstates[this.currentIndex].textActive
    }</span>
                        </p>
                    </p>
                    <div class="slider__content-btn">
                        Tham khảo thêm
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    `;
  },
  sliderFadeIn: function () {
    sliderContent.style.opacity = "0";
    sliderContent.style.left = "-100px";
    setTimeout(() => {
      sliderContent.style.opacity = "1";
      sliderContent.style.left = "0";
    }, 420);
  },
  sliderBgActive: function () {
    if ($(".slider__bg.active"))
      $(".slider__bg.active").classList.remove("active");
    for (var i = 0; i < this.realEstates.length; i++) {
      if (i === this.currentIndex) {
        sliderBgs[i].classList.add("active");
      }
    }
  },
  nextImage: function () {
    this.currentIndex = (this.currentIndex + 1) % this.realEstates.length;
    this.handleInnerHTML();
    this.sliderBgActive();
    sliderBgContainer.style.transform = `translateX(${
      -100 * this.currentIndex
    }%)`;
    this.sliderFadeIn();
  },
  prevImage: function () {
    this.currentIndex =
      (this.currentIndex - 1 + this.realEstates.length) %
      this.realEstates.length;
    this.currentValue--;
    this.handleInnerHTML();
    this.sliderBgActive();
    sliderBgContainer.style.transform = `translateX(${
      -100 * this.currentIndex
    }%)`;
    this.sliderFadeIn();
  },
  handleEvent: function () {
    const _this = this;

    //Xử lí khi bấm vào button right
    sliderBtnRight.onclick = function () {
      //Reset Time Interval
      _this.nextImage();
      _this.setAgainInterval();
    };

    //Xử lí khi bấm vào button left
    sliderBtnLeft.onclick = () => {
      _this.prevImage();
      _this.setAgainInterval();
    };
  },

  setAgainInterval: function () {
    clearInterval(this.sliderTimer);
    this.sliderTimer = setInterval(() => {
      this.nextImage();
    }, this.sliderDuration);
  },
  start: function () {
    if (!this.isStart) {
      sliderBgs[this.currentIndex].classList.add("active");
      this.isStart = false;
    }

    //Định nghĩa các biến
    this.defineProperties();

    //Xử lí các event
    this.handleEvent();

    //Xử lí tự động trượt slider
    this.sliderTimer = setInterval(() => {
      this.nextImage();
    }, this.sliderDuration);
  },
};

sliderContainer.start();
