import { memo, useRef } from 'react'
import s from './Input.module.css'

const Input = ({ submitSearch, fetchSuggest, showHistory, inputVal, setInputVal }) => {
  const inputEl = useRef(null) // 输入框元素

  // 输入框回车确认搜索（不触发onchange）
  const searchSubmit = (e) => {
    if (e.keyCode !== 13 || !inputEl?.current) return
    console.log('searchSubmit')
    const event = e || window.event
    event.preventDefault()
    fetchSuggest.cancel() // 取消等待的搜索建议请求
    const filteredVal = inputEl.current.value.trim()
    // kw空值
    if (!filteredVal) {
      setInputVal('') // 清空空格
      return false
    }
    submitSearch(filteredVal) // 提交查询字段
    inputEl.current.blur() // 收起键盘
    return false // 禁止按回车表单自动提交
  }

  // 输入框输入中
  const handleChange = () => {
    const searchVal = inputEl.current.value
    setInputVal(searchVal) // 受控value
    const trimVal = searchVal.trim()
    if (!trimVal) {
      fetchSuggest.cancel() // 取消等待的搜索建议请求
      // 字符为空展示历史
      showHistory()
      return false
    }
    // 字符非空搜索建议
    if (inputVal !== trimVal) {
      fetchSuggest(trimVal)
    }
  }

  const clearInput = () => {
    fetchSuggest.cancel() // 取消等待的搜索建议请求
    showHistory()
    setInputVal('')
    inputEl.current.focus()
  }

  return (
    <div className={s.container}>
      <div className={`${s.formCont} border-b-1px ${inputVal ? '' : s.empty}`}>
        {/* 让软键盘显示搜索按钮 */}
        <form action="">
          <input
            id="searchInputEle"
            type="search"
            className={s.search}
            placeholder={' 输入搜索内容'}
            value={inputVal}
            onChange={handleChange}
            ref={inputEl}
            onKeyUp={searchSubmit}
            onClick={() => {
              inputEl.current.focus()
            }}
          />
          {/* 禁止按回车表单自动提交：如果表单中含有多个单行输入框，按Enter键时不会自动提交 */}
          <input type="text" name="notautosubmit" style={{ display: 'none' }} />
        </form>
        {/* 当输入框不为空的时候展示自定义清空按钮*/}
        {inputVal ? <button onClick={clearInput} className={s.clean} /> : null}
      </div>
    </div>
  )
}

export default memo(Input)
