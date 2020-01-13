<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">Package Query</h3>
          <!-- <nuxt-link to="" style="text-decoration:none"> -->
          <!-- <button
            @click="getAllQuery"
            class="btn btn-red addCategory"
            style="width: 80px; margin-left: auto; margin-right: 10px"
          >
            <span class="white-text">All</span>
          </button> -->
          <button
            class="btn btn-red addCategory"
            style="width: 80px"
            @click="getUncheckedQuery"
          >
            <span class="white-text">Unread</span>
          </button>
          <!-- </nuxt-link> -->
        </div>
        <!-- v-on:change="getId(props.row.id)" -->
        <div class="row">
          <vue-good-table :columns="columns" :rows="package_query">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'status'">
                <input type="checkbox" name="status" v-bind:id="props.row.id" />
              </span>
              <span v-if="props.column.field === 'details'">
                <button
                  type="button"
                  class="btn btn-primary delete cst "
                  @click="checkQuery(props.row.id)"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-primary delete"
                  @click="deleteQuery(props.row.id)"
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
          // {
          //   label: "Read/Unread",
          //   field: "status"
          // },
          {
            label: "Customer Name",
            field: "name"
          },
          {
            label: "Package",
            field: "package.name"
          },
          {
            label: "Action",
            field: "details"
          }
        ],
        package_query: [],
        activatedId: ""
      };
    },
    mounted() {
      this.getPackageQuery();
      this.$store.dispatch("getPackageQuery").then(res => {
        res.data.map(item => {
          if (item.read == true) {
            $("#" + item.id).attr("checked", true);
          }
        });
      });
    },
    methods: {
      getPackageQuery: function() {
        this.$store.dispatch("getPackageQuery").then(res => {
          this.package_query = JSON.parse(JSON.stringify(res.data.reverse()));
          res.data.map(item => {
            if (item.read == true) {
              $("#" + item.id).attr("checked", true);
            }
          });
        });
      },

      getUncheckedQuery: function() {
        this.$store.dispatch("getUncheckedQuery").then(res => {
          this.package_query = JSON.parse(JSON.stringify(res.data.reverse()));
        });
      },

      checkQuery: function(id) {
        var payload = new FormData();
        payload.append("id", id);
        payload.append("read", true);
        this.$store.dispatch("checkQuery", payload);
        this.$router.push("/customer_request/" + id);
      },

      deleteQuery: function(id) {
        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteQuery", id).then(res => {
            this.getPackageQuery();
          });
        else return false;
      }
    }
  };
</script>

<style>
.cst {
  background-color: #ffce10 !important;
  color: black !important;
}

.cst:hover {
  background-color: #f7a818 !important;
  color: white !important;
}
</style>