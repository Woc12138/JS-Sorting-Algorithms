// 创建列表类
export default class ArrayList {
  constructor() {
    // 属性
    this.array = []
  }

  // 将数据插入到数组中的方法
  insert(item) {
    this.array.push(item)
  }

  // toString
  toString() {
    return this.array.join('-')
  }

  // swap(m, n) 交换位置
  swap(m, n) {
    let temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  // bubbleSort() 冒泡排序
  bubbleSort() {
    // 1.获取数组的长度
    let length = this.array.length

    // 2.外层循环，反向循环, 因此次数越来越少
    for (let i = length-1; i > 0; i--) {

      // 3.内层循环，根据i的次数, 比较循环到i位置
      for (let j = 0; j < i; j++) {
        console.log(j, j+1)
        // 4.如果j位置比j+1位置的数据大, 那么就交换
        if (this.array[j] > this.array[j+1]) {
          // 交换
          this.swap(j, j+1)
        }
      }
    }
  }

  // 选择排序 selectSort()
  selectSort() {
    // 1.获取数组长度
    let length = this.array.length

    // 2.外层循环：从0位置开始取index数据，即每轮的第一个数据，依次遍历到length-2的位置
    for (let i = 0; i < length-1; i++) {
      let min = i // 定义一个min用于记录最小值的位置

      // 3.内层循环：从i+1位置开始，和i位置的数据进行比较，直到length-1数据项
      for (let j = i+1; j < length; j++) {
        if (this.array[min] > this.array[j]) {
          // 4.遇到比当前的值更小的值，就记录这个更小值的位置
          min = j
        }
      }
      // 5.每轮比较完成后都交换取得的最小的值和index的值
      this.swap(min, i)
    }
  }

  // insertSort() 插入排序
  insertSort() {
    // 1.获取数组的长度
    let length = this.array.length

    // 2.外层循环：从第1个位置开始获取数据，向前面局部有序进行插入
    for (let i = 1; i < length; i++) {
      let j = i // j必须为i，不能为i-1，因为不管比较起来大还是小，都需要把temp放在j位置，当temp不需要移动的时候就放在原地
      let temp = this.array[i] // temp前面的数据大小都是已经排序好的

      // 3.内层循环：获取i位置的元素，和前面的数据一次进行比较，因为内层循环不确定循环的次数（不知道插入到哪个位置停）, 所以使用while循环
      while (this.array[j-1] > temp && j >= 1) { // j-1>=0
        this.array[j] = this.array[j-1]
        j--
      }

      // 4.将temp放置在j位置
      this.array[j] = temp
    }
  }

  // shellSort() 希尔排序
  shellSort() {
    // 1.获取数组长度
    let length = this.array.length

    // 2.初始化的增量
    let gap = Math.floor(length / 2)

    // 3.while循环（gap不断减小）
    while (gap >=1) {

      // 4.以gap为间隔进行分组，对分组进行插入排序
      for (let i = gap; i < length; i++) {
        let j = i // j必须为i，不能为i-1，因为不管比较起来大还是小，都需要把temp放在j位置，当temp不需要移动的时候就放在原地
        let temp = this.array[i] // temp前面的数据大小都是已经排序好的

        // 5.内层循环：获取i位置的元素，和前面的数据一次进行比较，因为内层循环不确定循环的次数（不知道插入到哪个位置停）, 所以使用while循环
        while (this.array[j-gap] > temp && j >= gap) { // j-gap>=0
          this.array[j] = this.array[j-gap]
          j -= gap
        }

        // 6.将temp放置在j位置
        this.array[j] = temp
      }
      // 间隔gap每次都除以2
      gap = Math.floor(gap / 2)
    }
  }

  // 快速排序 quickSort()
  // 1.选择枢纽：取中位数
  median(left, right) {
    // 1.取出中间的位置
    let center = Math.floor((left + right) / 2)

    // 2.判断大小并进行交换（将三个数俺从小到大排序）
    if (this.array[left] > this.array[center]) { // 如果最左边的数大于中间的数则交换位置
      this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) { // 如果最中间的数大于右边的数则交换位置
      this.swap(center, right)
    }
    if (this.array[left] > this.array[center]) { // 如果最左边的数大于中间的数则交换位置
      this.swap(left, center)
    }

    // 3.再将中位数和数组的倒数第二个位置交换，因为最后一个位置一定比枢纽的值大
    this.swap(center, right - 1)
    return this.array[right - 1]
  }

  // 2.快速排序 quickSort() 主函数，外部调用
  quickSort() {
    this.quickSortRec(0, this.array.length - 1)
  }

  // 3.quickSortRec() 递归调用的函数
  quickSortRec(left, right) {
    // 1.结束条件
    if (left >= right) return

    // 2.获取枢纽
    let pivot = this.median(left, right)

    // 3.定义变量，用于记录当前找到的位置
    let i = left
    let j = right - 1 // 因为i指向第一个值，肯定比枢纽小，所以让j指向本身，然后一起相对移动

    while (true) {
      // 4.开始循环，查找位置
      while (this.array[++i] < pivot) {} // ++i直接从left的后一个和right-1的前一个开始找
      while (this.array[--j] > pivot) {} // while循环里不需要任何操作，一直找，直到不符合条件就会跳出循环
      
      if (i < j) { // i < j说明两个指向还没有相遇过
        this.swap(i, j)
      } else { // 两个指向相遇了就跳出循环（也可能j<i，不指向同一个值）
        break
      }
    }

    // 5.将枢纽放在正确的位置
    this.swap(i, right - 1)

    // 6.分而治之：递归调用左边一组和右边一组
    this.quickSortRec(left, i - 1)
    this.quickSortRec(i + 1, right)
  }
}

