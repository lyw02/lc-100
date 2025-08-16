const data = [
  {
    id: 1,
    title: "两数之和 two-sum",
    category: "哈希",
    content: `
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

提示：

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案

进阶：你可以想出一个时间复杂度小于 O(n^2) 的算法吗？
    `,
    difficulty: "简单",
    hint: `
- 目标是要找到两个数：x 和 target - x
- 创建一个哈希表，对于每一个 x，我们首先查询哈希表中是否存在 target - x，然后将 x 插入到哈希表中，键为 x，值为下标
`,
    link: "https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
};`,
  },
  {
    id: 49,
    title: "字母异位词分组 group-anagrams",
    category: "哈希",
    content: `
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

解释：

在 strs 中没有字符串可以通过重新排列来形成 "bat"。
字符串 "nat" 和 "tan" 是字母异位词，因为它们可以重新排列以形成彼此。
字符串 "ate" ，"eat" 和 "tea" 是字母异位词，因为它们可以重新排列以形成彼此。

示例 2:

输入: strs = [""]

输出: [[""]]

示例 3:

输入: strs = ["a"]

输出: [["a"]]

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母
    `,
    difficulty: "中等",
    hint: `
- 基于哈希表对每个字符串进行字母计数
- 由于互为字母异位词的两个字符串包含的字母相同，因此两个字符串中的相同字母出现的次数一定是相同的
- 故可以将每个字母出现的次数使用字符串表示，作为哈希表的键
- 由于字符串只包含小写字母，因此对于每个字符串，可以使用长度为 26 的数组记录每个字母出现的次数
`,
    link: "https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    for (const str of strs) {
        const count = Array.from({ length: 26 }, () => 0);
        for (const c of str) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        const countStr = count.join(","); // 不能使用空格，否则遇到两位数会混淆
        map.has(countStr) ? map.get(countStr).push(str) : map.set(countStr, [str]);
    }
    return [...map.values()];
};`,
  },
  {
    id: 128,
    title: "最长连续序列 longest-consecutive-sequence",
    category: "哈希",
    content: `
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

示例 1：

输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

示例 2：

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9

示例 3：

输入：nums = [1,0,1,2]
输出：3

提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
    `,
    difficulty: "中等",
    hint: `
- 如果一个数字 x 是一个连续序列的起点，那么 x-1 这个数字一定不存在于原始数组中
- 使用哈希集合，便于查询一个数字是否在数组中
- 与其对每个数字都盲目地向两边探索，不如只从每个连续序列的“起点”开始计算
- 也就是对于每一个 num，只考虑 num - 1 不在哈希集合中的情况
    - 然后依次查询 num + 1, num + 2, num + 3... 是否在哈希集合中
    - 最终更新全局最大长度
`,
    link: "https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function longestConsecutive(nums: number[]): number {
    let res = 0;
    const set = new Set(nums);
    for (const num of set) {
        if (set.has(num - 1)) continue; // 确保只从连续序列的起点开始计数

        let next = num + 1; // num 是序列起点
        while (set.has(next)) next++; // 不断查找下一个数是否在哈希集合中

        res = Math.max(res, next - num);
    }
    return res;
};`,
  },
  {
    id: 283,
    title: "移动零 move-zeroes",
    category: "双指针",
    content: `
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]

示例 2:

输入: nums = [0]
输出: [0]

提示:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

进阶：你能尽量减少完成的操作次数吗？
    `,
    difficulty: "简单",
    hint: `
- 双指针：
    - 指针 i 负责寻找下一个非 0 元素（负责读）
    - 指针 j 指向下一个非 0 元素应该放置的位置（负责写）
    - 第一次遍历：
      - 使用指针 i 不断遍历数组
      - 遇到非 0 元素时，将该元素赋值到指针 j 所在的位置，然后将指针 j 后移
    - 第二次遍历：
      - 将指针 j 位置开始的所有元素置 0
`,
    link: "https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let j = 0;

    // 第一次遍历的时候
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        }
    }

    // 非0元素统计完了，剩下的都是0了
	  // 所以第二次遍历把末尾的元素都赋为0即可
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
};`,
  },
  {
    id: 11,
    title: "盛最多水的容器 container-with-most-water",
    category: "双指针",
    content: `
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

示例 1：

输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例 2：

输入：height = [1,1]
输出：1

提示：

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
    `,
    difficulty: "中等",
    hint: `
- 双指针
- 左右两个指针分别指向左右边界
- 可容纳的水量相当于面积：S(i, j) = min(h[i], h[j]) * (j - i)
- 如果向内移动短板，面积可能变大
- 如果向内移动长板，面积一定变小
- 因此每次将短板向内移动，更新全局最大面积，知道两指针相遇
`,
    link: "https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function maxArea(height: number[]): number {
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;
    while (i < j) {
        maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i))
        height[i] < height[j] ? i++ : j--;
    }
    return maxArea;
};`,
  },
  {
    id: 15,
    title: "三数之和 3sum",
    category: "双指针",
    content: `
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。

示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。

示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。

提示：

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
    `,
    difficulty: "中等",
    hint: `
- 直接找三个数很难，我们把它简化成“先固定一个数，再去找另外两个数”
- 首先对数组进行排序，便于跳过重复元素，且可以按从前往后递增的方向查找
- 外层循环：遍历数组，固定第一个数 k
    - 如果 k > 0，由于数组已排序，后面的数都 > 0，不可能找到结果
    - 指针 i, j 指向 k 之后的序列的头尾
      - 内层循环：根据 sum = nums[i] + nums[j] + nums[k] 与 0 的大小关系调整 i, j 的位置，直到相遇
    - 两层循环中都要注意跳过重复元素
`,
    link: "https://leetcode.cn/problems/3sum/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function threeSum(nums: number[]): number[][] {
    // 直接找三个数很难，我们把它简化成“先固定一个数，再去找另外两个数”

    const res = [];

    // 排序的作用：
    // - 方便移动：我们可以有方向地找（往后移动就是找更大的）
    // - 容易去重：相同的都在一起了，很容易发现并跳过
    const list = nums.toSorted((a, b) => a - b);

    // 固定第一个数 k
    for (let k = 0; k < list.length - 2; k++) {
        if (list[k] > 0) break; // 如果第一个数大于0，此时3个数字都大于0，不可能找到结果
        if (k > 0 && list[k] === list[k - 1]) continue; // 跳过重复
        let i = k + 1;
        let j = list.length - 1;
        while (i < j) {
            const sum = list[i] + list[j] + list[k];
            if (sum < 0) {
                while (i < j && list[i] === list[i + 1]) i++; // 跳过重复
                i++;
            } else if (sum > 0) {
                while (i < j && list[j] === list[j - 1]) j--; // 跳过重复
                j--;
            } else {
                res.push([list[i], list[j], list[k]]);
                while (i < j && list[i] === list[i + 1]) i++; // 跳过重复
                while (i < j && list[j] === list[j - 1]) j--; // 跳过重复
                i++;
                j--;
            }
        }
    }
    return res;
};`,
  },
  {
    id: 42,
    title: "接雨水 trapping-rain-water",
    category: "双指针",
    content: `
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

示例 1：

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。

示例 2：

输入：height = [4,2,0,3,2,5]
输出：9

提示：

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
    `,
    difficulty: "中等",
    hint: `
- 对于每一根柱子，它上方能接的雨水，取决于它左侧所有柱子中的最高者和右侧所有柱子中的最高者中，较矮的那个
    - 设左侧最高柱子为 global_left_max，右侧最高柱子为 global_right_max
    - 那么第 i 个位置的柱子 height[i] 上方能形成的水柱高度是 min(global_left_max, global_right_max) - height[i]，且最小为 0
    - 即：water[i] = max(0, min(global_left_max, global_right_max) - height[i])
    - 注意：最左边和最右边的柱子因为一边没有墙，所以永远无法存水
- 维护两个指针，left 和 right，分别指向数组的左右两端
    - 设当前左右最高的柱子为 left_max, right_max
    - left_max 就是 height[0...left] 中的最大值
    - right_max 就是 height[right...n-1] 中的最大值
    - 算法的每一步都试图处理 left 指针和 right 指针指向的两个柱子中高度较低的那个
    - 如果 height[left] < height[right]
      - 这说明右边的墙更高，所以处理左指针
      - 更新 left_max: left_max = max(left_max, height[left])
      - 计算当前 left 位置能接的雨水并将 left 指针右移
        - 如何计算 left 位置的雨水呢?
          - 根据第一部分原理，我们需要 min(global_left_max, global_right_max)
          - 我们已知 left_max，它就是 left 位置的 global_left_max
          - 但我们不知道 left 位置的 global_right_max，只有一个从右边过来的 right_max
          - 但是，当我们处于 height[left] < height[right] 这个条件时：
            - 我们知道，在 left 指针的右边，至少存在一根高度为 height[right] 的柱子
            - 同时，left 位置真正的 global_right_max 必然大于或等于 height[right]
            - 由于 height[left] < height[right]，而 left_max 是基于 height[0...left] 计算的
            - 所以可以肯定 left_max 是 global_left_max 和 global_right_max 中较小或相等的那一个（即“短板”）
            - 因此，计算公式从 min(global_left_max, global_right_max) - height[left] 简化为 left_max - height[left]
    - 如果 height[left] >= height[right]
      - 这说明左边的墙更高或一样高，所以处理右指针
      - 更新 right_max: right_max = max(right_max, height[right])
      - 计算当前 right 位置能接的雨水并将 right 指针左移
      - 计算水量方法同上，简化为 right_max - height[right]
`,
    link: "https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function trap(height: number[]): number {
    let i = 0;
    let j = height.length - 1
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
    
    while (i < j) {
        if (height[i] < height[j]) {
            leftMax = Math.max(leftMax, height[i]);
            totalWater += Math.max(0, leftMax - height[i]);
            i++;
        } else {
            rightMax = Math.max(rightMax, height[j]);
            totalWater += Math.max(0, rightMax - height[j]);
            j--;
        }
    }

    return totalWater;
};`,
  },
  {
    id: 3,
    title:
      "无重复字符的最长子串 longest-substring-without-repeating-characters",
    category: "滑动窗口",
    content: `
给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

提示：

0 <= s.length <= 5 * 104
s 由英文字母、数字、符号和空格组成
    `,
    difficulty: "中等",
    hint: `
- 滑动窗口 + 哈希表
- 滑动窗口：
    - 想象一个在字符串 s 上滑动的“窗口”，这个窗口内的子串是始终没有重复字符的。我们的目标是找到这个窗口可能达到的最大宽度
    - 窗口由两个指针定义：左边界 i 和 右边界 j
    - 我们不断地尝试将右边界 j 向右移动，以扩大窗口
    - 如果在这个过程中，新加入的字符与窗口内已有的某个字符重复了，我们就需要将左边界 i 向右移动，直到窗口内不再有重复字符
      - 也就是说左边界 i 记录的是当前窗口中所有字符上一次出现位置的最大值。因此，无重复的子串实际上是从 i + 1 开始的。因此 i 的初始值为 -1
    - 在整个过程中，我们记录下窗口的最大宽度，这个最大宽度就是最终的答案
    - 使用哈希表记录了每个字符（key）及其在字符串中最新出现过的下标（value）
