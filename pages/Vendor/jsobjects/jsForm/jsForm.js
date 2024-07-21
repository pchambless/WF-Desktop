export default {
	add () {
		Name.setValue('')
		contact_name.setValue('')
		contact_phone.setValue('')
		contact_email.setValue('')
	},
	edit () {
		Name.setValue(tbl_Entity.selectedRow.name)
		contact_name.setValue(tbl_Entity.selectedRow.contact_name)
		contact_phone.setValue(tbl_Entity.selectedRow.contact_phone)
		contact_email.setValue(tbl_Entity.selectedRow.contact_email)
	}
}