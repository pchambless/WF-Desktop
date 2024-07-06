export default {
	async select () {
		await storeValue('editMode','')
		await entity_List.run()
	}
}