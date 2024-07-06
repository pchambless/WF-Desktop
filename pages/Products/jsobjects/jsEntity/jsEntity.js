export default {
	add () {
		Name.setValue('')
		description.setValue('')
		best_by_days.setValue(0)
		global_measure_unit_id.setSelectedOption('')
		Location.setValue('')
	},
	edit () {
		Name.setValue(tbl_entity.selectedRow.name)
		description.setValue(tbl_entity.selectedRow.description)
		best_by_days.setValue(tbl_entity.selectedRow.best_by_days)
		global_measure_unit_id.setSelectedOption(tbl_entity.selectedRow.global_measure_unit_id)
		Location.setValue(tbl_entity.selectedRow.location)
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
