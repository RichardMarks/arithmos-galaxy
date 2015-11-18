/* jshint strict: true */
/*
 * Arithmos Galaxy
 * A simple educational HTML5 game
 *
 * Copyright (c) 2015, Richard Marks <ccpsceo@gmail.com>
 * Released under the MIT License (MIT)
 */
(function (createjs) {
    'use strict';

    // primary imports
    var Stage = createjs.Stage,
        Shape = createjs.Shape,
        Bitmap = createjs.Bitmap,
        Sound = createjs.Sound,
        Ticker = createjs.Ticker,
        Tween = createjs.Tween,
        
        // game classes will be exported into this object
        // during debugging, this game object will be
        // exported to the window for runtime inspection
        game = {};
    
    // functions
    (function () {
        
    }());
    
    // classes
    (function () {
        
        var DevSplashScreen,
            PressStartScreen,
            MissionSelectScreen,
            MissionScreen,
            MissionClearedScreen,
            MissionFailedScreen,
            GameCompleteScreen,
            CreditsScreen;
        
        DevSplashScreen = (function () {}());
        PressStartScreen = (function () {}());
        MissionSelectScreen = (function () {}());
        MissionScreen = (function () {}());
        MissionFailedScreen = (function () {}());
        MissionClearedScreen = (function () {}());
        GameCompleteScreen = (function () {}());
        CreditsScreen = (function () {}());
            
            // export game object classes
            game.objects = {};
            
            // export game screen classes
            game.screens = {};
    }());
    
    // exports
    
    // startup
    function main() {
        
    }
    main();
}(window.createjs || {}));