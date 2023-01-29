<template>
  <footer>
    <subscribe />
    <div class="widgets">
      <div class="row mx-0">
        <div class="col-sm-6 col-md-3 text-start">
          <div class="logo">
            <img
              :src="
                $store.state.websiteSettings.find((one) => one.key === 'logo')
                  .plain_value
              "
              alt="logoImage"
            />
          </div>
          <p>
            {{
              $store.state.websiteSettings.find(
                (one) => one.key === "description"
              ).plain_value
            }}
          </p>
          <a href="/about" class="btn"> LEARN MORE </a>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>OTHER PAGES</h5>
          <ul class="footerLinks">
            <li v-for="page in $store.state.footerPages" :key="page.id">
              <nuxt-link
                :to="localePath(generatePagePath(page.id))"
                v-if="page.status"
                >{{ page.name }}</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>CONTACT INFO</h5>
          <ul class="footer-list footer-contact mb-10">
            <li>
              <i class="pe-7s-call"></i> Phone:
              {{
                $store.state.websiteSettings.find(
                  (one) => one.key === "contact_phone"
                ).plain_value
              }}
            </li>
            <li>
              <i class="pe-7s-mail"></i>
              Email:
              {{
                $store.state.websiteSettings.find((one) => one.key === "email")
                  .plain_value
              }}
            </li>
            <li>
              <i class="pe-7s-call"></i> Address:
              {{
                $store.state.websiteSettings.find(
                  (one) => one.key === "contact_address"
                ).plain_value
              }}
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>our location</h5>
          <iframe
            :src="`https://maps.google.com/maps?q='+${
              $store.state.websiteSettings.find((one) => one.key === 'latitude')
                .plain_value
            }+','+${
              $store.state.websiteSettings.find(
                (one) => one.key === 'longitude'
              ).plain_value
            }+'&hl=es&z=14&amp;output=embed`"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <div class="row mx-0 align-items-center">
        <div class="col">
          <p>
            ©COPYRIGHT 2012 - 2022 | LARAVADA THEME | ALL RIGHTS RESERVED |
            POWERED BY <a href="#" target="_blank">RAIL CODER</a>
          </p>
        </div>
        <div class="col-auto social">
          <a
            v-for="link in $store.state.socialLinks"
            :key="link.key"
            :href="link.url"
            target="_blank"
          >
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Subscribe from "../subscribe/subscribe.vue";
export default {
  name: "AppFooter",
  components: { Subscribe },
  data() {
    return {};
  },
  methods: {
    generatePagePath(id) {
      switch (id) {
        case 1:
          return "/about";
        case 2:
          return "/contact";
        case 3:
          return "/terms";
        case 4:
          return "/policy";
      }
    },
  },
  mounted() {},
};
</script>
<style>
.col-md-3 {
  margin-bottom: 20px;
}
.footerLinks,
ul {
  padding: 0;
}
footer .widgets {
  background-color: rgb(31, 31, 31);
  border-width: 12px 0px 0px 0px;
  border-color: rgb(64, 64, 64);
  border-style: solid;
  padding-bottom: 20px;
  padding-left: 76.8px;
  padding-right: 76.8px;
  padding-top: 50px;
}
footer .widgets .logo {
  margin-bottom: 20px;
  text-align: start;
  width: 200px;
}
footer .widgets p {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 600;
  line-height: 34.05px;
  text-align: start;
}
footer .btn {
  margin-top: 10px;
  padding: 13px 29px;
  line-height: 21px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  background-color: var(--main-color);
  font-weight: 700;
  border-radius: 0;
  letter-spacing: 2px;
}
footer .btn:hover {
  color: #fff;
  background-color: #333333;
  border-color: #333333;
}
footer h5 {
  font-weight: 800;
  margin: 0 0 20px;
  font-size: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--main-color);
  font-size: 16;
  line-height: 22.4px;
}
footer ul {
  list-style: none;
}
footer li {
  color: rgb(116, 116, 116);
  font-size: 14px;
  font-weight: 600;
  padding: 5px 0;
}
footer .widgets img {
  max-width: 100%;
}
.copyrights {
  background: rgb(18, 18, 18);
  padding-top: 10px;
  margin-top: 0px;
  padding-right: 6%;
  padding-bottom: 10px;
  margin-bottom: 0px;
  padding-left: 6%;
}
.copyrights p {
  color: rgb(116, 116, 116);
  font-size: 12px;
  font-weight: 600;
  text-align: start;
  margin: 15px 0;
}
.copyrights p a {
  color: rgb(166, 166, 166);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
}
.copyrights .social a {
  margin: 10px;
  color: rgb(116, 116, 116);
  text-decoration: none;
}
</style>
