import React from "react";

const Pandas = () =>{
    return (
        <div>
            <br/>

            <div>
                <h3 className="subHead">Pandas Basic Data Structure and Its Functions</h3>
                <p>
                To understand how Python works with structural data we must know about NumPy and pandas. In this chapter, we will learn about pandas in detail. Pandas have data structures and data manipulation tools; they are designed to make data cleaning and analysis fast and easy in Python. Pandas is frequently used in conjunction with analytical libraries like statsmodels and scikit-learn, data visualization tools like matplotlib, and numerical computing tools like NumPy and SciPy. Pandas take on many of the idiomatic array-based computing features of NumPy, particularly array-based functions and a predilection for data processing without the for loops.
                </p>
                <p>
                Pandas get its many features from NumPy, but the biggest difference is that the pandas is designed to work with tabular or heterogeneous data. NumPy is best suited for data that are homogeneous in nature.
                </p>
                <p>
                Around 2010 the pandas became open source and after that became mature according to time. Now it is quite a big library and it can broad set of real-world use cases. It is somehow a norm that we use the below code as an import convention for pandas :-
                </p>
                <p><span className="codeKey">import </span> pandas <span className="codeKey"> as </span> pd</p>
                <p>
                As soon as we see pd in our code it means that we are referring to pandas library. Given how frequently Series and DataFrame are used, you might also find it simpler to import them into the local namespace:
                </p>
                <p><span className="codeKey">from </span> pandas <span className="codeKey"> import </span> Series, DataFrame</p>
            </div>

            <div>
                <h3 className="subHead">Introduction to pandas Data Structure</h3>
                <p>
                    To understand and know how to use pandas we need to know its two workhorse data structures: Series and DataFrame. They did not provide solutions for every type of problem but they are very powerful and useful and also they are easy to use for most applications.
                </p>
            </div>

            <div>
                <h3 className="subHead">Series</h3>
                <p>
                    A series is a one-dimensional array-like data structure or object, it can handle any type of data (like integers, strings, floating point numbers, Python objects, etc.) in a sequence. In this, the axis labels are combined and referred to as an index. The most common Series is formed from only an array of data.
                </p>
                <p>
                    The syntax of the series is given below and also an example is provided:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s = pd.Series(data, index=index)
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above syntax, the data can be many different things, like – a Python dict, an ndarray, or a scalar value (like 5).
                </p>
                <p>
                    Now let’s look at an example:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import pandas as pd
                                <br/>

                                {"\n"}s1 = pd.Series([1, 3, 5, 7, -3])
                                {"\n"}s1
                                <br/>
                                <br/>

                                {"\n"}Output :
                                {"\n"}0     1
                                {"\n"}1     3
                                {"\n"}2     5
                                {"\n"}3     7
                                {"\n"}4     -3
                                {"\n"}
                                {"\n"}dtype: int64
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                The values are shown on the right and the index is on the left in the interactive string representation of a series. In the above code, we didn’t specify the index for the data, therefore a default one that consists of the integers 0 through N – 1 is created. By using its values and index characteristics, you may obtain the Series's array representation and index object, respectively:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import numpy as pd
                                <br/>

                                {"\n"}s = pd.Series(np.random.randn(5), index=["a","b","c","d","e"])
                                {"\n"}s
                                <br/>
                                <br/>

                                {"\n"}Output :
                                {"\n"}a     -0.876002
                                {"\n"}b     0.079572
                                {"\n"}c     2.044466
                                {"\n"}d     0.400041
                                {"\n"}e     0.375295
                                {"\n"}
                                {"\n"}dtype: float64
                                <br/>

                                {"\n"}s.index
                                {"\n"}Index(['a', 'b', 'c', 'd', 'e'], dtype='object')
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                If we want, we can use labels in the index for selecting a single value or set of values from the Series. Let’s look at the code for this:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s['a']
                                <br/>

                                {"\n"}-0.8760016609925169  
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    If we want, we can also update or reassign a new value to the index. We just need to pass that index with a new value using the assignment operator. Let’s look at its code
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s['d'] = 5
                                {"\n"}s[['a', 'c', 'd']]
                                <br/>

                                {"\n"}a     -0.876002
                                {"\n"}b     2.044466
                                {"\n"}d     5.000000
                                {"\n"}dtype: float64
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, the [‘a’, ‘c’, ‘d’] is interpreted as a list of indices, even if it has strings instead of integers.
                </p>
            </div>

            <div>
                <h3 className="subHead">From Dict</h3>
                <p>
                When a dictionary is used to create a series, the data elements of the series are the corresponding values, and the dictionary keys are the series' index labels. This is how it operates :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import pandas as pd
                                <br/>

                                {"\n"}#Define a Python dictionar
                                {"\n"}data = &#65371;'A': 10, 'B': 20, 'C': 30, 'D': 40&#65373;
                                <br/>

                                {"\n"}#Create a Series from the dictionar
                                {"\n"}series = pd.Series(data)
                                <br/>

                                {"\n"}print(series)
                                <br/>

                                {"\n"}A     10
                                {"\n"}B     20
                                {"\n"}C     30
                                {"\n"}D     40
                                {"\n"}dtype: int64
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                If an index is supplied explicitly while building a pandas Series from a dictionary, the values from the dictionary that match the labels in the index will be taken out and added to the Series. Let's examine this in more detail:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import pandas as pd
                                <br/>

                                {"\n"}#Define a Python dictionary
                                {"\n"}data = &#65371;'A': 10, 'B': 20, 'C': 30, 'D': 40&#65373;
                                <br/>

                                {"\n"}#Define a custom index
                                {"\n"}custom_index = ['B', 'C', 'E', 'A']
                                <br/>

                                {"\n"}#Create a Series from the dictionary with custom index
                                {"\n"}series = pd.Series(data, index=custom_index)
                                <br/>

                                {"\n"}print(series)
                                <br/>

                                {"\n"}B     20.0
                                {"\n"}C     30.0
                                {"\n"}E     NaN
                                {"\n"}A     10.0
                                {"\n"}dtype: float64
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                This example has dictionary data with the keys 'A', 'B', 'C', and 'D', each of which is linked to a number between 10 and 40. Furthermore, a custom index called custom_index is defined, labeled 'B', 'C', 'E', and 'A'.
                </p>
                <p>
                Pandas compares the labels in the custom index with the dictionary keys when generating the Series using pd.Series(data, index=custom_index). The relevant value from the dictionary is added to the Series if a label in the index matches a key in the dictionary. Pandas adds a missing value—typically NaN, or "Not a Number"—for a label in the index if the dictionary does not include a corresponding key for that label.
                </p>
                <p>
                Here we can see that the values 20, 30, and 10 that correspond to labels 'B', 'C', and 'A' in the custom index have been taken from the dictionary. Pandas have added a missing value (NaN) to the Series for the label "E" in the custom index, which lacks a matching key in the dictionary. 
                </p>
                <p>
                With this behavior, we can extract values from the dictionary in a specific order that we specify for the index labels. It's very helpful for aligning data from several sources or rearranging already-existing data in a certain order.
                </p>
            </div>

            <div>
                <h3 className="subHead">From scalar value</h3>
                <p>
                We must explicitly supply an index when constructing a pandas Series with a scalar value—that is, a single item rather than a collection like a list or dictionary. The Series labels will be determined by this index. After that, the scalar value we supply will be repeated until it matches the index's length.
                </p>
                <p>
                Here's a summary of how this procedure operates :- 
                </p>
                <ol>
                    <li>
                        <p>
                             <b>Establishing a Scalar Value :-</b> To begin, you must define a scalar value, which is effectively a single value that the Series should repeat.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Defining an Index :-</b> Next, you must specifically state an index. Each element in the Series will be identified by a label found in this index. It may be any other iterable that has labels, or it could be a list of labels or a range of integers. 
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Repeating the Scalar Value :-</b> Pandas will repeat the scalar value as many times as required to match the index's length once it has both the scalar value and the index. Every repetition will have its own label derived from the index. 
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Establishing the Series:</b> Lastly, pandas use the supplied index labels and the repeated scalar values to create the Series. 
                        </p>
                    </li>
                </ol>
                <p>Here’s an example to illustrate this process :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import pandas as pd
                                <br/>

                                {"\n"}#Define a scalar value
                                {"\n"}scalar_value = 5
                                <br/>

                                {"\n"}#Define an index
                                {"\n"}index = ['A', 'B', 'C', 'D']
                                <br/>

                                {"\n"}#Create a Series with scalar value and index
                                {"\n"}series = pd.Series(scalar_value, index=index)
                                <br/>

                                {"\n"}print(series)
                                <br/>

                                {"\n"}A     5
                                {"\n"}B     5
                                {"\n"}C     5
                                {"\n"}D     5
                                {"\n"}dtype: int64
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In this instance, the index is ['A', 'B', 'C', 'D'], and the scalar value is 5. Pandas repeats the scalar value 5 four times (one for each label in the index) and assigns each repetition to a different label when generating the Series using pd.Series(scalar_value, index=index).
                </p>
                <p>
                As we can see, in order to match the index's length, the scalar value 5 has been repeated four times. Each repetition is linked to a different label from the index. 
                </p>
                <p>
                This method works well when we need to align data with a specified set of labels or when we want to establish a Series with a constant value.
                </p>
            </div>

            <div>
                <h3 className="subHead">Series is ndarray-like</h3>
                <p>
                A Series in pandas is frequently referred to be "ndarray-like" because Owing to its resemblance to NumPy ndarrays, it's an effective data structure for managing structured Python data. Similar to NumPy arrays, Series ensures effective processing and storage by storing data in a single, contiguous block of memory. Numerous array-like operations, including as integer-based indexing, slicing, element-wise operations, and iteration, are supported by Series thanks to this shared feature.
                </p>
                <p>
                Nonetheless, Series differs from NumPy arrays in that it has labeled indexing. Because each element in a Series has an index, as opposed to NumPy arrays, data can be accessed meaningfully and intuitively using labels rather than merely positional indexes. Because of this labeled indexing feature, Series are more user-friendly and ideal for working with labeled data sets where it's important to identify items by meaningful labels.
                </p>
                <p>
                The fact that Series automatically align data during operations based on their index labels is another important differentiator. This means that Series matches items based on their labels rather than just their positions when executing element-wise computations or arithmetic operations. This automatic alignment lowers the possibility of errors resulting from mismatched data and simplifies data handling activities.
                </p>
                <p>
                Additionally, series include features unique to labeled data, like grouping, merging, and managing missing values. Series is a flexible tool for working with structured data sets in Python because of these capabilities, which allow for more complex workflows for data manipulation and analysis.
                </p>
                <p>
                Many of the essential elements of NumPy ndarrays, including its underlying data storage, support for mixed data types, and attributes like shape, dtype, and size, are still present in Series despite these improvements and new capabilities. Series is a strong and adaptable data structure for a variety of Python data processing and analysis applications because it combines ndarray-like features and sophisticated functionality.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import pandas as pd
                                <br/>

                                {"\n"}#Create a Series from a list with labeled index
                                {"\n"}data = [10, 20, 30, 40]
                                {"\n"}index = ['A', 'B', 'C', 'D']
                                {"\n"}series = pd.Series(data, index=index)
                                <br/>

                                {"\n"}# Similarities with NumPy ndarray
                                {"\n"}print("Similarities with NumPy ndarray:")
                                {"\n"}print("Data:", series.values)     # Accessing data as a NumPy array
                                {"\n"}print("Shape:", series.shape)     # Shape attribute
                                {"\n"}print("Type:", series.dtype)      # Data type of elements
                                {"\n"}print()
                                <br/>

                                {"\n"}# Element-wise operation
                                {"\n"}print("Element-wise operations:")
                                {"\n"}print("Addition:", series + 5)    # Adding scalar to each elemen
                                {"\n"}print("Multiplication:", series * 2)     # Multiplying each element by 2
                                {"\n"}print()
                                <br/>

                                {"\n"}# Differences from NumPy ndarray
                                {"\n"}print("Differences from NumPy ndarray:")
                                {"\n"}print("Accessing by label:")
                                {"\n"}print("Value at index 'B':", series['B'])    # Accessing by label
                                {"\n"}print("Slicing by label:") 
                                {"\n"}print("Values from index 'B' to 'D':", series['B':'D'])     # Slicing by label
                                {"\n"}print()
                                <br/>

                                {"\n"}Automatic alignment
                                {"\n"}print("Automatic alignment:")
                                {"\n"}data2 = [1, 2, 3]
                                {"\n"}index2 = ['A', 'B', 'E']
                                {"\n"}series2 = pd.Series(data2, index=index2)
                                {"\n"}print("Series 1:", series)
                                {"\n"}print("Series 2:", series2)
                                {"\n"}print("Addition (aligned):")
                                {"\n"}print(series + series2)  # Automatic alignment during addition
                                <br/>
                                <br/>

                                {"\n"}Similarities with NumPy ndarray:
                                {"\n"}Data: [10 20 30 40]
                                {"\n"}Shape: (4,)
                                {"\n"}Type: int64
                                <br/>

                                {"\n"}Element-wise operations:
                                {"\n"}Addition: A    15
                                {"\n"}B    25
                                {"\n"}C    35
                                {"\n"}D    45
                                {"\n"}dtype: int64
                                <br/>

                                {"\n"}Multiplication: A    20
                                {"\n"}B    40
                                {"\n"}C    60
                                {"\n"}D    80
                                {"\n"}dtype: int64
                                <br/>

                                {"\n"}Differences from NumPy ndarray:
                                {"\n"}Accessing by label:
                                {"\n"}Value at index 'B': 20
                                {"\n"}Slicing by label:
                                {"\n"}Values from index 'B' to 'D': B    20
                                {"\n"}C    30
                                {"\n"}D    40
                                {"\n"}dtype: int64
                                <br/>

                                {"\n"}Automatic alignment:
                                {"\n"}Series 1: A    10
                                {"\n"}B    20
                                {"\n"}C    30
                                {"\n"}D    40
                                {"\n"}dtype: int64
                                <br/>

                                {"\n"}Series 2: A    1
                                {"\n"}B    2
                                {"\n"}E    3
                                {"\n"}dtype: int64
                                <br/>

                                {"\n"}Addition (aligned):
                                {"\n"}A    11.0
                                {"\n"}B    22.0
                                {"\n"}C     NaN
                                {"\n"}D     NaN
                                {"\n"}E     NaN
                                {"\n"}dtype: float64
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In this code: we create a pandas Series ‘series’ from a list ‘data’ with labeled index ‘index’. We demonstrate ndarray-like properties such as accessing data as a NumPy array (‘series.values’), checking shape (‘series.shape’), and data type (‘series.dtype’). Element-wise operations are performed on the Series, showcasing how it behaves like a NumPy array. We highlight differences from NumPy arrays by accessing elements using labels (‘series[‘B’]’) and slicing by labels (‘series[‘B’:’D’]’). Automatic alignment is demonstrated by creating another Series ‘series2’ with a different index and then adding it to the original Series ‘series’, showcasing how Series align data based on their index labels during operations.
                </p>
                <p>
                The above code example illustrates how a pandas Series combines ndarray-like properties with additional features tailored for working with labeled data. Because Series acts very similar to a ndarray and is a valid argument to most NumPy functions. However, operations such as slicing will also slice the index.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s.iloc[0]
                                {"\n"}-0.47087179891290054
                                <br/>

                                {"\n"}s.iloc[:3]
                                {"\n"}a   -0.470872
                                {"\n"}b    0.069327
                                {"\n"}c   -1.600170
                                {"\n"}dtype: float64
                                <br/>

                                {"\n"}s[s &gt; s.median()]
                                {"\n"}a   -0.470872
                                {"\n"}b    0.069327
                                {"\n"}c   -1.600170
                                {"\n"}dtype: float64
                                <br/>

                                {"\n"}s.iloc[[4, 3, 1]]
                                {"\n"}e   -0.615836
                                {"\n"}d    5.000000
                                {"\n"}b   0.069327
                                {"\n"}dtype: float64
                                <br/>

                                {"\n"}np.exp(s)
                                {"\n"}a     0.624458
                                {"\n"}b     1.071787
                                {"\n"}c     0.201862
                                {"\n"}d     148.413159
                                {"\n"}e     0.540189
                                {"\n"}dtype: float64
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                The above codes data type is often NumPy dtype. Nevertheless, NumPy's type system is extended in a few places by pandas and third-party libraries; in this scenario, the dtype would be an ExtensionDtype. Nullable integer data types and categorical data are two instances found in pandas.
                </p>
            </div>

            <div>
                <h3 className="subHead">Categorical data</h3>
                <p>
                The Pandas data type known as "categoricals" corresponds to the statistical category variables. There is a finite set of possible values for a categorical variable. Examples include blood type, gender, social status, country of association, length of observation, and Likert scale rating.
                </p>
                <p>
                Unlike statistical categorical variables, categorical data cannot be subjected to numerical operations (additions, divisions, etc.) but may have an order (e.g., "strongly agree" vs. "agree" or "first observation" vs. "second observation").
                </p>
                <p>
                For categorical data, all values are either in categories or np.nan. Not the lexical order of the values, but the order of categories defines order. The data structure's internal components are an integer array of codes that point to the actual value in the categories array and an array of categories.
                </p>
                <p>
                The following situations call for the use of the categorical data type :-  
                </p>
                <p>
                A string variable with a limited range of possible values. Some memory can be saved by converting such a string variable to a categorical variable.
                </p>
                <p>
                A variable's lexical order and logical order are not the same thing ("one," "two," and "three"). Sorting and min/max will employ the logical order rather than the lexical order if you convert to a categorical and set an order on the categories.
                </p>
                <p>
                To indicate to other Python libraries that this column needs to be handled more like a categorical variable, i.e., by using appropriate plot styles or statistical techniques.
                </p>
                <p>
                By specifying dtype= “category” we can set the dtype as category in series, let’s see this in the code:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s = pd.Series(["a", "b", "c", "a"], dtype="category")
                                {"\n"}s
                                {"\n"}
                                {"\n"}0     a
                                {"\n"}1     b
                                {"\n"}2     c
                                {"\n"}3     a
                                {"\n"}dtype: category
                                {"\n"}Categories (3, object): ['a', 'b', 'c']
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                When you have a column that represents categories or groups and has a finite number of unique values, you may find it helpful to convert an existing Series or column to a category data type in pandas. Such columns can be made into categorical data types, which helps speed up operations like value_counts and groupby and conserve memory. This is how to change the data type of an existing series or column to a category.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import pandas as pd
                                <br/>

                                {"\n"}Sample DataFrame
                                {"\n"}data = &#65371;'category': ['A', 'B', 'C', 'A', 'B', 'C']&#65373;
                                {"\n"}df = pd.DataFrame(data)
                                <br/>

                                {"\n"}Convert 'category' column to category data type
                                {"\n"}df['category'] = df['category'].astype('category')
                                <br/>

                                {"\n"}# Check data types
                                {"\n"}print(df.dtypes)
                                <br/>

                                {"\n"}category    category
                                {"\n"}dtype: object
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code :-
                </p>
                <p>
                We create a sample DataFrame ‘df’ with a column named ‘category’ containing categorical data represented by strings ‘A’, ‘B’, and ‘C’. We use the ‘astype()’ method to convert the ‘category’ column to a category data type by specifying the argument ‘category’. Finally, we print the data types of all columns in the DataFrame to confirm that the ‘category’ column has been converted to a category data type.
                </p>
                <p>
                The 'category' column is now of type 'category' following conversion. Performance and memory efficiency may benefit from this, particularly when working with huge datasets that contain repeated values in categorical columns.
                </p>
                <p>
                By giving a pandas.Categorical object to the Series or assigning it to a DataFrame, we may transform an existing Series or column into a category data type in pandas. You have more control over the categories and their arrangement with this strategy. This is how we can proceed.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}import pandas as pd
                                <br/>

                                {"\n"}<span className="codeComment">Sample Data</span>
                                {"\n"}data = &#65371;'category': ['A', 'B', 'C', 'A', 'B', 'C']&#65373;
                                {"\n"}df = pd.DataFrame(data)
                                <br/>

                                {"\n"}<span className="codeComment"># Define categories and their order</span>
                                {"\n"}categories = ['C', 'B', 'A']
                                <br/>

                                {"\n"}<span className="codeComment"># Create a Series with categorical data type</span>
                                {"\n"}categorical_series = pd.Series(pd.Categorical(df['category'], categories=categories, ordered=True))
                                <br/>

                                {"\n"}<span className="codeComment"># Assign the Series to the DataFrame</span>
                                {"\n"}df['category'] = categorical_series
                                <br/>

                                {"\n"}<span className="codeComment"># Check data types</span>
                                {"\n"}print(df.dtypes)
                                <br/>

                                {"\n"}category    category
                                {"\n"}dtype: object
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In this code: we define the sample data and categories, we created a Series by passing the result of the ‘pd.Categorical’ to ‘pd.Series’. This creates a Series with the categorical data type. We then assign this Series back to the ‘category’ column in the DataFrame. Finally, we check the data types of the DataFrame to confirm that the ‘category’ column is of type ‘category’.
                </p>
                <p>
                Let’s see an another code example :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}raw = pd.Categorical(['a','b','c', 'a'], categories=['b', 'c', 'd'], ordered=False)
                                {"\n"}s = pd.Series(raw)
                                {"\n"}s
                                <br/>

                                {"\n"}0     NaN
                                {"\n"}1     b
                                {"\n"}2     c
                                {"\n"}3     NaN
                                {"\n"}dtype: category
                                {"\n"}Categories (3, object): ['a', 'b', 'c']
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                If we want or need the actual array backing in a Series then we need to use Series.array. let’s see it code example.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s = pd.Series(np.random.randn(5), index=["a","b","c","d","e"])
                                {"\n"}s.array
                                <br/>

                                {"\n"}&lt;PandasArray&gt;
                                {"\n"}[   -0.49539759093888,   0.9048859692015288,   0.7768509581044222,
                                -0.4570944365250742, -0.40373533868486233]

                                {"\n"}Length: 5
                                {"\n"}dtype: float64
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                Accessing the array can be useful when we need to do some operations without the index. There will always be an ExtensionArray in Series.array. Pandas is capable of taking an ExtensionArray and storing it in a Series or a column of a DataFrame. In short, an ExtensionArray is a thin wrapper around one or more concrete arrays, such as a numpy.ndarray. 
                </p>
                <p>
                While the Series is very close or very much like to ndarray, if we need an actual ndarray, then we can use Series.to_numpy(). Let’d see its example with code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s.to_numpy()
                                <br/>

                                {"\n"}array([-0.49539759,  0.90488597,  0.77685096, -0.45709444, -0.40373534])

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                Even if the Series is backed by a ExtensionArray, Series.to_numpy() will return a NumPy ndarray.
                </p>
            </div>

            <div>
                <h3 className="subHead">Series is dict-like</h3>
                <p>
                In Python, the ability of both data structures to access and manipulate its elements using index labels is compared between a Series and a fixed-size dictionary. In this sense, a Series is comparable to a fixed-size dictionary in the following ways :-
                </p>
                <p>
                <b>Index Labeling :-</b> A Series assigns an index label to each entry, just like a dictionary does. These identifiers give every element in the Series a distinct identity.
                </p>
                <p>
                <b>Accessing Values :-</b> By giving their index label, we can retrieve values from both a dictionary and a series. When dealing with a Series, we may retrieve the associated value by using square brackets ([]) in conjunction with the index label.
                </p>
                <p>
                    <b>Setting Values :-</b> In a similar vein, setting values by index label is supported by both data structures. Similar to changing a key-value pair in a dictionary, we can use the assignment operator (=) to assign a new value to a specific index label in a Series.
                </p>
                <p>
                <b>Key-Value Relationship :-</b> A Series is essentially a key-value store, with each index label acting as a key and the associated element in the Series acting as the value.
                </p>
                <p>
                <b>Fixed-Size :-</b> "Fixed-size" describes the Series's or dictionary's initial predetermined size. The amount of elements (i.e., key-value pairs) is not fixed once initialized; however, new elements can be added, and existing ones can be changed or eliminated.
                </p>
                <p>
                Overall, the comparison between a Series and a fixed-size dictionary highlights how easily data can be accessed and modified using index labels, which makes the Series a useful and adaptable data structure for a range of Python data manipulation applications.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s = pd.Series(np.random.randn(5), index=["a", "b", "c", "d", "e"])
                                {"\n"}s['a']
                                {"\n"}s['e'] = 12.0
                                {"\n"}s
                                {"\n"}'e' in s
                                {"\n"}'f' in s
                                <br/>

                                {"\n"}-0.38937111790538564
                                {"\n"}a    -0.389371
                                {"\n"}b    -0.130040
                                {"\n"}c     0.879017
                                {"\n"}d    -0.002223
                                {"\n"}e    12.000000
                                {"\n"}dtype: float64
                                {"\n"}
                                {"\n"}True
                                {"\n"}False
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In Pandas, a Series functions similarly to a fixed-size dictionary. Similar to dictionary keys, we may use index labels to retrieve and edit elements. To retrieve the value linked to the index label 'a', for instance, use s['a']. Resetting the relevant element to a new value, as s['e'] = 12.0, updates it. Using the in operator, we can determine whether index labels are present or absent: True for labels like "e" that already exist, and False for labels like "f" that don't.
                </p>
                <p>
                If you try to access a label that is not in the Series index, an exception is raised, indicating that the label is not found in the index. Let’s see this in code :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}s['f']
                                <hr/>

                                {"\n"}KeyError       
                                {"\n"}File ~\anaconda3\lib\site-packages\pandas\core\indexes\base.py:3652, in Index.get_loc(self, key)
                                {"\n"}      3651 try:
                                {"\n"}-&gt; 3652     return self._engine.get_loc(casted_key)
                                {"\n"}3653 except KeyError as err:
                                <br/>

                                {"\n"}File ~\anaconda3\lib\site-packages\pandas\_libs\index.pyx:147, in pandas._libs.index.IndexEngine.get_loc()
                                <br/>

                                {"\n"}File ~\anaconda3\lib\site-packages\pandas\_libs\index.pyx:176, in pandas._libs.index.IndexEngine.get_loc()
                                <br/>

                                {"\n"}File pandas\_libs\hashtable_class_helper.pxi:7080, in pandas._libs.hashtable.PyObjectHashTable.get_item()
                                <br/>


                                {"\n"}KeyError: 'f'
                                <br/>

                                {"\n"}The above exception was the direct cause of the following exception:
                                <br/>

                                {"\n"}KeyError
                                {"\n"}Cell In[36], line 1
                                {"\n"}----&gt; 1 s['f']
                                <br/>

                                {"\n"}File ~\anaconda3\lib\site-packages\pandas\core\series.py:1007, in 
                                {"\n"}Series.__getitem__(self, key)
                                {"\n"}1004     return self._values[key]
                                {"\n"}1006 elif key_is_scalar:
                                {"\n"}-&gt; 1007     return self._get_value(key)
                                {"\n"}1009 if is_hashable(key):
                                {"\n"}1010     # Otherwise index.get_value will raise InvalidIndexError
                                {"\n"}try:
                                {"\n"}      # For labels that don't resolve as scalars like tuples and frozensets
                                <br/>

                                {"\n"}File ~\anaconda3\lib\site-packages\pandas\core\series.py:1116, in 
                                {"\n"}Series._get_value(self, label, takeable)
                                {"\n"}      1113     return self._values[label]
                                {"\n"}1115 # Similar to Index.get_value, but we
                                {"\n"}1116 loc = self.index.get_loc(label)
                                {"\n"}1118 if is_integer(loc):
                                {"\n"}1119     return self._values[loc]
                                <br/>

                                {"\n"}File ~\anaconda3\lib\site-packages\pandas\core\indexes\base.py:3654, in Index.get_loc(self, key)
                                {"\n"}3652     return self._engine.get_loc(casted_key)
                                {"\n"}3653 except KeyError as err:
                                {"\n"}-&gt; 3654     raise KeyError(key) from err
                                {"\n"}3655 except TypeError:
                                {"\n"}3656     # If we have a listlike key, _check_indexing_error will raise
                                {"\n"}3657    # InvalidIndexError. Otherwis
                                {"\n"}3657     
                                {"\n"}3659     self._check_indexing_error(key)
                                {"\n"}KeyError: 'f'
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                    <p>
                    The value linked to a label in the Series index can be retrieved using the Series.get() method. It returns None by default or a given default value if the label is absent.
                    </p>
                    <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}s.get('f')
                                        {"\n"}
                                        {"\n"}s.get('f', np.nan)
                                        {"\n"}nan
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                    </div>
                    <br/>
                    <p>
                    S.get('f') attempts to obtain the value linked to the label 'f' from the Series's' in the first line. The method returns None by default because 'f' is not in the index.
                    </p>
                    <p>
                    The same thing is done in the second line by s.get('f', np.nan), but it also sets np.nan as the default value to return if the label is missing. In this instance, the procedure returns the designated default value np.nan because 'f' cannot be found in the index.
                    </p>
            </div>

            <div>
                <h3 className="subHead">Vectorized operations and label alignment with Series</h3>
                <p>
                Pandas Series' vectorized operations and label alignment are two important features that make data processing easier by automatically aligning items during operations based on their index labels. Here's a description and some sample code:
                </p>
                <p>
                <b>Vectorized Operations :-</b> Similar to operations on NumPy arrays, you may do element-wise operations on whole Series using pandas Series' vectorized operations. By using C libraries that are optimized, these operations are carried out in an efficient manner.
                </p>
                <p>
                Label Alignment: Label alignment guarantees that operations amongst Series are carried out according to corresponding index labels. Pandas aligns the components according to their index labels before carrying out an operation between two Series. Accordingly, related items that have matching labels are treated together, whereas unmatched labels are treated with grace.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}# Create two Series with different index labels
                                        {"\n"}s1 = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
                                        {"\n"}s2 = pd.Series([10, 20, 30], index=['b', 'c', 'd'])
                                        <br/>

                                        {"\n"}# Perform vectorized addition operation
                                        {"\n"}result = s1 + s2
                                        <br/>

                                        {"\n"}print("Result of addition:")
                                        {"\n"}print(result)
                                        <br/>

                                        {"\n"}Result of addition:
                                        {"\n"}a     NaN
                                        {"\n"}b    12.0
                                        {"\n"}c    23.0
                                        {"\n"}d     NaN
                                        {"\n"}dtype: float64

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                    We are demonstrating the capabilities of vectorized operations and label alignment in pandas Series with the code that is provided. First, we make two Series objects, called s1 and s2, with distinct values and index labels. The labels "a," "b," and "c" have values of 1, 2, and 3, respectively, in s1, and the labels "b," "c," and "d" have values of 10, 20, and 30 in s2. When pandas adds two elements, s1 and s2, it automatically aligns the elements according to their index labels. The addition of appropriate items from both Series with matching labels is represented by the resulting Series, called result. For instance, when the label "b" occurs in both Series, the respective values (2 from S1 and 10 from S2) are added, producing in an output value of 12. However, the resulting Series contains NaN values, which indicate missing data because the labels are mismatched, for labels that appear in just one of the Series (such as 'a' in s1 and 'd' in s2). The aforementioned behavior exemplifies how pandas manages label alignment in vectorized operations with ease, guaranteeing precise and understandable computation for Series with varying indexes.
                </p>
                <p>
                    In the resultant Series, corresponding members with matching index labels 'b' and 'c' underwent addition operations. Label alignment in action was shown by the NaN values in the output resulting from the mismatched labels 'a' and 'd'.
                </p>
                <p>
                    The fact that operations between Series automatically align the data depending on label is a significant distinction between them and ndarray. As a result, you can construct computations without worrying about whether the labels of the involved Series match.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}s.iloc[1:] + s.iloc[:-1]
                                        {"\n"}
                                        {"\n"}a         NaN
                                        {"\n"}b   -0.260081
                                        {"\n"}c    1.758035
                                        {"\n"}d   -0.004446
                                        {"\n"}e         NaN
                                        {"\n"}dtype: float64
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                Pandas automatically align the components depending on their index labels while executing operations across Series with various indexes. This indicates that the union of the indices from the two Series will be included in the resulting Series. A label will be recorded as missing in the result (represented by NaN) if it is present in one Series but absent from the other. Without explicitly aligning the data, this capability enables seamless data processing. Because they may concentrate on the logic of their operations rather than worrying about data alignment issues, it gives users a great deal of freedom and flexibility in interactive data analysis and research. Pandas is an extremely strong and easy-to-use option for data manipulation jobs because of its inbuilt data alignment function, which sets it apart from many other tools meant for working with labeled data.
                </p>
            </div>

            <div>
                <h3 className="subHead">Name Attribute</h3>
                <p>
                    A pandas Series' name attribute offers a means of giving the Series itself a descriptive description or name. Rather than being a label for specific Series elements, it is a label for the entire Series object.
                </p>
                <p>
                We have the opportunity to give a Series a name when we construct it. When discussing the data in the Series or giving context, this moniker can be useful. It helps keep our code clear and organized, which is especially helpful when working with several Series or merging or combining Series with other data structures.
                </p>
                <p>
                    We may access and change the name attribute by explicitly providing a value to it (series.name = "MySeries") or by using dot notation (series.name). The name attribute has a default value of None.
                </p>
                <p>
                Here's a quick code illustration :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}
                                        {"\n"}# Create a Series with a name
                                        {"\n"}s = pd.Series([1, 2, 3], name="MySeries")
                                        <br/>

                                        {"\n"}# Access the name attribute
                                        {"\n"}print("Series Name:", s.name)
                                        <br/>

                                        {"\n"}# Modify the name attribute
                                        {"\n"}s.name = "UpdatedSeriesName"
                                        {"\n"}print("Updated Series Name:", s.name)
                                        <br/>

                                        {"\n"}Series Name: MySeries
                                        {"\n"}Updated Series Name: UpdatedSeriesName
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>

                <p>
                We first establish a Series called "MySeries" in this example, and then we access and change its name attribute. This gives us a simple way to identify and label the Series in our analyses and code.
                </p>
                <p>
                In many situations, the Series name can be assigned automatically. For example, if we choose a single column from a DataFrame, the name will automatically be allocated the column label.
                </p>
                <p>
                We can rename a Series with the pandas.Series.rename() method.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}s2 = s.rename("Different Series")
                                        {"\n"}s2.name
                                        <br/>

                                        {"\n"}'Different Series'
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                Note: here s and s2 refer to different objects.
                </p>
            </div>

            <div>
                <h3 className="subHead">DataFrame</h3>
                <p>
                A 2-dimensional labeled data structure with potentially varied sorts of columns is called a data frame. It can be compared to a SQL table, spreadsheet, or dict of Series objects. It is typically the Pandas object that is used the most. Similar to Series, DataFrame takes in a wide range of input types:
                </p>
                <p>
                Dict of 1D ndarrays, lists, dicts, or Series
                <br/>
                2-D numpy.ndarray
                <br/>
                Structured or record ndarray
                {"\n"}Another DataFrame


                </p>
                <p>
                We can additionally give the index (row labels) and columns (column labels) variables in addition to the data. You are ensuring the index and/or columns of the generated DataFrame if we pass an index and/or columns. All data that does not match the provided index will be discarded as a result of using a dict of Series plus a specific index.
                </p>
                <p>We can also describe pandas as</p>
                <p>
                The pandas library in Python provides a two-dimensional labeled data structure called a pandas DataFrame. It looks like a spreadsheet or table with rows and columns of data. A single observation or record is represented by each row, while a distinct variable or feature is represented by each column.
                </p>
                <p>
                Here are some key characteristics of a pandas DataFrame :-
                </p>
                <p>
                <b>Tabular Structure:</b> Data is arranged tabularly, with rows and columns creating a structure resembling a grid. Working with and analyzing structured data sets becomes intuitive as a result.
                </p>
                <p >
                <b>Labeled Axes :-</b> There are labels attached to rows and columns. The names of the rows are called the index, while the labels of the columns are kept in the columns property of the DataFrame. These labels offer useful identifiers that can be used to access and modify data.
                </p>
                <p>
                <b>Heterogeneous Data Types :-</b> Pandas DataFrames support columns with several data types, in contrast to NumPy arrays, which normally contain components of a single data type. We can work with different types of data within a single DataFrame because of this versatility.
                </p>
                <p>
                <b>Powerful Functionality :-</b> Numerous functions for data cleansing, modification, analysis, and visualization are available with DataFrames. This contains techniques for managing missing values, grouping and aggregating data, merging and joining DataFrames, indexing and slicing data, and much more.
                </p>
                <p>
                All things considered, pandas DataFrames offer a strong and adaptable tool for handling structured data in Python. Because of their user-friendly interface, extensive capability, and effective performance, they are frequently utilized in data science, machine learning, and data analysis jobs.
                </p>
            </div>

            <div>
                <h3 className="subHead">From dict of Series or dicts</h3>
                <p>
                The index of the final pandas DataFrame is created by taking the union of the indices of each individual Series when it is created from a dictionary of Series or dictionaries. This implies that any unique index label found in any Series will be included in the DataFrame's index.
                </p>
                <p>
                The DataFrame will be created when any nested dictionaries in the dictionary have been transformed into Series. By using this conversion, it is made sure that every key-value pair in the layered dictionaries links to a different DataFrame Series.
                </p>
                <p>
                Furthermore, the columns in the DataFrame will be built using the ordered list of dictionary keys if no columns are explicitly given. This means that the DataFrame's column names will be the keys from the outer dictionary, and the keys' order will remain intact.
                </p>
                <p>
                This is how the procedure is broken down :-
                </p>
                <p>
                <b>Index Formation :-</b> The union of the indexes of each Series in the dictionary will be used to create the index of the final DataFrame. This guarantees that the index of the DataFrame has all unique index labels for every Series.
                </p>
                <p>
                <b>Nested Dict Conversion :-</b> The original dictionary's nested dictionaries, if any, will be transformed into Series before the DataFrame is created. As a result, every key-value pair in the nested dictionaries is guaranteed to generate its own Series in the DataFrame.
                </p>
                <p>
                <b>Column Construction :-</b> The ordered set of keys in the outer dictionary will be used to generate the DataFrame's columns if no columns are explicitly given. This implies that the keys will remain in the same sequence and become the names of the DataFrame's columns.
                </p>
                <p>
                Pandas guarantees that the DataFrame it creates, complete with column names and index labels that appropriately match the data provided in the original dictionary of Series or dictionaries, by following these procedures. This feature makes it simple to transform structured data kept in dictionaries into DataFrames, enabling effective data handling and analysis.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}
                                        {"\n"}# Define a dictionary of Series
                                        {"\n"}data = &#65371;
                                        {"\n"}      'A': pd.Series([1, 2, 3]),
                                        {"\n"}      'B': pd.Series([4, 5, 6]),
                                        {"\n"}      'C': pd.Series([7, 8, 9])
                                        {"\n"}&#65373;
                                        <br/>

                                        {"\n"}# Create a DataFrame from the dictionary
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}   A  B  C
                                        {"\n"}0  1  4  7
                                        {"\n"}1  2  5  8
                                        {"\n"}2  3  6  9
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>

                <p>In the above code :-</p>
                <p>
                We define a dictionary ‘data’ containing three Series labeled ‘A’, ‘B’ and ‘C’. Each Series contains a list of values. 
                </p>
                <p>
                    We then use the ‘pd.DataFrame()’ function to create a DataFrame ‘df’ from the dictionary ‘data’.

                </p>
                <p>
                Finally, we print the data DataFrame to display its contents.
                </p>
                <p>
                Let’s see how we code works. First, we define a dictionary data set with three Series, 'A, 'B, and 'C,' labeled. In the DataFrame, each Series corresponds to a data column. Pandas builds the DataFrame by aligning the index labels of each unique Series when we generate it using pd.DataFrame(data). The resulting DataFrame has the same index because the Series' indexes are the same (implicit integer indexes in this case beginning at 0).
                </p>
                <p>
                The dictionary's keys, "A," "B," and "C," serve as the DataFrame's column names, and the matching values are utilized as the data in each column. The DataFrame's column order corresponds with the dictionary's key order. This procedure shows how pandas builds a DataFrame from a dictionary of Series, guaranteeing that the DataFrame that is produced faithfully captures the information contained in the dictionary.
                </p>
            </div>

            <div>
                <h3 className="subHead">From dict of ndarrays/lists</h3>
                <p>
                Every key-value pair in the dictionary corresponds to a column of data in the pandas DataFrame that is created from a dictionary of NumPy arrays or lists. The data in each column is represented by the corresponding arrays or lists, and the keys serve as the column names. Let’s look at the code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np
                                        <br/>

                                        {"\n"}# Define a dictionary of NumPy arrays/lists
                                        {"\n"}data = &#65371;
                                        {"\n"}      'A': np.array([1, 2, 3]),
                                        {"\n"}      'B': p([4, 5, 6]),
                                        {"\n"}      'C': pnp.arange([7, 8, 9])
                                        {"\n"}&#65373;
                                        <br/>

                                        {"\n"}# Create a DataFrame from the dictionary
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}   A  B  C
                                        {"\n"}0  1  4  7
                                        {"\n"}1  2  5  8
                                        {"\n"}2  3  6  9
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In the above code :-
                </p>
                <p>
                We define a dictionary called ‘data’ that contains three keys (‘A’, ‘B’, ‘C’), each associated with a NumPy array or list representing the data in each column.
                </p>
                <p>
                We then use the ‘pd.DataFrame()’ function to create a DataFrame ‘df’ from the dictionary ‘data’.
                </p>
                <p>
                Finally, we print the DataFrame to display its contents.
                </p>
                <p>
                The output of this code is a DataFrame with three rows of data and three columns ('A, B, and C'), each of which represents a column that contains data from the dictionary.
                </p>
                <p>
                With the help of this method, we can quickly transform structured data from dictionaries of NumPy arrays or lists into pandas DataFrames, making it easy to deal with and edit tabular data.
                </p>
                <p>
                Let’s look at another example where we give keys and index in two steps :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        
                                        
                                        {"\n"}d = &#65371;"first": [1.0, 2.0, 3.0, 4.0], "second": [4.0, 3.0, 2.0, 1.0]&#65373;
                                        {"\n"}pd.DataFrame(d)
                                        <br/>

                                        {"\n"}     first   second
                                        {"\n"}0    1.0     4.0  
                                        {"\n"}1    2.0     3.0  
                                        {"\n"}2	   3.0	    2.0
                                        {"\n"}3	   4.0	    1.0
                                        <br/>


                                        {"\n"}pd.DataFrame(d, index = ["w", "x", "y", "z"])
                                        <br/>

                                        {"\n"}     first   second
                                        {"\n"}w    1.0     4.0  
                                        {"\n"}x    2.0     3.0  
                                        {"\n"}y	   3.0	    2.0
                                        {"\n"}z	   4.0	    1.0
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">From structured or record array</h3>
                <p>
                Every field in the structured or record array maps to a column in the pandas DataFrame when the DataFrame is created from it. The data in each field becomes the data in the corresponding column, and the names of the fields become the names of the columns.
                </p>
                <p>
                Similar to a row in a database table, a structured array, also called a record array, is an array where each element can have numerous fields or attributes. Each of these fields can be accessed by name, and they can contain a variety of data kinds. Let’s see an example code to understand it :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np
                                        <br/>

                                        {"\n"}# Define a structured array
                                        {"\n"}data = np.array([(1, 'Alice', 25),
                                        {"\n"}      (2, 'Bob', 30),
                                        {"\n"}      (3, 'Charlie', 35)],
                                        {"\n"}      dtype=[('ID', int), ('Name', 'U10'), ('Age', int)])
                                        <br/>

                                        {"\n"}# Create a DataFrame from the structured array
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}   ID  NAME      AGE
                                        {"\n"}0  1   Alice     25
                                        {"\n"}1  2   Bob       30
                                        {"\n"}2  3   Charlie   35
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In the above code example :-
                </p>
                <p>
                We first define a structured array ‘data’ with three fields: ‘ID’, ‘Name’, and ‘Age’. Each field contains data for one column in the DataFrame.
                </p>
                <p>
                We use the ‘pd.DataFrame()’ function to create a DataFrame ‘df’ from the structured array ‘data’.
                </p>
                <p>
                Finally, we print the DataFrame to display its contents.
                </p>
                <p>
                'ID', 'Name', and 'Age' are the three columns in the DataFrame that appear when this code runs. Each row of data represents an element in the structured array.
                </p>
                <p>
                Structured data, such as that from databases or structured files, can be easily transformed into a tabular format that is appropriate for analysis and manipulation by using structured arrays to construct DataFrames in pandas.
                </p>
            </div>

            <div>
                <h3 className="subHead">From a list of dicts</h3>
                <p>
                Every dictionary in the list represents a row of data in the pandas DataFrame that is created from the list of dictionaries. Each dictionary's keys serve as the names of its columns, and each column's contents are made up of matching values.
                </p>
                <p>
                Let’s see an example that shows how to create a DataFrame from a list of dictionaries :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np
                                        <br/>

                                        {"\n"}# Define a structured array
                                        {"\n"}data = []
                                        {"\n"}      &#65371;'ID': 1, 'Name': 'Alice', 'Age': 25&#65373;,
                                        {"\n"}      &#65371;'ID': 2, 'Name': 'Bob', 'Age': 30&#65373;,
                                        {"\n"}      &#65371;'ID': 3, 'Name': 'Charlie', 'Age': 35&#65373;
                                        {"\n"}&#65373;
                                        <br/>

                                        {"\n"}# Create a DataFrame from the list of dictionaries
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}   ID  NAME      AGE
                                        {"\n"}0  1   Alice     25
                                        {"\n"}1  2   Bob       30
                                        {"\n"}2  3   Charlie   35
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In the above code :-
                </p>
                <p>
                We define a list of ‘data’ containing three dictionaries, where each dictionary represents a row of data. 
                </p>
                <p>
                Each dictionary has keys ‘ID’, ‘Name’, and ‘Age’, which represent the column names in the DataFrame.
                </p>
                <p>
                We use the ‘pd.DataFrame()’ function to create a DataFrame ‘df’ from the list of dictionaries ‘data’.
                </p>
                <p>
                At last, we print the DataFrame to display its contents.
                </p>
                <p>
                A DataFrame with three columns ('ID,'Name,'Age') and three rows of data—each row representing a dictionary in the list—will appear when this code is executed.
                </p>
                <p>
                Data from JSON files or APIs can be easily transformed into a tabular format for analysis and manipulation by using a set of dictionaries to construct DataFrames in pandas.
                </p>
            </div>

            <div>
                <h3 className="subHead">From a dict of tuples</h3>
                <p>
                Every key-value pair in the dictionary corresponds to a column of data in the pandas DataFrame that is created from a dictionary of tuples. The tuples connected to each key represent the data in the appropriate column, and the keys themselves form the names of the columns. In the below code we can see how we can create a DataFrame from tuple.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np
                                        <br/>

                                        {"\n"}# Define a dictionary of tuples representing data
                                        {"\n"}data = &#65371;
                                        {"\n"}      'ID': (1, 2, 3),        # Tuple for 'ID' column
                                        {"\n"}      'Name': ('Alice', 'Bob', 'Charlie'),        # Tuple for 'Name' column
                                        {"\n"}      'Age': (25, 30, 35)     # Tuple for 'Age' column
                                        {"\n"}&#65373;
                                        <br/>

                                        {"\n"}# Create a DataFrame from the list of dictionaries
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}   ID  NAME      AGE
                                        {"\n"}0  1   Alice     25
                                        {"\n"}1  2   Bob       30
                                        {"\n"}2  3   Charlie   35
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>In the above code :-</p>
                <p>
                We start by importing the pandas library, which is needed to work with DataFrame. 
                </p>
                <p>
                The ‘data’ dictionary is defined to hold the data. Each key represents a column name, and the corresponding value is a tuple containing the data for that column.
                </p>
                <p>
                Comments are added to explain each key-value pair in the ‘data’ dictionary.
                </p>
                <p>
                The DataFrame ‘df’ is created using the ‘pd.DatFrame()’ function, which converts the dictionary of tuples into a pandas DataFrame.
                </p>
                <p>
                Finally, the DataFrame is printed to display its contents.
                </p>
                <p>
                'ID', 'Name', and 'Age' are the three columns in the DataFrame that appear when this code runs. The three rows of data each represent a tuple in the dictionary.
                </p>
                <p>
                Another easy technique to transform structured data into a tabular format that can be used for manipulation and analysis is to use pandas to construct DataFrames from a dictionary of tuples.
                </p>
            </div>

            <div>
                <h3 className="subHead">From a Series</h3>
                <p>
                A DataFrame with the same index as the input Series and one column with the original Series name (only if no other column name is supplied) will be the output.
                </p>
                <p>
                The Series functions as a single column of data in the DataFrame when a pandas DataFrame is created from it. The values in the Series become the data in the relevant column, and the index of the Series becomes the index of the DataFrame.
                </p>
                <p>
                Let’s see an example that shows how we can create a DataFrame from a Series.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np
                                        <br/>

                                        {"\n"}# Create a Series
                                        {"\n"}s = pd.Series([1, 2, 3, 4], name='Numbers')
                                        <br/>

                                        {"\n"}# Create a DataFrame from the list of series
                                        {"\n"}df = pd.DataFrame(s)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}     Numbers
                                        {"\n"}0    1   
                                        {"\n"}1    2   
                                        {"\n"}2    3   
                                        {"\n"}3    4   
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In the above code :-
                </p>
                <p>
                We create a pandas Series ‘s’ with values ‘[1, 2, 3, 4]’. We also give the Series a name ‘number’.
                </p>
                <p>
                We use the ‘pd.DataFrame()’ function to create a DataFrame ‘df’ from the Series ‘s’. 
                </p>
                <p>
                The resulting DataFrame ‘df’ has one column named ‘Numbers’, with the values from the series ‘s;.
                </p>
                <p>
                The index of the DataFrame ‘df’ is automatically set to the index of the Series ‘s’.
                </p>
                <p>
                Finally, we print the DataFrame to display its contents.
                </p>
                <p>
                This code will result in a DataFrame with four rows of data, each of which represents an element in the Series, and one column, "Numbers."
                </p>
                <p>
                When we want to transform a single column of data into a tabular format for analysis and modification, we can utilize a Series to produce a DataFrame.
                </p>
            </div>

            <div>
                <h3 className="subHead">From a list of namedtuples</h3>
                <p>
                The column names of a pandas DataFrame created from a list of namedtuples are determined by the field names of the first namedtuple. The DataFrame treats each namedtuple in the list that follows as a row of data. Based on the names of their respective fields, the values from each namedtuple are unpacked and fed into the associated columns of the DataFrame.
                </p>
                <p>
                The following columns in the corresponding row are marked as missing values (NaN) if a namedtuple has fewer fields than the initial namedtuple. This guarantees that the initial namedtuple's column structure is followed by every row of the DataFrame.
                </p>
                <p>
                A ValueError is raised, nevertheless, if any namedtuple in the list is longer than the first namedtuple—that is, if it has more fields. Since the DataFrame expects each row to have the same number of columns defined by the initial namedtuple, this indicates an inconsistent column structure.
                </p>
                <p>
                Basically, this procedure lets you take a list of namedtuples and turn it into a tabular format that can be displayed in a DataFrame. It also makes sure that the column structure is the same for all rows and can adapt to different tuple lengths.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}from collections import namedtuple
                                        <br/>

                                        {"\n"}# Define a namedtuple structure
                                        {"\n"}Person = namedtuple('Person', ['name', 'age', 'city'])
                                        <br/>

                                        {"\n"}# Create a list of namedtuples
                                        {"\n"}data = [
                                        {"\n"}      Person(name='Alice', age=25, city='New York'),
                                        {"\n"}Person(name='Bob', age=30, city='Los Angeles'),
                                        {"\n"}Person(name='Charlie', age=35, city='Chicago')
                                        {"\n"}]
                                        <br/>

                                        {"\n"}# Create a DataFrame from the list of namedtuples
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}   ID  NAME      AGE    City
                                        {"\n"}0  1   Alice     25    New York
                                        {"\n"}1  2   Bob       30    Los Angeles
                                        {"\n"}2  3   Charlie   35    Chicago
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>In the above code :-</p>
                <p>
                First, we import the namedtuple class from the collections module and the pandas library as "pd." Next, we define the namedtuple structure "Person," which has the fields "name," "age," and "city." This is an illustration of each data row's structure. Next, we make a list called "data" that has instances of the namedtuple "Person" in it. Each namedtuple contains the name, age, and city of each individual. From the list of namedtuples "data," we use the "pd.DataFrame()" function to generate a DataFrame "df." The columns of the DataFrame are determined by the field names of the first namedtuple ('Person'). Finally, we print the DataFrame so that its contents may be seen.
                </p>
                <p>
                Upon executing this code, a DataFrame featuring three columns ('name, age, and city') and three data rows—each row representing a namedtuple in the list—will appear. Each namedtuple's values are unpacked and placed into the matching columns of the DataFrame so that they line up with the column structure that is indicated by the first namedtuple's field names.
                </p>

            </div>

            <div>
                <h3 className="subHead">From a list of dataclasses</h3>
                <p>
                With the introduction of Data Classes in PEP 557, classes for storing data may be easily defined with less boilerplate code. These classes, which resemble dictionaries but include more features and type clues, are frequently used to represent organized data.
                </p>
                <p>
                You can pass a list of data classes straight to the pandas DataFrame constructor. This means that the properties of the data class will represent the columns of the DataFrame, and each instance of the data class in the list will correspond to a row in the DataFrame.
                </p>
                <p>
                The list that is supplied to the DataFrame constructor should only contain instances of the same data class, it is vital to remember this. Pandas expects consistent data types for each row; if there is a mix of distinct types in the list, it will report a TypeError.
                </p>
                <p>
                In essence, using data classes in the pandas DataFrame constructor makes it possible to represent structured data in a cleaner, more ordered manner. This is comparable to using dictionaries, but data classes also offer the advantages of defined attributes and type hints.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}from dataclasses import dataclass
                                        <br/>

                                        {"\n"}# Define a data class using the @dataclass decorator
                                        {"\n"}@dataclass
                                        {"\n"}class Person:
                                        {"\n"}      name: str
                                        {"\n"}      age: int
                                        {"\n"}      city: str
                                        <br/>

                                        {"\n"}# Create a list of namedtuples
                                        {"\n"}person1 = Person(name='Alice', age=25, city='New York')
                                        {"\n"}person2 = Person(name='Bob', age=30, city='Los Angeles')
                                        {"\n"}person3 = Person(name='Charlie', age=35, city='Chicago')
                                        {"\n"}
                                        <br/>

                                        {"\n"}# Create a list of data class instances
                                        {"\n"}data = [person1, person2, person3]
                                        <br/>

                                        {"\n"}# Create a DataFrame from the list of namedtuples
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        
                                        <br/>

                                        {"\n"}   ID  NAME      AGE    City
                                        {"\n"}0  1   Alice     25    New York
                                        {"\n"}1  2   Bob       30    Los Angeles
                                        {"\n"}2  3   Charlie   35    Chicago
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>In the above code :-</p>
                <p>
                First, we import the "dataclass" decorator and pandas as "pd" from the "dataclasses" module. Next, we use the "@dataclass" decorator to define a data class called "Person." The three properties of this class are "name," "age," and "city." Next, we make an instance of the 'Person' class to represent the various person data. After that, we compile these occurrences into a list we name "data." The list of data class instances is used to generate a DataFrame 'df' using the 'pd.DataFrame()' function. In the DataFrame, each attribute of the data class represents a row, and each instance is represented as a column. To show the contents of the DataFrame, we print it last.
                </p>
                <p>
                Upon executing this code, a DataFrame featuring three columns ('name, age, and city') and three data rows—each representing a Person data class instance—will appear. The advantages of data classes for defining characteristics and type hints are leveraged in this method, which offers a systematic and ordered manner to describe data in a DataFrame.
                </p>
            </div>

            <div>
            <h3 className="subHead">Missing data</h3>
            <p>
            Pandas offers two options for building a DataFrame with missing data. Using np.nan, which in pandas represents missing or undefined values, is one popular method. An alternative is to provide the DataFrame constructor a numpy MaskedArray as the data argument. The masked entries in the MaskedArray will be regarded as missing values in this instance.
            </p>

            </div>

            <div>
                <h3 className="subHead">Alternate constructors</h3>
                <h5 className="subHead">DataFrame.from_dict</h5>
                <p>
                To generate a DataFrame from a dictionary of dictionaries or a dictionary of sequences that resemble arrays, use pandas' DataFrame.from_dict() function. With a few exceptions, it functions identically to the standard DataFrame constructor.
                </p>
                <p>
                When using DataFrame.from_dict(), by default, the values represent the data for each column and the keys of the outer dictionary become the names of the DataFrame's columns. Passing a dictionary of dictionaries to the standard DataFrame constructor is analogous to this behavior.
                </p>
                <p>
                Nevertheless, DataFrame.from_dict() allows for the specification of an extra argument named orient. Orient is set to 'columns' by default, which means that column names are the outer dictionary's keys.
                </p>
                <p>
                Alternatively, row labels rather than column names are created using the outer dictionary's keys if orient is set to 'index'. In this instance, the data for each row is comprised of the values found in the dictionaries or sequences that resemble arrays.
                </p>
                <p>
                In conclusion, DataFrame.from_dict() makes it simple to create DataFrames from dictionary-like data structures, and the orient parameter gives you the option to choose whether the keys should be used as row labels or column names.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>

                                        {"\n"}# Define a dictionary of dictionaries representing data
                                        {"\n"}data_columns = &#65371;
                                        {"\n"}      'A': &#65371;'a': 1, 'b': 2, 'c': 3&#65373;,
                                        {"\n"}      'B': &#65371;'a': 4, 'b': 5, 'c': 6&#65373;,
                                        {"\n"}      'C': &#65371;'a': 7, 'b': 8, 'c': 9&#65373;
                                        {"\n"}&#65373;
                                        <br/>

                                        {"\n"}# Create a DataFrame using 'columns' orientation
                                        {"\n"}df_columns = pd.DataFrame.from_dict(data_columns)
                                        {"\n"}print("DataFrame with 'columns' orientation:")
                                        {"\n"}print(df_columns)
                                        <br/>

                                        {"\n"}# Define a dictionary of dictionaries representing data
                                        {"\n"}data_index = &#65371;
                                        {"\n"}      'a': &#65373;'A': 1, 'B': 4, 'C': 7&#65373;,
                                        {"\n"}      'b': &#65371;'A': 2, 'B': 5, 'C': 8&#65373;,
                                        {"\n"}      'c': &#65371;'A': 3, 'B': 6, 'C': 9&#65373;
                                        {"\n"}&#65373;
                                        <br/>

                                        {"\n"}# Create a DataFrame using 'index' orientation
                                        {"\n"}df_index = pd.DataFrame.from_dict(data_index, orient='index')
                                        {"\n"}print("\nDataFrame with 'index' orientation:")
                                        {"\n"}print(df_index)
                                        <br/>
                                        <br/>

                                        {"\n"}DataFrame with 'columns' orientation:
                                        {"\n"}   A  B  C
                                        {"\n"}a  1  4  7
                                        {"\n"}b  2  5  8
                                        {"\n"}c  3  6  9
                                        <br/>

                                        {"\n"}DataFrame with 'index' orientation:
                                        {"\n"}   A  B  C
                                        {"\n"}a  1  4  7
                                        {"\n"}b  2  5  8
                                        {"\n"}c  3  6  9
                                        
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>

                <p>
                In the above code :-
                </p>
                <p>
                The two dictionaries, "data_columns" and "data_index," which represent data with various orientations, are defined. In the first example, we use the "DataFrame.from_dict()" function to build a DataFrame called "df_columns" with the default "columns" orientation. The data for each column is provided by the inner dictionaries, and each key in the outer dictionary becomes a column name. In the second example, we use "DataFrame.from_dict()" and the "index" orientation to construct a DataFrame called "df_index." In this instance, the inner dictionaries supply the data for each row, while the outer dictionary's keys function as row labels. Lastly, in order to view the contents of both DataFrames, we print them.
                </p>
                
            </div>

            <div>
                <h5 className="subHead">DataFrame.from_records</h5>
                <p>
                To generate a DataFrame from a list of tuples or a NumPy ndarray with a structured data type, use pandas' DataFrame.from_records() function. With a few exceptions, this method functions similarly to the standard DataFrame constructor.
                </p>
                <p>
                The list of tuples or the structured ndarray represents the data to be included in the DataFrame when using DataFrame.from_records(). The values contained in the tuples or ndarray are utilized to fill the columns of the DataFrame. Each row of the ndarray corresponds to a row in the DataFrame.
                </p>
                <p>
                The fact that the generated DataFrame index could be a particular field of the structured data type is one important distinction. This means that instead of using the default integer index for the DataFrame, you can provide a specific field from the structured data type.
                </p>
                <p>
                Essentially, DataFrame.from_records() offers a handy method of constructing a DataFrame from structured data, retaining the flexibility and capability of the standard DataFrame constructor and letting you define the index field if necessary.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>

                                        {"\n"}# Define a list of tuples representing data
                                        {"\n"}data = [
                                        {"\n"}      ('Alice', 25, 'New York'), 
                                        {"\n"}      ('Bob', 30, 'Los Angeles'),
                                        {"\n"}      ('Charlie', 35, 'Chicago')
                                        {"\n"} ]
                                        <br/>

                                        {"\n"}# Define the column names
                                        {"\n"}columns = ['Name', 'Age', 'City']
                                        <br/>

                                        {"\n"}# Create a DataFrame using DataFrame.from_records()
                                        {"\n"}df = pd.DataFrame.from_records(data, columns=columns)
                                        <br/>

                                        {"\n"}# Display the DataFrame
                                        {"\n"}print(df)
                                        <br/>
                                        <br/>

                                        {"\n"}   ID  NAME      AGE    City
                                        {"\n"}0  1   Alice     25    New York
                                        {"\n"}1  2   Bob       30    Los Angeles
                                        {"\n"}2  3   Charlie   35    Chicago
                                        <br/>
                                      
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>In the above code :-</p>
                <p>
                Each tuple in our list of tuples data represents a row of data. The values in each tuple match the columns in the DataFrame. The column names are contained in a list that we define. We generate a DataFrame df from the list of tuples data using DataFrame.from_records(), passing the columns parameter with the names of the columns to define. To show the contents of the DataFrame, we print it last.
                </p>
                <p>
                This code will produce a DataFrame with three rows of data, each of which represents a tuple in the list data, and three columns ('Name, Age, and City'). The DataFrame's index will be the default integer index, and the column names are explicitly supplied.
                </p>
            </div>

            <div>
                <h3 className="subHead">Column selection, addition, deletion</h3>
                <p>
                A DataFrame in pandas can be thought of as a dictionary with Series objects inside of it, where each Series is a data column. This implies that interacting with a DataFrame is comparable to interacting with a dictionary of Series.
                </p>
                <p>
                <b>Getting Columns :-</b> The same technique that is used to access a value from a dictionary using its key can also be used to retrieve a column from a DataFrame. To obtain the associated Series object, just use the column name as the key.
                </p>
                <p>
                <b>Setting Columns :-</b> Assigning a Series object or an array-like object to a new key (column name) in the DataFrame dictionary-like structure is how you can similarly set a new column in a DataFrame. This procedure changes an existing column or adds a new one.
                </p>
                <p>
                <b>Deleting Columns: -</b> Taking out a column from a DataFrame is similar to taking out an entry from a dictionary. To remove a specific column from a DataFrame, use the del keyword and the column name.
                </p>
                <p>
                Working with DataFrame objects is intuitive because of the semantic equivalency between a DataFrame and a dictionary of Series, especially for users who are accustomed to using dictionaries in Python. It offers consistency in syntax across various operations and streamlines data processing activities.
                </p>
            </div>

            <div>
                <h3 className="subHead">Column Selection</h3>
                <p>
                    A DataFrame can have one or more columns selected by putting the column name(s) in square brackets []. We utilize the column name directly to choose a particular column. We must give a list of column names in order to choose several columns. As an alternative, we can choose a single column using the dot notation "." although this method is not advised if the column name contains spaces or other special characters.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>

                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}      ('Bob', 30, 'Los Angeles'),
                                        {"\n"}      'Age': [25, 30, 35],
                                        {"\n"}'City': ['New York', 'Los Angeles', 'Chicago']
                                        {"\n"} &#65373;
                                        <br/>

                                        {"\n"}# Define the column names
                                        {"\n"}columns = ['Name', 'Age', 'City']
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Selecting a single column using square brackets
                                        {"\n"}name_column = df['Name']
                                        <br/>

                                        {"\n"}# Selecting multiple columns using square brackets
                                        {"\n"}name_age_columns = df[['Name', 'Age']]
                                        <br/>

                                        {"\n"}# Selecting a single column using dot notation (not recommended)
                                        {"\n"}name_column_dot = df.Name
                                        <br/>
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Column Addition</h3>
                <p>
                By giving a Series or a list the new column name, we can add a new column to a DataFrame. The new column name must be specified using square brackets "[]," and the Series or list of values must be assigned to it.  
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        
                                        {"\n"}# Adding a new column with a list of values
                                        {"\n"}df['Gender'] = ['Female', 'Male', 'Male']
                                        <br/>

                                        {"\n"}# Adding a new column with a Series
                                        {"\n"}salary_series = pd.Series([50000, 60000, 70000])
                                        {"\n"}df['Salary'] = salary_series
                                        {"\n"}print(df)
                                        <br/>
                                        <br/>
                                        
                                        {"\n"}     Name      Age    City         Gender  Salary
                                        {"\n"}0    Alice     25     New York     Female  50000
                                        {"\n"}1    Bob       30     Los Angeles  Male    60000
                                        {"\n"}2    Charlie   35     Chicago      Male    70000
                                        {"\n"}

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Column Deletion</h3>
                <p>
                Using the 'drop()' method or the 'del' keyword, we can remove a column from a DataFame. Provide the name of the column and set "axis=1" to denote column-wise action in order to use the "drop()" method. We only need to mention the column name after "del" in order to use the "del" keyword.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        
                                        {"\n"}# Deleting a column using drop() method
                                        {"\n"}df.drop(columns=['Age'], inplace=True)
                                        <br/>

                                        {"\n"}# Deleting a column using del keyword
                                        {"\n"}del df['City']
                                        {"\n"}print(df)
                                        <br/>
                                        <br/>
                                        
                                        {"\n"}     Name      Gender  Salary
                                        {"\n"}0    Alice     Female  50000
                                        {"\n"}1    Bob       Male    60000
                                        {"\n"}2    Charlie   Male    70000
                                        {"\n"}

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Column Renaming</h3>
                <p>
                One or more columns in a DataFrame can be renamed using pandas' rename() function. It lets you modify column names according to a mapper function or a dictionary.
                </p>
            </div>

            <div>
                <h3 className="subHead">Renaming with a Dictionary</h3>
                <p>
                The rename() method allows us to pass a dictionary with the new column names represented by the values and the current column names represented by the keys. The old column names are designated as keys and the matching new names are designated as values when utilizing a dictionary. The DataFrame is renamed as given by the rename() method, which also returns a new DataFrame with the revised column names. We can set the inplace=True argument to change the DataFrame that is already in place.
                </p>
            </div>

            <div>
                <h3 className="subHead">Renaming with a Mapper Function</h3>
                <p>
                As an alternative, we can change the names of the current columns to new ones by using a mapping function. Every current column name should be entered into the mapper function, which should then return the required new column name. This mapper function is passed to the rename() method's mapper parameter. The mapper function is then applied to each column name via the rename() method, which then returns a new DataFrame with the modified column names. Setting inplace=True allows us to alter the DataFrame in place once more.
                </p>
                <p>
                In conclusion, you can define new names for columns in a DataFrame using the rename() method, which gives you the flexibility to do so by using a mapper function or a dictionary. This functionality can be applied to handle naming conflicts between datasets, align with conventions, and make column names more informative.  
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}      'Age': [25, 30, 35],
                                        {"\n"}      'City': ['New York', 'Los Angeles', 'Chicago']&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Rename a single column using a dictionary
                                        {"\n"}df_renamed = df.rename(columns=&#65371;'Name': 'Full Name'&#65373;)
                                        <br/>

                                        {"\n"}# Rename multiple columns using a dictionary
                                        {"\n"}df_renamed_multiple = df.rename(columns=&#65373;'Name': 'Full Name', 'Age': 'Years'&#65373;)
                                        <br/>

                                        {"\n"}# Define a mapper function to add a prefix to column names
                                        {"\n"}def add_prefix(column_name):
                                        {"\n"}return 'Person_' + column_name
                                        <br/>

                                        {"\n"}# Rename columns using a mapper function
                                        {"\n"}df_renamed_mapper = df.rename(columns=add_prefix)
                                        <br/>

                                        {"\n"}# Print the original DataFrame and the renamed DataFrames
                                        {"\n"}print("Original DataFrame:")
                                        {"\n"}print(df)
                                        {"\n"}print("\nRenamed DataFrame (Single Column):")
                                        {"\n"}print(df_renamed)
                                        {"\n"}print("\nRenamed DataFrame (Multiple Columns):")
                                        {"\n"}print(df_renamed_multiple)
                                        {"\n"}print("\nRenamed DataFrame (Mapper Function):")
                                        {"\n"}print(df_renamed_mapper)
                                        <br/>
                                        
                                        {"\n"}Original DataFrame:
                                        {"\n"}     Name      Gender  City
                                        {"\n"}0    Alice     Female  New York
                                        {"\n"}1    Bob       Male    Los Angeles
                                        {"\n"}2    Charlie   Male    Chicago
                                        {"\n"}
                                        
                                        {"\n"}Renamed DataFrame (Single Column):
                                        {"\n"}     Full Name    Age   City
                                        {"\n"}0    Alice        25    New York
                                        {"\n"}1    Bob          30    Los Angeles
                                        {"\n"}2    Charlie      35    Chicago
                                        {"\n"}

                                        {"\n"}Renamed DataFrame (Multiple Column):
                                        {"\n"}     Full Name    Years   City
                                        {"\n"}0    Alice        25      New York
                                        {"\n"}1    Bob          30      Los Angeles
                                        {"\n"}2    Charlie      35      Chicago
                                        {"\n"}

                                        {"\n"}Renamed DataFrame (Mapper Column):
                                        {"\n"}     Person_Name  Person_Age   Person_City
                                        {"\n"}0    Alice        25           New York
                                        {"\n"}1    Bob          30           Los Angeles
                                        {"\n"}2    Charlie      35           Chicago
                                        {"\n"}

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>In the above code :-</p>
                <p>
                We create a sample DataFrame ‘df’ with columns ‘Name’, ‘Age’, and ‘City’. Then we use the ‘rename()’ method to rename columns in three ways :-
                </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                        Renaming a single column ‘Name’ to ‘Full Name’.
                        </p>
                    </li>
                    <li>
                        <p>
                        Renaming multiple columns ‘Name’ to ‘Full Name’ and ‘Age’ to Years’.
                        </p>
                    </li>
                    <li>
                        <p>
                        Using a mapper function ‘add_prefix()’ to add a prefix ‘person_’ to all column names.
                        </p>
                    </li>
                </ol>
                <p>Each renamed DataFrame is printed to observe the changes.</p>
            </div>

            <div>
                <h3 className="subHead">Column Insertion</h3>
                <p>
                We can add a new column to a pandas DataFrame at a precise location inside the column structure using the insert() method. It offers a method for moving current columns to the right in order to add a new column at a desired place.
                </p>
                <div>
                    <h5 className="subHead">Specifying Position</h5>
                    <p>
                    Using the loc option, we indicate the location of the new column to be inserted. The index of the column that the new column will be inserted before defines the location. If the DataFrame has a non-integer index, the index can be a label (column name) instead of an integer that represents the column's position.
                    </p>
                </div>

                <div>
                    <h5 className="subHead">Adding Column Name and Values</h5>
                    <p>
                    Using the column argument, we supply the new column's name. Using the value argument, we set the values for the new column. A scalar, list, NumPy array, or pandas Series can be used as the values.
                    </p>
                </div>

                <div>
                    <h5 className="subHead">Shifting Existing Columns</h5>
                    <p>
                    The insert() method makes sure the new column takes up the designated space by moving the other columns to the right after inserting the new column. To make room for the new column, the columns that are already there and to its right it are moved one space to the right.
                    </p>
                </div>

                <div>
                    <h5 className="subHead">In-Place Modification</h5>
                    <p>
                    The DataFrame is not changed by default by the insert() method. Rather, a new DataFrame containing the added column is returned. We can set the inplace=True parameter to change the original DataFrame that was already there.
                    </p>

                    <p>
                    In conclusion, the insert() method provides a precise means of appending a new column to a DataFrame at a designated location, permitting regulated modification of the DataFrame's composition. It comes in very handy when we need to add a column at a certain spot while keeping the current column arrangement intact.
                    </p>

                    <p>
                    The code sample that follows shows how to enter a column in a DataFrame using the insert() function and the loc indexer. Examples of defining the position, giving the name and values of the column, and carrying out the operation in place are all included in the code.
                    </p>
                </div>

                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}from dataclasses import dataclass
                                        <br/>

                                        {"\n"}<span className="codeComment"># Create a sample DataFrame</span>
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}      'Age': [25, 30, 35]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}<span className="codeComment"># Insert a new column 'Gender' at position 1 with scalar value</span>
                                        {"\n"}df.insert(loc=1, column='Gender', value='Female')
                                        {"\n"}
                                        <br/>

                                        {"\n"}<span className="codeComment"># Insert a new column 'City' at position 2 with list of values</span>
                                        {"\n"}df.insert(loc=2, column='City', value=['New York', 'Los Angeles', 'Chicago'])
                                        <br/>

                                        {"\n"}<span className="codeComment"># Display the modified DataFrame</span>
                                        {"\n"}print(df)
                                        <br/>
                                        <br/>

                                        {"\n"}     Name      Age    City         Gender  Salary
                                        {"\n"}0    Alice     25     New York     Female  50000
                                        {"\n"}1    Bob       30     Los Angeles  Male    60000
                                        {"\n"}2    Charlie   35     Chicago      Male    70000
                                    
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>In the above code :-</p>
                <p>
                We create a sample DataFrame ‘df’ with columns ‘Name’ and ‘Age’. Then we use the ‘insert()’ method to insert two new columns, ‘Gender’, and ‘City’, at specific positions within the DataFrame.
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>The ‘Gender’ column is inserted at position 1, shifting the existing ‘Age’ column to the right.</p>
                    </li>
                    <li>
                        <p>The ‘City’ column is inserted at position 2, shifting both the ‘Age’ and ‘Gender’ columns to the right.</p>
                    </li>
                </ol>
                <p>
                The new columns are inserted with scalar and list values, respectively. Then we display the modified DataFrame to observe the changes.
                </p>
            </div>

            <div>
                <h3 className="subHead">Indexing/selection</h3>
                <p>The basics of indexing are as follows in Python.</p>
                <p>
                <b>Select column :-</b> The formula df[col], where df is the DataFrame and col is the name of the column you wish to pick, can be used in pandas to select a column from a DataFrame. The selected column's values are returned as a Series by this method.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>

                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}      'Age': [25, 30, 35],
                                        {"\n"}      'City': ['New York', 'Los Angeles', 'Chicago']&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Select the 'Name' column from the DataFrame
                                        {"\n"}name_series = df['Name']
                                        <br/>

                                        {"\n"}# Display the resulting Series
                                        {"\n"}print(name_series)
                                        <br/>
                                        <br/>

                                        {"\n"}0      Alice
                                        {"\n"}1        Bob
                                        {"\n"}2    Charlie
                                        {"\n"}Name: Name, dtype: object
                                        <br/>
                                      
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In the above code, we start with creating a sample DataFrame ‘df’ with columns ‘Name’, ‘Age’, and ‘City’. To select the ‘Name’ column from the DataFrame, we use ‘df[Name]’. this operation returns a Series containing the values of the ‘Name’ column. We assign the resulting Series to the variable ‘name_series’. Finally, we print the ‘name_series’, which displays the values of the ‘Name’ column along with its index.
                </p>
                <p>
                <b>Select row by label :-</b> To choose rows from a DataFrame based on their labels (index values), one uses the loc indexer in pandas. When we use df.loc[label], it provides a Series with the values of the row that corresponds to that label. Here, df is the DataFrame and label is the exact label we wish to choose.
                </p>
                <p>
                <b>Label-based indexing :-</b> To indicate the label of the row we wish to choose, use 'loc'. This is the most common application of 'loc'. Depending on the DataFrame's index, labels can be any hashable type, such as strings, tuples, or integers.
                </p>
                <p>
                <b>Single row selection :-</b> 'df.loc[label]' selects the row that has that particular label when we provide it with a single label. The chosen row is given back as a Series, with the Series' index matching the DataFrame's columns.
                </p>
                <p>
               <b> Series Representation :-</b> The values of the chosen row are contained in the returned Series, which is indexed by the column names. Every value in the Series corresponds to the same value in the chosen row. 
                </p>
                <p>
                <b>Error handling :-</b> A "KeyError" is raised if the supplied label is not present in the DataFrame's index. To prevent issues, we must make sure that the label we specify for selection is present in the DataFrame's index. 
                </p>
                <p>
                <b>Use with MultiIndex :-</b> To choose rows depending on the levels of the hierarchical index, we can give a tuple of labels to 'df.loc[label]' if the DataFrame has a MultiIndex (hierarchical index).
                </p>
                <p>
                To sum up, df.loc[label] offers a practical method for choosing individual rows from a DataFrame according to their labels. It facilitates simple access to and manipulation of row data in pandas by returning the values of the specified row as a Series.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        
                                        {"\n"}<span className="codeComment"># Create a sample DataFrame with custom index</span>
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}      'Age': [25, 30, 35]&#65373;
                                        {"\n"}df = pd.DataFrame(data, index=['A', 'B', 'C'])
                                        <br/>

                                        {"\n"}<span className="codeComment"># Display the original DataFrame</span>
                                        {"\n"}print("Original DataFrame:")
                                        {"\n"}print(df)
                                        {"\n"}print()
                                        <br/>

                                        {"\n"}<span className="codeComment"># Select the row with label 'B' using df.loc[label]</span>
                                        {"\n"}selected_row = df.loc['B']
                                        <br/>

                                        {"\n"}<span className="codeComment"># Display the selected row</span>
                                        {"\n"}print("Selected Row:")
                                        {"\n"}print(selected_row)
                                        <br/>
                                        
                                        {"\n"}Original DataFrame:
                                        {"\n"}    Name     Row
                                        {"\n"}A   Alice    25
                                        {"\n"}B   Bob      30
                                        {"\n"}C   Charlie  35
                                        <br/>
              
                                        {"\n"}Selected Row:
                                        {"\n"}Name    Bob
                                        {"\n"}Age      30
                                        {"\n"}Name: B, dtype: object

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In the above code :-
                </p>
                <p>
                We start by creating a sample DataFrame ‘df’ with two columns (‘Name’ and ‘Age’) and a custom index (‘A’, ‘B’, ‘C’). The original DataFrame is displayed to show its structure. We use ‘df.loc[‘B’] to select the row with the label ‘B’. The selected row, represented as a Series, is stored in the variable ‘selected_row’. Finally, we display the selected row, which contains the values of the ‘Name’ and ‘Age’ columns for the row with the label ‘B’. The index of the Series shows the column names (‘Name’ and ‘Age’).
                </p>
                <p>
                Select row by integer location - To choose rows from a DataFrame based on their integer location (position), utilize Pandas' iloc indexer. The values of the row that correspond to the specified integer location loc are returned in a Series when you use df.iloc[loc], where df is the DataFrame and loc is the exact location you wish to choose.
                </p>
                <p>
                Let’s look at the detailed explanation of how ‘df.iloc[loc]’ works:
                </p>
                <p>
                <b>Integer-Based Indexing :-</b> The main application of iloc is integer-based indexing, in which the integer location of the row we wish to select is specified. For the first row, integer positions begin at 0, and for each row after that, they increase by 1.
                </p>
                <p>
                <b>Single Row Selection :-</b> Df.iloc[loc] chooses the row at a given position when we give it a single integer location. The chosen row is given back as a Series, with the Series' index matching the DataFrame's columns.
                </p>
                <p>
                <b>Series Representation :-</b> The values of the chosen row are contained in the returned Series, which is indexed by the column names. Every value in the Series corresponds to the same value in the chosen row.
                </p>
                <p>
                <b>Error Handling :-</b> An IndexError is raised if the supplied integer position is out of bounds, meaning it is less than 0 or more than or equal to the number of rows in the DataFrame. It is imperative that the numeric location you designate for selection falls inside the permitted range of the DataFrame's row positions.
                </p>
                <p>
                To sum up, df.iloc[loc] offers a practical method for choosing individual rows from a DataFrame according to their numeric location. It facilitates simple access to and manipulation of row data in pandas by returning the values of the specified row as a Series.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        
                                        {"\n"}<span className="codeComment"># Create a sample DataFrame </span>
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}      'Age': [25, 30, 35]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}<span className="codeComment"># Display the original DataFrame</span>
                                        {"\n"}print("Original DataFrame:")
                                        {"\n"}print(df)
                                        {"\n"}print()
                                        <br/>

                                        {"\n"}<span className="codeComment"># Select the row at integer location 1 using df.iloc[loc]</span>
                                        {"\n"}selected_row = df.iloc[1]
                                        <br/>

                                        {"\n"}<span className="codeComment"># Display the selected row</span>
                                        {"\n"}print("Selected Row:")
                                        {"\n"}print(selected_row)
                                        <br/>
                                        
                                        {"\n"}Original DataFrame:
                                        {"\n"}    Name     Row
                                        {"\n"}0   Alice    25
                                        {"\n"}1   Bob      30
                                        {"\n"}2   Charlie  35
                                        <br/>
              
                                        {"\n"}Selected Row:
                                        {"\n"}Name    Bob
                                        {"\n"}Age      30
                                        {"\n"}Name: 1, dtype: object

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In the above code: Importing the pandas library and building a sample DataFrame called df are our first steps. A dictionary of data is used to generate the DataFrame df, with each key denoting a column name (such as "Name" and "Age") and the corresponding values being lists with the information for each column. To see the contents of the original DataFrame, we use print(df) to display it. We use df.iloc[1] to pick a particular row from the DataFrame based on its integer location. In this case, iloc[1] specifies that the row at integer location 1 (i.e., the second row in 0-based indexing) should be chosen. The variable selected_row contains the selected row. Lastly, print(selected_row) is used to show the chosen row so that the numbers may be seen.
                </p>
                <p>
                <b>Slice rows :-</b> Pandas uses square brackets ([]) with a range of row indices to slice rows from a DataFrame. A new DataFrame with those rows is created when you use df[5:10], where df is the DataFrame. It chooses data from index 5 up to (but not including) index 10.
                </p>
                <p>
                <b>Slice Operation :-</b> We wish to choose a subset of rows from the DataFrame df, as indicated by the notation df[5:10]. The row indices that will be included in the slice are represented by the range (5:10) that is given.
                </p>
                <p>
                <b>Boundaries :-</b> In Python slicing, the row at index 5 will be included in the slice since the start index (5 in this case) is inclusive. The row at index 10 won't be included in the slice, though, because the end index (10 in this example) is exclusive.
                </p>
                <p>
                <b>Fresh DataFrame  :-</b> A new DataFrame with the rows from the original DataFrame df with indices ranging from 5 to (but not including) 10 is the outcome of the slice operation df[5:10]. This new DataFrame retains the same column structure as the original DataFrame.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        
                                        {"\n"}<span className="codeComment"># Create a sample DataFrame </span>
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah', 'Ian', 'Jack'],
                                        {"\n"}      'Age': [25, 30, 35, 40, 45, 50, 55, 60, 65, 70]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}<span className="codeComment"># Display the original DataFrame</span>
                                        {"\n"}print("Original DataFrame:")
                                        {"\n"}print(df)
                                        {"\n"}print()
                                        <br/>

                                        {"\n"}<span className="codeComment"># Slice rows from index 5 to (but not including) index 10</span>
                                        {"\n"}sliced_df = df[5:10]
                                        <br/>

                                        {"\n"}<span className="codeComment"># Display the sliced DataFrame</span>
                                        {"\n"}print("Sliced DataFrame (rows 5 to 9):")
                                        {"\n"}print(sliced_df)
                                        <br/>
                                        
                                        {"\n"}Original DataFrame:
                                        {"\n"}    Name     Row
                                        {"\n"}0   Alice    25
                                        {"\n"}1   Bob      30
                                        {"\n"}2   Charlie  35
                                        {"\n"}3   David    40
                                        {"\n"}4   Eve      45
                                        {"\n"}5   Frank    50
                                        {"\n"}6   Grace    55
                                        {"\n"}7   Hannah   60
                                        {"\n"}2   Ian      65
                                        {"\n"}2   Jack     70
                                        <br/>
              
                                        {"\n"}Selected Row:
                                        {"\n"}      Name    Age
                                        {"\n"}5   Frank   50
                                        {"\n"}6   Grace   55
                                        {"\n"}7  Hannah   60
                                        {"\n"}8     Ian   65
                                        {"\n"}9    Jack   70
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code sample shows how to use Python's slicing syntax to slice rows from a DataFrame [5:10]. Here is an explanation:
                </p>
                <p>
                We need to Establish a DataFrame Using dictionary data, we first create a sample DataFrame called df. It has two columns with matching lists of values, "Name" and "Age." Seeing the Original DataFrame To view its contents, we print the original DataFrame df using print(df). Cutting Rows: From the DataFrame df, the slicing operation df[5:10] finds entries from index 5 up to (but excluding) index 10. In other words, rows with indices 5, 6, 7, 8, and 9 are selected. Making a Sliced DataFrame: A new DataFrame called sliced_df is created and contains the selected rows. Finding and displaying the selected rows in a sliced DataFrame: To view the sliced DataFrame, print(sliced_df)
                </p>
                <p>
                The original DataFrame df and the sliced DataFrame sliced_df, which includes rows 5 through 9 (inclusive) from the original DataFrame, will be displayed in the code's output.
                </p>
                <p>
                To sum up, we can extract a particular range of rows from a DataFrame by using the slicing notation [5:10] and their integer indices. This is a quick and effective method for subsetting DataFrame rows in pandas.
                </p>
                <p>
                Select rows by Boolean vector: In pandas, a boolean expression is used to filter rows when choosing rows from a DataFrame based on a boolean vector. It picks only those rows where the corresponding value in the boolean vector is True when you use df[bool_vec], where df is the DataFrame and bool_vec is a boolean vector (a Series or list of boolean values). This creates a new DataFrame with the filtered rows.
                </p>
                <p>
                The operation of df[bool_vec] is explained as follows :-
                </p>
                <p>
                <b>Boolean Vector :-</b> The bool_vec vector is made up of True or False values that are associated with every row in the DataFrame. If the condition is False, the row should be excluded; if it is True, the row should be chosen.
                </p>
                <p>
                <b>Row Filtering :-</b> The DataFrame's rows are filtered using the expression df[bool_vec], which is based on the boolean vector bool_vec. The resulting DataFrame only contains rows for which the appropriate value in bool_vec is True.
                </p>
                <p>
                How to Make a Subset A subset of the rows from the original DataFrame are included in the resulting DataFrame; these rows are limited to those rows where the appropriate value in the boolean vector is True. The new DataFrame's column structure is identical to the original DataFrame's.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>

                                        {"\n"}<span className="codeComment"># Create a sample DataFrame</span>
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
                                        {"\n"}      'Age': [25, 30, 35, 40, 45],
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}<span className="codeComment"># Define a boolean vector to filter rows</span>
                                        {"\n"}bool_vec = [True, False, True, False, True]
                                        <br/>

                                        {"\n"}<span className="codeComment"># Select rows from the DataFrame based on the boolean vector</span>
                                        {"\n"}filtered_df = df[bool_vec]
                                        <br/>
                                        <br/>

                                        {"\n"}    Name     Age
                                        {"\n"}0   Alice    25
                                        {"\n"}2   Charlie  35
                                        {"\n"}4   Eve      45
                                        <br/>
                                      
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this instance: We build a DataFrame df with two columns that hold the information about five people: "Name" and "Age." The definition of bool_vec is a boolean vector in which rows to be picked ([True, False, True, False, True]) are indicated by True values. We use df[bool_vec] to filter the DataFrame's rows according to the boolean vector. Only the rows in which the appropriate value in bool_vec is True are included in the resulting DataFrame filtered_df. In order to view the chosen rows, we output the filtered DataFrame at the end.
                </p>
            </div>

            <div>
                <h3 className="subHead">Transposing</h3>
                <p>
                A DataFrame can be transposed in pandas by changing its rows to columns and vice versa. With this action, the DataFrame's axes are switched, changing its orientation from row-to column-oriented. There exist two typical methods for transposing a DataFrame :-
                </p>
                <p>
                <b>Accessing the T Attribute :-</b> Transpose, or T, is an attribute of a DataFrame. You can flip the rows and columns of the DataFrame by gaining access to this attribute (df.T). In the new DataFrame that is returned, the rows are converted to columns and vice versa. This procedure produces a transposed image of the original DataFrame rather than altering it.
                </p>
                <p>
                <b>Using the transpose() Method :-</b> The identical transposition process may also be carried out using DataFrame's transpose() method. This function (df.transpose()) can be called on a DataFrame to do the same thing as accessing the T attribute. The transpose() method returns a new transposed DataFrame without changing the original, similar to accessing the T attribute.
                </p>
                <p>
                The functionality and outcomes of both approaches are the same. They give you options for transposing your DataFrame, so you may select the one that's more user-friendly or convenient for you.
                </p>
                <p>
                Let’s look at the code to transpose a DataFrame :-
                </p>
                <p>Transposed_df = df.T
                    <br/>
                    OR
                    <br/>
                    Transposed_df = df.transpose()
                </p>
                <p>
                Transposed_df is a new DataFrame in which the rows of df are now columns and vice versa in both scenarios. When working with data that is more organically expressed in a transposed format, like when comparing various attributes over numerous observations, this technique is especially helpful.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        
                                        {"\n"}# Create a sample DataFrame with custom index
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}      'Age': [25, 30, 35]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Method 1: Accessing the T attribute
                                        {"\n"}transposed_df_1 = df.T
                                        <br/>

                                        {"\n"}# Method 2: Using the transpose() method
                                        {"\n"}transposed_df_2 = df.transpose()
                                        <br/>

                                        {"\n"}# Display the original and transposed DataFrames
                                        {"\n"}print("Original DataFrame:")
                                        {"\n"}print(selected_row)
                                        {"\n"}print(df)
                                        {"\n"}print("\nTransposed DataFrame (Method 1):")
                                        {"\n"}print("\nTransposed print(transposed_df_1)){"\n"}DataFrame ((Method 2):") 
                                        {"\n"}print(transposed_df_2)                    <br/>
                                        
                                        {"\n"}Original DataFrame:
                                        {"\n"}    Name     Row
                                        {"\n"}A   Alice    25
                                        {"\n"}B   Bob      30
                                        {"\n"}C   Charlie  35
                                        <br/>
              
                                        {"\n"}Transposed DataFrame (Method 1):
                                        {"\n"}        0    1          2
                                        {"\n"}Name  Alice  Bob  Charlie
                                        {"\n"}Age    25    30       35
                                        <br/>

                                        {"\n"}Transposed DataFrame (Method 2):  
                                        {"\n"}        0    1        2
                                        {"\n"}Name  Alice  Bob  Charlie
                                        {"\n"}Age    25    30     35

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                The same transposed DataFrame, with the original DataFrame's rows now being columns and vice versa, is produced using both techniques. As you can see, the names and ages have been switched around to fit the new orientation of the axes.
                </p>
            </div>

            <div>
                <h3 className="subHead">DataFrame interoperability with NumPy functions</h3>
                <p>
                The term "dataframe interoperability with NumPy functions" describes the capacity to combine pandas DataFrames with operations and functions offered by the NumPy library in a smooth and seamless manner. Because pandas is built on top of NumPy, pandas data structures, such as DataFrames, may effectively interact with NumPy arrays and leverage NumPy's vast array of mathematical and array manipulation methods, enabling this compatibility.
                </p>
                <p>
                This is a thorough explanation of how NumPy functions and DataFrame interoperability operate together :-
                </p>
                <p>
                <b>Data Conversion :-</b> Pandas automatically converts DataFrame objects into NumPy arrays behind the scenes when working with DataFrames and NumPy methods. NumPy functions can now function on DataFrame data as though they were NumPy arrays thanks to this conversion.
                </p>
                <p>
                <b>Effective Computations :-</b> Pandas can benefit from the efficient numerical computations made possible by NumPy routines, which are optimized for DataFrame interoperability. NumPy routines can be used to perform operations on DataFrame data, guaranteeing quick and efficient computations—especially for sizable datasets.
                </p>
                <p>
                <b>Integration with NumPy Methods :-</b> DataFrame objects can be directly applied to a number of NumPy methods, including mathematical functions (like np.sum, np.mean) and functions for manipulating arrays (like np.reshape, np.concatenate). These techniques offer strong tools for data modification and analysis, operating element-wise on DataFrame values or across DataFrame axes.
                </p>
                <p>
                <b>Broadcasting :-</b> When executing operations between pandas DataFrames and NumPy arrays, NumPy's broadcasting principles come into play. This implies that functions utilizing DataFrames and variously shaped arrays are efficiently and automatically aligned in accordance with NumPy's broadcasting guidelines.
                </p>
                <p>
                <b>Enhanced Functionality :-</b> Data analysis and manipulation capabilities are expanded when DataFrame functions are compatible with NumPy functions. It enables users to easily utilize the extensive ecosystem of NumPy capabilities within the pandas environment, including statistical functions, operations in linear algebra, and more.
                </p>
                <p>
                Overall, pandas' capabilities for data analysis and scientific computing are improved by DataFrame compatibility with NumPy operations. It makes it possible to manipulate data effectively and adaptably by combining the advantages of NumPy and pandas to carry out intricate operations on structured datasets.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        
                                        {"\n"}# Create a sample DataFrame 
                                        {"\n"}data = &#65371;'A': [1, 2, 3],
                                        {"\n"}         'B': [4, 5, 6],
                                        {"\n"}         'C': [7, 8, 9]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Apply a NumPy function (e.g., square root) to DataFrame values
                                        {"\n"}sqrt_df = np.sqrt(df)
                                        {"\n"}ex_df = np.exp(df)
                                        {"\n"}array_df = np.asarray(df)
                                        <br/>

                                        {"\n"}# Display the original DataFrame and the result of applying the NumPy function
                                        {"\n"}print("Original DataFrame:")
                                        {"\n"}print(df)
                                        {"\n"}print("\nDataFrame after applying NumPy sqrt function:")
                                        {"\n"}print(sqrt_df)
                                        {"\n"}print("\nExponential of dataframe:")
                                        {"\n"}print(ex_df){"\n"}print("\nDataFrame as array:") 
                                        {"\n"}print(array_df)        <br/>
                                        
                                        {"\n"}Original DataFrame:
                                        {"\n"}   A  B  C
                                        {"\n"}0  1  4  7
                                        {"\n"}1  2  5  8
                                        {"\n"}2  3  6  9
                                        <br/>
              
                                        {"\n"}DataFrame after applying NumPy sqrt function:
                                        {"\n"}      A         B         C
                                        {"\n"}0  1.000000  2.000000  2.645751
                                        {"\n"}1  1.414214  2.236068  2.828427
                                        {"\n"}2  1.732051  2.449490  3.000000
                                        <br/>

                                        {"\n"}Exponential of dataframe:
                                        {"\n"}      A           B            C
                                        {"\n"}0   2.718282   54.598150  1096.633158
                                        {"\n"}1   7.389056  148.413159  2980.957987
                                        {"\n"}2  20.085537  403.428793  8103.083928
                                        <br/>

                                        {"\n"}DataFrame as array:
                                        {"\n"}[[1 4 7]
                                        {"\n"} [2 5 8]
                                        {"\n"} [3 6 9]]
                                

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Accessing Files</h3>
                <p>
                Reading data from external files—such as CSV (comma-separated values), Excel spreadsheets, SQL databases, JSON files, and more—is a common step in the file access process in pandas. Using particular functions offered by the library, users can browse files in pandas and load data into pandas data structures like DataFrames or Series.
                </p>
                <p>An overview of file access in pandas is provided here :-</p>
                <p>
                Select the Type of File: Choose the file type that we wish to open. Among the many file types that pandas support are CSV, Excel, SQL, JSON, HTML, HDF5, Parquet, and more. Different functions may be used to read different kinds of files.
                </p>
                <p>
                <b>Utilize File Reading Functions :-</b> Pandas offers several functions for reading various file formats. Typical ones are as follows:
                </p>
                <p>
                We use pd.read_csv() to load data into a DataFrame from a CSV file.
                <br/>
                We use pd.read_excel() to load data into a DataFrame from an Excel file.
                <br/>
                pd.read_sql(): Reads information into a DataFrame from a SQL database.
                <br/>
                We use pd.read_json() to load data into a DataFrame from a JSON file.
                <br/>
                Read data from HTML tables into a collection of DataFrames using the pd.read_html() method.
                <br/>
                We use pd.read_hdf() to load data into a DataFrame from HDF5 files.
                </p>
                <p>
                <b>pd.read_parquet() :-</b> Read information into a DataFrame from Parquet files, among other things.
                </p>
                <p>
                <b>Specify File Path or URL :-</b> Pass the file path or URL to the file reading function as an argument. This could be a URL linking to the file location (like "https://example.com/data.csv") or a local file path (like "data.csv").
                </p>
                <p>
                <b>Modify settings :-</b> To personalize the import procedure, we have the option to modify a number of the file reading function's settings. Depending on the particular needs of our data, we can choose delimiter characters, column names, data kinds, encoding, header rows, skipping rows, and more.
                </p>
                <p>
                    <b>Put Data into a Variable :-</b> Put the DataFrame (or any pandas data structure) that was returned into a variable. The data loaded from the file will be stored in this variable so we can work with and examine it with pandas functions and methods.
                </p>
                <p>
                <b>Explore and Analyze Data :-</b> After the data has been loaded into a pandas data structure, we can use a variety of pandas functions and methods, including groupby(), plot(), head(), info(), description(), and many more, to explore and analyze the data.
                </p>
                <p>
                In conclusion, using pandas to access files entails choosing the proper file reading function, providing the file path or URL, modifying the parameters as needed, and assigning the returned data to a variable for additional pandas manipulation and analysis.
                </p>
                <p>
                <b>pd.read_csv() :-</b> A pandas function called pd.read_csv() is used to read data into a DataFrame from a CSV (Comma Separated Values) file. Its main argument is the file location or URL of the CSV file. To personalize the import procedure, optional options can be entered. These include the delimiter, column names, index, data types, and how to handle missing entries. The CSV file's data is returned by the function as a DataFrame, which may further be examined and examined using pandas functions and methods. All things considered, pd.read_csv() offers an easy and adaptable method for importing tabular data in CSV format into Python for additional analysis.
                </p>
                <p>
                <b>pd.read_excel() :-</b> Data from Excel files can be read and loaded into a DataFrame using the pandas function pd.read_excel(). Its main argument is the file path or URL of the Excel file. To personalize the import procedure, optional parameters can be entered. These include the sheet or sheets to be read, column names to be defined, index to be set, data types to be specified, and how to handle missing values. The function provides a DataFrame with the information from the designated sheet(s) of the Excel file. Pandas functions and methods can then be used to explore and analyze the DataFrame. The sheet_name argument allows us to specify which sheet or sheets to read if the Excel file has more than one. Overall, pd.read_excel() provides a convenient and efficient way to import tabular data stored in Excel spreadsheets into Python for further analysis and manipulation.
                </p>
                <p>
                <b>pd.read_sql() :-</b> A pandas function called pd.read_sql() is used to read data into a DataFrame from SQL databases. Through the execution of a SQL query and the straight fetching of the result set into a pandas DataFrame, it facilitates seamless connection with databases. The function's input parameters are a SQL query text and a database connection object or engine. To personalize the import procedure, optional parameters can be provided. These include data types, definitions of index columns, and parameters for SQL query placeholders. Pandas functions and methods can be used to explore, analyze, and work with data once it has been fetched into a DataFrame. In Python, pd.read_sql() is very helpful for activities involving data analysis and visualization as well as the extraction of structured data from databases.
                </p>
                <p>
                <b>Pd.read_json() :-</b> pd.read_json() is a pandas function used to read data from JSON (JavaScript Object Notation) files into a DataFrame. It facilitates the import of JSON data into Python for analysis and manipulation. The function accepts the file path or URL of the JSON file as its primary argument and converts the JSON data into a pandas DataFrame. Optional parameters can be specified to customize the import process, such as orienting the JSON structure, specifying the data types of columns, and handling missing values. Once the JSON data is loaded into a DataFrame, it can be further explored, analyzed, and processed using pandas methods and functions. pd.read_json() is valuable for working with JSON-formatted data, which is commonly used for storing structured data in various applications and web services.
                </p>
                <p>
                <b>pd.read_html() :-</b> Tables can be extracted from HTML web pages and converted into pandas DataFrames using the pandas method pd.read_html(). By automatically recognizing and parsing HTML tables, it makes online scraping easier and makes it simple for users to import tabular data from websites into Python. The function takes a list of DataFrame objects as input, each of which represents a table on the web page; it accepts a URL or HTML content. To personalize the import procedure, optional parameters can be entered, like the table index or header rows. For the purpose of analysis and visualization, pd.read_html() is very helpful in extracting structured data from online pages. This allows web data to be easily integrated into Python data analytic workflows.
                </p>
                <p>
                <b>pd.read_hdf() :–</b> A pandas function called pd.read_hdf() is used to read data into a DataFrame from HDF5 (hierarchical data format version 5) files. A flexible file format that's frequently used to store big, intricate datasets is HDF5. Users may quickly load HDF5 data into Python for analysis and manipulation with the help of pd.read_hdf(). The function takes as its main input the file path of the HDF5 file and produces a DataFrame with the data contained in the file. To personalize the import procedure, optional parameters can be used. These include defining the data types of the columns, handling missing values, and indicating where the data should be located inside the HDF5 file. With the help of pd.read_hdf(), working with HDF5 files is made straightforward, allowing processes for Python data analysis to include complex datasets.
                </p>
                <p>
                <b>pd.read_parquet() :-</b> A pandas function called pd.read_parquet() is used to read data from Parquet files into a DataFrame. Parquet is a columnar file format designed to handle enormous datasets effectively since it is geared for big data processing. Users can import Parquet data into Python for analysis and manipulation with ease using pd.read_parquet(). The function returns a DataFrame with the data contained in the file and accepts the file path of the Parquet file as its primary parameter. To alter the import procedure, optional parameters can be added. These include handling data types, filtering rows, and defining which columns to read. The pd.read_parquet() function facilitates the easy handling of Parquet files, allowing columnar data to be seamlessly integrated into Python data analysis workflows.
                </p>
                <p>
                Here is the code for all the above method to access their respective files :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}from sqlalchemy import create_engine
                                        <br/>
                                        
                                        {"\n"}df = pd.read_csv("filepath")      # for csv file 
                                        {"\n"}df = pd.read_excel("filepath")        # for excel file 
                                        {"\n"}df = pd.read_json("filepath")     # for json file 
                                        {"\n"}df = pd.read_hdf("filepath")      # for hdf file 
                                        {"\n"}df = pd.read_parquet("filepath")      # for parquet file       
                                        <br/>

                                        {"\n"}engine = create_engine('sqlite:///mydatabase.db')     # for sql file 
                                        {"\n"}df = pd.read_sql("SELECT * FROM mytable", engine)
                                        <br/>

                                        {"\n"}dfs = pd.read_html("url")         # for html file    
                                        {"\n"}df = dfs[0]       # Assuming the first table is of interest 
                                        
                                        
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Viewing data</h3>
                <p>
                The top and bottom rows of a DataFrame can be viewed using pandas' head() and tail() functions, respectively.
                </p>
                <p>
                <b>head() :-</b> When n is given as an argument (n=5, by default), the head() method retrieves the first n rows of the DataFrame. This technique is helpful for rapidly looking through the DataFrame's contents and structure, especially when working with big datasets. It assists users in gaining an overview of the data and comprehending column names, values recorded in each column, and the general structure of the data. For example, retrieving the first 10 rows of the DataFrame df would result from executing df.head(10). Head() returns the first 5 rows by default if no parameter is given.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
                                        {"\n"}         'Age': [25, 30, 35, 40, 45]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# View the top 3 rows of the DataFrame
                                        {"\n"}print(df.head(3))
                                        <br/>
                                        <br/>
                                        
                                        {"\n"}     Name      Age
                                        {"\n"}0    Alice     25     
                                        {"\n"}1    Bob       30     
                                        {"\n"}2    Charlie   35     
                                        {"\n"}

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                <b>tail() :-</b> In contrast, the tail() method takes an argument, n, which by default equals 5, and returns the final n rows of the DataFrame. When examining the final few rows of the DataFrame, it is especially helpful for seeing patterns or trends that may be present as the dataset comes to a close. Tail(), like head(), facilitates users' rapid inspection of the DataFrame's bottom rows and comprehension of the data's conclusion. Calling df.tail(8), for example, would yield the DataFrame df's final 8 rows.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
                                        {"\n"}         'Age': [25, 30, 35, 40, 45]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# View the top 3 rows of the DataFrame
                                        {"\n"}print(df.tail(3))
                                        <br/>
                                        <br/>
                                        
                                        {"\n"}     Name      Age
                                        {"\n"}0    David     40     
                                        {"\n"}1    Eve       45     
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In conclusion, head() and tail() are crucial pandas functions that allow you to rapidly examine the start and finish of a DataFrame, respectively. They are frequently utilized for comprehension and data exploration.
                </p>
                <p>
                The pandas attributes DataFrame.index and DataFrame.columns give details about a DataFrame's row and column labels, respectively.
                </p>
                <p>
                <b>DataFrame index :-</b> The row labels of the DataFrame are represented by an Index object, which is returned by the DataFrame.index attribute. The labels for each row are contained in this Index object, which can be used to retrieve or change specific DataFrame rows. When recognizing rows and carrying out activities based on row labels, it is especially helpful. For example, the DataFrame df's row labels are returned by df.index.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
                                        {"\n"}         'Age': [25, 30, 35, 40, 45]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# View the top 3 rows of the DataFrame
                                        {"\n"}print(df.index)
                                        {"\n"}
                                        {"\n"}RangeIndex(start=0, stop=3, step=1)
                                        <br/>   
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This shows that the default index of the DataFrame df has a step size of 1 and starts at 0 and ends at 3 (exclusive). Put otherwise, a RangeIndex object—a unique kind of index used for integer-based indexing—represents the row labels. An integer index number, which starts at 0 and increases by 1 for each additional row, is assigned to each row.
                </p>
                <p>
                <b>DataFrame columns :-</b> In a similar vein, the DataFrame.columns attribute yields an Index object that represents the DataFrame's column labels. The labels for each column are contained in this Index object, which can be used to retrieve or change specific DataFrame columns. It helps with column identification and operation based on column labels. For example, the DataFrame df's column labels are returned by df.columns.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
                                        {"\n"}         'Age': [25, 30, 35, 40, 45]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# View the column labels of the DataFrame
                                        {"\n"}print(df.columns)
                                        {"\n"}
                                        {"\n"}Index(['Name', 'Age'], dtype='object')
                                        <br/>   
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This shows that the 'Name' and 'Age' columns of the DataFrame df have labels. The dtype='object' indicates that the elements in the index have an object data type, which is commonly used for strings. As a result, an Index object containing the names of the columns in the DataFrame serves as a representation for the column labels.
                </p>
                <p>
                In conclusion, users can modify a DataFrame based on its row and column labels by gaining access to DataFrame.index and DataFrame.columns, respectively.
                </p>
                <p>
                <b>describe() :-</b> Pandas' describe() method gives concise statistical summary measures for numerical columns in a DataFrame, revealing information about the distribution, dispersion, and central tendency of the data. It provides counts, means, standard deviations, minimums, maximums, and percentiles (25th, 50th, and 75th) for every numerical column to help quickly grasp the general features of the dataset. In order to rapidly evaluate the range and variability of values within the dataset, spot possible outliers, and get a basic grasp of the data distribution, this method is very helpful during exploratory data analysis (EDA). 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}         'Age': [25, 30, 35],
                                        {"\n"}         'Salary': [50000, 60000, 70000]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Generate descriptive statistics for numerical columns
                                        {"\n"}print(df.describe())
                                        <br/> 

                                        {"\n"}        Age   Salary
                                        {"\n"}count   3.0   3.0
                                        {"\n"}mean    30.0  60000.0
                                        {"\n"}std     5.0   10000.0
                                        {"\n"}min     25.0  50000.0
                                        {"\n"}25%     27.5  55000.0
                                        {"\n"}50%     30.0  60000.0
                                        {"\n"}75%     32.5  65000.0
                                        {"\n"}max     35.0  70000.0 
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                When this code is run, the DataFrame df's numerical columns ('Age' and 'Salary') will show statistical summary measures that provide a brief summary of their distribution and attributes.
                </p>
                <p>
                <b>DataFrame.sort_index() :-</b> The DataFrame can be sorted along the designated axis by its index labels using the pandas sort_index() function. Depending on the settings, it can arrange the DataFrame's rows in either descending or ascending order based on the index labels. This method sorts the DataFrame by default along the row index (axis=0), but if necessary, it can also be used to sort along the column index (axis=1). By arranging the rows of the DataFrame in a certain order according to the index labels, this function helps users find and access particular rows with ease and do further analysis on the sorted data.
                </p>
                <p>Let’s look at the code :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}         'Age': [25, 30, 35],
                                        {"\n"}df = pd.DataFrame(data, index=[2, 1, 0])
                                        <br/>

                                        {"\n"}# Sort the DataFrame by index labels
                                        {"\n"}sorted_df = df.sort_index()
                                        <br/> 

                                        {"\n"}# Display the sorted DataFrame
                                        {"\n"}print(sorted_df)
                                        <br/> 

                                        {"\n"}     Name     Age
                                        {"\n"}0    Charlie  35
                                        {"\n"}1    Bob      30
                                        {"\n"}2    Alice    25

                                         
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code snippet sorts the rows of the DataFrame df in ascending order according to the index labels by applying the sort_index() function to it. The rows sorted by their index labels will be shown in the DataFrame sorted_df that is produced.
                </p>
                <p>
                <b>DataFrame.sort_values() :-</b> Users can sort the DataFrame by the values in one or more columns using the pandas sort_values() function. It makes data exploration and analysis easier by allowing DataFrame rows to be arranged in either ascending or descending order according to the specified column values. This method groups the data based on predetermined criteria, which makes it very helpful for finding patterns, trends, or outliers within the dataset. It also allows for the sorting of several columns, giving you the ability to adjust the sorting behavior to meet different analytical needs.
                </p>
                <p>Let’s see an code example for this:</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}         'Age': [25, 30, 35],
                                        {"\n"}df = pd.DataFrame(data, index=[2, 1, 0])
                                        <br/>

                                        {"\n"}# Sort the DataFrame by 'Age' column in ascending order
                                        {"\n"}sorted_df = df.sort_values(by='Age')
                                        <br/> 

                                        {"\n"}# Display the sorted DataFrame
                                        {"\n"}print(sorted_df)
                                        <br/> 

                                        {"\n"}     Name     Age
                                        {"\n"}1    Bob      30
                                        {"\n"}0    Charlie  35
                                        {"\n"}2    Alice    25

                                         
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this code example, the DataFrame df is sorted according to the values in the 'Age' column in ascending order by using the sort_values() function to it. The rows sorted by their 'Age' values will be shown in the DataFrame sorted_df that is produced.
                </p>
                <p>
              <b>  DataFrame.at() :-</b> The at() function in pandas provides a fast and efficient way to access a single value in a DataFrame using label-based indexing. It is designed for accessing scalar values by row and column labels and is particularly useful for retrieving specific elements when dealing with large datasets. This method offers superior performance compared to other access methods like loc[] and iloc[] when only a single value needs to be retrieved. By providing the row and column labels as arguments, at() returns the value located at the specified row and column intersection.
                </p>
                <p>Let’s look at the code :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}         'Age': [25, 30, 35],
                                        {"\n"}df = pd.DataFrame(data, index=['A', 'B', 'C'])
                                        <br/>

                                        {"\n"}# Access a single value in the DataFrame using row and column labels
                                        {"\n"}value = df.at['B', 'Age']
                                        <br/> 

                                        {"\n"}# Display the retrieved value
                                        {"\n"}print(value)
                                        <br/> 
                                        <br/>

                                        {"\n"}30
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this code snippet, at() is used to access the value located at row 'B' and column 'Age' in the DataFrame df. The retrieved value will be printed to the console.
                </p>
                <p>
                <p>DataFrame.iat() :-</p> Similar to the at() method in pandas, the iat() function offers integer-based indexing as an alternative to label-based indexing. It provides a quick and effective method for leveraging integer row and column coordinates to retrieve a single value in a DataFrame. When working with huge datasets, this function is especially helpful for extracting specific elements. It requires as parameters the integer positions of the rows and columns. Iat() returns the value at the designated DataFrame intersection when the row and column coordinates are given.
                </p>
                <p>Let’s look at the code :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}         'Age': [25, 30, 35],
                                        {"\n"}df = pd.DataFrame(data, index=['A', 'B', 'C'])
                                        <br/>

                                        {"\n"}# Access a single value in the DataFrame using integer row and column positions
                                        {"\n"}value = df.at[1, 1]
                                        <br/> 

                                        {"\n"}# Display the retrieved value
                                        {"\n"}print(value)
                                        <br/> 
                                        <br/>

                                        {"\n"}30
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this code snippet, iat() is used to access the value located at the second row and second column (index positions 1, 1) in the DataFrame df. The retrieved value will be printed to the console.
                </p>
            </div>

            <div>
                <h3 className="subHead">Boolean indexing</h3>
                <p>
                In pandas, boolean indexing is a method for filtering data in a DataFrame according to predefined criteria. It entails building arrays of boolean values called boolean masks, which indicate whether or not each element in the DataFrame satisfies a particular criterion. The rows or columns from the DataFrame where the relevant boolean value is True are then chosen using these boolean masks. With this method, users can extract subsets of data that satisfy particular criteria exactly and flexibly. For data filtering, querying, and conditional operations on DataFrame items, boolean indexing is especially helpful.
                </p>
                <p>Let’s look at the code:</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David'],
                                        {"\n"}         'Age': [25, 30, 35, 40],
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Create a boolean mask to filter rows where Age is greater than 30
                                        {"\n"}mask = df['Age'] &gt; 30
                                        <br/> 

                                        {"\n"}# Use the boolean mask to select rows from the DataFrame
                                        {"\n"}filtered_df = df[mask]
                                        <br/> 

                                        {"\n"}# Display the filtered DataFrame
                                        {"\n"}print(filtered_df)
                                        <br/> 

                                        {"\n"}     Name     Age
                                        {"\n"}2    Charlie  35
                                        {"\n"}3    David    40

                                         
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code snippet creates a boolean mask to filter DataFrame df rows where the values in the 'Age' column exceed 30. After that, the DataFrame is filtered to only include the rows that meet the given criterion by applying the boolean mask using boolean indexing.
                </p>
                <p>
                <b>isin() :-</b> A handy way to filter data in a DataFrame based on whether values in a certain column match any values in a list or array is to use pandas' isin() function. It gives back a boolean mask that indicates which elements in the given column are present in the list of values. This function is especially helpful for filtering rows of DataFrames according to a predetermined set of values or several conditions. Through the use of a list of values passed to the isin() function, users can quickly identify rows that satisfy particular requirements, like falling under a certain category or hitting a threshold.
                </p>
                <p>Let’s look at the code:</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie', 'David'],
                                        {"\n"}         'Age': [25, 30, 35, 40],
                                        {"\n"}         'City': ['New York', 'Los Angeles', 'Chicago', 'Houston']
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Define a list of cities to filter
                                        {"\n"}cities_to_filter = ['New York', 'Chicago']
                                        <br/> 

                                        {"\n"}# Use isin() to filter rows where the 'City' column values match any value in the list
                                        {"\n"}filtered_df = df[df['City'].isin(cities_to_filter)]
                                        <br/> 

                                        {"\n"}# Display the filtered DataFrame
                                        {"\n"}print(filtered_df)
                                        <br/> 

                                        {"\n"}     Name     Age     City
                                        {"\n"}0    Alice    25      New York
                                        {"\n"}2    Charlie  35      Chicago                                      
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                The isin() function is used in this code snippet to filter rows from the DataFrame df where the values in the 'City' column match any value in the cities_to_filter list. Only the rows in the DataFrame filtered_df that result have the values "New York" or "Chicago" in the "City" column.
                </p>
            </div>

            <div>
                <h3 className="subHead">Setting</h3>
                <p>
                In pandas, "setting" is the act of changing values inside a DataFrame or Series. It permits users to alter particular rows, columns, or other dataset components, facilitating data transformation and manipulation. Setting can include expanding the DataFrame's rows and columns or giving already-existing items new values. Pandas offers a number of functions and methods for setting data in addition to direct assignment of values. These include loc[], iloc[], and at[], which give flexibility in accessing and updating data based on label or location. Setting up pandas is a crucial step in workflows for data analysis and preparation since it enables users to clean, convert, and alter the dataset as needed.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}         'Age': [25, 30, 35],
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Modify values using direct assignment
                                        {"\n"}df.at[1, 'Age'] = 32
                                        <br/> 

                                        {"\n"}# Add a new column with default values
                                        {"\n"}df['City'] = 'New York'
                                        <br/> 

                                        {"\n"}# Display the modified DataFrame
                                        {"\n"}print(df)
                                        <br/> 

                                        {"\n"}     Name     Age     City
                                        {"\n"}0    Alice    25      New York
                                        {"\n"}1    Bob      32      New York
                                        {"\n"}2    Charlie  35      New York                                      
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                The code snippet updates the values in the 'Age' column using at[] and adds a new column 'City' with default values using direct assignment. Setting operations are applied to the DataFrame df. The changes made to the dataset are reflected in the DataFrame that is produced.
                </p>
                <p>
                where - Pandas' where() function is a tool for replacing and conditionally filtering values in a DataFrame or Series. It lets users set a criterion and then substitute a filler value for values that don't match the criteria. When replacing or filtering out elements according to certain criteria without changing the original layout of the data structure, this function can be especially helpful. When values in the where() method do not meet the criterion, they are replaced with either the supplied filler value or NaN (by default), returning a new DataFrame or Series with the same shape as the original.
                </p>
                <p>
                Let’s write a code for this:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'A': [1, 2, 3],
                                        {"\n"}         'B': [4, 5, 6]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Apply where() to replace values in 'A' column where condition is not met
                                        {"\n"}filtered_df = df.where(df['A'] &gt; 1, other=-1)
                                        <br/> 

                                        {"\n"}# Display the resulting DataFrame
                                        {"\n"}print(filtered_df)
                                        <br/> 

                                        {"\n"}    A   B
                                        {"\n"}0  -1  -1
                                        {"\n"}1   2   5
                                        {"\n"}2   3   6                            
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code snippet replaces values in the DataFrame df's 'A' column when the criterion 'A > 1' is not met by using the where() function. For rows if the condition is true, the original values are retained; otherwise, -1 is used to represent values that do not satisfy the requirement. The where() function's conditional replacement is reflected in the DataFrame filtered_df that is produced.
                </p>
            </div>

            <div>
                <h3 className="subHead">Reindexing</h3>
                <p>
                In Pandas, reindexing is the act of changing a DataFrame or Series's index labels or column names to match a new set of labels. It is frequently used to align data structures with distinct index labels, rearrange the data in a predetermined sequence, and fill in missing values with default or custom fill values. Reindexing ensures consistency and compatibility across various datasets or analysis by enabling flexible data manipulation and alignment. A new DataFrame or Series with the supplied index labels or column names is returned by the pandas reindex() function, which optionally handles missing values using the chosen technique.
                </p>
                <p>Let’s look at the code:</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', 'Charlie'],
                                        {"\n"}         'Age': [25, 30, 35],
                                        {"\n"}df = pd.DataFrame(data, index=['A', 'B', 'C'])
                                        <br/>

                                        {"\n"}# Define a new index with additional labels
                                        {"\n"}new_index = ['A', 'B', 'C', 'D']
                                        <br/> 

                                        {"\n"}# Reindex the DataFrame to match the new index
                                        {"\n"}reindexed_df = df.reindex(new_index)
                                        <br/> 

                                        {"\n"}# Display the resulting DataFrame
                                        {"\n"}print(reindexed_df)
                                        <br/> 

                                        {"\n"}     Name     Age     
                                        {"\n"}A    Alice    25.0     
                                        {"\n"}B    Bob      32.0     
                                        {"\n"}C    Charlie  35.0      
                                        {"\n"}D    Nan      35.0                                   
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code snippet modifies the index labels of the DataFrame df by applying the reindex() function in accordance with the new_index list. The original data is still present in the resulting DataFrame reindexed_df, but the index labels have been rearranged to conform to the given order. The default filler for any missing labels in the original DataFrame is NaN values.
                </p>
            </div>

            <div>
                <h3 className="subHead">Missing data</h3>
                <p>
                The absence or lack of values in a DataFrame or Series is referred to as missing data, and it is commonly represented in pandas as NaN (Not a Number). Since missing data can compromise the accuracy and dependability of analytical outputs, handling it is an essential part of data analysis and preprocessing. Pandas has a number of missing data handling techniques, such as imputation, removal, and detection. With the help of functions like isna() and isnull(), users can identify missing values and take appropriate action, like dropping missing values with dropna() or filling missing values with predefined values or statistical measures with fillna(). When missing data is handled correctly, it guarantees that modeling and data analysis processes are carried out on complete and trustworthy datasets, minimizing potential biases and inaccuracies in the results.
                </p>
                <p>
                Let’s look at an example code demonstrating handling missing data :-
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np


                                        <br/>
                                        
                                        {"\n"}# Create a sample DataFrame with missing values
                                        {"\n"}data = &#65371;'Name': ['Alice', 'Bob', np.nan, 'David'],
                                        {"\n"}         'Age': [25, np.nan, 35, 40],
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Check for missing values in the DataFrame
                                        {"\n"}print("Missing values in the DataFrame:")
                                        {"\n"}print(df.isna())
                                        <br/> 

                                        {"\n"}# Drop rows with missing values
                                        {"\n"}cleaned_df = df.dropna()
                                        <br/> 

                                        {"\n"}# Fill missing values with a predefined value (e.g., 0)
                                        {"\n"}filled_df = df.fillna(0)
                                        <br/> 

                                        {"\n"}# Display the cleaned and filled DataFrames
                                        {"\n"}print("\nDataFrame after dropping missing values:")
                                        {"\n"}print(cleaned_df)
                                        {"\n"}print("\nDataFrame after filling missing values:")
                                        {"\n"}print(filled_df)
                                        <br/> 

                                        {"\n"}Output :-
                                        <br/>
                                        
                                        {"\n"}Missing values in the DataFrame:
                                        {"\n"}     Name     Age     
                                        {"\n"}0    False    False     
                                        {"\n"}1    False    True     
                                        {"\n"}2    True     False      
                                        {"\n"}3    False    False   
                                        <br/>

                                        {"\n"}DataFrame after dropping missing values:
                                        {"\n"}     Name     Age     
                                        {"\n"}0    Alice    25.0     
                                        {"\n"}3    David    40.0      
                                        <br/>

                                        {"\n"}DataFrame after filling missing values:
                                        {"\n"}     Name     Age     
                                        {"\n"}0    Alice    25.0     
                                        {"\n"}3    David    40.0     
                                        {"\n"}2    0        35.0      
                                        {"\n"}3    David    40.0 
                                        <br/>  

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code sample uses pandas methods to manage missing data. First, the isna() method is used to identify any missing data in the DataFrame df. Next, dropna() is used to remove any missing values, producing cleaned_df, a DataFrame. Furthermore, fillna() is used to fill missing data with the value 0, producing a DataFrame filled_df that has the fill value supplied in place of the missing values. These methods show typical approaches to dealing with missing data in pandas.
                </p>
            </div>

            <div>
                <h3 className="subHead">Basic mathematical operations and statistical operations</h3>
                <p>
                Pandas makes it simple to do simple mathematical operations on DataFrame columns, which facilitates effective data manipulation and analysis. These operations, which can be performed on full columns or on certain subsets of data, include addition, subtraction, multiplication, and division. Pandas automatically aligns the data during these operations according to the index labels, guaranteeing accuracy and consistency in the output. When two DataFrame columns are added, for instance, the resultant new column has each element equal to the sum of the corresponding elements from the original columns. The same idea applies for subtracting, multiplying, or dividing columns; the operation is applied element-by-element throughout the aligned data.
                </p>
                <p>
                Mathematical functions like sum(), mean(), max(), and min() can also be supported by Pandas and used to compute aggregate statistics for DataFrame columns. With the help of these methods, users may easily generate popular summary metrics for numerical data, giving them insight into the dataset's properties and distribution. Additionally, pandas allows users to apply mathematical functions element-wise using functions like apply() and applymap(), allowing them to customize calculations and transformations on DataFrame items. All things considered, pandas' broad support for mathematical operations and functions enables users to carry out a variety of data analysis activities successfully and rapidly.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a sample DataFrame 
                                        {"\n"}data = &#65371;'A': [1, 2, 3],
                                        {"\n"}         'B': [4, 5, 6]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Perform basic mathematical operations
                                        {"\n"}df['C'] = df['A'] + df['B']  # Addition
                                        {"\n"}df['D'] = df['B'] - df['A']  # Subtraction
                                        {"\n"}df['E'] = df['A'] * df['B']  # Multiplication
                                        {"\n"}df['F'] = df['B'] / df['A'] # Division
                                        <br/> 

                                        {"\n"}# Calculate aggregate statistics
                                        {"\n"}sum_column = df['C'].sum()  # Sum of column 'C'
                                        {"\n"}mean_column = df['D'].mean() # Mean of column 'D'
                                        {"\n"}max_column = df['E'].max() # Maximum value in column 'E'
                                        {"\n"}min_column = df['F'].min() # Minimum value in column 'F'
                                        <br/> 

                                        {"\n"}# Display the modified DataFrame and aggregate statistics
                                        {"\n"}print("DataFrame with computed columns:")
                                        {"\n"}print(df)
                                        {"\n"}print("\nAggregate statistics:")
                                        {"\n"}print("Sum of column 'C':", sum_column)
                                        {"\n"}print("Mean of column 'D':", mean_column)
                                        {"\n"}print("Maximum value in column 'E':", max_column)
                                        {"\n"}print("Minimum value in column 'F':", min_column)
                                        <br/> 
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>

                                        
                                        {"\n"}DataFrame with computed columns:
                                        {"\n"}   A  B  C  D   E    F    
                                        {"\n"}0  1  4  5  3   4  4.0    
                                        {"\n"}   1  2  5  7  3  10  2.5
                                        {"\n"}   2  3  6  9  3  18  2.0      
                                        <br/>

                                        {"\n"}Aggregate statistics:
                                        {"\n"}Sum of column 'C': 21    
                                        {"\n"}Mean of column 'D': 3.0   
                                        {"\n"}Maximum value in column 'E': 18   
                                        {"\n"}Minimum value in column 'F': 2.0
                                        <br/>  

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                Basic mathematical operations and aggregate statistic calculations on a pandas DataFrame are demonstrated by the given code. A DataFrame is first made with two numerical columns called "A" and "B." Subsequently, the DataFrame gains four additional columns ('C' through 'F'), each of which shows the outcome of a distinct mathematical operation (addition, subtraction, multiplication, and division) performed on the initial columns. Furthermore, built-in pandas functions are used to generate aggregate statistics like as the total, mean, maximum, and minimum values of particular columns. Lastly, the computed aggregate statistics and the updated DataFrame are shown. This code demonstrates how pandas' robust features and user-friendly interface make it easier to manipulate and analyze data effectively.
                </p>
            </div>

            <div>
                <h3 className="subHead">About advance mathematical operations and statical opeartions </h3>
                <p>
                Beyond simple arithmetic operations, pandas offers more sophisticated computations and transformations for advanced mathematical operations on DataFrame columns. Advanced data analysis tasks like statistical modeling, machine learning, and time series analysis require these processes.
                </p>
                <p>
                Because of its integration with NumPy, SciPy, and other mathematical libraries, Pandas offers comprehensive support for complex mathematical operations. NumPy's array-based operations, for instance, can be directly applied to DataFrame columns by users, utilizing features like mathematical functions, element-wise operations, and linear algebra. Furthermore, pandas provides specialized functions and methods for complex mathematical processes such as Fourier transforms, rolling computations, correlation analysis, and interpolation.
                </p>
                <p>
                One noteworthy feature is the ability to compute aggregate statistics over a specified window of data points using rolling computations, such as rolling mean, rolling sum, or rolling standard deviation. When examining time series data or creating moving averages to smooth out oscillations, these processes are especially helpful.
                </p>
                <p>
                Additionally, pandas provides statistical functions for correlation analysis, hypothesis testing, and the calculation of descriptive statistics. Summary statistics, confidence intervals, p-values, and correlation matrices can all be computed by users, offering insightful information about the distribution, connections, and importance of the data.
                </p>
                <p>
                All things considered, pandas' extensive support for complex mathematical operations enables users to carry out complex data analysis and modeling jobs quickly and effectively, making it a valuable tool for quantitative analysis and scientific computing.
                </p>
                <p>
                Let’s look at code which demonstrate some advance mathematical and statical operations: 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np
                                       <br/>
                                        
                                        {"\n"}# Create a sample DataFrame with numerical data 
                                        {"\n"}data = &#65371;'A': np.random.rand(100),
                                        {"\n"}         'B': np.random.rand(100)&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Compute rolling mean and standard deviation over a window size of 10
                                        {"\n"}rolling_mean = df.rolling(window=10).mean()  
                                        {"\n"}rolling_std = df.rolling(window=10).std()
                                        <br/>

                                        {"\n"}# Calculate correlation matrix
                                        {"\n"}correlation_matrix = df.corr()
                                        <br/> 

                                        {"\n"}# Perform interpolation to fill missing values
                                        {"\n"}interpolated_df = df.interpolate(method='linear')
                                        <br/> 

                                        {"\n"}# Display results
                                        {"\n"}print("Rolling mean:")
                                        {"\n"}print(rolling_mean.head())
                                        {"\n"}print("\nRolling standard deviation:")
                                        {"\n"}print(rolling_std.head())
                                        {"\n"}print("\nCorrelation matrix:")
                                        {"\n"}print(correlation_matrix)
                                        {"\n"}print("\nInterpolated DataFrame:")
                                        {"\n"}print(interpolated_df.head())
                                        <br/> 

                                        
                                        {"\n"}DataFrame with computed columns:
                                        {"\n"}   A  B  C  D   E    F    
                                        {"\n"}0  1  4  5  3   4  4.0    
                                        {"\n"}   1  2  5  7  3  10  2.5
                                        {"\n"}   2  3  6  9  3  18  2.0      
                                        <br/>

                                        {"\n"}Aggregate statistics:
                                        {"\n"}Sum of column 'C': 21    
                                        {"\n"}Mean of column 'D': 3.0   
                                        {"\n"}Maximum value in column 'E': 18   
                                        {"\n"}Minimum value in column 'F': 2.0
                                        <br/>  

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                On a pandas DataFrame, the given code illustrates a number of sophisticated mathematical procedures. To begin, a DataFrame containing arbitrary numerical data is made. The rolling mean and standard deviation are then calculated over a window size of ten data points using rolling computations. Time series data can benefit from these rolling computations to discover trends and smooth out irregularities. The links between the columns are then analyzed using a correlation matrix, which offers insights into the correlations between various variables. In order to maintain data continuity, linear interpolation is also used to fill in any missing values in the DataFrame. The DataFrame and computed statistics that are produced are shown, demonstrating how pandas may be used to efficiently and effectively support sophisticated data analysis activities.
                </p>
            </div>

            <div>
                <h3 className="subHead">User define functions</h3>
                <p>
                With pandas' user-defined functions, users can write their own custom functions to perform particular actions or transformations on DataFrame rows or columns. These functions offer flexibility and reusability in workflows related to data analysis by encapsulating intricate logic or calculations. Users usually use the def keyword to create a Python function that takes DataFrame columns or rows as input parameters when defining a user-defined function in pandas. After completing the required operation or transformation, the function returns the outcome. Once defined, the apply() method can be used to apply the custom function to DataFrame columns, allowing users to analyze big datasets quickly and with minimal duplication of code.
                </p>
                <p>Let’s look at the code:</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'A': [1, 2, 3],
                                        {"\n"}         'B': [4, 5, 6]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Define a user-defined function to calculate the sum of two columns
                                        {"\n"}def calculate_sum(x, y):
                                        {"\n"}      return x + y
                                        <br/>

                                        {"\n"}# Apply the user-defined function to DataFrame columns using apply()
                                        {"\n"}df['Sum'] = df.apply(lambda row: calculate_sum(row['A'], row['B']), axis=1)
                                        <br/> 

                                        {"\n"}# Display the modified DataFrame with the calculated sum
                                        {"\n"}print(df)
                                        <br/> 
                                        <br/>
                                                                                
                                        {"\n"}   A  B  Sum    
                                        {"\n"}0  1  4    5   
                                        {"\n"}1  2  5    7
                                        {"\n"}2  3  6    9
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                To calculate the sum of two input numbers, a user-made function called calculate_sum() is defined in this sample code. Next, the function is applied along the rows (axis=1) to DataFrame columns 'A' and 'B' using the apply() method. The computed sums for each row are contained in a new column named "Sum," which holds the result. This example shows how to utilize user-defined functions to increase pandas' capabilities and carry out unique data transformations suited to certain requirements.
                </p>
                <p>
                <b>DataFrame.agg() :-</b> One or more aggregation methods can be applied to a DataFrame's columns using the DataFrame.agg() function in pandas. It allows users to perform numerous simultaneous computations of summary statistics in a single operation, including mean, median, total, standard deviation, etc. The agg() function takes two inputs: a list or dictionary containing several aggregating functions to be applied separately to each column, or a single aggregation function. Because of its adaptability, users can easily compute different statistics for different DataFrame columns. Furthermore, by sending a lambda function or a user-defined function to the agg() function, users can provide custom aggregating functions, offering even more customization choices for data summarization.
                </p>
                <b>Let’s look at python code for this :-</b>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;'A': [1, 2, 3],
                                        {"\n"}         'B': [4, 5, 6],
                                        {"\n"}         'C': [7, 8, 9]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Apply aggregation functions using DataFrame.agg()
                                        {"\n"}agg_result = df.agg(['sum', 'mean', 'median'])
                                        <br/>

                                        {"\n"}# Display the aggregated results
                                        {"\n"}print(agg_result)
                                        <br/> 
                                        <br/>
                                                                                
                                        {"\n"}        A     B     C    
                                        {"\n"}sum     6.0   15.0  24.0
                                        {"\n"}mean    2.0   5.0   8.0
                                        {"\n"}median  2.0   5.0   8.0
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this example, the sum, mean, and median for each column of the DataFrame df are calculated using the agg() function. These aggregated statistics are shown as columns in the resultant DataFrame agg_result, with the original column names serving as index labels. This demonstrates how the DataFrame.agg() function makes it easier to compute numerous summary statistics in pandas quickly and effectively.
                </p>
                <p>
                DataFrame.transform() - You can apply a function to each group of data in a DataFrame separately using pandas' DataFrame.transform() function. With it, users can alter DataFrame columns group-wise while keeping the original DataFrame structure intact. Each set of data is subjected to the transform() method, which takes as an input a single function or a callable object. The output of this function ought to be a modified copy of the input data that retains its original shape. In order to guarantee consistency in the output, the altered data is then aligned with the original DataFrame using the index labels. When applying custom data transformations, normalization, or standardization within data groups, this functionality is quite helpful.
                </p>
                <p>Let’s look at example code for better understanding :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;''Category': ['A', 'A', 'B', 'B', 'A'],
                                        {"\n"}         ''Value': [10, 20, 30, 40, 50]
                                        &#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Define a function to standardize the values within each category
                                        {"\n"}def standardize_values(x):
                                        {"\n"}      return (x - x.mean()) / x.std()
                                        <br/>

                                        {"\n"}# Apply group-wise transformation using DataFrame.transform()
                                        {"\n"}transformed_values = df.groupby('Category')['Value'].transform(standardize_values)
                                        <br/> 
                                        <br/>
                                                                                
                                        {"\n"}      Category     Value     Standardized_Value    
                                        {"\n"}0      A           10           -0.800641
                                        {"\n"}1      A           20           -0.320256
                                        {"\n"}2      B           30           -0.707107
                                        {"\n"}3      B           40            0.707107
                                        {"\n"}4      A           50            1.120897
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                For the purpose of standardizing the values inside each category group, the standardize_values() function is defined in this example. The 'Value' column is then grouped by the 'Category' column, and this function is applied using the convert() method. A new column called "Standardized_Value" has the modified values that have been produced; this column is aligned with the original DataFrame according to the index labels. This illustrates how group-wise data transformations in pandas are made easier by the DataFrame.transform() function, which helps users handle and analyze grouped data more quickly.
                </p>
            </div>

            <div>
                <h3 className="subHead">Value counts</h3>
                <p>
                The pandas value_counts() method is utilized to tally the instances of distinct values within a DataFrame column. The unique values in the column are returned as an index and their corresponding counts are returned as values in a series. Finding the most prevalent values and learning more about the distribution of values inside a category variable are two uses for this function. By default, the resultant Series is arranged with the most frequent value at the top and in descending order. Furthermore, extra options like normalize, which determines the relative frequencies of unique values, and dropna, which removes missing values from the count, are supported by the value_counts() function.
                </p>
                <p>Let’s look at demo code for value_counts() function :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a sample DataFrame
                                        {"\n"}data = &#65371;''Category': ['A', 'B', 'A', 'A', 'B', 'C']&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Count the occurrences of unique values in the 'Category' column
                                        {"\n"}value_counts_result = df['Category'].value_counts()
                                        <br/>

                                        {"\n"}# Display the result
                                        {"\n"}print(value_counts_result)
                                        <br/> 
                                        <br/>
                                                                                
                                        {"\n"}      Category         
                                        {"\n"}A    3
                                        {"\n"}B    2
                                        {"\n"}C    1
                                        {"\n"}Name: count, dtype: int64
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this example, the 'Category' column of the DataFrame df is used as the source of the value_counts() function, which counts the occurrences of each unique value. The unique values in the 'Category' column are used as the index and their corresponding counts as the values in the Series value_counts_result that is produced. Printing this Series helps users understand the frequency of each category in the dataset by revealing information about the distribution of values inside the 'Category' column.
                </p>
            </div>

            <div>
                <h3 className="subHead">String Methods</h3>
                <p>
                Pandas' string methods offer a range of effective tools for working with and examining string data in DataFrame columns. These methods let users to work directly on DataFrame columns to execute a variety of string operations, including joining, splitting, searching, replacing, and formatting strings. Frequently used string functions include str.lower() and str.upper(), which convert strings to lowercase and uppercase, respectively, str.replace(), which replaces occurrences of a substring with another string, and str.split(), which divides strings into substrings based on a delimiter. The str accessor, which offers access to a variety of string manipulation functionalities, is used to apply these methods to string data in DataFrame columns. Given Pandas broad support for string operations, users can efficiently handle and analyze text data within their DataFrame structures.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a sample DataFrame with string data
                                        {"\n"}data = &#65371;'Name': ['Alice Smith', 'Bob Johnson', 'Charlie Brown']&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Extract the first names from the 'Name' column
                                        {"\n"}first_names = df['Name'].str.split().str.get(0)
                                        <br/>

                                        {"\n"}# Convert the names to uppercase
                                        {"\n"}uppercased_names = df['Name'].str.upper()
                                        <br/> 

                                        {"\n"}# Replace 'Brown' with 'Green' in the 'Name' column
                                        {"\n"}replaced_names = df['Name'].str.replace('Brown', 'Green')
                                        <br/> 

                                        {"\n"}# Display the results
                                        {"\n"}print("First Names:")
                                        {"\n"}print(first_names)
                                        {"\n"}print("\nUppercased Names:")
                                        {"\n"}print(uppercased_names)
                                        {"\n"}print("\nReplaced Names:")
                                        {"\n"}print(replaced_names)
                                        <br/>
                                        <br/>
                                                        
                                        {"\n"}First Names:       
                                        {"\n"}0      Alice
                                        {"\n"}1      Bob
                                        {"\n"}2      Charlie
                                        {"\n"}Name: Name, dtype: object
                                        <br/>

                                        {"\n"}Uppercased Names:
                                        {"\n"}0      ALICE SMITH
                                        {"\n"}1      BOB JOHNSON
                                        {"\n"}2    CHARLIE BROWN
                                        {"\n"}Name: Name, dtype: object
                                        <br/>

                                        {"\n"}Replaced Names:
                                        {"\n"}0      Alice Smith
                                        {"\n"}1      Bob Johnson
                                        {"\n"}2    Charlie Green
                                        {"\n"}Name: Name, dtype: object
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this example, the DataFrame df's 'Name' column is treated with a variety of string methods. First, the names are divided into substrings based on whitespace using the str.split() function. The first names are then extracted using the str.get() method. Furthermore, all names are converted to uppercase using the str.upper() function, and all instances of "Brown" are changed to "Green" using the str.replace() technique. These procedures demonstrate how pandas' string methods make it possible to manipulate and analyze string data in DataFrame columns in an efficient manner.
                </p>
            </div>

            <div>
                <h3 className="subHead">Merge</h3>
                <p>
                To merge two or more DataFrames based on a shared column or index, utilize Pandas' merge() function. To combine the DataFrames, it executes join operations similar to those found in databases, including inner, left, right, and outer joins. The on argument allows users to define which columns or indexes to join on. For DataFrames with diverse column names, the left_on and right_on options let users to conduct join operations based on common column names. Users can also indicate the type of join to be performed, such as "inner," "outer," "left," or "right," using the way option. The columns from both DataFrames are aligned according to the given join keys, and the combined DataFrame that results has rows that satisfy the join conditions.
                </p>
                <p>Let’s look at the Python code :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}left_df = pd.DataFrame(&#65371;'ID': [1, 2, 3],
                                        {"\n"}                         'Name': ['Alice', 'Bob', 'Charlie']&#65373;)
                                        <br/>
                                        {"\n"}right_df = pd.DataFrame(&#65371;'ID': [1, 3, 4],
                                        {"\n"}                          'Age': [25, 30, 35]&#65373;)

                                        <br/>

                                        {"\n"}# Merge the DataFrames based on the 'ID' column using an inner join
                                        {"\n"}merged_df = pd.merge(left_df, right_df, on='ID', how='inner')
                                        <br/>

                                        {"\n"}# Display the merged DataFrame
                                        {"\n"}print(merged_df)
                                        <br/>
                                        <br/>
                                                        
                                        {"\n"}    ID     Name       Age
                                        {"\n"}0   1      Alice      25  
                                        {"\n"}3   3      Charlie    30
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This above code example creates two sample DataFrames, left_df and right_df, having the field 'ID' as their common column. The 'ID' column is then subjected to an inner join using the merge() function, producing the merged DataFrame merged_df, which only contains the rows in which the 'ID' values of the two DataFrames match. Columns from both left_df and right_df are present in the final DataFrame, which is aligned according to the 'ID' column. This illustrates how merging DataFrames based on shared keys or indices is made easier by the merge() function, which helps users integrate and analyze related datasets more effectively.
                </p>
                <p>
                <b>concat() :-</b> To concatenate two or more DataFrames along a given axis, use the pandas concat() function. Users can join DataFrames horizontally (along columns) or vertically (along rows), offering flexibility in data integration and manipulation. The axis=0 option allows users to concatenate DataFrames vertically, stacking the rows from each DataFrame. On the other hand, the axis=1 argument is used to concatenate DataFrames horizontally, which aligns the columns of each DataFrame. Furthermore, the concat() function has a number of parameters to handle duplicate indices and missing values, giving users the flexibility to tailor the concatenation process to their own needs. This tool is very helpful for stacking datasets with complementary information or integrating datasets with comparable structures.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}df1 = pd.DataFrame(&#65371;'A': [1, 2, 3],
                                        {"\n"}                     'B': [4, 5, 6]&#65373;)
                                        <br/>
                                        {"\n"}df2 = pd.DataFrame(&#65371;'A': [7, 8, 9],
                                        {"\n"}                     'B': [10, 11, 12]&#65373;)
                                        <br/>

                                        {"\n"}# Concatenate the DataFrames vertically
                                        {"\n"}concatenated_df = pd.concat([df1, df2], axis=0)

                                        <br/>

                                        {"\n"}Display the concatenated DataFrame
                                        {"\n"}print(concatenated_df)
                                        <br/>
                                        <br/>
                                                        
                                        {"\n"}   A   B
                                        {"\n"}0  1   4
                                        {"\n"}1  2   5
                                        {"\n"}2  3   6
                                        {"\n"}0  7  10
                                        {"\n"}1  8  11
                                        {"\n"}2  9  12
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                Two sample DataFrames, df1 and df2, are made in this example with the same column names, 'A' and 'B'. The DataFrames are then concatenated vertically along the rows (axis=0) using the concat() method, producing a concatenated DataFrame called concatenated_df with the rows stacked from both df1 and df2. This illustrates how data integration and manipulation chores in pandas are made easier by the concat() method, which allows users to effectively combine DataFrames along defined axes.
                </p>
                <p>
                <b>join() :-</b> Two DataFrames can be combined using the join() function in pandas depending on the index labels or columns of each frame. By aligning their index labels or columns, it offers a practical method of merging DataFrames in a manner akin to database-style join procedures. Using the manner option, users can designate the kind of join to be performed, such as "inner," "outer," "left," or "right." The join() function, by default, executes a left join, keeping all of the rows from the left DataFrame and merging rows from both DataFrames according to their index labels or columns. By providing the on option to join DataFrames on a particular column or the left_on and right_on arguments for DataFrames with distinct column names, users can further alter the join behavior. This function allows users to easily merge DataFrames based on similar index labels or columns, and is especially helpful for integrating datasets containing relevant information.
                </p>
                <p>Let’s look at the code :-</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}left_df = pd.DataFrame(&#65371;'ID': [1, 2, 3],
                                        {"\n"}                     'Name': ['Alice', 'Bob', 'Charlie']&#65373;)
                                        <br/>
                                        {"\n"}right_df = pd.DataFrame(&#65371;'ID': [1, 3, 4],
                                        {"\n"}                     'Age': [25, 30, 35]&#65373;)
                                        <br/>

                                        {"\n"}# Join the DataFrames based on their index labels using a left join
                                        {"\n"}joined_df = left_df.join(right_df.set_index('ID'), on='ID', how='left')

                                        <br/>

                                        {"\n"}Display the joined DataFrame
                                        {"\n"}print(joined_df)
                                        <br/>
                                        <br/>
                                                        
                                        {"\n"}   ID    Name      Age
                                        {"\n"}0   1    Alice     25.0
                                        {"\n"}1   2    Bob       NaN
                                        {"\n"}2   3    Charlie   30.0
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This example creates two sample DataFrames, left_df and right_df, having the field 'ID' as their common column. Next, a left join is executed using the join() function, which keeps all of the rows from left_df while merging data from both DataFrames according to the 'ID' column. Collagen from both left_df and right_df are present in the resulting combined DataFrame joined_df, which is aligned according to the 'ID' column. This illustrates how the join() function offers a versatile method for data integration in pandas by enabling the merging of DataFrames based on shared index labels or columns.
                </p>
            </div>

            <div>
                <h3 className="subHead">Grouping/Group by</h3>
                <p>
                In pandas, grouping is the act of dividing a DataFrame into groups according to one or more keys, giving each group a function, and then merging the outcomes to create a new DataFrame. This function facilitates insights into patterns and relationships within the dataset by enabling users to study data within each group independently. A GroupBy object, which represents a collection of groups created based on the provided keys, is created using pandas' groupby() function. Subsequently, users can compute summary statistics for each group by applying aggregation functions, such sum, mean, count, etc., to the groups using methods like sum(), mean(), count(), etc. In data analysis activities, grouping is frequently used to carry out actions on subsets of data, like applying custom functions to groups, transforming data, or producing group-wise statistics.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}data = &#65371;'Category': ['A', 'B', 'A', 'B', 'A'],
                                        {"\n"}         'Value': [10, 20, 15, 25, 30]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Group the DataFrame by the 'Category' column
                                        {"\n"}grouped_df = df.groupby('Category')
                                        <br/>

                                        {"\n"}# Calculate the sum of values for each category
                                        {"\n"}sum_values = grouped_df['Value'].sum()
                                        <br/>

                                        {"\n"}# Display the result
                                        {"\n"}print(sum_values)
                                        <br/>
                                        <br/>
                                                        
                                        {"\n"}Category
                                        {"\n"}A    55
                                        {"\n"}B    45
                                        {"\n"}Name: Value, dtype: int64
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this example, the groupby() function is used to group the DataFrame df according to the 'Category' column. Next, the GroupBy object's sum() method is used to calculate the total of the values within each category. The sum of the values for each category is included in the resultant Series sum_values, which sheds light on the overall values within each group. This illustrates how grouping in Pandas helps users to efficiently evaluate data and carry out group-wise operations.
                </p>
                <p>
                Splitting, Applying, and Combining (often abbreviated as "SAC") is a powerful paradigm in pandas for performing group-wise operations on data. It involves three main steps: splitting the DataFrame into groups based on specified keys, applying a function to each group, and then combining the results into a new DataFrame.
                </p>
                <p>
                The first step, splitting, is achieved by using the groupby() function, which divides the DataFrame into groups based on the unique values of the specified key(s). This operation creates a GroupBy object, which represents the grouped data and provides the foundation for subsequent operations.
                </p>
                <p>
                Next, the applying step involves performing computations, transformations, or other operations on each group independently. This is typically done using aggregation functions like sum(), mean(), count(), or custom functions applied to the GroupBy object.a
                </p>
                <p>
                Finally, in the combining step, the results from each group are combined into a single DataFrame. This step aggregates the results of the applying step and aligns them back with the original DataFrame's structure.
                </p>
                <p>Let’s look at the code for better understanding</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}data = &#65371;'Category': ['A', 'B', 'A', 'B', 'A'],
                                        {"\n"}         'Value': [10, 20, 15, 25, 30]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Step 1: Splitting - Group the DataFrame by the 'Category' column
                                        {"\n"}grouped_df = df.groupby('Category')                         <br/>

                                        {"\n"}# Step 2: Applying - Calculate the sum of values for each category
                                        {"\n"}sum_values = grouped_df['Value'].sum()
                                        <br/>

                                        {"\n"}# Step 3: Combining - Display the result
                                        {"\n"}print(sum_values)
                                        <br/>
                                        <br/>
                                                        
                                        {"\n"}Category
                                        {"\n"}A    55
                                        {"\n"}B    45
                                        {"\n"}Name: Value, dtype: int64
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this example, the groupby() function is used to first divide the DataFrame df into groups according to the distinct values of the 'Category' column. Next, the GroupBy object's sum() method is used to calculate the total of the values within each category. Ultimately, the outcomes are aggregated into a Series sum_values, encompassing the total values for every category. This shows how the SAC paradigm works and how pandas makes group-wise data operations more effective.
                </p>
            </div>

            <div>
                <h3 className="subHead">Reshaping</h3>
                <p>
                In pandas, reshaping is the act of changing a DataFrame's structure or layout, usually by rearranging its rows and columns. Users can reposition, stack, or unstack data using this function to better fit their needs for analysis or visualization. Pandas offers a number of data reshaping functions, including pivot(), stack(), unstack(), melt(), and pivot_table(), each with a distinct function. With the help of these techniques, users can aggregate or flatten multi-dimensional datasets, reorganize hierarchical row or column indexes, and convert data between wide and long formats. In data preprocessing, exploration, and presentation tasks, reshaping is frequently utilized to convert raw data into a format better suited for analysis or display.
                </p>
                <p>Let’s look at python code for better understanding.</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}data = &#65371;'Category': ['A', 'A', 'B', 'B'],
                                        {"\n"}         'Metric': ['X', 'Y', 'X', 'Y'],
                                        {"\n"}         'Value': [10, 20, 30, 40]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Pivot the DataFrame to reshape it
                                        {"\n"}pivot_df = df.pivot(index='Category', columns='Metric', values='Value')      <br/>

                                        {"\n"}# Display the reshaped DataFrame
                                        {"\n"}print("Pivot DataFrame:")
                                        {"\n"}print(pivot_df)
                                        {"\n"}print()
                                        <br/>

                                        {"\n"}# Stack the DataFrame to compress the column index
                                        {"\n"}print("Stacked DataFrame:")
                                        {"\n"}print(stacked_df)
                                        {"\n"}print()
                                        <br/>

                                        {"\n"}# Unstack the DataFrame to pivot a level of the index labels
                                        {"\n"}unstacked_df = stacked_df.unstack()
                                        <br/>

                                        {"\n"}# Display the unstacked DataFrame
                                        {"\n"}print("Unstacked DataFrame:")
                                        {"\n"}print(unstacked_df)
                                        {"\n"}print()
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>                
                                        {"\n"}Pivot DataFrame:
                                        {"\n"}Metric     X   Y
                                        {"\n"}Category
                                        {"\n"}A         10  20
                                        {"\n"}B         30  40
                                        <br/>

                                        {"\n"}Stacked DataFrame:
                                        {"\n"}Metric     X   Y
                                        {"\n"}Category  Metric
                                        {"\n"}A         X         10
                                        {"\n"}          Y         20
                                        {"\n"}B         X         30
                                        {"\n"}          Y         40
                                        {"\n"}dtype: int64
                                        <br/>


                                        {"\n"}Unstacked DataFrame:
                                        {"\n"}Metric     X   Y
                                        {"\n"}Category
                                        {"\n"}A         10  20
                                        {"\n"}B         30  40
                                        <br/>

                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                The provided code shows how to use Pandas to reshape a DataFrame. Initially, a dictionary with the columns "Category," "Metric," and "Value" is used to build a DataFrame with the name df. This DataFrame displays tabular data with each row representing a distinct combination of measure and category, along with corresponding values.
                </p>
                <p>
                The DataFrame df is then subjected to the pivot() method, which pivots it according to the 'Metric' and 'Category' columns. This data-frame reshapes it into a more structured form, with 'Value' values filling the corresponding cells, 'Metric' values becoming the columns, and 'Category' values serving as the index. Pivot_df, the generated DataFrame, is printed to show the pivoted structure.
                </p>
                <p>
                The column index of pivot_df is then compressed using the stack() technique to create a stacked Series in which several layers of index labels are merged into a single level. By turning the columns into rows, this procedure decreases the DataFrame's dimensionality and creates a more condensed representation. For visual aid, the stacked Series that results, stacked_df, is printed.
                </p>
                <p>
                Lastly, the stacking process is undone and a level of the index labels is pivoted back into columns by using the unstack() method on stacked_df. By doing this, the DataFrame is returned to its pre-stacking configuration. To show how the stacking process is reversed, the generated DataFrame, unstacked_df, is printed.
                </p>
                <p>
                Overall, the code demonstrates how to handle tabular data for a variety of analytical tasks with flexibility by reshaping DataFrame structures using Pandas methods like pivot(), stack(), and unstack().
                </p>
                <p>Let’s look at melt code separately</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}data = &#65371;'Category': ['A', 'A', 'B', 'B'],
                                        {"\n"}         'Metric': ['X', 'Y', 'X', 'Y'],
                                        {"\n"}         'Value': [10, 20, 30, 40]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Melt the DataFrame to convert it from wide to long format
                                        {"\n"}melted_df = df.melt(id_vars=['Category'], value_vars=['Value'], var_name='Metric', value_name='Sales')   <br/>

                                        {"\n"}# Display the melted DataFrame
                                        {"\n"}print("Melted DataFrame:")
                                        {"\n"}print(melted_df)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}Melted DataFrame:
                                        {"\n"}   Category   Metric   Sales
                                        {"\n"}0     A  	  Value     10
                                        {"\n"}1     A 	  Value     20
                                        {"\n"}2     B  	  Value     30
                                        {"\n"}3     B  	  Value     40
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code snippet demonstrates how to transform a DataFrame from wide to long format using the Pandas method melt(). The variables 'Category', 'Metric', and 'Sales' are specified. To illustrate the change, the melted DataFrame that results, melted_df, is shown. By transforming tabular data into a more suited format, this process makes tabular data analysis and visualization easier.
                </p>
            </div>

            <div>
                <h3 className="subHead">Pivot table</h3>
                <p>
                Pandas pivot tables facilitate the tabular summarization and aggregation of data, offering valuable insights into the relationships among variables. These tables facilitate the analysis and extraction of valuable information by rearranging and aggregating data from a DataFrame into a new table. With pivot tables, users may define which rows, columns, and values to aggregate, giving them flexibility when it comes to summarizing data according to different standards. They are very helpful for producing reports, analyzing data, and identifying patterns in datasets.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create sample DataFrames
                                        {"\n"}data = &#65371;'Category': ['A', 'A', 'B', 'B'],
                                        {"\n"}         'Metric': ['X', 'Y', 'X', 'Y'],
                                        {"\n"}         'Value': [10, 20, 30, 40]&#65373;
                                        {"\n"}df = pd.DataFrame(data)
                                        <br/>

                                        {"\n"}# Create a pivot table
                                        {"\n"}pivot_table = df.pivot_table(index='Category', columns='Metric', values='Value', aggfunc='sum')
                                        <br/>

                                        {"\n"}# Display the pivot table
                                        {"\n"}print("Pivot Table:")
                                        {"\n"}print(pivot_table)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}Pivot Table:
                                        {"\n"}Metric     X   Y
                                        {"\n"}Category 
                                        {"\n"}A         10  20
                                        {"\n"}B         30  40
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This sample of code shows how to create a pivot table in Python by utilizing the Pandas package. First, a DataFrame with categories, metrics, and associated values is created using sample data. Next, the DataFrame is subjected to the pivot_table() method, which takes three parameters into account: the index ('Category' column), columns ('Metric' column), and values ('Value' column). To aggregate values, the aggregation function'sum' is also given. Ultimately, the pivot table that is produced shows a condensed representation of the data, with metrics representing columns, categories representing rows, and aggregated values at the intersections of the rows and columns.
                </p>
            </div>

            <div>
                <h3 className="subHead">Time Series</h3>
                <p>
                Time series data is made up of measurements or observations that were made at predetermined intervals of time. It frequently happens in a variety of fields, including economics, finance, weather forecasting, and more. Pandas provides strong support for managing time series data in Python by utilizing its datetime feature. This makes it possible to manipulate, analyze, and visualize time-stamped data in an effective manner. Each observation or measurement in a time series data set usually has a datetime index attached to it, making it simple to slice, resample, and aggregate the data according to time intervals. Here's a basic illustration of utilizing Pandas to create a time series:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a time series DataFrame with a datetime index
                                        {"\n"}dates = pd.date_range(start='2024-01-01', end='2024-01-05')
                                        {"\n"}values = [10, 20, 15, 25, 30]
                                        {"\n"}ts_data = pd.Series(values, index=dates)
                                        <br/>

                                        {"\n"}# Display the time series data
                                        {"\n"}print(ts_data)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}2024-01-01    10
                                        {"\n"}2024-01-02    20
                                        {"\n"}2024-01-03    15
                                        {"\n"}2024-01-04    25
                                        {"\n"}2024-01-05    30
                                        {"\n"}Freq: D, dtype: int64
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code snippet creates a time series with dates and accompanying values from January 1, 2024, to January 5, 2024. A range of datetime values is created using the pd.date_range() method and then assigned as the index of the Pandas Series ts_data. This shows how to set up a Pandas time series data processing basic setup.
                </p>
                <p>
                To localize the time zone of a Series with a datetime index, use Pandas' tz_localize() function. When working with time series data that must be clearly linked to a particular time zone, this technique is quite helpful. It assigns a time zone string or object to the Series' datetime index upon receiving it as input. Here is an example of code that shows how to use tz_localize():
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a Series with a datetime index
                                        {"\n"}dates = pd.date_range(start='2024-01-01', periods=3, freq='D')
                                        {"\n"}values = [10, 20, 30]
                                        {"\n"}s = pd.Series(values, index=dates)
                                        <br/>

                                        {"\n"}# Localize the time zone of the Series to 'America/New_York'
                                        {"\n"}s_localized = s.tz_localize('America/New_York')
                                        <br/>

                                        {"\n"}# Display the localized Series
                                        {"\n"}print(s_localized)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}2024-01-01 00:00:00-05:00    10
                                        {"\n"}2024-01-02 00:00:00-05:00    20
                                        {"\n"}2024-01-03 00:00:00-05:00    30
                                        {"\n"}dtype: int64
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                A Pandas Series s with a datetime index is built using this code. Next, the time zone of the Series is localized to 'America/New_York' using the tz_localize() function. This enables correct handling of time zone conversions and arithmetic operations by assigning the time zone information to the datetime index of the Series.
                </p>
                <p>
                To change the time zone of a Series with a datetime index from one time zone to another, use Pandas' tz_convert() function. Without changing the underlying data, it makes it simple to convert time zone-aware Series objects to and from multiple time zones. This method modifies the time zone of the Series based on an input time zone string or object indicating the destination time zone. A brief example of how to use tz_convert() is provided below:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a Series with a datetime index localized to 'America/New_York'
                                        {"\n"}dates = pd.date_range(start='2024-01-01', periods=3, freq='D', tz='America/New_York')
                                        {"\n"}values = [10, 20, 30]
                                        {"\n"}s = pd.Series(values, index=dates)
                                        <br/>

                                        {"\n"}# Localize the time zone of the Series to 'America/New_York'
                                        {"\n"}s_localized = s.tz_localize('America/New_York')
                                        <br/>

                                        {"\n"}# Convert the time zone of the Series to 'Europe/London'
                                        {"\n"}s_converted = s.tz_convert('Europe/London')
                                        <br/>

                                        {"\n"}# Display the converted Series
                                        {"\n"}print(s_converted)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}2024-01-01 05:00:00+00:00    10
                                        {"\n"}2024-01-02 05:00:00+00:00    20
                                        {"\n"}2024-01-03 05:00:00+00:00    30
                                        {"\n"}Freq: D, dtype: int64
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                A Pandas Series s is initialized with a datetime index localized to 'America/New_York' in this code snippet. We then use the tz_convert() function to change the Series' time zone to 'Europe/London'. This procedure changes the time zone to the designated destination time zone while preserving the integrity of the datetime index.
                </p>
                <p>
                With the exception of weekends and special holidays, a single business day is represented by the BusinessDay class in Pandas. In date arithmetic procedures, it's very helpful for creating business day offsets or ranges. The Pandas Holiday calendar's custom holidays are not included in this class; instead, only weekdays (Monday through Friday) are taken into account as business days. A brief illustration of how to use BusinessDay is provided below:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a BusinessDay object representing a single business day
                                        {"\n"}business_day = pd.offsets.BusinessDay()
                                        <br/>

                                        {"\n"}# Generate a range of business days
                                        {"\n"}business_days = pd.date_range(start='2024-01-01', end='2024-01-10', freq=business_day)
                                        <br/>

                                        {"\n"}# Display the business days
                                        {"\n"}print(business_days)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}DatetimeIndex(['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04',
               '2024-01-05', '2024-01-08', 
               {"\n"}       '2024-01-09', '2024-01-10'],
              dtype='datetime64[ns]', freq='B')
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                A single business day is represented by the BusinessDay object business_day, which is constructed in this bit of code. The pd.date_range() function creates a range of business days, from January 1, 2024, to January 10, 2024, excluding weekends and custom holidays, by using this object as the frequency. The dates that fall on weekdays within the given range are the only ones included in the resulting business days variable.
                </p>
            </div>

            <div>
                <h3 className="subHead">Categorical</h3>
                <p>
                In Pandas, categoricals—also known as categories—are a sort of data that are used to describe data that have a definite, limited set of possible values. When working with variables like gender, country, or product category that have a finite number of unique values, this data type is especially helpful. Such variables can be transformed into categorical data, which can enhance performance and memory use for specific tasks. In order to facilitate logical sorting and comparison, categoricals can also impose an order on the categories. Here's a brief example showing how to create categorical data in Pandas:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Sample data
                                        {"\n"}data = ['A', 'B', 'B', 'A', 'C']
                                        <br/>

                                        {"\n"}# Convert the data to a categorical variable
                                        {"\n"}categorical_data = pd.Categorical(data)
                                        <br/>

                                        {"\n"}# Display the categorical data
                                        {"\n"}print(categorical_data)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}['A', 'B', 'B', 'A', 'C']
                                        {"\n"}Categories (3, object): ['A', 'B', 'C']
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code sample uses the pd.category() function to turn the list data containing category values into a Pandas Categorical object. The same data is represented by the resulting categorical_data variable, which also has extra attributes like categories and codes that are connected to categorical variables.
                </p>
            </div>

            <div>
                <h3 className="subHead">idxmin() and idxmax()</h3>
                <p>
                Pandas functions idxmin() and idxmax() return the index labels in a Series or DataFrame with the minimum and maximum values, respectively. The index label corresponding to the smallest value is returned by the idxmin() function, while the index label corresponding to the greatest value is returned by the idxmax() function. These functions come be handy when figuring out where extreme values are located in a dataset. Here is an example of code that shows how to use idxmin() and idxmax():
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                       <br/>
                                        
                                        {"\n"}# Create a sample Series
                                        {"\n"}data = [10, 20, 15, 30, 25]
                                        {"\n"}s = pd.Series(data)
                                        <br/>

                                        {"\n"}# Get the index label of the minimum value
                                        {"\n"}min_index = s.idxmin()
                                        <br/>

                                        {"\n"}# Get the index label of the maximum value
                                        {"\n"}max_index = s.idxmax()
                                        <br/>

                                        {"\n"}print("Index label of the minimum value:", min_index)
                                        {"\n"}print("Index label of the maximum value:", max_index)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}Index label of the minimum value: 0
                                        {"\n"}Index label of the maximum value: 3
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                In this code, idxmin() and idxmax() are used to find the index labels where the minimum and maximum values occur in the Series s, respectively. The resulting index labels are then printed to the console.
                </p>
            </div>

            <div>
                <h3 className="subHead">cut() and qcut()</h3>
                <p>
                Pandas has two functions for binning numerical data into discrete intervals: cut() and qcut().
                </p>
                <p>
                The cut() function splits the data into user-specified bins or bins of equal width. Making bins or categories based on predetermined intervals is a valuable application of it. Cut(), for instance, can be used to divide numerical data into bins of identical width or to group ages into various age groups.
                </p>
                <p>
                    The qcut() function, on the other hand, separates the data into bins with roughly equal numbers of observations in each bin. Making quantiles or bins based on percentiles can benefit from this. Qcut(), for instance, can be used to generate bins according to data distribution or to split test scores into quartiles.
                </p>
                <p>
                Here is some sample code that shows how to use qcut() and cut():
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                            <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                                <pre>
                                    <code>
                                        {"\n"}import pandas as pd
                                        {"\n"}import numpy as np
                                       <br/>
                                        
                                        {"\n"}# Create a sample Series
                                        {"\n"}data = pd.Series(np.random.randn(10))
                                        <br/>

                                        {"\n"}# Cut the data into 3 equal-width bins
                                        {"\n"}cut_bins = pd.cut(data, bins=3)
                                        {"\n"}print("cut() result:")
                                        {"\n"}print(cut_bins)
                                        {"\n"}print()
                                        <br/>

                                        {"\n"}# Cut the data into 3 quantile-based bins
                                        {"\n"}qcut_bins = pd.qcut(data, q=3)
                                        {"\n"}print("qcut() result:")
                                        {"\n"}print(qcut_bins)
                                        <br/>
                                        <br/>

                                        {"\n"}Output :-
                                        <br/>
                                        {"\n"}cut() result:
                                        {"\n"}0     (-0.215, 0.827]
                                        {"\n"}1     (-0.215, 0.827]
                                        {"\n"}2    (-1.261, -0.215]
                                        {"\n"}3     (-0.215, 0.827]
                                        {"\n"}4     (-0.215, 0.827]
                                        {"\n"}5    (-1.261, -0.215]
                                        {"\n"}6     (-0.215, 0.827]
                                        {"\n"}7     (-0.215, 0.827]
                                        {"\n"}8    (-1.261, -0.215]
                                        {"\n"}9       (0.827, 1.87]
                                        {"\n"}dtype: category
                                        {"\n"}Categories (3, interval[float64, right]): [(-1.261, -0.215] &lt; (-0.215, 0.827] &lt; (0.827, 1.87]]
                                        <br/>

                                        {"\n"}qcut() result
                                        {"\n"}0     (-0.188, 0.574]
                                        {"\n"}1     (-0.188, 0.574]
                                        {"\n"}2    (-1.259, -0.188]
                                        {"\n"}3    (-1.259, -0.188]
                                        {"\n"}4     (-0.188, 0.574]
                                        {"\n"}5    (-1.259, -0.188]
                                        {"\n"}6       (0.574, 1.87]
                                        {"\n"}7       (0.574, 1.87]
                                        {"\n"}8    (-1.259, -0.188]
                                        {"\n"}9       (0.574, 1.87]
                                        {"\n"}dtype: category
                                        {"\n"}Categories (3, interval[float64, right]): [(-1.259, -0.188] &lt; (-0.188, 0.574] &lt; (0.574, 1.87]]
                                        <br/>
                                    </code>
                                </pre>
                            </div>
                </div>
                <br/>
                <p>
                This code snippet demonstrates how to use cut() to divide the data into three equal-width bins and qcut() to divide the data into three quantile-based bins.
                </p>
            </div>
        
        </div>       
    );
};
export default Pandas;