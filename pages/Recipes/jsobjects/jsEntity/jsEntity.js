export default {
	async select () {
		await storeValue('editMode','Edit')
		await this.editMode('Edit')
		await ingr_dd.run()
	},
	add () {
		sel_ingrType.setSelectedOption('')
		ingredient_id.setSelectedOption('')
		ingredient_order.setValue(0)
		quantity.setValue(0)
		global_measure_unit_id.setSelectedOption(51)
		comments.setValue('')
	},
	edit () {
		sel_ingrType.setSelectedOption(tbl_Entity.selectedRow.ingr_type_id)
		ingredient_id.setSelectedOption(tbl_Entity.selectedRow.ingr_id)
		ingredient_order.setValue(tbl_Entity.selectedRow.ingr_ordr)
		quantity.setValue(tbl_Entity.selectedRow.ingr_qty)
		global_measure_unit_id.setSelectedOption(tbl_Entity.selectedRow.ingr_meas_id)
		comments.setValue(tbl_Entity.selectedRow.comments)
	},
	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? this.add() : this.edit()
	}
}
