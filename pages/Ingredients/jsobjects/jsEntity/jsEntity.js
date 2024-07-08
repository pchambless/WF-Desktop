export default {
	add () {
		Name.setValue('')
		ingredient_type_id.setSelectedOption(sel_Type.selectedOptionValue)
		code.setValue('')
		grams_per_ounce.setValue('')
		default_measure_unit.setSelectedOption(51)
		description.setValue('')
	},
	edit () {
		Name.setValue(tbl_Entity.selectedRow.name)
		ingredient_type_id.setSelectedOption(tbl_Entity.selectedRow.ingredient_type_id)
		code.setValue(tbl_Entity.selectedRow.code)
		grams_per_ounce.setValue(tbl_Entity.selectedRow.grams_per_ounce)
		default_measure_unit.setSelectedOption(tbl_Entity.selectedRow.default_measure_unit)
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