`,
    link: "https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function lengthOfLongestSubstring(s: string): number {
    if (s.length === 1) return 1;
    const map = new Map();
    let res = 0;
    let i = -1;
    for (let j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(i, map.get(s[j]));
        }
        map.set(s[j], j); // 哈希表记录字符s[j]最后出现的下标
        res = Math.max(res, j - i);
    }
    return res;
};`,
  },
  {
    id: 438,
    title: "找到字符串中所有字母异位词 find-all-anagrams-in-a-string",
    category: "滑动窗口",
    content: `
给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

提示:

1 <= s.length, p.length <= 3 * 104
s 和 p 仅包含小写字母
    `,
    difficulty: "中等",
    hint: `
- 固定长度的滑动窗口
- 要判断 s 中一个长度为 p.length 的子串（我们称之为“窗口”）是否是 p 的异位词，我们只需要比较这个窗口和 p 的字符频率表是否完全一致
- 当窗口向右滑动一格时，我们不需要重新计算整个新窗口的字符频率，只需要：
    - 减去离开窗口的那个字符的计数
    - 加上进入窗口的那个字符的计数
- 实际上，不需要直接比较两个完整的频率表，而是用一个差值数组 count 和一个差异计数器 differ 来进行更高效率的判断
    - count 数组：
      - 这是一个长度为 26 的数组，代表 'a' 到 'z' 的 26 个小写字母。它存储的不是字符数量，而是当前窗口内各字符数量与字符串 p 中各字符数量的差值
      - 即 count[k] = 滑动窗口中 k + 'a' 的数量 - p 中 k + 'a' 的数量
      - count[k] === 0：表示字符 k + 'a' 在当前窗口和 p 中的数量相等
      - count[k] > 0：表示字符 k + 'a' 在当前窗口中的数量比 p 中多
      - count[k] < 0：表示字符 k + 'a' 在当前窗口中的数量比 p 中少
      - 目标：找到所有让 count 数组所有元素都为 0 的窗口
    - differ 变量：
      - 记录了 count 数组中非零元素的个数，即有多少种字符的数量目前是不匹配的
      - 当 differ === 0 时，说明 count 数组所有元素都为 0，即当前窗口是一个异位词，我们找到了一个解
      - 通过维护 differ，我们每次滑动窗口后，只需要检查 differ是否为 0，而不需要遍历整个 count 数组
`,
    link: "https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function findAnagrams(s: string, p: string): number[] {
    // 在数组里直接统计滑动窗口和字符串 p 中每种字母数量的差，只要所有差值都为 0（即differ == 0），就说明当前窗口是一个异位词窗口
    // 维护一个 count 数组：count[c] = 滑动窗口中 c 的数量 - p 中 c 的数量
    // 维护一个变量 differ，表示有多少个字母目前“数目不一样”
    // 滑动窗口每次滑动一格，只用处理两个字母：新进窗口的字母、新出窗口的字母，然后及时更新 count 和 differ

    if (s.length < p.length) return [];

    const res = [];
    const count = new Array(26).fill(0);
    const A_CODE = "a".charCodeAt(0)

    // 初始化第一个窗口和 p 的差异
    for (let i = 0; i < p.length; i++) {
        count[s.charCodeAt(i) - A_CODE]++;
        count[p.charCodeAt(i) - A_CODE]--;
    }

    // 计算初始的 differ 值
    let differ = 0;
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            differ++;
        }
    }

    // 检查第一个窗口是否匹配
    if (differ === 0) {
        res.push(0);
    }

    // 滑动窗口
    for (let i = 0; i < s.length - p.length; i++) {
        // i 是窗口左边界
        // s[i] 是将要离开窗口的字符
        // s[i + p.length] 是将要进入窗口的字符

        // a. 处理进入的字符 s[i + p.length]
        const charInIndex = s.charCodeAt(i + p.length) - A_CODE;
        if (count[charInIndex] === 0) {
            // 原本这个字母的数量是匹配的，现在多了一个，不平衡种类的总数 differ 需要 + 1
            differ++;
        } else if (count[charInIndex] === -1) {
            // 在这个新字符进入窗口之前，窗口中的该种字符的数量比 p 中恰好少一个
            // 一个原本不平衡的字符种类，现在变得平衡了。因此，不平衡种类的总数 differ 需要 - 1
            differ--;
        }
        count[charInIndex]++;

        // b. 处理离开的字符 s[i]
        const charOutIndex = s.charCodeAt(i) - A_CODE;
        if (count[charOutIndex] === 0) {
            differ++;
        } else if (count[charOutIndex] === 1) {
            differ--;
        }
        count[charOutIndex]--;

        // c. 检查滑动后的窗口是否匹配
        if (differ === 0) {
            res.push(i + 1); // 新窗口的起始索引是 i + 1
        }
    }

    return res;
};`,
  },
  {
    id: 560,
    title: "和为 K 的子数组 find-all-anagrams-in-a-string",
    category: "子串",
    content: `
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

子数组是数组中元素的连续非空序列。

示例 1：

输入：nums = [1,1,1], k = 2
输出：2

示例 2：

输入：nums = [1,2,3], k = 3
输出：2

提示：

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
    `,
    difficulty: "中等",
    hint: `
- 前缀和 + 哈希表
- 数组元素不同号，不能用滑动窗口，因为向右滑动不能保证递增。考虑前缀和
- 核心思路就是用「前缀和 + 哈希表」来把暴力枚举所有子数组的 O(n²) 降到 O(n)
- 什么是前缀和？
    - 前缀和 s[i] 表示从数组开头到第 i 个元素这段区间的所有元素之和。
    - 例如，数组 nums = [1, 2, 3, 4]，它的前缀和序列就是:
      - s[0] = 1
      - s[1] = 1 + 2 = 3
      - s[2] = 1 + 2 + 3 = 6
      - s[3] = 1 + 2 + 3 + 4 = 10
    - 有了前缀和，就可以快速算「任意子数组」的和：
      sum(nums[i...j]) = s[j] - s[i - 1] (若 i = 0，视为 s[-1] = 0)
- 问题转化：
    - 要找和为 k 的子数组，就是找所有 (i, j) ，使得 sum(nums[i...j]) = s[j] - s[i - 1] = k
    - 即 s[i - 1] = s[j] - k
    - 即对于遍历到的每个 j，只要看看之前有没有出现过前缀和等于 s[j] - k 的位置，就可以知道跟当前 j 配对能凑出多少个子数组
- 用哈希表记录前缀和出现次数：
    - 键是「某个前缀和的值」，值是「这个前缀和值出现了多少次」
`,
    link: "https://leetcode.cn/problems/subarray-sum-equals-k/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function subarraySum(nums: number[], k: number): number {
    let res = 0; // 记录和为 k 的子数组个数
    let s = 0; // 前缀和
    const map = new Map(); // 哈希表，记录每个前缀和出现的次数
    map.set(0, 1); // 初始化：前缀和为 0 出现 1 次（空数组）
    for (const n of nums) {
        s += n; // 更新当前的前缀和

        // 看看 s - k 这个前缀和在 map 里出现过几次
        // 每出现一次，就说明有一个之前的位置 i−1 可以跟当前 j 配对，凑成和为 k 的子数组，所以把出现次数加到结果 res 上
        if (map.has(s - k)) {
            res += map.get(s - k);
        }
        
        // 把当前前缀和 s 记入 map（出现次数 +1），给后面的 j′ 用
        if (map.has(s)) {
            map.set(s, map.get(s) + 1);
        } else {
            map.set(s, 1);
        }
    }

    return res;

    // 为什么是线性时间？
    //      我们只遍历一次数组，遍历过程中对 map 的「查找」和「更新」都是 O(1) 平均时间。
    //      因此总复杂度是 O(n)，比直接枚举所有 (i, j) 的 O(n²) 要快很多
};`,
  },
  {
    id: 239,
    title: "滑动窗口最大值 sliding-window-maximum",
    category: "子串",
    content: `
给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回 滑动窗口中的最大值 。

示例 1：

输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
输出：[3,3,5,5,6,7]
解释：
滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

示例 2：

输入：nums = [1], k = 1
输出：[1]

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
    `,
    difficulty: "困难",
    hint: `
- 单调队列
- 维护一个双端队列，使得队列中的元素从队头到队尾是严格单调递减的
    - 即 队头 <--- [大, ..., 中, ..., 小] <--- 队尾
    - 作用：
      - 1. 快速获取最大值
      - 2. 存储“候选人”：
        - 队列里存储的并不是窗口里的所有元素，而是窗口里所有“可能成为最大值”的候选人
        - 一个元素如果在它前面有一个比它还大的元素，那它就不可能成为最大值，也就没必要进入队列
- 算法的流程就是随着窗口的滑动，不断维护这个单调队列的性质：
    - 清理队头：移除过期的最大值
    - 清理队尾：维护队列的单调性
    - 元素入队：新元素加入候选
- 示例：
    - 滑动窗口的位置	        queue 的最终状态   最大值
    - [1, 3, -1] -3 5 3 6 7      [3, -1]         3
    - 1 [3, -1, -3] 5 3 6 7      [3, -1, -3]     3
    - 1 3 [-1, -3, 5] 3 6 7      [5]             5
    - 1 3 -1 [-3, 5, 3] 6 7      [5, 3]          5
    - 1 3 -1 -3 [5, 3, 6] 7      [6]             6
    - 1 3 -1 -3 5 [3, 6, 7]      [7]             7
`,
    link: "https://leetcode.cn/problems/sliding-window-maximum/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function maxSlidingWindow(nums: number[], k: number): number[] {
    // 当新元素进入窗口时，移除队列中所有比它小的元素（因为它们不可能成为最大值）
    // 当窗口滑动时，检查队列头部是否是离开窗口的元素，如果是则移除
    // 每次窗口滑动后，队列头部就是当前窗口的最大值
    const queue = [];
    const res = [];
    for (let i = 1 - k, j = 0; j < nums.length; i++, j++) {
        // 等价于：
        // for (let j = 0; j < nums.length; j++)
        // let i = j - k + 1; // 窗口左端点的索引

        // 删除 queue 中对应的 nums[i-1] (移出窗口外的元素)
        if (i > 0 && queue[0] === nums[i - 1]) {
            queue.shift();
        }

        // 保持 queue 递减
        while (queue.length > 0 && queue[queue.length - 1] < nums[j]) {
            queue.pop();
        }

        queue.push(nums[j]);

        // 记录窗口最大值
        if (i >= 0) {
            res[i] = queue[0];
        }
    }
    return res;
};`,
  },
  {
    id: 76,
    title: "最小覆盖子串 minimum-window-substring",
    category: "子串",
    content: `
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。

示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

示例 2：

输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。

示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。

提示：

m == s.length
n == t.length
1 <= m, n <= 105
s 和 t 由英文字母组成

进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
    `,
    difficulty: "困难",
    hint: `
- 设滑动窗口的左右指针为 i 和 j
- 扩张窗口：
    - 不断向右移动 j 指针，将新字符纳入窗口，直到这个窗口满足了包含 t 所有字符的条件
- 收缩窗口：
    - 一旦窗口满足条件，我们就记录下这个窗口的长度，并尝试从左侧收缩窗口，即向右移动 i 指针
    - 每收缩一步，我们都检查窗口是否仍然满足条件
      - 如果仍然满足，说明我们找到了一个更短的、符合条件的窗口，我们更新记录
      - 如果不再满足，我们就停止收缩，回到第一步，继续扩张窗口，寻找下一个满足条件的可能
- 如何检查窗口是否满足条件：类似 438. 找到字符串中所有字母异位词
    - needs 哈希表：
      - 用来存储目标字符串 t 中所有字符及其需要的数量。例如，如果 t = "AABC"，那么 needs = {'A': 2, 'B': 1, 'C': 1}
    - window 哈希表：
      - 用来存储当前滑动窗口中，我们所关心的字符（即在needs中出现的字符）及其数量
    - match 计数器：
      - 记录当前 window 中，有多少种类的字符已经满足了 needs 表中的数量要求
      - 当 match 的值等于 needs 表中不同字符的总数时，就说明当前窗口已经满足了覆盖 t 的条件
`,
    link: "https://leetcode.cn/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function minWindow(s: string, t: string): string {
    const needs = new Map();
    const window = new Map();

    for (const c of t) {
        needs.set(c, (needs.get(c) || 0) + 1);
    }

    let i = 0;
    let j = 0;
    let match = 0;

    let start = 0; // 最终结果子串的起始位置
    let minLength = Infinity;

    while (j < s.length) {
        // 扩张窗口
        const charIn = s[j];
        j++;

        if (needs.has(charIn)) {
            window.set(charIn, (window.get(charIn) || 0) + 1);
            if (window.get(charIn) === needs.get(charIn)) {
                match++;
            }
        }

        // 收缩窗口
        // 只有当所有需要的字符都满足了条件时才尝试收缩左边界
        while (match === [...needs.keys()].length) {
            // 首先更新最小子串结果
            const curLen = j - i;
            if (curLen < minLength) {
                minLength = curLen;
                start = i;
            }

            const charOut = s[i];
            i++;

            if (needs.has(charOut)) {
                // 如果在移出前刚好是满足需求的数量
                // 那么移出后，就不再满足需求了，match 数减一
                if (window.get(charOut) === needs.get(charOut)) {
                    match--;
                }
                window.set(charOut, (window.get(charOut) || 0) - 1)
            }
        }
    }

    // 如果 minLen 还是初始的无穷大，说明没有找到符合条件的子串
    // 否则，使用记录的 start 和 minLen 截取子串
    return minLength === Infinity ? "" : s.substring(start, start + minLength);
};`,
  },
  {
    id: 53,
    title: "最大子数组和 maximum-subarray",
    category: "普通数组",
    content: `
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组是数组中的一个连续部分。

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23

提示：

1 <= nums.length <= 105
-104 <= nums[i] <= 104

进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
    `,
    difficulty: "中等",
    hint: `
- 思路一：动态规划
    - 定义状态：
      - dp[i] 代表以 nums[i] 结尾的子数组的最大和
    - 推导状态转移方程：
      - 以 nums[i] 结尾的子数组有两种可能：
        - 1. 只含有 nums[i] 本身。这种情况下，最大和就是 nums[i] 本身
        - 2. nums[i] 连接在以 nums[i-1] 结尾的最大和子数组后面。这种情况下，最大和就是 dp[i-1] + nums[i]
      - 因此，状态转移方程：
        - dp[i] = max(nums[i], dp[i-1] + nums[i])
    - 初始条件：
      - dp[0] = nums[0]，因为子数组只包含第一个元素本身
    - 复杂度：时间 O(n)，空间 O(n)
- 思路二：滚动数组优化
    - 在计算 dp[i] 的时候，我们仅仅需要 dp[i-1] 的值，而与 dp[i-2], dp[i-3], ... 这些更早的状态无关
    - 因此没有必要用一个完整的数组 dp 来存储所有历史状态，只需要一个变量来记录“前一个状态”的值即可，因此可以实现空间优化
    - 我们用一个变量 currMax 来代替 dp[i]。currMax 在第 i 次循环中，就代表着我们想要计算的 dp[i] 的值
    - 在计算当前 currMax 时，它需要用到前一步的 currMax（相当于 dp[i-1]）
    - 即 currMax = max(nums[i], currMax + nums[i]);
    - 复杂度：时间 O(n)，空间 O(1)
`,
    link: "https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function maxSubArray(nums: number[]): number {
    // 思路一
    dp[i] 代表以元素 nums[i]为结尾的连续子数组最大和
    const dp = Array.from({ length: nums.length }, () => 0);
    dp[0] = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
        maxSum = Math.max(maxSum, dp[i]);
    }
    return maxSum;

    // 思路二
    // let maxSum = nums[0]; // 全局最大和，初始设为第一个元素
    // let currMax = nums[0]; // 以 nums[i] 结尾的最大和，初始设为 nums[0]
    // for (let i = 1; i < nums.length; i++) {
    //     // 要么接到前面的子数组后面，要么单独从 nums[i] 重新开始
    //     currMax = Math.max(currMax + nums[i], nums[i]);
    //     // 更新全局最大
    //     maxSum = Math.max(maxSum, currMax);
    // }
    // return maxSum;
};`,
  },
  {
    id: 56,
    title: "合并区间 merge-intervals",
    category: "普通数组",
    content: `
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]。

