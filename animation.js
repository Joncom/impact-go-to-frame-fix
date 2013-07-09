ig.module('plugins.go-to-frame-fix.animation')
.requires('impact.animation')
.defines(function(){ "use strict";
    ig.Animation.inject({
        gotoFrame: function( f ) {
            var seconds = (this.frameTime * -f).round(6);
            this.timer.set(seconds);
            this.update();
        },
    });
});