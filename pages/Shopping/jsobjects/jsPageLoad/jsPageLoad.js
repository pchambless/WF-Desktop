export default {
	async load () {
		await vndr_dd.run()
		await sel_vendor.setSelectedOption(appsmith.store.vndrID)
		await shop_dd.run()
		await sel_Shop.setSelectedOption(appsmith.store.shopID)
		await ingrType_dd.run()
		await sel_Type.setSelectedOption(appsmith.store.ingrTypeID)
		await ingr_dd.run()
		await sel_ingr.setSelectedOption(appsmith.store.ingrID)
		await ingr_Select.run()
		await entity_List.run()
	}
}