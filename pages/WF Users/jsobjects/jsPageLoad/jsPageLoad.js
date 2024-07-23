export default {
	async load () {
		await storeValue('active','Y')
		entity_List.run()
	}
}