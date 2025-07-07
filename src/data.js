const data = [
  {
    "id": 189,
    "title": "轮转数组 rotate-array",
    "category": "普通数组",
    "content": `
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
    "difficulty": "中等",
    "hint": `
思路一：常规
    - 新建一个数组，根据新的下标复制元素，然后把新数组的元素依次复制到旧数组
思路二：翻转数组
    - 数组长度为 n ，数组轮转本质上是将数组后 k mod n 项移到开头
    - 将数组整体翻转，就能把后 k mod n 项移到开头
    - 然后将翻转后的数组的[0, (k mod n) - 1], [k mod n, n - 1] 子数组分别翻转即可
`,
    "link": "https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 238,
    "title": "除自身以外数组的乘积 product-of-array-except-self",
    "category": "普通数组",
    "content": `
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
    "difficulty": "中等",
    "hint": `
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
    "link": "https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 73,
    "title": "矩阵置零 set-matrix-zeroes",
    "category": "矩阵",
    "content": `
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
    "difficulty": "中等",
    "hint": `
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
    "link": "https://leetcode.cn/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 54,
    "title": "螺旋矩阵 spiral-matrix",
    "category": "矩阵",
    "content": `
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
    "difficulty": "中等",
    "hint": `
- 使用 l, r, t, b 四个变量存储当前边界的位置
- 按照螺旋顺序 l -> r, t -> b, r -> l, b -> t 不断遍历
- 遍历到边界后改变对应边界变量的值（收缩边界）
`,
    "link": "https://leetcode.cn/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 48,
    "title": "旋转图像 rotate-image",
    "category": "矩阵",
    "content": `
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
    "difficulty": "中等",
    "hint": `
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
    "link": "https://leetcode.cn/problems/rotate-image/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 240,
    "title": "搜索二维矩阵 II search-a-2d-matrix-ii",
    "category": "矩阵",
    "content": `
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
    "difficulty": "中等",
    "hint": `
思路一：
    - 根据每行每列递增的条件遍历矩阵，超出范围时剪枝
思路二：
    - 遍历时对每行进行二分查找
`,
    "link": "https://leetcode.cn/problems/search-a-2d-matrix-ii/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 160,
    "title": "相交链表 intersection-of-two-linked-lists",
    "category": "链表",
    "content": `
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
    "difficulty": "简单",
    "hint": `
思路一：哈希表
    - 首先遍历第一个链表，使用哈希表记录出现的节点
    - 然后遍历第二个链表，通过查找哈希表得到第一个相同的节点
思路二：双指针
    - 两个指针分别指向两个列表的头节点，同时遍历
    - 遍历到尾部（即 node.next = null）时，指针指向另一个链表的头节点
    - 两指针第一次相遇时即为第一个相交节点
`,
    "link": "https://leetcode.cn/problems/intersection-of-two-linked-lists/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 206,
    "title": "反转链表 reverse-linked-list",
    "category": "链表",
    "content": `
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
    "difficulty": "简单",
    "hint": `
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
    "link": "https://leetcode.cn/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 234,
    "title": "回文链表 palindrome-linked-list",
    "category": "链表",
    "content": `
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
    "difficulty": "简单",
    "hint": `
思路一：常规
    - 将值复制到数组，使用头尾两个指针判断
思路二：快慢指针
    - 使用快慢指针找到中间节点
    - 翻转后半段链表
    - 使用两个指针判断回文
    - 恢复链表（可选）
`,
    "link": "https://leetcode.cn/problems/palindrome-linked-list/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 141,
    "title": "环形链表 linked-list-cycle",
    "category": "链表",
    "content": `
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
    "difficulty": "简单",
    "hint": `
思路一：常规
    - 使用哈希表记录出现过的节点
思路二：快慢指针
    - 如果有环，那么快慢指针一定会在环中某处相遇
`,
    "link": "https://leetcode.cn/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-100-liked"
  },
  {
    "id": 142,
    "title": "环形链表 II linked-list-cycle-ii",
    "category": "链表",
    "content": `
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
    "difficulty": "中等",
    "hint": `
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
    "link": "https://leetcode.cn/problems/linked-list-cycle-ii/description/?envType=study-plan-v2&envId=top-100-liked"
  },
]

export default data;