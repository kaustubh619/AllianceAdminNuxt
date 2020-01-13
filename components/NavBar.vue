<template>
  <div>
    <div class="padding-top-20">
      <nav class="topnav box-shadow padding-left-10 padding-right-10 row"></nav>
    </div>

    <perfect-scrollbar
      id="mySidenav"
      class="sidenav hidden-xs hidden-sm padding-bottom-30"
    >
      <div class="flex align-item">
        <img src="~static/files/logo.png" class="sideNav__Logo" />
        <div
          style="cursor:pointer"
          class="hide-on-med-and-up"
          @click="toggleSidenav"
        >
          <i data-feather="x"></i>
        </div>
      </div>
      <p style="font-family:bold">Admin Dashboard</p>
      <div class="navbar__parent">
        <nuxt-link to="/theme">
          <i data-feather="align-justify"></i>
          <span>Destination Themes</span>
        </nuxt-link>
      </div>
      <div class="navbar__parent">
        <nuxt-link to="/tour_package">
          <i data-feather="database"></i>
          <span>Tour Packages</span>
        </nuxt-link>
      </div>
      <div class="navbar__parent">
        <nuxt-link to="/package">
          <i data-feather="package"></i>
          <span>Packages</span>
        </nuxt-link>
      </div>
      <div class="navbar__parent">
        <nuxt-link to="/customer_request">
          <i data-feather="message-circle"></i>
          <span>Customer Requests</span>
        </nuxt-link>
      </div>
      <div class="navbar__parent">
        <nuxt-link to="/blog">
          <i data-feather="message-square"></i>
          <span>Blogs</span>
        </nuxt-link>
      </div>
      <p style="cursor: pointer" @click="logOutAdmin" class="logOut">
        Log Out [{{ username }}]
      </p>
    </perfect-scrollbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      active: false,
      currentUserEmail: "",
      pickup_count: 0,
      message_count: 0,
      username: ""
    }),

    computed: {},

    mounted() {
      feather.replace({ color: "white" });

      this.currentUserEmail = localStorage.getItem("currentUserEmail");
      this.username = localStorage.getItem("username");
    },
    methods: {
      toggleSidenav: function() {
        $("#mySidenav").toggleClass("hidden-xs hidden-sm");
      },
      logout: function() {
        document.cookie.split(";").forEach(function(c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        this.$router.push("/");
      },
      logOutAdmin: function() {
        localStorage.clear();
        this.$router.push("/");
      }
    }
  };
</script>

<style scoped>
.navbar__parent {
  padding: 0 15px;
}

.sideNav__Logo {
  width: 85%;
  object-fit: contain;
  height: 80px;
}

p {
  margin: 0;
}

.sidenav {
  height: 100%;
  width: 260px;
  position: fixed;
  z-index: 950;
  top: 0;
  left: 0;
  background-color: #0c1013;
  transition: all 0.5s;
  padding-top: 10px;
  overflow: auto;
}

.sidenav p {
  padding: 32px 8px 17px 30px;
  text-decoration: none;
  font-size: 14px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
}

.sidenav a {
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  font-size: 13px;
  color: rgb(194, 205, 220);
  display: block;
  transition: 0.3s;
  width: 100%;
  display: flex;
  align-items: center;
}

.sidenav span {
  padding-left: 10px;
}

.sidenav a:hover {
  color: #4caf50;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

@media screen and (max-width: 991px) {
  .sidenav {
    transform: translate3d(-260px, 0, 0);
  }
}

.breadcrumb {
  background-color: #0c1013;
}

p {
  margin: 0;
}

.topnav {
  height: 62px;
  background-color: #0c1013;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 10px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  color: red;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}

.notification {
  background-color: #ff9800;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-left: 10px;
  text-align: center;
  padding: 0 !important;
  font-size: 12px;
  color: white;
  line-height: 20px;
  font-weight: bold;
}

.sidenav .nuxt-link-exact-active,
.sidenav .nuxt-link-active {
  color: white !important;
  background-color: rgb(76, 175, 80) !important;
  box-shadow: 0px 6px 19px 0px rgba(76, 175, 80, 0.7) !important;
  border-radius: 4px;
}

svg {
  width: 20px;
}

.logOut:hover {
  color: red;
}
</style>
