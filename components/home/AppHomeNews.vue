<template>
  <section class="news">
    <div class="container">
      <div class="row intro-text">
        <h2>Latest News</h2>
        <div class="col-12 seprator"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
          minim veniam.
        </p>
      </div>
      <div class="row justify-content-center m-0" v-if="blogs.length >= 1">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="col-md-6 col-lg-6 col-xl-4 p-0"
        >
          <div class="new">
            <div class="image">
              <img :src="blog.image" :alt="blog.title" />
              <div class="rollover">
                <div class="rollover-content">
                  <div
                    class="rollover-link"
                    href="#"
                    @click="$router.push(`/blog/${blog.id}`)"
                  >
                    <i class="fa-duotone fa-eye"></i>
                  </div>

                  <h4>
                    <a href="#">{{ blog.title }}</a>
                  </h4>
                  <p>
                    <a href="#" rel="tag">{{ blog.username }},</a>
                    <a href="#" rel="tag">News</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="content">
              <h2>
                <a href="#">
                  {{ blog.title }}
                </a>
              </h2>
              <p class="meta">
                <span>{{ blog.publish_date }}</span>
              </p>
              <hr />
              <p class="text">
                {{ blog.short_description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-0 mt-5 align-items-center">
        <hr class="col m-0" />
        <div class="col">
          <nuxt-link to="/blogs" class="btn">VIEW ALL PROJECTS</nuxt-link>
        </div>
        <hr class="col m-0" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHomeNews",
  props: ["blogs"],
  data() {
    return {};
  },
};
</script>
<style>
.news {
  padding-top: 90px;
  margin-top: 0px;
  padding-right: 0;
  padding-bottom: 100px;
  margin-bottom: 0px;
  padding-left: 0;
  background-color: rgb(245, 245, 245);
}
.new {
  margin: 0 30px 30px;
  height: auto;
}
.news .intro-text {
  padding: 3% 15% !important;
}
.news h2 {
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.news .seprator {
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
.news p {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 500;
  line-height: 34.05px;
}
.news .image {
  /* width: 350px; */
  background-size: cover;
  padding: 0;
  position: relative;
}
.news .image img {
  width: 100%;
  height: 300px;
}

.news .image .rollover {
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
.news .image:hover .rollover {
  transform: scaleY(1);
  opacity: 1;
}
.news .image .rollover-content {
  padding: 10px;
  /* width: 90%; */
  box-sizing: border-box;
  line-height: normal;
  text-align: center;
}

.news .image .rollover-content .rollover-link {
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  text-align: center;
  padding: 14px;
  margin: 15px;
  color: rgb(51, 51, 51);
  font-size: 25px;
  display: grid;
  justify-content: center;
  place-content: center;
  margin: auto;
  cursor: pointer;
}
.news .image .rollover-content h4 a {
  font-size: 18px;
  line-height: 1.52;
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.news .image .rollover-content p a {
  font-size: 12px;
  line-height: 1.52;
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.news .new .content {
  padding: 30px 25px 20px 25px;
  background-color: #fff;
  /* width: 350px; */
}
.news .new .content h2 {
  font-size: 24px;
  line-height: 1.4;
  text-align: start;
  font-weight: 500;
  margin-bottom: 5px;
}
.news .new .content h2 a {
  text-decoration: none;
  color: rgb(51, 51, 51);
}
.news .new .content .meta {
  font-size: 12px;
  color: rgb(116, 116, 116);
  font-weight: 500;
  line-height: 18px;
  text-align: start;
}
.news .new .content hr {
  margin-top: 20px;
}
.news .new .content .text {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 600;
  line-height: 34.05px;
  text-align: start;
}

.news .btn {
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
.news .btn:hover {
  background: var(--main-color);
}
</style>
