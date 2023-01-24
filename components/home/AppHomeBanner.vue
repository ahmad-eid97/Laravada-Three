<template>
  <div class="banner">
    <h2>{{ topBanner.find((one) => one.key === "banner-top_title").value }}</h2>
    <a
      :href="topBanner.find((one) => one.key === 'banner-top_link').value"
      class="btn"
    >
      Get A Free Quote
    </a>
  </div>
</template>

<script>
export default {
  name: "AppHomeBanner",
  props: ["topBanner"],
  data() {
    return {};
  },
  mounted() {
    document
      .querySelector(".banner")
      .style.setProperty(
        "--bannerTop-bg",
        this.topBanner.find(
          (one) => one.key === "banner-top_background_active_section"
        ).value === "color"
          ? this.topBanner.find(
              (one) => one.key === "banner-top_background_color_section"
            ).value
          : `url(${
              this.topBanner.find(
                (one) => one.key === "banner-top_background_image_section"
              ).value
            })`
      );

    document
      .querySelector(".banner")
      .style.setProperty(
        "--bannerTop-fontSize",
        `${
          this.topBanner.find(
            (one) => one.key === "banner-top_font_size_section"
          ).value
        }px`
      );

    if (
      this.topBanner.find(
        (one) => one.key === "banner-top_border_position_section"
      ) &&
      this.topBanner.find(
        (one) => one.key === "banner-top_border_position_section"
      ).value === "both"
    ) {
      document
        .querySelector(".banner")
        .style.setProperty(
          "--bannerTop-border-top",
          `${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_size_section"
            ).value
          }px ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_type_section"
            ).value
          } ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_color_section"
            ).value
          }`
        );

      document
        .querySelector(".banner")
        .style.setProperty(
          "--bannerTop-border-bottom",
          `${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_size_section"
            ).value
          }px ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_type_section"
            ).value
          } ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_color_section"
            ).value
          }`
        );
    } else if (
      this.topBanner.find(
        (one) => one.key === "banner-top_border_position_section"
      ) &&
      this.topBanner.find(
        (one) => one.key === "banner-top_border_position_section"
      ).value === "top"
    ) {
      document
        .querySelector(".banner")
        .style.setProperty(
          "--bannerTop-border-top",
          `${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_size_section"
            ).value
          }px ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_type_section"
            ).value
          } ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_color_section"
            ).value
          }`
        );
    } else if (
      this.topBanner.find(
        (one) => one.key === "banner-top_border_position_section"
      ) &&
      this.topBanner.find(
        (one) => one.key === "banner-top_border_position_section"
      ).value === "top"
    ) {
      document
        .querySelector(".banner")
        .style.setProperty(
          "--bannerTop-border-bottom",
          `${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_size_section"
            ).value
          }px ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_type_section"
            ).value
          } ${
            this.topBanner.find(
              (one) => one.key === "banner-top_border_color_section"
            ).value
          }`
        );
    }
  },
};
</script>
<style lang="scss">
.banner {
  padding-top: 50px;
  margin-top: 0px;
  padding-right: 30px;
  padding-bottom: 50px;
  margin-bottom: 0px;
  padding-left: 30px;
  background-color: var(--main-color);
  text-align: center;

  --bannerTop-bg: #fff;
  --bannerTop-fontSize: 20px;
  --bannerTop-border-top: 0px solid #fff;
  --bannerTop-border-bottom: 0px solid #fff;

  background: var(--bannerTop-bg);
  border-top: var(--bannerTop-border-top);
  border-bottom: var(--bannerTop-border-bottom);
  background-repeat: no-repeat;
  background-size: cover;
  h2 {
    font-size: var(--bannerTop-fontSize);
  }
}
.banner h2 {
  /* font-size: 32px; */
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
}
@include xs {
  .banner h2 {
    font-size: 22px;
    line-height: 30px;
  }
}
.banner .btn {
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: -108px;
  margin-left: 10px;
  padding: 13px 29px;
  line-height: 21px;
  font-size: 14px;
  color: #fff;
  background-color: #333333;
  font-weight: 700;
  border-radius: 0;
  letter-spacing: 2px;
  border: 2px solid #fff;
}
.banner .btn:hover {
  color: rgb(51, 51, 51);
  background-color: #fff;
  border-color: #333333;
}
</style>
