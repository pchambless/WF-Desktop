export default {
	async load () {
		await storeValue('active','Y')
		sel_Type.setSelectedOption(appsmith.store.ingrTypeID)
		entity_List.run()
	}
}