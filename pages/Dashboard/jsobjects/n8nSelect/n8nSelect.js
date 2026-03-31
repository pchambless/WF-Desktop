export default {
	account_id: async () => {
  await storeValue("setValsBody", [{ param_name: "account_id", param_val: SelAccount.selectedOptionValue }]);
  await n8nVals.setVals();
  await storeValue("setClearsBody", ["ingredient_batch_id","ingredient_id","ingredient_type_id",
																	 "product_batch_id", "product_id", "product_type_id",
																	 "brand_id", "location_id", "measure_id","worker_id"]);
  await n8nVals.clearVals()
}
}