<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: center"
        >
          <form>
            <h2 style="margin-bottom: 20px; text-align: center">
              Edit Destination Theme
            </h2>

            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Theme Name"
              class="form-style"
              v-model="name"
            />
            <div class="form-group col-md-6 col-sm-12 col-xs-12">
              <label>Theme Image :-</label>
              <input
                class="form-control"
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              />
            </div>

            <h4 style="margin-top: 20px">Curent Image:</h4>
            <a :href="image_url" target="_blank">{{ image_url }}</a>

            <button
              @click="updateTheme"
              type="button"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto; padding: 10px 30px; margin-top: 30px"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        image_url: "",
        file: ""
      };
    },
    mounted() {
      this.getCatById();
    },
    methods: {
      getCatById: function() {
        this.$store.dispatch("getCatById", this.$route.params.id).then(res => {
          this.name = res.data.name;
          this.image_url = res.data.category_image;
        });
      },

      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      updateTheme: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        payload.append("name", this.name);
        if (this.file !== "") {
          payload.append("category_image", this.file);
        }
        this.$store.dispatch("updateTheme", payload).then(res => {
          this.$router.push("/theme");
        });
      }
    }
  };
</script>

<style>
.form-style {
  display: block;
  margin-bottom: 20px;
  width: 680px;
  padding: 8px 14px;
}

@media (max-width: 37.5em) {
  .form-style {
    width: 300px;
  }
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .form-style {
    width: 500px;
  }
}

input,
textarea,
select {
  outline: none;
  border: 1px solid #b0b0b0;
  border-radius: 3px;
}

a {
  text-decoration: none;
}
</style>