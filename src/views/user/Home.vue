<template>
  <div class="home">
    <carousel-3d
      autoplay="true"
      autoplayTimeout="2000"
      animationSpeed="1000"
      width="700"
      height="380"
      border="0"
      clickable="false"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <img src="../../assets/sliders/slider.jpg" class="img-fluid" />
      </slide>
    </carousel-3d>

    <!-- Sponsored -->

    <div class="sponsored-company my-5 py-2 border-bottom shadow-sm">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <slick ref="slick" :options="slickOptions" class="px-3 px-lg-5">
              <div class="text-center">
                <img src="../../assets/sponsored/logo.png" class="img-fluid" />
              </div>
              <div class="text-center">
                <img src="../../assets/sponsored/logo.png" class="img-fluid" />
              </div>
              <div class="text-center">
                <img src="../../assets/sponsored/logo.png" class="img-fluid" />
              </div>
              <div class="text-center">
                <img src="../../assets/sponsored/logo.png" class="img-fluid" />
              </div>
              <div class="text-center">
                <img src="../../assets/sponsored/logo.png" class="img-fluid" />
              </div>
            </slick>
            <i class="fas fa-chevron-left leftIcon" v-on:click="prev"></i>
            <i class="fas fa-chevron-right rightIcon" v-on:click="next"></i>
          </div>
        </div>
      </div>
    </div>

  <!-- Latest News -->
  <div class="latest-news">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h6 class="mb-0 damn-color"><i class="fas fa-caret-right mr-3 danger-color"></i>Latest News</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Slick from "vue-slick";
export default {
  name: "home",
  components: {
    Carousel3d,
    Slide,
    Slick
  },
  data() {
    return {
      slides: [],
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 4,
        pauseOnHover: false,
        autoplay: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  mounted() {
    for (var i = 0; i < 6; i++) {
      this.slides = i;
    }
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .sponsored-company {
    .col-12 {
      height: 55px;
      position: relative;
      img {
        height: 45px;
        margin: auto;
      }
      i {
        cursor: pointer;
        transition: 0.3s;
      }
      i:hover {
        color: #d33b4b;
      }
      .leftIcon {
        position: absolute;
        top: 15px;
        left: 10px;
        padding: 5px;
      }
      .rightIcon {
        position: absolute;
        top: 15px;
        right: 10px;
        padding: 5px;
      }
    }
  }

  // News
  .latest-news{
    h6{
      font-family: "Kanit", sans-serif;
    }
  }
}



@media(max-width: 992px){
  .latest-news{
    margin-top: 50px;
  }
}

@media(min-width: 992px){
  .latest-news{
    margin-top: 100px;
  }
}
</style>
