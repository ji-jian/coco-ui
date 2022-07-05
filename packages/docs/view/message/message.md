<messageA />
<coco-button @click="change1">默认提示</coco-button>
<coco-button type="primary" @click="change2">主要提示</coco-button>
<coco-button type="success" @click="change3">成功提示</coco-button>
<coco-button type="danger" @click="change4">危险提示</coco-button>
<coco-button type="warning" @click="change5">警告提示</coco-button>
<MessageB />
<coco-button type="primary" @click="change6">展示5000毫秒</coco-button>
<MessageC />
<coco-button type="primary" @click="change7">点击提示</coco-button>
<MessageD />
<coco-button type="primary" @click="change8">点击提示</coco-button>
<MessageE />

<script setup>
  import MessageA from './messageA.md'
  import MessageB from './messageB.md'
  import MessageC from './messageC.md'
  import MessageD from './messageD.md'
  import MessageE from './messageE.md'
  import { Message } from '@cocoui/components'
  function change1() {
    Message({ message: '默认提示', type: 'default', round: true })
  }
  function change2() {
    Message({ message: '主要提示', type: 'primary', round: true })
  }
  function change3() {
    Message({ message: '成功提示', type: 'success', round: true })
  }
  function change4() {
    Message({ message: '危险提示', type: 'danger', round: true })
  }
  function change5() {
    Message({ message: '警告提示', type: 'warning', round: true })
  }
  function change6() {
    Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
  }
  function change7() {
    Message({ message: '主要提示', type: 'primary', icon: 'coco-ui-smile' })
  }
  function change8() {
    Message({
      message: '主要提示',
      type: 'primary',
      icon: 'coco-ui-smile',
      showClose: true
    })
  }
</script>
