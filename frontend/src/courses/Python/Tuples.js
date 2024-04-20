import React from "react";

const Tuples = () => {
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Tuples</h3>
                <p>
                    Lists are very useful when we are working with data that are dynamic in nature (which means their amount and type can change according to need and time). Like when we are working with a list of users on a website or a list of characters in a game. But sometimes we want to create such type of list which cannot be changed. In such cases we can use Tuples, the tuples allow us to create a list type datatype that cannot be changed. In Python values that cannot be changed refer as immutable.
                </p>
                <p>
                    A tuple is similar to a list except we use parenthesis instead of square brackets. After creating a tuple we can also access every element by using each item’s index similar to a list. Let’s look at the tuple example more closely with an example of Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}dimension = (200, 500)
                                {"\n"}print(dimension[1])
                                {"\n"}print(dimension[0])
                                <br/>
                                <br/>

                                {"\n"}500
                                {"\n"}200

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we define a tuple using parentheses and access each element using its index value inside the square bracket (similar to a list). 
                </p>
                <p>
                     As we know that tuple is immutable therefore if we try to change the values or value of the tuple then it must give error. Let’s look at what type of error it gives if we try to change the value of a tuple.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}dimension = (200, 500)
                                {"\n"}dimension[0] = 250
                                <hr/>

                                {"\n"}TypeError    
                                {"\n"}Cell In[3], line 2
                                {"\n"}      1 dimension = (200, 500)     
                                {"\n"}----&gt; 2 dimension[0] = 250
                                <br/>

                                {"\n"}TypeError: 'tuple' object does not support item assignment

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that if we try to change the value of a tuple it gives TypeError, and also gives a message 
                </p>
                <p>
                    We can also define a tuple with a comma-separated list of values. Let’s look at this with the help of Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}t = 'a', 'b', 'c', 'd', 'e'
                                {"\n"}print(type(t))
                                {"\n"}print(t[0])
                                <br/>

                                {"\n"}&lt;class 'tuple'&gt; 
                                {"\n"}a
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code we can see that we define a tuple using a comma-separated list, and to verify that we created a tuple we print its type we can see that it prints class and we can also see that its items can also be accessed by index value.
                </p>
                <p>
                    Although it is not necessary, it is common to enclose the tuples inside a parenthesis, just as we declare above. If we want to create a tuple that has only one element then we need to include a final comma with it, Python code example is given below
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}t1 = 'w'
                                {"\n"}type(t1)
                                <br/>
                                <br/>

                                {"\n"}tuple
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    A single value inside the parentheses is not a tuple it can be another data type like string, integer, etc. Below we can see its example code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}t2 = ('a')
                                {"\n"}type(t2)
                                <br/>
                                <br/>

                                {"\n"}str
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    Another way we can create a tuple is the built-in function tuple with no argument it creates an empty tuple and if we pass a string in a sequence then it converts it into a tuple with an element of the sequence. Let’s look at them with Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}t = tuple()
                                {"\n"}t
                                {"\n"}()
                                <br/>

                                {"\n"}t = tuple('Rohit')
                                {"\n"}t
                                <br/>
                                <br/>

                                {"\n"}('R', 'o', 'h', 'i', 't')
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we first declare an empty tuple and print it we can see that it prints an empty tuple and in the second tuple we created a tuple using the tuple() function (note: tuple() function takes only one argument) and when we print it, it shows the pass string argument in tuple format.
                </p>
                <p>
                     We can also slice the tuple using square brackets just like the list’s slicing. Let’s look at the Python code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}t = 'a', 'b', 'c', 'd', 'e'
                                {"\n"}t[1:3]
                                <br/>
                                <br/>

                                {"\n"}('b', 'c')
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we slice the index from 1 to 3 of the tuple (note: tuple also does not include the upper bound of the index), and also if we try to update or modify the element of the tuple we get an error, called TypeError.
                </p>
            </div>

            <div>
                <h3 className="subHead">Tuple Assignment</h3>
                <p>
                    In programming, it is very common to swap two variables. In traditional assignments, we have to use a temporary variable. For example, let’s look at Python code for swapping two variables.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}a = 5
                                {"\n"}b = 0
                                {"\n"}temp = a
                                {"\n"}a = b
                                {"\n"}b = temp
                                {"\n"}print(a)
                                {"\n"}print(b)
                                <br/>
                                <br/>

                                {"\n"}0
                                {"\n"}5
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that first, we declare two variables the ‘a’ and ‘b’, and then declare a temporary variable “temp” Then we assign a’s value to it and we assign b’s value to a and then assign the temp value to b and print them, after printing we can see that the value of a and b are swapped.
                </p>
                <p>
                    We can do this very easily using tuple assignment let’s look at that using Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}a = 5
                                {"\n"}b = 0
                                {"\n"}temp = a
                                {"\n"}a, b = b, a
                                {"\n"}print(a)
                                {"\n"}print(b)
                                <br/>
                                <br/>

                                {"\n"}0
                                {"\n"}5
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, the left side is a tuple of variables; the right side is a tuple of expressions. Each value is assigned to its respective variable. All the expressions on the right side are evaluated before any of the assignments. 
                </p>
                <p>
                    Note: it is called tuple assignment but if we print the type of variable, it will show integer in this case and also respective for their types in other cases.
                </p>
            </div>

            <div>
                <h3 className="subHead">Looping Through All Values in a Tuple</h3>
                <p>
                    As we know tuples are similar to lists except, they are immutable therefore we can also loop over all the values of a tuple using a for loop, just like a list. Let’s look at Python code for a better understanding of this.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}t = 'a', 'b', 'c', 'd', 'e'
                                {"\n"}for i in t:
                                {"\n"}      print(i)
                                <br/>
                                <br/>

                                {"\n"}a
                                {"\n"}b
                                {"\n"}c
                                {"\n"}d
                                {"\n"}e
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that we iterate over a Python tuple using a for loop. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Writing over a Tuple</h3>
                <p>
                    As mentioned above tuples in Python are immutable but we can assign a new value to a variable that holds the tuple. So, if we change the tuple, we could redefine the entire tuple. For a much better understanding let’s look at Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}t = 'a', 'b', 'c', 'd', 'e'
                                {"\n"}print("Original tuple:")
                                {"\n"}for i in t:
                                {"\n"}      print(i)
                                <br/>

                                {"\n"}t = ('R','O','H','I','T','K','R','.')
                                {"\n"}print("\nModified tuple:")
                                {"\n"}for i in t:
                                {"\n"}      print(i)
                                <br/>

                                {"\n"}Original tuple:
                                {"\n"}a
                                {"\n"}b
                                {"\n"}c
                                {"\n"}d
                                {"\n"}e
                                <br/>

                                {"\n"}Modified tuple:
                                {"\n"}R
                                {"\n"}O
                                {"\n"}H
                                {"\n"}I
                                {"\n"}T
                                {"\n"}K
                                {"\n"}R
                                {"\n"}.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we see that first we declare a tuple t and print its element one by one using for loop and in the second section of the code we redefine the tuple t with all new elements and print its element one by one using for loop.
                </p>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                     Python lists are dynamic and versatile containers that store various elements, accommodating different data types and adjusting in size as needed. They play a crucial role in managing and manipulating data, offering flexibility not found in rigid arrays of other programming languages. Lists are ordered collections enclosed in square brackets, supporting elements like numbers, strings, or even other lists. The ordered sequence allows easy indexing and retrieval of elements.
                </p>
                <p>
                     Operations on lists include appending, removing, and modifying elements. Lists are mutable, allowing developers to change element values using square brackets for reassignment. Indexing in lists follows Python’s zero-based system, enabling easy access to elements. String methods can be applied to list elements.
                </p>
                <p>
                    Appending elements is simple using the append() method, facilitating incremental list building. The insert() method adds elements at specific positions within the list. The del statement deletes a specific element by specifying its index. The pop() method removes the last element, while the remove() deletes the first occurrence of a specified value. The sort() method permanently sorts a list, and sorted() provides temporary sorting without affecting the original order. The reverse() method reverses the order of elements, and len() function provides the list length.
                </p>
                <p>
                    Slicing and indexing help obtain sublists or individual elements, while the for loops iterate over list elements. Concatenation and replication are achieved using + and * operators, respectively. List elements can be modified using the assignment operator and index. Understanding and handling index errors are crucial, and using -1 generally retrieves the last element.
                </p>
                <p>
                    Moving from individual variables to lists enhances code efficiency. Loops, operators, and list-specific functions optimize list manipulation.
                </p>
                <p>
                    Tuples offer immutable, ordered collections. They use parentheses, and efforts to modify values result in a TypeError. Tuple assignment enables efficient swapping of variable values. Looping over tuple values is similar to lists, and reassigning a new value effectively changes tuple content.
                </p>
                <p>
                    Tuples serve as immutable, ordered collections in Python, valuable for managing unalterable data. This chapter emphasizes the transition from individual variables to lists, optimizing code efficiency and flexibility. Understanding list and tuple operations is essential for effective Python programming.
                </p>
            </div>

        </div>
    );
};
export default Tuples;