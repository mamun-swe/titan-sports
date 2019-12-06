<template>
  <div class="sponsored">
    <div class="container">
      <div class="row py-5">
        <div class="col-12 text-center">
          <h1>Our Sponsored</h1>
        </div>
      </div>
      <div class="row pb-sm-5" v-if="organizations.length">
        <div
          class="col-6 col-md-4 col-lg-3 px-3 py-4 py-sm-5 text-center company-column"
          v-for="(organization, i) in organizations"
          :key="i"
        >
          <a target="_blank" :href="organization.link">
            <img :src="organization.file" class="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sponsored",
  data() {
    return {
      organizations: []
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$axios.get(`${this.$user_api}companies`).then(res => {
      this.organizations = res.data.companies;
    });
  }
};
</script>
<style lang="scss" scoped>
.sponsored {
  .company-column {
    border: 1px solid rgba(36, 35, 35, 0.349);
    img {
      cursor: pointer;
      height: 50px;
    }
  }
}
.sponsored {
  h1 {
    color: rgb(61, 60, 60);
    font-weight: 900;
    font-family: "Kanit", sans-serif;
  }
}

@media (max-width: 768px) {
  .sponsored {
    h1 {
      font-size: 25px;
    }
  }
}
</style>