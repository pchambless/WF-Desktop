export default {
	async load () {
		await storeValue('active',1)
		await ingrType_dd.run()
		await sel_Type.setSelectedOption(appsmith.store.ingrTypeID || '') 
		await ingr_dd.run()
		await sel_ingr.setSelectedOption(appsmith.store.ingrID || '') 
		await entity_List.run()
		await entity_Last.run()
	}
}