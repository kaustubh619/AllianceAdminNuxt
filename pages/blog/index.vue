<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">Blogs</h3>
          <nuxt-link to="/blog/add" style="text-decoration:none">
            <button class="btn btn-red addCategory">
              <span class="white-text">Add Blog</span>
            </button>
          </nuxt-link>
        </div>

        <div class="row">
          <vue-good-table :columns="columns" :rows="blogs">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'details'">
                <nuxt-link
                  :to="{
                    name: 'blog-id',
                    params: { id: props.row.id }
                  }"
                  class="btn detail"
                  >Edit</nuxt-link
                >
                <button
                  type="button"
                  class="btn btn-primary delete"
                  @click="deleteBlog(props.row.id)"
                >
                  Delete
                </button>
              </span>
              <span v-else>{{ props.formattedRow[props.column.field] }}</span>
            </template>
          </vue-good-table>
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
        columns: [
          {
            label: "Blog Title",
            field: "title"
          },
          {
            label: "Added Date",
            field: "added_date"
          },
          {
            label: "Action",
            field: "details"
          }
        ],
        blogs: []
      };
    },
    mounted() {
      this.getBlogs();
    },
    methods: {
      getBlogs: function() {
        this.$store.dispatch("getBlogs").then(res => {
          this.blogs = JSON.parse(JSON.stringify(res.data.reverse()));
        });
      },

      deleteBlog: function(id) {
        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteBlog", id).then(res => {
            this.getBlogs();
          });
        else return false;
      }
    }
  };
</script>

<style>
.addCatetgory {
  background-color: rgb(76, 175, 80);
  align-items: center;
  display: flex;
}

.addCategory:hover {
  background-color: #008000;
}

.detail {
  background-color: #1db6e0;
  color: white;
  height: auto;
  padding: 3px 12px;
  text-decoration: none;
  margin-bottom: 5px;
}

.detail:hover {
  background-color: #1d9ec2;
}

.delete {
  background-color: #e3364d;
  color: white;
  height: auto;
  padding: 3px 12px;
  margin-right: 10px;
  margin-bottom: 5px;
}

.delete:hover {
  background-color: #c00000;
}
</style>

