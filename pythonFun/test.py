from typing import List
from numpy import double

# make a function that prints a diamond
# make a function that greets the user with Hello , how are you

# make a function that accepts a function and a title
# if function is not passed then call the diamond function by default and print the title before it


def printDiamondText(spaces: int | float | double, stars: int | double) -> str:
    return "  " * spaces + "* " * stars


def getDiamond(num):
    i, j, flag = 1, num // 2, False
    while i > 0:

        print(printDiamondText(j, i))
        if i < num and not flag:
            i, j = i + 2, j - 1
        else:
            flag, i, j = True, i - 2, j + 1


def greetUser(user="Akshay", message="Hello, how are you."):
    return f"{user} {message}"


def perform(function=getDiamond, title="Something"):
    print(greetUser(title))
    function(5)


def anotherOperation(val):
    print(f"I have Number {val}")


# perform(title="Operation")
