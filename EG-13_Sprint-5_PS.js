// ==========================================
// EG-13 Sprint-5 Problem Solving
// ==========================================


// ==================================================
// 01. Remove Duplicates from Sorted Array
// ==================================================

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// ==================================================
// 02. Binary Search
// ==================================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
};

// ==================================================
// 03. Search Insert Position
// ==================================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return left;
};


// ==================================================
// 04. Maximum Depth of Binary Tree
// ==================================================

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};


// ==================================================
// 05. Invert Binary Tree
// ==================================================

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null || root === undefined) {
        return null;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


// ==================================================
// 06. Product of Array Except Self
// ==================================================

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1);

    // Product of elements before current index
    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i];
    }

    // Product of elements after current index
    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = result[i] * suffix;
        suffix = suffix * nums[i];
    }

    return result;
};


// ==================================================
// 07. Rotate Array
// ==================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {
    let n = nums.length;

    if (n === 0) {
        return;
    }

    k = k % n;

    // Reverse the whole array
    nums.reverse();

    // Reverse first k elements
    let firstPart = nums.slice(0, k).reverse();

    // Reverse remaining elements
    let secondPart = nums.slice(k).reverse();

    // Put them back into nums
    for (let i = 0; i < k; i++) {
        nums[i] = firstPart[i];
    }

    for (let i = k; i < n; i++) {
        nums[i] = secondPart[i - k];
    }
};


// ==================================================
// 08. Min Stack
// ==================================================

/**
 * @return {void}
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};


/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val);
    }
};


/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removedValue = this.stack.pop();

    if (removedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};


/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};


/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};


// ==================================================
// 09. Continuous Subarray Sum
// ==================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let remainderMap = new Map();

    // Remainder 0 exists before the array starts
    remainderMap.set(0, -1);

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        let remainder = sum % k;

        if (remainderMap.has(remainder)) {
            let previousIndex = remainderMap.get(remainder);

            // At least 2 elements
            if (i - previousIndex >= 2) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
};


// ==================================================
// 10. Daily Temperatures
// ==================================================

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {

        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let previousIndex = stack.pop();

            result[previousIndex] = i - previousIndex;
        }

        stack.push(i);
    }

    return result;
};
