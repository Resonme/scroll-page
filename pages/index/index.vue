<template>
	<view class="content">
		<!-- navbar -->
		<Navbar />

		<!-- container -->
		<swiper class="swiper-container" :vertical="true" :circular="true" :duration="500" @change="onChange"
		 @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<view class="flv-item">
					<AppPlayer ref="player0" class="video" :live-url="swiperArr[0]" />
				</view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<view class="flv-item">
					<AppPlayer ref="player1" class="video" :live-url="swiperArr[1]" />
				</view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<view class="flv-item">
					<AppPlayer ref="player2" class="video" :live-url="swiperArr[2]" />
				</view>
			</swiper-item>
		</swiper>

		<!-- tools -->
		<PlayerTools />

		<!-- end -->
	</view>
</template>

<script>
	import Navbar from '@/components/Navbar/index.vue'
	import AppPlayer from '@/components/AppPlayer/index.vue'
	const imgs = [
		'http://live.hzhos.com/live/panta2.flv',
		'http://live.hzhos.com/live/panta.flv',
	]

	let activePlayer = null

	export default {
		components: {
			Navbar,
			AppPlayer
		},
		data() {
			return {
				swiperArr: ['http://live.hzhos.com/live/panta2.flv', 'http://live.hzhos.com/live/panta.flv', ''], // 长度3 循环
				swiperIndex: 0,
				index: 0
			}
		},
		onLoad() {
			this.play()
		},
		methods: {

			onChange(e) {
				const current = e.detail.current
				console.log(current, this.swiperIndex, )

			},
			async animationfinish(e) {
				const current = e.detail.current
				this.swiperIndex = current
				this.play()

			},
			async play() {
				console.log('player' + this.swiperIndex)
				try {
					if (activePlayer) {
						const data = await activePlayer.stop()
						console.log(data, 'parse')
					}
					activePlayer = this.$refs['player' + this.swiperIndex]
					const successRes = await activePlayer.play()
					console.log(successRes, 'successRes')

				} catch (e) {
					console.log('error', e)
					//TODO handle the exception
				}
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
