<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">Tour Package</h3>
          <nuxt-link to="/tour_package/add" style="text-decoration:none">
            <button class="btn btn-red addCategory">
              <span class="white-text">Add Tour Package</span>
            </button>
          </nuxt-link>
        </div>

        <div class="row">
          <vue-good-table :columns="columns" :rows="category">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'details'">
                <nuxt-link
                  :to="{
                    name: 'tour_package-id',
                    params: { id: props.row.id }
                  }"
                  class="btn detail"
                  >Edit</nuxt-link
                >
                <button
                  type="button"
                  class="btn btn-primary delete"
                  @click="deleteCategory(props.row.id)"
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
            label: "Name",
            field: "name"
          },

          {
            label: "Action",
            field: "details"
          }
        ],
        category: []
      };
    },
    mounted() {
      this.getCategory();
    },
    methods: {
      getCategory: function() {
        this.$store.dispatch("getCategory").then(res => {
          this.category = JSON.parse(JSON.stringify(res.data.reverse()));
        });
      },

      deleteCategory: function(id) {
        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteCategory", id).then(res => {
            this.getCategory();
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

