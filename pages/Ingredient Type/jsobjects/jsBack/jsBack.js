export default {
	async lastPage () {
		let ar = appsmith.store.pages
		ar.unshift('Ingredient Type')
		ar.splice(4)
		storeValue('pages',ar)
		return ar[1]
	}
}