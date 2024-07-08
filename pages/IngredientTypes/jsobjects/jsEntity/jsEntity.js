export default {
	add () {
		Name.setValue('')
		description.setValue('')
	},
	edit () {
		Name.setValue(tbl_Entity.selectedRow.name)
		description.setValue(tbl_Entity.selectedRow.description)
	},
	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? this.add() : this.edit()
	}
}
