<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div class="column-padding header-bottom" style="">
          <h3 style="display: flex;align-items: center;">Customer Request:</h3>
          <h4>Name: {{ name }}</h4>
          <h4>Email: {{ email }}</h4>
          <h4>Phone: {{ phone }}</h4>
          <h4>Message: {{ message }}</h4>
          <h4>Package: {{ package }}</h4>
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
        email: "",
        phone: "",
        message: "",
        package: ""
      };
    },
    mounted() {
      this.getPackageQueryById();
    },
    methods: {
      getPackageQueryById: function() {
        this.$store
          .dispatch("getPackageQueryById", this.$route.params.id)
          .then(res => {
            this.name = res.data.name;
            this.email = res.data.email;
            this.phone = res.data.phone;
            this.message = res.data.message;
            if (res.data.package !== null) {
              this.package = res.data.package.name;
            } else {
              this.package = "None";
            }
          });
      }
    }
  };
</script>

<style>
h4 {
  margin: 10px;
  font-weight: 400;
  font-size: 16px;
}
</style>