<template>
  <section class="work">
    <div class="container">
      <div class="row intro-text">
        <h2>Explore Recent Work</h2>
        <div class="col-12 seprator"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
          minim veniam.
        </p>
      </div>
      <div class="row">
        <CoolLightBox :items="items" :index="index" @close="index = null" />
        <div class="images-wrapper">
          <div class="row justify-content-center m-0">
            <div
              class="image col-sm-6 col-md-4 my-2"
              v-for="(image, imageIndex) in items"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')' }"
            >
              <div class="rollover">
                <div class="rollover-content">
                  <a class="rollover-link" href="#">
                    <font-awesome-icon icon="fa-solid fa-link" />
                  </a>
                  <a class="rollover-link" href="#">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                  </a>

                  <h4><a href="#">Florida Heath Facility</a></h4>
                  <p><a href="#">Commercial</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-0 mt-5 align-items-center">
        <hr class="col m-0" />
        <div class="col">
          <a href="#" class="btn">VIEW ALL PROJECTS</a>
        </div>
        <hr class="col m-0" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHomeWork",
  data() {
    return {
      items: [
        "https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2015/12/home-244125289.jpg",
        "https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2015/12/home-244125289.jpg",
        "https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2015/12/home-244125289.jpg",
      ],
      index: null,
    };
  },
};
</script>
<style>
.work {
  padding-top: 90px;
  margin-top: 0px;
  padding-right: 30px;
  padding-bottom: 100px;
  margin-bottom: 0px;
  padding-left: 30px;
}
.work .intro-text {
  padding: 3% 15% !important;
}
.work h2 {
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.work .seprator {
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
.work p {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 500;
  line-height: 34.05px;
}
.work .image {
  width: 350px;
  height: 350px;
  background-size: cover;
  padding: 0;
  position: relative;
  margin: 0 20px;
}

.work .image .rollover {
  transform: scaleY(0);
  background-image: linear-gradient(
    to top,
    var(--main-color) 0px,
    var(--main-color) 100%
  );
  opacity: 0;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: normal;
  text-align: center;
  transition: all 0.3s ease-in-out;
  -webkit-transform-style: preserve-3d;
}
.work .image:hover .rollover {
  transform: scaleY(1);
  opacity: 1;
}
.work .image .rollover-content {
  padding: 10px;
  width: 90%;
  box-sizing: border-box;
  line-height: normal;
  text-align: center;
}

.work .image .rollover-content .rollover-link {
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  text-align: center;
  padding: 14px;
  margin: 15px;
  color: rgb(51, 51, 51);
}
.work .image .rollover-content h4 a {
  font-size: 18px;
  line-height: 1.52;
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.work .image .rollover-content p a {
  font-size: 12px;
  line-height: 1.52;
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.work .btn {
  border: none;
  border-radius: 0;
  font-weight: 500;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 17px;
  padding: 12px;
  width: 100%;
}
.work .btn:hover {
  background: var(--main-color);
}
</style>
