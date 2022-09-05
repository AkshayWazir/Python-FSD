
# * Inheritance
# Parent
# class Person():
#     def __init__(self, name, number) -> None:
#         self.name = name
#         self.number = number

#     def greet(self):
#         print(f"{self.name} says hello, {self.number}")

#  * Child - without inheritance
# class Employee():
#     def __init__(self, salary, post) -> None:
#         self.salary = salary
#         self.post = post

#     def details(self):
#         print(f"Hello my post is {self.post} at {self.salary}")


# * child with inheritance
# class Employee(Person):
#     empCount = 0

#     def __init__(self, name, number, salary, post) -> None:
#         Person.__init__(self, name, number)
#         self.salary = salary
#         self.post = post

#     def details(self):
#         print(f"Hello my post is {self.post} at {self.salary}. ", end="")
#         Person.greet(self)

#     @classmethod
#     def iec(cls, val):
#         cls.empCount += val


# obj1 = Employee("Akshay", 12321, 3456, "Analyst")
# obj1.details()

# class Engine():
#     def __init__(self, volume, ft) -> None:
#         self.volume = volume
#         self.ft = ft

#     def start(self):
#         print(
#             f"Engine with {self.volume} volume is started, need more {self.ft}")


# class Car(Engine):
#     def __init__(self, modelNo, price, volume, ft) -> None:
#         self.modelNo = modelNo
#         self.price = price
#         Engine.__init__(self, volume, ft)

#     def start(self):
#         print(
#             f"Engine with {self.volume} volume is started, need more {self.ft}")


# var1 = Car("12df", 342, 23, "Pet")
# var1.start()

# Try this
# ? first make a person class with features like name , dob ,country
# * Engineer Class which inherits Person class and has new features like greet and perform action
# * Doctor class which inherits Person class and has new features like greet and perform action

# try this after above
# ! Make CEO class which enherits Engineer class

# * Polymorphysm

class Engine():
    def __init__(self, volume, ft) -> None:
        self.volume = volume
        self.ft = ft

    def start(self):
        print(
            f"Starting Engine")


class Car(Engine):
    def __init__(self, modelNo, price, volume, ft) -> None:
        self.modelNo = modelNo
        self.price = price
        Engine.__init__(self, volume, ft)

    def start(self):
        print(
            f"Starting car")


obj1 = Engine(23, "PET")
obj2 = Car("hj32", 23, 12, 45)

obj1.start()

obj2.start()
