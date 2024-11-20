export async function fetchProducts() {
	try {
		const response = await fetch("https://673470a4a042ab85d11a2d4a.mockapi.io/products");
		return await response.json();
	} catch (error) {
    return null
	}
}