<template>
  <div>
    <span v-if="$i18n.locale === 'en'"><nuxt-link :to="switchLocalePath('ar')">العربية</nuxt-link></span>
    <span v-if="$i18n.locale === 'ar'"><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></span>
  </div>
</template>

<style scoped lang="scss">
span {
  font-weight: 600;
  margin: 0 10px;
  a {
    color: #000;
  }
}
</style>