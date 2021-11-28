import {request} from "./request"

export function getHomeMultidata() {
	return request({
		url: '',
		params: {
			imgs:'home'
		}

	})
}