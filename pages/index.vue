<template>
  <div class="home">
    <app-home-intro />
    <app-home-banner />
    <app-home-features />
    <app-home-count />
    <app-home-work />
    <app-home-values :services="services" />
    <app-home-testominials :testimonials="testimonials" />
    <app-home-news :blogs="blogs" />
    <app-home-partners :partners="partners" />
    <app-home-bottom-banner />
  </div>
</template>

<script>
import AppHomeIntro from '../components/home/AppHomeIntro.vue'
import AppHomeBanner from '../components/home/AppHomeBanner.vue'
import AppHomeBottomBanner from '../components/home/AppHomeBottomBanner.vue'
import AppHomeCount from '../components/home/AppHomeCount.vue'
import AppHomeFeatures from '../components/home/AppHomeFeatures.vue'
import AppHomeNews from '../components/home/AppHomeNews.vue'
import AppHomePartners from '../components/home/AppHomePartners.vue'
import AppHomeTestominials from '../components/home/AppHomeTestominials.vue'
import AppHomeValues from '../components/home/AppHomeValues.vue'
import AppHomeWork from '../components/home/AppHomeWork.vue'

export default {
  name: 'HomePage',
  async asyncData({ $axios }) {
    const blogs = await $axios.get('/blogs');

    const services = await $axios.get('/services');

    const partners = await $axios.get('/partners');

    const testimonials = await $axios.get('/testimonials');

    return {
      services: services.data.data.services,
      testimonials: testimonials.data.data.testimonials,
      blogs: blogs.data.data.blogs,
      partners: partners.data.data.partners
    }
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
    AppHomeBottomBanner
  }
}
</script>

<style>
</style>
