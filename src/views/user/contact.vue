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

    <div class="google-map pt-lg-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58376.817637350614!2d90.3117777!3d23.870069000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a707416b7fb3c64!2zRGFmZm9kaWwgSW50ZXJuYXRpb25hbCBVbml2ZXJzaXR5IOCmoeCnjeCmr-CmvuCmq-Cni-CmoeCmv-CmsiDgpobgpqjgp43gpqTgprDgp43gppzgpr7gpqTgpr_gppUg4Kas4Ka_4Ka24KeN4Kas4Kas4Ka_4Kam4KeN4Kav4Ka-4Kay4Kav4Ka8!5e0!3m2!1sen!2sbd!4v1575406008564!5m2!1sen!2sbd"
        width="100%"
        height="500"
        frameborder="0"
        style="border:0;"
        allowfullscreen
      ></iframe>
    </div>

    <div class="custom-loading" v-if="loading">
      <div class="flex-center flex-column">
        <p class="mb-0">Sending please wait ...</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      loading: null,
      contact: {
        name: "",
        email: "",
        message: ""
      },
      errors: {
        name_err: "",
        email_err: "",
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
      } else if (!this.contact.message) {
        this.errors.message_err = "Message is required*";
      } else {
        this.errors = false;
        this.loading = true;
        this.$axios.post(`${this.$user_api}mail-sent`, this.contact)
        .then(res => {
          if(res.status === 200) {
            this.loading = false;
            this.$fire({
              title: "Success",
              text: "Your message successfully sent to TiTAN ESPORTS. !!",
              type: "success",
              timer: 3000
            });
          }
        })
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
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
  .custom-loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #092c63;
    z-index: 99999;
    transition: 0.6s;
    p {
      color: #ffffff;
      font-size: 15px;
      letter-spacing: 1px;
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