---
title: Two Sum
icon: article
article: true
index: false
---
[Leetcode: Easy](https://leetcode.com/problems/two-sum/)

## Solution

- We can use a HashMap to store every number as key and its index as value. When we iterate the list, every time we check if the difference of target and this number is already exist in map, if exist, means we have two number and their sum is the targer. Otherwise we do not have the target, and we can put this number into map and go to next roud iteration.

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int difference = target - nums[i];

            if (map.containsKey(difference)) {
                return new int[] {i, map.get(difference)};
            }

            map.put(nums[i], i);
        }

        return new int[] {};
    }
}
```
