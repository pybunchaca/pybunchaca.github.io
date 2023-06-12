# Valid Anagram

[Leetcode](https://leetcode.com/problems/valid-anagram/description/)

### Description

Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

```
Input: s = "anagram", t = "nagaram"
Output: true
```

Example 2:

```
Input: s = "rat", t = "car"
Output: false
```

### Reason

- Count frequency of all characters in each string and put it into a dict
- Loop through each key of frequency dictionary of string `t`, if the key is not in `s` freq dict or the values of the key in both dict are different --> return False
- Otherwise, return True

### Solution

```python

def count_freq(s: str):
    count_freq = dict()
    for char in s:
        count_freq[char] = count_freq.get(char, 0) + 1
    return count_freq

def is_anagram(self, s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    count_freq_s = count_freq(s)
    count_freq_t = count_freq(t)

    for key_t in count_freq_t:
        if key_t not in count_freq_s:
            return False
        elif count_freq_t[key_t] != count_freq_s[key_t]:
            return False
    return True

```
