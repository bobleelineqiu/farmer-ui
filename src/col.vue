<template>
    <div class="f-col" :class="[span && `f-col-${span}`,
     offset && `offset-${offset}`,
     pull && `pull-${pull}`,
     push && `push-${push}`
     ] " :style="style">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'f-col',
    props:{
      span:{
          type:[ Number, String]
      },
      offset:{
          type:[ Number, String]
      },
      pull:{
          type:[ Number, String]
      },
      push:{
          type:[ Number, String]
      }
    },
    data(){
        return {
            gutter:this.$parent.gutter
        }
    },
    computed:{
      style(){
        let ret = {}
        if(this.gutter){
          ret.paddingLeft = `${gutter/2}px`
          ret.paddingRight = ret.paddingLeft
        }
        return ret
      }
    }
}
</script>
<style lang="scss" scoped>
    .f-col{
        height: 40px;
        width: 50%;
        padding: 0 10px;
    }
    .f-col-1, .f-col-2, .f-col-3, .f-col-4, .f-col-5, .f-col-6, .f-col-7, .f-col-8, .f-col-9, .f-col-10, .f-col-11, .f-col-12, .f-col-13, .f-col-14, .f-col-15, .f-col-16, .f-col-17, .f-col-18, .f-col-19, .f-col-20, .f-col-21, .f-col-22, .f-col-23, .f-col-24 {
  float: left;
}
@for $i from 1 to 24 {
  .f-col-#{$i} {
    width: 1 / 24 * $i * 100%;
  }
  .offset-#{$i} {
    margin-left:1 / 24 * $i * 100%;
  }
  .pull-#{$i} {
    position: relative;
    right: 1 / 24 * $i * 100%;
  }
  .push-#{$i} {
    position: relative;
    left: 1 / 24 * $i * 100%;
  }
}
</style>
