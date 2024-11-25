export default {
	async load () {
		await storeValue('active','Y')
		await storeValue('editMode','')
		await entity_List.run()
		await entity_PDF.run()
		await tbl_Entity.setSelectedRowIndex(-1)
	}
}