<template>
  <div class="v-top" style="position:fixed;z-index:9999" :style="{bottom:defaultBottom+'px',right:defaultRight+'px'}" v-show="showIcon">
    <i :class="types[defaultType]" :style="{fontSize:defaultSize+'px',color:defaultColor}" @click="goTop()"></i>
  </div>
</template>
<script>
export default {
  props: ['type','top','right','bottom','size','color','duration'],
  data () {
    return {
      showIcon: false,
      scrollTop: 0,
      types: ['iconfont icon-v-totop-0','iconfont icon-v-totop-1','iconfont icon-v-totop-2','iconfont icon-v-totop-3','iconfont icon-v-totop-4','iconfont icon-v-totop-5','iconfont icon-v-totop-6','iconfont icon-v-totop-7','iconfont icon-v-totop-8','iconfont icon-v-totop-9','iconfont icon-v-totop-10','iconfont icon-v-totop-11','iconfont icon-v-totop-12','iconfont icon-v-totop-13','iconfont icon-v-totop-14','iconfont icon-v-totop-15'],
      defaultType: 0,
      defaultTop: 400,
      defaultRight: 30,
      defaultBottom: 30,
      defaultSize: 24,
      defaultColor: '#666',
      defaultDuration: 300
    }
  },
  beforeDestroy () {
    window.removeEventListener("scroll",this.handelScroll, false)
  },
  mounted () {
    this.type ? this.defaultType = this.type: '';
    this.top ?  this.defaultTop = this.top: '';
    this.right ? this.defaultRight = this.right: '';
    this.bottom ? this.defaultBottom = this.bottom: '';
    this.size ? this.defaultSize = this.size: '';
    this.color ? this.defaultColor = this.color: '';
    this.duration ? this.defaultDuration = this.duration: '';
    window.addEventListener('scroll', this.handelScroll, false)
  },
  methods: {
    handelScroll () {
      this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      this.scrollTop > this.defaultTop ? this.showIcon = true : this.showIcon = false
    },
    goTop () {
      window.requestAnimationFrame = (function(){
        return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
      })();
      var step =  this.scrollTop / (this.defaultDuration / ( 1000 / 60)) >> 0;
      var self = this
      function fn(){
        if(self.scrollTop >= 0){
          self.scrollTop -= step;
          document.documentElement.scrollTop = document.body.scrollTop = self.scrollTop;
          fn.rafTimer = requestAnimationFrame(fn);
        }else{
          document.body.scrollTop = 0;
          cancelAnimationFrame(fn.rafTimer);
        }
      }
      fn.rafTimer = requestAnimationFrame(fn)
    }
  }
}
</script>
<style>

  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_928263_1i5c1m9o19x.eot?t=1542792111670'); /* IE9*/
    src: url('//at.alicdn.com/t/font_928263_1i5c1m9o19x.eot?t=1542792111670#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('//at.alicdn.com/t/font_928263_1i5c1m9o19x.ttf?t=1542792111670') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/font_928263_1i5c1m9o19x.svg?t=1542792111670#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    cursor:pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-v-totop-15:before { content: "\e600"; }

  .icon-v-totop-14:before { content: "\e67a"; }

  .icon-v-totop-13:before { content: "\e609"; }

  .icon-v-totop-12:before { content: "\e85d"; }

  .icon-v-totop-11:before { content: "\e6a2"; }

  .icon-v-totop-10:before { content: "\e63a"; }

  .icon-v-totop-9:before { content: "\e649"; }

  .icon-v-totop-8:before { content: "\e64a"; }

  .icon-v-totop-7:before { content: "\e64b"; }

  .icon-v-totop-6:before { content: "\e660"; }

  .icon-v-totop-5:before { content: "\e70b"; }

  .icon-v-totop-4:before { content: "\e633"; }

  .icon-v-totop-3:before { content: "\e612"; }

  .icon-v-totop-2:before { content: "\e616"; }

  .icon-v-totop-1:before { content: "\e619"; }

  .icon-v-totop-0:before { content: "\e658"; }

</style>
