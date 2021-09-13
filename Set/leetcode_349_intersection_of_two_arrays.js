/**
 * Given two integer arrays nums1 and nums2, 
 * return an array of their intersection. 
 * Each element in the result must be unique 
 * and you may return the result in any order.
 * 
 * Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

firstly remove duplaces in nums1, and then iterate through nums1, and find the same value in nums2
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(n => nums2.includes(n));
    // no need to change nums2 to set
  //return [...new Set(nums1)].filter(n => new Set(nums2).has(n));
};

//time: o(mxn)
//space: o(m)
