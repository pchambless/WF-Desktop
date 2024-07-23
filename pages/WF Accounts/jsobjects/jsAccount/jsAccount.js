export default {
	async updateOrAdd () {
		await appsmith.store.Acct === 'Edit' ? entity_Edit.run() : entity_Add.run()
		await entity_List.run()
		return entity_List.data
	},
	async accountDelete () {
		await entity_Delete.run()
		await entity_List.run()
	},
	async accountPayUpdate () {
	
}
    
	
}