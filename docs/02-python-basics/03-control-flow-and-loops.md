# Control Flow and Loops
In this lesson, we will cover control flow and loops in Python. Control flow refers to the order in which the computer executes statements in a program. Loops allow you to repeat a block of code multiple times.

## If-Elif-Else Statements
The if-elif-else statement is used to control the flow of a program based on a condition. The basic structure of an if-elif-else statement is:

```python
if condition1:
    # code to be executed if condition1 is True
elif condition2:
    # code to be executed if condition1 is False and condition2 is True
else:
    # code to be executed if both condition1 and condition2 are False
```
For example, you can use an if-else statement to check if a number is positive or negative:

```python enablePythonEditor
x = 5
if x > 0:
    print("x is positive")
else:
    print("x is negative")
```

## For Loops
A for loop is used to iterate over a sequence (such as a list or a tuple) and execute a block of code for each item in the sequence. The basic structure of a for loop is:

```python
for variable in sequence:
    # code to be executed for each item in the sequence
```

For example, you can use a for loop to print out each item in a list:

```python enablePythonEditor
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

## While Loops
A while loop is used to execute a block of code as long as a certain condition is true. The basic structure of a while loop is:

```python
while condition:
    # code to be executed as long as the condition is true
```

For example, you can use a while loop to print out numbers from 1 to 10:

```python enablePythonEditor
x = 1
while x <= 10:
    print(x)
    x += 1
```

## Break and Continue
The break statement is used to exit a loop and the continue statement is used to skip an iteration of the loop.

```python enablePythonEditor
for x in range(10):
    if x == 5:
        break
    print(x)
```

```python enablePythonEditor
for x in range(10):
    if x % 2 == 0:
        continue
    print(x)
```

## Conclusion
In conclusion, control flow and loops are important concepts in Python programming. By using if-elif-else statements, for loops, and while loops, you can control the flow of a program and repeat blocks of code as needed. Understanding how to use these structures will help you to write more powerful and efficient programs.