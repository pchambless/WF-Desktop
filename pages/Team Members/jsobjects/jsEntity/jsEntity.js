export default {
	editModeRun: async () => {
		tbl_Entity.selectedRowIndex === -1 ? entity_Add.run() : entity_Edit.run()
				await storeValue('brndID',tbl_Entity.selectedRowIndex === -1 ? entity_Add.data[0].newID : tbl_Entity.selectedRow.id)
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 ? jsForm.add() : jsForm.edit()
	},
	async entityDelete () {
		await entity_Delete.run()
		await entity_List.run()
	}

}