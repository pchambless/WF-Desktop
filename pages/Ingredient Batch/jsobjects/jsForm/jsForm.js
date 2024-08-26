export default {
	add () {
		batch_number.setValue(ingr_Select.data[0].code)
		lot_number.setValue('')
		purchase_date.setValue('')
		best_by_date.setValue('')
		vendor_id.setSelectedOption('')
		brand_id.setSelectedOption('')
		purchase_quantity.setValue(0)
		unit_price.setValue(0)
		unit_quantity.setValue(1)
		global_measure_unit_id.setSelectedOption('')
		comments.setValue('')
	},
	edit () {
		batch_number.setValue(tbl_Entity.selectedRow.batch_number)
		lot_number.setValue(tbl_Entity.selectedRow.lot_number)
		purchase_date.setValue(tbl_Entity.selectedRow.purchase_date)
		best_by_date.setValue(tbl_Entity.selectedRow.best_by_date)
		vendor_id.setSelectedOption(tbl_Entity.selectedRow.vendor_id)
		brand_id.setSelectedOption(tbl_Entity.selectedRow.brand_id)
		purchase_quantity.setValue(tbl_Entity.selectedRow.purchase_quantity)
		unit_price.setValue(tbl_Entity.selectedRow.unit_price)
		unit_quantity.setValue(tbl_Entity.selectedRow.unit_quantity)
		global_measure_unit_id.setSelectedOption(tbl_Entity.selectedRow.global_measure_unit_id)
		comments.setValue(tbl_Entity.selectedRow.comments)
	}
}