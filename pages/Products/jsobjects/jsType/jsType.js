export default {
	async select () {
		await storeValue('prodTypeID',sel_Type.selectedOptionValue)
		await storeValue('editMode','')
		await entity_List.run()
	}
}