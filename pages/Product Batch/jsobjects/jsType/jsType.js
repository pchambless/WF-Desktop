export default {
	async selectType  () {
		await prod_dd.run()
		await sel_prod.setSelectedOption('')
		await batchIngr_Map.clear()
		await batchTask_List.clear()
		await task_List.run()
	}
}