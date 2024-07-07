export default {
	async load () {
		await storeValue('active','Y')
		await storeValue('editMode','')
		await sel_Type.setSelectedOption(appsmith.store.prodTypeID)
		await sel_prod.setSelectedOption(appsmith.store.prodID)
		await prod_Select.run()
		await entity_List.run()
		await tbl_Entity.setSelectedRowIndex(-1)
		await batch_Last.run()
		await rcpe_List.run()
	}
}