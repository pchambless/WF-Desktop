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
},
	batchList ()  {
		let data = []
		data = entity_List.data.length ? entity_List.data : this.batchFirst()
		return data
	},
	batchFirst () {
	let data = [
  {
    "prd_btch_nbr": "Add First Batch",
    "prd_btch_date": "",
    "uuid": "",
    "prd_name": entity_Select.data[0].name
  }]
		
	return data
}
}