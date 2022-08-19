
# ? Problem
#  * Given an integer array nums, find the contiguous subarray (containing at least one number)
#  * which has the largest sum and return its sum.
#  * A subarray is a contiguous part of an array.

#  * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
#  * Output: 6
#  * Explanation: [4,-1,2,1] has the largest sum = 6.


from typing import List


def largestContiguousSum(arr: List[int]) -> int:
    n = len(arr)
    # preArr = [0 for i in range(n + 1)]
    preArr = [0] * (n+1)
    for i in range(1, n+1):
        preArr[i] = preArr[i-1] + arr[i-1]
    minPreSum = 0
    sol = arr[0]
    for i in range(1, n+1):
        sol = max(sol, preArr[i] - minPreSum)
        minPreSum = min(minPreSum, preArr[i])
    return sol
