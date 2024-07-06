export default {
	async select () {
		await storeValue('RcpeID',tbl_Recipe.selectedRow.prd_rcpe_id)
		await storeValue('ingrID',tbl_Recipe.selectedRow.ingr_id)
		await batchIngr_Map.run();
		await batch_Choices.run()
		await batch_Mapped.run()
	},
	ingr_Map: async () => {
		await prodIngrMap_Add.run();
		await batch_Choices.run();
		await batch_Mapped.run();
		await batchIngr_Map.run();
  },
	ingr_UnMap: async () => {
		await prodIngrMap_Delete.run();
		await batch_Choices.run();
		await batch_Mapped.run();
		await batchIngr_Map.run()
  },
	async mapping () {
		await rcpe_List.run()
		await task_List.run()
	}
}