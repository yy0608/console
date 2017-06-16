window.log = console.log = (function (originFunc) {
  return function () {
    if (window.consoleParams && window.consoleParams.hideLog) return // 生产环境不显示log
    let showType
    let tempStr
    let resArgs
    let backgroundUrl
    let backgroundUrlArr = [
      'http://img.soogif.com/oTaaBm2f12ro2oHYt8MXO7ucTZ9LFDff.gif_s400x0',
      'http://i687.photobucket.com/albums/vv237/4-one/4-1/ICON-4/nhj-ks-114.gif',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2431180542,3208247057&fm=21&gp=0.jpg',
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1389931060,999032458&fm=21&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2349925870,4158861286&fm=21&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1161084296,912592514&fm=21&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=568429576,1662716019&fm=21&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2891158369,689005317&fm=21&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=523690750,3468977024&fm=21&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1674189186,3858474740&fm=21&gp=0.jpg'
    ]
    let params = Array.prototype.slice.call(arguments) // 保存arguments数组，有push方法
    let color = window.consoleParams && window.consoleParams.color || '#58baff'
    let fontSize = window.consoleParams && window.consoleParams.fontSize || '12px'
    if (window.consoleParams && window.consoleParams.url) {
      backgroundUrl = window.consoleParams && window.consoleParams.url
    } else {
      backgroundUrl = backgroundUrlArr[parseInt(Math.floor(Math.random() * 10))]
    }
    let backgroundHeightSize = window.consoleParams && window.consoleParams.height || 50
    let iconStyle = 'line-height: ' + backgroundHeightSize + 'px; padding: ' + backgroundHeightSize / 2 + 'px 10px ' + backgroundHeightSize / 2 + 'px ' + backgroundHeightSize + 'px; color: ' + color + '; font-size: ' + fontSize + '; background: url(' + backgroundUrl + ') no-repeat left center; background-size: auto ' + backgroundHeightSize + 'px'
    let args = ['%c', iconStyle]
    if (!params.length) {
      args[0] = '%c ' + '(请输入要打印的值...)'
      resArgs = args
    } else {
      for (let p of params) {
        if (typeof p !== 'string' && typeof p !== 'number') {
          showType = 2
          break
        }
        showType = 1
      }
      if (showType === 1) {
        for (let i = 0; i < params.length; i++) {
          if (typeof params[i] === 'string') {
            params[i] = '"' + params[i] + '"'
          }
        }
        tempStr = params.join(' ')
        args[0] = '%c ' + tempStr
        resArgs = args
      } else {
        resArgs = args.concat(params)
      }
    }
    originFunc.apply(console, resArgs)
  }
})(console.log)
