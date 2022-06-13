import CocoAlert from './src/CocoAlert.vue'

CocoAlert.install = (app: any) => {
  app.component('CocoAlert', CocoAlert)
}

export default CocoAlert
