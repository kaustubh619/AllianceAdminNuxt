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
              Add Destination Theme
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

            <button
              @click="postTheme"
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
        file: ""
      };
    },
    methods: {
      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      postTheme: function() {
        var payload = new FormData();
        payload.append("name", this.name);
        if (this.file !== "") {
          payload.append("category_image", this.file);
        }
        this.$store.dispatch("postTheme", payload).then(res => {
          this.$router.push("/theme");
        });
      }
    }
  };
</script>

<style>
</style>