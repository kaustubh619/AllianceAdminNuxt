import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const state = () => ({});

export const mutations = {};

export const getters = {};

export const actions = {
  getCategory({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategory,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  addCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.addCategory,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deleteCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: state.api.edit_delete_category + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getCategoryById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.edit_delete_category + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  editCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.edit_delete_category + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getPackage({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getPackage,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  addPackage({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.addPackage,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getPackageById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.edit_delete_package + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  editPackage({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.edit_delete_package + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deletePackage({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: state.api.edit_delete_package + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getMainCategories({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getMainCategories,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getPackageQuery({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getPackageQuery,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getPackageQueryById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getPackageQueryById + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  checkQuery({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.checkQuery + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getUncheckedQuery({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getUncheckedQuery,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  deleteQuery({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: state.api.getPackageQueryById + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getTheme({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getTheme,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  getCatById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCatById + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  updateTheme({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getCatById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deleteTheme({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: state.api.getCatById + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  postTheme({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.postTheme,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getBlogs({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getBlogs,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  addBlog({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.addBlog,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deleteBlog({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "DELETE",
        url: state.api.deleteBlog + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getBlogById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.deleteBlog + payload,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error in HTTP request - ", err);
        });
    });
  },

  editBlog({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.deleteBlog + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
};
