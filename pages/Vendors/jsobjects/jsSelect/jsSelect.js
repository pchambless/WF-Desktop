export default {
	async selectEntity () {
		await storeValue('editMode','Edit')
		await storeValue('vndrID', tbl_Entity.selectedRow.id)
	}
}