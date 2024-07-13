export default {
	add () {
		batch_number.setValue('')
		lot_number.setValue('')
		best_by_date.setValue('')
		brand_id.setSelectedOption('')
		purchase_quantity.setValue(0)
		unit_price.setValue(0)
		unit_quantity.setValue(1)
		global_measure_unit_id.setSelectedOption('')
		comments.setValue('')
	},
	edit () {
		batch_number.setValue(tbl_shopEvent.selectedRow.batch_number)
		lot_number.setValue(tbl_shopEvent.selectedRow.lot_number)
		best_by_date.setValue(tbl_shopEvent.selectedRow.best_by_date)
		brand_id.setSelectedOption(tbl_shopEvent.selectedRow.brand_id)
		purchase_quantity.setValue(tbl_shopEvent.selectedRow.purchase_quantity)
		unit_price.setValue(tbl_shopEvent.selectedRow.unit_price)
		unit_quantity.setValue(tbl_shopEvent.selectedRow.unit_quantity)
		global_measure_unit_id.setSelectedOption(tbl_shopEvent.selectedRow.global_measure_unit_id)
		comments.setValue(tbl_shopEvent.selectedRow.comments)
	}
}