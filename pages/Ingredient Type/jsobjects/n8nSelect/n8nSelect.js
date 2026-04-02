export default {
	ingredient_type_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_type_id", param_val: entity_tbl.selectedRow.id }]);
	await n8nVals.setVals();
  }
}