
# * File modes
# * 'r' - open this file only for reading - default
# * 'w' - open file delete everything present in it and write from start also if file is not present then create it
# * 'x' - this will simply create the file if not presenet
# * 'a' - we add more content at the end of the file
# * 't' - reading a text file - default
# * 'b' - binary mode
# * '+' - read & write

f = open("hello.txt", "r")

# ? this is used to write the contents inside the file using array
# ? and uses \n to move to new Line
# f.writelines(["Hey \n", "how was your day\n"])

# ? this is to read line by line
content = f.readline()
print(content)
content = f.readline()
print(content)

content = f.readline()
print(content)
content = f.readline()
print(content)

f.seek(0)
f.close()

# * Write a file with N number lines
# * append  *-* at the end of each line of the same file
# * read lines and split the lines with ',' print it in the consoles
val = input()

print(val)
