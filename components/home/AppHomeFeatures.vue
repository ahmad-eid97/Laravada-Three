<template>
  <section class="features">
    <div class="container">
      <div class="row intro-text">
        <h2>specialists in modern construction</h2>
        <div class="col-12 seprator"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
          minim veniam.
        </p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="flip-box">
            <div class="flip-box-front">
              <div class="flip-box-front-inner">
                <div class="flip-box-circle">
                  <i class="fa-solid fa-building"></i>
                </div>
                <h2>Buildings</h2>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur.
              </div>
            </div>
            <div class="flip-box-back">
              <div class="flip-box-back-inner">
                <h3>Artfully Crafted</h3>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem
                eum.
                <div class="text-center">
                  <a href="#" class="btn">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="flip-box">
            <div class="flip-box-front">
              <div class="flip-box-front-inner">
                <div class="flip-box-circle">
                  <i class="fa-solid fa-rotate"></i>
                </div>
                <h2>Renovate</h2>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur.
              </div>
            </div>
            <div class="flip-box-back">
              <div class="flip-box-back-inner">
                <h3>Freshly New</h3>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem
                eum.
                <div class="text-center">
                  <a href="#" class="btn">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="flip-box">
            <div class="flip-box-front">
              <div class="flip-box-front-inner">
                <div class="flip-box-circle">
                  <i class="fa-solid fa-house-chimney"></i>
                </div>
                <h2>Construct</h2>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur.
              </div>
            </div>
            <div class="flip-box-back">
              <div class="flip-box-back-inner">
                <h3>Perfect Lines</h3>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem
                eum.
                <div class="text-center">
                  <a href="#" class="btn">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6 col-lg-3">
          <div class="flip-box">
            <div class="flip-box-front">
              <div class="flip-box-front-inner">
                <div class="flip-box-circle">
                  <i class="fa-solid fa-truck-moving"></i>
                </div>
                <h2>Exclusive</h2>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur.
              </div>
            </div>
            <div class="flip-box-back">
              <div class="flip-box-back-inner">
                <h3>Planning</h3>
                Quis autem vel eum iure reprederit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem
                eum.
                <div class="text-center">
                  <a href="#" class="btn">Get A Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHomeFeatures",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.features {
  padding: 8%;
  margin-top: 42px;
  margin-bottom: 20px;
}
.features .intro-text {
  padding: 3% 15% !important;
}
@include xs {
  .features .intro-text {
    padding: 3% 2% !important;
  }
}
.features h2 {
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.features .seprator {
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
.features p {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 500;
  line-height: 34.05px;
}
.features .flip-box {
  min-height: 325.617px;
  position: relative;
  margin-bottom: 15px;
  perspective: 1000px;
}
.features .flip-box .flip-box-front {
  background-color: rgb(245, 245, 245);
  border-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  color: rgb(116, 116, 116);
  transition-duration: 0.4s;
  position: absolute;
  transform: rotateY(0);
  transition: transform 0.4s cubic-bezier(0.2, 0.85, 0.4, 1.275);
  bottom: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  perspective: 1000px;
  padding: 27px 20px;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-clip: padding-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
}

.features .flip-box .flip-box-circle {
  height: 64px;
  width: 64px;
  border: 1px solid;
  border-radius: 50%;
  background-clip: padding-box;
  padding: 18px;
  margin: 0 auto 10px;
}
.features .flip-box .flip-box-circle i {
  font-size: 24px;
}
.features .flip-box h2 {
  color: rgb(51, 51, 51);
  font-size: 25px;
  line-height: 1.3;
  font-weight: 500;
}
.features .flip-box-front-inner {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 600;
  line-height: 34.05px;
}
.features .flip-box-back {
  background-color: var(--main-color);
  border-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  color: rgb(51, 51, 51);
  transition-duration: 0.4s;
  bottom: 0px;
  transform: rotateY(-180deg);
  transition: transform 0.4s cubic-bezier(0.2, 0.85, 0.4, 1.275);
  position: absolute;
  z-index: -1;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  perspective: 1000px;
  padding: 27px 20px;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-clip: padding-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.features .flip-box:hover .flip-box-front {
  transform: rotateY(180deg);
  z-index: -1;
}
.features .flip-box:hover .flip-box-back {
  transform: rotateY(0);
  z-index: 1;
}
.features .flip-box-back-inner {
  color: rgb(116, 116, 116);
  font-size: 15px;
  font-weight: 600;
  line-height: 34.05px;
}
.features .flip-box-back-inner h3 {
  color: rgb(51, 51, 51);
  font-size: 18px;
  line-height: 1.52;
  margin-bottom: 9px;
  margin-top: 0;
  text-transform: uppercase;
}
.features .flip-box-back-inner .btn {
  margin: 20px auto 0;
  background: #fff;
  color: rgb(51, 51, 51);
  border-radius: 0;
  padding: 13px 29px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 17px;
}
.features .flip-box-back-inner .btn:hover {
  margin: 20px auto 0;
  color: #fff;
  background: rgb(51, 51, 51);
}
</style>
