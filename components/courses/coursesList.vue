<template>
  <div class="coursesList">
    <h1>Courses We Provide</h1>
    <div class="row justify-content-center">
      <div
        class="col-md-6 col-xl-4"
        v-for="course in allCourses.courses"
        :key="course"
      >
        <div class="course">
          <div class="header">
            <span
              class="sale"
              v-if="course.previous_price > course.current_price"
              >SALE</span
            >
            <img
              v-if="course.images"
              :src="course.images[0]"
              alt="courseImage"
              @click="$router.push(localePath(`/course/${course.id}`))"
            />
            <div
              class="addToCart"
              :class="$i18n.locale === 'ar' ? 'arabic' : ''"
            >
              <span class="text" @click="addToCart(course)"
                >Enroll In Course</span
              >
              <span><i class="fa-regular fa-cart-plus"></i></span>
            </div>
          </div>
          <h5 @click="$router.push(localePath(`/course/${course.id}`))">
            {{ course.title }}
          </h5>
          <div class="price">
            <p class="pre">${{ course.previous_price }}</p>
            <p>${{ course.current_price }}</p>
          </div>
          <b-form-rating
            color="#f39c12"
            :inline="true"
            :no-border="true"
            value="5"
            readonly
          ></b-form-rating>
        </div>
      </div>
    </div>

    <div class="col-lg-12 col-md-12 text-center">
      <div class="pagination-area">
        <b-pagination
          v-model="allCourses.meta.current_page"
          :total-rows="allCourses.meta.total"
          :per-page="allCourses.meta.per_page"
          aria-controls="my-table"
          @change="changePage"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coursesList"],
  data() {
    return {
      allCourses: this.coursesList,
    };
  },
  methods: {
    addToCart(course) {
      const item = {
        id: course.id,
        images: course.images,
        title: course.title,
        current_price: course.current_price,
        quantity: 1,
        type: "course",
      };
      let cartItems = localStorage.getItem("laravadaCart")
        ? JSON.parse(localStorage.getItem("laravadaCart"))
        : [];

      let aleradyExists = cartItems.find(
        (one) => one.id === item.id && one.title === item.title
      );
      if (aleradyExists) {
        this.$toast.error("You are already enrolld in this course");
        return;
      } else {
        cartItems.unshift(item);
      }
      this.$store.state.cartItems = cartItems;
      localStorage.setItem("laravadaCart", JSON.stringify(cartItems));
      this.$toast.success("You have been enrolled in this course successfully");
    },
    async changePage(pageNum) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const response = await this.$axios.get(`/courses?page=${pageNum}`);
      this.allCourses = response.data.data;
    },
  },
};
</script>

<style scoped lang="scss">
output {
  padding: 0;
}
.coursesList {
  margin-top: 100px;
  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
  .course {
    margin-bottom: 30px;
    .header {
      position: relative;
      .sale {
        position: absolute;
        top: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--main-color);
        color: #fff;
        display: grid;
        place-items: center;
        z-index: 2;
        margin: 0 10px;
      }
      .addToCart {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 1rem;
        display: flex;
        align-items: center;
        animation: all 0.3s ease-in-out;
        cursor: pointer;
        .text {
          background-color: #fff;
          padding: 7.5px 20px;
          transform: translateX(100px);
          opacity: 0;
          position: relative;
          z-index: 1;
        }
        i {
          color: var(--main-color);
          background-color: #fff;
          padding: 5px 20px;
          position: relative;
          z-index: 2;
          font-size: 1.2rem;
        }
        &.arabic {
          right: unset;
          left: 0;
          .text {
            transform: translateX(-100px);
          }
        }
        &:hover {
          .text {
            transform: translateX(0px);
            opacity: 1;
          }
        }
      }
      img {
        width: 100%;
        height: 250px;
        cursor: pointer;
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
    h5 {
      margin-top: 20px;
      cursor: pointer;
    }
    .price {
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        font-size: 1.3rem;
        opacity: 0.7;
        margin: 0;
        &:not(.pre) {
          color: var(--main-color);
          font-weight: bold;
        }
        &.pre {
          text-decoration: line-through;
        }
      }
    }
  }
  .pagination-area {
    margin: 50px 0;
  }
}
</style>
