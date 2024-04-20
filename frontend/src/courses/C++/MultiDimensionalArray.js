import React from "react";

const MultidimensionalArray = () => {
  return (
    <div>
      <h3 className="subHead">Multidimensional Array</h3>
      <p>
        Each element of such a table is described by two indices, the first
        representing the row and the second representing the column. As you can
        see, the components are arranged in a two-dimensional matrix using rows
        and columns; there are I number of rows and j number of columns. A
        two-dimensional array is the simplest type of multidimensional array; it
        is also a multidimensional array. There are no restrictions on the table
        and its dimensions. Let’s us understand how a multidimensional array
        works
        <br />
        int mark[5] = {(19, 10, 8, 17, 9)}
        <br />
        {"//"} change 4th element to 9
        <br />
        mark[3] = 9;
        <br />
        {"//"} take input from the user
        <br />
        {"//"} store the value at third position
        <br />
        cin {">>"} mark[2];
        <br />
        {"//"} take input from the user
        <br />
        {"//"} insert at ith position
        <br />
        cin {">>"} mark[i-1];
        <br />
        {"//"} print first element of the array
        <br />
        cout {"<<"} mark[0];
        <br />
        {"//"} print ith element of the array
        <br />
        cout {">>"} mark[i-1];
        <br />
        let us try some C++ programs to display the sum and average of array
        elements.
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
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main()
              {"\n"}&#123;
              {"\n   "}double numbers[] = &#123;7, 5, 6, 12, 35, 27&#125;;
              {"\n   "}double sum = 0;
              {"\n   "}double count = 0;
              {"\n   "}double average;
              {"\n   "}cout &lt;&lt; "The numbers are: ";
              {"\n   "} {"//"} print array elements
              {"\n   "} {"//"} use of range-based for loop
              {"\n   "}for (const double &amp;n : numbers) &#123;
              {"\n      "}cout &lt;&lt; n &lt;&lt; " ";
              {"\n      "}sum += n;
              {"\n      "}++count;
              {"\n   "}&#125;
              {"\n   "}cout &lt;&lt; "\nTheir Sum = " &lt;&lt; sum &lt;&lt;
              endl;
              {"\n   "}average = sum / count;
              {"\n   "}cout &lt;&lt; "Their Average = " &lt;&lt; average
              &lt;&lt; endl;
              {"\n   "}return 0;
              {"\n"}&#125;
              <br />
              <br />
              Output:
              <br />
              The numbers are: 7 5 6 12 35 27
              <br />
              Their Sum = 92
              <br />
              Their Average = 15.3333
            </pre>
          </div>
        </div>
      </p>
      <p>
        Let’s try a C++ program to display the elements of the array.
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
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main()
              {"\n"}&#123;
              {"\n   "}int numbers[5] = &#123;7, 5, 6, 12, 35&#125;;
              {"\n   "}cout &lt;&lt; "The numbers are: ";
              {"\n   "} {"//"} Printing array elements
              {"\n   "} {"//"} using range-based for loop
              {"\n   "}for (const int &amp;n : numbers) &#123;
              {"\n      "}cout &lt;&lt; n &lt;&lt; " ";
              {"\n   "}&#125;
              {"\n   "}cout &lt;&lt; "\n The numbers are: ";
              {"\n   "} {"//"} Printing array elements
              {"\n   "} {"//"} using traditional for loop
              {"\n   "}for (int i = 0; i &lt; 5; ++i) &#123;
              {"\n      "}cout &lt;&lt; numbers[i] &lt;&lt; " ";
              {"\n   "}&#125;
              {"\n   "}return 0;
              {"\n"}&#125;
              <br />
              <br />
              Output:
              <br />
              The numbers are: 7 5 6 12 35
              <br />
              The numbers are: 7 5 6 12 35
            </pre>
          </div>
        </div>
        <br />
        Important things to remember in the array.
        <br />
        Important things to remember when using arrays in C++Array indexes start
        from zero. This means that the first item stored at index 0 is x[0]. The
        last element of a matrix of size n is stored at index (n-1). This
        example and the last element is x[5]. The addresses of the matrix
        elements are consecutive. Consider a scenario where x[0 beginning]
        address is 2120.Next element x[1] has address 2124, followed by x[2],
        2128, etc. The size of each element is quadrupled in this case. This is
        because the capacity of int is 4 bytes.
        <br /> Let us try a C++ program to find the size of the array.
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
              #include &lt;iostream&gt;
              {"\n"}using namespace std;
              {"\n"}int main()
              {"\n"}&#123;
              {"\n   "}int arr[] = &#123; 1, 2, 3, 4, 5 &#125;;
              {"\n   "} {"//"} Size of one element of an array
              {"\n   "}cout &lt;&lt; "Size of arr[0]: " &lt;&lt; sizeof(arr[0])
              &lt;&lt; endl;
              {"\n   "} {"//"} Size of array 'arr'
              {"\n   "}cout &lt;&lt; "Size of arr: " &lt;&lt; sizeof(arr)
              &lt;&lt; endl;
              {"\n   "}
              {"//"} Length of an array
              {"\n   "}int n = sizeof(arr) / sizeof(arr[0]);
              {"\n   "}cout &lt;&lt; "Length of an array: " &lt;&lt; n &lt;&lt;
              endl;
              {"\n   "}return 0;
              {"\n"}&#125;
              <br />
              <br />
              Output:
              <br />
              Size of arr[0]: 4
              <br />
              Size of arr: 20
              <br />
              Length of an array: 5
            </pre>
          </div>
        </div>
      </p>
      <h3 className="subHead">Relation between arrays and pointers in C++</h3>
      <p>
        In C++, arrays and pointers are closely related. An array name is
        treated as a pointer that stores the memory address of the first element
        of the array. As we discussed earlier, array elements are stored in
        contiguous memory locations, so we can access all array elements by
        array name.
        <br /> Let us understand this by a C++ program
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
                #include &lt;iostream&gt;
                {"\n"}using namespace std;
                {"\n"}int main()
                {"\n"}&#123;
                {"\n"} {"//"} Defining an array
                {"\n"} int arr[] = &#123; 1, 2, 3, 4 &#125;;
                {"\n"} {"//"} Define a pointer
                {"\n"} int* ptr = arr;
                {"\n"} {"//"} Printing address of the array using array name
                {"\n"} cout &lt;&lt; "Memory address of arr: " &lt;&lt; &arr
                &lt;&lt; endl;
                {"\n"} {"//"} Printing address of the array using ptr
                {"\n"} cout &lt;&lt; "Memory address of arr: " &lt;&lt; ptr
                &lt;&lt; endl;
                {"\n"} return 0;
                {"\n"}&#125;
                {"\n"}
                {"\n"}Output:
                {"\n"}Memory address of arr: 0x7fff2f2cabb0
                {"\n"}Memory address of arr: 0x7fff2f2cabb0
              </code>
            </pre>
          </div>
        </div>
        <br />
        Explanation:-
        <br /> In the above code, we first define an array “arr” and then
        declare a pointer “ptr” and assign the array “arr” to it. We are able to
        assign arr to ptr because arr is also a pointer. After that, we print
        the memory address of arr using reference operator (&) and also print
        the address stored in pointer ptr and we can see arr and ptr, both
        stores the same memory address
      </p>
      <h3 className="subHead">Passing array to a function </h3>
      <p>
        To use arrays effectively, we should know how to operate arrays. We can
        pass arrays as arguments to functions, just like variables to functions,
        but we know that the array name is treated as a pointer using this
        concept, we can pass an array as an argument to functions, and then use
        the pointer to access all of them. elements of the table. So in the end
        arrays are always passed as function pointers. Let's look at 3 ways to
        pass an array to a function that is mainly used.
        <br />
        1) Passing array as a pointer
        <br />
        In this method, we simply pass the name of the array in the function
        call, which means we pass the address of the first element of the array.
        Using this method, we can change the array elements of a function.
        <br /> Syntax
        <br /> return_type function_name ( data_type *array_name )
        <br />
        {
          <br />
          // set of statements
        }
        <br />
        2) Passing array as an unsized array
        <br /> In this method, the function accepts an array using a simple
        array declaration with no size as an argument.
        <br /> Syntax
        <br /> return_type function_name ( data_type array_name[] )
        <br />
        {
          <br />
          // set of statements
        }
        <br />
        3) Passing array as sized array <br />
        In this method, the function accepts an array using a simple array
        declaration with size as its argument. We use this method specifying the
        size of the array only to indicate the size of the array. <br />
        Syntax <br />
        return_type function_name(data_type array_name[size_of_array])
        <br />{" "}
        {
          <br />
          // set of statements
        }
        <br />
        Now illustrating different ways to pass the array to function.
        <br />
        {/* Write the code for pointer array */}
        {/* Write the code for pointer array */}
        {/* Write the code for pointer array */}
        {/* Write the code for pointer array */}
        <br />
        {/* Write the code */}
        {/* Write the code */}
        {/* Write the code */}
        {/* Write the code */}
        {/* Write the code */}
      </p>
    </div>
  );
};

export default MultidimensionalArray;
