export default {
	async selectVendor () {
		await entity_List.run()
	},
	async selType () {
		await ingr_dd.run()	
		await sel_ingr.setSelectedOption('')
	},
	async selectIngr () {
		await storeValue('ingrID',sel_ingr.selectedOptionValue)
		await batch_Select.run()
		await batch_Last.run()
//		await ingr_Select.run()
	},
	async selectEntity () {
		await jsEntity.editMode()
		await shop_List.run()
		await batch_List.run()
//		entity_Trace.run()
	},
	async selectBatch () {
		await sel_Type.setSelectedOption(tbl_Batch.selectedRow.ingr_type_id)
		await ingr_dd.run()
		await sel_ingr.setSelectedOption(tbl_Batch.selectedRow.ingr_id)
		await batch_Select.run()
	}
}