---
tags: [string, medium, facebook]
---

# Longest Substring

## Longest Substring Without Repeating Characters

### Description

Given a string, find the length of the **longest substring** without repeating
[Leetcode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

1.

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

2.

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Reason

This question asks about the length of a substring given conditions. We can think of it like the length of a sub-array inside an array. You can imagine there is a **sliding window** moving around the array and we need to calculate results based on some special conditions.

**Note**: the special case is that when we see a duplicate that inside the window (meaning the index of the duplicate is greater than `left_pointer`), then `left_pointer = seen_chars[current_char] + 1`

### Solution

[Reference](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/347818/python3-sliding-window-o-n-with-explanation/)

```python
def length_longest_substrig(input_str: str) -> int:
    seen_chars = dict()
    left_pointer = 0
    longest_length = 0 # keep track of the longest length of substring without duplicates

    # We move the right_pointer to the right until we see a duplicate in unique_char
    for right_pointer in range(len(input_str)):
        current_char = input_str[right_pointer]
        if current_char in seen_chars:
            left_pointer = max(left_pointer, seen_chars[current_char] + 1)
        longest_length = max(longest_length, right_pointer - left_pointer + 1)
        seen_chars[current_char] = right_pointer

    return longest_length
```
