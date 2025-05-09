export default {
	async selectVendor () {
		await await storeValue('vndrID',sel_vendor.selectedOptionValue)
		await shop_dd.run()
		await shopEvent_List.run()
		await sel_Shop.setSelectedOption('')
	},
	async selectShop () {
		await storeValue('shopID',sel_Shop.selectedOptionValue)
		await entity_List.run()	
		await shop_List.run()
		await shop_Select.run()
	  this.appendTotal(shop_Select.data[0], shop_List.data)
	},
	async selType () {
		await storeValue('ingrTypeID',sel_Type.selectedOptionValue)
		await ingr_dd.run()	
		await sel_ingr.setSelectedOption('')
	},
	async selectIngr () {
		await storeValue('ingrID',sel_ingr.selectedOptionValue)
		await tbl_Entity.setSelectedRowIndex(-1)
		await ingr_Select.run()
		await jsForm.add()
		await entity_Last.run()
	},
	async selectEntity () {
		await jsEntity.editMode()
		await shop_List.run()
		await shop_Select.run()
		await entity_List.run()
//		entity_Trace.run()
	},
	async selectBatch () {
		await jsEntity.editMode()
		await sel_Type.setSelectedOption(tbl_Entity.selectedRow.ingr_type_id)
		await ingr_dd.run()
		await sel_ingr.setSelectedOption(tbl_Entity.selectedRow.ingr_id)
		await entity_Select.clear()
		await entity_Select.run()
		await tracePdf.clear()
		await entity_Trace.run()
		await tracePdf.run()
	},
	// Function to append shop_Select to shop_List
  appendTotal(shop_Select, shop_List) {
		let shopList = shop_List
    // Create a new row with the specific columns from shop_Select
    const newRow = {
      Ingredient: '',
      Batch: "",
      "Lot Number": "",
      Detail: "TOTAL",
      Amount: shop_Select.total_amount
    };

    // Append the new row to shop_List
    shopList.push(newRow);
		storeValue('shopList', shopList)

  }
}