示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
    `,
    difficulty: "中等",
    hint: `
- 首先按照左端点对所有区间进行升序排序
- 遍历所有区间
    - 如果结果数组为空或者结果数组中最后一个区间的第二个元素小于当前区间的第一个元素，则将当前区间添加到结果数组
    - 否则将结果数组最后一个区间的第二个元素更新为当前区间第二个元素和结果数组最后一个区间第二个元素之间的最大值
`,
    link: "https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [];
    for (const interval of intervals) {
        if (res.length === 0 || res[res.length - 1][1] < interval[0]) {
            // 如果列表为空，或者当前区间与上一区间不重合，直接添加
            res.push(interval);
        } else {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
        }
    }
    return res;
};`,
  },
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
    code: `/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    // 常规思路
    // const arr = [];
    // for (let i = 0; i < nums.length; i++) {
    //     arr[(i + k) % nums.length] = nums[i];
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] = arr[i];
    // }

    // 数组翻转
    // 当我们将数组的元素向右移动 k 次后，尾部 k mod n 个元素会移动至数组头部，其余元素向后移动 k mod n 个位置。
    // 先将所有元素翻转，这样尾部的 k mod n 个元素就被移至数组头部，然后再翻转 [0,k mod n − 1] 区间的元素和 [k mod n,n − 1] 区间的元素即能得到最后的答案。
    const n = nums.length;
    reverse(0, n - 1);
    reverse(0, k % n - 1);
    reverse(k % n, n - 1);
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
};`,
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
    code: `function productExceptSelf(nums: number[]): number[] {
    if (nums.length === 0) return [];
    const answer = [];
    answer[0] = 1;
    
    // 下三角，从上往下累乘
    // answer[i - 1] 保存了「下标 i 前面所有元素的乘积」，等价于一个累乘用的临时变量
    for (let i = 1; i < nums.length; i++) {
        answer[i]  = answer[i - 1] * nums[i - 1];
    }
    
    // 上三角，从下往上累乘
    // tmp是上三角的乘积的累计值，再和answer相乘
    // 由于需要把这个后缀乘完再乘回原先存好的前缀，所以额外用到了一个 tmp
    let tmp = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        tmp *= nums[i + 1];
        answer[i] *= tmp;
    }

    return answer;
};`,
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

一个直观的解决方案是使用 O(mn) 的额外空间，但这并不是一个好的解决方案。
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
    code: `/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    // 常规思路
    // const rows = [];
    // const cols = [];
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[0].length; j++) {
    //         if (matrix[i][j] === 0) {
    //             rows.push(i);
    //             cols.push(j);
    //         }
    //     }
    // }
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix[0].length; j++) {
    //         if (rows.includes(i) || cols.includes(j)) {
    //             matrix[i][j] = 0;
    //         }
    //     }
    // }

    // 用矩阵的第一行和第一列代替方法一中的两个标记数组
    // 使用一个标记变量记录第一列是否原本存在 0
    // 为了防止每一列的第一个元素被提前更新，我们需要从最后一行开始，倒序地处理矩阵元素
    let flagCol0 = false;

    // 第一次遍历：打标记
    for (let i = 0; i < matrix.length; i++) {
        // 判断第 i 行的第一列是否为 0
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        // 对该行的其余列（j 从 1 开始）做标记
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                // 在第 i 行的第一列打标（表示整行要置零）
                matrix[i][0] = 0;
                // 在第 j 列的第一行打标（表示整列要置零）
                matrix[0][j] = 0;
            }
        }
    }

    // 第二次遍历：真正置零（倒序！！）
    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = 1; j < matrix[0].length; j++) {
            // 如果第 i 行打了标 OR 第 j 列打了标，就置零
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        // 最后再处理第一列
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }
};`,
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
    code: `function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0) return [];
    const res = [];
    let l = 0;
    let r = matrix[0].length - 1;
    let t = 0;
    let b = matrix.length - 1;

    while (true) {
        // l -> r
        for (let i = l; i < r + 1; i++) res.push(matrix[t][i]);
        t++;
        if (t > b) break;

        // t -> b
        for (let i = t; i < b + 1; i++) res.push(matrix[i][r]);
        r--;
        if (l > r) break;

        // r -> l
        for (let i = r; i > l - 1; i--) res.push(matrix[b][i]);
        b--;
        if (t > b) break;

        // b -> t
        for (let i = b; i > t - 1; i--) res.push(matrix[i][l]);
        l++;
        if (l > r) break;
    }

    return res;
};`,
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
      - 如果要求逆时针：
        - 改为先每行倒序再转置
`,
    link: "https://leetcode.cn/problems/rotate-image/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    // 辅助数组
    // const tmp = matrix.map(row => [...row]);
    // for (let i = 0; i < matrix.length; i++) {
    //     for (let j = 0; j < matrix.length; j++) {
    //         matrix[j][matrix.length - 1 - i] = tmp[i][j];
    //     }
    // }

    // 先对矩阵求转置，然后每行倒序（如果要求逆时针旋转，则先每行倒序再转置）
    // 原地求转置的方法（仅限方阵）：对于 i < j 的元素，交换 matrix[i][j] 和 matrix[j][i]
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (const row of matrix) {
        let i = 0;
        let j = row.length - 1;
        while (i < j) {
            [row[i], row[j]] = [row[j], row[i]];
            i++;
            j--;
        }
    }

    // 如果不是方阵，可以补0成方阵
    // const m = matrix.length;            // 原矩阵行数
    // const n = matrix[0]?.length ?? 0;   // 原矩阵列数
    // const K = Math.max(m, n);           // 目标方阵大小

    // // 1. 补零成 K×K 方阵
    // // — 对已有的每一行，push 足够多的 0
    // for (let i = 0; i < m; i++) {
    //     matrix[i].push(...new Array(K - matrix[i].length).fill(0));
    // }
    // // — 如果原行数 < K，还要再 push (K-m) 行全 0
    // for (let i = m; i < K; i++) {
    //     matrix.push(new Array(K).fill(0));
    // }

    // // 2. 原地旋转：先转置，再逐行反转
    // //   2.1 原地转置 (仅限方阵)
    // for (let i = 0; i < K; i++) {
    //     for (let j = i + 1; j < K; j++) {
    //     [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    //     }
    // }
    // //   2.2 每行倒序
    // for (let i = 0; i < K; i++) {
    //     matrix[i].reverse();
    // }

    // // 3. 裁剪回 m×n → 变成 n×m
    // //   3.1 先保留前 n 行，其它行 splice 掉
    // matrix.splice(n);
    // //   3.2 每行去掉最前面 (K - m) 列的填充值
    // for (let i = 0; i < matrix.length; i++) {
    //     matrix[i].splice(0, K - m);
    // }
};`,
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
                [1, 4, 7, 11,15],
                [2, 5, 8, 12,19],
                [3, 6, 9, 16,22],
                [10,13,14,17,24],
                [18,21,23,26,30]
              ], target = 5
输出：true

示例 2：

输入：matrix = [
                [1, 4, 7, 11,15],
                [2, 5, 8, 12,19],
                [3, 6, 9, 16,22],
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
思路三：
    - Z 字形查找
    - 从右上角开始，设当前坐标为 (row, col)，初始为 (0, n - 1)
    - 只要 (row, col) 在矩阵范围内，就获取当前元素 matrix[row][col]
      - 若 matrix[row][col] === target，说明找到了，直接返回 true
      - 若 matrix[row][col] > target，说明 target 不可能在当前列，因为当前列下方元素更大，因此左移，col--
      - 若 matrix[row][col] < target，说明 target 不可能在当前行，因为当前列左边元素更小，因此下移，row++
    - 如果循环结束还没找到，返回 false
复杂度分析：
    - 思路一：时间 O(mn)，空间 O(1)
    - 思路二：时间 O(mlogn)，空间 O(1)
    - 思路三：时间 O(m+n)，空间 O(1)
`,
    link: "https://leetcode.cn/problems/search-a-2d-matrix-ii/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function searchMatrix(matrix: number[][], target: number): boolean {
    // 思路一
    // for (let i = 0; i < matrix.length; i++) {
    //     if (matrix[i][0] === target) return true;
    //     if (matrix[i][0] < target) {
    //         for (let j = 1; j < matrix[0].length; j++) {
    //             if (matrix[i][j] === target) return true;
    //             if (matrix[i][j] > target) break;
    //         }
    //     }
    // }
    // return false;

    // 思路二
    // 对每一行使用二分查找
    // function search(nums, target) {
    //     let low = 0;
    //     let high = nums.length - 1;
    //     while (low <= high) {
    //         let mid = Math.floor((high + low) / 2);
    //         if (nums[mid] == target) {
    //             return true;
    //         } else if (nums[mid] > target) {
    //             high = mid - 1;
    //         } else {
    //             low = mid + 1;
    //         }
    //     }
    //     return false;
    // }

    // for (let i = 0; i < matrix.length; i++) {
    //     if (matrix[i][0] === target) return true;
    //     if (matrix[i][0] < target) {
    //         if (search(matrix[i], target)) return true;
    //     }
    // }
    // return false;

    // 思路三
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        const cur = matrix[row][col];
        if (cur === target) {
            return true;
        } else if (cur > target) {
            col--;
        } else {
            row++;
        }
    }
    return false;
};`,
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
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // 哈希表
    // const map = new Map();
    // while (headA) {
    //     map.set(headA, 1);
    //     headA = headA.next;
    // }
    // while (headB) {
    //     if (map.has(headB)) {
    //         return headB;
    //     }
    //     headB = headB.next;
    // }
    // return null;

    // 双指针
    let ptrA = headA;
    let ptrB = headB;
    while (ptrA !== ptrB) {
        ptrA = ptrA ? ptrA.next : headB;
        ptrB = ptrB ? ptrB.next : headA;
    }
    return ptrA;
};`,
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
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    // 迭代（双指针）
    // if (!head) return null;
    // let pre = null;
    // let cur = head;

    // while (cur.next) {
    //     let tmp = cur.next;
    //     cur.next = pre;
    //     pre = cur;
    //     cur = tmp;
    // }

    // cur.next = pre;

    // return cur;

    // 递归
    function recur(cur, pre) {
        if (!cur) return pre;
        const res = recur(cur.next, cur); // 反转后的头节点
        cur.next = pre;
        return res;
    }
    return recur(head, null);
    // 递归过程
    // 假设链表为 1 → 2 → 3 → null，初始调用 recur(1, null)：
    // recur(1, null)
    //     ↳ recur(2, 1)
    //         ↳ recur(3, 2)
    //             ↳ recur(null, 3)  // cur=null, pre=3
    //                 返回 pre=3  （新链表头）
    //             回到 recur(3,2): cur=3, pre=2
    //             执行 cur.next = pre：3.next = 2
    //             返回 res=3     （链表现在是 3→2→?）
    //         回到 recur(2,1): cur=2, pre=1
    //         执行 2.next = 1       （此时 3→2→1→?）
    //         返回 res=3
    //     回到 recur(1,null): cur=1, pre=null
    //     执行 1.next = null       （断开原来 1→2 的指向）
    //     返回 res=3
    // 最终返回 3→2→1→null
};`,
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
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    // 将值复制到数组后使用双指针判断
    // if (!head.next) return true;
    // const vals = [];
    // while (head) {
    //     vals.push(head.val);
    //     head = head.next;
    // }
    // for (let i = 0, j = vals.length - 1; i <= j; i++, j--) {
    //     if (vals[i] !== vals[j]) return false;
    // }
    // return true;

    // 快慢指针
    // 1. 使用快慢指针找到中间节点
    // 2. 翻转后半部分链表
    // 3. 判断是否回文
    // 4. 恢复链表
    if (!head.next) return true;

    function reverseList(head) {
        let cur = head;
        let pre = null;
        while (cur.next) {
            let tmp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = tmp;
        }
        cur.next = pre;
        return cur;
    }

    // 使用快慢指针找到中间节点
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // 翻转后半部分链表
    const firstHalfEnd = slow; // 用于恢复链表
    const secondHalfStart = reverseList(firstHalfEnd.next);

    // 判断回文
    let p1 = head;
    let p2 = secondHalfStart;
    let res = true;
    while (res && p2) {
        if (p1.val !== p2.val) res = false;
        p1 = p1.next;
        p2 = p2.next;
    }

    // 恢复链表
    // firstHalfEnd.next = reverseList(secondHalfStart);
    return res;
};`,
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
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    // 常规思路：哈希表
    // if (head == null || head.next == null) return false;
    // const set = new Set();
    // while (head) {
    //     if (set.has(head)) return true;
    //     set.add(head);
    //     head = head.next;
    // }
    // return false;

    // 快慢指针
    if (head == null || head.next == null) return false;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};`,
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
      - 因此，可以令快指针回到原点并变为慢指针，两个慢指针同时移动，下一次相遇时刚好又走了 a 步，到达环入口
