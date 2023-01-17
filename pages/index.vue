<template>
  <div class="home">
    <app-home-intro :bannerHead="bannerHead" />
    <app-home-banner :topBanner="topBanner" />
    <app-home-features :activities="activities" />
    <app-home-steps :steps="steps" />
    <app-home-count :counter="counter" />
    <app-home-work :projects="projects" />
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
import AppHomeSteps from "../components/home/AppHomeSteps.vue";

export default {
  name: "HomePage",
  async asyncData({ $axios, app }) {
    const bannerHead = await $axios.get("/sections/banner", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const topBanner = await $axios.get("/sections/banner-top", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const blogs = await $axios.get("/blogs?latest=1");

    const services = await $axios.get("/services");

    const counter = await $axios.get("/sections/counter_success", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const partners = await $axios.get("/partners");

    const testimonials = await $axios.get("/testimonials");

    const bottomBanner = await $axios.get("/sections/banner-bottom", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const activities = await $axios.get("/sections/activities", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    const projects = await $axios.get("/portfolios");

    const steps = await $axios.get("/sections/steps", {
      headers: {
        "Accept-Language": app.i18n.locale,
      },
    });

    return {
      bannerHead: bannerHead.data.data,
      topBanner: topBanner.data.data,
      services: services.data.data.services,
      testimonials: testimonials.data.data.testimonials,
      blogs: blogs.data.data.blogs.slice(0, 6),
      counter: counter.data.data,
      partners: partners.data.data.partners,
      bottomBanner: bottomBanner.data.data,
      activities: activities.data.data,
      projects: projects.data.data.portfolios,
      steps: steps.data.data,
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
    AppHomeSteps,
  },
};
</script>

<style></style>
