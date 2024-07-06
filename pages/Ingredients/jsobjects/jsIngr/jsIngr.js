export default {
async select () {
	await storeValue('editMode','Edit')
	await storeValue('ingrID', tbl_Entity.selectedRow.id)
}
}
