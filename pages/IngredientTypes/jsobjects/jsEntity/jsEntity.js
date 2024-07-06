export default {
	add () {
		Name.setValue('')
		description.setValue('')
	},
	edit () {
		Name.setValue(tbl_Entity.selectedRow.name)
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