`,
    link: "https://leetcode.cn/problems/linked-list-cycle-ii/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    // 哈希表
    // if (!head || !head.next) return null;
    // const map = new Map();
    // while (head) {
    //     if (map.has(head)) return head;
    //     map.set(head, 1);
    //     head = head.next;
    // }
    // return null;

    // 双指针
    let fast = head;
    let slow = head;
    while (true) {
        if (!fast || !fast.next || !fast.next.next) return null;
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }
    fast = head;
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};`,
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
- 思路一：迭代
    - 使用 dummyHead 节点
    - 注意两链表长度不同的情况
    - 时间复杂度：O(n+m)，其中 n 和 m 分别为两个链表的长度；空间复杂度：O(1)
- 思路二：递归
    - 当 list1[0] < list2[0] 时：
        - list = list1[0] + merge(list1[1:], list2)
    - 否则：
        - list = list2[0] + merge(list1 + list2[1:])
    - 时间复杂度：O(n+m)；空间复杂度：O(n+m)
`,
    link: "https://leetcode.cn/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 迭代
    // const dummyHead = new ListNode(-Infinity);

    // let prev = dummyHead;

    // while (list1 && list2) {
    //     if (list1.val <= list2.val) {
    //         prev.next = list1;
    //         list1 = list1.next;
    //     } else {
    //         prev.next = list2;
    //         list2 = list2.next
    //     }
    //     prev = prev.next;
    // }

    // prev.next = list1 ?? list2;

    // return dummyHead.next;

    // 递归
    if (!list1) {
        return list2;
    } else if (!list2) {
        return list1
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
`,
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
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode();
    let cur = dummyHead;
    let carry = 0;

    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;

        let sum = n1  + n2 + carry;

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }

        cur.next = new ListNode(sum);
        cur = cur.next

        l1 = l1?.next;
        l2 = l2?.next;
    }

    if (carry === 1) {
        cur.next = new ListNode(1);
    }
    
    return dummyHead.next;
};`,
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
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // let length = 0;
    // let cur = head;
    // while (cur) {
    //     length++;
    //     cur = cur.next;
    // }

    // const dummyHead = new ListNode(0, head);
    // cur = dummyHead;
    // for (let i = 0; i < length - n; i++) {
    //     cur = cur.next;
    // }
    // cur.next = cur.next.next;

    // return dummyHead.next;

    // 双指针
    const dummyHead = new ListNode(0, head);
    let second = dummyHead;
    let first = dummyHead;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummyHead.next;
};`,
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
    - 时间复杂度：O(n)，空间复杂度：O(n)
思路二：迭代（空间更优）
    - 使用 dummyHead 节点，因为如果头节点需要和下一节点交换，就需要头节点的前驱节点
    - 依次操作指针
    - 时间复杂度：O(n)，空间复杂度：O(1)
    `,
    link: "https://leetcode.cn/problems/swap-nodes-in-pairs/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    // 递归
    // if (!head || !head.next) return head;
    // const newHead = head.next;
    // head.next = swapPairs(newHead.next);
    // newHead.next = head;
    // return newHead;

    // 迭代，空间更优
    const dummyHead = new ListNode(0, head);
    let cur = dummyHead;
    while (cur.next && cur.next.next) {
        const node1 = cur.next;
        const node2 = cur.next.next;
        cur.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        cur = node1;
    }
    return dummyHead.next;
};`,
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
    - 时间复杂度 O(N)，空间复杂度 O(N)
