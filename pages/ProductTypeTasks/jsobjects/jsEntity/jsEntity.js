export default {
	async select () {
		await storeValue("editMode","Edit")	
		await storeValue('prodTypeID',sel_Type.selectedOptionValue)
		entity_List.run()
	},
	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? this.add() : this.edit()
	},
	add () {
		Ordr.setValue(0)
		Name.setValue('')
		description.setValue('')
	},
	edit () {
		Ordr.setValue(tbl_Entity.selectedRow.task_ordr)
		Name.setValue(tbl_Entity.selectedRow.task_nm)
		description.setValue(tbl_Entity.selectedRow.task_desc)
	}
}
