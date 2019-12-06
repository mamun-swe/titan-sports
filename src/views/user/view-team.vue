<template>
  <div class="view-team">
    <!-- Loader -->
    <Loader v-if="loader"></Loader>
    <div class="container py-lg-5" v-if="team">
      <div class="row">
        <div class="col-12 col-lg-6 text-center mt-4 mt-md-5">
          <img :src="team.file" class="img-fluid" />
        </div>
        <div class="col-12 col-lg-6 pl-lg-5 pt-3 pt-lg-5">
          <h1>{{team.name}}</h1>
          <p>{{team.about}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "./loader";
export default {
  name: "view-team",
  components: {
    Loader
  },
  data() {
    return {
      loader: null,
      team: '',
      teamId: this.$route.params.id
    };
  },
  mounted() {
    this.loader = true;
    window.scrollTo(0, 0);
    this.$axios.get(`${this.$user_api}single-team/` + this.teamId)
    .then(res => {
      this.team = res.data;
      this.loader = false;
    });
  }
};
</script>
<style lang="scss" scoped>
.view-team {
  h1 {
    color: #dad5d5;
    font-weight: 900;
    font-family: "Kanit", sans-serif;
  }
  p {
    font-size: 17px;
    color: #a8a1a1b7;
    line-height: 1.8rem;
    font-family: "Kanit", sans-serif;
  }
}
@media (max-width: 576px) {
  .view-team {
    img {
      height: 250px;
    }
    h1 {
      font-size: 30px;
    }
  }
}
</style>