<template>
  <div class="home">
    <app-home-intro :slides="slides" />
    <div v-if="topBanner.status">
      <app-home-banner :topBanner="topBanner.data" />
    </div>
    <div v-if="activities.status">
      <app-home-features :activities="activities.data" />
    </div>
    <div v-if="steps.status">
      <app-home-steps :steps="steps.data" />
    </div>
    <div v-if="counter.status">
      <app-home-count :counter="counter.data" />
    </div>
    <app-home-work :projects="projects" />
    <app-home-values :services="services" />
    <app-home-testominials :testimonials="testimonials" />
    <app-home-news :blogs="blogs" />
    <app-home-partners :partners="partners" />
    <div v-if="bottomBanner.status">
      <app-home-bottom-banner :bottomBanner="bottomBanner.data" />
    </div>
    <SocialChat :attendants="attendants">
      <p slot="header">Click one of our representatives below to chat.</p>
      <template v-slot:button="{ open }">
        <span v-show="!open">Contact us</span>
        <span v-show="open">Close</span>
      </template>
      <small slot="footer">Opening hours: 8am to 10pm</small>
    </SocialChat>
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
  data() {
    return {
      attendants: [
        {
          app: "whatsapp",
          label: "Support",

          name: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_whatsapp_label"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_whatsapp_label"
              ).plain_value
            : "Laravada",

          number: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_whatsapp_number"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_whatsapp_number"
              ).plain_value
            : "11111111111",

          avatar: {
            src: "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
            alt: "Laravada customer support",
          },
        },
        {
          app: "messenger",
          label: "Technical support",

          name: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_messenger_label"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_messenger_label"
              ).plain_value
            : "Laravada Facebook",

          id: this.$store.state.websiteSettings.find(
            (one) => one.key === "chat_widget_messenger_id"
          )
            ? this.$store.state.websiteSettings.find(
                (one) => one.key === "chat_widget_messenger_id"
              ).plain_value
            : "111111111111",

          avatar: {
            src: "https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4",
            alt: "Laravada customer support",
          },
        },
      ],
    };
  },
  async asyncData({ $axios, app }) {
    const slides = await $axios.get("/sliders", {
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
      slides: slides.data.data.sliders,
      topBanner: topBanner.data,
      services: services.data.data.services,
      testimonials: testimonials.data.data.testimonials,
      blogs: blogs.data.data.blogs.slice(0, 6),
      counter: counter.data,
      partners: partners.data.data.partners,
      bottomBanner: bottomBanner.data,
      activities: activities.data,
      projects: projects.data.data.portfolios,
      steps: steps.data,
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

<style>
.home {
  --vsc-bg-header: var(--main-color);
  --vsc-bg-footer: var(--main-color);
  --vsc-text-color-header: #000;
  --vsc-text-color-footer: #000;
  --vsc-bg-button: var(--main-color);
  --vsc-text-color-button: #000;
  --vsc-outline-color: var(--main-color);
  --vsc-border-color-bottom-header: #fff;
  --vsc-border-color-top-footer: #fff;
}
</style>
