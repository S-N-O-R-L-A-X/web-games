import Phaser from "phaser";
import { useEffect } from "react";

class Example extends Phaser.Scene {
	preload() {
		this.load.setBaseURL('https://labs.phaser.io');

		this.load.image('sky', 'assets/skies/space3.png');
		this.load.image('logo', 'assets/sprites/phaser3-logo.png');
		this.load.image('red', 'assets/particles/red.png');
	}

	create() {
		this.add.image(400, 300, 'sky');

		const particles = this.add.particles(0, 0, 'red', {
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: 'ADD'
		});

		const logo = this.physics.add.image(400, 100, 'logo');

		logo.setVelocity(100, 200);
		logo.setBounce(1, 1);
		logo.setCollideWorldBounds(true);

		particles.startFollow(logo);
	}
}
const HelloWorld = () => {
  useEffect(() => {
    const initializeGame = () => {
      const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: Example,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 }
          }
        },
				parent: "hello-world-container"
      };
      const game = new Phaser.Game(config);
    };

    // 使用setTimeout在组件挂载后等待一小段时间再创建游戏
    const timeoutId = setTimeout(initializeGame, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div id="hello-world-container"></div>;
};

export default HelloWorld;