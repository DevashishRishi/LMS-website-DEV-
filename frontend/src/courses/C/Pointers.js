import React from "react";

const Pointers = () => {
  return (
    <div>
      <div>
        <h3 className="subHead">Introduction to pointers in C</h3>
        <p>
          As we mentioned earlier, a pointer in C is a variable that holds a
          memory address. Pointers can be used to manipulate the memory of a
          variable and the value stored in it. Pointers are one of the most
          obvious and exciting features of the C language. It gives strength and
          flexibility to the tongue. Although the tips may seem confusing and
          complicated at first, trust me, once you understand the concept, you
          can do a lot more in C. When a variable is defined in a program, the
          system allocates a memory location or address for that variable that
          holds the defined value. This place has its address number, which we
          saw in the program above.
        </p>
        <p>
          Assume that the system has a reserved memory location 80F for variable
          a.
          <br />
          Int n=10
          <br />
          Int p=&n
          <br />
        </p>
      </div>

      <div>
        <p>
          Declaring a pointer
          <br />
          In C, a pointer can be declared using the * (letter symbol). Also
          known as an indirect pointer, it is used to dereference a pointer.
        </p>
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            <p>int *a; //pointer to int</p>
          </li>
          <li>
            <p>char *c; //pointer to char</p>
          </li>
        </ol>
        <p>
          By the help of * (indirection operator), we can print the value of
          pointer variable p.
        </p>
        <p>Let's see the pointer example as explained for the above figure.</p>

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
                {"\n"}int main()
                {"\n"}&#123;
                {"\n"} int number=50;
                {"\n"} int *p;
                {"\n"} p=&number;//stores the address of number variable
                {"\n"} printf("Address of p variable is %x \n",p); // p contains
                the address of the number therefore printing p gives the address
                of number.
                {"\n"} printf("Value of p variable is %d \n",*p); // As we know
                that * is used to dereference a pointer therefore if we print
                *p, we will get the value stored at the address contained by p.
                {"\n"} return 0;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              Address of number variable is fff4
              <br />
              Address of p variable is fff4
              <br />
              Value of p variable is 50
            </p>
          </div>
        </div>
      </div>
      <br />

      <div>
        <h3 className="subHead">
          Now we will understand different aspects of using pointers in other
          methods using C
        </h3>
        <p>Pointer to array :- </p>
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            <p>int arr[10];</p>
          </li>
          <li>
            <p>
              int *p[10]=&arr; // Variable p of type pointer is pointing to the
              address of an integer array arr.
            </p>
          </li>
        </ol>
        <p>Pointer to a function:-</p>
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            <p>void show (int);</p>
          </li>
          <li>
            <p>
              void(*p)(int) = &display; // Pointer p is pointing to the address
              of a function
            </p>
          </li>
        </ol>
        Pointer to structure:- struct st {"{"}
        <br />
        int i;
        <br />
        float f;
        {"}"}
        <br />
        ref; <br />
        struct st *p = &ref;
      </div>
      <br />

      <div>
        <h3 className="subHead">C Pointer Operators</h3>
        <p>In C, there are two types of pointer operators :-</p>
        <ol style={{ listStyleType: "disc" }}>
          <li>
            <p>operator</p>
          </li>
          <li>
            <p>&operator</p>
          </li>
        </ol>
        <p>
          Operators in C have been examined in detail in distinct sections. The
          operand's memory address is returned by the & operator. As an
          illustration, a = &b; The memory address of variable b will be saved
          in variable a. The counterpart of & is the * operator. The value found
          at the specified location is returned by this operator. For instance,
          if the variable b's memory location is included in a, then the code, c
          is equal to *a; will cause the variable b's value to be stored in c.
        </p>
        <br />

        <p>let us understand pointer in C with a C program </p>
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
                {"\n"}int main(void)
                {"\n"}&#123;
                {"\n"} int x = 99;
                {"\n"} {"//"} declare a pointer
                {"\n"} int *ptr;
                {"\n"} {"//"} assign value to pointer
                {"\n"} ptr = &x;
                {"\n"} printf("Value at ptr is: %d \n", *ptr);
                {"\n"} printf("Address pointed by ptr is: %p \n", ptr);
                {"\n"} return 0;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              Value at ptr is: 99
              <br />
              Address pointed by ptr is: {"{memory_address}"}
            </p>
          </div>
        </div>
      </div>
      <br />

      <div>
        <h3 className="subHead">Advantages of using pointer :- </h3>
        <ol style={{ listStyleType: "disc" }}>
          <li>
            <p>
              Pointers are more efficient in handling Arrays in C and Structures
              in C.
            </p>
          </li>
          <li>
            <p>
              Pointers allow references to function and thereby helps in passing
              of function as arguments to other functions.
            </p>
          </li>
          <li>
            <p>
              Pointers also provide means by which a function in C can change
              its calling arguments.
            </p>
          </li>
          <li>
            <p>
              It reduces length of the program and its execution time as well.
            </p>
          </li>
          <li>
            <p>It allows C language to support Dynamic Memory management.</p>
          </li>
        </ol>
      </div>

      <div>
        <h3 className="subHead">Usage of pointers </h3>
        <p>The C language has several uses for pointers :-</p>
        <ol style={{ listStyleType: "decimal" }}>
          <li>
            <p>
              Allocating memory dynamically We may utilize the pointer-based
              malloc() and calloc() methods in the C language to dynamically
              allocate memory.
            </p>
          </li>
          <li>
            <p>Structures, Functions, and Arrays</p>
          </li>
        </ol>
        <p>
          In C, pointers are often utilized in arrays, functions, and
          structures. It increases performance and decreases code.  
        </p>
      </div>

      <div>
        <h3 className="subHead">NULL Pointer</h3>
        <p>
          A pointer that is not assigned any value but NULL is known as the NULL
          pointer. If you don't have any address to be specified in the pointer
          at the time of declaration, you can assign NULL value. It will provide
          a better approach.
          <br />
          int *p=NULL;
          <br /> Most of the time in libraries of it may have value 0.
        </p>
        <p>
          Let us try one C program to swap two numbers using 3rd variable :-
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
                {"\n"}int main()&#123;
                {"\n"}int a=10,b=20,*p1=&a,*p2=&b;
                {"\n"}printf("Before swap: *p1=%d *p2=%d",*p1,*p2);
                {"\n"}*p1=*p1+*p2;
                {"\n"}*p2=*p1-*p2;
                {"\n"}*p1=*p1-*p2;
                {"\n"}printf("\nAfter swap: *p1=%d *p2=%d",*p1,*p2);
                {"\n"}return 0;
                {"\n"}&#125;
              </code>
            </pre>
            <p>
              Output
              <br />
              Before swap: *p1=10 *p2=20
              <br />
              After swap: *p1=20 *p2=10
            </p>
          </div>
        </div>
      </div>
      <br />

      <div>
        <h3 className="subHead">Reading complex pointers</h3>
        <p>
          There are several things which must be taken into the consideration
          while reading the complex pointers in C. Let’s see the precedence and
          associativity of the operators which are used regarding pointers.
        </p>

        <table border="1">
          <tr>
            <th>Operator</th>
            <th>Precedence</th>
            <th>Associativity</th>
          </tr>
          <tr>
            <td>(), []</td>
            <td>1</td>
            <td>Left to right</td>
          </tr>
          <tr>
            <td>*</td>
            <td>2</td>
            <td>Right to left</td>
          </tr>
          <tr>
            <td>Data type</td>
            <td>3</td>
            <td>-</td>
          </tr>
        </table>
      </div>
      <br />

      <div>
        <p>
          Here in the above table please mark :-
          <ol style={{ listStyleType: "disc" }}>
            <li>
              <p>
                () :- This operator is a bracket operator used to declare and
                define the function.
              </p>
            </li>
            <li>
              <p>[] :- This operator is an array subscript operator.</p>
            </li>
            <li>
              <p>* :- This operator is a pointer operator.</p>
            </li>
            <li>
              <p>
                Identifier: It is the name of the pointer. The priority will
                always be assigned to this.
              </p>
            </li>
            <li>
              <p>
                Data type: Data type is the type of the variable to which the
                pointer is intended to point. It also includes the modifier like
                signed int, long, etc.
              </p>
            </li>
          </ol>
        </p>
      </div>

      <div>
        <p>
          How to read the pointer: int (*p)[10].
          <br />
          To read the pointer, we must see that () and [] have the equal
          precedence. Therefore, their associativity must be considered here.
          The associativity is left to right, so the priority goes to (). Inside
          the bracket (), pointer operator * and pointer name (identifier) p
          have the same precedence. Therefore, their associativity must be
          considered here which is right to left, so the priority goes to p, and
          the second priority goes to *. Assign the 3rd priority to [] since the
          data type has the last precedence. Therefore the pointer will look
          like following.
          <br />
          1. <span>char -&gt; 4</span> <br />
          2. <span>* -&gt;</span> <br />
          3. <span>p -&gt; 1</span> <br />
          4. <span>[10] -&gt; 3</span> <br />
        </p>
        <p>
          Example
          <br />
          How to read the following pointer?
          <br /> int (*p)(int (*)[2], int (*)void))
          <br /> It’s is read as
          <br /> This pointer will be read as p is a pointer to such function
          which accepts the first parameter as the pointer to a one-dimensional
          array of integers of size two and the second parameter as the pointer
          to a function which parameter is void and return type is the integer.
        </p>
      </div>
    </div>
  );
};

export default Pointers;
