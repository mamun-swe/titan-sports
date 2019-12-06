<template>
  <div class="read-news">
    <!-- Loader -->
    <Loader v-if="loader"></Loader>
    <div class="container py-lg-5" v-if="news">
      <div class="row">
        <div class="col-12 col-lg-6 text-center mt-4 mt-md-5">
          <img :src="news.file" class="img-fluid" />
        </div>
        <div class="col-12 col-lg-6 pl-lg-5 pt-3 pt-lg-5">
          <h1 class="mb-0">{{news.title}}</h1>
          <small class="text-capitalize">{{news.date | year}}</small>
          <p class="mt-2">{{news.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from "./loader";
export default {
  name: "read-news",
  components: {
    Loader
  },
  data() {
    return {
      loader: null,
      newsId: this.$route.params.id,
      news: ""
    };
  },
  mounted() {
    this.loader = true;
    window.scrollTo(0, 0);
    this.$axios.get(`${this.$user_api}read-news/` + this.newsId).then(res => {
      this.news = res.data;
      this.loader = false;
    });
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