<template>
  <div class="custom-nav">
    <div class="custom-top-nav text-center border-bottom">
      <a target="_blank" href>
        <i class="fab fa-facebook-square"></i>
      </a>
      <a target="_blank" href>
        <i class="fab fa-instagram"></i>
      </a>
      <a target="_blank" href>
        <i class="fab fa-discord"></i>
      </a>
    </div>

    <div class="desktop-nav d-none d-lg-block border-bottom text-center" id="myNav">
      <div class="d-flex justify-content-center">
        <div class="pt-3">
          <router-link to="/home">Home</router-link>
          <router-link to="/">about</router-link>
          <router-link to="/">team</router-link>
        </div>
        <div>
          <router-link to="/home">
            <img src="../assets/static/logo.png" />
          </router-link>
        </div>
        <div class="pt-3">
          <router-link to="/">registration</router-link>
          <router-link to="/">login</router-link>
          <router-link to="/">contact</router-link>
        </div>
      </div>
    </div>
    <div class="mobile-nav d-block d-lg-none border-bottom"></div>
    <div class="break"></div>
  </div>
</template>
<script>
export default {
  name: "custom-nav",
  mounted() {
    window.addEventListener("scroll", () => {
      var header = document.getElementById("myNav");
      var sticky = header.offsetTop;
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Kanit&display=swap");
.custom-nav {
  .custom-top-nav {
    padding-top: 10px;
    padding-bottom: 6px;
    height: 41px;
    background: #ffffff;
    a {
      padding-left: 10px;
      padding-right: 10px;
      i {
        font-size: 20px;
        transition: 0.3s;
        color: #9c9c9c;
      }
      .fa-facebook-square:hover {
        color: #3b5998;
      }
      .fa-instagram:hover {
        color: #c08d64;
      }
      .fa-discord:hover {
        color: #7289da;
      }
    }
  }
  .desktop-nav {
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100px;
    width: 100%;
    z-index: 3;
    background: #ffffff;
    a {
      padding: 4px 15px;
      margin-left: 5px;
      margin-right: 5px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 900;
      color: #726e6e;
      text-decoration: none;
      transition: 0.3s;
      font-family: "Kanit", sans-serif;
    }
    a:hover {
      color: #d33b4b;
    }
    .router-link-exact-active {
      color: #d33b4b;
    }
    img {
      height: 60px;
    }
  }
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.sticky + .break {
  padding-top: 102px;
}

@media (max-width: 992px) {
  .custom-top-nav {
    padding-top: 10px;
    padding-bottom: 6px;
    height: 41px;
    width: 100%;
    z-index: 3;
    background: #ffffff;
    position: fixed;
    top: 0;
  }
  .mobile-nav {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    z-index: 3;
    background: #ffffff;
    position: fixed;
    top: 41px;
  }
  .break {
    height: 83px;
  }
}
</style>