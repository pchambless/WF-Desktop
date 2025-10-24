export default {
	async load () {
		await storeValue('active',1)
		entity_List.run()
	}
}