思路二：拼接+拆分（理论空间更优，但实际更慢且空间开销更大）
    - 1. 拼接
      - 设原链表为 node1 -> node2 -> ...
      - 构造新链表：node1 -> newNode1 -> node2 -> newNode2 -> ...
      - 若节点 cur 的 random 指向 cur.random，那么对应的新节点 cur.next 的 random 指向 cur.random.next
    - 2. 拆分
      - 使用指针 pre 和 cur 分别指向两个链表的头节点
      - 遍历执行 pre.next = pre.next.next 和 cur.next = cur.next.next 来拆分链表
      - 时间复杂度 O(N)，空间复杂度 O(1)
    `,
    link: "https://leetcode.cn/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    // 思路一：哈希表
    if (!head) return null;

    const map = new Map();
    let cur: _Node | null = head;
    
    // 哈希表储存每个节点的拷贝
    while (cur) {
        map.set(cur, new _Node(cur.val));
        cur = cur.next;
    }

    cur = head;

    while (cur) {
        map.get(cur).next = cur.next ? map.get(cur.next) : null;
        map.get(cur).random = cur.random ? map.get(cur.random) : null;
        cur = cur.next;
    }

    return map.get(head);

    // 思路二：拼接+拆分
    // if (!head) return null;
    
    // // 拼接链表
    // let cur = head;
    // while (cur) {
    //     const tmp = new _Node(cur.val);
    //     tmp.next = cur.next;
    //     cur.next = tmp;
    //     cur = tmp.next;
    // }

    // // 构建 next 和 random 指针
    // cur = head;
    // while (cur) {
    //     if (cur.random) {
    //         cur.next.random = cur.random.next;
    //     }
    //     cur = cur.next.next;
    // }

    // // 拆分链表
    // const res = head.next;
    // let pre = head;
    // cur = head.next;
    // while (cur.next) {
    //     pre.next = pre.next.next;
    //     cur.next = cur.next.next;
    //     pre = pre.next;
    //     cur = cur.next;
    // }

    // pre.next = null; // 原链表尾节点
    // return res;
};`,
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
    - 归并排序本质上是通过二分法得到链表最小单元，再依次向上合并
    - 每轮合并都有固定的操作长度 intv
      - 第一轮 intv = 1，第二轮 intv = 2, 第三轮 intv = 4...
      - 每轮结束后 intv *= 2，若 intv 大于数组长度则排序完成
    - 使用一个 dummyHead 节点，既可以在每轮合并后找到头节点，也可以在排序时辅助交换指针
    `,
    link: "https://leetcode.cn/problems/sort-list/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 归并排序（从底至顶直接合并）
function sortList(head: ListNode | null): ListNode | null {
    let length = 0;
    let cur = head;
    // 计算链表长度
    while (cur) {
        length++;
        cur = cur.next;
    }

    let intv = 1; // 当前要合并的子链表长度
    cur = head;
    let dummyHead = new ListNode(0, head);
    while (intv < length) {
        let pre = dummyHead; // 指向已经合并好的链表尾部，即下一次合并后的插入点
        let mergeHead = pre.next; // 本轮待处理的起始位置
        while (mergeHead) {
            // 切分出第一个子链表 h1
            let h1 = mergeHead;
            let i = intv;
            while (i > 0 && mergeHead) {
                mergeHead = mergeHead.next;
                i--;
            }
            if (i > 0) break; // 链表剩余元素个数少于 intv, 无需合并环节，直接 break，执行下一轮合并

            // 切分出第二个子链表 h2
            let h2 = mergeHead;
            i = intv;
            while (i > 0 && mergeHead) {
                mergeHead = mergeHead.next;
                i--;
            }

            // 合并两个子链表
            let l1 = intv; // h1 的理论长度
            let l2 = intv - i; // h2 的实际长度（可能不足 intv）
            while (l1 > 0 && l2 > 0) {
                if (h1.val < h2.val) {
                    pre.next = h1;
                    h1 = h1.next;
                    l1--;
                } else {
                    pre.next = h2;
                    h2 = h2.next;
                    l2--;
                }
                pre = pre.next;
            }

            // 将剩余部分直接接上
            l1 > 0 ? pre.next = h1 : pre.next = h2;
            // 跳过剩余节点
            while (l1 > 0 || l2 > 0) {
                pre = pre.next;
                l1--;
                l2--;
            }

            // 链接到下一个待处理区块
            pre.next = mergeHead;
        }

        intv *= 2;
    }

    return dummyHead.next;
};`,
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
    code: `// 方法一
// 双向链表+哈希表
// 手动实现双向链表
// class LRUCache {
//     map;
//     capacity;
//     dummyHead;
//     dummyTail;
//     currentSize;
//     constructor(capacity: number) {
//         this.capacity = capacity;
//         this.map = new Map();
//         this.dummyHead = new _ListNode(0, 0, null, null);
//         this.dummyTail = new _ListNode(0, 0, null, null); // 尾部是要被移除的节点
//         this.dummyHead.next = this.dummyTail;
//         this.dummyTail.prev = this.dummyHead;
//         this.currentSize = 0;
//     }

//     get(key: number): number {
//         if (this.map.has(key)) {
//             const node = this.map.get(key);
//             this.moveToHead(node);
//             return node.value;
//         } else {
//             return -1;
//         }
//     }

//     put(key: number, value: number): void {
//         if (this.map.has(key)) {
//             const node = this.map.get(key);
//             node.value = value;
//             this.moveToHead(node);
//         } else {
//             const node = new _ListNode(key, value);
//             this.map.set(key, node);
//             this.addToHead(node);
//             this.currentSize++;
//             if (this.currentSize > this.capacity) {
//                 const nodeToRemove = this.dummyTail.prev;
//                 nodeToRemove.prev.next = nodeToRemove.next;
//                 nodeToRemove.next.prev = nodeToRemove.prev;
//                 this.map.delete(nodeToRemove.key);
//                 this.currentSize--;
//             }
//         }
//     }

//     addToHead(node: _ListNode) {
//         node.prev = this.dummyHead;
//         node.next = this.dummyHead.next;
//         this.dummyHead.next.prev = node;
//         this.dummyHead.next = node;
//     }

//     moveToHead(node: _ListNode) {
//         // 先移除再添加到开头
//         node.prev.next = node.next;
//         node.next.prev = node.prev;
//         this.addToHead(node);
//     }
// }

// class _ListNode {
//     key: number;
//     value: number;
//     prev: _ListNode | null;
//     next: _ListNode | null;
//     constructor(key: number, value: number, prev?: _ListNode | null, next?: _ListNode | null) {
//         this.key = key;
//         this.value = value;
//         this.prev = prev;
//         this.next = next;
//     }
// }

// 方法二
// 基于 JS Map 迭代器
class LRUCache {
  capacity: number;
  map: Map<number, number> = new Map();
  constructor(capacity: number) {
    // 利用迭代器实现
    this.map = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value = this.map.get(key)
      // 重新 set，相当于更新到 map 最后
      this.map.delete(key)
      this.map.set(key, value)
      return value
    } 
    return -1
  }

  put(key: number, value: number): void {
    // 如果有，就删了再赋值
    if (this.map.has(key)) {
      this.map.delete(key)
    }

    this.map.set(key, value)

    // 判断是不是容量超了，淘汰机制
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value) // 利用迭代器的 next() 方法
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */`,
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
    id: 46,
    title: "全排列 permutations",
    category: "回溯",
    content: `
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同
    `,
    difficulty: "中等",
    hint: `
- 回溯
- 回溯算法就像是在一个“决策树”上进行深度优先搜索（DFS）
    - 做选择 (Make a choice)
    - 向前探索 (Explore)
    - 撤销选择 (Backtrack)
- 路径（Path）: 你当前已经做出的选择，也就是当前状态 state
- 选择列表（Choices）: 你当前可以做的选择，也就是还没有被选择的元素
- 结束条件（End Condition）: 当路径的长度等于数字的总数时，说明你已经走到底了，找到了一个完整的解
    `,
    link: "https://leetcode.cn/permutations/description/?envType=study-plan-v2&envId=top-100-liked",
    code: `function permute(nums: number[]): number[][] {
  const res = [];
  const selected = Array.from({ length: nums.length }, () => false);
  const state = []; // 直至目前已被选择的元素

  function backtrace(choices) {
    if (state.length === choices.length) {
      res.push([...state]);
      return;
    }
    choices.forEach((choice, i) => {
      if (!selected[i]) {
        selected[i] = true;
        state.push(choice);
        backtrace(choices);
        selected[i] = false;
        state.pop();
      }
    })
  }

  backtrace(nums);
  return res;
};
`,
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
  {
    id: 198,
    title: "打家劫舍 house-robber",
    category: "动态规划",
    content: `
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：

输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。

示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 400
    `,
    difficulty: "中等",
    hint: `
- 定义状态：
    - dp[i] = 在前 i 间房屋（从第 0 间到第 i-1 间）中，我们能偷窃到的最高总金额
    - 目标：求出 dp[n]，其中 n 是房屋的总数量
- 状态转移方程：
    - 对于第 i 间房屋（索引为 i-1，金额为 nums[i-1]），有两个选择：
      - 偷窃第 i 间房屋
        - 能获得的总金额是：nums[i-1] + dp[i-2]
      - 不偷窃第 i 间房屋
        - 能获得的总金额是：dp[i-1]
    - 因此，状态转移方程：dp[i] = max(dp[i−1], dp[i−2] + nums[i−1])
- 初始条件（边界情况）：
    - dp[0]：代表前 0 间房，收益是 0，即 dp[0] = 0
    - dp[1]：代表前 1 间房（即 nums[0]）。收益是 nums[0]，即 dp[1] = nums[0]
    `,
    link: "https://leetcode.cn/problems/house-robber/?envType=study-plan-v2&envId=top-100-liked",
    code: `function rob(nums: number[]): number {
    const dp = Array.from({ length: nums.length }, () => 0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        // 不偷 i 房间：dp[i] = dp[i - 1]
        // 偷 i 房间：dp[i] = dp[i - 2] + nums[i]
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[nums.length - 1]
};`,
  },
  {
    id: 279,
    title: "完全平方数 perfect-squares",
    category: "动态规划",
    content: `
给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

示例 1：

输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4

示例 2：

输入：n = 13
输出：2
解释：13 = 4 + 9
 
提示：

1 <= n <= 104
    `,
    difficulty: "中等",
    hint: `
- 定义状态：
    - 目标是求和为 n 的最少数量，那么子问题就是求解从 1 到 n 所有数字的最优解
    - dp[i] = 和为 i 的完全平方数的最少数量
    - 数组的大小是 n+1，存储从 dp[0] 到 dp[n] 的所有结果
    - 目标：求出 dp[n]
- 状态转移方程：
    - 我们如何从已知的子问题的最优解（比如 dp[1], dp[2]... dp[i-1]）推导出 dp[i] 的最优解？
      - 思考 dp[i] 的构成：数字 i 无论如何分解，它一定是由 (i - 某个完全平方数) + 某个完全平方数 构成的
        - 举例：i=12：
          - 12 可以看作是 11 + 1，其中 1 是完全平方数 。那么构成 12 所需的数量就是构成 11 的数量 + 1。即 dp[11] + 1
          - 12 也可以看作是 8 + 4，其中 4 是完全平方数。那么构成 12 所需的数量就是构成 8 的数量 + 1。即 dp[8] + 1
          - 12 还可以看作是 3 + 9，其中 9 是完全平方数。那么构成 12 所需的数量就是构成 3 的数量 + 1。即 dp[3] + 1
          - 我们要求的是最少的数量，因此取上面所有可能的情况中的最小值
        - 推广到任意 i：
          - 计算 dp[i]，我们可以尝试减去每一个不大于 i 的完全平方数 j*j，然后查看剩余部分 i - j*j 的最优解
          - 对于任意 j 使得 j*j <= i，都有一个构成 i 的方案，其所需的平方数数量为 dp[i - j*j] + 1 (这里的 +1 指的就是 j*j 这一个完全平方数)
    因此，得到状态转移方程：dp[i] = min(dp[i − j*j] + 1)，其中 j 满足 j*j <= i
- 初始条件（边界情况）：
    - dp[i] = i（理论最大值）
    `,
    link: "https://leetcode.cn/problems/perfect-squares/?envType=study-plan-v2&envId=top-100-liked",
    code: `function numSquares(n: number): number {
    const dp = Array.from({ length: n + 1 }, () => 0);
    for (let i = 1; i <= n; i++) {

        // 初始状态 dp[i] 均取最大值 i ，即 1 + 1 + ... + 1，i 个1
        dp[i] = i;

        // 遍历 [1, sqrt(i)] 范围内的完全平方数
        // j * j 代表一个完全平方数
        for (let j = 1; j * j <= i; j++) {

            // 将 i 拆分成 j * j 加上 i - j * j
            // j * j 本身就是一个完全平方数，所以它贡献了 1 个完全平方数
            // i - j * j 是剩下的部分，已经计算过 dp[i - j * j]，它表示 i - j * j 所需的最少完全平方数
            // 所以，dp[i - j * j] + 1 代表使用 j * j 作为其中一个完全平方数来构成 i 所需的总数量
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};`,
  },
  {
    id: 322,
    title: "零钱兑换 coin-change",
    category: "动态规划",
    content: `
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1

示例 2：

输入：coins = [2], amount = 3
输出：-1

示例 3：

输入：coins = [1], amount = 0
输出：0
 

提示：

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
    `,
    difficulty: "中等",
    hint: `
- 定义状态：
    - 目标是凑出总金额 amount 所需的最少硬币个数，那么子问题就是凑出比 amount 小的金额（1, 2, ..., amount-1）所需的最少硬币数
    - dp[i] = 凑成总金额 i 所需要的最少硬币个数
- 状态转移方程：
    - dp[i] 的值应该如何从之前的状态推导出来？
      - 如果要凑出金额 i，最后一步必然是加上了某一枚硬币才达到的。这枚硬币的面额可能是 coins 数组中的任意一个，称之为 c，那么在这之前的总金额一定是 i - c
      - 由于已经知道凑出 i - c 所需的最少硬币数是 dp[i - c]，那么凑出 i 的硬币数就是 dp[i - c] + 1（这里的 +1 就是最后加上的这枚硬币 c）
      - 由于 coins 数组中可能有多重面额的硬币，所以我们有多种选择：
        - 如果最后一枚是 coins[0]，所需总数为 dp[i - coins[0]] + 1
        - 如果最后一枚是 coins[1]，所需总数为 dp[i - coins[1]] + 1
        - 如果最后一枚是 coins[2]，所需总数为 dp[i - coins[2]] + 1
        - ... （对于所有 coin of coins 且 coin <= i）
      - 我们想要的是最少的硬币数，选择所有可能性中最小的值
    - 因此，得到状态转移方程：dp[i] = min(dp[i−c] + 1) for c of coins && c <= i
- 初始条件（边界情况）：
    - dp[0] 表示凑出金额 0 所需的最少硬币数，显然是 0 个，因此 dp[0] = 0
    - 在计算 dp[i] 时，我们会用到 min，因此需要给 dp 数组中的其他元素一个初始值。这个初始值应该是一个“极大值”，表示“无法凑出”
      - 可以将初始值设为 amount + 1，因为凑出 amount 最多只需要 amount 个硬币（所有硬币面额都是 1）。所以 amount + 1 是一个不可能达到的数
    - 最终 dp[amount] 存储了凑出总金额 amount 所需的最少硬币数
      - 如果最终 dp[amount] 的值仍然是初始化的“极大值” (amount + 1)，这说明在计算过程中，它从未被成功更新过
      - 这也就意味着，用给定的硬币面额无法凑出总金额 amount。在这种情况下，根据题目要求，应该返回 -1
    `,
    link: "https://leetcode.cn/problems/coin-change/?envType=study-plan-v2&envId=top-100-liked",
    code: `function coinChange(coins: number[], amount: number): number {
    const MAX = amount + 1;

    // dp[i] 代表凑出金额 i 所需的最少硬币数
    const dp = Array.from({ length: amount + 1 }, () => MAX);

    dp[0] = 0;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === MAX ? -1 : dp[amount];
};`,
  },
  {
    id: 139,
    title: "单词拆分 word-break",
    category: "动态规划",
    content: `
给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

 

示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
     注意，你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 

提示：

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s 和 wordDict[i] 仅由小写英文字母组成
wordDict 中的所有字符串 互不相同
    `,
    difficulty: "中等",
    hint: `
- 定义状态：
    - 要判断字符串 s 能否被拆分，子问题就是：s 的各个前缀能否被拆分？
    - dp[i] = 字符串 s 中长度为 i 的前缀（即子串 s[0...i-1]）是否可以被成功拆分
    - dp 数组的长度是 s.length + 1。目标：求解 dp[s.length] 的值
- 状态转移方程：
    - dp[i] 的真假，是如何由之前的状态（dp[0], dp[1], ..., dp[i-1]）决定的呢？
    - 考虑 dp[i] 为真的条件：
      - 如果长度为 i 的前缀 s[0...i-1] 能够被成功拆分，那么它必然可以被看作是 (一个更短的、可被成功拆分的前缀) + (一个字典中的单词) 这样的组合
      - 换句话说，我们可以在 0 到 i-1 之间寻找一个“分割点” j，如果满足以下两个条件，那么 dp[i] 就为 true：
        - 分割点 j 之前的部分 s[0...j-1] 可以被成功拆分，也就是 dp[j] == true
        - 分割点 j 到 i-1 的部分 s[j...i-1] 是字典 wordDict 中的一个单词
      - 只需要在 j 从 0 到 i-1 的所有可能中，找到至少一个满足上述两个条件的分割点，就可以断定 dp[i] 为 true
      - 因此，得到状态转移方程：dp[i] = ∃j∈[0, i−1] (dp[j] && s.substring(j, i) is in wordDict)
- 初始条件（边界情况）：
    - dp[0]：空字符串（长度为0）前缀，定义为 true，因为一个空的前缀是合法的拆分起点
    - 其他元素初始化为 false
    `,
    link: "https://leetcode.cn/problems/word-break/?envType=study-plan-v2&envId=top-100-liked",
    code: `function wordBreak(s: string, wordDict: string[]): boolean {
    const set = new Set(wordDict);
    const dp = Array.from({ length: s.length + 1 }, () => false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};`,
  },
  {
    id: 300,
    title: "最长递增子序列 longest-increasing-subsequence",
    category: "动态规划",
    content: `
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4

示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 104

进阶：

你能将算法的时间复杂度降低到 O(nlog(n)) 吗?
    `,
    difficulty: "中等",
    hint: `
- 思路一：标准动态规划 O(n^2)
    - 定义状态：
      - 子问题：以每个元素结尾的子序列的最长递增子序列
      - dp[i] = 在 nums 数组中，以 nums[i] 这个元素结尾的最长递增子序列的长度
      - 最终答案将是整个 dp 数组中的最大值，因为最长递增子序列可能在任何一个位置结束
    - 状态转移方程：
      - 要计算 dp[i]，即以 nums[i] 结尾的最长递增子序列的长度，我们必须选择 nums[i] 作为这个子序列的最后一个元素
      - 那么，它前面的那个元素 nums[j] 必须满足两个条件：
        - 它在 nums[i] 的前面，即 j < i
        - 它的值比 nums[i] 小，即 nums[j] < nums[i]，这样才能递增
      - 如果我们把 nums[i] 接在以 nums[j] 结尾的最长递增子序列的后面，就能形成一个更长的、以 nums[i] 结尾的递增子序列。这个新序列的长度是 dp[j] + 1
      - 为了让 dp[i] 尽可能大，应该遍历所有满足条件的 j（0 <= j < i 且 nums[j] < nums[i]），然后从所有 dp[j] + 1 的结果中取最大值
      - 因此，得到状态转移方程：dp[i] = max(1, max(dp[j] + 1)) for j in [0, i] && nums[j] < nums[i]
    - 初始条件（边界情况）：
      - 任意 nums[i] 本身就可以构成一个长度为 1 的子序列，因此将 dp 数组的所有元素都初始化为 1
- 思路二：贪心 + 二分查找 O(nlogn)
    - 考虑贪心：如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小
    - 维护一个 tails 数组，tails[i] 表示长度为 i + 1 的递增子序列结尾元素的最小值
    - 那么长度为 i + 2 的递增子序列一定是由长度为 i + 1 的递增子序列加上一个更大的数构成的
      - 也就是说长度为 i + 2 的递增子序列的末尾元素一定大于长度为 i + 1 的递增子序列的末尾元素
      - 也就是说 tails 数组一定递增
    - 遍历 nums 数组：
      - 如果 nums[i] 大于 tails 中的所有元素（即大于 tails 的末尾元素），那么直接将 nums[i] 加入 tails 末尾
        - 相当于最长递增子序列的长度加一
      - 如果 nums[i] 不能大于 tails 中的所有元素，那么查找第一个大于等于 nums[i] 的元素 tails[k]，使用 nums[i] 替换它
        - 相当于找到了一个末尾数字更小的长度为 k + 1 的序列，更容易被后面的数字接上
        - 查找过程可以使用二分查找
    `,
    link: "https://leetcode.cn/problems/longest-increasing-subsequence/?envType=study-plan-v2&envId=top-100-liked",
    code: `function lengthOfLIS(nums: number[]): number {
    // 动态规划
    // dp[i] 的值代表 nums 以 nums[i] 结尾的最长子序列长度
    // 遍历[0, i), dp[i] = max(dp[i], dp[j] + 1) for j in [0, i)

    // const dp = Array.from({ length: nums.length }, () => 1);
    // let max = 1;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         if (nums[j] < nums[i]) {
    //             dp[i] = Math.max(dp[i], dp[j] + 1);
    //         }
    //     }
    //     if (dp[i] > max) max = dp[i];
    // }
    // return max;

    // 进阶解法
    const tails = [nums[0]];
    for (const num of nums) {
        if (num > tails[tails.length - 1]) {
            tails.push(num);
        } else {
            // 二分查找
            let l = 0;
            let r = tails.length - 1;
            while (l <= r) {
                const m = Math.floor((l + r) / 2);
                if (num <= tails[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            tails[l] = num;
        }
    }
    return tails.length;
};`,
  },
  {
    id: 152,
    title: "乘积最大子数组 maximum-product-subarray",
    category: "动态规划",
    content: `
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。

示例 1:

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。

示例 2:

输入: nums = [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

提示:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
nums 的任何子数组的乘积都 保证 是一个 32-位 整数
    `,
    difficulty: "中等",
    hint: `
思路一：常规动态规划
    - 定义状态：
        - 如果只定义 dp[i] 为以 nums[i] 结尾的最大乘积，是行不通的
          - 因为有负数的存在，一个当前看起来很小的负数乘积，在遇到下一个负数时，可能会变成一个极大的正数乘积。因此，我们不能只关心最大值，也要关心最小值
        - 所以，在每个位置 i，我们需要同时记录两个状态：
          - 以 nums[i] 结尾的最大乘积
          - 以 nums[i] 结尾的最小乘积
        - 定义两个 DP 数组：
          - max_dp[i]: 以 nums[i] 结尾的连续子数组的最大乘积
          - min_dp[i]: 以 nums[i] 结尾的连续子数组的最小乘积
        - 最终的答案是所有 max_dp[i] 中的最大值
    - 状态转移方程：
        - 以 max_dp[i] 为例，它有三种可能性：
          - 1. 来自前一个最大乘积：max_dp[i-1] * nums[i]（当 nums[i] 是正数时，这可能是最大值）
          - 2. 来自前一个最小乘积：min_dp[i-1] * nums[i]（当 nums[i] 是负数时，负负得正，这可能是最大值）
          - 3. 不与前面相乘：nums[i]（当前面的乘积是负数或很小时，可能还不如 nums[i] 本身大）
        - 所以，max_dp[i] 就是这三者中的最大值。同理，min_dp[i] 是这三者中的最小值
        - 因此，得到状态转移方程：
          - max_dp[i] = max(max_dp[i-1] * nums[i], min_dp[i-1] * nums[i], nums[i])
          - min_dp[i] = min(max_dp[i-1] * nums[i], min_dp[i-1] * nums[i], nums[i])
    - 初始条件（边界情况）：
        - 对于第一个元素 nums[0]，以它结尾的子数组只有它自己
          - max_dp[0] = nums[0]
          - min_dp[0] = nums[0]
        - 还需要记录全局最大值作为结果，每计算出一个 max_dp[i]，我们都要用它来更新全局最大值
思路二：滚动数组优化
    - 在计算 i 时，只用到了 i-1 的状态，因此完全不需要存储整个 dp 数组
    - 可以用两个变量 max 和 min 来代替 dp 数组
    `,
    link: "https://leetcode.cn/problems/maximum-product-subarray/?envType=study-plan-v2&envId=top-100-liked",
    code: `function maxProduct(nums: number[]): number {
    // 记录两个状态：
    // maxDp[i]: 以索引 i 结尾的 连续子数组 的 最大 乘积。
    // minDp[i]: 以索引 i 结尾的 连续子数组 的 最小 乘积。
    
    // 以 nums[i] 结尾的子数组，要么就是 nums[i] 本身，要么是 nums[i] 和之前某个以 i-1 结尾的子数组的组合。
    // 所以，maxDp[i] 的值有三种可能：
    //      1. nums[i] 本身。
    //      2. maxDp[i-1] * nums[i] (当 nums[i] 是正数时，我们希望乘以一个大的正数)。
    //      3. minDp[i-1] * nums[i] (当 nums[i] 是负数时，我们希望乘以一个小的负数，负负得正)。
    
    // 因此，状态转移方程如下：
    // maxDp[i] = max(nums[i], maxDp[i-1] * nums[i], minDp[i-1] * nums[i])
    // 同理，minDp[i] 的状态转移方程为：
    // minDp[i] = min(nums[i], maxDp[i-1] * nums[i], minDp[i-1] * nums[i])

    // 使用 dp 数组形式：
    // const maxDp: number[] = Array.from({ length: nums.length }, () => -Infinity);
    // const minDp: number[] = Array.from({ length: nums.length }, () => -Infinity);
    // maxDp[0] = nums[0];
    // minDp[0] = nums[0];
    // let result = nums[0];

    // for (let i = 1; i < nums.length; i++) {
    //     maxDp[i] = Math.max(nums[i], maxDp[i-1] * nums[i], minDp[i-1] * nums[i]);
    //     minDp[i] = Math.min(nums[i], maxDp[i-1] * nums[i], minDp[i-1] * nums[i]);
    //     result = Math.max(result, maxDp[i]);
    // }

    // return result

    // 滚动数组优化：不需要完整的 dp 数组，只需要用两个变量来记录上一步的最大和最小乘积即可
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const tempMax = max;
        max = Math.max(nums[i], tempMax * nums[i], min * nums[i]);
        min = Math.min(nums[i], tempMax * nums[i], min * nums[i]);
        result = Math.max(result, max);
    }

    return result;
};`,
  },
  {
    id: 416,
    title: "分割等和子集 partition-equal-subset-sum",
    category: "动态规划",
    content: `
给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。

示例 2：

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。

提示：

1 <= nums.length <= 200
1 <= nums[i] <= 100
    `,
    difficulty: "中等",
    hint: `
- 问题转换：
    - 如果一个数组能被分割成两个和相等的子集，那么这两个子集的和必然都等于原数组所有元素总和的一半。
      - 首先，计算出数组 nums 的总和 total_sum
        - 如果 total_sum 是一个奇数，那么它不可能被平分成两个整数的和。这种情况下，我们可以直接断定无法完成分割，返回 false
        - 如果 total_sum 是一个偶数，我们令 target = total_sum / 2。现在，原问题就转换成了：
          - 我们能否从 nums 数组中，挑选出若干个数字，使得这些数字的和恰好等于 target？
          - 这个问题类似于 0-1 背包问题：
            - 背包的容量 capacity：target
            - 要装的物品 items：nums 数组中的每一个数字
            - 每个物品的重量 weight：nums[i] 的值
            - 每个物品的价值 value：nums[i] 的值（在这里，重量和价值是相同的）
          - 相当于求用这些物品（数字）能否恰好装满这个容量为 target 的背包
- 定义状态：
    - dp[j] = 是否存在 nums 的一个子集，其所有元素之和恰好为 j
    - dp 数组的大小是 target + 1，最终目标是求 dp[target] 的值
- 状态转移方程：
    - 遍历 nums 数组中的每一个数字 num，然后用这个 num 来更新整个 dp 数组
      - 对于数字 num 和目标和 j，我们有两种选择：
        - 不将 num 放入子集：那么 dp[j] 的状态就取决于在考虑 num 之前，我们能否凑出和为 j。也就是说，它的值等于旧的 dp[j]
        - 将 num 放入子集：需要检查在不放 num 的情况下，是否能凑出 j - num 的和，即 dp[j - num] 是否为 true（这要求 j >= num）
      - 因此，得到状态转移方程：dp[j] = dp[j] ∣∣ dp[j − num]
    - 注意：在更新 dp 数组时，内层循环（遍历 j）必须从后往前（从 target 到 num）
      - 因为0/1背包问题中的每个物品（数字）只能使用一次
      - 如果我们从前往后遍历 j，当我们计算 dp[j] 时，所依赖的 dp[j - num] 可能已经是被当前这个 num 更新过的状态
      - 这会导致一个数字被重复使用，问题就变成了“完全背包问题”，与题意不符
      - 从后往前遍历，可以保证我们计算 dp[j] 时所引用的 dp[j - num] 还是上一轮（未被当前 num 更新过）的状态。
- 初始条件（边界情况）：
    - dp[0] = true，因为和为 0 一定可以达成（即不选择任何数字）
    - dp 数组的其余所有元素 dp[1...target] 初始化为 false
    `,
    link: "https://leetcode.cn/problems/partition-equal-subset-sum/?envType=study-plan-v2&envId=top-100-liked",
    code: `function canPartition(nums: number[]): boolean {
    // 如果数组能被分割成两个和相等的子集，那么这两个子集的和都必须等于 sum / 2。
    // 因此，问题转化为：能否从原数组中找到一个子集，使得它的和等于 sum / 2。
    // 与 0-1背包问题 类似。每个数字是物品，sum / 2 是背包容量，每个数字的“价值”和“重量”都等于其本身。
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    if (sum % 2 !== 0) return false;

    let target = sum / 2;
    // dp[j] 表示是否能凑出和为 j。
    // 即：dp 数组的索引代表了我们想要凑成的和。
    // 最小可能凑出的和是 0，最大的和是target，因此数组索引从 0 到 target，长度为 target + 1。
    const dp = Array.from({ length: target + 1 }, () => false);
    dp[0] = true;

    // 遍历每个数字（物品）
    for (const num of nums) {
        // 从 target 倒序遍历到 num
        // 如果 j 从小到大遍历，那么在计算 dp[j] 时，dp[j - num] 已经被当前 num 更新过了。
        // 这会导致一个元素被多次使用，而我们希望每个元素只使用一次（0-1 背包的特性）。
        for (let j = target; j >= num; j--) {
            // 如果不选择当前 num，则看 dp[j] 本身是否为 true (由之前的数字凑出)
            // 如果选择当前 num，则看 dp[j - num] 是否为 true (从之前的数字凑出 j - num)
            dp[j] = dp[j] || dp[j - num];
            if (dp[target] === true) return true;
        }
    }

    return false;
};`,
  },
  {
    id: 32,
    title: "最长有效括号 longest-valid-parentheses",
    category: "动态规划",
    content: `
给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

示例 1：

输入：s = "(()"
输出：2
解释：最长有效括号子串是 "()"

示例 2：

输入：s = ")()())"
输出：4
解释：最长有效括号子串是 "()()"

示例 3：

输入：s = ""
输出：0

提示：

0 <= s.length <= 3 * 104
s[i] 为 '(' 或 ')'
    `,
    difficulty: "困难",
    hint: `
- 定义状态：
    - 子问题：对于字符串 s[0..i] ，找出以 s[i] 结尾的最长有效括号子串的长度
    - dp[i] = 在输入字符串 s 中，以索引 i 处的字符 s[i] 结尾 的最长有效括号子串的长度
    - dp 数组的大小和字符串 s 的长度相同。最终答案是整个 dp 数组中出现过的最大值
- 状态转移方程：
    - 从左到右遍历字符串 s，计算每一个 dp[i] 的值：
      - 如果 s[i] 是左括号 '('：
        - 一个有效的括号子串不可能以左括号结尾，所以dp[i] = 0
      - 如果 s[i] 是右括号 ')'：
        - 如果 s[i-1] 是左括号 '('，即 ...() 形式：
          - 这说明我们找到了一个最小的有效单元 "()"，长度是 2。但我们还需要考虑这个单元前面是否连接着另一个有效的括号子串
          - 此时 dp[i] = (i >= 2 ? dp[i−2] : 0) + 2
        - 如果 s[i-1] 是右括号 ')'，即 ...)) 形式：
          - 比如 s = "(())"，当 i=3（最后一个右括号）时，s[2] 也是 ')'，我们需要跳过以 s[2] 结尾的有效子串，才能找到与 s[3] 配对的 '('
          - 由于以 s[i-1] 结尾的有效子串长度是 dp[i-1]，因此这个子串的起始位置是 i - 1 - dp[i-1] + 1 = i - dp[i-1]
          - 我们需要寻找的、与 s[i] 配对的 '(' 的位置就在这个子串的前面一个，即 j = i - dp[i-1] - 1
          - 我们首先要判断这个 j 是否有效（j >= 0），并且 s[j] 是否真的是 '('。
            - 如果不是，说明 s[i] 无法找到匹配，dp[i] = 0。
            - 如果是，说明我们找到了一个更大的、形如 ( ... ) 的有效括号。它的长度是：
              - 内部有效子串的长度 dp[i-1]。
              - 外面包围的 () 的长度 +2。
              - 还要加上 在 s[j] 这个 '(' 之前可能存在的另一个有效子串的长度，即 dp[j-1]。
              - 所以此时 dp[i] = dp[i−1] + 2 + (j >= 1 ? dp[j−1] : 0)
- 初始条件（边界情况）：
    - 所有元素初始化为 0
    `,
    link: "https://leetcode.cn/problems/longest-valid-parentheses/?envType=study-plan-v2&envId=top-100-liked",
    code: `function longestValidParentheses(s: string): number {
    const dp = Array.from({ length: s.length }, () => 0);
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === "(") {
            dp[i] = 0;
        } else {
            if (s[i - 1] === "(") {
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else {
                const j = i - dp[i - 1] - 1;
                if (!(j >= 0 && s[j] === "(")) {
                    dp[i] = 0
                } else {
                    dp[i] = dp[i - 1] + 2 + (j >= 1 ? dp[j - 1] : 0);
                }
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};`,
  },
  {
    id: 62,
    title: "不同路径 unique-paths",
    category: "多维动态规划",
    content: `
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：

输入：m = 3, n = 7
输出：28

示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

示例 3：

输入：m = 7, n = 3
输出：28

示例 4：

输入：m = 3, n = 3
输出：6
 

提示：

1 <= m, n <= 100
题目数据保证答案小于等于 2 * 109
    `,
    difficulty: "中等",
    hint: `
    `,
    link: "https://leetcode.cn/problems/unique-paths/?envType=study-plan-v2&envId=top-100-liked",
    code: `function uniquePaths(m: number, n: number): number {
    // dp[i][j] 表示从左上角走到 [i, j] 的路径数量
    // 由于只能向右或者向下，因此想到达 [i, j] 必须经过 [i - 1, j] 或者 [i, j - 1]
    // 即 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

    const dp = Array.from({ length: m }, () => 
        Array.from({ length: n }, () => 1)
    );

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};`,
  },
  {
    id: 64,
    title: "最小路径和 minimum-path-sum",
    category: "多维动态规划",
    content: `
给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例 1：

输入：grid = [
              [1,3,1],
              [1,5,1],
              [4,2,1]
            ]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。

示例 2：

输入：grid = [
              [1,2,3],
              [4,5,6]
            ]
输出：12


提示：

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
    `,
    difficulty: "中等",
    hint: `
    `,
    link: "https://leetcode.cn/problems/minimum-path-sum/?envType=study-plan-v2&envId=top-100-liked",
    code: `function minPathSum(grid: number[][]): number {
    const dp = Array.from({ length: grid.length }, () => {
        return Array.from({ length: grid[0].length }, () => 0);
    });
    dp[0][0] = grid[0][0];
    for (let i = 1; i < grid.length; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < grid[0].length; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
        }
    }
    return dp[grid.length - 1][grid[0].length - 1];
};`,
  },
  {
    id: 5,
    title: "最长回文子串 longest-palindromic-substring",
    category: "多维动态规划",
    content: `
给你一个字符串 s，找到 s 中最长的 回文 子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"

提示：

1 <= s.length <= 1000
s 仅由数字和英文字母组成
    `,
    difficulty: "中等",
    hint: `
- 定义状态：
    - 子问题：判断 s 的子串 s[i...j] 是否为回文串
    - dp[i][j] = 子串 s[i...j] 是否是一个回文串
    - 最终目标：找到一个 dp[i][j] === true 且 j - i + 1 (子串长度) 最大的 (i, j) 组合
- 状态转移方程：
    - 一个子串 s[i...j] 成为回文串需要满足以下条件：
      - 两端的字符必须相等
      - 去掉两端字符后，中间的部分也必须是回文串，即 dp[i][j] 的值取决于 dp[i+1][j-1] 的值
        - 但是当内部子串 s[i+1...j-1] 的长度小于2（即 j < i + 3）时，就不需要再依赖 dp[i+1][j-1]
    - 因此，得到状态转移方程：dp[i][j] = (s[i] === s[j]) && (j < i + 3 || dp[i+1][j-1])
- 初始条件（边界条件）：
    - 所有长度为 1 的子串都是回文串，即 dp[i][i] = true
    - 所有长度为 2 的子串，当且仅当两个字符相同时才是回文串，即 dp[i][i+1] = s[i] === s[i+1]
    `,
    link: "https://leetcode.cn/problems/longest-palindromic-substring/?envType=study-plan-v2&envId=top-100-liked",
    code: `function longestPalindrome(s: string): string {
    // 回文天然具有「状态转移」性质：
    // 长度大于 2 的回文去掉头尾字符以后，剩下的依然是回文。
    // 反之，如果一个字符串头尾两个字符不相等，那么一定不是回文。

    const len = s.length;
    if (len === 1) return s;

    const dp = Array.from({ length: len }, () => Array(len).fill(false));

    // 当递推公式 dp[i][j] = dp[i + 1][j - 1] 被调用时，必然满足 j - i >= 3
    // 它所依赖的 dp[i + 1][j - 1] 所对应的子串 s[i+1..j-1] 的长度 (j-1) - (i+1) + 1 = j - i - 1，最小也是 3 - 1 = 2
    // 因此，递推公式永远不会去查询一个长度为1的子串（即对角线上的 dp[k][k]）的状态
    // 因此无需初始化对角线
    // for (let i = 0; i < len; i++) {
    //     dp[i][i] = true;
    // }

    let maxLen = 1;
    let start = 0;

    for (let j = 1; j < len; j++) {
        for (let i = 0; i < j; i++) {
            if (s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                
                const currentLen = j - i + 1;
                if (currentLen > maxLen) {
                    maxLen = currentLen;
                    start = i;
                }
            }
        }
    }

    return s.substring(start, start + maxLen);
};`,
  },
  {
    id: 1143,
    title: "最长公共子序列 longest-common-subsequence",
    category: "多维动态规划",
    content: `
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。

示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。

示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。
    `,
    difficulty: "中等",
    hint: `
- 定义状态：
    - 子问题：计算 text1 的前 i 个字符与 text2 的前 j 个字符的最长公共子序列的长度
    - dp[i][j] 表示 text1 的前 i 个字符（即 text1[0...i-1]）与 text2 的前 j 个字符（即 text2[0...j-1]）的最长公共子序列的长度
    - 最终目标：求解 dp[m][n]，其中 m 是 text1 的长度，n 是 text2 的长度
    - 为了方便处理边界情况（如空字符串），可以让 dp 表的大小为 (m+1) x (n+1)
      - 这样，dp[i][j] 就对应 text1 的前 i 个字符和 text2 的前 j 个字符，索引 i 和 j 就可以从 1 开始
      - text1 的第 i 个字符是 text1[i-1]，text2 的第 j 个字符是 text2[j-1]
- 状态转移方程：
    - 对于 dp[i][j]，考虑对应的两个子串的末尾字符，即 text1[i-1] 和 text2[j-1]，存在两种情况：
      - 两个末尾字符相等，即 text1[i-1] === text2[j-1]
        - 例如，比较 "abcde" 和 "ace" 时，我们比较到 text1 的第5个字符 'e' 和 text2 的第3个字符 'e'。它们是相等的
        - 既然这两个字符相等，那么它们一定可以作为公共子序列的一部分。这个公共字符为我们的LCS长度贡献了 1
        - 剩下的问题就是去寻找 "abcd" 和 "ac" 的最长公共子序列，然后把 'e' 接在后面
        - 所以，dp[i][j] 的值等于 text1[0...i-2] 和 text2[0...j-2] 的LCS长度再加 1
        - 即 dp[i][j] = dp[i-1][j-1] + 1
      - 两个末尾字符不相等，即 text1[i-1] !== text2[j-1]
        - 例如，比较 "abc" 和 "abd"，末尾字符 'c' 和 'd' 不相等
        - 因为这两个字符不相等，它们不可能同时出现在LCS的末尾
        - 所以，最长的公共子序列：
          - 要么是在 text1 去掉末尾字符后（即 text1[0...i-2]）与 text2 完整子串（text2[0...j-1]）之间产生
          - 要么是在 text2 去掉末尾字符后（即 text2[0...j-2]）与 text1 完整子串（text1[0...i-1]）之间产生
          - 我们需要在这两种可能中取一个较大值
          - 即 dp[i][j] = max(dp[i-1][j], dp[i][j-1])
- 初始条件（边界条件）：
    - dp[i][0] = 0，因为 text1 的前 0 个字符（空字符串）与 text2 的前 j 个字符的公共子序列都只能是空，长度为 0
    - dp[0][j] = 0，同理
    - 可以直接把 dp 表所有元素初始化为 0
    `,
    link: "https://leetcode.cn/problems/longest-common-subsequence/?envType=study-plan-v2&envId=top-100-liked",
    code: `function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;

    // dp[i][j] 表示 text1[0:i] 和 text2[0:j] 的最长公共子序列的长度
    const dp = Array.from({ length: m + 1 }, () => 
        Array(n + 1).fill(0)
    );

    // 状态转移：
    // 当 text1[i - 1] === text2[j - 1] 时，将这两个相同的字符称为公共字符
    //      考虑 text1[0:i-1] 和 text2[0:j-1] 的最长公共子序列，再增加一个字符（即公共字符）即可得到 text1[0:i] 和 text2[0:j] 的最长公共子序列
    // 当 text1[i - 1] !== text2[j - 1] 时，考虑：
    //      1. text1[0:i-1] 和 text2[0:j] 的最长公共子序列
    //      2. text1[0:i] 和 text2[0:j-1] 的最长公共子序列
    //      两项中的长度较大的一项
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};`,
  },
  {
    id: 72,
    title: "编辑距离 edit-distance",
    category: "多维动态规划",
    content: `
给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')

提示：

0 <= word1.length, word2.length <= 500
word1 和 word2 由小写英文字母组成
    `,
    difficulty: "中等",
    hint: `
- 定义状态：
    - 这个问题的最优子结构与“最长公共子序列”非常相似。将 word1 完全转换为 word2 的最小代价，依赖于将 word1 的前缀转换为 word2 的前缀的最小代价
    - 子问题：dp[i][j] 表示将 word1 的前 i 个字符（word1[0...i-1]）转换成 word2 的前 j 个字符（word2[0...j-1]）所需的最少操作数
    - 最终目标：求解 dp[m][n]，其中 m 是 word1 的长度，n 是 word2 的长度
    - dp 表的大小设为 (m+1) x (n+1)
- 状态转移方程：
    - 考虑 word1 的第 i 个字符（word1[i-1]）和 word2 的第 j 个字符（word2[j-1]），存在两种情况：
      - 两个末尾字符相等，即 word1[i-1] === word2[j-1]
        - 末尾字符已经匹配，不需要对它们进行操作
        - 因此，将 word1[0...i-1] 转换为 word2[0...j-1] 的成本，就等于将它们各自去掉最后一个字符后的转换成本，即 word1[0...i-2] 转换为 word2[0...j-2] 的成本
        - 即 dp[i][j] = dp[i-1][j-1]
      - 两个末尾字符不相等，word1[i-1] !== word2[j-1]
        - 此时必须执行一次操作才能使 word1 的前缀向 word2 的前缀靠拢，有三种选择：
          - 替换: 将 word1[i-1] 替换成 word2[j-1]
            - 完成这次操作后，两个字符串的末尾就匹配了，问题就退化为计算 word1[0...i-2] 到 word2[0...j-2] 的编辑距离
            - 因此总操作数 dp[i][j] = dp[i-1][j-1] + 1
          - 删除：将 word1[i-1] 删除
            - 完成这次操作后，问题变为将 word1[0...i-2] 转换为 word2[0...j-1] 的最小操作数
            - 因此总操作数 dp[i][j] = dp[i-1][j] + 1
          - 插入：在 word1 的末尾插入一个字符 word2[j-1]，使其与 word2 的末尾匹配
            - 完成这次操作后，问题变为将 word1[0...i-1] 转换为 word2[0...j-2] 的最小操作数
            - 因此总操作数 dp[i][j] = dp[i][j-1] + 1
          - 最终结果是上面三种情况的最小值
- 初始条件（边界条件）：
    - dp[0][0] = 0，因为从空字符串转换到空字符串不需要任何操作
    - dp[i][0] = i，因为将 word1 的前 i 个字符转换为空字符串（word2 的前 0 个字符）需要 i 次删除操作
    - dp[0][j] = j，因为将空字符串（word1 的前 0 个字符）转换为 word2 的前 j 个字符需要 j 次插入操作
    `,
    link: "https://leetcode.cn/problems/edit-distance/?envType=study-plan-v2&envId=top-100-liked",
    code: `function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length;

    // dp[i][j] 表示把 word1 前 i 个字符修改为 word2 前 j 个字符的最小步数
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for(let i = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    for(let j = 1; j <= n; j++) {
        dp[0][j] = j;
    }

    // 对于长度分别为 i 和 j 的子串
    // 若最后一个字符相同，则跳过，往前遍历
    // 否则采取三种操作中步数最小的，并将当前步数 + 1
    // dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] 三个剩余子问题分别对应：
    //      - 删除 word1[i - 1]
    //      - 在 word1[i - 1] 后添加 word2[j - 1]
    //      - 将 word1[i - 1] 替换为 word2[j - 1]
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
        }
    }

    return dp[m][n];
};`,
  },
  {
    id: 136,
    title: "只出现一次的数字 single-number",
    category: "技巧",
    content: `
给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。


示例 1 ：

输入：nums = [2,2,1]

输出：1

示例 2 ：

输入：nums = [4,1,2,1,2]

输出：4

示例 3 ：

输入：nums = [1]

输出：1

提示：

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
除了某个元素只出现一次以外，其余每个元素均出现两次。
    `,
    difficulty: "简单",
    hint: `
- 要求使用常量额外空间，因此考虑位运算
- 异或运算有个重要的性质，两个相同数字异或为 0
- 因此只需要将所有元素异或，剩下的就是只出现一次的元素
    `,
    link: "https://leetcode.cn/problems/single-number/?envType=study-plan-v2&envId=top-100-liked",
    code: `function singleNumber(nums: number[]): number {
    return nums.reduce((acc, cur) => acc ^ cur, 0);
};`,
  },
  {
    id: 169,
    title: "多数元素 majority-element",
    category: "技巧",
    content: `
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：

输入：nums = [3,2,3]
输出：3

示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2

提示：
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
    `,
    difficulty: "简单",
    hint: `
思路一：哈希表
思路二：摩尔投票
    - 设输入数组 nums 的众数为 x ，数组长度为 n
      - 推论一： 若记 众数 的票数为 +1 ，非众数 的票数为 −1 ，则一定有所有数字的 票数和 > 0 
      - 推论二： 若数组的前 a 个数字的 票数和 = 0 ，则 数组剩余 (n−a) 个数字的 票数和一定 > 0 ，即后 (n−a) 个数字的 众数仍为 x 
    - 根据以上推论，首先假设众数为数组首元素 nums[0]，真实众数为 x ，遍历并统计票数：
      - 若遍历到位置 i 时发生 票数和 = 0 ，根据推论剩余数组的真实众数不变，我们将假设众数更新为 nums[i+1]
      - 相当于利用推理的特性，当票数和 = 0 时缩小剩余数组区间
      - 当遍历完成时，最后一轮假设的数字即为众数
    `,
    link: "https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-100-liked",
    code: `function majorityElement(nums: number[]): number {
    // 常规思路：哈希表
    // const map = new Map();
    // for (const i of nums) {
    //     const count = (map.get(i) || 0) + 1;
    //     map.set(i, count);
    //     if (count > Math.floor(nums.length / 2)) return i;
    // }

    // 摩尔投票
    let maj = nums[0];
    let vote = 1; // 由于假设第一个元素是众数，因此直接将投票 + 1，遍历时跳过第一个元素
    for (let i = 1; i < nums.length; i++) {
        nums[i] === maj ? vote++ : vote--;
        if (vote === 0) maj = nums[i + 1];
    }
    return maj;
};`,
  },
  {
    id: 75,
    title: "颜色分类 sort-colors",
    category: "技巧",
    content: `
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]

示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]

提示：

n == nums.length
1 <= n <= 300
nums[i] 为 0、1 或 2
 

进阶：

你能想出一个仅使用常数空间的一趟扫描算法吗？
    `,
    difficulty: "中等",
    hint: `
- 单指针遍历，双指针维护边界
- 指针 i 遍历数组，指针 p0 维护 0 的边界（指向第一个不为 0 的位置），指针 p1 维护 1 的边界（指向第一个不为 0 或 1 的位置）
    - 0 的区域: [0, p0]
    - 1 的区域: [p0, p1]
    - 未处理区域: [p1, i] (这部分实际上是2，但算法逻辑上不直接处理2)
    - 待扫描区域: [i, n]
- 遍历数组：
    - 当 nums[i] === 1 时：
      - 根据 p1 的定义，p1 指向的是 0 和 1 区域之后第一个元素的位置
      - 所以，我们应该把这个 1（nums[i]）和 nums[p1] 交换，然后将 p1 后移
    - 当 nums[i] === 0 时：
      - 同理，我们应该首先把这个 0（nums[i]）和 nums[p0] 交换
      - 此时，原本在 p0 位置的元素被换到了 i 的位置。这个被换出来的元素是什么？
        - 根据定义，p0 左侧是 0 区域，p0 和 p1 直接是 1 区域
        - 因此如果 p0 < p1，说明 p1 左侧有 1 存在，也就是被换出来的是 1
        - 因此还需要把换出来的元素 nums[i] 再次和 nums[p1] 交换
      - 最后需要把 p0 和 p1 同时后移
    `,
    link: "https://leetcode.cn/problems/sort-colors/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let p0 = 0;
    let p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            [nums[i], nums[p1]] = [nums[p1], nums[i]];
            p1++;
        } else if (nums[i] === 0) {
            [nums[i], nums[p0]] = [nums[p0], nums[i]];
            if (p0 < p1) {
                [nums[i], nums[p1]] = [nums[p1], nums[i]];
            }
            p0++;
            p1++;
        }
    }
};`,
  },
  {
    id: 31,
    title: "下一个排列 next-permutation",
    category: "技巧",
    content: `
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。

