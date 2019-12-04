<template>
  <div class="banner">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-3">
          <h3>Banner Sliders</h3>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 px-sm-2"
          v-for="(banner, i) in banners"
          :key="i"
        >
          <div class="card">
            <img src="../../../assets/sliders/slider.jpg" class="img-fluid" />
            <div class="custom-overlay p-2 text-right">
              <i class="far fa-trash-alt delete" v-on:click="deleteBanner(banner)"></i>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 px-sm-2 add-column">
          <div class="card" v-on:click="openAddNewBannerModal">
            <div class="flex-center flex-column">
              <i class="fas fa-plus-circle fa-2x text-muted"></i>
            </div>
          </div>
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
            <h5>Are you sure want to delete this slider ?</h5>
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

    <!-- New Banner Modal -->
    <div class="custom-modal" ref="addmodal">
      <div class="flex-center">
        <div class="card">
          <div class="card-header text-right pb-0">
            <i class="fas fa-times" v-on:click="closeAddModal"></i>
          </div>
          <div class="card-body">
            <h5 class="text-muted mb-3">Add new Banner</h5>
            <form @submit.prevent="doPost">
              <div class="form-group">
                <small class="text-danger" v-if="errors.file_err">{{errors.file_err}}</small>
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload" />
              </div>
              <button type="submit" class="btn btn-info btn-block py-1 shadow-none">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      banners: [],
      bannerId: "",
      bannerData: {
        file: ""
      },
      errors: {
        file_err: ""
      }
    };
  },
  mounted() {
    this.$refs.modal.style = "left: -100%";
    this.$refs.addmodal.style = "left: -100%";
    for (var i = 0; i < 6; i++) {
      this.banners = i;
    }
  },
  methods: {
    deleteBanner(banner) {
      this.bannerId = banner;
      this.$refs.modal.style = "left: 0%";
    },
    closeModal() {
      this.$refs.modal.style = "left: -100%";
    },
    doDelete() {
      alert(this.bannerId);
      this.$fire({
        title: "Delete",
        text: "Successfully banner deleted. !!",
        type: "success",
        timer: 3000
      });
    },
    // Add new banner
    handleFileUpload() {
      this.bannerData.file = this.$refs.file.files[0];
    },
    openAddNewBannerModal() {
      this.$refs.addmodal.style = "left: 0%";
    },
    closeAddModal() {
      this.$refs.addmodal.style = "left: -100%";
    },
    doPost() {
      let formData = new FormData();
      formData.append("file", this.bannerData.file);
      if (!this.bannerData.file) {
        this.errors.file_err = "File is required*";
      } else {
        this.errors = false;
        this.$fire({
          title: "New Banner",
          text: "Successfully added !!",
          type: "success",
          timer: 3000
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  font-family: "Kanit", sans-serif;
  .card {
    height: 200px;
    overflow: hidden;
    border-radius: 5px;
    position: relative;
    img {
      width: 100%;
      min-height: 100%;
    }
    .custom-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      .delete {
        color: #000;
        padding: 8px 10px;
        background: #ffffff;
        border-radius: 25px;
        cursor: pointer;
        transition: 0.3s;
      }
      .delete:hover {
        color: #ffffff;
        background: #fc4c4e;
      }
    }
  }
  .add-column {
    .card {
      cursor: pointer;
    }
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
  .banner {
    .custom-modal {
      .card {
        width: 90vw;
      }
    }
  }
}
@media (min-width: 576px) {
  .banner {
    .custom-modal {
      .card {
        width: 450px;
      }
    }
  }
}
</style>