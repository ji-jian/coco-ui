import CocoDialog from './src/CocoDialog.vue'

CocoDialog.install = (app: any) => {
  app.component('CocoDialog', CocoDialog)
}

export default CocoDialog
