export default {
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
	}
}