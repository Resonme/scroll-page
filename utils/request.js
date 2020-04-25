/**
 * axios 封装
 * Created by  on 2019/11/05.
 */
import {
	getLoginInfo,
	removeLoginInfo
} from './data.js'
import {
	BASE_ADRESS
} from './config.js'

const Request = function({
	url,
	method,
	params,
	contentType,
	checkLogin = true
}) {
	return new Promise((resolve, reject) => {
		const loginInfo = getLoginInfo() || {}
		if (checkLogin && (!loginInfo || !loginInfo.token)) {
			uni.reLaunch({
				url: '/pages/login/login'
			})
			return
		}
		uni.request({
			url: BASE_ADRESS.REQUEST_URL + url,
			method: method || "GET",
			data: params,
			header: {
				'content-type': contentType || 'application/x-www-form-urlencoded',
				// 'content-type': 'application/json;charset=UTF-8',
				'token': loginInfo.token || '',
				'uid': loginInfo.uid || '',
			},
			success: res => {
				// if (res && res.data && res.data.code === 7777) {
				// 	removeLoginInfo()
				// 	uni.reLaunch({
				// 		url: '/pages/login/login'
				// 	})
				// 	return
				// }
				if (res && res.data && res.data.code === 200) {
					resolve(res.data)
				} else {
					uni.showToast({
						title: res.data && res.data.msg ? res.data.msg : '系统异常',
						icon: 'none'
					});
					console.log('请求异常：' + BASE_ADRESS.REQUEST_URL + ' => ' + url + JSON.stringify(res.data))
					reject(res.data)
				}
			},
			fail: err => {
				uni.showToast({
					title: '系统异常',
					icon: 'none'
				});
				console.log('请求失败 ：' + JSON.stringify(err) + ' 参数：' + JSON.stringify(data));
				reject(err)
			}
		})
	})
}

export default Request
