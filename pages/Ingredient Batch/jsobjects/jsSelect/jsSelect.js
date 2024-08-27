export default {
	async selectType () {
		await ingr_dd.run()
		await sel_ingr.setSelectedOption('')
	},
	async selectIngr () {
		await storeValue('ingrID',sel_ingr.selectedOptionValue)
		await entity_List.run()
		await ingr_Select.run()
		await entity_Last.run()
		await tbl_Entity.setSelectedRowIndex(-1)
		await batch_number.setValue(ingr_Select.data[0].code)
	},
	async selectEntity () {
		await jsEntity.editMode()
		storeValue('vndrID',tbl_Entity.selectedRow.vendor_id)
		storeValue('shopID',tbl_Entity.selectedRow.shop_event_id)
		entity_Trace.run()
	}
}