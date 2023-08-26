void function() {
    Scene_Boot.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        this.checkPlayerLocation();

        // 檢查存檔1是否存在
        if (DataManager.isThisGameFile(1)) {
            // 載入存檔1的遊戲狀態
            DataManager.loadGame(1);
        } else {
            // 開始新遊戲
            DataManager.setupNewGame();
        }

        SceneManager.goto(Scene_Map);
    };
}();