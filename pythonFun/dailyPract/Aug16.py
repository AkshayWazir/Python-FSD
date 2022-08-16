# given an array of inters num and an inter target ,
# return the indices of the two numbers such that they add up to target
from typing import List

# num = [1,2,3,4,5,6] , target = 9 -> [3, 4]


def twoSum(num: List[int], target: int) -> List[int]:
    for i in range(len(num) - 1):
        for j in range(i + 1, len(num)):
            if num[i] + num[j] == target:
                return [i, j]


print(twoSum([1, 2, 3, 4, 5, 6], 9))
