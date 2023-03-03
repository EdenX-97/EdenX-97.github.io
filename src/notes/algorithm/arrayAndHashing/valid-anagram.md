---
title: Valid Anagram
icon: article
article: true
index: false
---
[Leetcode: Easy](https://leetcode.com/problems/valid-anagram/description/)

## Solution

- Anagram means that number of every letter in the two words are same. So we can use a list to calculate how many letters each word have and cpmare them. To simplify, we can use only one list, if one letter exist in first word, plus number of this letter, and if one letter exist is second word, just minus one. After all, if two words are anagram, the number of every letter should be 0.

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] letters = new int[26];

        for (int i = 0; i < s.length(); i++) {
            letters[s.charAt(i) - 'a'] += 1;
            letters[t.charAt(i) - 'a'] -= 1;
        }

        for (int l : letters) {
            if (l != 0) return false;
        }

        return true;
    }
}
```
