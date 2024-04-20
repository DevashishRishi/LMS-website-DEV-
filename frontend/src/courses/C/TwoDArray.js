import React from "react";

const TwoDArray = () => {
  return (
    <div>
      <h3 className="subHead">2-D (two dimensional) Array </h3>
      <p>
        A two-dimensional array can be defined as a set of arrays. A 2D table is
        organized into matrices that can be represented as a collection of rows
        and columns. However, 2D tables are created to implement a relational
        database-like data structure. It makes it easy to manage a large amount
        of information at once and can be passed to any number of functions as
        needed.
        <br />
        Let’s understand the syntax first Data_type array_name[rows][columns];
        <br />
        Example
        <br />
        Int marks[2][4];
        <br />
        Here int shows the data type Marks shows the name of the array 2 show
        the number of rows 4 shows number of columns
        <br />
      </p>
      <h3 className="subHead">Initialization of 2-D Array</h3>
      <p>
        In a 1D array, we don't need to size the array if the declaration and
        initialization are done at the same time. However, this does not work
        for 2D arrays. We need to define at least the second dimension of the
        array. A two-dimensional array can be declared and defined in the
        following way. Let us understand this by an example Int arr[4][3]={"{"}
        {"{"}1,2,3{"}"},{"{"}4,5,6{"}"},{"{"}7,8,9{"}"},{"{"}6,4,5{"}"}
        {"}"};
        <br /> Let us understand this by a program
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
                int i=0,j=0; Int arr[4][3]={"{"}
                {"{"}1,2,3{"}"},{"{"}4,5,6{"}"},{"{"}7,8,9{"}"},{"{"}6,4,5{"}"}
                {"}"}; //traversing 2D array for(i=0;i&lt;4;i++)
                {"{"}
                for(j=0;j&lt;3;j++)
                {"{"}
                printf("arr[%d][%d] = %d \n",i,j,arr[i][j]);
                {"}"} {"//"}end of j{"}"} {"//"}end of i return 0;
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </p>
    </div>
  );
};

export default TwoDArray;