示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]

示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]

示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 100
    `,
    difficulty: "中等",
    hint: `
- 我们要找到下一个比当前数字排列更大的数，但我们希望这个“更大”的增幅是最小的。
    - 为了做到“最小增幅”，我们应该：
      - 尽可能在数字的右边（低位）进行改动。
      - 用一个“稍微大一点”的数去替换一个“稍微小一点”的数。
      - 替换后，确保右边的部分排列成最小的可能值。
- 第一步：从右往左，找到第一个“破坏”降序的数字
    - 举例：[1, 3, 5, 4, 2]
    - 如果结尾在最右侧的子数组是降序，例如 [5, 4, 2]，那么它已经是这几个数字能组成的最大排列了
    - 所以，我们需要找到那个打破这个降序趋势：[3, 5, 4, 2]，3 就是这个“较小数”，位置为 i
    - 因为在 3 右边的 [5, 4, 2] 已经是最大排列了，要想让整个数字序列变大，我们必须动 3 这个位置，用一个比它大的数来换掉它
- 第二步：在 i 右侧部分，找到比“较小数”大的“最小数”，并交换
    - 我们应该在 3 右边的 [5, 4, 2] 这个序列里，找一个刚好比 3 大的数，也就是 4，称为“较大数”
    - 然后把“较小数” 3 和“较大数” 4 交换位置，数组 [1, 3, 5, 4, 2] 变成 [1, 4, 5, 3, 2]
