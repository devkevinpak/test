<template>
  <div>
    <h1>TMOBI SCREEN SIZE</h1>
    <div class="range_frame">
      <div class="range_frame_bg">
        <div class="point"></div>
      </div>
      <div
        v-for="(device, index) in screenSize"
        :key="index"

        class="device_range_tranck"
      >
        <div
          :style="{'width': device.maxWidth - device.minWidth + 'px', 'transform' : 'translateX('+ device.minWidth +'px)'}"
          class="device_range"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AgreementPage",
  data() {
    return {
      screenSize: {
        aurora: { minWidth: 1800, maxWidth: 2000, minHeight: 656, maxHeight: 740 }, // 1800 x 656
        ecarx: { minWidth: 2192, maxWidth: 2200, minHeight: 1168, maxHeight: 1375 }, // 2192 x 1168, GUI: 2195 x 1372, 내부타겟사이즈 2195 x 1170 // ecarx 스크린이 몇가지있는듯??
        ecarxP: { minWidth: 1024, maxWidth: 1152, minHeight: 1067, maxHeight: 1200 }, // 1152 x 1200 - *0.8888
        icup1Volvo: { minWidth: 878, maxWidth: 890, minHeight: 1008, maxHeight: 1020 }, // 768 x 882 - *1.143
        icup1Polstar: { minWidth: 1024, maxWidth: 1040, minHeight: 1052, maxHeight: 1066 }, // 1152 x 1183 - *0.8888
        icup2Volvo: { minWidth: 1280, maxWidth: 1300, minHeight: 1464, maxHeight: 1487 }, // 1280 x 1464
        icup2Polstar: { minWidth: 1280, maxWidth: 1300, minHeight: 1488, maxHeight: 1500 } // 1280 x 1488
      }
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss">
.range_frame {
  position: relative;
  .range_frame_bg {
    position: absolute;
    inset: 0;
  }
}
.device_range_tranck {
  width: 2500px;
  background-color: rgba(0,0,0,.2);
  margin-bottom: 10px;
  .device_range {
    height: 10px;
    background-color: red;
  }
}
.test_button_area {
  position: fixed;
  width: 300px;
  height: 300px;
  background-color: rgba(255,0,0,.4);
}
</style>