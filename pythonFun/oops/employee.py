from car import Car


class Employee:
    employeeCount = 0

    def __init__(self, name, dpt, empCode) -> None:
        self.employee_name = name
        self.employee_department = dpt
        self.employee_code = empCode
        self.raiseFactor = 1
        self.things = []
        Employee.employeeCount += 1

    def raiseSalary(self, factor):
        self.raiseSalary = factor

    def addThing(self, obj):
        self.things.append(obj)

    @classmethod
    def increaseEmploye(cls):
        cls.employeeCount += 1

    @classmethod
    def creatWithEcode(cls, code):
        return Employee("", "unknown", code)

    def printEmploye():
        print("Something")

    def __str__(self) -> str:
        return f"{self.employee_name} - {self.employee_department} : - {self.employee_code} With {self.things}"


# emp_1 = Employee("Akshay", "IT", "fr456")
# arr = []
# for i in range(2):
#     arr.append(Employee.creatWithEcode("ES456"))

# arr[0].addThing(Car("Some Car", "ZXIdfg!@#"))

# for emp in arr:
#     print(emp)

Employee.printEmploye()
