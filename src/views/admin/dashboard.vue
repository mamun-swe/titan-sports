<template>
  <div class="dashboard py-3">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="flex-center flex-column">
              <p class="mb-0">{{admins}}</p>
              <h5 class="mb-0">Admin</h5>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="flex-center flex-column">
              <p class="mb-0">{{spnosore}}</p>
              <h5 class="mb-0">Sponsore</h5>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="flex-center flex-column">
              <p class="mb-0">{{team}}</p>
              <h5 class="mb-0">Team</h5>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="flex-center flex-column">
              <p class="mb-0">{{news}}</p>
              <h5 class="mb-0">News</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  data() {
    return {
      admins: "",
      spnosore: "",
      team: "",
      news: "",
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },
  mounted() {
    this.$axios
      .get(`${this.$admin_api}total-admin`, this.header)
      .then(res => {
        this.admins = res.data.totaladmin;
      })
      .catch(error => {
        if (error) {
          if (error.response.status == 401) {
            localStorage.clear();
            this.$router.push({ path: "/admin" });
          }
        }
      });
    this.$axios
      .get(`${this.$admin_api}total-company`, this.header)
      .then(res => {
        this.spnosore = res.data.company;
      })
      .catch(error => {
        if (error) {
          if (error.response.status == 401) {
            localStorage.clear();
            this.$router.push({ path: "/admin" });
          }
        }
      });
    this.$axios
      .get(`${this.$admin_api}total-team`, this.header)
      .then(res => {
        this.team = res.data.team;
      })
      .catch(error => {
        if (error) {
          if (error.response.status == 401) {
            localStorage.clear();
            this.$router.push({ path: "/admin" });
          }
        }
      });
    this.$axios
      .get(`${this.$admin_api}total-news`, this.header)
      .then(res => {
        this.news = res.data.news;
      })
      .catch(error => {
        if (error) {
          if (error.response.status == 401) {
            localStorage.clear();
            this.$router.push({ path: "/admin" });
          }
        }
      });
  }
};
</script>
<style lang="scss" scoped>
.dashboard {
  .card {
    height: 100px;
  }
}

@media (max-width: 992px) {
  .dashboard {
    .col-6 {
      margin-bottom: 30px;
    }
  }
}
</style>