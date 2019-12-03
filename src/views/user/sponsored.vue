<template>
  <div class="sponsored">
    <div class="container">
      <div class="row py-5">
        <div class="col-12 text-center">
          <h1>Our Sponsored</h1>
        </div>
      </div>
      <div class="row pb-sm-5">
        <div
          class="col-6 col-md-4 col-lg-3 border px-3 py-4 py-sm-5 text-center company-column"
          v-for="(organization, i) in organizations"
          :key="i"
        >
          <img src="../../assets/sponsored/logo.png" class="img-fluid" />
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
    for (var i = 0; i < 13; i++) {
      this.organizations = i;
    }
  }
};
</script>
<style lang="scss" scoped>
.sponsored{
    .company-column{
        cursor: pointer;
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
  .contact {
    h1 {
      font-size: 25px;
    }
  }
}

</style>