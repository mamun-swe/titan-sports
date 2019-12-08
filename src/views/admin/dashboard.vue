<template>
  <div class="dashboard py-3">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-4">
          <div class="card">
            <div class="flex-center flex-column">
              <p class="mb-0">{{admins}}</p>
              <h5 class="mb-0">Admin</h5>
            </div>
          </div>
        </div>

        <div class="col-6 col-md-4">
          <div class="card">
            <div class="flex-center flex-column">
              <p class="mb-0">{{team}}</p>
              <h5 class="mb-0">Team</h5>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="card">
            <div class="flex-center flex-column">
              <p class="mb-0">{{news}}</p>
              <h5 class="mb-0">Events</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-4 social-activities">
        <div class="col-12">
          <h5>Live strim</h5>
          <form @submit.prevent="strimingUpdate">
            <div class="d-flex">
              <div class="w-100">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    v-model="socialLinks.striming"
                  />
                  <i class="fab fa-youtube"></i>
                </div>
              </div>
              <div class="flex-shrink-1">
                <button type="submit" class="btn btn-info rounded-0 shadow-none px-4">Update</button>
              </div>
            </div>
          </form>
        </div>

        <!-- Social Media -->
        <div class="col-12 mt-3">
          <h5>Social media links</h5>
          <!-- Facebook -->
          <form @submit.prevent="facebookUpdate">
            <div class="d-flex mb-2">
              <div class="w-100">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    v-model="socialLinks.facebook"
                  />
                  <i class="fab fa-facebook-square"></i>
                </div>
              </div>
              <div class="flex-shrink-1">
                <button type="submit" class="btn btn-info rounded-0 shadow-none px-4">Update</button>
              </div>
            </div>
          </form>
          <!-- Instagram -->
          <form @submit.prevent="instagramUpdate">
            <div class="d-flex mb-2">
              <div class="w-100">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    v-model="socialLinks.instagram"
                  />
                  <i class="fab fa-instagram"></i>
                </div>
              </div>
              <div class="flex-shrink-1">
                <button type="submit" class="btn btn-info rounded-0 shadow-none px-4">Update</button>
              </div>
            </div>
          </form>
          <!-- Discord -->
          <form @submit.prevent="discordUpdate">
            <div class="d-flex mb-2">
              <div class="w-100">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    v-model="socialLinks.discord"
                  />
                  <i class="fab fa-discord"></i>
                </div>
              </div>
              <div class="flex-shrink-1">
                <button type="submit" class="btn btn-info rounded-0 shadow-none px-4">Update</button>
              </div>
            </div>
          </form>
          <!-- Youtube -->
          <form @submit.prevent="youtubeUpdate">
            <div class="d-flex mb-2">
              <div class="w-100">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    v-model="socialLinks.youtube"
                  />
                  <i class="fab fa-youtube"></i>
                </div>
              </div>
              <div class="flex-shrink-1">
                <button type="submit" class="btn btn-info rounded-0 shadow-none px-4">Update</button>
              </div>
            </div>
          </form>
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
      socialLinks: "",
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

    this.$axios
      .get(`${this.$admin_api}get-social`, this.header)
      .then(res => {
        this.socialLinks = res.data.data[0];
      })
      .catch(error => {
        if (error) {
          if (error.response.status == 401) {
            localStorage.clear();
            this.$router.push({ path: "/admin" });
          }
        }
      });
  },
  methods: {
    strimingUpdate() {
      this.$axios
        .patch(
          `${this.$admin_api}striming-update`,
          this.socialLinks,
          this.header
        )
        .then(res => {
          if (res.status == 200) {
            this.$axios
              .get(`${this.$admin_api}get-social`, this.header)
              .then(res => {
                this.socialLinks = res.data.data[0];
              })
              .catch(error => {
                if (error) {
                  if (error.response.status == 401) {
                    localStorage.clear();
                    this.$router.push({ path: "/admin" });
                  }
                }
              });
            this.$fire({
              title: "Successfully",
              text: "Striming link update !!",
              type: "success",
              timer: 3000
            });
          }
        })
        .catch(error => {
          if (error) {
            if (error.response.status == 401) {
              localStorage.clear();
              this.$router.push({ path: "/admin" });
            }
          }
        });
    },
    facebookUpdate() {
      this.$axios
        .patch(
          `${this.$admin_api}facebook-update`,
          this.socialLinks,
          this.header
        )
        .then(res => {
          if (res.status == 200) {
            this.$axios
              .get(`${this.$admin_api}get-social`, this.header)
              .then(res => {
                this.socialLinks = res.data.data[0];
              })
              .catch(error => {
                if (error) {
                  if (error.response.status == 401) {
                    localStorage.clear();
                    this.$router.push({ path: "/admin" });
                  }
                }
              });
            this.$fire({
              title: "Successfully",
              text: "Facebook link update !!",
              type: "success",
              timer: 3000
            });
          }
        })
        .catch(error => {
          if (error) {
            if (error.response.status == 401) {
              localStorage.clear();
              this.$router.push({ path: "/admin" });
            }
          }
        });
    },
    instagramUpdate() {
      this.$axios
        .patch(
          `${this.$admin_api}instagram-update`,
          this.socialLinks,
          this.header
        )
        .then(res => {
          if (res.status == 200) {
            this.$axios
              .get(`${this.$admin_api}get-social`, this.header)
              .then(res => {
                this.socialLinks = res.data.data[0];
              })
              .catch(error => {
                if (error) {
                  if (error.response.status == 401) {
                    localStorage.clear();
                    this.$router.push({ path: "/admin" });
                  }
                }
              });
            this.$fire({
              title: "Successfully",
              text: "Instagram link update !!",
              type: "success",
              timer: 3000
            });
          }
        })
        .catch(error => {
          if (error) {
            if (error.response.status == 401) {
              localStorage.clear();
              this.$router.push({ path: "/admin" });
            }
          }
        });
    },
    discordUpdate() {
      this.$axios
        .patch(
          `${this.$admin_api}discord-update`,
          this.socialLinks,
          this.header
        )
        .then(res => {
          if (res.status == 200) {
            this.$axios
              .get(`${this.$admin_api}get-social`, this.header)
              .then(res => {
                this.socialLinks = res.data.data[0];
              })
              .catch(error => {
                if (error) {
                  if (error.response.status == 401) {
                    localStorage.clear();
                    this.$router.push({ path: "/admin" });
                  }
                }
              });
            this.$fire({
              title: "Successfully",
              text: "Discord link update !!",
              type: "success",
              timer: 3000
            });
          }
        })
        .catch(error => {
          if (error) {
            if (error.response.status == 401) {
              localStorage.clear();
              this.$router.push({ path: "/admin" });
            }
          }
        });
    },
    youtubeUpdate() {
      this.$axios
        .patch(
          `${this.$admin_api}youtube-update`,
          this.socialLinks,
          this.header
        )
        .then(res => {
          if (res.status == 200) {
            this.$axios
              .get(`${this.$admin_api}get-social`, this.header)
              .then(res => {
                this.socialLinks = res.data.data[0];
              })
              .catch(error => {
                if (error) {
                  if (error.response.status == 401) {
                    localStorage.clear();
                    this.$router.push({ path: "/admin" });
                  }
                }
              });
            this.$fire({
              title: "Successfully",
              text: "Youtube link update !!",
              type: "success",
              timer: 3000
            });
          }
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
  }
};
</script>
<style lang="scss" scoped>
.dashboard {
  .card {
    height: 100px;
  }
  .social-activities {
    .form-group {
      position: relative;
      .form-control {
        height: 50px;
        padding-left: 40px;
      }
      i {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 20px;
      }
      .fa-youtube {
        color: #ff0000;
      }
      .fa-facebook-square {
        color: #3b5998;
      }
      .fa-instagram {
        color: #f46f30;
      }
      .fa-discord {
        color: #3b5998;
      }
    }
    .btn {
      height: 50px;
    }
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