export default {
async select () {
	await storeValue('editMode','Edit')
	await storeValue('prodID', tbl_Entity.selectedRow.id)
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
			await this.addProduct();
			break;
		case 'Edit':
		case 'Delete':
			await this.editProduct();
			break;
		default:
			console.log("Invalid mode");
		}
},
	addProduct () {
		Name.setValue('')
		product_type_id.setSelectedOption(sel_Type.selectedOptionValue)
		code.setValue('')
		Location.setValue('')
		global_measure_unit_id.setSelectedOption(34)
		description.setValue('')
	},
	editProduct () {
		Name.setValue(tbl_Entity.selectedRow.name)
		product_type_id.setSelectedOption(tbl_Entity.selectedRow.product_type_id)
		code.setValue(tbl_Entity.selectedRow.code)
		Location.setValue(tbl_Entity.selectedRow.recipe_quantity)
		global_measure_unit_id.setSelectedOption(tbl_Entity.selectedRow.global_measure_unit_id)
		description.setValue(tbl_Entity.selectedRow.description)
	}
}