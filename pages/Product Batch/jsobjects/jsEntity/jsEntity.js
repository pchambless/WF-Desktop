export default {
	async select () {
		await tbl_Entity.selectedRowIndex === -1 ? jsForm.add : jsForm.edit()
		await batchIngr_Map.run()
		await batchTask_List.run()
		await rcpe_List.run()
		await entity_Select.run()
	},
	bestByDate (batchDate, addDays) {
    const bestBy = moment(batchDate).add(addDays,'day');
    return bestBy;
},
	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? jsForm.add() : jsForm.edit()
	}
}
