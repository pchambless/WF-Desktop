export default {
	add () {
		batch_number.setValue(ingr_Select.data[0].code)
		lot_number.setValue('')
		best_by_date.setValue('')
		brand_id.setSelectedOption('')
		purchase_quantity.setValue(0)
		unit_price.setValue(0)
		unit_quantity.setValue(1)
global_measure_unit_id.setSelectedOption(ingr_Select.data[0].default_measure_unit)
		comments.setValue('')
	},
	async edit () {
		await entity_Select.run()
		await batch_number.setValue(entity_Select.data[0].ingr_btch_nbr)
		await lot_number.setValue(entity_Select.data[0].ingr_lot_nbr)
		await best_by_date.setValue(entity_Select.data[0].best_by_date)
		await brand_id.setSelectedOption(entity_Select.data[0].brnd_id)
		await purchase_quantity.setValue(entity_Select.data[0].purch_qty)
		await unit_price.setValue(entity_Select.data[0].unit_price)
		await unit_quantity.setValue(entity_Select.data[0].unit_qty)
await global_measure_unit_id.setSelectedOption(entity_Select.data[0].meas_id)
		await comments.setValue(entity_Select.data[0].comments)
	}
}