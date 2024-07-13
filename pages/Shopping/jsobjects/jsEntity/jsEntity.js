export default {
	editModeRun: async () => {
		tbl_shopEvent.selectedRowIndex === -1 ? shop_Add.run() : entity_Edit.run()
		await entity_List.run()
	},
	async editMode  () {
		tbl_shopEvent.selectedRowIndex === -1 ? jsForm.add() : jsForm.edit()
	},
	async entityDelete () {
		await entity_Delete.run()
		await entity_List.run()
	}
}
