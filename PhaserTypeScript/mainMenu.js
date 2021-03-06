var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PhaserTypescript;
(function (PhaserTypescript) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.create = function () {
            this.background = this.add.sprite(0, 0, 'menuPage');
            this.background.alpha = 0;
            this.logo = this.add.sprite(this.world.centerX, -300, 'menuTitle');
            this.logo.anchor.setTo(0.5, 0.5);
        };
        MainMenu.prototype.startGame = function () {
        };
        return MainMenu;
    }(Phaser.State));
    PhaserTypescript.MainMenu = MainMenu;
})(PhaserTypescript || (PhaserTypescript = {}));
//# sourceMappingURL=mainMenu.js.map