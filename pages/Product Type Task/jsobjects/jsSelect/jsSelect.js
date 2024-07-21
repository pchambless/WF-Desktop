export default {
	async selectType () {
		await storeValue("editMode","Edit")	
		await storeValue('prodTypeID',sel_Type.selectedOptionValue)
		entity_List.run()
	},
	async selectEntity () {
		await storeValue('editMode','Edit')
		await storeValue('taskID', tbl_Entity.selectedRow.task_id)
	}
}