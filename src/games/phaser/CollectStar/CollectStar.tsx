import PhaserLoader from "../PhaserLoader";
import Phaser from "phaser";

class Scene1 extends Phaser.Scene {
  preload() {
    this.load.setBaseURL('./public/games/football/');

    this.load.image('bg', 'background.jpg');
    this.load.image('football', "football.jpg")
  }
  football: Phaser.Types.Physics.Arcade.ImageWithDynamicBody | null;

  constructor() {
    super();
    this.football = null
  }

  create() {
    this.add.image(20, 20, "bg").setOrigin(0, 0);
    // const platforms = this.physics.add.staticGroup();
    // platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.football = this.physics.add.image(10, 10, 'football');
    this.football.setBounce(0.2);
    this.football.setCollideWorldBounds(true);
  }

  update() {
    const cursors = this.input.keyboard!.createCursorKeys();
    if (cursors.left.isDown) {
      this.football!.setVelocityX(-160);
    }
    else if (cursors.right.isDown) {
      this.football!.setVelocityX(160);
    }
    else {
      this.football!.setVelocityX(0);
    }

    if (cursors.down.isDown) {
      this.football!.setVelocityY(330);
    }
    else if (cursors.up.isDown) {
      this.football!.setVelocityY(-330);
    }
  }
}


export default function CollectStar() {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Scene1,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 }
      }
    },
    parent: "collect-football-container"
  };
  return <PhaserLoader config={config} />
}