- 第三步：将 i 右侧的序列重新排序成最小排列
    - 此时数组是 [1, 4, 5, 3, 2]，右侧部分为 [5, 3, 2]
    - 我们希望右侧这个后缀构成的数字是最小的，即升序排列，变为 [2, 3, 5]
    - 注意到在执行第二步的交换之前，右边的部分 [5, 4, 2] 本来就是降序的。当用 4 替换了 3 之后，新的右侧部分 [5, 3, 2] 依然保持降序
    - 因此，要让一个降序的序列变成升序，只需要将它反转即可
      - 将 [5, 3, 2] 反转，得到 [2, 3, 5]。
      - 拼接到前面的部分 [1, 4]，最终得到 [1, 4, 2, 3, 5]
- 如果整个数组为降序，那么第一步中 i = -1，将 i + 1 = 0 开始的数组反转，也就是将整个数组反转
    `,
    link: "https://leetcode.cn/problems/next-permutation/?envType=study-plan-v2&envId=top-100-liked",
    code: `/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    // 第一步：从右往左，找到第一个“下降”的数字
    // 我们从数组的右边开始往左看。找到第一个这样的数字 nums[i]，它比它右边的数字 nums[i+1] 小
    // 为什么找它？ 如果一个数字序列是完全降序的（比如 [3, 2, 1]），那么它就是最大的排列了，没法再找到更大的了
    // 只要我们找到一个“下降”的数字，就意味着它不是完全降序的，我们可以通过交换它来改变排列
    // 比如 [1, 3, 2]：从右往左看，3 比 2 大（升序），1 比 3 小（下降），所以 i 就是 1 这个位置（值为 1）

    let i = nums.length - 2; // 从倒数第二个数字开始往前找
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    // 如果找到了这样的 i（即 i 不为 -1）
    if (i >= 0) {
        // 第二步：找到右边比 nums[i] 大但最小的数字，并交换
        // 如果我们在第一步找到了 nums[i]（那个“下降”的数字）：
        // 现在，我们再次从数组的右边开始往左看，但这次只看 nums[i] 右边的数字
        // 找到第一个比 nums[i] 大的数字 nums[j]
        // 为什么是它？ 我们要找到下一个更大的排列，所以 nums[i] 肯定要变大
        // 为了让变动最小，我们应该用 nums[i] 右边那些数字里，比 nums[i] 大一点点，但又是最小的那个数字来替换它
        // 继续上面的 [1, 3, 2] 例子，nums[i] 是 1。在它右边的 [3, 2] 中，比 1 大且最小的数字是 2
        // 所以，把 nums[i]（1）和 nums[j]（2）交换位置。[1, 3, 2] 变成了 [2, 3, 1]

        // 找到 j，使得 nums[j] > nums[i]
        let j = nums.length - 1; // 从最右边开始往前找
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }

        // 交换 nums[i] 和 nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 第三步：把右边的数字从小到大排序
    // 在第二步交换之后，nums[i] 右边的部分可能还是乱的
    // 为了让整个排列是“下一个”最小的排列，我们必须把 nums[i] 右边的所有数字从小到大排序（升序）
    // 在 [2, 3, 1] 这个例子中，nums[i] 右边的部分是 [3, 1]。把它升序排序后变成 [1, 3]，最终结果就是 [2, 1, 3]
    
    // 如果 i = -1 (即整个数组是降序的，例如 [3,2,1])，则反转整个数组
    // 否则，反转从 i+1 到数组末尾的部分
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};`,
  },
  {
    id: 287,
    title: "寻找重复数 find-the-duplicate-number",
    category: "技巧",
    content: `
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

