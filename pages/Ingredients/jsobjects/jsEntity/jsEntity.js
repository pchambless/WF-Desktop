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
	editModeRun: async (mode) => {
	switch(mode) {
		case 'Add':
			await entity_Add.run();
			break;
		case 'Edit':
			await entity_Edit.run();
			break;
		case 'Delete':
		case 'Activate':
			await entity_Delete.run();
			break;
		default:
			console.log("Invalid mode");
		}
	await entity_List.run()
	await this.editMode (mode)
},
	async editMode  (mode) {
	switch(mode) {
		case 'Add':
			await this.add();
			break;
		case 'Edit':
		case 'Delete':
			await this.edit();
			break;
		default:
			console.log("Invalid mode");
		}
}
}
