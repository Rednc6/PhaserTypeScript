var MainMenu = (function () {
    function MainMenu() {
    }
    MainMenu.prototype.preload = function () {
        this.game.load.image('menuPage', 'Graphics/Menu/titlepage.jpg');
        this.game.load.image('menuTitle', 'Graphics/menu/logo.png');
        this.game.load.audio('menuAudio', 'Sounds/title.mp3', true);
    };
    MainMenu.prototype.create = function (game) {
        var menuPage = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'menuPage');
        var menuTitle = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'menuTitle');
        this.sound = this.game.add.audio('menuAudio', 1, false);
        this.sound.play();
        menuTitle.anchor.setTo(0.5, 1.0);
        menuPage.anchor.setTo(0.5, 0.5);
    };
    return MainMenu;
}());
//# sourceMappingURL=mainMenu.js.map