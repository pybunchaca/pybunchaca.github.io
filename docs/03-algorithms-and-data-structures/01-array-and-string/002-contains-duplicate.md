# Contains Duplicate

[Leetcode](https://leetcode.com/problems/contains-duplicate/)

### Examples

Example 1:

```
Input: nums = [1,2,3,1]
Output: true
```

Example 2:

```
Input: nums = [1,2,3,4]
Output: false
```

Example 3:

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### Reason

Loop through the array, have a set to contain unique numbers, check the current number is inside the set or not.

### Solution

```python
def contain_duplicate(nums: List[int]) -> bool:
    unique = set()
    for num in nums:
        if num in unique:
            return True
        else:
            unique.add(num)
    return False
```
