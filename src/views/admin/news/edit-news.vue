<template>
  <div class="edit">
    <div class="container py-3">
      <div class="row">
        <div class="col-12">
          <router-link to="/menu/news">
            <i class="fas fa-chevron-circle-left pt-2 pb-4 pr-2 plus text-muted"></i>
          </router-link>
        </div>
        <div class="col-12" v-if="news">
          <form @submit.prevent="updateNews">
            <div class="form-group mb-3">
              <input type="text" class="form-control rounded-0 shadow-none" v-model="news.title" />
            </div>
            <div class="form-group mb-3">
              <textarea class="form-control rounded-0 shadow-none" rows="8" v-model="news.content"></textarea>
            </div>
            <button type="submit" class="btn btn-info btn-block rounded-0 shadow-none">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "edit-news",
  data() {
    return {
      newsId: this.$route.params.id,
      news: "",
      header: {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    };
  },
  mounted() {
    this.$axios
      .get(`${this.$admin_api}single-news/` + this.newsId, this.header)
      .then(res => {
        this.news = res.data.news;
      })
      .catch(error => {
        if (error) {
          if (error.response.status == 401) {
            localStorage.clear();
            this.$router.push({ path: "/admin" });
          }
        }
      });
  },
  methods: {
    updateNews() {
      this.$axios
        .patch(`${this.$admin_api}update-news`, this.news, this.header)
        .then(res => {
          console.log(res.status)
          if (res.status == 200) {
            this.$axios
              .get(`${this.$admin_api}single-news/` + this.newsId, this.header)
              .then(res => {
                this.news = res.data.news;
              })
              .catch(error => {
                if (error) {
                  if (error.response.status == 401) {
                    localStorage.clear();
                    this.$router.push({ path: "/admin" });
                  }
                }
              });
            this.$fire({
              title: "Successfully",
              text: "News Updated !!",
              type: "success",
              timer: 3000
            });
          }
        })
        .catch(error => {
          if (error) {
            if (error.response.status == 401) {
              localStorage.clear();
              this.$router.push({ path: "/admin" });
            }
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.edit {
  i {
    font-size: 22px;
    cursor: pointer;
  }
}
</style>