export default {
	async load () {
		await storeValue('active','Y')
		await storeValue('editMode','')
		await entity_List.run()
	}
}