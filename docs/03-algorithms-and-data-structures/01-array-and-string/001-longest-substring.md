# Longest Substring

## Longest Substring Without Repeating Characters

Given a string, find the length of the **longest substring** without repeating

Example 1:

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Reason: this question asks about length of a substring. We can think of it like the length of a sub-array inside an array. You can imagine there is a **sliding window** moving around the array and with some special conditions, we return some results.

Solution:

```python
def length_longest_substrig(input_str: str) -> int:
    unique_chars = set()
    left_pointer = 0
    right_pointer = 0
    longest_length = 0 # keep track of the longest length of substring without duplicates

    # We move the right_pointer to the right until we see a duplicate in unique_char
    for right_pointer in range(len(input_str)):
        current_char = input_str[right_pointer]
        while current_char in unique_chars:
            unique_chars.remove(current_char)
            left_pointer += 1 # shrinking the window

        unique_chars.add(current_char)
        longest_length = max(longest_length, right_pointer - left_pointer + 1) # compare with the current window size

    return longest_length
```
