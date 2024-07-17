export default {
	async load () {
		await storeValue('active','Y')
		await storeValue('editMode','')
		await type_dd.run()
		await sel_Type.setSelectedOption(appsmith.store.prodTypeID)
		await entity_List.run()
		await tbl_Entity.setSelectedRowIndex(-1)
	}
}