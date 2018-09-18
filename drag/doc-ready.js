document.__proto__.onReady = function() {}
const timer = setInterval(() => {
  if(document.readyState === 'complete'){
    document.onReady()
    clearInterval(timer)
  }
}, 100)