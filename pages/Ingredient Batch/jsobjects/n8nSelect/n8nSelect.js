export default {
	ingredient_type_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_type_id", param_val: selIngredientType.selectedOptionValue }]);
	await n8nVals.setVals();
  dd_ingredient.run()
  },
	ingredient_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_id", param_val: selIngredient.selectedOptionValue }]);
	await n8nVals.setVals();
  grid_ingredient_batches.run()
  },
	ingredient_batch_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_id", param_val: tbl_Entity.selectedRow.id }]);
	await n8nVals.setVals();
  await rpt_srce_trgt_hdr.run();
  await rpt_srce_trgt_body.run()
  },
}