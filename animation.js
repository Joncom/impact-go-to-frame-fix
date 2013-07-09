/* Fix for animation.gotoFrame(f) which sometimes
 * does not immediately select the argument frame.
 *
 * Example Problem:
 *
 * If
 *      this.frameTime == 0.03, f == 11
 * Then
 *      (0.03 * -11) is passed to this.timer.set()
 *
 * In reality:
 *      (0.03 * -11) == -0.33
 * In JavaScript:
 *      (0.03 * -11) == -0.32999999999999996
 *
 * Therefor we round.
 */
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