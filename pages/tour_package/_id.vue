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
              Edit Tour Package
            </h2>
            <label>Category Name</label>
            <input
              type="text"
              id="name"
              placeholder="Category Name"
              class="form-style"
              v-model="name"
            />
            <label>Category Info</label>
            <input
              type="text"
              id="info"
              placeholder="Category Info"
              class="form-style"
              v-model="info"
            />

            <button
              @click="editCategory"
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
    middleware: "auth",
    data() {
      return {
        info: "",
        name: ""
      };
    },
    mounted() {
      this.getCategoryById();
    },
    methods: {
      getCategoryById: function() {
        this.$store
          .dispatch("getCategoryById", this.$route.params.id)
          .then(res => {
            this.name = res.data.name;
            this.info = res.data.info;
          });
      },

      editCategory: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        payload.append("name", this.name);
        payload.append("info", this.info);
        this.$store.dispatch("editCategory", payload).then(res => {
          this.$router.push("/tour_package");
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
</style>
