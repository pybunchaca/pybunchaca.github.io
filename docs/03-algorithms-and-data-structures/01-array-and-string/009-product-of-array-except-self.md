---
tags: [array, medium, facebook, amazon, apple]
---

# Product of Array Except Self

[Leetcode](https://leetcode.com/problems/product-of-array-except-self/description/)

### Description

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

### Reason:

1. Approach 1:

- Use two additional list: Left and Right.
- For a given index `i`, `Left[i]` contains the product of all the numbers to the left of `i`. `Right[i]` contains the product of all the numbers to the right of `i`.
- Need to loop twice to update both Left and Right.
- Final loop to take the product of Left and Right

2. Approach 2: try to solve the problem in O(1) extra space complexity

- Since the output array does not count as extra space, instead of using two different lists, we use the output array as `Left`, and another variable `right_product`

### Solution

1. Approach 1:

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        # The length of the input array
        length = len(nums)

        # The left and right arrays as described in the algorithm
        L, R, answer = [0]*length, [0]*length, [0]*length

        # L[i] contains the product of all the elements to the left
        # Note: for the element at index '0', there are no elements to the left,
        # so the L[0] would be 1
        L[0] = 1
        for i in range(1, length):

            # L[i - 1] already contains the product of elements to the left of 'i - 1'
            # Simply multiplying it with nums[i - 1] would give the product of all
            # elements to the left of index 'i'
            L[i] = nums[i - 1] * L[i - 1]

        # R[i] contains the product of all the elements to the right
        # Note: for the element at index 'length - 1', there are no elements to the right,
        # so the R[length - 1] would be 1
        R[length - 1] = 1
        for i in reversed(range(length - 1)):

            # R[i + 1] already contains the product of elements to the right of 'i + 1'
            # Simply multiplying it with nums[i + 1] would give the product of all
            # elements to the right of index 'i'
            R[i] = nums[i + 1] * R[i + 1]

        # Constructing the answer array
        for i in range(length):
            # For the first element, R[i] would be product except self
            # For the last element of the array, product except self would be L[i]
            # Else, multiple product of all elements to the left and to the right
            answer[i] = L[i] * R[i]

        return answer
```

2. Approach 2:

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        # The length of the input array
        length = len(nums)

        answer = [0]*length

        # answer[i] contains the product of all the elements to the left
        answer[0] = 1
        for i in range(1, length):
            answer[i] = nums[i - 1] * answer[i - 1]

        # Constructing the answer array
        right_product = 1
        for i in reversed(range(length)):
            if i != length - 1:
                right_product *= nums[i + 1]
            answer[i] = answer[i] * right_product
        return answer
```

Simplify the above solution:

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        # The length of the input array
        length = len(nums)

        answer = [0]*length

        # answer[i] contains the product of all the elements to the left
        answer[0] = 1
        for i in range(1, length):
            answer[i] = nums[i - 1] * answer[i - 1]

        # Constructing the answer array
        right_product = 1
        for i in reversed(range(length)):
            answer[i] = answer[i] * right_product
            right_product *= nums[i]
        return answer
```
