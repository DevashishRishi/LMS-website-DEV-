import React from "react";

const OneDArray = () => {
  return (
    <div>
      <h3 className="subHead">Introduction to Arrays</h3>
      <p>
        A collection of identically typed data elements kept at adjacent memory
        regions is called an array. In the C programming language, arrays are a
        derived data type that may hold primitive data types like int, char,
        double, float, etc. Additionally, it can store a collection of derived
        data types, including structures and pointers. The most basic type of
        data structure is an array, in which each data member may be accessed at
        random by using its index number. The C array comes in handy when you
        need to hold related elements. For instance, we don't need to construct
        separate variables for the marks in each topic if we need to keep a
        student's marks across six subjects. Alternatively, we can create an
        array that has the ability to store the marks for every subject at
        consecutive memory locations. We can easily access the elements by
        utilizing the array. To access the items of the array, a few lines of
        code are all that are needed.
        <br />
        Array is having some properties also lets understand them.
        <br />
        • Each array element is of the same data type and carries the same size,
        ie. int = 4 bytes.
        <br />• Array elements are stored in contiguous memory locations, with
        the first element stored in the smallest memory location.
        <br />• Array elements can be used randomly, because with a given base
        address and data element size, we can calculate the address of each
        array element.
        <br />
        Advantage
        <br />
        1) Code Optimization: Less code to access data.
        <br />
        2) Ease of traversal: Using a for loop, we can easily retrieve the
        elements of an array.
        <br />
        3) Ease of sorting: We only need a few lines of code to sort array
        elements.
        <br />
        4) Random Access: We can access any element randomly using an array.
        <br />
        Disadvantage <br />
        Fixed size: Whatever size we specify while defining the table, we cannot
        exceed the limit. So it doesn't grow dynamically like LinkedList, which
        we'll learn about later.
        <br />
        Declaration of array in c:-
        <br />
        we can declare the array like data_type, array_name[array_size];
        <br />
        let us understand this by an example:-
        <br />
        <br />
        int marks [5];
        <br />
        int is data_type
        <br />
        marks is array_name and 5 is size of the array.
        <br />
        Initialization of array :-
        <br />
        The basic method to initialize or identify the element we do indexing.
        We can initialize each index a particular element.
        <br />
        Suppose:
        <br />
        As we had seen above marks is the name of the array and size of the
        array is having 5 then:
        <br />
        Marks0 = 70; (initializing point)
        <br />
        Marks1 = 60;
        <br />
        Marks2 = 80;
        <br />
        Marks3 = 55;
        <br />
        Marks4 = 40;
        <br />
        Let us understand this by a program.
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
                #include &lt;stdio.h&gt; int main()
                {"{"}
                int i = 0; int marks[5]; {"//"} declaration of array marks[0] =
                70; {"//"} initialization of array marks[1] = 60; marks[2] = 80;
                marks[3] = 55; marks[4] = 40; {"//"} traversal of array for(i =
                0; i &lt; 5; i++)
                {"{"}
                printf("%d \n", marks[i]);
                {"}"} {"//"}end of for loop return 0;
                {"}"}
              </code>
            </pre>
            <p>Output:</p>
            <pre>70 60 80 55 40</pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Array declaration with initialization</h3>
      <p>
        We can also initialize the size of the array at the time of declaration
        let us see how
        <br />
        Int marks[5]={"{"}20,40,60,80,30{"}"}
        <br />
        In such cases we can also initialize the value directly without
        declaring the size of the array
        <br />
        Int marks[]={"{"}20,40,60,80,30{"}"}
        <br />
        Let us understand this a C program <br />
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
                {"\n"}int main()
                {"\n"}int i = 0;
                {"\n"}int marks[5] = {(20, 40, 60, 80, 30)}; // declaration and
                initialization of array // traversal of array
                {"\n"}for(i = 0; i &lt; 5; i++)
                {"\n"}printf("%d \n", marks[i]);
                {"\n"}return 0;
              </code>
            </pre>
            <br />
            <p>Output:</p>
            <pre>20 40 60 80 30</pre>
          </div>
        </div>
        <br />
        Let us understand some basic simple programs in C having arrays.
        <br />
        We are now doing sorting of an array having bubble sort method to sort
        the array in ascending order.
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
                #include &lt;stdio.h&gt;
                {"\n"}void main ()
                {"\n"} &#x7B;
                {"\n"} int i, j, temp;
                {"\n"} int a[10] = {(10, 9, 7, 101, 23, 44, 12, 78, 34, 23)};
                {"\n"} for(i = 0; i &lt; 10;i++)
                {"\n"} &#x7B;
                {"\n"} for(j = i+1; j &lt; 10; j++)
                {"\n"} &#x7B;
                {"\n"} if(a[j] {">"} a[i])
                {"\n"} &#x7B;
                {"\n"} temp = a[i];
                {"\n"} a[i] = a[j];
                {"\n"} a[j] = temp;
                {"\n"} &#125;
                {"\n"} &#125;
                {"\n"}
                {"\n"} &#125;
                {"\n"} printf("Printing Sorted Element List ...\n");
                {"\n"} for(i = 0; i &lt;10; i++)
                {"\n"} &#x7B;
                {"\n"} printf("%d\n", a[i]);
                {"\n"} &#125;
                {"\n"}&#125;
              </code>
            </pre>
            <p>Output :-</p>
            <pre>
              Printing Sorted Element List ... 101 78 44 34 23 23 12 10 9 7
            </pre>
          </div>
        </div>
        <br />
        Now we will try to print the largest as well as second largest element
        in the array.
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
                #include &lt;stdio.h&gt; void main ()
                {"{"}
                int arr[100], i, n, largest, sec_largest; printf("Enter the size
                of the array?"); scanf("%d",&n); printf("Enter the elements of
                the array?"); for(i = 0; i&lt;n; i++)
                {"{"}
                scanf("%d",&arr[i]);
                {"}"}
                largest = arr[0]; sec_largest = arr[1]; for(i=0;i&lt;n;i++)
                {"{"}
                if(arr[i]&gt;largest)
                {"{"}
                sec_largest = largest; largest = arr[i];
                {"}"}
                else if (arr[i]&gt;sec_largest && arr[i]!=largest)
                {"{"}
                sec_largest=arr[i];
                {"}"}
                {"}"}
                printf("largest = %d, second largest = %d",largest,sec_largest);
                {"}"}
              </code>
            </pre>
          </div>
        </div>
        <br />
        Try to have this program and comment your output.
      </p>
    </div>
  );
};

export default OneDArray;
