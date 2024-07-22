export default {
	async editModeRun  () {
		txt_formHeader.text === 'Add'  ? entity_Add.run() : entity_Edit.run()
		await entity_List.run()
		await ingr_List.run()
	},
	async editMode  () {
		txt_formHeader.text === 'Add'  ? jsForm.add() : jsForm.edit()
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
