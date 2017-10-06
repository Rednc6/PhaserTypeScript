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
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            this.load.image('menuPage', 'Graphics/Menu/titlepage.jpg');
            this.load.image('menuTitle', 'Graphics/Menu/logo.png');
            this.load.audio('menuMusic', 'Sounds/title.mp3', true);
        };
        Preloader.prototype.create = function () {
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    }(Phaser.State));
    PhaserTypescript.Preloader = Preloader;
})(PhaserTypescript || (PhaserTypescript = {}));
//# sourceMappingURL=preloader.js.map