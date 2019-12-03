<template>
  <div class="contact">
    <div class="container">
      <div class="row py-5">
        <div class="col-12 text-center">
          <h1>How we can help?</h1>
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-12 col-lg-10 m-auto">
          <form @submit.prevent="sendMessage">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <small class="error" v-if="errors.name_err">{{errors.name_err}}</small>
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    placeholder="Your name"
                    v-model="contact.name"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <small class="error" v-if="errors.email_err">{{errors.email_err}}</small>
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    placeholder="Your email"
                    v-model="contact.email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <small class="error" v-if="errors.phone_err">{{errors.phone_err}}</small>
                  <input
                    type="text"
                    class="form-control rounded-0 shadow-none"
                    placeholder="Your phone"
                    v-model="contact.phone"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <small class="error" v-if="errors.message_err">{{errors.message_err}}</small>
                  <textarea
                    class="form-control rounded-0 shadow-none"
                    rows="4"
                    placeholder="Your message"
                    v-model="contact.message"
                  ></textarea>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-block rounded-0 shadow-none">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      errors: {
        name_err: "",
        email_err: "",
        phone_err: "",
        message_err: ""
      }
    };
  },
  methods: {
    sendMessage() {
      if (!this.contact.name) {
        this.errors.name_err = "Name is required*";
      } else if (!this.contact.email) {
        this.errors.email_err = "E-mail is required*";
      } else if (this.contact.email.indexOf("@gmail.com") < 0) {
        this.errors.email_err = "Address isn't valid*";
      } else if (!this.contact.phone) {
        this.errors.phone_err = "Phone is required*";
      } else if (!this.contact.message) {
        this.errors.message_err = "Message is required*";
      } else {
        this.errors = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.contact {
  h1 {
    color: rgb(61, 60, 60);
    font-weight: 900;
    font-family: "Kanit", sans-serif;
  }
  form {
    input {
      color: #f87800;
      height: 50px;
      background: rgb(27, 27, 27);
      font-family: "Kanit", sans-serif;
      border: 1px solid rgba(36, 35, 35, 0.349);
    }
    textarea {
      color: #f87800;
      background: rgb(27, 27, 27);
      font-family: "Kanit", sans-serif;
      border: 1px solid rgba(36, 35, 35, 0.349);
    }
    .form-control:focus {
      border: 1px solid#f87800;
    }
    .btn {
      height: 50px;
      font-size: 20px;
      color: #ffffff7e;
      transition: 0.3s;
      background: rgb(27, 27, 27);
      font-family: "Kanit", sans-serif;
    }
    .btn:hover {
      background: rgb(46, 45, 45);
    }
    .error {
      color: #f87800;
      font-size: 16px;
      font-family: "Kanit", sans-serif;
    }
  }
}

@media (max-width: 768px) {
  .contact {
    h1 {
      font-size: 25px;
    }
    form {
      .form-group {
        margin-bottom: 25px;
      }
    }
  }
}

@media (min-width: 768px) {
  .contact {
    form {
      .form-group {
        margin-bottom: 35px;
      }
    }
  }
}
</style>