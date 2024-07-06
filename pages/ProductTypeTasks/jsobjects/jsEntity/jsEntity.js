export default {
async selectType () {
	await storeValue("editMode","")	
	await storeValue('prodTypeID',sel_Type.selectedOptionValue)
	entity_List.run()
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
			await this.addTask();
			break;
		case 'Edit':
		case 'Delete':
			await this.editTask();
			break;
		default:
			console.log("Invalid mode");
		}
},
	addTask () {
		Ordr.setValue(0)
		Name.setValue('')
		description.setValue('')
	},
	editTask () {
		Ordr.setValue(tbl_Entity.selectedRow.task_ordr)
		Name.setValue(tbl_Entity.selectedRow.task_nm)
		description.setValue(tbl_Entity.selectedRow.task_desc)
	}
}
