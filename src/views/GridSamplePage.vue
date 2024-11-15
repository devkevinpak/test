<template>
  <div>
    <h1 class="mb32">SamplePage</h1>
    <div class="sample_outer">
      <div class="box box1 s_header">
        header
      </div>
      <div>tab</div>
      <div class="box s_tab mt8">
        <div class="row row_gap_8">
          <div class="col col_1"><div class="cont_inner_top box box3">여백</div></div>
          <div class="col col_10">
            <div class="row row_gap_8">
              <div class="col col_4"><div class="cont_inner_top box box4">tab_menu</div></div>
              <div class="col col_4"><div class="cont_inner_top box box4">tab_menu</div></div>
              <div class="col col_4"><div class="cont_inner_top box box4">tab_menu</div></div>
            </div>
          </div>
          <div class="col col_1"><div class="cont_inner_top box box3">여백</div></div>
        </div>

      </div>
      <div class="s_content mt8">
        <div>banner</div>
        <div class="row row_gap_8 row_mb_8">
          <div class="col col_sm_6 col_md_4 col_lg_4 col_xl_4"><div class="cont_inner_top box box4">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_4 col_xl_4"><div class="cont_inner_top box box4">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_4 col_xl_4"><div class="cont_inner_top box box4">sample_box</div></div>
        </div>
        <div>app lists</div>
        <div class="row row_gap_8 row_mb_8">
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>

          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
          <div class="col col_sm_6 col_md_4 col_lg_3 col_xl_2"><div class="cont_inner_top box box6">sample_box</div></div>
        </div>
      </div>
      <div class="s_content ">
        <div class="row row_gap_8">
          <div class="col sm_hidden col_md_3 col_lg_3 col_xl_3">
            <div class="box box2">
              <ScrollComponent :height="315" :padding="8">
                <menuList />
              </ScrollComponent>
            </div>
          </div>
          <div class="col col_sm_12 col_md_9 col_lg_9 col_xl_9">
            <div class="cont_inner_top box box3">
              content > top
            </div>
            <div class="cont_inner_middle mt8">
              <div class="row row_gap_8">
                <div class="col col_8 col_sm_12">
                  <div class="box box4">
                    content > middle > left
                  </div>
                </div>
                <div class="col col_4 col_sm_12">
                  <div class="box box5">
                    content > middle > right
                  </div>
                </div>
              </div>
            </div>
            <div class="box box6 cont_inner_bottom mt8">
              content > bottom
            </div>
          </div>
        </div>
      </div>
      <div class="s_footer mt8">
        <div class="row row_gap_8">
          <div class="col col_6">
            <div class="box box7">
              footer > left
            </div>
          </div>
          <div class="col col_6">
            <div class="box box8">
              footer > right
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ScrollComponent } from '@/components/scroll'
import { MenuList } from '@/components/sample'

export default {
  name: "SamplePage",
  components: {
    ScrollComponent,
    MenuList
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
.box {
  width:100%;
  min-height:100px;
  padding: 8px;
  color: #fff;
  border:1px solid #fff;

  &.box1 {
    background-color: #000;
  }
  &.box2 {
    padding: 0 8px;
    background-color: #111;
  }
  &.box3 {
    background-color: #222;
  }
  &.box4 {
    background-color: #333;
  }
  &.box5 {
    background-color: #444;
  }
  &.box6 {
    background-color: #555;
  }
  &.box7 {
    background-color: #666;
  }
  &.box8 {
    background-color: #777;
  }
}
.scroll_box {
  color: #fff;
  background-color: #111;
}

</style>