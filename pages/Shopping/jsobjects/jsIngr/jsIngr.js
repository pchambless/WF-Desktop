export default {
	async select  () {
		await storeValue('ingrID',sel_ingr.selectedOptionValue)
		await entity_List.run()
		await ingr_Select.run()
		await entity_Last.run()
		await jsBatch.batchList()
	}
	
}
