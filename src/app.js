import  Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'
import input from './input'
import col from './col'
import row from './row'

Vue.component('f-button-group', buttonGroup)
Vue.component('f-button', button)
Vue.component('f-icon', icon)
Vue.component('f-input', input)
Vue.component('f-row', row)
Vue.component('f-col', col)

new Vue({
    el:'#app',
    data:{
        loading1: true,
        testMsg:'testMsg'
    },
    methods:{
        say(e){
            console.log('trigger say');
            console.log(e);
            
        }
    }
})