module PhaserTypescript {

    export class Preloader extends Phaser.State {

        preload() {

            this.load.image('menuPage', 'Graphics/Menu/titlepage.jpg');
            this.load.image('menuTitle', 'Graphics/Menu/logo.png');
            this.load.audio('menuMusic', 'Sounds/title.mp3', true);
        }

        create() {

            this.game.state.start('MainMenu', true, false);
        }

    }

}