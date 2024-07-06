export default {
	add () {
		batch_number.setValue('')
		lot_number.setValue('')
		purchase_date.setValue('')
		best_by_date.setValue('')
		vendor_id.setSelectedOption('')
		brand_id.setSelectedOption('')
		purchase_quantity.setValue(0)
		unit_price.setValue(0)
		unit_quantity.setValue(1)
		global_measure_unit_id.setSelectedOption('')
		comments.setValue('')
	},
	edit () {
		batch_number.setValue(tbl_entity.selectedRow.batch_number)
		lot_number.setValue(tbl_entity.selectedRow.lot_number)
		purchase_date.setValue(tbl_entity.selectedRow.purchase_date)
		best_by_date.setValue(tbl_entity.selectedRow.best_by_date)
		vendor_id.setSelectedOption(tbl_entity.selectedRow.vendor_id)
		brand_id.setSelectedOption(tbl_entity.selectedRow.brand_id)
		purchase_quantity.setValue(tbl_entity.selectedRow.purchase_quantity)
		unit_price.setValue(tbl_entity.selectedRow.unit_price)
		unit_quantity.setValue(tbl_entity.selectedRow.unit_quantity)
		global_measure_unit_id.setSelectedOption(tbl_entity.selectedRow.global_measure_unit_id)
		comments.setValue(tbl_entity.selectedRow.comments)
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
	await jsBatch.batchList()
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
