export default {
	async select () {
		await storeValue("active","Y")
		await storeValue("editMode","Edit")
		await storeValue('prodTypeID',tbl_Entity.selectedRow.id)
		await prod_List.run()
		await task_List.run()
		await entity_Select.run()
	},

	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? jsForm.add() : jsForm.edit()
	}

}