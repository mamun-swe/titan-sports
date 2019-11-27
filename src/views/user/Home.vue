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
        <img src="../../assets/sliders/team.png" class="img-fluid" />
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
        <div class="row mb-3">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h6 class="mb-0 damn-color">
                  <i class="fas fa-caret-right mr-3 danger-color"></i>Latest News
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="news-card">
              <img src="../../assets/team/team1.jpg" class="img-fluid" />
              <div class="custom-overlay">
                <div class="content">
                  <h5>Team abcd win all over in asia</h5>
                  <p class="mb-0">30 Nov 2020</p>
                </div>
              </div>
            </div>
            <div class="news-card">
              <img src="../../assets/team/team2.jpg" class="img-fluid" />
              <div class="custom-overlay">
                <div class="content">
                  <h5>Team abcd win all over in asia</h5>
                  <p class="mb-0">30 Nov 2020</p>
                </div>
              </div>
            </div>
            <div class="news-card">
              <img src="../../assets/team/team3.jpg" class="img-fluid" />
              <div class="custom-overlay">
                <div class="content">
                  <h5>Team abcd win all over in asia</h5>
                  <p class="mb-0">30 Nov 2020</p>
                </div>
              </div>
            </div>
            <div class="news-card">
              <img src="../../assets/team/team4.jpg" class="img-fluid" />
              <div class="custom-overlay">
                <div class="content">
                  <h5>Team abcd win all over in asia</h5>
                  <p class="mb-0">30 Nov 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team -->
    <div class="team">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h6 class="mb-0 damn-color">
                  <i class="fas fa-caret-right mr-3 danger-color"></i>Team
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 team-column" v-for="(team, i) in teams" :key="i">
            <div class="card">
              <img src="../../assets/team/team1.jpg" class="card-img" />
              <div class="custom-team-overlay">
                <div class="content text-center">
                  <button type="button" class="btn rounded-0 shadow-none px-4">View team</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Strimng -->
    <div class="striming">
      <div class="container">
        <div class="row mb-3">
          <div class="col-12 mb-3">
            <div class="card">
              <div class="card-body">
                <h6 class="mb-0 damn-color">
                  <i class="fas fa-caret-right mr-3 danger-color"></i>Striming
                </h6>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube-nocookie.com/embed/URBy9t6e8rY"
                allowfullscreen
              ></iframe>
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
      teams: [],
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
    for (var x = 0; x < 10; x++) {
      this.teams = x;
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
        color: #f87800;
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
  .latest-news {
    .card {
      h6 {
        font-family: "Kanit", sans-serif;
      }
    }
    .news-card {
      padding: 0;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        min-height: 100%;
        transition: 0.3s;
      }
      .custom-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(2, 0, 36);
        background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 0.7777311608237045) 0%,
          rgba(58, 58, 65, 0.5704482476584384) 51%
        );
        .content {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 15px;
          h5 {
            color: #ffffff;
            font-family: "Kanit", sans-serif;
            margin-bottom: 0;
            transition: 0.3s;
          }
          p {
            color: #ffffff;
            font-size: 15px;
            font-family: "Kanit", sans-serif;
          }
        }
      }
    }
    .news-card:hover img {
      transform: scale(1.2);
    }
    .news-card:hover .custom-overlay .content h5 {
      color: #f87800;
    }
  }

  // Team
  .team {
    margin-top: 10px;
    .card {
      h6 {
        font-family: "Kanit", sans-serif;
      }
    }
    .team-column {
      margin-bottom: 32px;
      .card {
        height: 200px;
        overflow: hidden;
        position: relative;
        border-radius: 8px;
        border: 0;
        img {
          min-height: 100%;
        }
        .custom-team-overlay {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          transition: 0.3s;
          background: rgb(2, 0, 36);
          background: linear-gradient(
            90deg,
            rgba(2, 0, 36, 0.7777311608237045) 0%,
            rgba(58, 58, 65, 0.5704482476584384) 51%
          );
          .content {
            margin-top: 80px;
            margin-right: -180%;
            transition: 0.5s;
            .btn {
              font-size: 15px;
              color: #ffffff;
              border: 2px solid #ffffff;
              font-family: "Kanit", sans-serif;
              transition: 0.3s;
              background: #ffffff36;
            }
            .btn:hover {
              color: #f87800;
              background: #ffffff;
            }
          }
        }
      }
      .card:hover .custom-team-overlay .content {
        margin-right: 0%;
      }
    }
  }

  // Striming
  .striming {
    .card {
      h6 {
        font-family: "Kanit", sans-serif;
      }
    }
  }
}

@media (max-width: 768px) {
  .latest-news {
    margin-top: 50px;
    .news-card {
      width: 100%;
      height: 250px;
    }
  }
}

@media (min-width: 768px) {
  .latest-news {
    margin-top: 100px;
    .news-card {
      width: 50%;
      height: 270px;
      display: inline-block;
      margin-top: -7px;
    }
  }
}
@media (min-width: 992px) {
  .latest-news {
    .news-card {
      height: 350px;
    }
  }
}
</style>
