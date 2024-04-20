import React from "react";

const IntroducingLists = () =>{
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Introduction</h3>
                <p>
                In this chapter, we will look at an important data structure of Python. We understand how to write or initialize a list and how to start working with the elements of the list. Lists allow the user to store a set of information in one place, even if we have one element or a collection of millions of elements/items. Lists are also known as the most powerful feature of Python and it is readily accessible to new programmers. 
                </p>
                <p>
                    Python lists are agile, unlike other programming languages that may have more rigid arrays, Python lists contain elements of different data types and are dynamic in size, allowing for easy modification. 
                </p>
            </div>

            <div>
                <h3 className="subHead">What is a List ?</h3>
                <p>
                    A list is a collection of items in a particular order. Lists in Python are defined by enclosing elements within square brackets ‘[]’ and separating them with commas. Elements within a list can include numbers, strings, or even other lists. This flexibility makes lists a powerful tool for managing and manipulating data.
                </p>
                <p>
                     We can put anything in the list and the elements in the list do not need to be related to each other in any particular way. Because a list mainly contains more than one element it’s a good idea to list names in plural like letters, numbers, or names. 
                </p>
                <p>
                    Below is an example of a list which contains various elements.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}mylist = [1, 2, 'three', 4.5, [6, 7]]
                                {"\n"}mylist
                                {"\n"} 
                                {"\n"}[1, 2, 'three', 4.5, [6, 7]]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we declare a list called ‘my_list’ and in this list, we can see that we have stored various items/elements from various data types, and also another list is stored in this list. We can say that the above ‘my_list’ list contains a mix of integers, a string, a floating-point number, and even another list. Lists provide an ordered sequence, meaning the elements maintain their order, and you can access them by their index.
                </p>
                <p>
                Lists support various operations, like appending, removing, or modifying elements. Additionally, Python offers a range of built-in functions and methods specifically designed for working with lists, making them a fundamental and powerful data structure in Python programming.
                </p>
            </div>

            <div>
                <h3 className="subHead">Lists are mutable</h3>
                <p>
                    Unlike arrays and strings, lists are mutable means we can change the list’s element/item values whenever we want. To reassign the value of the list element we use a square bracket, this square bracket operator appears on the left side of the assignment (assignment is equal to (‘=’) symbol), and it identifies the element of the list that we are going to change or want to change.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}number = [0, 2, 4, 6, 8, 10]
                                {"\n"}number[0] = 1
                                {"\n"}number
                                {"\n"} 
                                {"\n"}[1, 2, 4, 6, 8, 10]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we reassigned the zero-index value with 1. With the help of square brackets and assignment operators.
                </p>
            </div>

            <div>
                <h3 className="subHead">Accessing Elements in a List</h3>
                <p>
                     In Python the lists are in the ordered collection, therefore we can access any element from a list by telling Python the position of the element we want to access or the index of that item/element. If we want to access an element or some elements from the list, we need to follow this process first we need to write the name of the list which is followed by the index of the item enclosed in square brackets. Let’s look at how we can access an element from the list in the code:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}body_parts = ['head', 'hand', 'leg', 'nose']
                                {"\n"}print(body_parts[0])
                                {"\n"} 
                                {"\n"}head
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we access the first item from the ‘body_parts’ list by passing the index value of it inside the square brackets. Because Python list elements index values start with ‘0’ therefore for accessing the first element from the list we pass ‘0’ inside the square bracket instead of 1.
                </p>
                <p>
                    We can also use string methods from the previous chapter in any element of the list. We can format the element ‘head’ more neatly by using the title() method. Let’s look at it in a code
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}body_parts = ['head', 'hand', 'leg', 'nose']
                                {"\n"}print(body_parts[0].title())
                                {"\n"} 
                                {"\n"}Head
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    The above code produces the same output as the previous code but by using the title() method it prints the output in the title case that is the first character is in capital font.
                </p>
                <p>
                     As we learn the list index starts with 0 therefore if we want to access the second item from the list then we need to pass 1 inside the square bracket and so on. If we want to get any element from the list we can do it by subtracting one from its position in the list. Let’s understand it with the help of codes
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}body_parts = ['head', 'hand', 'leg', 'nose']
                                {"\n"}print(body_parts[1])
                                {"\n"}print(body_parts[3])
                                <br/>
                                <br/>
                
                                {"\n"}hand
                                {"\n"}nose
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that when we pass 1 inside the position argument it prints ‘hand’ not ‘head’ because the head is at 0 index, and therefore when we pass 3 it prints the last element of the list. If we want to print the last element of the list and we don’t know its index position we can pass -1 inside the square brackets which means that we want to print the last element of the list and if we want to print the second last element of the list then we pass -2 as an argument in the square brackets and so on. Below is the code for better understanding. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}body_parts = ['head', 'hand', 'leg', 'nose']
                                {"\n"}print(body_parts[-1])
                                {"\n"}print(body_parts[-2])
                                <br/>
                                <br/>
                
                                {"\n"}nose
                                {"\n"}leg
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Using Individual Values from a list</h3>
                <p>
                    We can use or access any individual values from the list just like any other variable we use. For example, we can use the concatenation method in the list so we can produce an output message that has one or more than one element from the list.
                </p>
                <p>Code</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                        <code>
                                {"\n"}body_parts = ['head', 'hand', 'leg', 'nose']
                                {"\n"}message = "My first bicycle was a " + bicycles[0].title()+"."
                                {"\n"}print(message)
                                <br/>
                                <br/>
                
                                {"\n"}My first bicycle was a Trek.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that for the message variable, we use a string and then concatenate the list’s first element to it, to complete the message and then print it.  
                </p>
      
            </div>

            <div>
                <h3 className="subHead">Adding and Removing Elements</h3>
                <p>
                Many times, we create some sort of array in many programming languages then we realize that we need to add more items in the array which is not possible very easily but in the case of Python’s list we can add or remove things from it very easily.
                </p>
            </div>

            <div>
                <h3 className="subHead">Appending Elements to the End of a List</h3>
                <p>
                    In lists, if we want to add something we can do it in many ways but the simplest way to do this is to add a new element at the end of the lists using the append method. By using append we can add a new element to the end of the list. Let’s look at this using one example:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}number = [0, 2, 4, 6, 8, 10]
                                {"\n"}number.append(12)
                                {"\n"}print(number)
                                <br/>
                                <br/>
                
                                {"\n"}[0, 2, 4, 6, 8, 10, 12]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we added a new number in the list using the append method and also the new element is added at the end of the list.
                </p>
                <p>
                    The append() method makes it easy to build lists dynamically. We can build lists from the beginning with the help of the append() method because with this method we make a dynamic list whose size we can adjust according to our needs. Let's look at this process with the help of an empty list and adding elements one by one to it.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}even_number = []
                                {"\n"}number.append(2)
                                {"\n"}number.append(4)
                                {"\n"}number.append(6)
                                {"\n"}even_number
                                <br/>
                                <br/>
                
                                {"\n"}[2, 4, 6]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Inserting Elements into a List</h3>
                <p>
                    If we want to add a new element to the list’s specific position we can also do this with the help of the insert() method. In this method, we specify the index position where we want to insert the new element. For a better understanding let's look at the code:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}odd_number = [1, 3, 7, 9]
                                {"\n"}odd_number.insert(2, 5)
                                {"\n"}print(odd_number)
                                <br/>
                                <br/>
                
                                {"\n"}[1, 3, 5, 7, 9]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we added a new element 5 at the position or index value 2 in the list. We did this with the help of the insert method. The insert method takes two arguments these arguments are the position where we want to put the new element and the element which we want to put.
                </p>
            </div>

            <div>
                <h3 className="subHead">Removing Elements from a list</h3>
                <p>
                    Many times, we want to remove some elements/items from a list because we don’t further need them and if they are still available in the list, they will take up space and also increase computational time therefore we delete them from the list using various methods. In this section, we look at those methods.
                </p>
            </div>

            <div>
                <h3 className="subHead">Removing an Item Using the del Statement</h3>
                <p>
                If we know which element we want to delete and its position, we can do it using the del statement. Let’s look at this using the code:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}odd_number = [1, 3, 7, 9]
                                {"\n"}del odd_number[0]
                                {"\n"}print(odd_number)
                                <br/>
                                <br/>
                
                                {"\n"}[3, 5, 7, 9]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    We can see in the above code we remove the zero-index value, from the list using the del statement, in this we need to pass the index value as an argument.
                </p>
            </div>

            <div>
                <h3 className="subHead">Removing an Item Using the pop() Method</h3>
                <p>
                    The other method is removing items from the list is called the pop() method. It removes the last element or item from the list, but it lets us work with that item after removing it. Let’s look at the code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}odd_number = [1, 3, 5, 7, 9]
                                {"\n"}print(odd_number)
                                {"\n"}popped_number = odd_number.pop()
                                {"\n"}print(odd_number)
                                {"\n"}print(popped_number)
                                <br/>
                                <br/>
                
                                {"\n"}[1, 3, 5, 7, 9]
                                {"\n"}[1, 3, 5, 7]
                                {"\n"}9
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we remove the last element from the odd_number list using the pop() method and also store that popped item in another variable for future use. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Popping Items from any Position in a list</h3>
                <p>
                    We can use the pop() method to remove any specific item from the list by passing the position or index value of it inside the pop method brackets. Let’s look at this with an example:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}odd_number = [1, 3, 5, 7, 9]
                                {"\n"}print(odd_number)
                                {"\n"}third_number =  odd_number.pop(2)
                                {"\n"}print(odd_number)
                                {"\n"}print(thirdd_number)
                                <br/>
                                <br/>
                
                                {"\n"}[1, 3, 5, 7, 9]
                                {"\n"}[1, 3, 7, 9]
                                {"\n"}5
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, we can see that we pass an argument which is the index value of the element inside the bracket of the pop method. This index value tells the pop method which element we want to remove from the list.
                </p>
            </div>

            <div>
                <h3 className="subHead">Removing an Item by Value</h3>
                <p>
                    Sometimes we don’t know the position or index value of the list’s item or element and if we need to remove them from the list at that type we can use the remove() method to remove the item or element. In this method we pass the value inside the remove() method bracket which we want to remove. For better understanding let's look at the code example.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}even_number = [2, 4, 6, 8, 10]
                                {"\n"}print(even_number)
                                {"\n"}even_number.remove(10)
                                {"\n"}print(even_number)
                                <br/>
                                <br/>
                
                                {"\n"}[2, 4, 6, 8, 10]
                                {"\n"}[2, 4, 6, 8]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that the remove() method works with the value of the list, as we pass 10 inside the remove method bracket it removes the 10 from the even_number list.
                </p>
                <p>
                     Note: - the remove() method deletes only the first occurrence of the value we specify. If there’s a possibility the value appears more than once in the list, we’ll need to use a loop to determine if all occurrences of the value have been removed.
                </p>
            </div>

            <div>
                <h3 className="subHead">Sorting a list Permanently with the sort() Method</h3>
                <p>
                    In Python’s list many times we need to sort the items inside the list, to achieve this we need to do some type of sorting, the sort() method makes it relatively easy to sort a list. Let’s understand this much better with a code example, in this example, we have a list called cars which store car brand names in any order. If we use the sort() method in this list then it will sort the list items in alphabetical order. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}cars.sort()
                                {"\n"}print(cars)
                                <br/>
                                <br/>
                
                                {"\n"}['audi', 'bmw', 'fiat', 'hyundai', 'tata', 'toyota']
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, we can see that all the car brands are sorted in alphabetical order.
                </p>
                <p>
                    We can also sort the list in reverse order to achieve this we just need to pass an argument “reverse=True” inside the sort() method. Below is the code for the which sort the list in reverse alphabetical order.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}cars.sort(reverse)
                                {"\n"}print(cars)
                                <br/>
                                <br/>
                
                                {"\n"}['toyota', 'tata', 'hyundai', 'fiat', 'bmw', 'audi']
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     Note: Each above method sorts the list permanently means if we print the list again then they will print the sorted list, not the initial list that we created.
                </p>
            </div>

            <div>
                <h3 className="subHead">Sorting a List Temporarily with the sorted() Function</h3>
                <p>
                We see in the above code that the sort() method permanently sorts the list which sometimes we don’t want, that is sometimes we only want to sort the list temporarily and after doing our operations we can use the initial list. To achieve this we can use the sorted() function. The sorted() function lets us display our list in a particular order but doesn’t affect the actual order of the list. For better understanding let’s look at the Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}print("It is the original list:")
                                {"\n"}print(cars)
                                <br/>

                                {"\n"}print("\nIt is Temporarily sorted list")
                                {"\n"}print(sorted(cars))
                                <br/>

                                {"\n"}print("\nwe can see that the original list is intact")
                                {"\n"}print(cars)
                                <br/>
                                <br/>

                                {"\n"}It is the original list:
                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                <br/>

                                {"\n"}It is Temporarily sorted list
                                {"\n"}['audi', 'bmw', 'fiat', 'hyundai', 'tata', 'toyota']
                                <br/>

                                {"\n"}we can see that the original list is intact
                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that the sorted function only sorts the list temporarily and the original list is not affected by it.
                </p>
                <p>
                    The original order of the list or the original list still exists after the sorted function is used. The sorted() function can also accept the reverse=True argument if we want to display the list in the reverse alphabetical order. The reverse=True argument is passed inside the sorted bracket that is first we pass the list we want to sort then after comma we pass the reverse=True argument.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}print("It is the original list:")
                                {"\n"}print(cars)
                                <br/>

                                {"\n"}print("\nIt is Temporarily reverse sorted list")
                                {"\n"}print(sorted(cars, reverse=True))
                                <br/>

                                {"\n"}print("\nwe can see that the original list is intact")
                                {"\n"}print(cars)
                                <br/>
                                <br/>

                                {"\n"}It is the original list:
                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                <br/>

                                {"\n"}It is Temporarily reverse sorted list
                                {"\n"}['toyota', 'tata', 'hyundai', 'fiat', 'bmw', 'audi']
                                <br/>

                                {"\n"}we can see that the original list is intact
                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Printing a List in Reverse Order</h3>
                <p>
                    To reverse the original order of a list, we can use the reverse() method. If we want to just reverse the list then we use the reverse method it does not sort the list in any order but it just reverses the list that is the last item become first item and the first item become last. For better understanding let’s look at the Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}print(cars)
                                {"\n"}cars.reverse()
                                {"\n"}print(cars)
                                <br/>
                                <br/>

                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}['hyundai', 'fiat', 'tata', 'toyota', 'audi', 'bmw']
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, we can see that the list is printed in reverse order after using the reverse() method. It also permanently changes the order of the list that is if we print the cars again somewhere else in the program it will print in reverse order not in the order, we created it.
                </p>
                <p>
                    If we want to get the original list again then we just need to reverse the list again one more time and the list will be in the same order we create it.
                </p>
            </div>

            <div>
                <h3 className="subHead">Finding the Length of a List</h3>
                <p>
                If we want to check how many items are present in the list we can easily do it using len() function. It is also known as the length of the list. Like in the above cars list its length will be 6. Let’s check is using Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}len(cars)
                                {"\n"}6
                                <br/>

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that the length of the prints is the total number of elements/items present in the list. Which is 6 in the above case.
                </p>
                <p>
                Note: Python counts the items in a list starting with one, so we shouldn’t run into any off-by-one errors (means minus one from the total count that is n-1) when determining the length of a list.
                </p>
            </div>

            <div>
                <h3 className="subHead">Getting Sublists with Slices</h3>
                <p>
                    Getting one element or item from a list is easy and we also look at this that is how we can access or select one element from the list. We can also get several values from list using slice and get a new list from it. To slice or get many elements from list or get a sublist from a list we use square brackets, just like we use for indexing, but to slice the list we use two integer values which are separated by the colon. Let’s look at both slicing and indexing in a list.
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Cars[2] is a list with an index (one integer).
                        </p>
                    </li>
                    <li>
                        <p>
                            Cars[1:4] is a list with a slice (two integers).
                        </p>
                    </li>
                </ol>
                <p>
                    In Slicing the first integers show that from where we want to start the slicing the list or the index from where the slicing will start. The second integer is the index where the slice ends. A slice does not include the value of the second index (means if we pass 1:4 in the slice then the slicing will start from 1 but goes to index 3 it does not include index 4). A slice evaluates to a new list value.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}print(cars[0:6])
                                {"\n"}print(cars[1:4])
                                {"\n"}print(cars[0:-1])
                                <br/>
                                <br/>

                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}['audi', 'toyota', 'tata']
                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat']

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that first, we slice the index from the beginning to the end of the list as a result it will print the whole list. In the third line or second print, we pass the index 1 and 4 which results in printing the item values from second to four (note that the list index starts with 0 so the 4 index means 5 items and it does not include), in the last print we pass negative 1 as a second argument it means the last item of the list (if we pass -2 in second element then it means second last item from the list and so on) therefore it prints all the item from the list from beginning to second last item excluding last item.
                </p>
                <p>
                    If we want to start the index from the beginning then we can leave the first index value or value before the colon empty which means using 0 or the beginning of the list. If we do not add the second index value means let it empty then it means we want to include elements till the end of the list using the length of the list, it will slice to the end of the list. Let’s understand them much better by using Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cars = ['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}print(cars[:4])
                                {"\n"}print(cars[1:])
                                {"\n"}print(cars[:])
                                <br/>
                                <br/>

                                {"\n"}['bmw', 'audi', 'toyota', 'tata']
                                {"\n"}['audi', 'toyota', 'tata', 'fiat', 'hyundai']
                                {"\n"}['bmw', 'audi', 'toyota', 'tata', 'fiat', 'hyundai']
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that at first print we didn’t pass the first index value as a result it prints the list from the beginning. In the second list we didn’t pass the second index values as a result it prints all the elements/items from the list from index value 1 to end. In the third list we didn’t pass both the first and second index values as a result it prints the whole list.
                </p>
            </div>

            <div>
                <h3 className="subHead">Looping Through a Slice</h3>
                <p>
                    If we want to go through each element/item of the sub-list then we can also use for loop in the sub-list to iterate over all the items of the sub-list. Let’s look at the code example of this.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}players = ['charles', 'martina', 'michael', 'florence', 'eli']
                                {"\n"}print("Here are the first three player on my team:")
                                {"\n"}for player in players[:3]:
                                {"\n"}      print(player.title())
                                <br/>
                                <br/>

                                {"\n"}Here are the first three player on my team:
                                {"\n"}Charles
                                {"\n"}Martina
                                {"\n"}Michael
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                        In the above code, we can see that we created a list called players and stored the player’s name in it. In the second line we use a for loop to iterate over the players list but it is only the 3rd player we don’t want to add the last two players (i.e. 4th and 5th player) in the new list (which makes it a sub-list). 
                </p>
            </div>

            <div>
                <h3 className="subHead">List Concatenation and List Replication</h3>
                <p>
                     We can concatenate and even replicate the list. For concatenation we use the + operator, which can combine two lists and make a new list, it works in the same way as we combine two strings and create a new string. If we want to replicate two strings then we can also do it, to do it we need to use the * operator, the * operator used with a list, and an integer value to replicate the list. For better understanding let’s look at them with Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}[1, 2, 3] + ['A', 'B', 'C']
                                <br/>

                                {"\n"}["X", "Y", "Z"] * 3
                                <br/>

                                {"\n"}spam = [1, 2, 3]
                                {"\n"}spam = spam + ["A", "B","C"]
                                {"\n"}spam
                                <br/>
                                <br/>

                                {"\n"}[1, 2, 3, 'A', 'B', 'C']
                                {"\n"}{"\n"}[1, 2, 3, 'A', 'B', 'C']
                                {"\n"}[1, 2, 3, 'A', 'B', 'C']
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that at first, we concatenate 2 different lists (one has integers and one has strings). In the second we replicate a list by multiplying it by 3 it will print the same item 3 times in a list. At last, we created a list called spam and then added/concatenated another list with it using the + operator and printed it.
                </p>
            </div>

            <div>
                <h3 className="subHead">Changing Values in a List with Indexes</h3>
                <p>
                    We can change any list item values using the assignment operator, we just need to name the list with square brackets in this square bracket we pass the index values of the list’s item which value we want to change. For example, spam[1] = ‘Rohit’, which means that we have a list called spam and in this list, we have indexes, in these indexes we access index value 1 and assign a new value to it using the assignment operator. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}spam = ['cat', 'dog', 'elephant', 'rat', 'lion']
                                {"\n"}spam[1] = 'tiger'
                                {"\n"}spam
                                <br/>
                                <br/>

                                {"\n"}['cat', 'tiger', 'elephant', 'rat', 'lion']

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Avoiding Index Errors When Working with Lists</h3>
                <p>
                    The most common error we encounter when we work with lists is index error means we try to access the index that is not in the list Let's suppose we have a list that has 4 items and we know that the list’s index starts with 0 therefore the last item index value will be 3 and by mistake we want to access it by passing the value 4 in the square bracket. For better understanding lets look at the Python code. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}motorcycles = ['honda','bajaj', 'yamaha','suzuki']
                                {"\n"}print(motorcycle[4])
                                <hr/>

                                {"\n"}IndexError
                                {"\n"}Cell In[24], line 2
                                {"\n"}      1 motorcycles = ['honda','bajaj', 'yamaha','suzuki']
                                {"\n"}----&gt;2 print(motorcycles[4])
                                <br/>
                                {"\n"}IndexError: list index out of range
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that the error type shows index error means the list is out of range (the Python interpreter is not able to find the 5 item or 4 index values from the list).
                </p>
                <p>
                    If we pass the -1 in the square bracket with the list name then almost every time it will print the last value of the list the only time it shows an error is when we have an empty list and we want to print the last element from it. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}motorcycle = []
                                {"\n"}print(motorcycle[-1])
                                <hr/>

                                {"\n"}IndexError
                                {"\n"}Cell In[25], line 2
                                {"\n"}      1 motorcycles = []
                                {"\n"}----&gt;2 print(motorcycles[-1])
                                <br/>
                                {"\n"}IndexError: list index out of range
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                It also shows out-of-range errors or index errors.
                </p>
                <p>
                Note: if an index error occurs and we can’t figure out how to resolve it, try printing our list or just printing the length of our list. The list might look much different than we thought it did, especially if it has been managed dynamically by our program. Seeing the actual list, or the exact number of items in our list, can help us to sort out such logical errors.
                </p>
            </div>

            <div>
                <h3 className="subHead">Traversing a List</h3>
                <h5 className="subHead">Working with Lists (While loop)</h5>
                <p>
                    When we start coding, we write code in a very non-functional way means many times we create many individual variables that store similar types of values. Suppose we want to store our friend's name we can write the code like this:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}name1 = "Ram"
                                {"\n"}name2 = "Shayam"
                                {"\n"}name3 = "Rani"
                                {"\n"}name4 = "Gopal"
                                {"\n"}name5 = "Raju"
                                {"\n"}name6 = "Bheem"
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                Storing the data in the above style is a bad way to write code. One great reason it is not a good way is that if the number of friends/names changes, our program will never be able to store more friends than we have variables. Writing code that produces the results shown above will have lots of duplicate or nearly identical code in it. Let’s look at the code that produces the above result and look at how much similar or duplicate code it produces.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}print('Enter your friend name 1:')
                                {"\n"}name1 = input()
                                {"\n"}print('Enter your friend name 2:')
                                {"\n"}name2 = input()
                                {"\n"}print('Enter your friend name 3:')
                                {"\n"}name3 = input()
                                {"\n"}print('Enter your friend name 4:')
                                {"\n"}name4 = input()
                                {"\n"}print('Enter your friend name 5:')
                                {"\n"}name5 = input()
                                {"\n"}print('Enter your friend name 6:')
                                {"\n"}name6 = input()
                                <br/>
                                <br/>

                                {"\n"}Enter your friend name 1:
                                {"\n"}Ram
                                {"\n"}Enter your friend name 2:
                                {"\n"}Shayam
                                {"\n"}Enter your friend name 3:
                                {"\n"}Rani
                                {"\n"}Enter your friend name 4:
                                {"\n"}Gopal
                                {"\n"}Enter your friend name 5:
                                {"\n"}Raju
                                {"\n"}Enter your friend name 6:
                                {"\n"}Bheem
                                <br/>
                                {"\n"}Ram Shayam Rani Gopal Raju Bheem
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that there are lots of duplicate codes and lots of variables we initialize which is not good programming. We can overcome this by using the list.
                </p>
                <p>
                Instead of using many repetitive variables, we can use a single variable that contains a list value. Now let’s look at a new much improved version of the above code. In this new version, we use a single list and can store any number of friends' names that we typed. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}friends = []
                                {"\n"}while True:
                                {"\n"}      print("Enter the name of your friend " + str(len(friends) + 1) + " (Or enter nothing to stop.):")
                                {"\n"}      name = input()
                                {"\n"}      if name == "":
                                {"\n"}              break
                                {"\n"}      friends = friends + [name] <span className="codeComment">List concatenation</span>
                                {"\n"}print("Friends name are: ")
                                {"\n"}for name in friends:
                                {"\n"}      print(' ' + name)
                                <br/>
                                <br/>

                                {"\n"}Enter the name of your friend 1 (Or enter nothing to stop.):
                                {"\n"}Ram
                                {"\n"}Enter the name of your friend 2 (Or enter nothing to stop.):
                                {"\n"}Shayam
                                {"\n"}Enter the name of your friend 3 (Or enter nothing to stop.):
                                {"\n"}Rani
                                {"\n"}Enter the name of your friend 4 (Or enter nothing to stop.):
                                {"\n"}Gopal
                                {"\n"}Enter the name of your friend 5 (Or enter nothing to stop.):
                                {"\n"}Raju
                                {"\n"}Enter the name of your friend 6 (Or enter nothing to stop.):
                                {"\n"}

                                {"\n"}Friends name are: 
                                {"\n"}  Ram
                                {"\n"}  Shayam
                                {"\n"}  Rani
                                {"\n"}  Gopal
                                {"\n"}  Raju
                                {"\n"}

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>

                <p>
                In the above code and its output, we can easily see that we can add as many friends' names as we want without adding any extra line of code or new variable which is a much better approach as compared to the previous approach. 
                </p>
            </div>

            <div>
                <h5 className="subHead">Using the for Loops with Lists</h5>
                <p>
                    To access items one by one from the list we need to use loops and the use of the “for” loop is most common in it. By working principle, the “for” loop repeats the code block once for each value in a list or like-like value. Its syntax to the operator in the list is the same as when we use the “for” loop for the strings.
                </p>
                <p>Let’s look at the code for better understanding.</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}number_list = [1,2,3,4,5]
                                {"\n"}for i in number_list:
                                {"\n"}      print(i)
                                <br/>
                                <br/>

                                {"\n"}1
                                {"\n"}2
                                {"\n"}3
                                {"\n"}4
                                {"\n"}5
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that first, we created a list called “number_list” and after that, we used a for loop to loop over all the items in the list and print them one by one.
                </p>
                <p>
                A very common Python technique is to use range(len(list_name)) with for loop iterate over the indexes of the list.  Let’s look at the Python code example.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}supplies = ["Pen", "Staplers", "Flame-throwers", "Binders"]
                                {"\n"}for i in range(len(supplies)):
                                {"\n"}      print("Index " + str(i) + " in supplies is: " + supplies[i])
                                <br/>
                                <br/>

                                {"\n"}Index 0 in supplies is: Pen
                                {"\n"}Index 1 in supplies is: Staplers
                                {"\n"}Index 2 in supplies is: Flame-throwers
                                {"\n"}Index 3 in supplies is: Binders
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we first initialize a list and after that, we use a for loop with range() and len() functions to iterate over list indexes, and then at print, we print the index numbers and the items present in the list.
                </p>
            </div>

            <div>
                <h3 className="subHead">The in and the not in Operators</h3>
                <p>
                If we want to check whether an item is present or not present in the list, we can use the “in” and the “not in” operators. Like many other operators the “in” and “not in” operators are used in the expression and they connect two values: the one value looked for in the list and the list where it may be found. They produce Boolean value as a result if we use the “in” operator and the value is in the list then it produces True otherwise False. For “not in” if the value is not in the list, then it produces True and if the value is in the list then it produces False.
                </p>
                <p>Let’s look at Python code for a better understanding and how it works.</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}number_list = [1,2,3,4,5]
                                {"\n"}'cat' in number_list
                                {"\n"}1 in number_list
                                {"\n"}3 not in number_list
                                <br/>
                                <br/>

                                {"\n"}False
                                {"\n"}True
                                {"\n"}False
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that if any value is not present in the list and we check it in the list using the “in” operator it produces False, and if the value is in the list, then it produces True. If we check the value is not present in the list using the “not in” operator and it is present in the list then also it produces False as a result.
                </p>
                <p>
                Let’s look at another example in this example we ask the user to enter a name and we check whether the name is already in the list or not if not then we print a message that the name is not in the list and if it is in the list then it prints the name.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}names = ["Bheem", "Raju", "Jaggu", "Chutki", "Dholu", "Bholu", "Kalia"]
                                {"\n"}print("Enter character name:")
                                {"\n"}name = input()
                                {"\n"}if name not in names:
                                {"\n"}      print(name +" is not the main character of Chota Bheem.")     
                                {"\n"}else:
                                {"\n"}      print(name + " is a main character of chota Bheem.")
                                <br/>
                                <br/>

                                {"\n"}Enter character name:
                                {"\n"}Mannu
                                {"\n"}Mannu is not the main character of Chota Bheem.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that created a list called “names” which has names and after that, we ask the user to enter a name and check whether the entered name is already available in the list or not, if not then we print a message that, the name is not the main character of Chota Bheem and if the name is present in the list then we print that the name is a main character of Chota Bheem.
                </p>
            </div>

            <div>
                <h3 className="subHead">The Multiple Assignment Trick</h3>
                <p>
                In lists, we can assign multiple variables with the values in the list in one line of code, which means if we create a list then we can assign new variables to the list’s items. For a better understanding, we should look at Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cat = ['fat', 'black', 'loud']
                                {"\n"}size = cat[0]
                                {"\n"}color = cat[1]
                                {"\n"}disposition = cat[2]
                                {"\n"}size     
                                {"\n"}color
                                {"\n"}disposition
                                <br/>
                                <br/>

                                {"\n"}fat
                                {"\n"}black
                                {"\n"}loud
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that we create a list called cats and then for every item of the list we assign a variable using their index values but it is a very non-function way and it takes lots of time and resources which is not good therefore instead of writing lots of line of codes we can write one line of code to replace all this let’s look at how we can achieve this. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cat = ['fat', 'black', 'loud']
                                {"\n"}size, color, disposition = cat
                                <br/>
                                <br/>

                                {"\n"}fat
                                {"\n"}black
                                {"\n"}loud
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that in one line of code, we added all the variables to the cat’s list items. It is a very simple and effective way to assign variables to the list’s items but we must take care that the length of the list must be exactly equal to the number of variables or Python will give us a ValueError.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cat = ['fat', 'black', 'loud']
                                {"\n"}size, color, disposition = cat
                                <hr/>

                                {"\n"}ValueError   
                                {"\n"}Cell In[18], line 2
                                {"\n"}      1 cat = ['fat', 'black', 'loud']
                                {"\n"}----&gt;2 size, color, disposition, name = cat
                                <br/>
                                {"\n"}ValueError: not enough values to unpack (expected 4, got 3)
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    Above we can see that if we pass more numbers as a variable compared to the list’s item then it will generate ValueError.
                </p>
            </div>

            <div>
                <h3 className="subHead">Finding a Value in a List with the index() Method</h3>
                <p>
                    If we want to find the index value of any item in the list then we can use the index() method. If we try to find an item that is not in the list then we get a ValueError error. Let’s look at the Python code for this with and without error.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cat = ['fat', 'black', 'loud']
                                {"\n"}cat.index('black')
                                {"\n"}1

                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we pass the ‘black’ argument inside the index() method and it prints the index value 1 as a correct result. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}cat = ['fat', 'black', 'loud']
                                {"\n"}cat.index('size')
                                <hr/>
                                {"\n"}ValueError
                                {"\n"}Cell In[20], line 1
                                {"\n"}----&gt; 1 cat.index('size')
                                {"\n"}ValueError: 'size' is not in the list
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we pass an argument inside the index() method that is not available in the list as a result Python produces a Value Error.
                </p>
            </div>

            <div>
                <h3 className="subHead">Simple Statistics with a List of Numbers</h3>
                <p>
                    There is some specific Python function that can only apply with a Python list which has a number in it (which means a list of all items must be numbers). For example, we can easily find the minimum, maximum, and sum of a list of numbers using their respective functions.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}number = [1,2,3,4,5,6,7,8,9,0]
                                {"\n"}print(min(number))
                                {"\n"}print(max(number))
                                {"\n"}print(sum(number))
                                <br/>
                                <br/>

                                {"\n"}0
                                {"\n"}9
                                {"\n"}45
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we created a list called number which has only in it, and after its initialization, we print the minimum, maximum, and sum values of the list.
                </p>
            </div>

            <div>
                <h3 className="subHead">List Comprehensions</h3>
                <p>
                    The list comprehension combines the for loop and the creation of new elements into one line, and it also automatically appends each new element. It is quite a complex mechanism therefore my advice is that until we know Python very well we must not use it. It is included because I think we’ll most likely see them as soon as we start looking at other peoples’ code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}squares = [value**2 for value in range(1,11)]
                                {"\n"}print(squares)
                                <br/>
                                <br/>

                                {"\n"}[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we initialize a list called square and also use list comprehensions in its initialization that is we use for loop to iterate over 1 to number 10 and then one by one square them and store them in squares like.
                </p>
            </div>

            <div>
                <h3 className="subHead">Copying List</h3>
                <p>
                    Many times, we want to make a new list that has all the items from an already existing list. Copying a list is very simple we need to create a list name and then use the assignment operator and on the right side of the assignment operator we pass the name of the already existing list with square brackets inside this square bracket we pass the colon as an argument and both sides of the colon must be empty which means we want to include all the item from beginning to last of the existing list to the new list. Let’s look at the code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}my_foods = ['Samosa', "Gulab Jamun", "Barfi", "kaju Katli"]
                                {"\n"}friends_food = my_foods[:]
                                <br/>
                                
                                {"\n"}print("My favorite foods are:")
                                {"\n"}print(my_foods)
                                <br/>

                                {"\n"}print("\nMy friends' favorite foods are:")
                                {"\n"}print(friends_food)
                                <br/>
                                <br/>

                                {"\n"}My favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli']
                                <br/>

                                {"\n"}My friends' favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli']
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, we can see that we first created a list called “my_foods” and then in the second line we made a new list called “friend_food”. We make a copy of “my_foods” by asking for a slice of “my_foods” by specifying any indices and storing the copy in the “friend _food” list.
                </p>
                <p>
                    They both produce a different list to prove that they are different lists let’s a new different item to both of them using the append method, and print the list again.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}my_foods = ['Samosa', "Gulab Jamun", "Barfi", "kaju Katli"]
                                {"\n"}friends_food = my_foods[:]
                                <br/>

                                {"\n"}my_foods.append('Chocolate')
                                {"\n"}friends_food.append('ice cream')
                                <br/>
                                
                                {"\n"}print("My favorite foods are:")
                                {"\n"}print(my_foods)
                                <br/>

                                {"\n"}print("\nMy friends' favorite foods are:")
                                {"\n"}print(friends_food)
                                <br/>
                                <br/>

                                {"\n"}My favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli', 'Chocolate']
                                <br/>

                                {"\n"}My friends' favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli', 'ice cream']
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we first created a list that copies all items to another new list and after that, we add two different items to both of the lists and print them and we see that the last element of both the lists are different which proves that both the lists are different means they both have their separate location or storage in memory.
                </p>
                <p>
                    If we don’t use square brackets with the assignment operator when we create a copy of the list then it does not store a copy of my_foods list in friends_food list. It just sets friend_foods equal to my_foods which tells the Python to connect the new variable called “friends_food” to the list that is already contained in “my_foods”. It means that both variables “my_foods” and “friend_food” indicate to same list which leads to the conclusion that when we add, remove, or update the “my_foods” list the “friends_food” list also changes similarly, and if we do some change in the “friends_food” list it will also make changes in “my_foods” list. Let’s look at this with a Python code example.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}my_foods = ['Samosa', "Gulab Jamun", "Barfi", "kaju Katli"]
                                {"\n"}friends_food = my_foods
                                <br/>

                                {"\n"}my_foods.append('Chocolate')
                                <br/>
                                
                                {"\n"}print("My favorite foods are:")
                                {"\n"}print(my_foods)
                                <br/>

                                {"\n"}print("\nMy friends' favorite foods are:")
                                {"\n"}print(friends_food)
                                <br/>

                                {"\n"}friends_food.append('ice cream')
                                <br/>

                                {"\n"}print("\nMy friends' favorite foods are:")
                                {"\n"}print(friends_food)
                                <br/>
                                <br/>

                                {"\n"}My favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli', 'Chocolate']
                                <br/>

                                {"\n"}My friends' favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli', 'Chocolate']
                                <br/>

                                {"\n"}My favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli', 'Chocolate', 'ice cream']
                                <br/>

                                {"\n"}My friends' favorite foods are:
                                {"\n"}['Samosa', 'Gulab Jamun', 'Barfi', 'kaju Katli', 'Chocolate', 'ice cream']
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                In the above code, we can see that first, we created a list called “my_foods” and then created another variable called “friends_food” using the assignment operator which also points to the same list which we already created. After that we added a new item to the “my_foods” list and printed both “my_foods” and “friends_food” lists we can see that the new item that we added is available in both the lists we printed and again we added a new item to the list “friend_foods” and print both the list in this time also we can see that both the list has the newly added item.
                </p>
            </div>

        </div>
    );
};
export default IntroducingLists;