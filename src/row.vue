<template>
    <div class="f-row" :style="style" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'f-row',
    props: {
        gutter: {
            type: [Number, String],
            default: 20
        },
        align:{
            validator:function(val){
                return ['center','left','right'].includes(val)
            }
        }
    },
    computed: {
        style(){
             var ret = {};
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret;
        },
        rowClass(){
            let {align} = this
            return align && `align-${align}`
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
    .f-row{
        height: 40px;
        position: relative;
    box-sizing: border-box;
        &.align-left {
          text-align: left
        }
        &.align-right {
          text-align: right;
        }
        &.align-center {
          text-align: center;
        }
    }
</style>
