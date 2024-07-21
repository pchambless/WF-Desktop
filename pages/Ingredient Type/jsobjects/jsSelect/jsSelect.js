export default {
	async selectEntity () {
		await storeValue('editMode','Edit')
		jsEntity.editMode()
		await storeValue('ingrTypeID', tbl_Entity.selectedRow.id)
	}
}