<template>
  <div class="home">
    <app-home-intro :bannerHead="bannerHead" />
    <app-home-banner :topBanner="topBanner" />
    <app-home-features />
    <app-home-count :counter="counter" />
    <app-home-work />
    <app-home-values :services="services" />
    <app-home-testominials :testimonials="testimonials" />
    <app-home-news :blogs="blogs" />
    <app-home-partners :partners="partners" />
    <app-home-bottom-banner :bottomBanner="bottomBanner" />
  </div>
</template>

<script>
import AppHomeIntro from "../components/home/AppHomeIntro.vue";
import AppHomeBanner from "../components/home/AppHomeBanner.vue";
import AppHomeBottomBanner from "../components/home/AppHomeBottomBanner.vue";
import AppHomeCount from "../components/home/AppHomeCount.vue";
import AppHomeFeatures from "../components/home/AppHomeFeatures.vue";
import AppHomeNews from "../components/home/AppHomeNews.vue";
import AppHomePartners from "../components/home/AppHomePartners.vue";
import AppHomeTestominials from "../components/home/AppHomeTestominials.vue";
import AppHomeValues from "../components/home/AppHomeValues.vue";
import AppHomeWork from "../components/home/AppHomeWork.vue";

export default {
  name: "HomePage",
  async asyncData({ $axios }) {
    const bannerHead = await $axios.get("/sections/banner");

    const topBanner = await $axios.get("/sections/banner-top");

    const blogs = await $axios.get("/blogs?latest=1");

    const services = await $axios.get("/services");

    const counter = await $axios.get("/sections/counter_success");

    const partners = await $axios.get("/partners");

    const testimonials = await $axios.get("/testimonials");

    const bottomBanner = await $axios.get("/sections/banner-bottom");

    return {
      bannerHead: bannerHead.data.data,
      topBanner: topBanner.data.data,
      services: services.data.data.services,
      testimonials: testimonials.data.data.testimonials,
      blogs: blogs.data.data.blogs,
      counter: counter.data.data,
      partners: partners.data.data.partners,
      bottomBanner: bottomBanner.data.data,
    };
  },
  components: {
    AppHomeIntro,
    AppHomeBanner,
    AppHomeFeatures,
    AppHomeCount,
    AppHomeWork,
    AppHomeValues,
    AppHomeTestominials,
    AppHomeNews,
    AppHomePartners,
    AppHomeBottomBanner,
  },
};
</script>

<style></style>
