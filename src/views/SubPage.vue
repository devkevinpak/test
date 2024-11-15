<template>
  <div>
    <h1 class="mb32">SubPage</h1>
    <div class="row">
      <div class="col col_3">
        <div v-for="i in 30" :key="i">
          <div class="image_no">{{ i }}</div>
          <img :src="getImageSrcNight1(i)" class="iconcc"/>
        </div>
      </div>
      <div class="col col_3">
        <div v-for="i in 30" :key="i">
          <div class="image_no">{{ i }}</div>
          <img :src="getImageSrcNight2(i)" class="iconcc"/>
        </div>
      </div>
      <div class="col col_3">
        <div v-for="i in 30" :key="i">
          <div class="image_no">{{ i }}</div>
          <img :src="getImageSrcDay1(i)" class="iconcc"/>
        </div>
      </div>
      <div class="col col_3">
        <div v-for="i in 30" :key="i">
          <div class="image_no">{{ i }}</div>
          <img :src="getImageSrcDay2(i)" class="iconcc"/>
        </div>
      </div>
    </div>

    <div class="">SubPage</div>
  </div>
</template>
<script>
export default {
  name: "SubPage",
  components: {
  },
  computed: {

  },
  methods: {
    getImageSrcNight1(i) {
      if (i > 9) {
        return require(`../imgs/weather_icon/${i}.svg`);
      } else {
        return require(`../imgs/weather_icon/0${i}.svg`);
      }
    },
    getImageSrcNight2(i) {
      if (i > 9) {
        return require(`../imgs/weather_icon2/${i}.svg`);
      } else {
        return require(`../imgs/weather_icon2/0${i}.svg`);
      }
    },
    getImageSrcDay1(i) {
      if (i > 9) {
        return require(`../imgs/weather_icon/daymode/${i}.svg`);
      } else {
        return require(`../imgs/weather_icon/daymode/0${i}.svg`);
      }
    },
    getImageSrcDay2(i) {
      if (i > 9) {
        return require(`../imgs/weather_icon2/daymode/${i}.svg`);
      } else {
        return require(`../imgs/weather_icon2/daymode/0${i}.svg`);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.image_no {
  font-size: 20px;
}
.iconcc {
  height: 100px;
  width: auto;
}
</style>
