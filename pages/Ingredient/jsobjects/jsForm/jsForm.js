export default {
	add () {
		storeValue('editMode','Add')
		Name.setValue('')
		ingredient_type_id.setSelectedOption(sel_Type.selectedOptionValue)
		code.setValue('')
		grams_per_ounce.setValue('')
		default_measure_unit.setSelectedOption(51)
		description.setValue('')
	},
	edit () {
		storeValue('editMode','Edit')
		Name.setValue(tbl_Entity.selectedRow.name)
		ingredient_type_id.setSelectedOption(tbl_Entity.selectedRow.ingredient_type_id)
		code.setValue(tbl_Entity.selectedRow.code)
		grams_per_ounce.setValue(tbl_Entity.selectedRow.grams_per_ounce)
		default_measure_unit.setSelectedOption(tbl_Entity.selectedRow.default_measure_unit)
		description.setValue(tbl_Entity.selectedRow.description)
	}
}