export default {
	async selectType () {
		await storeValue('ingrTypeID', sel_Type.selectedOptionValue)
		entity_List.run()	
		ingr_List.run()
		ingr_PDF.run()
		PDF.buildPDF()
	},
	async selectEntity () {
		await storeValue('editMode','Edit')
		await storeValue('ingrID', tbl_Entity.selectedRow.id)
		await ingr_List.run()
		await rcpe_List.run()
		await rcpe_Head.run()
		await entity_Batches.run()
	}
}