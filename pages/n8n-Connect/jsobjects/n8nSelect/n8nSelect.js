export default {
	account_id: async () => {
  await storeValue("setValsBody", [{ param_name: "account_id", param_val: SelAccount.selectedOptionValue }]);
  await n8nvals.setVals();
  await dd_product.run();
  await dd_ingredient.run();
}
,
	product_id: async () => {
	await storeValue("setValsBody", [{ param_name: "product_id", param_val: SelProduct.selectedOptionValue }]);
	await n8nvals.setVals();
	// create recipe report
  await rpt_recipe_hdr.run();
  await rpt_recipe_body.run();
  },
	ingredient_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_id", param_val: SelIngredient.selectedOptionValue }]);
	await n8nvals.setVals();
  await dd_ingredient_batch.run()
  },
	batch_id: async () => {
	await storeValue("setValsBody", [{ param_name: "batch_id", param_val: SelIngr_batch.selectedOptionValue }]);
	await n8nvals.setVals();
  // create recipe report
  await rpt_srce_trgt_hdr.run();
  await rpt_srce_trgt_body.run();
  }
}