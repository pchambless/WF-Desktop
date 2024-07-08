export default {
	async select () {
		await tbl_Entity.selectedRowIndex === -1 ? this.add : this.edit()
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
		storeValue('editMode','Add')
		batch_number.setValue(prod_Select.data[0].code)
		batch_start.setValue('')
		Location.setValue(prod_Select.data[0].location)
		batch_quantity.setValue('0')
		global_measure_unit_id.setSelectedOption(prod_Select.data[0].global_measure_unit_id)
		best_by_date.setValue('')
		comments.setValue('')
	},
	edit () {
		storeValue('editMode','Edit')
		batch_number.setValue(tbl_Entity.selectedRow.batch_number)
		batch_start.setValue(tbl_Entity.selectedRow.batch_date)
		Location.setValue(tbl_Entity.selectedRow.location)
		batch_quantity.setValue(tbl_Entity.selectedRow.batch_quantity)
		global_measure_unit_id.setSelectedOption(tbl_Entity.selectedRow.global_measure_unit_id)
		best_by_date.setValue(this.bestByDate(tbl_Entity.selectedRow.batch_date,daysAdd.text))
		comments.setValue(tbl_Entity.selectedRow.comments)
	},
	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? this.add() : this.edit()
	}
}
