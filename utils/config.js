/**
 * app环境地址相关配置
 * Created by  on 2019/11/26.
 */

const PACKAGE_ENV = 'dev'

// 环境配置
const ENV_URL = {
	// 测试
	dev: {
		APP_ID: '', // 小程序id
		APP_KEY: '',
		REQUEST_URL: '', // 接口地址
		IMG_BASE_URL: '', // 图片地址
	}, 

	// 线上
	pro: {
		APP_ID: '', // 小程序id
		APP_KEY: '',
		REQUEST_URL: '', // 接口地址
		IMG_BASE_URL: '', // 图片地址
	}
}

export const BASE_ADRESS = ENV_URL[PACKAGE_ENV]
