export default {
	async select () {
		await storeValue('editMode','Edit')
		await this.editMode('Edit')
		await ingr_dd.run()
	},

	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? jsForm.add() : jsForm.edit()
	}
}
