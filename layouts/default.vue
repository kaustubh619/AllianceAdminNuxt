<template>
  <div>
    <client-only>
     <NavBar v-if="$nuxt.$route.name != 'index'" />
    <nuxt />
    </client-only>
  </div>
</template>

<script>
// import TopNav from '@/components/TopNav'
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar,
  },
  mounted() {
    // document.body.classList.add('theme-dark')
  }
}
</script>


<style>
a.uppy-Dashboard-poweredBy {
  display: none;
}

@font-face {
font-family: 'Regular';
src: url('~static/files/fonts/Gilroy-Regular.ttf') format('truetype');
font-weight: normal;
font-style: normal;
}

@font-face {
font-family: 'Light';
src: url('~static/files/fonts/Gilroy-Light.ttf') format('truetype');
font-weight: lighter;
font-style: normal;
}

@font-face {
font-family: 'Bold';
src: url('~static/files/fonts/Gilroy-Bold.ttf') format('truetype');
font-weight: bold;
font-style: normal;
}


html {
  font-family: 'Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 13px
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html, body{
    background-color: #f9f9f9
}

table.vgt-table{
  font-size: 13px!important
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

h3{
  font-family: 'bold'
}

.btn{
  font-family: 'Regular'
}

h3 {
    font-size: 24px;
}

.padding-bottom-10{
    padding-bottom: 10px;
}


::-moz-selection { /* Code for Firefox */
  color: #ffffff;
  background: #009688;
}

::selection {
  color: #ffffff;
  background: #009688;
}


.holder {
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px 0px #00000014;
  margin: 0 auto;
  /* max-width: 1280px; */
}

@media only screen and (max-width: 600px) {
.holder {
 padding: 20px 0;
}
.navbar-spacing{
  width: 100%;
}
}

.pointer{
  cursor: pointer;
}

.break{
  border: 0;
    border-bottom: 1px dashed #d4d4d4;
    margin: 45px 0;
}
</style>
