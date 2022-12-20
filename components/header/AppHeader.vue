<template>
  <header>
    <b-navbar
      :class="!topOfPage ? 'onScroll' : ''"
      toggleable="lg"
      class="navo"
    >
      <b-navbar-brand :href="localePath('/')">
        <img src="/assets/images/logo.png" alt="logoImage" />
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <span
            class="menu-trigger"
            :class="expanded ? 'active' : ''"
            id="menu03"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </template>
      </b-navbar-toggle>

      <b-collapse
        id="navbar-toggle-collapse"
        class="ml-auto justify-content-end outer"
        is-nav
      >
        <b-navbar-nav
          class="align-items-center inside"
          id="navbar-toggle-collapse"
        >
          <b-nav-item :to="localePath('/')">HOME</b-nav-item>
          <b-nav-item :to="localePath('/about')">ABOUT</b-nav-item>
          <b-nav-item :to="localePath('/services')">SERVICES</b-nav-item>
          <b-nav-item :to="localePath('/testimonials')">WORK</b-nav-item>
          <b-nav-item :to="localePath('/blogs')">ARTICLES</b-nav-item>
          <b-nav-item :to="localePath('/careers')">CAREER</b-nav-item>
          <b-nav-item :to="localePath('/events')">EVENTS</b-nav-item>
          <a href="#" class="btn">GET QUOTE</a>
          <lang-switch></lang-switch>
          <div v-if="$store.state.user" class="logout" @click="logout">
            <i class="fa-regular fa-right-from-bracket"></i>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import LangSwitch from "../langSwitch/langSwitch.vue";
// import DropdownMenu from '@innologica/vue-dropdown-menu'
export default {
  name: "AppHeader",
  components: {
    LangSwitch,
    // DropdownMenu
  },
  data() {
    return {
      show: false,
      show1: false,
      topOfPage: true,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  methods: {
    logout() {
      this.$store.commit("setUserData", null);
      this.$cookies.remove("cms-auth");
      this.$cookies.remove("cms-user");
      this.$router.push(this.localePath("/login"));
    },
    handleScroll() {
      if (window.pageYOffset > 200) {
        if (this.topOfPage) this.topOfPage = false;
      } else {
        if (!this.topOfPage) this.topOfPage = true;
      }
    },
  },
};
</script>
<style lang="scss">
header {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 5px 0px;
  padding: 0 6%;
  background-color: #fff;
}

.inside {
  background-color: #fff;
  position: relative;
  z-index: 9;
  transform: translateY(0px);
  padding: 0;
}
.logout {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--main-color);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  cursor: pointer;
}

@include md {
  .inside {
    transform: translateY(-100px);
    padding: 10px 0;
  }
}

.navbar-brand img {
  max-width: 190px;
}
.nav-item {
  position: relative;
}
.nav-item::after {
  content: " ";
  position: absolute;
  bottom: calc(0px - 24px);
  left: 39px;
  height: calc(30px - 8px * 2) !important;
  width: 0;
  height: 0;
  border-style: solid;
  border-left-width: 10px;
  border-right-width: 10px;
  border-top-width: 8px;
  border-bottom-width: 8px;
  border-color: transparent;
  transition: all calc(300 * 1ms) cubic-bezier(0.42, 0.01, 0.58, 1);
  z-index: 999999998;
}

#navbar-toggle-collapse {
  background-color: #fff;
  position: relative;
  z-index: 999;
}

.nav-item.active::after,
.nav-item:hover:after {
  border-top-color: #fff;
}
.nav-link {
  padding: 40px 27px !important;
  font-weight: 600;
  font-size: 15px;
}
.active .nav-link,
.nav-link:hover {
  color: var(--main-color);
}
header .btn {
  padding: 13px 29px;
  color: rgb(51, 51, 51);
  background-color: var(--main-color);
  font-size: 14px;
  font-weight: 700;
  border-radius: 0;
  letter-spacing: 2px;
  line-height: 17px;
  margin-left: 25px;
}
header .btn:hover {
  color: #fff;
  background-color: #333333;
  border-color: #333333;
}
.navbar-toggler,
.navbar-toggler:focus {
  border: none;
  box-shadow: none;
}
.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 20px;
  height: 16px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--main-color);
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 0;
}
.menu-trigger span:nth-of-type(2) {
  top: 6px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}
#menu03.active {
  transform: rotate(360deg);
}
#menu03.active span:nth-of-type(1) {
  transform: translateY(6px) rotate(-45deg);
}
#menu03.active span:nth-of-type(2) {
  transform: translateY(0) rotate(45deg);
}
#menu03.active span:nth-of-type(3) {
  opacity: 0;
}
.onScroll {
  position: fixed !important;
  width: 100% !important;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 10px #aaa;
  background-color: #fff;
  top: 0 !important;
  z-index: 10;
  left: 0 !important;
  padding: 9px 6% !important;
}

@media screen and (max-width: 991px) {
  .navbar-collapse.show .navbar-nav {
    position: absolute;
    width: 100%;
    top: 104px;
  }
  .nav-item {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: #fff;
  }
  .nav-item:after {
    content: none;
  }
  .nav-item.active,
  .nav-item:hover {
    background-color: var(--main-color);
  }
  .nav-item.active .nav-link,
  .nav-item:hover .nav-link {
    color: #000;
  }
  .nav-link {
    padding: 16px 20px !important;
    font-weight: 600;
    font-size: 15px;
    text-align: start;
  }
}
</style>
