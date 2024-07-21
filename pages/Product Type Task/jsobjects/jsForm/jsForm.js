export default {
	add () {
		Ordr.setValue(0)
		Name.setValue('')
		description.setValue('')
	},
	edit () {
		Ordr.setValue(tbl_Entity.selectedRow.task_ordr)
		Name.setValue(tbl_Entity.selectedRow.task_nm)
		description.setValue(tbl_Entity.selectedRow.task_desc)
	}
}