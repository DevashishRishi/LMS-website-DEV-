import React from "react";

const VariablesDataTypes = () => {
    return (
        <div>

            <div>
                <h3 className="subHead">Introduction</h3>
                <p>
                In this chapter, we look at various aspects of Python variables and data types. Python is no exception to this it also has variables and data types. They help the coder or user to better understand the code and write easier and more efficient programs. The basic structure of Python is very simple and also doing basic work is very easy on it.
                </p>
                <p>
                The Python programming language has a very wide range of syntactical constructions, standard library functions, and interactive development environment features. We can ignore many of them because they are very rarely used therefore, we look at the most common libraries, features, etc. of Python. In this chapter, we write a few basic codes to understand the basics of Python.
                </p>
            </div>

            <div>
                <h3 className="subHead">Basic Python operations</h3>
                <p>
                In Python, if we want to add 2 numbers, we just need to open the Python IDLE and type the numbers and between these numbers, we introduce the “+” symbol.
                </p>
                <p>Addition</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; 2 + 2
                                <br/>
                                {"\n"}2
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                
                <p>
                    Above we can see how basic addition is done in Python. As we can see in Python, we didn’t need to define the datatype for adding the two numbers. The Python interpreter is very smart it can understand that both are numbers and we want to add them. Similarly, we can do all the other basic mathematical operations in Python. 
                </p>
                <p>Subtraction</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; 4 - 2
                                <br/>
                                {"\n"}2
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                
                
                <br/>
                <p>multiplication</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; 4 * 4
                                <br/>
                                {"\n"}16
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                
                <br/>
                
                <p>division</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; 4 / 4
                                <br/>
                                {"\n"}2.0
                            </code>
                        </pre>
                    </div>
                </div>
                
                <br/>
                <p>
                    In the above code, we can see the basic mathematical operations which we can do in Python easily. Let us look at some more advanced mathematical operations we can do easily in Python but in other languages it takes some effort.
                </p>
                <p>
                    One such operation is the Floor division. In floor division, it returns the highest integer which is less than or equal to the result of the division. Its result is always rounded to the nearest integer. 
                </p>
                <p>
                Floor division
                </p>
                <p>division</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; 4 // 2
                                <br/>
                                {"\n"}2
                            </code>
                        </pre>
                    </div>
                </div>
                
                <br/>
                <p>
                    Exponentiation is also very easily done in Python, to find the exponentiation of any number python has two methods we look at both of them. One uses the Double Asterisk Operator ‘**’ and the other uses the ' pow() ' function. 
                </p>
                <p>
                    The double asterisk operator is used for exponentiation. In this, the left operand raises with the power of the right operand 
                </p>
                <p>
                    Double asterisk operator exponentiation
                </p>
                <p>division</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; 4 ** 2
                                <br/>
                                {"\n"}16
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    The pow() function is a built-in function of Python that is used for exponentiation. To use this we need to use two arguments the arguments are base and exponent.
                </p>
                <p>
                    pow() function
                </p>
                <p>division</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; pow(2, 3)
                                <br/>
                                {"\n"}8
                            </code>
                        </pre>
                    </div>
                </div>
                <p>
                     Another very common mathematical function used in Python very commonly is called modulo. The modulo operation is done using the percent sign ‘%’ operator. It mainly returns the remainder when one number is divided by another. It is many times used to check whether one number is divisible by another and to find the remainder of a division operation.
                </p>
                <p>
                    Modulo
                </p>
                <p>division</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}&gt;&gt;&gt; 10 % 3
                                <br/>
                                {"\n"}1
                            </code>
                        </pre>
                    </div>
                </div>

                <br/>
            </div>

            <div>
                <h3 className="subHead">Variables</h3>
                <p>
                    When we need to hold any value from the program, we use variables. Every variable holds a value this value is information which is associated with the variable. A variable is a symbolic name that represents a location in memory where data can be stored. A variable acts like a container that holds values and allows programmers to refer to and manipulate these values throughout the code. Unlike some other programming languages, Python does not require explicit declaration of the variable type.
                </p>
                <p>
                    Let’s look at an example of using variables in Python :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}<span className="codeComment"># Assigning a value to a variable</span>
                                {"\n"}x = 5
                                <br/>

                                {"\n"}<span className="codeComment"># Performing operations using the variable</span>
                                {"\n"}y = x * 2
                                <br/>

                                {"\n"}<span className="codeComment"># Displaying the result</span>
                                {"\n"}print(y)
                                <br/>

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above example ‘x’ is a variable that holds the value ‘5’. The variable ‘y’ is then assigned the result of doubling the value stored in ‘x’, which is ‘10’. Variables provide a way to store and manipulate data, making code more flexible and readable.
                </p>
                <br/>

            </div>

            <div>
                <h3 className="subHead">Writing and Dissecting our First program</h3>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}<span className="codeComment"># This is our first program</span>
                                {"\n"}print("hello world!")
                                {"\n"}myName = input()
                                {"\n"}myName
                                <br/>
                                <br/>

                                {"\n"}hello world!
                                {"\n"}Rohit
                                {"\n"}'Rohit' 
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, the first line is a comment. In Python if we want to write something that we want to not run by a Python interpreter it ignores it then we type ‘#’ at the beginning of the line then write something after it so the Python will simply ignore it and move to the next line. As we see in the above code the first line is completely ignored. 
                </p>
                <p>
                The print() function displays the string value inside the parentheses on the screen. We can see this in the above code the print function prints anything that passes inside its parentheses. The next function in the above code is the input() function, the input function waits for the user's input, or in other words, it waits for the user to type some text on the keyboard and press ENTER. We can think of the input() function call as an expression that evaluates to whatever string the user typed in. If we entered the “Kumar”, then the variable store or it evaluates to “Kumar”.
                </p>  
            </div>

            <div>
                <h3 className="subHead">Python variables follow a few rules:</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Variable names are case-sensitive (‘count’ and ‘Count’ would be different variables).
                        </p>
                    </li>
                    <li>
                        <p>
                            Variable names must start with a letter (a-z, A-Z) or an underscore ‘_’.
                        </p>
                    </li>
                    <li>
                        <p>
                            Subsequent characters in the variable name can be letters, numbers, or underscores.
                        </p>
                    </li>
                    <li>
                        <p>
                        Python has some reserved keywords (e.g., ‘if’, ‘else’, ‘while’) that cannot be used as variable names.
                        </p>
                    </li>
                    <li>
                        <p>
                        Spaces are also not allowed in variable names, but we can use the underscore ‘_’ to separate words in variable names.
                        </p>
                    </li>
                </ol>
                <p>
                Variables play a crucial role in programming, allowing developers to store and manage data dynamically, making their code more adaptable to changing conditions and requirements. We can also change the values of a variable in our program at any provided time, and Python will always keep track of its current value.
                </p>
            </div>

            <div>
                <h3 className="subHead">The Integer, Floating-Point, and String Data Types</h3>
                <p>
                Most programming languages define and gather some sort of data, and then do something useful from it, therefore it is helpful to classify them into different types of data. 
                </p>
                <table border="1">
                <tr>
                    <th>Data Type</th>
                    <th>Examples</th>
                </tr>
                <tr>
                    <td>Integers</td>
                    <td>-2, -1, 0, 1, 2, 3, 4</td>
                </tr>
                <tr>
                    <td>Floating-point numbers</td>
                    <td>-1.25, -1.0, -0.5, 0.0, 0.5, 1.0</td>
                </tr>
                <tr>
                    <td>Strings</td>
                    <td>‘a’, ‘aa’, ‘b’, ‘bb’, ‘hello’, ’11 cats’</td>
                </tr>
                </table>
                <br />
                <p>
                    The first data type we’ll look at in this chapter is called ‘string’. They are very simple and can be used in many different ways.
                </p>
            </div>

        </div>
    );
};
export default VariablesDataTypes;