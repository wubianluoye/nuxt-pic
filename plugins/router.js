export default (app, store)=>{
  app.router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    next()
  })
}