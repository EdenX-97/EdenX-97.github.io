---
title: Contains Duplicate
icon: article
article: true
index: false
---
[Leetcode: Easy](https://leetcode.com/problems/contains-duplicate/description/)

## Solution

- Iterate the given list, and use HashSet to store every number, if next number already exist in the set, return true means there are duplicate numbers. Otherwise, return false means there are no duplicate numbers.

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();

        for (int i = 0; i < nums.length; i++) {
            if (set.contains(nums[i])) {
                return true;
            }
            set.add(nums[i]);
        }

        return false;
    }
}
```
