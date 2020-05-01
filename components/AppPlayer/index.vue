<template>
	<view class="app-player">
		<live-player :id="playerId" class="video" :src="liveUrl" @statechange="onStateChange" />
		<PlayerTools />
	</view>
</template>

<script>
	import PlayerTools from './PlayerTools.vue'
	export default {
		components: {
			PlayerTools
		},
		props: {
			liveUrl: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				playerId: `player_${Math.ceil(+new Date()*Math.random()) }`
			}
		},
		computed: {
			player() {
				return uni.createLivePlayerContext(this.playerId, this)
			}
		},
		destroyed() {
			this.stop()
		},
		methods: {
			onStateChange(e) {
				console.log(e, 'onStateChange')
			},
			play() {
				return this.player ? this.player.play() : Promise.reject('播放器没有加载！')
			},
			stop() {
				return this.player ? this.player.stop() : Promise.reject('播放器没有加载！')
			},
			pause() {
				return this.player ? this.player.pause() : Promise.reject('播放器没有加载！')
			},
			resume() {
				return this.player ? this.player.resume() : Promise.reject('播放器没有加载！')
			},
			requestFullScreen() {
				return this.player ? this.player.requestFullScreen() : Promise.reject('播放器没有加载！')
			},
			exitFullScreen() {
				return this.player ? this.player.requestFullScreen() : Promise.reject('播放器没有加载！')
			}
		}
	}
</script>

<style lang="scss">
	.app-player {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
