export default {
	add () {
		Name.setValue('')
		description.setValue('')
	},
	edit () {
		Name.setValue(tbl_Entity.selectedRow.name)
		description.setValue(tbl_Entity.selectedRow.description)
	}
}