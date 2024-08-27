export default {
	async selectType () {
		await storeValue('prodTypeID',sel_Type.selectedOptionValue)
		await storeValue('editMode','')
		await prod_dd.run()
		await entity_List.clear()
		this.selectProd()
},
	async selectProd () {
		await storeValue('editMode','')
		await entity_List.run()
		await entity_Select.run()
	},
		async selectEntity () {
		await storeValue('editMode','Edit')
		await jsEntity.editMode('Edit')
		await ingr_dd.run()
	},
}