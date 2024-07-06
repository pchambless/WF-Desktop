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
