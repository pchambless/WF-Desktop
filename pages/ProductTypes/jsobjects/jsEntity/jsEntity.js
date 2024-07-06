export default {
async select () {
	await storeValue("active","Y")
	await storeValue("editMode","Edit")
	await storeValue('prodTypeID',tbl_Entity.selectedRow.id)
	await prod_List.run()
	await task_List.run()
	await entity_Select.run()
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
},
async editMode  (mode) {
	switch(mode) {
		case 'Add':
			await Name.setValue('');
			break;
		case 'Edit':
		case 'Delete':
			await Name.setValue(tbl_Entity.selectedRow.name);
			break;
		default:
			console.log("Invalid mode");
		}
}

}