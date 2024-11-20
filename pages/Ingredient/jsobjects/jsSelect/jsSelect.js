export default {
	async selectType () {
		await storeValue('ingrTypeID', sel_Type.selectedOptionValue)
		entity_List.run()	
		pdfIngrSumry.run()
	},
	async selectEntity () {
		await storeValue('editMode','Edit')
		await storeValue('ingrID', tbl_Entity.selectedRow.id)
		await pdfIngrSumry.run()
		await pdfRcpe.run()
		await pdfIngrBtch.run()
		await entity_Batches.run()
	}
}