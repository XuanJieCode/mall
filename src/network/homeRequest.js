import {request} from "./request"

export function getHomeMultidata() {
	return request({
		url: '',
		params: {
			imgs:'home'
		}
	})
}

export function getHomeGoods(type, page){
	return request({
		url: '/http/home.php',
		params:{
			type,
			page
		}
	})
}