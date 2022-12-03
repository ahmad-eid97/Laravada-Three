<template>
  <section class="intro">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <h1>
            {{ bannerHead.find((one) => one.key === "banner_title").value }}
          </h1>
          <p>
            {{ bannerHead.find((one) => one.key === "banner_sub_title").value }}
          </p>
          <a href="/blogs" class="btn alt"> Explore Recent Work </a>
          <a
            :href="bannerHead.find((one) => one.key === 'banner_link').value"
            class="btn"
          >
            Get A Quote Today
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHomeIntro",
  props: ["bannerHead"],
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.intro {
  background-color: rgba(255, 255, 255, 0);
  background-position: center center;
  background-repeat: no-repeat;
  border-width: 0px;
  border-color: var(--awb-color2);
  border-style: solid;
  background-size: cover;
  background-image: url("https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2015/12/home-slider-62528242.jpg");
  padding-top: 20px;
  margin-top: 0px;
  padding-right: 30px;
  padding-bottom: 20px;
  margin-bottom: 0px;
  padding-left: 30px;
  min-height: calc(100vh - 116px);
}
.intro .container {
  min-height: calc(100vh - 116px);
}
.intro .container > .row {
  min-height: calc(100vh - 116px);
}
.intro h1 {
  font-family: "Raleway";
  font-weight: 800;
  margin: 0;
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  font-size: 60px;
  line-height: 84px;
}
@include xs {
  .intro h1 {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 20px;
  }
}
.intro p {
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 1px;
  text-transform: capitalize;
  color: var(--main-color);
  font-weight: 500;
}
@include xs {
  .intro p {
    font-size: 18px;
    line-height: 25px;
  }
}
.intro .btn {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 17px 40px;
  line-height: 21px;
  font-size: 18px;
  color: rgb(51, 51, 51);
  background-color: var(--main-color);
  font-weight: 700;
  border-radius: 0;
  letter-spacing: 2px;
}
@include xs {
  .intro .btn {
    padding: 12px 20px;
    line-height: 21px;
    font-size: 15px;
  }
}
.intro .btn:hover {
  color: #fff;
  background-color: #333333;
  border-color: #333333;
}
.intro .btn.alt {
  color: #fff;
  background-color: #333333;
  border-color: #333333;
}
.intro .btn.alt:hover {
  color: rgb(51, 51, 51);
  background-color: var(--main-color);
  border-color: var(--main-color);
}
</style>
