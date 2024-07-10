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
		await entity_List.run()
		await batch_Last.run()
		await batchIngr_Map.clear()
		await batchTask_List.clear()
		await rcpe_List.run()
		prod_Select.run()
	}
}