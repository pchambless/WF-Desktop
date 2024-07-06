export default {
	async batchList ()  {
		await entity_List.run()
		let data = []
		data = entity_List.data.length ? entity_List.data : this.batchFirst()
		return data
	},
	
	batchFirst () {
	let data = [
  {
    "purchase_date": "",
		"Batch": "Add First Batch",
    "uuid": ""
  }]
	return data
}
 
}
