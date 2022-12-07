Simple way to hide code from page's source code (for example, your page contains code you don't want clients seeing if they used view page source).

Comments are added in the individual files, but for an outline...

1. Create js file (hiddenHead) that gets run in head of redirect (redirect.html). Head contains id. hiddenHead js file programmatically adds script with src pointing to the proprietary script. This makes the real script not visible in page's source code
2. In your real proprietary.js script, have all code minified: https://codebeautify.org/minify-js. Code minified cannot be unminified, and would have to be looked at and reverse engineered
3. Change script your hiddenHead points to to be the minified version (proprietary.min.js). Remove proprietary.js from the server so it is not accessible, keeping a backup whever you store project code.
