export default {
	async selectType  () {
		await prod_dd.run()
		await sel_prod.setSelectedOption('')
		await batchIngr_Map.clear()
		await batchTask_List.clear()
		await task_List.run()
	},
	async selectProd () {
		await storeValue("editMode","")
		await storeValue('prodID',sel_prod.selectedOptionValue)
		await prod_Select.run()
		await entity_List.run()
		await batch_Last.run()
		await batchIngr_Map.clear()
		await batchTask_List.clear()
		await rcpe_List.run()
		await jsForm.add()
	},
	async selectEntity () {
		await tbl_Entity.selectedRowIndex === -1 ? jsForm.add : jsForm.edit()
		await batchIngr_Map.run()
		await batchTask_List.run()
		await rcpe_List.run()
		await entity_Select.run()
	},
	async selectIngredient () {
		await storeValue('RcpeID',tbl_Recipe.selectedRow.prd_rcpe_id)
		await storeValue('ingrID',tbl_Recipe.selectedRow.ingr_id)
		await batchIngr_Map.run();
		await batch_Choices.run()
		await batch_Mapped.run()
	},
	
}