export default {
	async select () {
		await storeValue("editMode","Edit")
		this.edit()
		await batchIngr_Map.run()
		await batchTask_List.run()
		await rcpe_List.run()
		await entity_Select.run()
	},
	bestByDate (batchDate, addDays) {
    const bestBy = moment(batchDate).add(addDays,'day');
    return bestBy;
},
	add () {
		batch_number.setValue(prod_Select.data[0].code)
		batch_start.setValue('')
		Location.setValue(prod_Select.data[0].location)
		batch_quantity.setValue('')
		global_measure_unit_id.setSelectedOption('')
		best_by_date.setValue('')
		comments.setValue('')
	},
	edit () {
		batch_number.setValue(tbl_Entity.selectedRow.batch_number)
		batch_start.setValue(tbl_Entity.selectedRow.batch_date)
		Location.setValue(tbl_Entity.selectedRow.location)
		batch_quantity.setValue(tbl_Entity.selectedRow.batch_quantity)
		global_measure_unit_id.setSelectedOption(tbl_Entity.selectedRow.global_measure_unit_id)
		best_by_date.setValue(this.bestByDate(tbl_Entity.selectedRow.batch_date,daysAdd.text))
		comments.setValue(tbl_Entity.selectedRow.comments)
	},
	async editModeRun (mode)  {
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
