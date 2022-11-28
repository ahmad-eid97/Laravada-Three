<template>
  <section class="testominials">
    <div class="testominials-back"></div>
    <div class="testominials-inner">
      <div class="testominials-sperator">
        <svg
          class="fusion-big-half-circle-candy"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style="padding: 0"
          fill="rgb(245, 245, 245)"
        >
          <path d="M0 0 C55 180 100 0 100 0 Z"></path>
        </svg>
      </div>
      <div class="content">
        <h2>Our Core Values</h2>
        <div class="col-12 seprator"></div>
        <swiper
            :options="swiperOption"
            class="owl-carousel"
        >

          <swiper-slide v-for="item in testimonials" :key="item.id">
            <div class="item">
              <div class="row m-0 justify-content-center">
                <div class="col-12 p-0 text-center">
                  <img
                    class="testimonial-image ls-is-cached lazyloaded"
                    :src="item.image"
                    width="150"
                    height="150"
                  />
                </div>
                <blockquote>
                  <q class="fusion-clearfix">
                    {{item.description}}
                  </q>
                </blockquote>
                <span class="company-name">
                  <strong>{{item.title}} • {{item.job}}</strong>
                </span>
              </div>
            </div>
          </swiper-slide>

        </swiper>

      </div>
      <div class="testominials-sperator">
        <svg
          class="fusion-big-half-circle-candy"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style="padding: 0"
          fill="rgb(245, 245, 245)"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "AppHomeTestominials",
  props: ["testimonials"],
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 50
      }
    };
  },
};
</script>
<style>
.testominials {
  background-color: rgb(245, 245, 245);
  background-position: center center;
  background-repeat: no-repeat;
  border-width: 0px;
  border-color: var(--awb-color2);
  border-style: solid;
  background-size: cover;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-image: none;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.testominials-back {
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
  opacity: 1;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2015/12/home-parallax-144609983.jpg");
  min-height: 150px;
  background-attachment: fixed;
}
.testominials-inner .testominials-sperator {
  width: 100wv;
}
.testominials-content {
  margin-top: 100px;
  margin-bottom: 55px;
  padding: 30px;
}
.testominials .content {
  margin-top: 70px;
}
.testominials .content h2 {
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 20px;
  color: #fff;
}
.testominials .content .seprator {
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 206px;
  border-color: var(--main-color);
  border-top-width: 2px;
  border-top-style: solid;
}

.testominials .owl-carousel {
  margin-bottom: 50px;
}

.testominials .owl-carousel .item img {
  width: 150px;
  height: 150px;
  padding: 0;
  border-radius: 50%;
  margin: 0 auto;
}

.testominials .owl-carousel .item blockquote {
  margin: 0;
  max-width: 900px;
}

.testominials .owl-carousel .item q {
  color: #fff;
  display: block;
  padding: 25px;
  line-height: 30px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  font-style: italic;
  font-size: 18px;
  font-weight: 600;
}
.testominials .owl-carousel .item .company-name {
  margin-top: 25px;
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
}
.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #fff;
}
.owl-theme .owl-dots .owl-dot span {
  width: 12px;
  height: 12px;
  background: transparent;
  border: 1px solid #fff;
}
</style>
