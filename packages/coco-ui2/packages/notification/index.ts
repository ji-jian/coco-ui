import CocoNotification from './src/CocoNotification.vue'
import { createNot, mergeOptions } from '../../utils/tips'

const options: object = { time: 3500, position: 'top-right', close: true }

export const Notification: Function = (opts: object): void => {
  return createNot(CocoNotification, mergeOptions(options, opts))
}
