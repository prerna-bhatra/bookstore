export const createcategory=(userId,token,category)=>{
		//console.log(name,email,password)

		return fetch(`http://localhost:8000/api/category/create/${userId}`,{
			method:"POST",
			headers:{
				 'Content-Type': 'application/json',
				 Authorization:`Bearer ${token}`
			},
			body:JSON.stringify(category)
		})
		.then(response=>{
			return response.json()

		})
		.catch(err=>{
			console.log(err)
		})
	}


export const createProduct=(userId,token,product)=>{
		//console.log(name,email,password)

		return fetch(`http://localhost:8000/api/product/create/${userId}`,{
			method:"POST",
			headers:{
				 Authorization:`Bearer ${token}`
			},
			body:product
		})
		.then(response=>{
			return response.json()

		})
		.catch(err=>{
			console.log(err)
		})
	}


export const getCategories=()=>{
	return fetch(`http://localhost:8000/api/categories`,{
		method:"GET",

	})
	.then(response=>{
		return response.json()
	})
	.catch(err=>{
		console.log(err)
	})



}

export const listOrders=(userId,token)=>{
	return fetch(`http://localhost:8000/api/order/list/${userId}`,{
		method:"GET",
		headers:{
				Accept:"application/json",
				 Authorization:`Bearer ${token}`
			}

	})
	.then(response=>{
		return response.json()
	})
	.catch(err=>{
		console.log(err)
	})
}

export const manageOrders=(orderId)=>{
	
		return fetch(`http://localhost:8000/api/order/manage`,{
			method:"POST",
			body:JSON.stringify({id:orderId})
		})
		.then(response=>{
			return response.json()
			console.log(response)

		})
		.catch(err=>{
			console.log(err)
		})
}








