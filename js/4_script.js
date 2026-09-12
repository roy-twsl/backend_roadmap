// ==========================================
// Strict Mode - Educational File
// Based on: https://fa.javascript.info/strict-mode
// ==========================================

// ------------------------------------------
// What is Strict Mode?
// ------------------------------------------
// For a long time, JavaScript was developed without compatibility issues.
// New features were added without changing old ones.
// But if the creators made a design mistake, it stayed forever.
// In 2009, ECMAScript 5 (ES5) introduced new features and fixes.
// To keep old code working, most changes were disabled by default.
// To enable them, we use "use strict".

// ------------------------------------------
// "use strict"
// ------------------------------------------
// The directive "use strict" or 'use strict' looks like a string.
// When placed at the top of a script, the whole script works in modern mode.

"use strict";

// We can also put "use strict" at the beginning of most functions
// to apply modern rules only inside that function.
// But usually it is used for the whole script.

// ------------------------------------------
// Must be at the top
// ------------------------------------------
// It must be at the very beginning of the script, otherwise it won't work.
// Strict mode is NOT enabled here:

// alert("Code");  // ignored
// "use strict";   // not activated

// "use strict";   // only comments can be above it

// ------------------------------------------
// No way to cancel
// ------------------------------------------
// There is no directive like "no use strict" to tell the engine to work the old way.
// Once we use "use strict", there is no going back.

// ------------------------------------------
// Browser Console
// ------------------------------------------
// The browser console does NOT use "use strict" by default.
// Sometimes this gives wrong results when "use strict" makes a difference.
// Even using Shift+Enter to enter "use strict" does not work.
// A reliable solution is to wrap your code like this:

(function() {
    'use strict';
    // ... your code ...
})();

// ------------------------------------------
// Should we use "use strict"?
// ------------------------------------------
// Modern JavaScript supports "classes" and "modules"
// which automatically enable "use strict".
// So we don't need to add "use strict" if we use them.
// For now, "use strict" is a guest at the top of your script.
// Later, when your code is all classes and modules, you can remove it.

// ------------------------------------------
// End of Educational File
// ------------------------------------------