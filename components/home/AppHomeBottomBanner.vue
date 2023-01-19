<template>
  <div class="banner-bottom">
    <div class="specLayer"></div>
    <div class="row mx-0 align-items-center wrapper">
      <div class="col">
        <div class="banner-title">
          <p>
            {{
              bottomBanner.find((one) => one.key === "banner-bottom_title")
                .value
            }}
          </p>
        </div>
        <div class="seprator"></div>
        <div class="banner-text">
          <h3>
            {{
              bottomBanner.find(
                (one) => one.key === "banner-bottom_description"
              ).value
            }}
          </h3>
        </div>
      </div>
      <div class="col-auto">
        <a
          href="/qoutation
          "
          class="btn"
        >
          GET A FREE QUOTE
        </a>
        <p class="hint">Only takes a few seconds!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHomeBanner",
  props: ["bottomBanner"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.banner-bottom {
  opacity: 1;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgb(64, 64, 64);
  background-image: url("../../static/assets/images/3.jpg");
  background-attachment: fixed;
  min-height: 150px;
  padding-top: 100px;
  margin-top: 0px;
  padding-right: 30px;
  padding-bottom: 90px;
  margin-bottom: 0px;
  padding-left: 30px;
  position: relative;
}
.wrapper {
  position: relative;
  z-index: 2;
}
.banner-title {
  font-size: 32px;
  line-height: 44.8px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgb(255, 255, 255);
  font-weight: 800;
  text-align: start;
}

.banner-text {
  text-transform: capitalize;
  color: #fff;
  font-size: 20;
  line-height: 1.45;
  text-align: start;
}
.banner-bottom .seprator {
  /* align-self: center; */
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
.banner-bottom .btn {
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
.banner-bottom .btn:hover {
  color: #fff;
  background-color: #333333;
  border-color: #333333;
}
.banner-bottom .hint {
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 600;
  line-height: 34.05px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
