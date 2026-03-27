export default {
	ingredient_type_id: async () => {
	await storeValue("setValsBody", [{ param_name: "ingredient_type_id", param_val: tbl_Entity.selectedRow.id }]);
	await n8nVals.setVals();
  }
}