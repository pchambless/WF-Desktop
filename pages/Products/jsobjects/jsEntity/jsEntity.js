export default {
	add () {
		Name.setValue('')
		description.setValue('')
		best_by_days.setValue(0)
		global_measure_unit_id.setSelectedOption('')
		Location.setValue('')
	},
	edit () {
		Name.setValue(tbl_Entity.selectedRow.name)
		description.setValue(tbl_Entity.selectedRow.description)
		best_by_days.setValue(tbl_Entity.selectedRow.best_by_days)
		global_measure_unit_id.setSelectedOption(tbl_Entity.selectedRow.global_measure_unit_id)
		Location.setValue(tbl_Entity.selectedRow.location)
	},
editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? this.add() : this.edit()
	}
}
