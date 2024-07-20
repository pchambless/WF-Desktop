export default {
	async selectEntity () {
		await storeValue("editMode","Edit")
		await storeValue('prodID',tbl_Entity.selectedRow.id)
		await entity_Batches.run()
	},
}