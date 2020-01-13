<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">Destination Themes</h3>

          <nuxt-link to="/theme/add" style="text-decoration:none">
            <button class="btn btn-red addCategory">
              <span class="white-text">Add Theme</span>
            </button>
          </nuxt-link>
        </div>
        <div class="row">
          <vue-good-table :columns="columns" :rows="theme">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'details'">
                <nuxt-link
                  :to="{
                    name: 'theme-id',
                    params: { id: props.row.id }
                  }"
                  class="btn detail"
                  >Edit</nuxt-link
                >
                <button
                  type="button"
                  class="btn btn-primary delete"
                  @click="deleteTheme(props.row.id)"
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
            label: "Theme",
            field: "name"
          },
          {
            label: "Action",
            field: "details"
          }
        ],
        theme: []
      };
    },
    mounted() {
      this.getTheme();
    },
    methods: {
      getTheme: function() {
        this.$store.dispatch("getTheme").then(res => {
          this.theme = JSON.parse(JSON.stringify(res.data.reverse()));
        });
      },

      deleteTheme: function(id) {
        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteTheme", id).then(res => {
            this.getTheme();
          });
        else return false;
      }
    }
  };
</script>

<style>
</style>