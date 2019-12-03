<template>
  <div class="news">
    <div class="banner">
      <img src="../../assets/static/news-banner.jpg" class="img-fluid" />
      <div class="banner-overlay">
        <div class="title">
          <h1 class="mb-0">READ GAMER'S STORY</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 team-column" v-for="(team, i) in teams" :key="i">
          <div class="card">
            <div class="custom-header">
              <img src="../../assets/team/team3.jpg" class="card-img" />
              <div class="custom-team-overlay"></div>
            </div>
            <div class="card-body">
              <h5 class="mb-0">News title</h5>
              <small class="text-capitalize">10 NOV 2020</small>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolores. Maxime libero quos corporis quis excepturi eos, qui animi aliquam?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      teams: []
    };
  },
  mounted() {
    for (var i = 0; i < 7; i++) {
      this.teams = i;
    }
  },
  methods: {
    openTeam(team) {
      this.$router.push({ path: "/team/" + team });
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
  .banner {
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      min-height: 100%;
    }
    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 0.877) 0%,
        rgba(29, 29, 32, 0.678) 51%
      );
      h1 {
        color: #f87800;
        font-weight: 900;
        font-family: "Kanit", sans-serif;
      }
    }
  }
  .container {
    .card {
      cursor: pointer;
      background: rgb(27, 27, 27);
      h6 {
        font-family: "Kanit", sans-serif;
      }
    }
    .team-column {
      margin-bottom: 32px;
      .card {
        border-radius: 8px;
        border: 0;
        .custom-header {
          height: 200px;
          overflow: hidden;
          position: relative;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          img {
            min-height: 100%;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
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
          }
        }
        .card-body {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          h5 {
            color: #c0b9b9;
            transition: 0.3s;
            font-family: "Kanit", sans-serif;
          }
          small {
            color: #a8a1a1b7;
            font-family: "Kanit", sans-serif;
          }
          p {
            color: #a8a1a1b7;
            margin-top: 15px;
            font-family: "Kanit", sans-serif;
          }
        }
      }
    }
    .card:hover .card-body h5 {
      color: #ffffff;
    }
  }
}

@media (max-width: 400px) {
  .news {
    .banner {
      width: 100%;
      height: 180px;
      .title {
        margin-top: 80px;
        margin-left: 50px;
        h1 {
          font-size: 23px;
        }
      }
    }
  }
}
@media (min-width: 400px) {
  .news {
    .banner {
      img {
        width: 100%;
        height: 200px;
      }
      .title {
        margin-top: 80px;
        margin-left: 50px;
        h1 {
          font-size: 25px;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .news {
    .banner {
      img {
        width: 100%;
        height: 250px;
      }
      .title {
        margin-top: 110px;
        margin-left: 60px;
        h1 {
          font-size: 40px;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .news {
    .container {
      margin-top: 35px;
    }
  }
}
@media (min-width: 992px) {
  .news {
    .banner {
      img {
        width: 100%;
        height: 300px;
      }
      .banner-overlay {
        .title {
          margin-top: 110px;
          margin-left: 100px;
          h1 {
            font-size: 50px;
          }
        }
      }
    }
    .container {
      margin-top: 80px;
    }
  }
}
@media (min-width: 1480px) {
  .news {
    .banner {
      img {
        width: 100%;
        height: 410px;
      }
      .banner-overlay {
        .title {
          margin-top: 160px;
          margin-left: 100px;
          h1 {
            font-size: 60px;
          }
        }
      }
    }
  }
}
</style>