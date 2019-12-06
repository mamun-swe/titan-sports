<template>
  <div class="team">
    <div class="banner">
      <img src="../../assets/static/team-banner.jpg" class="img-fluid" />
      <div class="banner-overlay">
        <div class="flex-center flex-column">
          <h1 class="mb-0">MEET THE TEAMS</h1>
        </div>
      </div>
    </div>

    <div class="container" v-if="teams.length">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 team-column" v-for="(team, i) in teams" :key="i">
          <div class="card">
            <img :src="team.file" class="card-img" />
            <div class="custom-team-overlay">
              <div class="content text-center">
                <button
                  type="button"
                  class="btn rounded-0 shadow-none px-4"
                  v-on:click="openTeam(team)"
                >View team</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "team",
  data() {
    return {
      teams: []
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$axios.get(`${this.$user_api}all-team`).then(res => {
      this.teams = res.data.teams;
    });
  },
  methods: {
    openTeam(team) {
      this.$router.push({ path: "/team/" + team.id });
    }
  }
};
</script>
<style lang="scss" scoped>
.team {
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
      background: rgb(27, 27, 27);
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
}

@media (max-width: 400px) {
  .team {
    .banner {
      width: 100%;
      height: 180px;
    }
  }
}
@media (min-width: 400px) {
  .team {
    .banner {
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
}
@media (min-width: 576px) {
  .team {
    .banner {
      img {
        width: 100%;
        height: 250px;
      }
    }
  }
}
@media (max-width: 992px) {
  .team {
    .banner {
      .banner-overlay {
        h1 {
          font-size: 35px;
        }
      }
    }
    .container {
      margin-top: 35px;
    }
  }
}
@media (min-width: 992px) {
  .team {
    .banner {
      img {
        width: 100%;
        height: 300px;
      }
      .banner-overlay {
        h1 {
          font-size: 70px;
        }
      }
    }
    .container {
      margin-top: 80px;
    }
  }
}
@media (min-width: 1480px) {
  .team {
    .banner {
      img {
        width: 100%;
        height: 410px;
      }
    }
  }
}
</style>