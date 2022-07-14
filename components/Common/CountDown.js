import React from 'react'

import s from './CountDown.module.css'

/**
 * 时间格式化
 * @param {number} ms 剩余倒计时的时间，单位ms
 * @return {Array} ['hour:min:sec', 'day']
 */
const formatCountdown = (ms) => {
  if (ms < 0) return ['00:00:00']
  const t = ms / 1000
  let sec = parseInt(t % 60, 10)
  let m = parseInt((t / 60) % 60, 10)
  const ho = parseInt(t / 60 / 60, 10)
  let h = parseInt(ho % 24, 10)
  const d = parseInt(ho / 24, 10)

  sec = sec >= 10 ? sec : `0${sec}`
  m = m >= 10 ? m : `0${m}`
  h = h >= 10 ? h : `0${h}`
  return d === 0 ? [`${h}:${m}:${sec}`] : [`${h}:${m}:${sec}`, `${d}`]
}

/**
 * 准确的倒计时
 * props：
 *   end： 终点时间
 *   onEnd： 结束回调
 */

class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curTimeStamp: new Date().getTime(),
    }
    this.timer = null
  }

  componentDidMount() {
    // 每次 new 一个系统时间，解决 setTimeout 不准确的问题
    // setState 触发组件更新渲染
    if (!this.timer) {
      this.timer = window.setInterval(() => {
        this.setState({
          curTimeStamp: new Date().getTime(),
        })
      }, 500)
    }
  }

  componentDidUpdate() {
    const { end, onEnd } = this.props
    const { curTimeStamp } = this.state
    // 每次渲染结束后，如果当前时间 > 结束时间，那么清timer，执行回调函数
    if (end - curTimeStamp < 0 && this.timer) {
      window.clearInterval(this.timer)
      this.timer = null
      onEnd()
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
    this.timer = null
  }

  render() {
    const { end } = this.props
    const { curTimeStamp } = this.state
    // 计算剩余时间
    const countDownArr = formatCountdown(end - curTimeStamp)
    return (
      <span>
        {countDownArr.length > 1 ? (
          <span>
            <span className={s.warningColor}>{countDownArr[1]}</span>天
          </span>
        ) : null}
        <span className={s.warningColor} suppressHydrationWarning>
          {countDownArr[0]}
        </span>
      </span>
    )
  }
}

export default CountDown
