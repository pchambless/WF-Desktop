export default {
	async selectEntity () {
		await storeValue("editMode","Edit")
		await entity_Select.run()
	},
}