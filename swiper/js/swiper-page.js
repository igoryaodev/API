function swiper() {
  // if(!window || !document) return
  var doc = document,
      timer,
      duration = 1000,
      startTime = 0,
      T = 0,
      startX = 0,
      startY = 0,
      _X = 0,     // X轴移动距离
      _Y = 0,
      X = 0,      // X轴绝对距离
      Y = 0,
      offsetOld = 0,
      offset = 0,  //偏移距离

      _deviceWidth = window.outerWidth, // 设备屏幕宽度
      _swiper = doc.querySelectorAll('.swiper'),
      _length =  _swiper.length || 0,

      swiper = {};
      swiper.__proto__ = {
        _timer: (ele, swing) => {
          var i = 0, length = ele.childElementCount
          timer = setInterval(() => {
            if(++i >= Number(length)) {
              if(swing) 
                i = -(Number(length) - 2) // 来回轮播
              else
                i = 0
            }
            swiper._autoplay(ele, i, swing)
          }, 2000)
        },
        _autoplay: (ele, i, swing) => { // 自动轮播
          if(Number(i) < 0 && swing)
            ele.style['transform'] = `translate3d(${i*100}vw, 0px, 0px)`
          else
            ele.style['transform'] = `translate3d(-${i*100}vw, 0px, 0px)`
          ele.style['transition-duration'] = '1000ms'
        },
        _click: (ele, swing) => {
          console.log('click')
          ele.addEventListener('click', () => { // 
            if(timer) clearInterval(timer) 
          }, null)

        },
        _touchStart: (ele) => { // 触摸
          ele.addEventListener('touchstart', (e) => { //
            console.log(1)
            const { timeStamp } = e
            const { pageX, pageY } = e.touches[0]
            startX =  pageX
            startY =  pageY
            startTime = timeStamp
          }, null)
        },
        _touchMove: (ele) => { // 触摸移动
          ele.addEventListener('touchmove', (e) => { // 
            console.log(2)

            const { timeStamp } = e
            const { pageX, pageY } = e.touches[0]
            _X = pageX - startX
            _Y = pageY - startY
            offset = offsetOld + _X
            duration = 0
            T = timeStamp - startTime
            swiper._transition(ele)

            console.log(2222)
          }, null)

        },
        _touchEnd: (ele) => { // 触摸结束

          ele.addEventListener('touchend', (e) => {
            console.log(3)
            
            const { timeStamp } = e
            const { pageX, pageY } = e.changedTouches[0]
            const _sliderwidth = _deviceWidth * (ele.childElementCount - 1)
            _X = pageX - startX
            _Y = pageY - startY
            T = timeStamp - startTime

            if(_X < 0){
              if(Math.abs(offsetOld) < _sliderwidth)
                offset = offsetOld - _deviceWidth
            } else {
              if(!offsetOld == 0)
                offset = offsetOld + _deviceWidth
            }
            
            offsetOld = offset
            duration = 1000
            

            swiper._transition(ele)

            // ele.removeEventListener()
          }, null)

        },
        _resize: (ele) => { // 容器尺寸
          let length = ele.childElementCount
          ele.style.width = _deviceWidth * Number(length) + 'px'
        },
        _changeClass: (ele) => {
          let _class = ele.getAttribute('class')
          if(_class && _class.match(/ active/))
            ele.setAttribute('class', _class.replace(/ active/, ''))
          else
            ele.setAttribute('class', _class + ' active')
        },
        _transition: (ele) => {
          
          ele.style['transform'] = `translate3d(${offset}px, 0px, 0px)`
          ele.style['transition-duration'] = `${duration}ms`
          setTimeout(() => {
            ele.style['transition-duration'] = `0ms`
          }, 1000)
          
        },//移动变换
        _dots: (ele) => {

        },      //

      }

  if(!_length) return
  for(let i = 0; i < _length; i++) {
    let ele = _swiper[i]
    if(!ele || !ele.tagName) break;
    swiper._resize(ele)
    swiper._changeClass(ele)
    swiper._touchStart(ele)
    // swiper._timer(ele, true)
    // swiper._click(ele, true)
    swiper._touchMove(ele)
    swiper._touchEnd(ele)
    //style
    // ele.style.width = 
    // 
  }
  
  




  
 }

document.onReady = function() {
  new swiper()
}