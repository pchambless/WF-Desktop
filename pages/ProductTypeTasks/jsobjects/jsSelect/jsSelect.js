export default {
	async selectType () {
		await storeValue("editMode","Edit")	
		await storeValue('prodTypeID',sel_Type.selectedOptionValue)
		entity_List.run()
	}
}