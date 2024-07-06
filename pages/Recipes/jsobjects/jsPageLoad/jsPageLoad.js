export default {
	async load () {
		await storeValue('active','Y')
		await storeValue('editMode','')
		await prodType_dd.run()
		await sel_Type.setSelectedOption(appsmith.store.prodTypeID)
		await prod_dd.run()
		await sel_prod.setSelectedOption(appsmith.store.prodID)
		await entity_List.run()
	}
}