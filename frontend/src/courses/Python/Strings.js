import React from "react";

const strings = () => {
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">String</h3>
                <p>
                In Python strings are a basic series of characters in other words we can say that in Python program text values are called strings or strs. In Python, if anything is present inside the quotes then it is considered a string, and the quotes can be single or double.
                </p>
                <p>
                "This is a string"
                <br/>
                'This is also a string'

                </p>
                <p>
                In the above Python code, we can see strings that are made of both single and double quotes. If we see an EOL error when we try to print the string in Python, we probably forget to insert the last/final single quote character at the end of the string. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}'Hello World!
                                {"\n"}
                                {"\n"}SyntaxError: incomplete input
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                Above code, we can see that Python shows an incomplete input error and when we see the string which we feed in Python we can easily see that we miss the final quote. Therefore, it shows an incomplete input error or syntax error.
                </p>
            </div>

            <div>
                <h3 className="subHead">Changing Case in a String with Methods</h3>
                <p>
                One of the simplest tasks we can do in the Python string is to change the case of a string. Let’s look at the following code which can convert the lower case into title type.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "ada lovelace"
                                {"\n"}print(name.title())
                                {"\n"}
                                <br/>
                                <br/>

                                {"\n"}Ada Lovelace
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that the name is a variable that stores the ‘ada lovelace’ in lowercase, and with the help of the title() method we converted the name into title format that has the first letter capitalized in every word or we can say that the title() displays each word in title case, where each word begins with a capital letter. We can see that the method is an action that Python can do on a piece of data. In the print we can see that there is a dot (.) also presenting this name.title() tells Python to make the title() method act on the variable ‘name’. In Python, every method is followed by a set of parentheses. In the title() function, we don’t need to pass any parameter it is empty.
                </p>
                <p>
                There are other methods also available for dealing with the case of the string. For example, we can convert the string into lowercase and uppercase letters. Below is the code for this:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name = "ada lovelace"
                                {"\n"}print(name.upper())
                                {"\n"}print(name.lower())
                                <br/>
                                <br/>

                                {"\n"}Ada Lovelace
                                {"\n"}ada lovelace
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                The upper() method or function converts the string into uppercase that is all the letter of the string is converted into uppercase. The lower() function or method does just the opposite of the upper() function it converts the string into lowercase. It is very useful when we store the data, because many times we won’t trust the capitalized letter that the user provides therefore, we convert the string into lowercase before storing it. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Combining or Concatenating Strings</h3>
                <p>
                It is very useful to combine strings because sometimes we need to combine them to make it work. In this section of the chapter, we look at the combination and concatenation of the strings. One example of combining strings is, let's suppose we create a website in which we create a login section in this login section we want the user to enter their first name and last name in a separate section but when they enter the site it must print them as a full name that is it combines the first name and last name. Below is an example of combining the two strings.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}first_name = "ada"
                                {"\n"}last_name = "lovelace"
                                {"\n"}full_name = first_name +" "+ last_name
                                {"\n"}print(full_name)
                                <br/>
                                <br/>

                                {"\n"}ada lovelace
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code we can see that the user enters the first_name first then the last_name and we combine them in full_name we must take note that for combining the strings Python uses the ‘+’ symbol.
                </p>
                <p>
                Note:-  we must remember that Python cannot combine two different data types in one. For example, if we want to combine ‘ada’ with number 42 then Python will show an error. Below we can see the error Python will show if we try to combine two different data types.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}first_name = "ada"
                                {"\n"}last_name = 42
                                {"\n"}full_name = first_name +" "+ last_name
                                {"\n"}print(full_name)
                                <br/>
                                <br/>

                                {"\n"}Traceback (most recent call last):
                                {"\n"}      File "&lt;pyshell#6&gt;", line 1, in &lt;module&gt;
                                {"\n"}              full_name = first_name +" "+ last_name
                                {"\n"}TypeError: can only concatenate str (not "int") to str
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    But if the number is in quotes, then Python treats it as a string and then we can combine them. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}first_name = "ada"
                                {"\n"}last_name = "42"
                                {"\n"}full_name = first_name +" "+ last_name
                                {"\n"}print(full_name)
                                <br/>
                                <br/>

                                {"\n"}42
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                The method of combining strings is also called concatenation. We can use concatenation to compose a complete message using the information we stored in the variable. Let's look at an example:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}first_name = "ada"
                                {"\n"}last_name = "42"
                                {"\n"}full_name = first_name +" "+ last_name
                                {"\n"}print("Hello, " + full_name.title() + "!")
                                <br/>
                                <br/>

                                {"\n"}Hello, Ada Lovelace!
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">The len() Function</h3>
                <p>
                We can pass the len() function to the string value (or any variable which have the string in it), the len() function mainly checks the integer values of the number of characters in the string. For example, let’s look at the code below:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}myName = "Rohit"
                                {"\n"}print(len(myName))
                                <br/>
                                <br/>

                                {"\n"}5
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that the “Rohit” string has 5 characters and when we print the length of the it using len() function it will print 5 as an output.
                </p>
            </div>

            <div>
                <h3 className="subHead">Numbers</h3>
                <div>
                <h5 className="subHead">Numbers</h5>
                <p>
                Integers are whole numbers in Python they can be positive, negative, or zero, it doesn’t have any decimal or fractional components it is also a fundamental data type in Python.  They are used in various mathematical operations, counting, indexing, and any situation where discrete, whole-number values are needed in a program. Unlike some other programming languages, Python does not have explicit size limitations on integers, allowing for the representation of very large or very small whole numbers. We can add (+), subtract (-), multiply (*), and divide (/) integers in Python. Above we have all these operations examples but for better understanding, we write them again, and this time we also use variables to store the values of integers.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}a = 10
                                {"\n"}b = 2
                                {"\n"}a + b
                                {"\n"}a - b
                                {"\n"}a * b
                                {"\n"}a / b
                                <br/>
                                <br/>

                                {"\n"}12
                                {"\n"}8
                                {"\n"}20
                                {"\n"}5.0
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see all the basic operations we can do in integers with their outputs.
                </p>
                </div>

                <div>
                    <h3 className="subHead">Float</h3>
                    <p>
                    To store the decimal or fractional values in Python we use float datatype. Float data can store numbers with a decimal point. Unlike integers, floats can include fractional components, making them suitable for situations where more precision is needed in numerical values. Floats are versatile and can represent a wide range of real numbers, both positive and negative. They are commonly used in mathematical calculations, scientific computations, and any scenario where non-integer values are essential. Python provides flexibility in handling float, allowing for the expression of values in scientific notation and providing various methods for working with decimal numbers. In Float type numbers we can also do the same operations we do with integers like addition (+), subtraction (-), multiplication (*), and division (/). Below is the code for these operations in Float using the input() function and variable.
                    </p>
                    <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}a = float(input)
                                {"\n"}b = float(input)
                                {"\n"}a
                                {"\n"}b
                                {"\n"}c = a + b
                                {"\n"}c = a - b
                                {"\n"}c = a * b
                                {"\n"}c = a / b
                                <br/>
                                <br/>

                                {"\n"}3.1
                                {"\n"}2.3
                                {"\n"}3.1
                                {"\n"}2.3
                                {"\n"}5.4
                                {"\n"}0.8000000000000003
                                {"\n"}7.13
                                {"\n"}1.347826086956522
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see the various operations we did in float values and taking input from the user.
                </p>
                </div>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                In this chapter, we explored various aspects of Python variables and data types, emphasizing their role in enhancing code understanding and efficiency. Python’s simple structure and ease of use make it suitable for both basic and advanced programming tasks.
                </p>
                <p>
                We covered basic mathematical operations in Python, including addition, subtraction, multiplication, and division. The Python interpreter intelligently handles data types, eliminating the need for explicit type declarations.
                </p>
                <p>
                Advanced mathematical operations like floor division and exponentiation were introduced. Floor division returns the highest integer less than or equal to the division result, while exponentiation can be achieved using the double asterisk operator (‘**’) or the ‘pow()’ function.
                </p>
                <p>
                The chapter delved into the concept of variables, which act as containers for storing data dynamically. Python’s variable naming rules were discussed, emphasizing case sensitivity and the prohibition of certain characters.
                </p>
                <p>
                The capture also introduced string data types in Python, demonstrating various string manipulation techniques such as changing case, combining strings, and obtaining the length of the string using the ‘len()’ function.
                </p>
                <p>
                Numeric data types, including integers and floats, were explored. The flexibility of float data types for handling decimal or fractional values was emphasized. Examples showcased basic mathematical operations on integers and floats, including user input.
                </p>
            </div>
            
        </div>
    );
};
export default strings;