var url;

if (process.env.NODE_ENV == "development") {
  var url = "http://127.0.0.1:8000";
} else {
  var url = "/backend";
}

export const state = () => ({
  login: url + "/admin_login",

  getCategory: url + "/category",

  addCategory: url + "/category_post",

  edit_delete_category: url + "/categorybyid/",

  getPackage: url + "/package",

  addPackage: url + "/package_post",

  edit_delete_package: url + "/packagebyid/",

  getMainCategories: url + "/main_categories",

  getPackageQuery: url + "/package_query_postwd",

  getPackageQueryById: url + "/query_by_id/",

  checkQuery: url + "/query_checked_by_id/",

  getUncheckedQuery: url + "/unchecked_query",

  getTheme: url + "/main_categories",

  getCatById: url + "/cat_by_id/",

  postTheme: url + "/theme_post",

  getBlogs: url + "/blog_view",

  addBlog: url + "/blog_post",

  deleteBlog: url + "/blog/"
});

export const getters = {};
