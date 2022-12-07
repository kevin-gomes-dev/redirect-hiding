// Immediately ran when loaded
// ORIGINAL CODE
// (function init() {
//   // Anything to run here that's proprietary

//   // Recursively adds numbers!
//   function recurseAdder(...nums) {
//     if (nums.length <= 1) return nums[0];
//     return nums.pop() + recurseAdder(...nums);
//   }
//   console.log(`5 + 4 + 3 is ${recurseAdder(5,4,3)}`);
// })();

// REPLACE above with minified version and (optionally) rename file (this proprietary.js file shouldn't exist, only here for explanation)
// Minified using: https://codebeautify.org/minify-js
//console.log(`5 + 4 + 3 is ${function n(...o){return o.length<=1?o[0]:o.pop()+n(...o)}(5,4,3)}`);