Simple way to hide code from server (for example, your page contains code you don't want clients seeing if
they used view page source)

Comments are added in the individual files, but for an outline:

1. Create js file that gets run in head. Head contains id. js file programmatically adds script with src pointing to the proprietary script. This makes the real script not visible in page's source code
2. In your real proprietary script, have all code minified
3. Only minified code is sent to client from server, real code is stored wherever you store source code for project.
