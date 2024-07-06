export default {
async select () {
	await storeValue('prodTypeID',sel_Type.selectedOptionValue)
	await prod_dd.run()
}
}