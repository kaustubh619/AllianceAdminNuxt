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
              Add Package
            </h2>
            <label>Theme</label>
            <select id="main-category" class="form-style">
              <option value="0">Select Theme</option>
            </select>
            <label>Tour Package</label>
            <select id="category" class="form-style">
              <option value="0">Select Tour Package</option>
            </select>
            <label>Package Name</label>
            <input
              type="text"
              id="name"
              placeholder="Package Name"
              class="form-style"
              v-model="name"
            />
            <label>Package Cost</label>
            <input
              type="number"
              id="price"
              placeholder="Package Cost"
              class="form-style"
              v-model="price"
            />
            <label>Package Duration</label>
            <input
              type="number"
              id="duration"
              placeholder="Package Duration"
              class="form-style"
              v-model="duration"
            />
            <label>Package City Routes</label>
            <input
              type="text"
              id="city_routes"
              placeholder="Package City Routes"
              class="form-style"
              v-model="city_routes"
            />
            <label>Package Itinerary</label>
            <div
              id="itinerary"
              style="border: 1px solid #e9e6e0; border-radius: 4px; background-color: #fff; padding: 20px; padding-left: 30px; margin-bottom: 20px;"
            ></div>
            <label>Package Inclusion</label>
            <div
              id="inclusion"
              style="border: 1px solid #e9e6e0; border-radius: 4px; background-color: #fff; padding: 20px; padding-left: 30px; margin-bottom: 20px;"
            ></div>
            <label>Package Exclusion</label>
            <div
              id="exclusion"
              style="border: 1px solid #e9e6e0; border-radius: 4px; background-color: #fff; padding: 20px; padding-left: 30px; margin-bottom: 20px;"
            ></div>
            <label>Package Policy and terms</label>
            <div
              id="policy"
              style="border: 1px solid #e9e6e0; border-radius: 4px; background-color: #fff; padding: 20px; padding-left: 30px; margin-bottom: 20px"
            ></div>
            <div id="image-uploader">
              <label for="images">Images</label>
              <span id="drag-drop-area"></span>
            </div>

            <button
              @click="addPackage"
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
  let EditorJS, Header, List, Paragraph;

  if (process.browser) {
    EditorJS = require("@editorjs/editorjs");
    Header = require("@editorjs/header");
    List = require("@editorjs/list");
    Paragraph = require("@editorjs/paragraph");
  }
  export default {
    middleware: "auth",
    data() {
      return {
        name: "",
        price: "",
        duration: "",
        city_routes: "",
        images: []
      };
    },
    mounted() {
      this.getCategory();
      this.getMainCategories();
      this.editor_itinerary = new EditorJS({
        holder: "itinerary",
        tools: {
          header: Header,
          list: List,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          }
        }
      });
      this.editor_inclusion = new EditorJS({
        holder: "inclusion",
        tools: {
          header: Header,
          list: List,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          }
        }
      });
      this.editor_exclusion = new EditorJS({
        holder: "exclusion",
        tools: {
          header: Header,
          list: List,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          }
        }
      });
      this.editor_policy = new EditorJS({
        holder: "policy",
        tools: {
          header: Header,
          list: List,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          }
        }
      });
      var uppy = Uppy.Core()
        .use(Uppy.Dashboard, {
          inline: true,
          target: "#drag-drop-area",
          width: 680,
          height: 300
        })
        .use(Uppy.XHRUpload, {
          endpoint: "http://127.0.0.1:8000/package_images"
        });

      uppy.on("complete", result => {
        result.successful.map(item => {
          this.images.push(
            "http://127.0.0.1:8000/media/uppy_images/" + item.name
          );
        });
      });
    },
    methods: {
      getCategory: function() {
        this.$store.dispatch("getCategory").then(res => {
          var select = document.getElementById("category");
          const categoryObj = {};

          res.data.map(item => {
            categoryObj[item.id] = { name: item.name };
          });

          for (this.i in categoryObj) {
            select.options[select.options.length] = new Option(
              categoryObj[this.i].name,
              this.i
            );
          }
        });
      },
      getMainCategories: function() {
        this.$store.dispatch("getMainCategories").then(res => {
          var select = document.getElementById("main-category");
          const categoryObj = {};

          res.data.map(item => {
            categoryObj[item.id] = { name: item.name };
          });

          for (this.i in categoryObj) {
            select.options[select.options.length] = new Option(
              categoryObj[this.i].name,
              this.i
            );
          }
        });
      },
      addPackage: function() {
        this.editor_itinerary.save().then(async itinerary => {
          this.editor_inclusion.save().then(async inclusion => {
            this.editor_exclusion.save().then(async exclusion => {
              this.editor_policy.save().then(async policy => {
                var payload = new FormData();
                payload.append("category", $("#main-category").val());
                payload.append("tour_package", $("#category").val());
                payload.append("name", this.name);
                payload.append("price", this.price);
                payload.append("duration", this.duration);
                payload.append("package_city_routes", this.city_routes);
                payload.append("itinerary", JSON.stringify(itinerary.blocks));
                payload.append("inclusion", JSON.stringify(inclusion.blocks));
                payload.append("exclusion", JSON.stringify(exclusion.blocks));
                payload.append("policy_and_terms", JSON.stringify(policy.blocks));
                payload.append("images", this.images);
                this.$store.dispatch("addPackage", payload).then(res => {
                  this.$router.push("/package");
                });
              });
            });
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
