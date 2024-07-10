export default {
	async selectType () {
		await ingr_dd.run()
		await sel_ingr.setSelectedOption('')
	},
	async selectIngr () {
		await storeValue('ingrID',sel_ingr.selectedOptionValue)
		await entity_List.run()
		await ingr_Select.run()
		await entity_Last.run()
	}
}