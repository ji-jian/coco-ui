import CocoMessage from './src/CocoMessage.vue'
import { createNot, mergeOptions } from '../../utils/tips'

const options: object = { time: 2000, offset: 20 }

export const Message: Function = (opts: object): void => {
  return createNot(CocoMessage, mergeOptions(options, opts))
}
