<template>
  <div class="news">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-3">
          <div class="d-flex">
            <div>
              <h3>News</h3>
            </div>
            <div class="ml-auto">
              <router-link to="/menu/add-news">
                <i class="fas fa-plus-circle pt-2 plus text-muted"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 mt-2">
          <table class="table table-bordered table-responsive-lg">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(news, i) in allNews" :key="i">
                <td>
                  <img :src="news.file" class="img-fluid" />
                </td>
                <td>
                  <p class="mb-0 text-capitalize">{{news.date | year}}</p>
                </td>
                <td>
                  <p class="mb-0">{{news.title}}</p>
                </td>
                <td>
                  <p class="mb-0">{{news.content.slice(0, 100)}} ...</p>
                </td>
                <td>
                  <button type="button" class="btn btn-light rounded-circle shadow-none">
                    <i class="fas fa-pen"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-light rounded-circle shadow-none ml-2"
                    v-on:click="deleteNews(news)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Delete Modal -->
    <div class="custom-modal" ref="modal">
      <div class="flex-center flex-column">
        <div class="card">
          <div class="card-header text-right">
            <i class="fas fa-times" v-on:click="closeModal"></i>
          </div>
          <div class="card-body">
            <h5>Are you sure want to delete this news ?</h5>
          </div>
          <div class="card-footer border-0">
            <button
              type="button"
              class="btn shadow-none px-4 py-1 mr-2 yesButton"
              v-on:click="doDelete"
            >Yes</button>
            <button
              type="button"
              class="btn shadow-none px-4 py-1 noButton"
              v-on:click="closeModal"
            >No</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "all-news",
  data() {
    return {
      allNews: [],
      newsId: ""
    };
  },
  mounted() {
    this.$refs.modal.style = "left: -100%";
    this.$axios.get(`${this.$admin_api}get-news`).then(res => {
      this.allNews = res.data.images;
    });
  },
  methods: {
    deleteNews(news) {
      this.newsId = news.id;
      this.$refs.modal.style = "left: 0%";
    },
    closeModal() {
      this.$refs.modal.style = "left: -100%";
    },
    doDelete() {
      this.$axios
        .delete(`${this.$admin_api}remove-news/` + this.newsId)
        .then(res => {
          if (res.data.success === true) {
            this.$axios.get(`${this.$admin_api}get-news`).then(res => {
              this.allNews = res.data.images;
            });
            this.$fire({
              title: "Delete",
              text: "Successfully deleted. !!",
              type: "success",
              timer: 3000
            });
          }
        });

      this.closeModal();
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
  .plus {
    font-size: 22px;
    cursor: pointer;
  }
  img {
    height: 50px;
  }
  .custom-modal {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    z-index: 99;
    transition: 0.9s;
    .card {
      height: auto;
      .card-header {
        border: 0;
        background: none;
        i {
          font-size: 20px;
          cursor: pointer;
          color: #6c757d !important;
        }
      }
      .card-body {
        small {
          font-size: 14px;
        }
      }
      .card-footer {
        background: none;
        .btn {
          transition: 0.3s;
          border: 1px solid #dfdfdf;
        }
        .yesButton:hover {
          color: #ffffff;
          background: #fc4c4e;
          border: 1px solid #fc4c4e;
        }
        .noButton:hover {
          background: #dfdfdf;
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .news {
    .custom-modal {
      .card {
        width: 90vw;
      }
    }
  }
}
@media (min-width: 576px) {
  .news {
    .custom-modal {
      .card {
        width: 450px;
      }
    }
  }
}
</style>