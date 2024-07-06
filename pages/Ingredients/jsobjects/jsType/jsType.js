export default {
	editModeRun: async (mode) => {
	switch(mode) {
		case 'Add':
			await ingrType_Add.run();
			break;
		case 'Edit':
			await ingrType_Edit.run();
			break;
		case 'Delete':
			await ingrType_Delete.run();
			break;
		default:
			console.log("Invalid mode");
		}
	await ingrType_List.run()
	await ingrType_dd.run()
	await this.editMode (mode)
},
	async editMode  (mode) {
	switch(mode) {
		case 'Add':
			await jsnType.setSourceData('');
			break;
		case 'Edit':
		case 'Delete':
			await jsnType.setSourceData(tbl_ingrType.selectedRow);
			break;
		default:
			console.log("Invalid mode");
		}
}
}
