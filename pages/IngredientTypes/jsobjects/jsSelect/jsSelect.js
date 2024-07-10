export default {
	async selectEntity () {
		await storeValue('editMode','Edit')
		await storeValue('ingrTypeID', tbl_Entity.selectedRow.id)
	}
}