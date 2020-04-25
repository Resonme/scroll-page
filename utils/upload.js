/**
 * 表单验证相关
 * Created by /12/06.
 */

import { getLoginInfo } from '@/utils/data.js'
import { BASE_ADRESS } from '@/utils/config'

export function uploadFile(url) {
	const loginInfo = getLoginInfo()
	return new Promise((resolve, reject) => {
		const uploadTask = uni.uploadFile({
			url: BASE_ADRESS.IMG_UPLOAD_URL + '/file/file/upload',
			filePath: url,
			name: 'file',
			header: {
				'auid': loginInfo && loginInfo.auid ? loginInfo.auid : '1000',
				'appKey': BASE_ADRESS.APP_KEY
			},
			formData: {},
			success: ({ data, statusCode }) => {
				console.log('upload url', url, data)
				if (parseInt(statusCode) !== 200) {
					uni.showToast({ icon: 'none', title: '图片上传失败' });
					reject({ data, statusCode })
				} else {
					try {
						const res = JSON.parse(data);
						if (res.code === 1) {
							resolve(res.data)
						} else {
							uni.showToast({ icon: 'none', title: res.msg + res.code });
							reject(res)
						}
					} catch (e) {
						console.log(e, 'jsonparse 解析失败');
						//TODO handle the exception
						uni.showToast({ icon: 'none', title: '图片上传失败' });
						reject(e)
					}
				}
			}
		});

		uploadTask.onProgressUpdate((res) => {
			console.log('上传进度' + res.progress);
			console.log('已经上传的数据长度' + res.totalBytesSent);
			console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

			// 测试条件，取消上传任务。
			if (res.progress > 50) {
				uploadTask.abort();
			}
		});
	})
}
