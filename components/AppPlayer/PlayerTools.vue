<template>
	<view class="player-tools">
		<view class="goods">
			<i class="iconfont">&#xe611;</i>
			<text class="input">聊点什么吧</text>
		</view>
		<view class="player-tools-btn">
			<i class="iconfont">&#xe610;</i>
		</view>
		<view class="player-tools-btn">
			<i class="iconfont">&#xe711;</i>
		</view>
		<view class="player-tools-btn">
			<text class="tag">分享送劵</text>
			<i class="iconfont">&#xe637;</i>
		</view>
		<view class="player-tools-btn">
			<text class="tag">3.8w</text>
			<i class="iconfont">&#xe621;</i>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.player-tools {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 30upx 20upx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;

		.goods {
			display: flex;
			align-items: flex-end;

			.iconfont {
				color: $uni-color-error;
				font-size: 56upx;
			}

			.input {
				margin-left: 20upx;
				padding: 12upx 0;
				font-size: 24upx;
				color: #fff;
				border-bottom: 1upx solid rgba(255, 255, 255, 0.5);
			}
		}



		&-btn {
			font-size: 40upx;
			color: #fff;
			display: flex;
			flex-direction: column;
			align-items: center;

			.tag {
				margin-bottom: 6upx;
				padding: 4upx 6upx;
				font-size: 20upx;
				color: #fff;
				background-color: $uni-color-error;
				border-radius: 6upx;
			}
		}
	}
</style>
