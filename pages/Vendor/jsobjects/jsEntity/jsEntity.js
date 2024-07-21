export default {
	async editModeRun  () {
		tbl_Entity.selectedRowIndex === -1 || !entity_List.data.length ? entity_Add.run() : entity_Edit.run()
		await storeValue('vndrID',tbl_Entity.selectedRowIndex === -1 ? entity_Add.data[0].newID : tbl_Entity.selectedRow.id)
		await entity_List.run()
	},
	async editMode  () {
		tbl_Entity.selectedRowIndex === -1 || !entity_List.data.length ? jsForm.add() : jsForm.edit()
	},
	async entityDelete () {
		await entity_Delete.run()
		await entity_List.run()
	},
	txtEditHdr () {
		let txt = tbl_Entity.selectedRowIndex === -1 || !entity_List.data.length ? "Add" : "Edit <strong>" + tbl_Entity.selectedRow.name + '</strong>'
		return txt
	}
}