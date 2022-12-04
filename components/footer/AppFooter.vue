<template>
  <footer>
    <div class="widgets">
      <div class="row mx-0">
        <div class="col-sm-6 col-md-3 text-start">
          <div class="logo">
            <img src="/assets/images/logo2.png" alt="logoImage" />
          </div>
          <p>
            We are specialists in the construction of unique and exclusive
            properties. Our work inspires. We pride ourselves on delivering
            outstanding quality and design for leading clients across the world.
          </p>
          <a href="#" class="btn"> LEARN MORE </a>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>latest tweets</h5>
          <ul class="footerLinks">
            <li>
              <nuxt-link :to="localePath('/contact')">Contact</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/faq')">FAQs</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/policy')">Privacy Policy</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/terms')"
                >Terms & Conditions</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>contact us today</h5>
          <ul class="p-0">
            <li>
              <div class="row">
                <div class="col-auto">
                  <i class="fa-solid fa-globe"></i>
                </div>
                <div class="col p-0">
                  Corporate Location 1600 Amphitheatre Parkway London WC1 1BA
                </div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-auto">
                  <i class="fa-solid fa-house-chimney"></i>
                </div>
                <div class="col p-0">
                  Residential Location 9521 Broadsberry Avenue Paddington RC7
                  9ZA
                </div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-auto">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="col p-0">1.800.458.556 / 1.800.532.2112</div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-auto">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="col p-0">
                  {{
                    $store.state.websiteSettings.find(
                      (one) => one.key === "email"
                    ).plain_value
                  }}
                </div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-auto">
                  <i class="fa-solid fa-clock"></i>
                </div>
                <div class="col p-0">Monday – Friday: 9:00 AM – 6:00 PM</div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-auto">
                  <i class="fa-solid fa-clock"></i>
                </div>
                <div class="col p-0">Saturday – Sunday: 9:00 AM – 12:00 PM</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 text-start">
          <h5>our location</h5>
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDsUcTjt43mTheN9ruCsQVgBE-wgN6_AfY&amp;language=en&amp;center=Notting+Hill,London&amp;maptype=roadmap&amp;zoom=14&amp;size=382x300&amp;markers=icon:https://avada.theme-fusion.com/construction/wp-content/uploads/sites/55/2017/03/construction_map_pin.png|Notting+Hill,London&amp;scale=2"
            width="382"
          />
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
            :href="`https://${$store.state.footerData.facebook}`"
            target="_blank"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            :href="`https://${$store.state.footerData.youtube}`"
            target="_blank"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a
            :href="`https://${$store.state.footerData.instagram}`"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            :href="`https://${$store.state.footerData.linkedin}`"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style>
.col-md-3 {
  margin-bottom: 20px;
}
footer .widgets {
  background-color: rgb(31, 31, 31);
  border-width: 12px 0px 0px 0px;
  border-color: rgb(64, 64, 64);
  border-style: solid;
  padding-bottom: 80px;
  padding-left: 76.8px;
  padding-right: 76.8px;
  padding-top: 80px;
}
footer .widgets .logo {
  margin-bottom: 20px;
  text-align: start;
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
