export default {
	async selectType () {
		await storeValue('ingrTypeID', sel_Type.selectedOptionValue)
		entity_List.run()	
		ingr_List.run()
	},
	async selectEntity () {
		await storeValue('editMode','Edit')
		await storeValue('ingrID', tbl_Entity.selectedRow.id)
		await ingr_List.run()
		await entity_Batches.run()
	}
}