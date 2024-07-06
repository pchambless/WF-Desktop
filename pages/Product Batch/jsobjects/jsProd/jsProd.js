export default {
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