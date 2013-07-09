Impact gotoFrame Fix
==========

#####Fix for `ig.Animation.gotoFrame` which sometimes does not immediately select the argument frame.#####

#### Example Problem ####

```
// If
this.frameTime == 0.03, f == 11

// Then
(0.03 * -11) // will be passed to this.timer.set()

// In reality:
(0.03 * -11) == -0.33

// However, in JavaScript:
(0.03 * -11) == -0.32999999999999996
```
Therefor we must round!