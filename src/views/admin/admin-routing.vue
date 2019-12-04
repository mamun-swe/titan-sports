<template>
  <div class="routing">
    <div class="custom-top-nav border-bottom p-3">
      <div class="d-flex">
        <div class="ml-auto">
          <p class="mb-0 text-capitalize">admin</p>
          <i class="fas fa-power-off logout mx-2" v-on:click="logout"></i>
          <i class="fas fa-bars" v-on:click="openMenu" v-show="bars"></i>
          <i class="fas fa-times" v-on:click="closeMenu" v-show="close"></i>
        </div>
      </div>
    </div>
    <div class="side-menu border-right p-3" id="sideMenu">
      <router-link to="/menu/dashboard" class="btn btn-block">Dashboard</router-link>
      <router-link to="/menu/banners" class="btn btn-block">Banner</router-link>
      <router-link to="/menu/sporser" class="btn btn-block">Sponsored</router-link>
      <router-link to="/menu/sporser" class="btn btn-block">Team</router-link>
      <router-link to="/menu/news" class="btn btn-block">News</router-link>
    </div>
    <div class="break"></div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "admin-routing",
  data() {
    return {
      bars: true,
      close: false
    };
  },
  mounted() {
    document.getElementById("sideMenu").style.marginLeft = "-220px";
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/admin" });
    },
    openMenu() {
      this.bars = false;
      this.close = true;
      document.getElementById("sideMenu").style.marginLeft = "0px";
    },
    closeMenu() {
      this.close = false;
      this.bars = true;
      document.getElementById("sideMenu").style.marginLeft = "-220px";
    }
  }
};
</script>
<style lang="scss" scoped>
.routing {
  background: #ffffff;
  .custom-top-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    background: #ffffff;
    p {
      font-size: 16px;
      float: left;
      font-family: Nunito-regular;
    }
    .logout {
      cursor: pointer;
      transition: 0.3s;
      float: left;
      padding-top: 2px;
    }
    .logout:hover {
      color: #fc4c4e;
    }
    i {
      padding-left: 10px;
      cursor: pointer;
      font-size: 18px;
      transition: 0.3s;
    }
    i:hover {
      color: #fc4c4e;
    }
  }
  .side-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100vh;
    background: #ffffff;
    z-index: 9;
    transition: 0.6s;
    .btn {
      font-family: Nunito-regular;
      border-radius: 3px;
      transition: 0.3s;
      box-shadow: none;
      padding-top: 6px;
      padding-bottom: 6px;
      text-align: left;
      padding-left: 20px;
    }
    .btn:hover {
      color: #ffffff;
      background: #fc4c4e;
    }
    a.router-link-exact-active {
      color: #ffffff;
      background: #fc4c4e;
    }
  }
  .break {
    height: 60px;
  }
}
</style>