<template>
  <div class="auth">
    <div class="flex-center flex-column">
      <div class="card border-0">
        <div class="card-header text-center py-4">
          <router-link to="/home">
            <img src="../../assets/static/logo.png" class="img-fluid" />
          </router-link>
          <h4 class="mb-0">Admin Login</h4>
        </div>
        <div class="card-body pb-5 px-0">
          <form @submit.prevent="doLogin">
            <div class="form-group mb-3">
              <small v-if="errors.email_err">{{errors.email_err}}</small>
              <input
                type="text"
                class="form-control shadow-none rounded-0"
                placeholder="E-mail"
                v-model="loginData.email"
              />
            </div>
            <div class="form-group mb-4">
              <small v-if="errors.password_err">{{errors.password_err}}</small>
              <input
                type="password"
                class="form-control shadow-none rounded-0"
                placeholder="Password"
                v-model="loginData.password"
              />
            </div>
            <button type="submit" class="btn btn-block rounded-0 shadow-none">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "auth",
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      },
      errors: {
        email_err: "",
        password_err: ""
      }
    };
  },
  methods: {
    doLogin() {
      if (!this.loginData.email) {
        this.errors.email_err = "E-mail is required*";
      } else if (this.loginData.email.indexOf("@gmail.com") < 0) {
        this.errors.email_err = "Address isn't valid*";
      } else if (!this.loginData.password) {
        this.errors.password_err = "Password is required*";
      } else {
        this.errors = false;
        this.$axios
          .post(`${this.$admin_api}login-admin`, this.loginData)
          .then(res => {
            if (res.data.message === "success") {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("id", res.data.id);
              this.$router.push({ path: "/menu" });
            }
            if (res.data.message === "error") {
              this.$fire({
                title: "Login Failed",
                text: "E-mail or password incorrect !!",
                type: "warning",
                timer: 3000
              });
            }
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.auth {
  width: 100%;
  height: 100vh;
  .card {
    background: none;
    font-family: "Kanit", sans-serif;
    .card-header {
      background: none;
      border: 0;
      img {
        height: 60px;
        margin-bottom: 15px;
      }
      h4 {
        color: #727070;
      }
    }
    .card-body {
      small {
        font-size: 15px;
        color: #727070;
      }
      .form-control {
        height: 41px;
        background: #3d3c3c75;
        border: 0;
      }
      .btn {
        font-size: 18px;
        transition: 0.3s;
        color: #727070;
        background: #3d3c3c75;
      }
      .btn:hover {
        background: #3d3c3c;
      }
    }
  }
}

@media (max-width: 576px) {
  .auth {
    .card {
      width: 90vw;
    }
  }
}
@media (min-width: 576px) {
  .auth {
    .card {
      width: 500px;
    }
  }
}
</style>