export default {
	async addVendor () {
		await vndr_Add.run()
		await vndr_dd.run()
		await storeValue('addVndrBrnd','')
	},
	async addBrand () {
		await brnd_Add.run()
		await brnd_dd.run()
		await storeValue('addVndrBrnd','')
	}
}