<NotificationA />
<coco-button type="primary" @click="open1">展示通知</coco-button>
<NotificationB />
<coco-button type="primary" @click="open2">主要通知</coco-button>
<coco-button type="success" @click="open3">成功通知</coco-button>
<coco-button type="danger" @click="open4">危险通知</coco-button>
<coco-button type="warning" @click="open5">警告通知</coco-button>
<NotificationC />
<coco-button type="primary" @click="open6">上左</coco-button>
<coco-button type="primary" @click="open7">上右</coco-button>
<coco-button type="primary" @click="open8">下左</coco-button>
<coco-button type="primary" @click="open9">下右</coco-button>
<NotificationD />
<coco-button type="primary" @click="open10">4000 毫秒后自动关闭</coco-button>
<NotificationE />

<script setup>
  import NotificationA from './notificationA.md'
  import NotificationB from './notificationB.md'
  import NotificationC from './notificationC.md'
  import NotificationD from './notificationD.md'
  import NotificationE from './notificationE.md'
  import { Notification } from '@icoco/components'
  function open1() {
    Notification({
      title: '提示',
      message: '这里是提示的文案'
    })
  }
  function open2() {
    Notification({
      title: '主要提示',
      message: '这是一个主要提示',
      type: 'primary'
    })
  }
  function open3() {
    Notification({
      title: '成功提示',
      message: '这是一个成功提示',
      type: 'success'
    })
  }
  function open4() {
    Notification({
      title: '危险提示',
      message: '这是一个危险提示',
      type: 'danger'
    })
  }
  function open5() {
    Notification({
      title: '警告提示',
      message: '这是一个警告提示',
      type: 'warning'
    })
  }
  function open6() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-left'
    })
  }
  function open7() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'top-right'
    })
  }
  function open8() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-left'
    })
  }
  function open9() {
    Notification({
      title: '提示',
      message: '这里是提示的文案',
      position: 'bottom-right'
    })
  }
  function open10() {
    Notification({
      title: '提示',
      message: '4000 毫秒后自动关闭',
      time: 4000
    })
  }
</script>
