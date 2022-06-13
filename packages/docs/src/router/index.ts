import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw, Router } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    children: [
      { path: '', component: () => import('@/views/home.vue') },
      { path: '/about', component: () => import('@/views/about.vue') },
      {
        path: '/component',
        redirect: '/component/install',
        component: () => import('@/views/component.vue'),
        children: [
          {
            path: '/component/install',
            component: () => import('@/views/tyhUi/install.vue')
          },
          {
            path: '/component/color',
            component: () => import('@/views/tyhUi/color.vue')
          },
          {
            path: '/component/container',
            component: () => import('@/views/tyhUi/container.vue')
          },
          {
            path: '/component/button',
            component: () => import('@/views/tyhUi/button.vue')
          },
          {
            path: '/component/list',
            component: () => import('@/views/tyhUi/list.vue')
          },
          {
            path: '/component/card',
            component: () => import('@/views/tyhUi/card.vue')
          },
          {
            path: '/component/tag',
            component: () => import('@/views/tyhUi/tag.vue')
          },
          {
            path: '/component/link',
            component: () => import('@/views/tyhUi/link.vue')
          },
          {
            path: '/component/input',
            component: () => import('@/views/tyhUi/input.vue')
          },
          {
            path: '/component/menu',
            component: () => import('@/views/tyhUi/menu.vue')
          },
          {
            path: '/component/division',
            component: () => import('@/views/tyhUi/division.vue')
          },
          {
            path: '/component/icon',
            component: () => import('@/views/tyhUi/icon.vue')
          },
          {
            path: '/component/crumbs',
            component: () => import('@/views/tyhUi/crumbs.vue')
          },
          {
            path: '/component/turnPage',
            component: () => import('@/views/tyhUi/turnPage.vue')
          },
          {
            path: '/component/backTop',
            component: () => import('@/views/tyhUi/backTop.vue')
          },
          {
            path: '/component/message',
            component: () => import('@/views/tyhUi/message.vue')
          },
          {
            path: '/component/skeleton',
            component: () => import('@/views/tyhUi/skeleton.vue')
          },
          {
            path: '/component/alert',
            component: () => import('@/views/tyhUi/alert.vue')
          },
          {
            path: '/component/rate',
            component: () => import('@/views/tyhUi/rate.vue')
          },
          {
            path: '/component/image',
            component: () => import('@/views/tyhUi/image.vue')
          },
          {
            path: '/component/avatar',
            component: () => import('@/views/tyhUi/avatar.vue')
          },
          {
            path: '/component/text',
            component: () => import('@/views/tyhUi/text.vue')
          },
          {
            path: '/component/table',
            component: () => import('@/views/tyhUi/table.vue')
          },
          {
            path: '/component/switch',
            component: () => import('@/views/tyhUi/switch.vue')
          },
          {
            path: '/component/calendar',
            component: () => import('@/views/tyhUi/calendar.vue')
          },
          {
            path: '/component/radio',
            component: () => import('@/views/tyhUi/radio.vue')
          },
          {
            path: '/component/tree',
            component: () => import('@/views/tyhUi/tree.vue')
          },
          {
            path: '/component/pageHeader',
            component: () => import('@/views/tyhUi/pageHeader.vue')
          },
          {
            path: '/component/info',
            component: () => import('@/views/tyhUi/info.vue')
          },
          {
            path: '/component/textarea',
            component: () => import('@/views/tyhUi/textarea.vue')
          },
          {
            path: '/component/select',
            component: () => import('@/views/tyhUi/select.vue')
          },
          {
            path: '/component/tagging',
            component: () => import('@/views/tyhUi/tagging.vue')
          },
          {
            path: '/component/notification',
            component: () => import('@/views/tyhUi/notification.vue')
          },
          {
            path: '/component/drawer',
            component: () => import('@/views/tyhUi/drawer.vue')
          },
          {
            path: '/component/dialog',
            component: () => import('@/views/tyhUi/dialog.vue')
          }
        ]
      }
    ]
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
} as const)

export default router
