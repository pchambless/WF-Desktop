export default {
	async load () {
		await storeValue('active','Y')
		sel_Type.setSelectedOption(appsmith.store.ingrTypeID)
		entity_List.run()
	},
	async storePage () {
		await storeValue('last',appsmith.store.current)  // This should be the last page visited.
		await storeValue('current','Ingredient')		
	}
}