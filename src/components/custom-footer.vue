<template>
  <div class="custom-footer">
    <div class="container">
      <div class="row site-content">
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <h6>The Titan Esports</h6>
          <p>
            THE TiTAN ESPORTS is a Bangladeshi eSports organisation founded by "Tawsif Mahbub" in June 2019. Focused at first on mobile games. TiTAN ESPORTS has been able to dominate the mobile competitive scene and created thousands of fans around the world who constantly support our work.
            The members of TiTAN ESPORTS shares a series of intrinsic and fundamental values: closeness, human quality, effort, competitiveness and talent. TiTAN ESPORTS includes more than 370 people who are deeply committed to the club and work day after day to improve and continue growing all together.
            <br>
            #titanproud
          </p>
        </div>
        <div class="col-12 col-md-4 mb-3 mb-md-0 pl-md-5">
          <h6>Links</h6>
          <router-link to="/home">home</router-link>
          <router-link to="/news">events</router-link>
          <router-link to="/team">teams</router-link>
          <router-link to="/contact">contact</router-link>
          <router-link to="/about">TiTAN ESPORTS</router-link>
          <!-- <router-link to="/sponsored">sponsored</router-link> -->
          <!-- <router-link to="/registration">registration</router-link> -->
        </div>
        <div class="col-12 col-md-4 mb-3 mb-md-0" v-if="socialLinks">
          <h6>Connect with us</h6>
          <a target="_blank" :href="socialLinks.facebook">facebook</a>
          <a target="_blank" :href="socialLinks.instagram">instagram</a>
          <a target="_blank" :href="socialLinks.discord">discord</a>
          <a target="_blank" :href="socialLinks.youtube">youtube</a>
        </div>
      </div>
      <div class="row mt-4 py-2 dev-content">
        <div class="col-12 text-center">
          <p>
            All right reserved & develop by @2019
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mamun-swe/"
            >Abdullah Al Mamun</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "custom-footer",
  data() {
    return {
      socialLinks: ""
    };
  },
  mounted() {
    this.$axios.get(`${this.$user_api}social-links`).then(res => {
      this.socialLinks = res.data.links[0];
    });
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito&display=swap");
.custom-footer {
  background: rgb(27, 27, 27);
  border-top: 1px solid rgba(51, 49, 49, 0.349);
  .site-content {
    padding-top: 50px;
    h6 {
      color: #868383;
      font-family: "Kanit", sans-serif;
    }
    p {
      color: #636060;
      font-size: 16px;
      text-align: justify;
      text-justify: inter-word;
      font-family: "Nunito", sans-serif;
    }
    a {
      display: block;
      text-decoration: none;
      transition: 0.3s;
      color: #726e6e;
      font-family: "Kanit", sans-serif;
      text-transform: capitalize;
      font-size: 15px;
      font-weight: 200;
      margin-bottom: 5px;
    }
    a:hover {
      color: #f87800;
    }
    .router-link-exact-active {
      color: #f87800;
    }
  }
  .dev-content {
    p {
      color: #333131;
      font-size: 15px;
      margin-bottom: 0;
      font-family: "Nunito", sans-serif;
      a {
        color: #f87800;
      }
    }
  }
}
@media (max-width: 992px) {
  .custom-footer {
    margin-top: 60px;
  }
}
@media (min-width: 992px) {
  .custom-footer {
    margin-top: 100px;
  }
}
</style>