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
            component: () => import('@/views/cocoUi/install.vue')
          },
          {
            path: '/component/color',
            component: () => import('@/views/cocoUi/color.vue')
          },
          {
            path: '/component/container',
            component: () => import('@/views/cocoUi/container.vue')
          },
          {
            path: '/component/button',
            component: () => import('@/views/cocoUi/button.vue')
          },
          {
            path: '/component/list',
            component: () => import('@/views/cocoUi/list.vue')
          },
          {
            path: '/component/card',
            component: () => import('@/views/cocoUi/card.vue')
          },
          {
            path: '/component/tag',
            component: () => import('@/views/cocoUi/tag.vue')
          },
          {
            path: '/component/link',
            component: () => import('@/views/cocoUi/link.vue')
          },
          {
            path: '/component/input',
            component: () => import('@/views/cocoUi/input.vue')
          },
          {
            path: '/component/menu',
            component: () => import('@/views/cocoUi/menu.vue')
          },
          {
            path: '/component/division',
            component: () => import('@/views/cocoUi/division.vue')
          },
          {
            path: '/component/icon',
            component: () => import('@/views/cocoUi/icon.vue')
          },
          {
            path: '/component/crumbs',
            component: () => import('@/views/cocoUi/crumbs.vue')
          },
          {
            path: '/component/turnPage',
            component: () => import('@/views/cocoUi/turnPage.vue')
          },
          {
            path: '/component/backTop',
            component: () => import('@/views/cocoUi/backTop.vue')
          },
          {
            path: '/component/message',
            component: () => import('@/views/cocoUi/message.vue')
          },
          {
            path: '/component/skeleton',
            component: () => import('@/views/cocoUi/skeleton.vue')
          },
          {
            path: '/component/alert',
            component: () => import('@/views/cocoUi/alert.vue')
          },
          {
            path: '/component/rate',
            component: () => import('@/views/cocoUi/rate.vue')
          },
          {
            path: '/component/image',
            component: () => import('@/views/cocoUi/image.vue')
          },
          {
            path: '/component/avatar',
            component: () => import('@/views/cocoUi/avatar.vue')
          },
          {
            path: '/component/text',
            component: () => import('@/views/cocoUi/text.vue')
          },
          {
            path: '/component/table',
            component: () => import('@/views/cocoUi/table.vue')
          },
          {
            path: '/component/switch',
            component: () => import('@/views/cocoUi/switch.vue')
          },
          {
            path: '/component/calendar',
            component: () => import('@/views/cocoUi/calendar.vue')
          },
          {
            path: '/component/radio',
            component: () => import('@/views/cocoUi/radio.vue')
          },
          {
            path: '/component/tree',
            component: () => import('@/views/cocoUi/tree.vue')
          },
          {
            path: '/component/pageHeader',
            component: () => import('@/views/cocoUi/pageHeader.vue')
          },
          {
            path: '/component/info',
            component: () => import('@/views/cocoUi/info.vue')
          },
          {
            path: '/component/textarea',
            component: () => import('@/views/cocoUi/textarea.vue')
          },
          {
            path: '/component/select',
            component: () => import('@/views/cocoUi/select.vue')
          },
          {
            path: '/component/tagging',
            component: () => import('@/views/cocoUi/tagging.vue')
          },
          {
            path: '/component/notification',
            component: () => import('@/views/cocoUi/notification.vue')
          },
          {
            path: '/component/drawer',
            component: () => import('@/views/cocoUi/drawer.vue')
          },
          {
            path: '/component/dialog',
            component: () => import('@/views/cocoUi/dialog.vue')
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
