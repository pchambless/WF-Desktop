export default {
	
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
	},
	async updateTask () {
		await batchTask_Edit.run()
		await batchTask_List.run()
}
	
}