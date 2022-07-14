# 收货地址表单页面

> https://ke.youdao.com/wap/pay/address/list， 添加收货地址

## 预期

![image](https://ydschool-video.nosdn.127.net/1620620847895popo_2021-05-10++12-26-14.jpg)

地址选择器：

![image](https://ydschool-video.nosdn.127.net/1620620872060popo_2021-05-10++12-26-32.jpg)

## 场景 & 功能

场景：

1. 新建地址
2. 编辑地址

功能：

1. 渲染数据
2. 用户交互-修改数据
3. 点击按钮-提交数据

## 组件划分

1. 页头

2. 表单项：数据的渲染和修改，样式一致

   - 姓名
   - 手机号
   - 地址：点击展示 Picker
   - 详细地址
   - 设为默认地址
     > 受控组件

3. 数据提交：
   - 保存按钮

## 页面数据设计

```js
address: {
  id: '', // 地址id
  name: '', // 姓名
  mobile: '', // 手机号
  province: '', // 省
  city: '', // 市
  area: '', // 区
  address: '', // 详细地址
  default: true, // 是否为默认地址
},
isPickerShow: false, // 是否显示地址选择器弹层
```

---

## 地址选择器功能

1. 点击关闭 Picker
2. 全部选择完毕后关闭 Picker & 同步数据给父组件
3. 未全部选择，不通知父组件
4. 省市区 tab 手动/自动切换
5. 渲染对应 tab 的选项列表
6. 标记选中元素

## 地址选择器数据设计

props:

```js
{
  province: '', // 省
  city: '', // 市
  area: '', // 区
  handleAddressSelected: ({province, city, area}) => {} // 选择完成后的回调
  closePicker: () => {} // 关闭Picker
}
```

state：

```js
{
  cur: 'prov', // 当前
  options: string[], // 当前选中的tab的选项数据（省市区列表）
  // 选择过程中的UI数据
  province: '', // 省
  city: '', // 市
  area: '', // 区
}
```

static data：

```js
// 省列表
const provincesData = ['北京市','天津市', '河北省', ...]
// 市，键为省，值为省内的市列表
const citysData = {
  河北省: ['石家庄市', '唐山市', ...],
  ...
}
// 区，键为市，值为市内的市列表
const areasData = {
  唐山市: ['路南区', '路北区', ...],
  ...
}
```

## UI 渲染

- header： 标题 & closeIcon
- selectTab：省市区 tab 切换/显示
- selectContent：选项列表

## 收货地址页面交互与状态转移

isPickerShow：

- false -> true : 点击收货地址值的区域显示 Picker

## 地址选择器的交互与状态转移

props 相关：

1. 点击关闭 ： closePicker
   - isPickerShow：true
2. 地址全部选择完, handleAddreessSelected
   - isPickerShow：false
   - update: province、city、area

state 相关：

1. 点击 tab 切换省市区:handleSwitchAddress,
   - 更新 cur & options
2. 选中 option：handleSelect
   - 选中省：更新 cur & options，保存 province，重置 city、area
   - 选中市：更新 cur & options，保存 city，重置 area
   - 选中区：保存 area, 执行 handleAddreessSelected 通知父组件

---

## 姓名手机号

- 姓名： input
- 手机号： input

## 详细地址

- 多行文本：textarea
- 自适应内容大小：'react-autosize-textarea'

## 设为默认地址

- boolean
- 状态切换渲染不同的 icon

## 保存按钮

- UI： 抽离通用组件/cssClass
- 状态：是否可以点击
- 逻辑：
  - click 事件 handler
  - 手机号校验：正则
  - 地址/姓名校验: 是否有非法字符
  - 发送数据
  - 返回上一页等后续操作

## 总结

如何分解一个业务需求：

1. 分析功能
2. 划分组件
3. 设计数据状态
4. 交互 & 逻辑
5. 渲染 & UI 样式
6. 边界 & 细节 处理