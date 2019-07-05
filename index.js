Vue.component('ui-button', {
	template: '<button @click="increment" class="ui button">{{ counter }}</button>', 
	data() {
		return {
			counter: 0
		}
	},
	methods: {
		increment() {
			this.counter ++,
			this.$emit('increment')
		}
	}
})

var dataSource = {
	total: 0
}

// var uiButton = {
// 	template: '<button class="ui button">button</button>'
// }


var app = new Vue({
	el: '#app',
	methods: {
		logMessage () {
			console.log(this.message)
		},
		incrementTotal() {
			this.total ++
		}
	}, 
	data: dataSource
	// data: {
	// 	message: 'hello',
	// 	title: 'title',
	// 	welcome: true,
	// 	items: [
	// 		{text: 'demo1'},
	// 		{text: 'demo2'},
	// 		{text: 'demo3'},
	// 		{text: 'demo4'},
	// 	]
	// },
	// components: {
	// 	'ui-button': uiButton
	// }
})