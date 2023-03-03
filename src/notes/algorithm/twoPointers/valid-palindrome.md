---
title: Valid Palindrome
icon: article
article: true
index: false
---
[Leetcode: Easy](https://leetcode.com/problems/valid-palindrome/description/)

## Solution

- We can use two pointers, in the loop, first pointer go from start to last character, and second pointer is oppoiste. When the pointer meet a non-alphanumeric character, just continure to go to next round and move the pointer. When the two pointers all find alphanumeric character, wo transfer it to lower case and compare if they are same.

```java
class Solution {
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;

        while (i < j) {
            Character start = s.charAt(i);
            Character last = s.charAt(j);

            if (!Character.isLetterOrDigit(start)) {
                i++;
                continue;
            }

            if (!Character.isLetterOrDigit(last)) {
                j--;
                continue;
            }

            if (Character.toLowerCase(start) != Character.toLowerCase(last)) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
```
