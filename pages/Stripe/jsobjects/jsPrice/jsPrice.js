export default {
	formatPrice: (amount) => {
	return ((amount/100).toFixed(2)); // Assuming the amount is in cents
},
	productPrice: () => {
		productPrice.run()
		return this.formatPrice(productPrice.data.unit_amount)
}
	
}