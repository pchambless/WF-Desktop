export default {
	async load () {
		await vndr_dd.run()
		await sel_vendor.setSelectedOption(appsmith.store.vndrID)
	}
}