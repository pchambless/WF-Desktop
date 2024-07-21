export default {
	async load () {
		sel_Type.setSelectedOption(appsmith.store.prodTypeID)
		entity_List.run()
	}
}