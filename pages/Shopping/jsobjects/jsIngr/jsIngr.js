export default {
	async select  () {
		await storeValue('ingrID',sel_ingr.selectedOptionValue)
		await batch_List.run()
		await ingr_Select.run()
		await batch_Last.run()
		await jsBatch.batchList()
	}
	
}
