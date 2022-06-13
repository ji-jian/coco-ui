import CocoContainer from './src/CocoContainer.vue'

CocoContainer.install = (app: any) => {
  app.component('CocoContainer', CocoContainer)
}

export default CocoContainer
