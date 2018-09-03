 /*
 * @document onReady
 */
// document && document instanceof Object ? 0 : document = {}
document.__proto__.onReady = function(){}
let timer = setInterval(() => {
  if(document && document.readyState === 'complete') return clearInterval(timer), document.onReady()
}, 100)