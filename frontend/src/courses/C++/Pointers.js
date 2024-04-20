import React from "react";

const Pointers = () => {
  return (
    <div>
      <h3 className="subHead">Pointers</h3>
      <p>
        A pointer in C++ is a variable, also known as a locator or pointer, that
        points to the address of a value. The address symbol is represented by a
        cursor. In addition to creating and modifying dynamic data structures,
        they allow programs to copy speech by reference. One of the main uses of
        pointers is to iterate over the components of arrays or other data
        structures. A pointer variable that refers to the same data type as the
        variable you are manipulating is set to the address of that variable
        (e.g., int or string).
        <br />
        Syntax:
        <br /> 1. datatype *var_name;
        <br /> 2. int *ptr; // ptr can point to an address which holds int data
        <br />
      </p>
      <h3 className="subHead">How to use a pointer</h3>
      <p>
        Define a pointer variable., which uses the address of a variable, a
        pointer to the address of the variable, and the unary operator (&) to
        give the address. Using the unary operator (*), which returns the value
        of a variable’s value at the address given by this argument, accesses
        the value stored at the address. Since the data type knows how many
        bytes of data to store, we bind it by reference. The size of the data
        type to which the cursor is added when the cursor is incremented.
      </p>
      <h3 className="subHead">Application of C++ pointer</h3>
      <p>
        The following are implementations of pointers in C++:
        <br /> • Passing arguments by reference: Passing by reference serves two
        purposes •
        <br />
        Accessing array elements: The compiler internally uses references to
        access array elements.
        <br /> • Return multiple values: for example, returning the square and
        square root of numbers.
        <br /> • Dynamic Memory Allocation: We can use pointers to dynamically
        allocate memory. The advantage of dynamically allocated memory is that
        it is not deleted until we delete it individually.
        <br /> • Implementation of data structures.
        <br />• System-level programming where memory addresses are useful.
      </p>
      <h3 className="subHead">Advantage of pointer</h3>
      <p>
        • A pointer reduces code and improves performance, is used to get
        strings, trees, etc., and is used with arrays, structures, and
        functions.
        <br /> • We can return multiple values from a function using a pointer.{" "}
        <br />• Allows to use the memory location of any computer and memory.
      </p>
      <h3 className="subHead">Disadvantage</h3>
      <p>
        <br /> • Complexity
        <br /> • Risk of errors <br /> • Memory leaks <br /> • Dangling pointer
        <br /> • Uninitialized pointer
      </p>
      <h3 className="subHead">Usage of pointers</h3>
      <p>
        1) Dynamic memory allocation In C, we can dynamically allocate memory
        with malloc() and calloc() functions where a pointer is used.
        <br /> 2) Arrays, Functions and Structures in language references are
        widely used in arrays, functions and structures. This reduces code and
        improves performance.
        <br /> Let us try an example of the pointer in C++.
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
                #include &quot;iostream&quot; {"\n"}
                using namespace std; {"\n"}
                int main() {"\n"}
                &#123; {"\n"}
                &nbsp;&nbsp;int x = 10; // variable declared {"\n"}
                &nbsp;&nbsp;int* myptr; // pointer variable {"\n"}
                &nbsp;&nbsp;myptr = &amp;x; // storing address of x in pointer
                myptr {"\n"}
                &nbsp;&nbsp;cout &lt;&lt; &quot;Value of x is: &quot; &lt;&lt; x
                &lt;&lt; endl; {"\n"}
                &nbsp;&nbsp;cout &lt;&lt; &quot;Address stored in myptr is:
                &quot; &lt;&lt; myptr &lt;&lt; endl; {"\n"}
                &nbsp;&nbsp;cout &lt;&lt; &quot;Value of x using *myptr is:
                &quot; &lt;&lt; *myptr &lt;&lt; endl; {"\n"}
                &nbsp;&nbsp;return 0; {"\n"}
                &#125; {"\n"}
              </code>
            </pre>
            <p>
              <br /> Output:
              <br /> Value of x is: 10 <br />
              Address stored in myptr is: 0x7ffd2b32c7f4 <br />
              Value of x using *myptr is: 10
            </p>
          </div>
        </div>
        Explanation.
        <br /> The above program declares an integer variable 'x' with an
        initial value of 10 and a pointer variable called 'myptr'. The memory
        address of X is assigned to myptr. It then prints the value of x, the
        address stored in myptr and the value of x obtained by dereferencing the
        pointer to myptr.
        <br />
        Let us try another C++ program to swap the number without using the 3rd
        variable
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
                #include &lt;iostream&gt;{"\n"}
                using namespace std;{"\n"}
                int main(){"\n"}
                &#123;{"\n"}
                &nbsp;&nbsp;int a = 20, b = 10;{"\n"}
                &nbsp;&nbsp;int *p1 = &a, *p2 = &b;{"\n"}
                &nbsp;&nbsp;cout &lt;&lt; "Before swap: *p1=" &lt;&lt; *p1
                &lt;&lt; " *p2=" &lt;&lt; *p2 &lt;&lt; endl;{"\n"}
                &nbsp;&nbsp;*p1 = *p1 + *p2;{"\n"}
                &nbsp;&nbsp;*p2 = *p1 - *p2;{"\n"}
                &nbsp;&nbsp;*p1 = *p1 - *p2;{"\n"}
                &nbsp;&nbsp;cout &lt;&lt; "After swap: *p1=" &lt;&lt; *p1
                &lt;&lt; " *p2=" &lt;&lt; *p2 &lt;&lt; endl;{"\n"}
                &nbsp;&nbsp;return 0;{"\n"}
                &#125;{"\n"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>Before swap: *p1=20 *p2=10{"\n"}After swap: *p1=10 *p2=20</pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">What are pointers and string literals?</h3>
      <p>
        String literals are null-terminated strings. The elements of a string
        literal are arrays of type const char (because characters in a string
        cannot be changed) plus a final null character.
        <h3>What is a null pointer?</h3>
        This unique pointer type available in C++ represents a missing type.
        Pointers that point to a value that has no type are called empty
        pointers (and thus also have undefined length and undefined dereference
        properties). This shows that void pointers are very flexible because
        they can point to any data type. This flexibility has its advantages.
        Direct dereference is not possible with these pointers. Before they can
        be referenced, they must be converted to another pointer that points to
        a specific data type.
        <br />
        <h3>What is an invalid pointer?</h3>
        A pointer must point to a valid address, not necessarily useful objects
        (like arrays). We call these invalid pointers. Also, invalid pointers
        are uninitialized pointers.
        <br />
        1. int *ptr1; <br />
        2. int arr[10]; <br />
        3. int *ptr2 = arr+20; <br />
        Here ptr1 is uninitialized making it invalid and ptr2 is out of bounds
        of arr making it invalid as well. (Note that not all build errors are
        due to bad references.). <br />
        <h3>What is null pointer?</h3>
        A null pointer is not just an incorrect address; it also indicates
        nothing. There are two ways to mark a pointer as NULL.
        <br />
        1. int *ptr1 = 0; <br />
        2. int *ptr2 = NULL; <br />
        <h3>What is pointer to a pointer?</h3>
        In C++, we can construct a pointer to another pointer, which can then
        point to data or another pointer. The one-word operator (*) is all that
        is needed in the syntax to declare a pointer to each level of
        indirectness.
        <br />
        char a; <br />
        char *b; <br />
        char ** c;
        <br /> a = 'g';
        <br /> b = &a;
        <br /> c = &b;
        <br />
        References in C++
        <br />
        When a variable is declared as a reference, it becomes an alternative
        name for an existing variable. A variable can be declared as a reference
        by placing the "and" statement. There are three ways to pass arguments
        to a C++ function:
        <br />• call-by-value <br />
        • call-by-reference with a pointer argument <br />
        • call-by-reference with a reference argument. <br />
        <h3 className="subHead">
          C++ Program with Pass-by-Value, Pass-by-Reference with Pointer
          Arguments, and Pass-by-Reference with Reference Arguments
        </h3>
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
                #include &lt;iostream&gt;
                {"\n"}using namespace std;
                {"\n"} {"//"} Pass-by-Value
                {"\n"}int square1(int n)
                {"\n"}&#123;
                {"\n"} cout &lt;&lt; "address of n1 in square1(): " &lt;&lt;
                &amp;n &lt;&lt; "\n";
                {"\n"} n *= n;
                {"\n"} return n;
                {"\n"}&#125;
                {"\n"} {"//"} Pass-by-Reference with Pointer Arguments
                {"\n"}void square2(int* n)
                {"\n"}&#123;
                {"\n"} cout &lt;&lt; "address of n2 in square2(): " &lt;&lt; n
                &lt;&lt; "\n";
                {"\n"} *n *= *n;
                {"\n"}&#125;
                {"\n"} {"//"} Pass-by-Reference with Reference Arguments
                {"\n"}void square3(int&amp; n)
                {"\n"}&#123;
                {"\n"} cout &lt;&lt; "address of n3 in square3(): " &lt;&lt;
                &amp;n &lt;&lt; "\n";
                {"\n"} n *= n;
                {"\n"}&#125;
                {"\n"}void example()
                {"\n"}&#123;
                {"\n"} {"//"} Call-by-Value
                {"\n"} int n1 = 8;
                {"\n"} cout &lt;&lt; "address of n1 in main(): " &lt;&lt;
                &amp;n1 &lt;&lt; "\n";
                {"\n"} cout &lt;&lt; "Square of n1: " &lt;&lt; square1(n1)
                &lt;&lt; "\n";
                {"\n"} cout &lt;&lt; "No change in n1: " &lt;&lt; n1 &lt;&lt;
                "\n";
                {"\n"}
                {"\n"} {"//"} Call-by-Reference with Pointer Arguments
                {"\n"} int n2 = 8;
                {"\n"} cout &lt;&lt; "address of n2 in main(): " &lt;&lt;
                &amp;n2 &lt;&lt; "\n";
                {"\n"} square2(&amp;n2);
                {"\n"} cout &lt;&lt; "Square of n2: " &lt;&lt; n2 &lt;&lt; "\n";
                {"\n"} cout &lt;&lt; "Change reflected in n2: " &lt;&lt; n2
                &lt;&lt; "\n";
                {"\n"}
                {"\n"} {"//"} Call-by-Reference with Reference Arguments
                {"\n"} int n3 = 8;
                {"\n"} cout &lt;&lt; "address of n3 in main(): " &lt;&lt;
                &amp;n3 &lt;&lt; "\n";
                {"\n"} square3(n3);
                {"\n"} cout &lt;&lt; "Square of n3: " &lt;&lt; n3 &lt;&lt; "\n";
                {"\n"} cout &lt;&lt; "Change reflected in n3: " &lt;&lt; n3
                &lt;&lt; "\n";
                {"\n"}&#125;
                {"\n"} {"//"} Driver program
                {"\n"}int main() &#123; example(); &#125;
              </code>
            </pre>
          </div>
        </div>
        <br />
        <h4 className="subHead">Output:</h4>
        <br />
        <pre>
          <br />
          address of n1 in main(): 0x7fffa7e2de64 address of n1 in square1():{" "}
          <br />
          0x7fffa7e2de4c <br /> Square of n1: 64 <br /> No change in n1: 8{" "}
          <br />
          address of n2 in main(): 0x7fffa7e2de68 <br />
          address of n2 in square2(): 0x7fffa7e2de68 <br />
          Square of n2: 64 <br />
          Change reflected in n2: 64 <br /> address of n3 in main():
          0x7fffa7e2de6c <br />
          address of n3 in square3(): 0x7fffa7e2de6c <br /> Square of n3: 64
          <br /> Change reflected in n3: 64
        </pre>
      </p>
      <h3 className="subHead">Pointer Vs References</h3>
      <p>
        This presents the differences between referrals and referrals. Both
        dereferences and dereferences can be used to modify local variables of a
        function within another function. Both can also be used to preserve
        copying of large objects when they are passed as arguments to functions
        or returned from functions for efficiency. Despite the above
        similarities, there are the following differences between pointers and
        pointers. References are less efficient than references Once a reference
        is created, you cannot later make a reference to another object; it
        cannot be reset. This is often done with pointers. References cannot be
        NULL values. Pointers are often converted to NULL to indicate that they
        do not point to anything valid. Reference must be justified on the
        declaration. Pointers have no such limitation. Pointer Control Vs
        Reference Control in C++: In C++ we can pass parameters to a function
        either through pointers or through references. In both cases we get the
        same result. So what to prefer and why? Passing a pointer reference in
        C++: This article compares the use of "pointer to pointer" and
        "reference to pointer" in some cases.
        <br />
        For example, we can consider it as
        <br />
        int a = 10;
        <br /> void*aa = &a;. //it is valid
        <br /> void &ar = a; // it is not valid
        <br />
      </p>
    </div>
  );
};

export default Pointers;
