import React from "react";

const Functions = () => {
  return (
    <div>
      
      <div>
        <h3 className="subHead">Introduction to function in C</h3>
        <p>
            The fundamental building blocks of a C program are functions. A function
            is a collection of statements that accept inputs, perform calculations,
            and output the results. They are denoted by curly brackets ({}). In C
            programming, you can call a function more than once, which facilitates
            modularity and reuse. This implies that you may call the code several
            times by just giving the different arguments, rather than writing the
            same code repeatedly for each input. You can wrap the code and make it a
            function.
        </p>
      </div>
      <br />

      <div>
        <h3 className="subHead">Why do we need a function in C ?</h3>
        <p>
            Because functions offer so many benefits to the developer, we require
            them in C programming as well as other programming languages. The
            following are a few main advantages of employing functions:
            </p>
            <ol style={{listStyleType:"disc"}}>
                <li><p>minimizes redundancy and permits reusability.</p></li>
                <li><p>creates a modular code</p></li>
                <li><p>Offers abstraction features</p></li>
                <li><p>The software becomes simple to use and comprehend.</p></li>
                <li><p>divides a complex program into manageable chunks.</p></li>
            </ol>
      </div>
      <br />

      <div>
        <h3 className="subHead">Advantage of function in C </h3>
        <ol style={{listStyleType:"disc"}}>
            <li><p>We can avoid repeatedly writing the same logic or code in a program by using functions.</p></li>
            <li><p>C functions can be called from anywhere in a program and at any number of times.</p></li>
            <li><p>If a large C program is broken up into several functions, we can track it with ease.</p></li>
            <li><p>The primary accomplishment of C functions is reusability.</p></li>
            <li><p>But in a C program, calling functions is always an overhead.</p></li>
        </ol>
      </div>

      <div>
      <h3 className="subHead">Three types of function aspects :- </h3>
      <p>The C function has three components :-</p>
      <ol style={{listStyleType:"disc"}}>
        <li>
            <p>
            <b>Declaration of function :-</b> For the C compiler to know the function name, parameters, and return type, a function needs to be declared globally.
            </p>
        </li>
        <li>
            <p>
            <b>Call to function :-</b> Within the program, functions can be invoked from any location. Function declaration and function calling cannot be different in the argument list. The number of functions that are declared in the function declaration must be passed.
            </p>
        </li>
        <li>
            <p>
            <b>Definition of function :-</b> the actual assertions that need to be performed are contained in it. When the function is called, control is  applied to the most crucial feature. It is important to note that the function can only return a single value at this point.
            </p>
        </li>
      </ol> 
      {/* Create a table of funct call, syntax, declaration */}
      {/* Create a table of funct call, syntax, declaration */}
      {/* Create a table of funct call, syntax, declaration */}
      {/* Create a table of funct call, syntax, declaration */}
      <p>
        Syntax of creating function in C<br />
        Return_type function_name (data_type parameter)
        <br />
        {"{"}
        <br />
        \\ code to be executed
        <br />
        {"}"}
        <br />
      </p>     
      </div>
      <br />
      
      <div>
        <h3 className="subHead">Types of function</h3>
        <p>
            In C programming, functions come in two varieties: Library functions
            include scanf(), printf(), gets(), puts(), ceil(), floor(), and other
            functions that are declared in the C header files. User-defined
            functions are those that a C programmer creates on their own so they can
            utilize it repeatedly. It optimizes the code and lessens the complexity
            of large programs.
        </p>
        {/* Image of function having two types */}
        {/* Image of function having two types */}
        {/* Image of function having two types */}
        {/* Image of function having two types */}
      </div>
      
      <div>
      <h3 className="subHead">Return value </h3>
      <p>
        A C function may or may not return a function value. If you don't need
        to return any value from the function, use void as the return type.Let's
        look at a simple example of a C function that does not return a function
        value.
        <br />
        Example without return value:
        <br />
        Void hello()
        <br />
        {"{"}
        <br />
        Printf(“hello c”);
        <br />
        {"}"}
        <br />
        If you want to return any value from the function, you need to use any
        data type such as int, long, char, etc. The return type depends on the
        value to be returned from the function.
        <br />
        Let's see a simple example of C function that returns int value from the
        function.
        <br />
        Example with return value
        <br />
        int get()
        <br />
        {"{"}
        <br />
        Return (value);
        <br />
        {"}"}
        <br />
        In the above example we can define any type of data type in the return
        type wether it is interger or any thing but if we have to pass the float
        value we have to define first the float and then we can return the
        value.
        <br />
        Float get() <br />
        {"{"} <br />
        Return 10.2; <br />
        {"}"} <br />
        Now we have to call the function and get the value.
      </p>
      </div>
      <br />
      
      <div>
            <div>
            <h3 className="subHead">There is different aspects of function calling </h3>
            <p>
                A function can accept or reject an argument. It can return a value or
                not. Based on the above, there are four types of function calls:
            </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>function without arguments and without return value.</p>
                    </li>
                    <li>
                        <p>function without arguments and with return value.</p>
                    </li>
                    <li>
                        <p>function with arguments and without return value.</p>
                    </li>
                    <li>
                        <p>function with arguments and with return value</p>
                    </li>
                </ol>
            </div>
            
            <div>
          <p>
                let us understand this by an example for function without argument and
                return value.
            </p>
            <div
                className="code-background"
                style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
            >
                <div
                className="code-container"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
                >
                <pre>
                    <code>
                    #include &lt;stdio.h&gt;
                    {"\n"} void printName();
                    {"\n"} void main () &#123;
                    {"\n"} printf("Hello");
                    {"\n"} printName();
                    {"\n"} return 0;
                    {"\n"}&#125;
                    {"\n"} void printName()&#123;
                    {"\n"} printf("India");
                    {"\n"}&#123;
                    </code>
                </pre>
                <p>
                    Output :-
                    <br /> Hello India
                </p>
                </div>
            </div>

            </div>

            <div>
                    <p>
                        Now lets understand this for function without argument and with return
                        value
                    </p>

                    <div
                        className="code-background"
                        style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
                    >
                        <div
                        className="code-container"
                        style={{ backgroundColor: "#ffffff", padding: "20px" }}
                        >
                        <pre>
                            <code>
                            #include &#x3C;stdio.h&#x3E;
                            {"\n"}int sum();
                            {"\n"}void main()
                            {"\n"}&#123;
                            {"\n"} int result;
                            {"\n"} printf("\n Going to calculate the sum of two numbers:");
                            {"\n"} result = sum();
                            {"\n"} printf("%d", result);
                            {"\n"}&#125;
                            {"\n"}int sum()
                            {"\n"}&#123;
                            {"\n"} int a, b;
                            {"\n"} printf("\nEnter two numbers");
                            {"\n"} scanf("%d %d", &a, &b);
                            {"\n"} return a + b;
                            {"\n"}&#125;
                            </code>
                        </pre>
                        <p>
                            Output
                            <br /> Going to calculate the sum of two numbers
                            <br /> Enter two numbers
                            <br /> 10 20
                            <br /> The sum is 30
                        </p>
                        </div>
                    </div>

                    <br />
            </div>

            <div>
            <p>Lets try a function with argument and without return value</p>
            <div
                className="code-background"
                style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
            >
                <div
                className="code-container"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
                >
                <pre>
                    <code>
                    #include &#x3C;stdio.h&#x3E;
                    {"\n"}void sum(int, int);
                    {"\n"}void main()
                    {"\n"}&#123;
                    {"\n"} int a, b, result;
                    {"\n"} printf("\n Going to calculate the sum of two numbers:");
                    {"\n"} printf("\nEnter two numbers:");
                    {"\n"} scanf("%d %d", &a, &b);
                    {"\n"} sum(a, b);
                    {"\n"}&#125;
                    {"\n"}void sum(int a, int b)
                    {"\n"}&#123;
                    {"\n"} printf("\nThe sum is %d", a + b);
                    {"\n"}&#125;
                    </code>
                </pre>
                <p>
                    Output
                    <br /> Going to calculate the sum of two numbers
                    <br /> Enter the two numbers
                    <br /> 15 15
                    <br /> The sum is 3
                <br /> The sum is 30
            </p>
            </div>
            </div>
            <br />
            </div>

            <div>
                <p>Let us understand this by with function and with return value </p>
                <div
                    className="code-background"
                    style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
                >
                    <div
                    className="code-container"
                    style={{ backgroundColor: "#ffffff", padding: "20px" }}
                    >
                    <pre>
                        <code>
                            #include &#x3C;stdio.h&#x3E;
                            {"\n"}void sum(int, int);
                            {"\n"}void main()
                            {"\n"}&#123;
                            {"\n"} int a, b, result;
                            {"\n"} printf("\nGoing to calculate the sum of two numbers:");
                            {"\n"} printf("\nEnter two numbers:");
                            {"\n"} scanf("%d %d", &a, &b);
                            {"\n"} sum(a, b);
                            {"\n"}&#125;
                            {"\n"}void sum(int a, int b)
                            {"\n"}&#123;
                            {"\n"} printf("\nThe sum is %d", a + b);
                            {"\n"}&#125;
                        </code>
                    </pre>
                    <p>
                        Output
                        <br />
                        Going to calculate the sum of two numbers
                        <br />
                        Enter the two numbers
                        <br />
                        15 15
                        <br />
                        The sum is 30
                    </p>
                </div>
                </div>
            </div>

      </div>
      <br />
      
      <div>
      <h3 className="subHead">C library functions</h3>
      <p>
        Library functions are C built-in functions that are grouped together and
        placed in a common place called a library. Such functions are used to
        perform certain functions. For example, printf is a library function
        used to print to the console. <br />
        Library functions are created by compiler designers. All C standard
        library functions are defined in various header files saved with the .h
        extension. We must include these header files in our program to take
        advantage of the library functions defined in such header files.
        <br /> For example, to use library functions like printf/scanf, we need
        to add stdio.h to our program, which is a header file that contains all
        the standard input/print library functions.
      </p>
      <p>Let us better understand this by table given below</p>
      <table border="1">
        <thead>
          <tr>
            <th>Header File</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stddef.h</td>
            <td>Useful for macros</td>
          </tr>
          <tr>
            <td>Stdint.h</td>
            <td>For exact width integer types</td>
          </tr>
          <tr>
            <td>Stdio.h</td>
            <td>For core input and output functions</td>
          </tr>
          <tr>
            <td>Stdlib.h</td>
            <td>
              For numeric conversion functions, Pseudo-random number Generator,
              and memory allocation
            </td>
          </tr>
          <tr>
            <td>String.h</td>
            <td>For string handling functions</td>
          </tr>
          <tr>
            <td>Math.h</td>
            <td>For common mathematical functions</td>
          </tr>
          <tr>
            <td>Time.h</td>
            <td>This header file contains all the time-related functions.</td>
          </tr>
          <tr>
            <td>Ctype.h</td>
            <td>This header file contains all character handling functions.</td>
          </tr>
          <tr>
            <td>Stdarg.h</td>
            <td>
              Variable argument functions are defined in this header file.
            </td>
          </tr>
          <tr>
            <td>Signal.h</td>
            <td>
              All the signal handling functions are defined in this header file.
            </td>
          </tr>
          <tr>
            <td>Setjmp.h</td>
            <td>This file contains all the jump functions.</td>
          </tr>
          <tr>
            <td>Locale.h</td>
            <td>This file contains locale functions.</td>
          </tr>
          <tr>
            <td>Errno.h</td>
            <td>This file contains error handling functions.</td>
          </tr>
          <tr>
            <td>Assert.h</td>
            <td>This file contains diagnostics functions.</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
      <br />

      <div>
        
        <div>
        <h3 className="subHead">Call by Value</h3>
        <p>There are two methods to pass the value into the function :- </p>
        <ol style={{listStyleType:"decimal"}}>
            <li><p>call by value</p></li>
            <li><p>call by reference</p></li>
        </ol>
            
            <ol style={{listStyleType:"disc"}}>
                <li>
                    <p>
                    In the call-by-value method, the value of the actual parameters
                    is copied into the formal parameters. In other words, we can say that
                    the value of the variable is used in the value method call in the
                    function call.
                    </p>
                </li>
                <li>
                    <p>
                    In a call-by-value method, we cannot change the value of an actual parameter with a formal parameter.
                    </p>
                </li>
                <li>
                    <p>
                    In a call by value, different memory is allocated for actual and formal parameters because the value of the actual parameter is copied to the formal parameter.
                    </p>
                </li>
                <li>
                    <p>
                    An actual parameter is an argument used in a function call, while a formal parameter is an argument used in a function definition.
                    </p>
                </li>
            </ol>

        </div>

        <div>
            <p>
                Let us better understand the concept of call by value by a C program
            </p>
            <br />
            <div
                className="code-background"
                style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
            >
                <div
                className="code-container"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
                >
                <pre>
                    <code>
                    #include &#x3C;stdio.h&#x3E;
                    {"\n"}void change(int num) &#123;
                    {"\n"} printf("Before adding value inside function num=%d \n",
                    num);
                    {"\n"} num = num + 100;
                    {"\n"} printf("After adding value inside function num=%d \n",
                    num);
                    {"\n"}&#125;
                    {"\n"}int main() &#123;
                    {"\n"} int x = 100;
                    {"\n"} printf("Before function call x=%d \n", x);
                    {"\n"} change(x);//passing value in function
                    {"\n"} printf("After function call x=%d \n", x);
                    {"\n"} return 0;
                    {"\n"}&#125;
                    </code>
                </pre>
                <p>
                    Output
                    <br />
                    Before function call x=100
                    <br />
                    Before adding value inside function num=100
                    <br />
                    After adding value inside function num=200
                    <br />
                    After function call x=100
                </p>
                </div>
            </div>
        </div>
    
      </div>
      <br />

      <div>

        <div>
                <h3 className="subHead">Call by reference in C</h3>
            <ol style={{listStyleType:"disc"}}>
                <li>
                    <p>
                        In a comparison call, the address of the variable is passed as an
                        actual parameter to the function call.
                    </p>
                </li>
                <li>
                    <p>
                        The value of the actual parameters can be changed by changing
                        the formal parameters because the address of the actual parameters is
                        passed.
                    </p>
                </li>
                <li>
                    <p>
                        In call by reference, the memory allocation is the same for
                        both formal and actual parameters. All function operations are performed
                        on the value stored in the actual parameter address and the modified
                        value is stored in the same address.
                    </p>
                </li>
            </ol>
        </div>

        <div>
                <p>Let us try a C program having call by reference</p>
            <div
                className="code-background"
                style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
            >
                <div
                className="code-container"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
                >
                <pre>
                    <code>
                    #include &#x3C;stdio.h&#x3E;
                    {"\n"}void change(int *num) &#123;
                    {"\n"} printf("Before adding value inside function num=%d \n",
                    *num);
                    {"\n"} (*num) += 100;
                    {"\n"} printf("After adding value inside function num=%d \n",
                    *num);
                    {"\n"}&#125;
                    {"\n"}int main() &#123;
                    {"\n"} int x = 100;
                    {"\n"} printf("Before function call x=%d \n", x);
                    {"\n"} change(&x);//passing reference in function
                    {"\n"} printf("After function call x=%d \n", x);
                    {"\n"} return 0;
                    {"\n"}&#125;
                    </code>
                </pre>
                <p>
                    Output
                    <br />
                    Before function call x=100
                    <br />
                    Before adding value inside function num=100
                    <br />
                    After adding value inside function num=200
                    <br />
                    After function call x=200
                </p>
            </div>
            </div>
        </div>
      </div>
      <br />

      <div>
      <h3 className="subHead">Difference between call by value and call by reference </h3>
      <br />
      <table border="1">
        <tr>
          <th>S.no</th>
          <th>Call by value</th>
          <th>Call by reference</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Copy of value passed in the function</td>
          <td>Address of the value passed in the function</td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            Changes made within a function are limited to the function only. The
            values of the real parameters do not change when the formal
            parameters are changed.
          </td>
          <td>
            Changes made inside a function also affect outside the function. The
            values of the real parameters change as the formal parameters
            change.
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            Actual and formal arguments are created at different memory location
          </td>
          <td>
            Actual and formal arguments are created at same memory location
          </td>
        </tr>
      </table>
      </div>
      <br />

      <div>

        <div>
            <h3 className="subHead">Recursion in C language </h3>
            <br />
            <p>
                Recursion is the process that occurs when a function calls a copy of
                itself to solve a smaller problem. Any function that calls itself is
                called a recursive function, and such function calls are called
                recursive calls. A recursion contains several recursive calls. However,
                it is important to specify the condition to end the recursion. Recursive
                code is shorter than iterative code, but it is difficult to
                understand.Recursion cannot be applied to every task, but it is more
                useful for tasks that can be defined by similar subtasks. For example,
                recursion can be applied to sorting, searching, and traversing problems.
                In general, iterative solutions are more efficient than recursion
                because the function call is always redundant. Any problem that can be
                solved recursively can also be solved iteratively. However, some
                problems are best suited for recursion, such as the Tower of Hanoi, the
                Fibonacci sequence, factorization, etc.
            </p>
        </div>

        <div>
            <p>Let us understand recursion by a simple C program </p>
            <div
                className="code-background"
                style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
            >
                <div
                className="code-container"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
                >
                <pre>
                    <code>
                    #include &#x3C;stdio.h&#x3E;
                    {"\n"}int fact(int);
                    {"\n"}int main()
                    {"\n"}&#123;
                    {"\n"} int n, f;
                    {"\n"} printf("Enter the number whose factorial you want to
                    calculate?");
                    {"\n"} scanf("%d", &n);
                    {"\n"} f = fact(n);
                    {"\n"} printf("factorial = %d", f);
                    {"\n"}&#125;
                    {"\n"}int fact(int n)
                    {"\n"}&#123;
                    {"\n"} if (n == 0)
                    {"\n"} &#123;
                    {"\n"} return 0;
                    {"\n"} &#125;
                    {"\n"} else if (n == 1)
                    {"\n"} &#123;
                    {"\n"} return 1;
                    {"\n"} &#125;
                    {"\n"} else
                    {"\n"} &#123;
                    {"\n"} return n * fact(n - 1);
                    {"\n"} &#125;
                    {"\n"}&#125;
                    </code>
                </pre>
                <p>
                    Output
                    <br />
                    Enter the number whose factorial you want to calculate?
                    <br />5
                    <br />
                    factorial = 120
                </p>
                </div>
            </div>
      
        </div>
        <br/>

        <div>
            <h3 className="subHead">Recursive Function</h3>
            <br />
            <p>
                A recursive function performs a task by dividing it into subtasks. An
                end condition is defined for a function that is performed by a specific
                subtask. After that, the recursion stops and the final result is
                returned by the function. Cases where a function does not iterate are
                called the main case, while cases where the function calls itself to
                execute a subtask are called the recursive case. All recursive functions
                can be written in this format.
            </p>
            <p>Let us now understand this by a C program having Fibonacci series </p>
            <div
                className="code-background"
                style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
            >
                <div
                className="code-container"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
                >
                <pre>
                    <code>
                    #include &#x3C;stdio.h&#x3E;
                    {"\n"}int fibonacci(int);
                    {"\n"}void main ()
                    {"\n"}&#123;
                    {"\n"} int n, f;
                    {"\n"} printf("Enter the value of n?");
                    {"\n"} scanf("%d", &n);
                    {"\n"} f = fibonacci(n);
                    {"\n"} printf("%d", f);
                    {"\n"}&#125;
                    {"\n"}int fibonacci (int n)
                    {"\n"}&#123;
                    {"\n"} if (n == 0)
                    {"\n"} &#123;
                    {"\n"} return 0;
                    {"\n"} &#125;
                    {"\n"} else if (n == 1)
                    {"\n"} &#123;
                    {"\n"} return 1;
                    {"\n"} &#125;
                    {"\n"} else
                    {"\n"} &#123;
                    {"\n"} return fibonacci(n - 1) + fibonacci(n - 2);
                    {"\n"} &#125;
                    {"\n"}&#125;
                    </code>
                </pre>
                <p>
                    Output
                    <br />
                    Enter the value of n?
                    <br />
                    12
                    <br />
                    144
                </p>
                </div>
            </div>
        </div>
        <br/>

        <div>
                <h3 className="subHead">Memory allocation of recursive function</h3>
            <p>
                Each recursive call creates a new copy of this method in memory. After
                the method has returned some data, the copy is removed from memory.
                Because all variables and other items declared inside a function are
                stored on the stack, a separate stack is maintained with each recursive
                call.
            </p>
            <p>
                When a value is returned from the corresponding function, the stack is
                destroyed. Recursion involves so much complexity in resolving and
                tracking the values of each recursive call. Therefore, we need to
                maintain the stack and keep track of the values of the variables defined
                on the stack.
            </p>
            <p>
                Let us consider the following example to understand the memory
                allocation of the recursive functions.
            </p>
            <div
                className="code-background"
                style={{ backgroundColor: "#a4f4e4", padding: "20px" }}
            >
                <div
                className="code-container"
                style={{ backgroundColor: "#ffffff", padding: "20px" }}
                >
                <pre>
                    <code>
                    #include &#x3C;stdio.h&#x3E;
                    {"\n"}int display(int n)
                    {"\n"}&#123;
                    {"\n"} if (n == 0)
                    {"\n"} return 0; // terminating condition
                    {"\n"} else
                    {"\n"} &#123;
                    {"\n"} printf("%d", n);
                    {"\n"} return display(n - 1); // recursive call
                    {"\n"} &#125;
                    {"\n"}&#125;
                    </code>
                </pre>
                </div>
            </div>
        </div>
        <br/>

      </div>
      <br/>

    </div>
  );
};

export default Functions;
