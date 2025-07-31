const data = [
  {
    id: 189,
    title: "轮转数组 rotate-array",
    category: "普通数组",
    content: `
给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。



示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
 

提示：

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

进阶：

尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
    `,
    difficulty: "中等",
    hint: `
思路一：常规
    - 新建一个数组，根据新的下标复制元素，然后把新数组的元素依次复制到旧数组
思路二：翻转数组
    - 数组长度为 n ，数组轮转本质上是将数组后 k mod n 项移到开头
    - 将数组整体翻转，就能把后 k mod n 项移到开头
    - 然后将翻转后的数组的[0, (k mod n) - 1], [k mod n, n - 1] 子数组分别翻转即可
`,
    link: "https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 238,
    title: "除自身以外数组的乘积 product-of-array-except-self",
    category: "普通数组",
    content: `
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

 

示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 

提示：

2 <= nums.length <= 105
-30 <= nums[i] <= 30
输入 保证 数组 answer[i] 在  32 位 整数范围内
 

进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）
    `,
    difficulty: "中等",
    hint: `
假如nums为[1,2,3,4]，那么answer的值分别为[(2,3,4),(1,3,4),(1,2,4),(1,2,3)]
如果把i当前值相乘的时候看做是1那么就有如下样式
 1, 2, 3, 4
 1, 1, 3, 4
 1, 2, 1, 4
 1, 2, 3, 1
他的对角线1将他们分割成了两个三角形，对于answer的元素，
我们可以先计算一个三角形每行的乘积，然后再去计算另外一个三角形每行的乘积，
然后各行相乘，就是answer每个对应的元素
`,
    link: "https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 73,
    title: "矩阵置零 set-matrix-zeroes",
    category: "矩阵",
    content: `
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

 

示例 1：

输入：matrix = [
                [1,1,1],
                [1,0,1],
                [1,1,1]
              ]
输出：[
        [1,0,1],
        [0,0,0],
        [1,0,1]
      ]


示例 2：

输入：matrix = [
                [0,1,2,0],
                [3,4,5,2],
                [1,3,1,5]
              ]
输出：[
        [0,0,0,0],
        [0,4,5,0],
        [0,3,1,0]
      ]
 

提示：

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

进阶：

一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？
    `,
    difficulty: "中等",
    hint: `
思路一：常规
    - 第一次遍历记录0元素所在的行和列
    - 第二次遍历将对应元素置零
思路二：
    - 使用矩阵的第一行和第一列记录对应行和列是否存在0元素
    - 使用一个变量记录第一列本身是否存在0元素 （[0][0]位置的元素即可表示第一行本身是否存在0元素）
    - 倒序遍历，将对应元素置零（防止提前改变第一行和第一列元素）
    - 详细思路：
      - 第一次遍历：打标记
        - 判断每行的第一个元素是否为0，若为0则将标记变量设为true（表示后续需要将第一列置零）
        - 判断每一行的其他元素是否为0，若为0则将对应第一行和第一列中的元素置零
      - 第二次遍历：置零（倒序）
        - 如果对应的第一行或第一列元素为0，则置零
        - 如果标记变量为true，则将第一列元素置零
`,
    link: "https://leetcode.cn/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 54,
    title: "螺旋矩阵 spiral-matrix",
    category: "矩阵",
    content: `
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。



示例 1：

输入：matrix = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
              ]
输出：[1,2,3,6,9,8,7,4,5]

示例 2：

输入：matrix = [
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12]
              ]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
    `,
    difficulty: "中等",
    hint: `
- 使用 l, r, t, b 四个变量存储当前边界的位置
- 按照螺旋顺序 l -> r, t -> b, r -> l, b -> t 不断遍历
- 遍历到边界后改变对应边界变量的值（收缩边界）
`,
    link: "https://leetcode.cn/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 48,
    title: "旋转图像 rotate-image",
    category: "矩阵",
    content: `
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

 
示例 1：

输入：matrix = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
              ]
输出：[
        [7,4,1],
        [8,5,2],
        [9,6,3]
      ]

示例 2：

输入：matrix = [
                [5,1,9,11],
                [2,4,8,10],
                [13,3,6,7],
                [15,14,12,16]
              ]
输出：[
        [15,13,2,5],
        [14,3,4,1],
        [12,6,8,9],
        [16,7,10,11]
      ]


提示：

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
    `,
    difficulty: "中等",
    hint: `
思路一：常规
    - 使用辅助数组 tmp 复制原数组
    - matrix[j][n - i - 1] = tmp[i][j]
    - 不符合要求
思路二：先转置再每行倒序
    - 原地求转置的方法：
      - 如果是方阵：
        - 对于 i < j 的元素，交换 matrix[i][j] 和 matrix[j][i]
      - 如果不是方阵：
        - 通过补 0 形成方阵
`,
    link: "https://leetcode.cn/problems/rotate-image/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 240,
    title: "搜索二维矩阵 II search-a-2d-matrix-ii",
    category: "矩阵",
    content: `
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
 

示例 1：

输入：matrix = [
                [1,4,7,11,15],
                [2,5,8,12,19],
                [3,6,9,16,22],
                [10,13,14,17,24],
                [18,21,23,26,30]
              ], target = 5
输出：true

示例 2：

输入：matrix = [
                [1,4,7,11,15],
                [2,5,8,12,19],
                [3,6,9,16,22],
                [10,13,14,17,24],
                [18,21,23,26,30]
              ], target = 20
输出：false


提示：

m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
每行的所有元素从左到右升序排列
每列的所有元素从上到下升序排列
-109 <= target <= 109
    `,
    difficulty: "中等",
    hint: `
思路一：
    - 根据每行每列递增的条件遍历矩阵，超出范围时剪枝
思路二：
    - 遍历时对每行进行二分查找
`,
    link: "https://leetcode.cn/problems/search-a-2d-matrix-ii/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 160,
    title: "相交链表 intersection-of-two-linked-lists",
    category: "链表",
    content: `
给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。

图示两个链表在节点 c1 开始相交：

      a1 -> a2 -> c1 -> c2 -> c3
b1 -> b2 -> b3 -> c1 -> c2 -> c3

题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

自定义评测：

评测系统 的输入如下（你设计的程序 不适用 此输入）：

intersectVal - 相交的起始节点的值。如果不存在相交节点，这一值为 0
listA - 第一个链表
listB - 第二个链表
skipA - 在 listA 中（从头节点开始）跳到交叉节点的节点数
skipB - 在 listB 中（从头节点开始）跳到交叉节点的节点数
评测系统将根据这些输入创建链式数据结构，并将两个头节点 headA 和 headB 传递给你的程序。如果程序能够正确返回相交节点，那么你的解决方案将被 视作正确答案 。

示例 1：

输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。
 

示例 2：

输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。

示例 3：

输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：No intersection
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
 

提示：

listA 中节点数目为 m
listB 中节点数目为 n
1 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
如果 listA 和 listB 没有交点，intersectVal 为 0
如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]
 

进阶：你能否设计一个时间复杂度 O(m + n) 、仅用 O(1) 内存的解决方案？
    `,
    difficulty: "简单",
    hint: `
思路一：哈希表
    - 首先遍历第一个链表，使用哈希表记录出现的节点
    - 然后遍历第二个链表，通过查找哈希表得到第一个相同的节点
思路二：双指针
    - 两个指针分别指向两个列表的头节点，同时遍历
    - 遍历到尾部（即 node.next = null）时，指针指向另一个链表的头节点
    - 两指针第一次相遇时即为第一个相交节点
`,
    link: "https://leetcode.cn/problems/intersection-of-two-linked-lists/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 206,
    title: "反转链表 reverse-linked-list",
    category: "链表",
    content: `
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：

输入：head = [1,2]
输出：[2,1]

示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
 

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
    `,
    difficulty: "简单",
    hint: `
思路一：迭代（双指针）
    - 一个指针指向头节点 head
    - 另一个指针指向尾节点的后继（null），作为反转后的 dummy head 节点
    - 依次遍历
思路二：递归
    - 定义一个辅助函数 recur(cur, pre)，以 cur 为当前节点、pre 为已反转部分的头，返回以这两者为起点最终反转好的链表的头节点
    - 终止条件：当 cur 为空时，意味着我们已经越过原链表的最后一个节点，pre 正好指向全链表反转后的新头，直接返回
    - 推进递归：把下一个节点 cur.next 当作新的当前节点，把当前节点 cur 当作新的“已反转”部分的头，继续递归。这样一路向下，直到 cur 为 null，开始回溯
    - 回溯阶段反转指针
`,
    link: "https://leetcode.cn/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 234,
    title: "回文链表 palindrome-linked-list",
    category: "链表",
    content: `
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

 
示例 1：

输入：head = [1,2,2,1]
输出：true

示例 2：

输入：head = [1,2]
输出：false


提示：

链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9


进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
    `,
    difficulty: "简单",
    hint: `
思路一：常规
    - 将值复制到数组，使用头尾两个指针判断
思路二：快慢指针
    - 使用快慢指针找到中间节点
    - 翻转后半段链表
    - 使用两个指针判断回文
    - 恢复链表（可选）
`,
    link: "https://leetcode.cn/problems/palindrome-linked-list/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 141,
    title: "环形链表 linked-list-cycle",
    category: "链表",
    content: `
给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

 

示例 1：

3 -> 2 -> 0 -> -4
     ↑ <------- ↓

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：

1 -> 2
↑ <- ↓

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：

1

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 

提示：

链表中节点的数目范围是 [0, 104]
-105 <= Node.val <= 105
pos 为 -1 或者链表中的一个 有效索引 。
 

进阶：你能用 O(1)（即，常量）内存解决此问题吗？
    `,
    difficulty: "简单",
    hint: `
思路一：常规
    - 使用哈希表记录出现过的节点
思路二：快慢指针
    - 如果有环，那么快慢指针一定会在环中某处相遇
`,
    link: "https://leetcode.cn/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 142,
    title: "环形链表 II linked-list-cycle-ii",
    category: "链表",
    content: `
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。
 

示例 1：

3 -> 2 -> 0 -> -4
     ↑ <------- ↓

输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。

示例 2：

1 -> 2
↑ <- ↓

输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。

示例 3：

1

输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
 

提示：

链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
 

进阶：你是否可以使用 O(1) 空间解决此题？
    `,
    difficulty: "中等",
    hint: `
思路一：常规
    - 使用哈希表记录出现过的节点
思路二：快慢指针
    - 设链表在环入口前有 a 个节点（不计环入口节点），环中有 b 个节点，因此慢指针每次走到环入口时总路程为 a + mb 步
    - 如果有环，那么快慢指针一定会在环中某处相遇，此时：
      - 设慢指针走了 s 步，那么快指针走了 2s 步
      - 由于快指针比慢指针在环中多绕了 n 圈，因此 2s - s = nb，即 s = nb
      - 也就是说，慢指针此时走过的总路程等于 n 个环的周长
      - 我们只需要使慢指针再走 a 步，即可满足 a + mb 的形式，使慢指针走到环入口
      - 因此，可以令快指针回到原点并变为慢指针，两个慢指针同时移动，下一次相遇时刚好又走了 a 步，到底环入口
`,
    link: "https://leetcode.cn/problems/linked-list-cycle-ii/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 21,
    title: "合并两个有序链表 merge-two-sorted-lists",
    category: "链表",
    content: `
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：

输入：l1 = [], l2 = []
输出：[]

示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
    `,
    difficulty: "简单",
    hint: `
- 使用 dummyHead 节点
- 注意两链表长度不同的情况
`,
    link: "https://leetcode.cn/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 2,
    title: "两数相加 add-two-numbers",
    category: "链表",
    content: `
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 

提示：

每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零
    `,
    difficulty: "中等",
    hint: `
- 依次处理，注意进位和长度不相等的情况
`,
    link: "https://leetcode.cn/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 19,
    title: "删除链表的倒数第 N 个结点 remove-nth-node-from-end-of-list",
    category: "链表",
    content: `
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]

示例 2：

输入：head = [1], n = 1
输出：[]

示例 3：

输入：head = [1,2], n = 1
输出：[1]
 

提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

进阶：你能尝试使用一趟扫描实现吗？
    `,
    difficulty: "中等",
    hint: `
思路一：常规
    - 遍历链表得到总长度 L ，那么 L - n + 1 就是需要删除的元素
    - 再次遍历实现删除
      - 需要使用 dummyHead 节点，因为删除节点需要知道前驱节点，如果头节点就是需要删除的节点，那就需要 dummyHead 作为前驱节点
思路二：双指针
    - 使用 first, second 两个指针
    - second 初始位于 dummyHead ，first 比 second 领先 n 个节点
    - 同时遍历两个指针，当 first 位于最后一个节点时，second 刚好位于 倒数第 n 个节点的前驱节点
`,
    link: "https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 24,
    title: "两两交换链表中的节点 swap-nodes-in-pairs",
    category: "链表",
    content: `
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。



示例 1：

输入：head = [1,2,3,4]
输出：[2,1,4,3]

示例 2：

输入：head = []
输出：[]

示例 3：

输入：head = [1]
输出：[1]


提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
    `,
    difficulty: "中等",
    hint: `
思路一：递归
    - 拆解子问题：先把链表看成「前两节点」+「后面剩余部分」，只关心如何交换前两节点；剩余部分交给递归去做
    - 合并子结果：当前层交换完后，将递归返回的新头 swapPairs(newHead.next) 接回原来的第一个节点 head 之后
    - 递归终止条件：当链表为空或只剩一个节点时，无需交换，直接返回
思路二：迭代（空间更优）
    - 使用 dummyHead 节点，因为如果头节点需要和下一阶段交换，就需要头节点的前驱节点
    - 依次操作指针
    `,
    link: "https://leetcode.cn/problems/swap-nodes-in-pairs/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 138,
    title: "随机链表的复制 copy-list-with-random-pointer",
    category: "链表",
    content: `
给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。

构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。

例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。

返回复制链表的头节点。

用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：

val：一个表示 Node.val 的整数。
random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
你的代码 只 接受原链表的头节点 head 作为传入参数。



示例 1：

输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]

示例 2：

输入：head = [[1,1],[2,1]]
输出：[[1,1],[2,1]]

示例 3：

输入：head = [[3,null],[3,0],[3,null]]
输出：[[3,null],[3,0],[3,null]]
 

提示：

0 <= n <= 1000
-104 <= Node.val <= 104
Node.random 为 null 或指向链表中的节点。
    `,
    difficulty: "中等",
    hint: `
思路一：哈希表
    - 遍历链表，使用哈希表记录每一个节点的拷贝，其中键为旧节点，值为新创建的节点，只设置 val
    - 再次遍历，结合哈希表查找构建新节点的 next 和 random 指向
思路二：拼接+拆分（理论空间更优，但实际更慢且空间开销更大）
    - 1. 拼接
      - 设原链表为 node1 -> node2 -> ...
      - 构造新链表：node1 -> newNode1 -> node2 -> newNode2 -> ...
      - 若节点 cur 的 random 指向 cur.random，那么对应的新节点 cur.next 的 random 指向 cur.random.next
    - 2. 拆分
      - 使用指针 pre 和 cur 分别指向两个链表的头节点
      - 遍历执行 pre.next = pre.next.next 和 cur.next = cur.next.next 来拆分链表
    `,
    link: "https://leetcode.cn/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 148,
    title: "排序链表 sort-list",
    category: "链表",
    content: `
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

 

示例 1：

输入：head = [4,2,1,3]
输出：[1,2,3,4]

示例 2：

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105
 

进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
    `,
    difficulty: "中等",
    hint: `
- 题目要求时间空间复杂度分别为 O(nlogn) 和 O(1)，根据时间复杂度我们自然想到二分法，从而联想到归并排序
- 基于递归的归并排序在递归调用时具有 O(logn) 的空间复杂度，因此不能使用递归
- 因此考虑从底至顶直接合并：
    - 归并排序本质上时通过二分法得到链表最小单元，再依次向上合并
    - 每轮合并都有固定的操作长度 intv
      - 第一轮 intv = 1，第二轮 intv = 2, 第三轮 intv = 4...
      - 每轮结束后 intv *= 2，若 intv 大于数组长度则排序完成
    - 使用一个 dummyHead 节点，既可以在每轮合并后找到头节点，也可以在排序时辅助交换指针
    `,
    link: "https://leetcode.cn/problems/sort-list/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 146,
    title: "LRU 缓存 lru-cache",
    category: "链表",
    content: `
请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
 

提示：

1 <= capacity <= 3000
0 <= key <= 10000
0 <= value <= 105
最多调用 2 * 105 次 get 和 put
    `,
    difficulty: "中等",
    hint: `
思路一：双向链表+哈希表
    - 双向链表的尾部是即将被删除的节点
    - 当一个节点被访问后，就将它移动到头部
    - 使用 dummyHead 和 dummyTail 节点辅助移动和删除
      - 如何移动 node 节点到头部：
        - 先修改 node 前后节点的指针，相当于从链表中删除 node
        - 再修改 dummyHead，dummyHead.next 和 node 的指针，相当于添加到头部
    - 使用哈希表存储节点，便于查找
      - 键为节点的 key ，值为节点本身
    - 为什么使用双向链表？
      - 因为删除时需要用到前驱和后继节点
思路二：利用 JS 迭代器
    - JS 中 Map 是有序键值对的集合，也就是能记住插入的顺序
    - 当一个 key 被访问后，就将它从 map 中删除，然后重新 set ，这样它就来到了 map 最后
      - 这种情况下 map 最前面的元素才是要被删除的元素
    - 当容量超出后如何删除头部元素：
      - 调用 map.keys() 方法返回一个迭代器对象
      - 调用迭代器的 next() 方法返回一个实现了 IterableResult 接口的对象，即形如 { value: ..., done: ... } 的对象
      - value 属性就是要删除的 key
    `,
    link: "https://leetcode.cn/problems/lru-cache/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 94,
    title: "二叉树的中序遍历 binary-tree-inorder-traversal",
    category: "二叉树",
    content: `
给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。


示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2]

示例 2：

输入：root = []
输出：[]

示例 3：

输入：root = [1]
输出：[1]
 

提示：

树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100
 

进阶: 递归算法很简单，你可以通过迭代算法完成吗？
    `,
    difficulty: "简单",
    hint: `
中序遍历：左子树 - 根节点 - 右子树
思路一：递归（推荐）
    - 从根节点开始，依次递归左右子树
思路二：迭代
    - 递归中隐式维护了一个栈，迭代中需要将其模拟出来
    `,
    link: "https://leetcode.cn/problems/binary-tree-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 104,
    title: "二叉树的最大深度 maximum-depth-of-binary-tree",
    category: "二叉树",
    content: `
给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

 

示例 1：

   3
9     20
    15   7

输入：root = [3,9,20,null,null,15,7]
输出：3

示例 2：

输入：root = [1,null,2]
输出：2
    `,
    difficulty: "简单",
    hint: `
思路一：DFS（推荐）
    - 递归左右子树，最大深度 = 左子树深度和右子树深度的最大值 + 1
思路二：BFS
    - 每遍历一层，计数 + 1
    `,
    link: "https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 226,
    title: "翻转二叉树 invert-binary-tree",
    category: "二叉树",
    content: `
给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。


示例 1：

      4                    4
  2       7     =>     7       2  
1   3   6   9        9   6   3   1

输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

示例 2：

输入：root = [2,1,3]
输出：[2,3,1]

示例 3：

输入：root = []
输出：[]
 

提示：

树中节点数目范围在 [0, 100] 内
-100 <= Node.val <= 100
    `,
    difficulty: "简单",
    hint: `
- 递归左右子树，交换左右子树的位置
    `,
    link: "https://leetcode.cn/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 101,
    title: "对称二叉树 symmetric-tree",
    category: "二叉树",
    content: `
给你一个二叉树的根节点 root ， 检查它是否轴对称。


示例 1：

     1
  2     2
3   4 4   3

输入：root = [1,2,2,3,4,4,3]
输出：true

示例 2：

输入：root = [1,2,2,null,3,null,3]
输出：false


提示：

树中节点数目在范围 [1, 1000] 内
-100 <= Node.val <= 100
 

进阶：你可以运用递归和迭代两种方法解决这个问题吗？
    `,
    difficulty: "简单",
    hint: `
思路一：递归（推荐）
    - 递归左右子树，左子树的左子树和右子树的右子树比较，左子树的右子树和右子树的左子树比较
思路二：迭代
    - 层序遍历
    - 初始队列中添加两次根节点，此后每次遍历取出两个节点比较
    - 将他们的子节点按照相反顺序插入队列
    `,
    link: "https://leetcode.cn/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 543,
    title: "二叉树的直径 diameter-of-binary-tree",
    category: "二叉树",
    content: `
给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。

 

示例 1：

     1
  2    3
4   5

输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。

示例 2：

输入：root = [1,2]
输出：1
 

提示：

树中节点数目在范围 [1, 104] 内
-100 <= Node.val <= 100
    `,
    difficulty: "简单",
    hint: `
- 递归
- 递归时使用经过的节点数便于计算，最后的路径长度为经过的节点数 - 1
- 对于任一节点，以该节点为根节点的子树的最长路径（节点数）为左子树最大深度 + 右子树最大深度 + 1
- 使用递归遍历每个节点，计算以该节点为根节点的子树的最长路径
- 使用全局变量记录当前最长路径，递归过程中修改该变量
    `,
    link: "https://leetcode.cn/problems/diameter-of-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 102,
    title: "二叉树的层序遍历 binary-tree-level-order-traversal",
    category: "二叉树",
    content: `
给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。


示例 1：

   3
9    20
   15   7

输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]

示例 2：

输入：root = [1]
输出：[[1]]

示例 3：

输入：root = []
输出：[]


提示：

树中节点数目在范围 [0, 2000] 内
-1000 <= Node.val <= 1000
    `,
    difficulty: "中等",
    hint: `
思路一：迭代（BFS）
    - 使用队列
    - 首先将根节点入队，然后根据队列长度计算每层节点数，将当前层节点依次出队，添加到结果列表中，并将左右子节点入队
思路二：递归（DFS）（更快）
    - 在递归函数中使用 level 参数跟踪层级
    - 如果 level 等于结果列表的长度，说明需要在结果列表中添加一个新的列表
    - 递归左右子节点
    `,
    link: "https://leetcode.cn/problems/binary-tree-level-order-traversal/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 108,
    title:
      "将有序数组转换为二叉搜索树 convert-sorted-array-to-binary-search-tree",
    category: "二叉树",
    content: `
给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。

平衡二叉树 是指该树所有节点的左右子树的高度相差不超过 1。

示例 1：

      0
  -3    9
-10   5

输入：nums = [-10,-3,0,5,9]
输出：[0,-3,9,-10,null,5]
解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：

    0
-10   5
  -3   9

示例 2：

  1  或  1
3          3


输入：nums = [1,3]
输出：[3,1]
解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。
 

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 按 严格递增 顺序排列
    `,
    difficulty: "简单",
    hint: `
- 二叉搜索树中序遍历有序，因此输入数组实际上是二叉搜索树的中序遍历序列
- 为了使树尽可能平衡，每次选取数组中间的元素作为根节点
- 由于数组递增，因此每个子树中的元素在数组中一定连续
  - 因此可以使用下标 [left, right] 标记子树的范围
- 递归创建左右子树
    `,
    link: "https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 98,
    title: "验证二叉搜索树 validate-binary-search-tree",
    category: "二叉树",
    content: `
给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
 

示例 1：

  2
1   3

输入：root = [2,1,3]
输出：true

示例 2：

  5
1    4
   3   6

输入：root = [5,1,4,null,null,3,6]
输出：false
解释：根节点的值是 5 ，但是右子节点的值是 4 。
 

提示：

树中节点数目范围在[1, 104] 内
-231 <= Node.val <= 231 - 1
    `,
    difficulty: "中等",
    hint: `
利用 BST 的中序遍历（左 -> 中 -> 右）有序的性质，检查遍历结果是否严格递增
思路一：递归（DFS）
    - 使用一个变量 pre 记录上一次访问到的节点的值
    - 先递归左子树
    - 然后比较当前节点（即当前子树的根节点）的值和 pre 的值，若小于等于则不满足严格递增
    - 最后递归右子树
思路二：迭代（DFS）
    - 使用栈来模拟递归调用栈（参考 94. 二叉树的中序遍历）
    - 同样使用一个变量 pre 用于比较节点大小，检查是否严格递增
    `,
    link: "https://leetcode.cn/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 230,
    title: "二叉搜索树中第 K 小的元素 kth-smallest-element-in-a-bst",
    category: "二叉树",
    content: `
给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。


示例 1：

输入：root = [3,1,4,null,2], k = 1
输出：1

示例 2：

输入：root = [5,3,6,2,4,null,null,1], k = 3
输出：3
 

提示：

树中的节点数为 n 。
1 <= k <= n <= 104
0 <= Node.val <= 104


进阶：如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化算法？
    `,
    difficulty: "中等",
    hint: `
利用二叉搜索树中序遍历有序的性质
思路一：递归
    - 首先递归左子树
    - 然后处理当前根节点。在访问当前节点时，k 表示“还剩多少节点需要访问”
      - 若此时 k 为 0 ，说明当前节点是第 k 小的节点，提前返回
      - 递减 k 的值
      - 若此时 k 为 0 ，说明当前节点是第 k 小的节点，保存 k 的值
    - 最后递归右子树
进阶解法：待更新
    `,
    link: "https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 199,
    title: "二叉树的右视图 binary-tree-right-side-view",
    category: "二叉树",
    content: `
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 

示例 1：

输入：root = [1,2,3,null,5,null,4]

输出：[1,3,4]

解释：

  1
2    3
  5    4


示例 2：

输入：root = [1,2,3,4,null,null,null,5]

输出：[1,3,4,5]

解释：

      1
    2   3
  4
5

示例 3：

输入：root = [1,null,3]

输出：[1,3]

示例 4：

输入：root = []

输出：[]

 

提示:

二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100 
    `,
    difficulty: "中等",
    hint: `
- BFS
- 使用 levelSize 变量记录每层的宽度，当遍历到每层的最后一个时添加到结果
    `,
    link: "https://leetcode.cn/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 114,
    title: "二叉树展开为链表 flatten-binary-tree-to-linked-list",
    category: "二叉树",
    content: `
给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。
 

示例 1：

      1             1
  2     5     =>      2
3   4     6             3
                          4
                            5
                              6

输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]

示例 2：

输入：root = []
输出：[]

示例 3：

输入：root = [0]
输出：[0]
 

提示：

树中结点数在范围 [0, 2000] 内
-100 <= Node.val <= 100
 

进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？
    `,
    difficulty: "中等",
    hint: `
- 前序遍历访问各节点的顺序是根节点、左子树、右子树
- 如果一个节点没有左子节点
  - 则该节点不需要展开操作
- 如果一个节点有左子节点
  - 则左子树中最后一个节点被访问后，访问该节点的右子节点
  - 该节点左子树中最后一个节点是左子树中最右边的节点，将其作为前驱节点
  - 将当前节点的右子节点赋给前驱节点，然后将当前节点的左子节点赋给右子节点，然后将左子节点设为 null
  - 然后依次处理下一个节点（即右子树的根节点）
    `,
    link: "https://leetcode.cn/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 105,
    title:
      "从前序与中序遍历序列构造二叉树 construct-binary-tree-from-preorder-and-inorder-traversal",
    category: "二叉树",
    content: `
给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。


示例 1:

  3
9    20
   15  7

输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
输出: [3,9,20,null,null,15,7]
示例 2:

输入: preorder = [-1], inorder = [-1]
输出: [-1]
 

提示:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均 无重复 元素
inorder 均出现在 preorder
preorder 保证 为二叉树的前序遍历序列
inorder 保证 为二叉树的中序遍历序列
    `,
    difficulty: "中等",
    hint: `
- 前序遍历性质： 节点按照 [ 根节点 | 左子树 | 右子树 ] 排序
- 中序遍历性质： 节点按照 [ 左子树 | 根节点 | 右子树 ] 排序
- 因此使用前序遍历得到根节点，然后使用中序遍历划分左右子树
- 递归构建左右子树
- 为便于在中序遍历序列中查找根节点，可以使用哈希表存储中序遍历中节点和索引的映射
- 每次递归都是在构建一个子树，因此递归函数需要三个参数：
    - 根节点在前序遍历中的索引 i
    - 中序遍历中子树左右边界的索引范围 l 和 r
    - 递归终止条件：l > r
    `,
    link: "https://leetcode.cn/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 437,
    title: "路径总和 III path-sum-iii",
    category: "二叉树",
    content: `
给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。


示例 1：

        10
     5      -3
  3     2      11
3  -2     1

输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，5 -> 3, 5 -> 2 -> 1, -3 -> 11。

示例 2：

输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3


提示:

二叉树的节点个数的范围是 [0,1000]
-109 <= Node.val <= 109
-1000 <= targetSum <= 1000
    `,
    difficulty: "中等",
    hint: `
- 前缀和，类似 560.和为 k 的子数组
  - 核心思路就是用「前缀和＋哈希表」来把暴力枚举所有子数组的 O(n²) 降到 O(n)
  - 什么是前缀和？
      - 前缀和 s[i] 表示从数组开头到第 i 个元素这段区间的所有元素之和。
      - 例如，数组 nums = [1, 2, 3, 4]，它的前缀和序列就是:
          - s[0] = 1
          - s[1] = 1 + 2 = 3
          - s[2] = 1 + 2 + 3 = 6
          - s[3] = 1 + 2 + 3 + 4 = 10
  - 有了前缀和，就可以快速算「任意子数组」的和：
      - 假设我们要算子数组 nums[i…j] 的和，用前缀和只要做一次减法就可以：
          - sum(nums[i…j]) = s[j] - s[i-1] (其中，如果 i = 0，就当作 s[−1] = 0)
  - 把找「和为 k」的问题转化一下：
      - 我们想找所有 (i, j) 使得 sum(nums[i…j]) = k。
      - 换成前缀和就是：
          - s[j] - s[i-1] = k
          - 即 s[i-1] = s[j] - k
          - 换句话说，对于遍历到的每个 j，只要看看之前有没有出现过前缀和等于 s[j] - k 的位置，就可以知道跟当前 j 配对能凑出多少个子数组。
  - 用哈希表记录前缀和出现次数：
      - 定义一个 map，键是「某个前缀和的值」，值是「这个前缀和值出现了多少次」
- 递归
  - 使用 DFS 递归遍历二叉树
  - 将当前前缀和 curSum 初始化为 0 ，每遍历一个节点 node ，就使用 curSum += node.val 更新前缀和
  - 检查哈希表中是否有前缀和 curSum - targetSum ，如果有，说明存在某个祖先节点到当前节点的路径和为 targetSum
  - 将哈希表中当前前缀和的记录 + 1
  - 递归左右子树
  - 在递归返回前，需要在哈希表中撤销当前节点的影响，即将当前前缀和对应的记录 - 1 或删除
    `,
    link: "https://leetcode.cn/path-sum-iii/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 236,
    title: "二叉树的最近公共祖先 lowest-common-ancestor-of-a-binary-tree",
    category: "二叉树",
    content: `
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

示例 1：

        3
  5           1
6    2      0   8
   7   4

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

示例 2：

        3
  5           1
6    2      0   8
   7   4

输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。

示例 3：

输入：root = [1,2], p = 1, q = 2
输出：1
 

提示：

树中节点数目在范围 [2, 105] 内。
-109 <= Node.val <= 109
所有 Node.val 互不相同 。
p != q
p 和 q 均存在于给定的二叉树中。
    `,
    difficulty: "中等",
    hint: `
- LCA 只有三种情况：
  - p, q 分别位于 root 左右子树中（异侧）
  - p === root，q 位于 p 的左或右子树中
  - q === root，p 位于 q 的左或右子树中
- 递归
  - 若 root 为 null 或 p 或 q，则返回 root
  - 递归左右子树，相当于在左右子树中找 p 或 q
    - 递归返回值可能是：
      - null：子树中没有找到 p 或 q
      - p 或 q：子树中找到了 p 或 q
      - 某个节点：子树中找到了 p 或 q 的 LCA
  - 若上面左子树的递归结果为 null ，说明左子树没有 p 或 q ，于是返回上面右子树的递归结果。反之亦然
  - 若上面左子树和右子树的递归结果都不为 null ，说明 p 和 q ，位于左右两侧，直接返回 root
    `,
    link: "https://leetcode.cn/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=top-100-liked",
  },
  {
    id: 121,
    title: "买卖股票的最佳时机 best-time-to-buy-and-sell-stock",
    category: "贪心算法",
    content: `
给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

 

示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 

提示：

1 <= prices.length <= 105
0 <= prices[i] <= 104
    `,
    difficulty: "简单",
    hint: `
- 当遍历到第 i 天时：
  - 如果今天（第 i 天）卖出股票，那么为了利润最大化，应该是在什么时候买入的呢？
  - 应该是在第 i 天之前的价格最低的那一天买入
- 所以，算法的核心就变成了：
  - 遍历每一天，假设这一天是卖出日
  - 然后找出在它之前所有天中的最低股价，计算出今天卖出能够获得的最大利润，并持续更新我们所记录的全局最大利润
    `,
    link: "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-100-liked",
    code: `function maxProfit(prices: number[]): number {
    // 若在前 i 天选择卖出，若想达到最高利润，则一定选择之前价格最低的交易日买入
    // cost 为前 i 天最低价格
    let cost = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < cost) cost = prices[i];
        if (prices[i] - cost > profit) profit = prices[i] - cost;
    }
    return profit;
};`,
  },
  {
    id: 55,
    title: "跳跃游戏 jump-game",
    category: "贪心算法",
    content: `
给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

 
示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 

提示：

1 <= nums.length <= 104
0 <= nums[i] <= 105
    `,
    difficulty: "中等",
    hint: `
- 对于每一个可以到达的位置 x，它使得 x + 1, x + 2, ⋯, x + nums[x] 这些连续的位置都可以到达
- 我们依次遍历数组中的每一个位置，并实时维护最远可以到达的位置
    - 对于位置 i ，「最远可以到达的位置」 为 「当前最远可以到达的位置」 和 「i + nums[i]」 之间的最大值
- 如果 最远可以到达的位置 大于等于数组中的最后一个位置，那就说明最后一个位置可达
    `,
    link: "https://leetcode.cn/problems/jump-game/?envType=study-plan-v2&envId=top-100-liked",
    code: `function canJump(nums: number[]): boolean {
    // 对于每一个可以到达的位置 x，它使得 x + 1, x + 2, ⋯, x + nums[x] 这些连续的位置都可以到达。
    // 我们依次遍历数组中的每一个位置，并实时维护最远可以到达的位置。
    let rightmost = 0;
    for (let i = 0; i < nums.length; i++) {

        // 如果当前遍历到的位置在 最远可以到达的位置 的范围内，那么我们就可以从起点通过若干次跳跃到达该位置。
        if (i <= rightmost) {
            // 可以用 i + nums[i] 更新 最远可以到达的位置。
            rightmost = Math.max(rightmost, i + nums[i]);
        }

        // 如果 最远可以到达的位置 大于等于数组中的最后一个位置，那就说明最后一个位置可达。
        if (rightmost >= nums.length - 1) {
            return true;
        }
    }
    return false;
};`,
  },
  {
    id: 45,
    title: "跳跃游戏 II jump-game-ii",
    category: "贪心算法",
    content: `
给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。

每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:

0 <= j <= nums[i] 
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。


示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

示例 2:

输入: nums = [2,3,0,1,4]
输出: 2


提示:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
题目保证可以到达 nums[n-1]
    `,
    difficulty: "中等",
    hint: `
- 对于每一个可以到达的位置 x，它使得 x + 1, x + 2, ⋯, x + nums[x] 这些连续的位置都可以到达
- 我们依次遍历数组中的每一个位置，并实时维护最远可以到达的位置
  - 对于位置 i ，「最远可以到达的位置」 为 「当前最远可以到达的位置」 和 「i + nums[i]」 之间的最大值
- 贪心策略：在当前这一步能够到达的所有位置中，找出下一步能跳得最远的位置
  - 换句话说，我们不关心这一步跳到哪里，我们只关心在这一步的“跳跃范围内”，哪一个位置能为我们的“下一次跳跃”提供最远的触及范围
  - 因此需要记录当前这一步能够到达的最远位置作为边界
  - 当遍历到边界时，将边界更新为下一次跳跃能够到达的最远位置，并将跳跃次数加一
    `,
    link: "https://leetcode.cn/problems/jump-game-ii/?envType=study-plan-v2&envId=top-100-liked",
    code: `function jump(nums: number[]): number {
    let rightmost = 0;
    let end = 0; // 当前能够到达的最大下标位置记为边界
    let res = 0; // 跳跃次数
    for (let i = 0; i < nums.length; i++) {
        rightmost = Math.max(rightmost, i + nums[i]);

        // 遍历数组到达边界时，更新边界并将跳跃次数增加 1
        // 边界正好为最后一个位置的情况下不必跳跃
        if (i === end && end < nums.length - 1) {
            end = rightmost;
            res++;
        }
    }
    return res;
};`,
  },
  {
    id: 763,
    title: "划分字母区间 partition-labels",
    category: "贪心算法",
    content: `
给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。例如，字符串 "ababcc" 能够被分为 ["abab", "cc"]，但类似 ["aba", "bcc"] 或 ["ab", "ab", "cc"] 的划分是非法的。

注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。

返回一个表示每个字符串片段的长度的列表。

示例 1：

输入：s = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca"、"defegde"、"hijhklij" 。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 这样的划分是错误的，因为划分的片段数较少。

示例 2：

输入：s = "eccbbbbdec"
输出：[10]

提示：

1 <= s.length <= 500
s 仅由小写英文字母组成
    `,
    difficulty: "中等",
    hint: `
- 由于同一个字母只能出现在同一个片段，显然同一个字母的第一次出现的下标位置和最后一次出现的下标位置必须出现在同一个片段
- 因此需要遍历字符串，得到每个字母最后一次出现的下标位置
- 可以使用哈希表记录每个字母最后一次出现的位置
- 使用两个变量记录当前片段的起始位置 start 和结束位置 end
- 遍历到位置 i 时，使用该位置的字母最后一次出现的位置，即 max(end, map.get(s[i])) 更新 end
- 当遍历到 end 位置时，开始下一个片段
    `,
    link: "https://leetcode.cn/problems/partition-labels/?envType=study-plan-v2&envId=top-100-liked",
    code: `function partitionLabels(s: string): number[] {
    const res = [];

    // 遍历字符串，得到每个字母最后一次出现的下标位置
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }

    // 当前片段的开始下标 start 和结束下标 end
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        // 使用当前字母的最后一次出现的下标位置更新 end
        end = Math.max(end, map.get(s[i]));

        // 当前片段访问结束，继续寻找下一个片段
        if (i === end) {
            res.push(end - start + 1);
            start = end + 1;
        }
    }

    return res;
};`,
  },
  {
    id: 70,
    title: "爬楼梯 climbing-stairs",
    category: "动态规划",
    content: `
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

提示：

1 <= n <= 45
    `,
    difficulty: "简单",
    hint: `
    `,
    link: "https://leetcode.cn/problems/climbing-stairs/?envType=study-plan-v2&envId=top-100-liked",
    code: `function climbStairs(n: number): number {
    const dp = Array(n).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};`,
  },
  {
    id: 118,
    title: "杨辉三角 pascals-triangle",
    category: "动态规划",
    content: `
给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:

输入: numRows = 5
输出: [
          [1],
        [1,  1],
      [1,  2,  1],
    [1,  3,  3,  1],
  [1,  4,  6,  4,  1]
]

示例 2:

输入: numRows = 1
输出: [[1]]

提示:

1 <= numRows <= 30
    `,
    difficulty: "简单",
    hint: `
    `,
    link: "https://leetcode.cn/problems/pascals-triangle/?envType=study-plan-v2&envId=top-100-liked",
    code: `function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    const dp = Array.from({ length: numRows }, () => []);
    dp[0] = [1];
    dp[1] = [1, 1];
    for (let i = 2; i < numRows; i++) {
        dp[i] = Array.from({ length: i + 1 }, () => 1);
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
    return dp;
};`,
  },
];

export default data;
