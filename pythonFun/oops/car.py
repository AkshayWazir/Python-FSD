
class Car:
    def __init__(self, name, model) -> None:
        self.name = name
        self.model = model
        self.speed = 0
        self.dt = 0

    def __str__(self) -> str:
        return f"{self.name} of model {self.model} moving with the speed of {self.speed}"

# ? created a car with Tier and Engine as a sub class
# ? whenever new part is added into the car class
# ? the count of that part should be increased by 1
