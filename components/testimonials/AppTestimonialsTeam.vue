<template>
  <div class="team-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center">
        <span class="sp-color2">Our Team</span>
        <h2>Our Team Members</h2>
        <div class="seprator"></div>
      </div>
      <div class="row pt-45" v-if="team.teams.length >= 1">
        <div
          v-for="member in team.teams"
          :key="member.id"
          class="col-sm-6 col-md-4 projects-col"
        >
          <div class="card">
            <div class="thumb">
              <img :src="member.image" alt="" />
              <div class="rollover"></div>
            </div>
            <div class="content">
              <h4>{{ member.name }}</h4>
              <h5>{{ member.job }}</h5>
              <h6>{{ member.description }}</h6>
              <h5>{{ member.phone }}</h5>
              <h5>{{ member.email }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTestimonialsTeam",
  props: ["team"],
};
</script>

<style>
.team-area .section-title {
  margin-bottom: 0;
}
.team-area .section-title span {
  margin-bottom: 8px;
  font-weight: 600;
  display: block;
  color: var(--main-color);
}
.team-area .section-title h2 {
  font-weight: 400;
  line-height: 41.6px;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.team-area .section-title .seprator {
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
.thumb img {
  height: 250px;
  width: 100%;
}
.content {
  padding: 10px 20px;
}
.team-area .flip-box {
  min-height: 325.617px;
  position: relative;
  margin-bottom: 15px;
  perspective: 1000px;
  overflow: hidden;
}
.team-area .flip-box .flip-box-front {
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
  padding: 0px;
  text-align: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-clip: padding-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
}
.team-area .flip-box .flip-box-front img {
  border-radius: 10px;
  min-height: 325.617px;
}
.team-area .flip-box-back {
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
.team-area .flip-box:hover .flip-box-front {
  transform: rotateY(180deg);
  z-index: -1;
}
.team-area .flip-box:hover .flip-box-back {
  transform: rotateY(0);
  z-index: 1;
}
.team-area h5 {
  font-size: 16px;
  color: rgb(116, 116, 116);
}
.card {
  height: 100%;
}
</style>
