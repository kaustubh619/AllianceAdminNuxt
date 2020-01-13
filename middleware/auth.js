export default function (ctx) {
  
    if(!isAuth()) {
      return ctx.redirect('/')
    }
  }
  function isAuth() {
    
    if (localStorage.getItem('token') !== null) {
        return true
    }
    
    else {return false}
    
  }