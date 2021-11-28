import axios from 'axios'

export function request(config){

	// 1. 创建实例
	const instance = axios.create({
		baseURL: 'http://39.106.169.64',
		timeout: 5000
	})
 
	// 2. axios 拦截器
	// 2.1 axios 请求拦截器 
	// instance.interceptors.request.use(config => {
	// 	return config
	// }, err => {
	// 	console.log(err);
	// })

	// 2.2 axios 拦截器
	instance.interceptors.response.use(res => {
		return res.data
	},err => {
		console.log(err);
	})

	//3.发送网络请求
	return instance(config)
}