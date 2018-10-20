export const routes = [
  {
    path: '/',
    name: 'index',
    component(resolve) {
      require(['./pages/index.vue'], resolve);
    }
  }
]

export const mapRoutes = () => {
  const mappedRoutes = []

  routes.forEach(route => {
    if (!route.redirect && route.path !== '*') {
      mappedRoutes.push(route.path.replace('/:optional?/:sub?', ''))
    }
  })

  return mappedRoutes
}
