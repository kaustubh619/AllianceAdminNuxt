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
              Add Blog
            </h2>

            <label>Blog Title</label>
            <input
              type="text"
              id="name"
              placeholder="Blog Ttile"
              class="form-style"
              v-model="title"
            />

            <label>Blog Thumbnail :-</label>
            <input
              style="margin-bottom: 20px"
              class="form-control"
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
            />

            <label>Blog Content</label>
            <div
              id="editorjs"
              style="border: 1px solid #e9e6e0; border-radius: 4px; background-color: #fff; padding: 20px; padding-left: 30px; margin-bottom: 20px;"
            ></div>

            <button
              @click="addBlog"
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
  let EditorJS, Header, List, Paragraph, Image;

  if (process.browser) {
    EditorJS = require("@editorjs/editorjs");
    Header = require("@editorjs/header");
    List = require("@editorjs/list");
    Paragraph = require("@editorjs/paragraph");
    Image = require("@editorjs/image");
  }
  export default {
    data() {
      return {
        title: "",
        file: ""
      };
    },
    mounted() {
      this.editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: Header,
          list: List,
          image: {
            class: Image,
            config: {
              endpoints: {
                byFile: "http://35.154.220.96/backend/package_images"
              }
            }
          }
        }
      });
    },
    methods: {
      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      addBlog: function() {
        this.editor.save().then(async outputData => {
          var payload = new FormData();
          payload.append("title", this.title);
          if (this.file !== "") {
            payload.append("thumbnail", this.file);
          }
          payload.append("content", JSON.stringify(outputData.blocks));
          const date_added = new Date();
          const day = date_added.getDate();
          const month = date_added.getMonth() + 1;
          const year = date_added.getFullYear();
          const added_dated = year + "-" + month + "-" + day;
          payload.append("added_date", added_dated);
          this.$store.dispatch("addBlog", payload).then(res => {
            this.$router.push("/blog");
          });
        });
      }
    }
  };
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

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