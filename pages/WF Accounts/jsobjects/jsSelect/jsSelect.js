export default {
	async selectEntity () {
		await storeValue('editMode','Edit')
		await storeValue('acctID',tbl_Entity.selectedRow.id)
		await accountUser_list.run()
		await accountUser_choice.run()
	}
}