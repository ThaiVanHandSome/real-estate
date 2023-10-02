// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const slider = $(".slider");
const sliderContent = $(".slider__content");
const sliderBtnLeft = $(".slider__btn-left");
const sliderBtnRight = $(".slider__btn-right");
const sliderBgs = $$(".slider__bg");
const sliderBgContainer = $(".slider__bg-container");

const app = {
  currentIndex: 0,
  currentValue: 0,
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
  loadCurrentSlider: function () {
    slider.style.backgroundImage = `url(${this.currentRealEstate.pathImage})`;
    console.log(this.currentRealEstate);
    sliderContent.innerHTML = `
                    <p>
                        <p class="slider__text-name">${this.currentRealEstate.place}</p>
                        <p class="slider__text-desc">
                        ${this.currentRealEstate.desc} <span style="color: var(--primary);">${this.currentRealEstate.textActive}</span>
                        </p>
                    </p>
                    <div class="slider__text-btn">
                        Tham khảo thêm
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    `;
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
  handleEvent: function () {
    const _this = this;
    sliderBtnRight.onclick = function () {
      // clearTimeout(autoMoveSlider());
      _this.currentIndex = (_this.currentIndex + 1) % _this.realEstates.length;
      _this.currentValue++;
      _this.handleInnerHTML();
      if (_this.currentIndex === _this.realEstates.length - 1) {
        for (var i = 0; i < _this.realEstates.length; i++) {
          var data = document.createElement("div");
          data.classList.add("slider__bg", `slider__bg-${i + 1}`);
          sliderBgContainer.appendChild(data);
        }
      }
      // $(".slider__bg.active").classList.remove("active");
      // for(var i = 0;i < _this.realEstates.length;i++){
      //   if(i === _this.currentIndex) {
      //     console.log(_this.realEstates[i]);
      //     sliderBgs[i].classList.add('active')
      //   }
      // }
      sliderBgContainer.style.transform = `translateX(${
        -100 * _this.currentValue
      }%)`;
      _this.sliderFadeIn();
    };

    sliderBtnLeft.onclick = () => {
      _this.currentIndex =
        (_this.currentIndex - 1 + _this.realEstates.length) %
        _this.realEstates.length;
      _this.currentValue--;
      _this.handleInnerHTML();
      sliderBgContainer.style.transform = `translateX(${
        -100 * _this.currentValue
      }%)`;
      _this.sliderFadeIn();
    };
  },

  autoMoveSlider: function () {
    return setInterval(() => {
      sliderBtnRight.click();
    }, 5000);
  },
  start: function () {
    this.defineProperties();

    this.handleEvent();

    //this.autoMoveSlider();
  },
};
app.start();
