export default {
	async load () {
		await storeValue('active','Y')
		await ingrType_dd.run()
		await sel_Type.setSelectedOption(appsmith.store.ingrTypeID)
		await ingr_dd.run()
		await sel_ingr.setSelectedOption(appsmith.store.ingrID)
		await jsBatch.batchList()
		await entity_Last.run()
	}
}