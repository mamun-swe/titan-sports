<template>
  <div class="add-news">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-3">
          <div class="d-flex">
            <div>
              <h3>Add News</h3>
            </div>
            <div class="ml-auto">
              <router-link to="/menu/news">
                <i class="fas fa-chevron-circle-left mt-2 plus text-muted"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 pt-4">
          <form @submit.prevent="addNews">
            <div class="form-group mb-3">
              <small class="text-danger" v-if="errors.title_err">{{errors.title_err}}</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="News title"
                v-model="newsData.title"
              />
            </div>
            <div class="form-group mb-3">
              <small class="text-danger" v-if="errors.content_err">{{errors.content_err}}</small>
              <textarea
                class="form-control shadow-none"
                placeholder="News content"
                rows="5"
                v-model="newsData.content"
              ></textarea>
            </div>
            <div class="form-group mb-3">
              <small class="text-danger" v-if="errors.file_err">{{errors.file_err}}</small>
              <br v-if="errors.file_err" />
              <input type="file" id="file" ref="file" v-on:change="handleFileUpload" />
            </div>
            <div class="text-center text-lg-right pt-3">
              <button type="submit" class="btn btn-info shadow-none px-5">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "add-news",
  data() {
    return {
      newsData: {
        title: "",
        content: "",
        file: ""
      },
      errors: {
        title_err: "",
        content_err: "",
        file_err: ""
      }
    };
  },
  methods: {
    handleFileUpload() {
      this.newsData.file = this.$refs.file.files[0];
    },
    addNews() {
      if (!this.newsData.title) {
        this.errors.title_err = "News title is required*";
      } else if (!this.newsData.content) {
        this.errors.content_err = "Content is required*";
      } else if (!this.newsData.file) {
        this.errors.file_err = "Image is required*";
      } else {
        this.errors = false;
        let formData = new FormData();
        formData.append("title", this.newsData.title);
        formData.append("content", this.newsData.content);
        formData.append("file", this.newsData.file);
        this.$axios.post(`${this.$admin_api}add-news`, formData).then(res => {
          if (res.data.success === true) {
            this.$fire({
              title: "Successfully",
              text: "News added !!",
              type: "success",
              timer: 3000
            });
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.add-news {
  i {
    font-size: 22px;
    cursor: pointer;
  }
}
</style>