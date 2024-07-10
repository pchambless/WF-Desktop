export default {
	async selectEntity () {
		await storeValue("editMode","Edit")
		await storeValue('prodTypeID',tbl_Entity.selectedRow.id)
		await prod_List.run()
		await task_List.run()
		await entity_Select.run()
	},
}