<template>
  <section class="counter-area">
    <div class="container">
      <div class="section-title text-center">
        <span class="sp-color2">Numbers Are Talking</span>
        <h2>Let’s Check Our Business Growth and Success Story</h2>
        <div class="col-12 seprator"></div>
        <p>
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
          ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
          vulputate cursus a sit amet mauris Morbi accumsan ipsum velit.
        </p>
      </div>
      <div class="row pt-45">
        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-laptop-code" />
            <h3>
              <VueJsCounter
                class="d-inline"
                :startVal="0"
                :endVal="4205"
                separator=","
              ></VueJsCounter
              >+
            </h3>
            <span>Delivered Goods</span>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-person-dots-from-line" />
            <h3>
              <VueJsCounter
                class="d-inline"
                :startVal="0"
                :endVal="245"
                separator=","
              ></VueJsCounter
              >+
            </h3>
            <span>IT Consulting</span>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-shuttle-space" />
            <h3>
              <VueJsCounter
                class="d-inline"
                :startVal="0"
                :endVal="3350"
                separator=","
              ></VueJsCounter
              >+
            </h3>
            <span>Fully Launched</span>
          </div>
        </div>

        <div class="col-sm-6 col-lg-3 col-md-3">
          <div class="counter-another-content">
            <font-awesome-icon icon="fa-solid fa-folder-open" />
            <h3>
              <VueJsCounter
                class="d-inline"
                :startVal="0"
                :endVal="6545"
                separator=","
              ></VueJsCounter
              >+
            </h3>
            <span>Project Completed</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueJsCounter from "vue-count-to";
export default {
  name: "AppHomeCountdown",
  components: {
    VueJsCounter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.counter-area .section-title {
  margin: 0;
}
.counter-area .section-title span {
  margin-bottom: 8px;
  font-weight: 600;
  display: block;
}
.counter-area .sp-color2 {
  color: var(--main-color);
}
.counter-area .section-title h2 {
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.counter-area .section-title .seprator {
  align-self: center;
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
.counter-area .section-title p {
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
.section-title p {
  padding-top: 10px;
  margin-bottom: 0;
  max-width: 530px;
  color: #444;
}
.pt-45 {
  padding-top: 45px;
}
.counter-another-content {
  margin-bottom: 25px;
  padding-left: 90px;
  position: relative;
}

@include xs {
.counter-another-content {
  padding-left: 0px;
}
}

.counter-another-content h3 {
  color: var(--main-color);
  font-size: 35px;
  line-height: 1;
  margin-bottom: 8px;
}

.counter-another-content h3 span {
  color: var(--main-color);
  font-size: 35px;
  line-height: 1;
  margin-bottom: 8px;
}

@include md {
  .counter-another-content h3 span {
    font-size: 30px;
  }
}

@include sm {
  .counter-another-content h3 span {
    font-size: 25px;
  }
}

@include xs {
  .counter-another-content h3 span {
    font-size: 20px;
  }
}

.counter-another-content span {
  font-size: 17px;
  color: #444;
  margin-bottom: 0;
  font-weight: 600;
}
.counter-another-content svg {
  position: absolute;
  line-height: 1;
  font-size: 60px;
  top: 3px;
  left: 0;
  color: var(--main-color);
}

@include md {
  .counter-another-content svg {
    font-size: 50px;
  }
}

@include xs {
  .counter-another-content svg {
    font-size: 40px;
    position: relative;
  }
}
</style>
