// 导入列表类
import ArrayList from './arrayList'

// 初始化数据项
let list = new ArrayList()

list.insert(3)
list.insert(6)
list.insert(4)
list.insert(2)
list.insert(11)
list.insert(10)
list.insert(5)
console.log(list) // [3, 6, 4, 2, 11, 10, 5]

// 冒泡排序 bubbleSort() 测试
// list.bubbleSort()
// console.log(list) // [2, 3, 4, 5, 6, 10, 11]

// 选择排序 selectSort() 测试
// list.selectSort()
// console.log(list) // [2, 3, 4, 5, 6, 10, 11]

// 插入排序 insertSort() 测试
// list.insertSort()
// console.log(list) // [2, 3, 4, 5, 6, 10, 11]

// 希尔排序 shellSort() 测试
// list.insertSort()
// console.log(list) // [2, 3, 4, 5, 6, 10, 11]

// 快速排序 quickSort() 测试
// list.quickSort()
// console.log(list) // [2, 3, 4, 5, 6, 10, 11]

// 归并排序 mergeSort() 测试
// list.mergeSort()
// console.log(list) // [2, 3, 4, 5, 6, 10, 11]

// 堆排序 heapSort() 测试
list.heapSort()
console.log(list) // [2, 3, 4, 5, 6, 10, 11]