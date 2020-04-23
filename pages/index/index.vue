<template>
	<view class="content">
		<swiper class="swiper-container" :vertical="true" :circular="true" :duration="500" @change="onChange">
			<swiper-item class="swiper-item" v-for="(item, index) in swiperArr" :key="index">
				<view class="flv-item">
					<image :src="item" mode="aspectFill" style="width: 100%;height: 100%;"></image>
					<!-- <live-player class="video" src="rtmp://live.hkstv.hk.lxdns.com/live/hks" autoplay @statechange="onStateChange"/> -->
				</view>
			</swiper-item>
			<!-- <swiper-item class="swiper-item">
				<view class="flv-item">
					<live-player class="video" src="rtmp://live.hkstv.hk.lxdns.com/live/hks1" autoplay />
				</view>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script>
	const imgs = [
		'https://tse3-mm.cn.bing.net/th/id/OIP.ETlPtOpL72LQQ_zXnBlVAQHaLG?w=198&h=297&c=7&o=5&pid=1.7',
		'https://tse4-mm.cn.bing.net/th/id/OIP.FV0C_zI48H03IlWVeG2ECwHaNK?w=168&h=300&c=7&o=5&pid=1.7',
		'https://tse1-mm.cn.bing.net/th/id/OIP.VHumuGZOMq-AaYPrRsUPSgHaNJ?w=169&h=300&c=7&o=5&pid=1.7',
		// 'https://tse1-mm.cn.bing.net/th/id/OIP._tjbwxzpkBOtMIvYhSKesgAAAA?w=189&h=300&c=7&o=5&pid=1.7',
		// 'https://tse1-mm.cn.bing.net/th/id/OIP.lfeYYUtzAbovTZgoHmrzFAHaNK?w=168&h=300&c=7&o=5&pid=1.7',
		// 'https://tse4-mm.cn.bing.net/th/id/OIP._gUfgcwnTmiIB4Xq1oFt_wDIEs?w=198&h=297&c=7&o=5&pid=1.7',
		// 'https://tse1-mm.cn.bing.net/th/id/OIP.d4ukJjHKw3ZCgY8Z9hlgaAHaNK?w=168&h=300&c=7&o=5&pid=1.7',
		// 'https://tse4-mm.cn.bing.net/th/id/OIP.nVX8Zj2N3x12i5IZXqyYHwHaNK?w=168&h=300&c=7&o=5&pid=1.7',
		// 'https://tse3-mm.cn.bing.net/th/id/OIP.Ku6G56lwCJGzvztczmwS2QAAAA?w=171&h=299&c=7&o=5&pid=1.7',
	]

	export default {
		data() {
			return {
				swiperArr: ['', '', ''], // 长度3 循环
				swiperIndex: 0,
				index: 0
			}
		},
		onLoad() {
			this.setSrc()
		},
		methods: {
			onStateChange(e) {
				console.log(e, 'statechange')
			},
			setSrc() {
				this.$set(this.swiperArr, this.swiperIndex, imgs[this.getArrIndex(this.index)])
				this.$set(this.swiperArr, this.swiperIndex + 1 > this.swiperArr.length - 1 ? 0 : this.swiperIndex + 1, imgs[
					this.getArrIndex(this.index + 1)])
				this.$set(this.swiperArr, this.swiperIndex - 1 < 0 ? this.swiperArr.length - 1 : this.swiperIndex - 1, imgs[
					this.getArrIndex(this.index - 1)])
			},
			getArrIndex(index) {
				console.log(imgs.length, '长度')
				return index < 0 ? imgs.length + index : index
			},
			onChange(e) {
				const current = e.detail.current
				const cutNum = Number(current) - this.swiperIndex
				console.log(current, this.swiperIndex, )
				if (cutNum == 1 || cutNum == -2) {
					this.index++
					this.index >= imgs.length - 1 && imgs.push(imgs[Math.floor(Math.random() * imgs.length)])
				} else {
					this.index = this.index < 1 ? 0 : this.index - 1
					this.index <= 1 && imgs.unshift(imgs[Math.floor(Math.random() * imgs.length)])
				}
				this.swiperIndex = current
				console.log('index = ' + this.index)
				this.setSrc()
			}
		}
	}
</script>

<style lang="scss">
	page,
	.content,
	.swiper-container {
		height: 100%;
	}

	.swiper-item {
		width: 100%;
		height: 100%;

		&:nth-child(2n) {
			.flv-item {
				background: #ccc;
			}
		}

		&:nth-child(3n) {
			.flv-item {
				background: #666;
			}
		}
	}

	.flv-item {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.video {
		width: 100%;
		height: 100%;
	}
</style>
