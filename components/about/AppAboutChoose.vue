<template>
    <div class="choose-area">
        <div class="count-sperator"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" fill="rgba(255,255,255,1)" class="fusion-big-half-circle-candy" style="padding: 0px;"><path d="M0 0 C55 180 100 0 100 0 Z"></path></svg></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="choose-content mr-20">
                        <div class="section-title">
                            <span class="sp-color1">Why Choose Us</span>
                            <h2>We Provide Truly Prominent It Solutions.</h2>
                            <div class="col-12 seprator"></div>
                            <p>
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum auctor a ornare odio.
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-lg-6">
                                <div class="choose-content-card">
                                    <div class="content">
                                        <font-awesome-icon icon="fa-solid fa-hand-holding-hand" />
                                        <h3>Experience</h3>
                                    </div>
                                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                                </div>
                            </div>
                            <div class="col-sm-12 col-lg-6">
                                <div class="choose-content-card">
                                    <div class="content">
                                        <font-awesome-icon icon="fa-solid fa-circle-question" />
                                        <h3>Quick Support</h3>
                                    </div>
                                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="choose-img">
                        <img src="/assets/images/choose-img.jpg" alt="Images">
                    </div>
                </div>
            </div>
        </div>
        <div class="count-sperator"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none" fill="rgba(255,255,255,1)" class="fusion-big-half-circle-candy" style="padding: 0px;"><path d="M0 100 C40 0 60 0 100 100 Z"></path></svg></div>
    </div>
</template>

<script>
export default {
    name: 'AppAboutChoose'
}
</script>

<style>
.choose-area {
    background-color: var(--main-color);
}
.choose-area .choose-content {
    margin-bottom: 30px;
    margin-right: 20px;
}
.choose-area .section-title {
  margin: 0 auto ;
  padding: 0;
  position: relative;
  text-align: center;
}
.choose-area .section-title span {
    margin-bottom: 8px;
    font-weight: 600;
    display: block;
    color:#fff;
}
.choose-content .section-title h2 {
    font-weight: 400;
    line-height: 41.6px;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin-bottom: 20px;
}
.choose-content .section-title .seprator {
    align-self: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 206px;
    border-color: #fff;
    border-top-width: 2px;
    border-top-style: solid;
}
.choose-area .choose-content .section-title p {
    color: #2c3e50;
    padding-top: 10px;
    margin-bottom: 0;
    max-width: 530px;
}
.choose-area .choose-content .choose-content-card {
    margin-top: 15px;
}
.choose-area .choose-content .choose-content-card .content {
    padding-top: 20px;
    position: relative;
    padding-left: 75px;
}
.choose-area .choose-content .choose-content-card .content svg {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 60px;
    color:#fff;
    line-height: 1;
}
.choose-area .choose-content .choose-content-card .content h3 {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 800;
    color: #2c3e50;
    font-size: 22px;
}
.choose-area .choose-content .choose-content-card p {
    margin-top: 5px;
    margin-bottom: 0;
    color: #2c3e50;
}
.choose-area .choose-img {
    margin-bottom: 30px;
}
.choose-area .choose-img img {
  border-radius: 0;
  /* max-width: 100%; */
}
</style>