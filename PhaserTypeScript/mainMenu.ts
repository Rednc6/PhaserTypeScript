module PhaserTypescript {

    export class MainMenu extends Phaser.State {

        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() {

            this.background = this.add.sprite(0, 0, 'menuPage');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'menuTitle');
            this.logo.anchor.setTo(0.5, 0.5);
        }

        
        startGame() {

        }

    }

}