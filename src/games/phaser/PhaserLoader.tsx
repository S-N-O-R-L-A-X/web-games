import { useEffect } from "react";

interface PhaserLoaderProps {
	config: Phaser.Types.Core.GameConfig;
}

export default function PhaserLoader(props: PhaserLoaderProps) {
	const { config } = props;
	useEffect(() => {
		const initializeGame = () => {
			const game = new Phaser.Game(config);
		};

		// 使用setTimeout在组件挂载后等待一小段时间再创建游戏
		const timeoutId = setTimeout(initializeGame, 100);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return <div id={config.parent as string}></div>;
}