示例 1：

输入：nums = [1,3,4,2,2]
输出：2

示例 2：

输入：nums = [3,1,3,4,2]
输出：3

示例 3 :

输入：nums = [3,3,3,3,3]
输出：3

提示：

1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
nums 中 只有一个整数 出现 两次或多次 ，其余整数均只出现 一次
 

进阶：

如何证明 nums 中至少存在一个重复的数字?
你可以设计一个线性级时间复杂度 O(n) 的解决方案吗？
    `,
    difficulty: "中等",
    hint: `
- 如果数组中没有重复的数，以数组 [1, 3, 4, 2]为例，我们将数组下标 n 和数 nums[n] 建立一个映射关系 f(n)，
    - 其映射关系 n->f(n)为：
      - 0 -> 1
      - 1 -> 3
      - 2 -> 4
      - 3 -> 2
    - 即 0 -> 1 -> 3 -> 2 -> 4 -> null
- 如果数组中有重复的数，以数组 [1, 3, 4, 2, 2]为例，我们将数组下标 n 和数 nums[n] 建立一个映射关系 f(n)，
    - 其映射关系 n->f(n)为：
      - 0 -> 1
      - 1 -> 3
      - 2 -> 4
      - 3 -> 2
      - 4 -> 2
    - 即 0 -> 1 -> 3 -> 2 -> 4
                        ↑ <- ↓
    - 形成了环形链表
    - 类似 142. 环形链表 II，使用快慢指针找到环入口
      - 142. 中慢指针走一步 slow = slow.next ==> 本题 slow = nums[slow]
      - 142. 中快指针走两步 fast = fast.next.next ==> 本题 fast = nums[nums[fast]]
    `,
    link: "https://leetcode.cn/problems/find-the-duplicate-number/?envType=study-plan-v2&envId=top-100-liked",
    code: `function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[nums[0]];
    while (fast !== slow) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    fast = 0;
    while (fast !== slow) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return fast;
};`,
  },
];

export default data;
