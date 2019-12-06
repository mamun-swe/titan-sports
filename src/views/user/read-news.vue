<template>
  <div class="read-news">
    <div class="container py-lg-5">
      <div class="row">
        <div class="col-12 col-lg-6 text-center mt-4 mt-md-5">
          <img src="../../assets/team/team1.jpg" class="img-fluid" />
        </div>
        <div class="col-12 col-lg-6 pl-lg-5 pt-3 pt-lg-5">
          <h1 class="mb-0">Team Name</h1>
          <small class="text-capitalize">10 NOV 2020</small>
          <p
            class="mt-2"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, optio quis ducimus quasi alias vitae vel modi sapiente facere omnis et provident vero eligendi sequi voluptas maiores voluptatem itaque quia suscipit. Recusandae laboriosam iusto, cum sit, voluptas quidem dicta ipsa minima deserunt temporibus, aut nesciunt expedita maxime commodi aperiam aliquid?</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "read-news",
  data() {
    return {
      newsId: this.$route.params.id
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
<style lang="scss" scoped>
.read-news {
  h1 {
    color: #dad5d5;
    font-weight: 900;
    font-family: "Kanit", sans-serif;
  }
  small {
    color: #a8a1a1b7;
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
  .read-news {
    img {
      height: 250px;
    }
    h1 {
      font-size: 30px;
    }
  }
}
</style>