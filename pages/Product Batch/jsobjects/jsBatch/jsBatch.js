export default {
async selectBatch () {
	await storeValue("editMode","Edit")
	await batchIngr_Map.run()
	await batchTask_List.run()
	await rcpe_List.run()
},
async updateTask () {
	await batchTask_Edit.run()
	await batchTask_List.run()
}
}