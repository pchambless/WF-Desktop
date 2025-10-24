export default {
	async load () {
		await storeValue('active',1)
		await storeValue('editMode','')
		await entity_List.run()
		await tbl_Entity.setSelectedRowIndex(-1)
	}
}