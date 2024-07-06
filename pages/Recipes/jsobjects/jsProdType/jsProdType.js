export default {
async select () {
	await storeValue('prodTypeID',sel_Type.selectedOptionValue)
	await storeValue('editMode','')
	await prod_dd.run()
	await entity_List.clear()
}
}