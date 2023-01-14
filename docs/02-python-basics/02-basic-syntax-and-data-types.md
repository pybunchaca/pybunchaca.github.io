# Basic Syntax and Data Types
Now that you have your development environment set up, it's time to start learning the basics of Python programming. In this lesson, we will cover basic syntax and data types.

## Variables
A variable is a name given to a value. In Python, you can create a variable by assigning a value to a name using the assignment operator (=).
For example:

```python enablePythonEditor
x = 5
y = "Hello"
print(x)
print(y)
```

## Data Types
Python has a variety of data types, including integers, strings, and booleans.

### Integers
Integers are whole numbers, such as 1, 2, and 3. In Python, you can perform mathematical operations with integers, such as addition (+), subtraction (-), multiplication (*), and division (/).

```python enablePythonEditor
x = 5
y = 3
z = x + y
print(z)
```

### Strings
Strings are sequences of characters, such as "hello" or "world". In Python, strings are enclosed in quotation marks. You can use the + operator to concatenate strings.

```python enablePythonEditor
x = "Hello"
y = "World"
z = x + " " + y
print(z)
```

### Booleans
Booleans are True or False values. They are often used in control flow statements, such as if-else statements.

```python enablePythonEditor
x = True
y = False
print(x)
print(y)
```

### Lists
A list is a collection of items, which can be of any data type. Lists are written using square brackets [].

```python enablePythonEditor
x = [1, 2, 3, 4, 5]
y = ["apple", "banana", "cherry"]
print(x)
print(y)
```

### Tuples
A tuple is similar to a list, but it is immutable(can't be changed once created). Tuples are written using parentheses ().

```python enablePythonEditor
x = (1, 2, 3, 4, 5)
y = ("apple", "banana", "cherry")
print(x)
print(y)
```

### Dictionaries
A dictionary is a collection of key-value pairs. Dictionaries are written using curly braces {}.

```python enablePythonEditor
x = {"name": "John", "age": 30}
print(x)
```

### Basic Syntax
Indentation
In Python, indentation is used to indicate the scope of a block of code. For example, the code inside a for loop or an if statement is indented.

```python enablePythonEditor
if x > 5:
    print("x is greater than 5")
```

### Comments
In Python, comments are used to explain the code. Comments start with the # symbol.

```python enablePythonEditor
# This is a comment
x = 5 # This is also a comment
```

### Printing
As you can see from all the examples above, in Python, you can use the print() function to display output on the screen.

```python enablePythonEditor
x = 5
print(x)
```

## Conclusion
In conclusion, understanding basic syntax and data types is an essential part of learning Python. Now that you are familiar with variables, data types, and basic syntax, you are ready to start writing more complex programs.