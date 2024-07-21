export default {
	myVar1: [],
	myVar2: {},
	createPages () {
		const pages = new Array(5)
		storeValue('pages',pages)
	},
	async lastPage () {
		let ar = appsmith.store.pages
		ar.unshift('Recipe')
		ar.splice(4)
		storeValue('pages',ar)
		return ar[1]
	},
	goBack () {
		navigateTo(this.lastPage(),{},"SAME WINDOW")
	}
}