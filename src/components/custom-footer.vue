<template>
  <div class="custom-footer">
    <div class="container">
      <div class="row site-content">
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <h6>The Titan Esports</h6>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sit ipsa perferendis veritatis molestias, distinctio nam nisi sapiente eligendi, iusto quod nihil quo architecto eveniet, labore accusantium.</p>
        </div>
        <div class="col-12 col-md-4 mb-3 mb-md-0 pl-md-5">
          <h6>Links</h6>
          <router-link to="/home">home</router-link>
          <router-link to="/">about</router-link>
          <router-link to="/team">team</router-link>
          <router-link to="/news">news</router-link>
          <router-link to="/contact">contact</router-link>
          <router-link to="/sponsored">sponsored</router-link>
          <router-link to="/registration">registration</router-link>
        </div>
        <div class="col-12 col-md-4 mb-3 mb-md-0">
          <h6>Connect with us</h6>
          <a target="_blank" href>facebook</a>
          <a target="_blank" href>instagram</a>
          <a target="_blank" href>discord</a>
          <a target="_blank" href>youtube</a>
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
  name: "custom-footer"
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