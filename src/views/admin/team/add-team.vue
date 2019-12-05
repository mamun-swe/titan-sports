<template>
  <div class="add-team">
    <div class="container">
      <div class="row">
        <div class="col-12 pt-3">
          <div class="d-flex">
            <div>
              <h3>Add Team</h3>
            </div>
            <div class="ml-auto">
              <router-link to="/menu/teams">
                <i class="fas fa-chevron-circle-left mt-2 plus text-muted"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 pt-4">
          <form @submit.prevent="addTeam">
            <div class="form-group mb-3">
              <small class="text-danger" v-if="errors.name_err">{{errors.name_err}}</small>
              <input
                type="text"
                class="form-control shadow-none"
                placeholder="Team name"
                v-model="teamData.name"
              />
            </div>
            <div class="form-group mb-3">
              <small class="text-danger" v-if="errors.about_err">{{errors.about_err}}</small>
              <textarea
                class="form-control shadow-none"
                placeholder="Team about"
                rows="5"
                v-model="teamData.about"
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
  name: "add-team",
  data() {
    return {
      teamData: {
        name: "",
        about: "",
        file: ""
      },
      errors: {
        name_err: "",
        about_err: "",
        file_err: ""
      }
    };
  },
  methods: {
    handleFileUpload() {
      this.teamData.file = this.$refs.file.files[0];
    },
    addTeam() {
      if (!this.teamData.name) {
        this.errors.name_err = "Team name is required*";
      } else if (!this.teamData.about) {
        this.errors.about_err = "About is required*";
      } else if (!this.teamData.file) {
        this.errors.file_err = "Image is required*";
      } else {
        this.errors = false;
        this.$fire({
          title: "Successfully",
          text: "Team added !!",
          type: "success",
          timer: 3000
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.add-team {
  i {
    font-size: 22px;
    cursor: pointer;
  }
}
</style>