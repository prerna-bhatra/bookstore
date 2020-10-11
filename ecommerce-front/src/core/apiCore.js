import queryString from 'query-string'

export const getProducts=(sortBy)=>{
	return fetch(`http://localhost:8000/api/products?sortBy==${sortBy}&order=desc`,{
		method:"GET",

	})
	.then(response=>{
		return response.json()
		//console.log(response)
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

export const read=(productId)=>{
	return fetch(`http://localhost:8000/api/product/${productId}`,{
		method:"GET",

	})
	.then(response=>{
		return response.json()
	})
	.catch(err=>{
		console.log(err)
	})



}

export const list=params=>{
	const query=JSON.stringify(params)
	console.log('query',query)
	return fetch(`http://localhost:8000/api/products/search?${query}`,{//it is correct till here
		method:"GET",
	})
	.then(response=>{
		return response.json()
		//console.log(response)
	})
	.catch(err=>{
		console.log(err)
	})
}


export const getBraintreeClientToken=(userId,token)=>{
	
	return fetch(`http://localhost:8000/api/braintree/getToken/${userId}`,{//it is correct till here
		method:"GET",
		headers:{
			"Content-Type":"application/json",
			Authorization:`Bearer ${token}`
		}

	})
	.then(response=>{
		return response.json()
		//console.log(response)
	})
	.catch(err=>{
		console.log(err)
	})
}

export const processPayment=(userId,token,paymentdata)=>{
	
	return fetch(`http://localhost:8000/api/braintree/payment/${userId}`,{//it is correct till here
		method:"POST",
		headers:{
			"Content-Type":"application/json",
			Authorization:`Bearer ${token}`
		},
		body:JSON.stringify(paymentdata)

	})
	.then(response=>{
		return response.json()
		//console.log(response)
	})
	.catch(err=>{
		console.log(err)
	})
}


export const createOrder=(userId,token,createOrderData)=>{
	
	return fetch(`http://localhost:8000/api/order/create/${userId}`,{//it is correct till here
		method:"POST",
		headers:{
			"Content-Type":"application/json",
			Authorization:`Bearer ${token}`
		},
		body:JSON.stringify({order:createOrderData})

	})
	.then(response=>{
		return response.json()
		//console.log(response)
	})
	.catch(err=>{
		console.log(err)
	})
}



export const createOrdercod=(userId,createOrderData)=>{
	
	return fetch(`http://localhost:8000/api/order/create/${userId}`,{//it is correct till here
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify({order:createOrderData})

	})
	.then(response=>{
		return response.json()
		//console.log(response)
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



