<template>
  <header>
    <div class="cart" :class="openCart ? 'opened' : ''">
      <div class="head">
        <i class="fa-regular fa-xmark" @click="openCart = false"></i>
        <button
          @click="goToCheckout"
          :disabled="$store.state.cartItems.length <= 0"
        >
          <i class="fa-regular fa-badge-check"></i> Checkout
        </button>
      </div>
      <cart />
    </div>
    <b-navbar
      :class="!topOfPage ? 'onScroll' : ''"
      toggleable="lg justify-content-between"
      class="navo"
    >
      <b-navbar-brand :href="localePath('/')">
        <img src="/assets/images/logo.png" alt="logoImage" />
      </b-navbar-brand>

      <div class="d-flex align-items-center optionsWrapper">
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
        <div class="d-flex align-items-center smallScr">
          <lang-switch></lang-switch>
          <div class="m-0 cartIcon" @click="openCart = !openCart">
            <span>{{ $store.state.cartItems.length }}</span>
            <i class="fa-regular fa-cart-plus"></i>
          </div>
          <div v-if="$store.state.user" class="logout" @click="logout">
            <i class="fa-regular fa-right-from-bracket"></i>
          </div>
        </div>
      </div>
      <b-collapse
        id="navbar-toggle-collapse"
        class="ml-auto justify-content-end outer"
        is-nav
      >
        <b-navbar-nav
          class="align-items-center inside"
          id="navbar-toggle-collapse"
        >
          <b-nav-item
            :to="localePath(`/${item.link}`)"
            exact
            v-for="item in $store.state.topMenu"
            :key="item.id"
          >
            <span v-if="!item.child.length">{{ item.label }}</span>

            <b-dropdown
              :text="item.label"
              block
              class="dropdownBtn"
              v-if="item.child.length"
            >
              <b-dropdown-item
                v-for="child in item.child"
                :key="child.id"
                :to="localePath('/' + child.link)"
                >{{ child.label }}</b-dropdown-item
              >
            </b-dropdown>
          </b-nav-item>
          <b-nav-item v-if="$store.state.user" @click="logout" class="outLarge">
            Logout
          </b-nav-item>
          <a href="#" class="btn">Get started</a>

          <div class="d-flex align-items-center largeScr">
            <lang-switch></lang-switch>
            <div class="m-0 cartIcon" @click="openCart = !openCart">
              <span>{{ $store.state.cartItems.length }}</span>
              <i class="fa-regular fa-cart-plus"></i>
            </div>
            <div v-if="$store.state.user" class="logout" @click="logout">
              <i class="fa-regular fa-right-from-bracket"></i>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import cart from "../cart/cart.vue";
import LangSwitch from "../langSwitch/langSwitch.vue";
// import DropdownMenu from '@innologica/vue-dropdown-menu'
export default {
  name: "AppHeader",
  components: {
    LangSwitch,
    cart,
    // DropdownMenu
  },
  data() {
    return {
      show: false,
      show1: false,
      topOfPage: true,
      openCart: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {},
  methods: {
    logout() {
      this.$swal({
        title: "Logout!",
        text: "Are you sure? You want to logout from your account!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ff5e57",
        confirmButtonText: "Logout",
      }).then((result) => {
        // <--
        if (result.value) {
          // <-- if confirmed
          this.confirmLogout();
        }
      });
    },
    confirmLogout() {
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
    goToCheckout() {
      this.openCart = false;
      this.$router.push("/checkout");
    },
  },
};
</script>
<style lang="scss">
.swal2-container {
  padding: 0 !important;
}
.swal2-shown {
  padding: 0 !important;
}
.swal2-confirm:focus,
.swal2-cancel:focus {
  box-shadow: none !important;
}
.swal2-cancel {
  background: #e5e5e5 !important;
  color: rgb(51, 51, 51) !important;
}
header {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 5px 0px;
  padding: 0 6%;
  background-color: #fff;
  @include sm {
    padding: 10px;
  }
  .cart {
    width: 390px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(390px);
    background-color: #fff;
    z-index: 999999;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      & > i {
        border: 1px solid var(--main-color);
        border-radius: 5px;
        width: 30px;
        height: 30px;
        display: grid;
        place-items: center;
        cursor: pointer;
        background-color: var(--main-color);
        color: #000;
        &:hover {
          color: var(--main-color);
          background: transparent;
        }
      }
      button {
        padding: 5px 30px;
        font-size: 1.1rem;
        background-color: var(--main-color);
        color: #000;
        border: 1px solid var(--main-color);
        display: flex;
        align-items: center;
        gap: 5px;
        i {
          font-size: 1.1rem;
        }
        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          &:hover {
            background-color: var(--main-color);
            color: #fff;
          }
        }
        &:hover {
          background-color: transparent;
          color: var(--main-color);
        }
      }
    }
    &.opened {
      transform: translateX(0);
    }
    @include xs {
      width: 350px;
    }
  }
  .cartIcon {
    border: 1px solid #000;
    border-radius: 5px;
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    cursor: pointer;
    position: relative;
    margin: 0 10px !important;
    span {
      position: absolute;
      top: -15px;
      right: -10px;
      width: 30px;
      height: 30px;
      background-color: var(--main-color);
      border-radius: 50%;
      color: #000;
      display: grid;
      place-content: center;
      font-size: 1.2rem;
      @include sm {
        font-size: 1rem;
      }
    }
    i {
      color: #000;
    }
    &:hover {
      background-color: var(--main-color);
      border-color: var(--main-color);
      i {
        color: #fff;
      }
    }
    @include sm {
      width: 40px;
      height: 40px;
      margin: 0 0px !important;
    }
  }
  .optionsWrapper {
    flex-direction: row !important;
    @include md {
      flex-direction: row-reverse !important;
    }
  }
}

.smallScr {
  align-items: center;
  display: none !important;
  @include md {
    display: flex !important;
  }
}
.largeScr {
  align-items: center;
  display: flex !important;
  @include md {
    display: none !important;
  }
}
.outLarge {
  display: none;
  @include md {
    display: inline;
  }
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
  @include md {
    display: none;
  }
}

@include md {
  .inside {
    transform: translateY(-100px);
    padding: 10px 0;
  }
}

.navbar-brand img {
  max-width: 160px;
}
.nav-item {
  position: relative;
  & > .dropdown {
    display: none;
  }
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
  padding: 25px 20px !important;
  font-weight: 600;
  font-size: 18px;
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
  padding: 10px 27px !important;
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
  .nav-item:hover .nav-link,
  .nav-item:hover button {
    color: #000 !important;
  }
  .nav-link {
    padding: 16px 20px !important;
    font-weight: 600;
    font-size: 15px;
    text-align: start;
  }
}
.dropdownBtn {
  background: transparent !important;
  margin: 0 !important;
  border: none !important;
  button {
    background: none !important;
    padding: 0 !important;
    text-transform: none !important;
    font-size: 1.1rem !important;
    font-family: unset !important;
    font-weight: 600 !important;
    box-shadow: none !important;
    border: none !important;
    position: relative;
    top: -3px;
    min-width: unset !important;
    margin: 0 !important;
    width: 100%;
    min-height: 30px;
    text-align: unset !important;
    &:hover {
      color: var(--main-color);
    }
    @include md {
      font-size: 1rem !important;
    }
  }
  .dropdown-menu {
    top: 60px !important;
  }
}
</style>
