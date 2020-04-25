<template>
	<view class="navbar">
		<i class="iconfont back">&#xe641;</i>
		<image class="logo" src="../../static/icon.jpg" mode="aspectFit"></image>
		<view class="info">
			<text class="info-title">印上服饰</text>
			<text class="info-remark">1078观看</text>
		</view>
		<button class="btn" type="warn">关注</button>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				default: function() {
					return {}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.navbar {
		position: fixed;
		top: var(--status-bar-height);
		left: 20upx;
		height: 80upx;
		display: flex;
		align-items: center;
		background: rgba(0, 0, 0, 0.35);
		border-radius: 40upx;
		box-sizing: border-box;
		border: 1upx solid rgba(255, 255, 255, 0.35);
		z-index: 9;

		.back {
			position: relative;
			margin: 0;
			padding: 20upx 30upx;
			font-size: 32upx;
			color: #fff;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				right: 0;
				height: 60upx;
				margin-top: -30upx;
				border-left: 2upx solid rgba(255, 255, 255, 0.25);
				transform: scaleY(0.5);
			}
		}

		.logo {
			margin-left: 20upx;
			width: 60upx;
			height: 60upx;
			border-radius: 30upx;
		}

		.info {
			margin-left: 20upx;
			max-width: 160upx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.btn {
			margin: 0 10upx 0 20upx;
			width: 100upx;
			height: 60upx;
			padding: 0;
			line-height: 60upx;
			font-size: 30upx;
			color: $uni-color-error;
			background-color: #fff;
			border-radius: 30upx;

			&::after {
				border-radius: 90upx;
			}
		}
	}

	.info {
		display: flex;
		flex-direction: column;

		&-title {
			font-size: 30upx;
			color: #fff;
		}

		&-remark {
			font-size: 20upx;
			color: #fff;
		}
	}
</style>
