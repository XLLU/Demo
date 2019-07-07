
// 1 Base: 
// const app = new Vue({
// 	el:'#app', 
// 	// state  数据源
// 	data () {
// 		return {
// 		  count: 0
// 		}
// 	},
// 	// view  视图
// 	template: `
// 		<div @click="increment" class="ui button">{{ count }}</div>
// 	`,
// 	// actions  事件
// 	methods: {
// 		increment () {
// 		  this.count++
// 		}
// 	}
// })

// 2 Component
// Vue.component('ui-button', {
// 	template: '<button @click="increment" class="ui button">{{ counter }}</button>', 
// 	data() {
// 		return {
// 			counter: 0
// 		}
// 	},
// 	methods: {
// 		increment() {
// 			this.counter ++
// 			// this.$emit('increment')
// 		}
// 	}
// })
// 
// const app = new Vue({
// 	el:'#app'
// })
