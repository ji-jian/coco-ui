<AvatarA />
<div class="fitBox">
  <div class="item" v-for="fit in fits" :key="fit">
    <span class="text">{{ fit }}</span>
    <coco-avatar
      round
      src="https://tianyuhao.cn/images/coco-ui/giraffe.jpg"
      :fit="fit"
    />
  </div>
</div>
<AvatarB />

<script setup>
  import AvatarA from './avatarA.md'
  import AvatarB from './avatarB.md'
  const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
