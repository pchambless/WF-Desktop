export default {
	
	async editModeRun  () {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? jsForm.add() : jsForm.edit()
	},
	async entityDelete () {
		await entity_Delete.run()
		await entity_List.run()
	}
}
