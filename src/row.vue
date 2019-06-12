<template>
    <div class="f-row" :style="style">
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

    }
</style>
