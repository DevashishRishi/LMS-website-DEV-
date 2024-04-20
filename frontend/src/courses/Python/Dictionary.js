import React from "react";

const Dictionary = () => {
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Introduction</h3>
                <p>
                    In this chapter, we will learn about Python dictionaries, how to use them, and where to use them. It is also a data type, that provides a flexible way to access and organize data. It will help us to connect the pieces of related information. We will learn how to create a dictionary, access its information, and also how we can modify the information of the dictionary. Dictionaries can store an almost limitless amount of information. A dictionary is also like a list, but in a more general way. In a list, as we know indices have to be integers; but in a dictionary they can be any type.
                </p>
                <p>
                    In Python we call dictionaries “dict” but in other languages, it is called “hashes”. In a dictionary the indexes are called “keys” and there is always a value associated with the key therefore they are called key-value pairs. The dictionaries are typed with braces &#65371;&#65373;. 
                </p>
            </div>

            <div>
                <h3 className="subHead">Dictionary</h3>
                <p>
                    As we read above Dictionary is similar to a list but they are in a key-value pair where the key can be any datatype from string to integer. In mathematical language, a dictionary represents a mapping from its key to values therefore we can say that a key always maps a value. Because the dictionary is similar to a list with a key-value pair we can also do almost all the operations we do with a list for example looping accessing particular items from the dictionary etc.
                </p>
                <p>
                        By understanding the dictionaries, we can model a variety of real-world objects more accurately. We can also create a dictionary using the “dict” function, by using this function we can create an empty dictionary, because “dict” is the name of a built-in function. Therefore, we should avoid it using as a variable name. Let’s create an empty dictionary using a built-in function in Python.
                </p>
                <p>hintoeng = <span className="pycode">dict()</span></p>
                <p>hintoeng = <span className="pycode">&#65371;&#65373;</span></p>
                <p>
                    In the above code we can see that we created a dictionary the “hintoeng” using dict() function and we can verify that it creates a dictionary because when we print it, it prints the empty braces {} which represent the dictionary.
                </p>
                <p>
                    Now let’s look at that type of dictionary which we mainly create in Python programming for our problem-solving. 
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}mydog = &#65371; "size" : "big", "color" : "black", "disposition" : "loud" &#65373;
                                {"\n"}mydog
                                {"\n"} 
                                {"\n"}&#65371; 'size' : 'big', 'color' : 'black', 'disposition' : 'loud' &#65373;
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above Python code, we can see that we created a dictionary called “mydog” and gave it a key-value pair we can also see that the keys are not integers like lists they are strings which we already studied and the key can be of any type. 
                </p>
                <p>
                    In the Python dictionary when we provide a key, Python will return its associated value. Every key in the dictionary is connected with its value in Python via colon and every individual key-value pair is separated by commas. We can store as many key-value pairs as we want in a dictionary.
                </p>
            </div>

            <div>
                <h3 className="subHead">Simple Dictionary</h3>
                <p>
                    Let’s look at what a simple dictionary looks like. A simple dictionary stores particular information related to a particular item. Let's suppose we have a dictionary called alien that has different colors and point values, for better understanding let’s look at Python code for this.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien1 = &#65371; 'color' : 'blue', 'point' : 5 &#65373;
                                {"\n"}print(alien1['color'])
                                {"\n"}print(alien1['point'])
                                <br/>
                                {"\n"}blue
                                {"\n"}5
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that alien1 stores the alien’s color and point values, and we can access them using square brackets and passing a key inside them.
                </p>
            </div>

            <div>
                <h3 className="subHead">Accessing Values in a Dictionary</h3>
                <p>
                    To access the value of the dictionary we need to give the name of the dictionary and then place the key inside a set of square brackets just like the above code. When we do this it will return the value which is associated with the key.
                </p>
                <p>
                    By using the above code example if we created a game that has aliens and when we shoot the aliens we get the point then we can show how many points the player should earn using code like below.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien1 = &#65371; "color" : 'green', "points" : 5 &#65373;
                                {"\n"}new_points = alien1['points']
                                {"\n"}print("You just earned " + str(new_points) + " points!")
                                {"\n"}
                                {"\n"}You just earned 5 points!
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that alien1 stores the alien’s color and point values, and we can access them using square brackets and passing a key inside them.
                </p>
            </div>

            <div>
                <h3 className="subHead">Adding New Key-Value Pairs</h3>
                <p>
                     Because the dictionaries are dynamic in nature or structure we can add new key-value pairs in it. If we want to add a new key-value pair in our dictionary we need to follow the instructions, first, we need to write the name of the dictionary open the square bracket in this write the key name, and close the square bracket then we use the assignment operator and in assignment operator, the right side we write the value which we want to connect with key, after that if we print the dictionary again we can see that dictionary has the new key and value. Let’s look at this using code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien1 = &#65371; "color" : 'green', "points" : 5 &#65373;
                                {"\n"}alien1['player name'] = 'Alex'
                                {"\n"}print(alien1)
                                {"\n"}
                                {"\n"}&#65371; 'color': 'green', 'points': 5, 'player name': 'Alex'&#65373; 
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that in the first line, we created a dictionary that has two keys and values, in the next line we added the new key and values to the dictionary as we mentioned above and in line third, we print the diction and we can see that the new key-value pair is added to the dictionary.
                </p>
            </div>

            <div>
                <h3 className="subHead">Dictionaries vs. Lists</h3>
                <p>
                    In the list the items are in store manner but in the dictionary, they are not in order. If we want to access the first item for the list then we use a square bracket with list_name, that is list_name[0], but there is no first value or index in the dictionary. In a list, the order of items is an important means in which order the items are present to determine whether two lists are the same or not, but in the case of dictionaries it doesn’t matter what the key-value pairs are typed in it. For better understanding let’s look at Python code for both of them.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}list1 = ['cars', 'trucks', 'buses']
                                {"\n"}list2 = ['trucks', 'cars', 'buses']
                                {"\n"}list1 == list2
                                <br/>
                                {"\n"}False
                                <br/>

                                {"\n"}dict1 = &#65371;'a' : 'cars', 'b' : 'trucks', 'c' : 'buses'&#65373;
                                {"\n"}dict2 = &#65371;'b' : 'trucks', 'c' : 'buses', 'a' : 'cars'&#65373;
                                {"\n"}dict1 == dict2
                                <br/>
                                {"\n"}True
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that in list1 and list2 the items are the same but in different order but when we compare both the lists using the equal to operator it prints False, on the other hand in the dict1 and dict2 we can see that the key-value pair of the dictionaries are present in different order but even after that when we compare them using equal to operator we can see that it prints “true” which means that both the dictionaries are same or have same elements. It is possible because dictionaries are not ordered, therefore we can’t slice them like lists. 
                </p>
                <p>
                    If we try to access any key that is not present in the dictionary then it will produce KeyError which is very much or close to the list’s “out-of-range” IndexError error. Let’s look at the Python code in which we try to access the key which is not present in the dictionary to see the error.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}dict1 = &#65371;'a' : 'cars', 'b' : 'trucks', 'c' : 'buses'&#65373;
                                {"\n"}dict1['d']
                                <hr/>
                                {"\n"}KeyError
                                {"\n"}Cell In[8], line 2
                                {"\n"}      1 dict1 = &#65371;'a' : 'cars', 'b' : 'trucks', 'c' : 'buses'&#65373;
                                {"\n"}----&gt;2 dict1['d']
                                <br/>
                                {"\n"}KeyError: 'd'
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that the Python interpreter shows the KeyError error which we expected. 
                </p>
                <p>
                    Even dictionaries are not ordered, the fact we can have arbitrary values for the keys allows us to organize our data in powerful ways. Let's suppose we have a program that stores the birthday of our friends. We can use a dictionary to store their data means we can use the name as a key and birthday values, and when we want to update the dictionary we just need to ask the user to enter the name and birthday of the new friend. Let’s create such a program using Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}birthdays = &#65371;'Rohit': 'Nov 23', 'Mohit': 'May 10', 'Monika' : 'Nov 28'&#65373;
                                <br/>

                                {"\n"}while True:
                                {"\n"}      print("Enter a name: (blank to quit)")
                                {"\n"}      name = input()
                                {"\n"}      if name == "":
                                {"\n"}              break
                                <br/>

                                {"\n"}      if name in birthdays:
                                {"\n"}              print(birthdays[name] + ' is the birthday of ' + name)
                                {"\n"}      else:
                                {"\n"}              print("I do not have birthday information for " + name)
                                {"\n"}              print("What is their birthday?")
                                {"\n"}              bday = input()
                                {"\n"}              birthdays[name] = bday
                                {"\n"}              print("Birthday database updated.")
                                <br/>
                                <br/>

                                {"\n"}Enter a name: (blank to quit)
                                {"\n"}Rohit
                                {"\n"}Nov 23 is the birthday of Rohit
                                {"\n"}Enter a name: (blank to quit)
                                {"\n"}Lovely
                                {"\n"}I do not have birthday information for Lovely
                                {"\n"}What is their birthday?
                                {"\n"}Apr 05
                                {"\n"}Birthday database updated.
                                {"\n"}Enter a name: (blank to quit)
                                <br/>
                                <br/>

                                {"\n"}print(birthdays)
                                {"\n"}&#65371;'Rohit': 'Nov 23', 'Mohit': 'May 10', 'Monika': 'Nov 28', 'Lovely': 'Apr 05'&#65371;
                                {"\n"}
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we created a dictionary called “birthdays” In this we use name as a key and birthdays as a value and after that, we ask the user to enter a name if the user enters a name from the dictionary then it will print the message with name and the birthday if the name is not in the dictionary then it print that it doesn’t have birthday information related to that name and ask the birthday of that person and then update the database or dictionary. In the last line of code, we can see that the names that were not present initially in the dictionary are present after we updated the dictionary. 
                </p>
                <p>
                    If we want to add a new value in the dictionary then we can add it using the same square brackets syntax combined with the assignment operator but inside the square bracket, we need to pass the key of the dictionary.
                </p>
            </div>

            <div>
                <h3 className="subHead">Modifying Values in a Dictionary</h3>
                <p>
                     We can easily modify the value of the dictionary, to achieve this we need to use the name of the dictionary then immediately after that we open the square brackets write the key, and close the square bracket, we use the assignment operator (=) and its right side we pass the new value which we want to assign to the key. For better understanding let’s look at the Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien1 = &#65371;"color": 'green', "points": 5, 'player name': 'Alex'&#65373;
                                {"\n"}alien1['player name'] = "Rohit"
                                {"\n"}alien1
                                <br/>
                                <br/>

                                {"\n"}&#65371;'color': 'green', 'points': 5, 'player name': 'Rohit'&#65373;
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that first we define a dictionary called ‘alien1’ after that we assign the new value to the key ‘player name’ using the above instructions, and after that when we print the alien1 dictionary again we can see that the player name has changed from “Alex” to “Rohit”.
                </p>
                <p>
                    Let’s look at a more complex example in this example we add the speed on the alein1 dictionary and track the position of an alien that can move at different speeds. To make this working we first store the current speed of the alien and then determine how far right the alien may move.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien2 = &#65371;'x_position':0, 'y_position': 25, 'speed':'medium'&#65373;
                                {"\n"}print("Original x-position: " + str(alien2['x_position']))
                                <br/>

                                {"\n"}<span className="codeComment">Move the alien to the right</span>
                                {"\n"}<span className="codeComment">Determine how far to move the alien based in its current speed.</span>
                                {"\n"}if alien2['speed'] == 'slow':
                                {"\n"}      x_increment  = 5
                                {"\n"}elif alien2['speed'] == 'medium':
                                {"\n"}      x_increment = 10
                                {"\n"}else:
                                {"\n"}      <span className="codeComment">this must be fast alien</span>
                                {"\n"}      x_increment = 15
                                <br/>

                                {"\n"}<span className="codeComment">the new position is the old position plus the increment.</span>
                                {"\n"}alien2['x_position'] = alien2['x_position'] + x_increment
                                <br/>

                                {"\n"}print("New x-position: " + str(alien2['x_position']))
                                <br/>

                                {"\n"}Original x-position: 0
                                {"\n"}New x-position: 10
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    At the start of the above program, we declare a dictionary that has the x, y position, and speed as a key and their respective values. Then we print the current x position of the alien2 dictionary. After that, we check whether the speed key is slow or not if it is slow then we create a variable called x_increment and store a value 5 to it. After that we check whether the speed key’s value is ‘medium’ or not if it is medium then we again use the x_increment variable but this time we store the value 10 on it. After checking the ‘slow’ and ‘medium’ speeds only the ‘fast’ speed remains therefore at last we use the else condition to store the fast value 15 on the x_increment variable. After checking the condition, we update the x_position by adding the current x_position value and the value we get from the conditions. At last, we print the new x_position value to and at output we can see the x_position original value and its new value.
                </p>
            </div>

            <div>
                <h3 className="subHead">Removing Key-Value Pairs</h3>
                <p>
                    If we don’t need a piece of information any longer from the dictionary, we can remove that using the “del” statement, the “del” statement completely removes a key-value pair. All we need to do is to remove the key-value is name the dictionary and the key that we want to remove. Let’s look at an example for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien2 = &#65371;'x_position':0, 'y_position': 25, 'speed':'medium'&#65373;
                                {"\n"}print(alien2)
                                {"\n"}del alien2['speed']
                                {"\n"}print(alien2)
                                <br/>
                                <br/>

                                {"\n"}&#65371;'x_position': 0, 'y_position': 25, 'speed': 'medium'&#65373;
                                {"\n"}&#65371;'x_position': 0, 'y_position': 25&#65371;
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that before using the “del” statement we have three key-value pairs in the dictionary but when we use the “del” statement to remove the speed key and its value from the dictionary it removes it and we can verify this by printing the dictionary again.
                </p>
            </div>

            <div>
                <h3 className="subHead">A Dictionary of Similar Objects</h3>
                <p>
                    Till now we mainly store different kinds of information about one object, in the dictionary, but we can store or use a dictionary to store one kind of information mainly about one object. For example, let’s create such dictionary which have a similar type of data.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}favorite_languages = &#65371;
                                {"\n"}  'Rohit': 'python',
                                {"\n"}  'Mohit': 'c',
                                {"\n"}  'edward': 'ruby',
                                {"\n"}  'phil': 'python',
                                {"\n"}&#65373;
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above dictionary, we can see that, we have broken a larger dictionary into several lines. In the above dictionary, every key is a person's name and the values is the response that is which programming language they like most. If we want to create a big dictionary and we know that we need more than one line to define the dictionary, we then give a name to dictionary after the assignment operator we open the brace, and after that, we press the enter button, then we indent the next one level (four spaces) and write first key-value pair which is followed by a comma. Our text editor should now indent all subsequent key-value pairs to match the first key-value pair when you hit enter. Once we complete the dictionary, we need to add a closing brace on the new line of the last key value and indent it one level so it also aligns with all the key-value pairs. Let’s look at Python code to see which language a person likes most.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}favorite_languages = &#65371;
                                {"\n"}  'Rohit': 'python',
                                {"\n"}  'Mohit': 'c',
                                {"\n"}  'edward': 'ruby',
                                {"\n"}  'phil': 'python',
                                {"\n"}&#65373;
                                <br/>

                                {"\n"}print("Rohit’s Favorite language is " + favorite_languages['Rohit'].title() + ".")
                                <br/>
                                <br/>
                                {"\n"}Rohit’s Favorite language is Python. 
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we first created a dictionary then we printed the output which shows Rohit’s favorite language using print statement.
                </p>
            </div>

            <div>
                <h3 className="subHead">The keys(), values(), and items() Methods</h3>
                <p>
                    Keys(), values(), and items() are the dictionary methods that can return list-like values of the dictionary's values, keys, or both. But the values they return are not true lists: we cannot modify them and also we cannot use the append() method on them. But we can use a for loop with these data types. Let’s see how the for loop works with a dictionary.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien1 = &#65371;"color": 'green', "points": 5, 'player name': 'Alex'&#65373;
                                {"\n"}for i in alien1.values():
                                {"\n"}      print(i)
                                <br/>
                                <br/>

                                {"\n"}green
                                {"\n"}5
                                {"\n"}Alex
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that the for loop iterates over all the alien1 dictionary values. We can use a for loop to iterate over keys also and even with key-value pairs. To iterate over keys we pass .keys() with a dictionary in for loop and to iterate over key-value pair we pass .item() in for loop.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien1 = &#65371;"color": 'green', "points": 5, 'player name': 'Alex'&#65373;
                                {"\n"}for i in alien1.values():
                                {"\n"}      print(i)
                                {"\n"}print("")
                                {"\n"}for i in alien1.items():
                                {"\n"}      print(i)
                                <br/>
                                <br/>

                                {"\n"}color
                                {"\n"}points
                                {"\n"}player name

                                {"\n"}('color', 'green')
                                {"\n"}('points', 5)
                                {"\n"}('player name', 'Alex')
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that using the keys(), values(), and items() method we can iterate over the dictionary’s keys, values, and the whole dictionary’s key-value pair respectively. We should take note that when using the items() method it will return a tuple as a result which has a key and value. Every key and value has its tuple.
                </p>
                <p>
                    If we want a real list-like form from the dictionary keys or values we need to pass its list-like return value to the list() function. For better understanding let’s look at Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}spam = &#65371;'color': 'red', 'age': 42&#65373;
                                {"\n"}spam.keys()
                                {"\n"}dict_keys(['color', 'age'])
                                <br/>

                                {"\n"}list(spam.keys())
                                {"\n"}['color', 'age']
                                <br/>

                                {"\n"}list(spam.values())
                                {"\n"}['red', 42]
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    The dict_keys value provided by keys() is sent to list() in the list(spam.keys()) line, which causes list() to return a list result of ['color', 'age']. We can also see that values can be printed as a list using the list() method.
                </p>
                <p>
                    If we want, we can use many assignment tricks in a for loop to assign the key and value to separate variables. Let’s look at Python code for this.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}spam = &#65371;'color': 'red', 'age': 42&#65373;
                                {"\n"}for k, v in spam.items():
                                {"\n"}      print('Key: ' + k + ' Value: '+ str(v))
                                <br/>
                                <br/>

                                {"\n"}Key: color Value: red
                                {"\n"}Key: age Value: 42
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that in the for loop we use two variables k, and v to iterate over the dictionary’s keys and values and print them using variables.
                </p>
            </div>

            <div>
                <h3 className="subHead">Checking Whether a Key or Value Exists in a Dictionary</h3>
                <p>
                    We can also use “in” and “not in” operators in the dictionary to check whether a certain key or value exists in the dictionary or not. It is similar to a list operation in which we also check whether a value is present in the list or not. Let’s look at Python code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}spam = &#65371;'color': 'red', 'age': 42&#65373;
                                {"\n"}'color' in spam.keys()
                                {"\n"}True
                                <br/>

                                {"\n"}'green' in spam.values()
                                {"\n"}False
                                <br/>

                                {"\n"}'name' in spam.keys()
                                {"\n"}False
                                <br/>

                                {"\n"}'name' not in spam.keys()
                                {"\n"}True
                                <br/>

                                {"\n"}'name' in spam
                                {"\n"}False
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above codes, we can see that we use the “in” and “not in” operators in different situations. First, we check whether the “key” which is “color” in the above dictionary is present in the spam keys or not. It is present therefore it gives True output. In the next code we check whether ‘green’ is available in the spam dictionary’s values and because green is not present in spam dictionary values it prints False. The same goes for the next code but with the dictionary’s key. In the fourth block of code, we check whether ‘name’ is not present in the spam dictionary keys if it is present then it will provide output False and if it is not present then it will give output True as given above code. The same can be done for dictionary values also. In the last section of the code, we check whether ‘name’ is available in the spam dictionary’s key or value, if it is then it will give output True, and if not then give output False as given above.
                </p>
            </div>

            <div>
                <h3 className="subHead">The get() Method</h3>
                <p>
                    It is a very tedious task to check whether a key exists in the dictionary or not before we can access the key’s value. Fortunately, dictionaries have a get() method that overcomes this problem, it takes two arguments: the key of the value to retrieve and a fallback value to return if that key does not exist. Let’s look at Python code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}picnicItems = &#65371;'apples':5, 'cups':3, 'oranges':4&#65373;
                                {"\n"}print("I am bringing " + str(picnicItems.get('cups', 0)) + ' cups.')
                                {"\n"}print("I am bringing " + str(picnicItems.get('mango', 0)) + ' mangoes.')
                                <br/>
                                <br/>

                                {"\n"}I am bringing 3 cups.
                                {"\n"}I am bringing 0 mangoes.
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    Because there are no ‘mangoes’ in the picnicItems dictionary, and we provide a default value of 0 to the get() method, therefore the output gives us the 0 mangoes as an output. If we don’t use the get() method, the code will cause or generate an error message, like given in the below code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}picnicItems = &#65371;'apples':5, 'cups':3, 'oranges':4&#65373;
                                {"\n"}print("I am bringing " + str(picnicItems.get('cups', 0)) + ' cups.')
                                <hr/>

                                {"\n"}KeyError 
                                {"\n"}Cell In[19], line 2
                                {"\n"}      1 picnicItems = &#65371;'apples':5, 'cups':3, 'oranges':4&#65373;
                                {"\n"}----&gt;2 print("I am brining " + str(picnicItems['mangoes']) + ' mongoes.')
                                {"\n"}
                                {"\n"}KeyError: 'mangoes'
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">The setdefault() Method</h3>
                <p>It is frequently necessary to set a value for a key in a dictionary only in the event that it is empty. In normal technique the code looks like below demo.</p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}ham = &#65371;'name':"Raju", 'age' : 5&#65373;
                                {"\n"}if 'color' not in ham:
                                {"\n"}      ham['color'] = 'black'
                                {"\n"}print(ham)
                                <br/>

                                {"\n"}&#65371;'name':'Raju', 'age' : 5, 'color': 'black'&#65373;
                            </code>
                        </pre>
                    </div>
                </div>
                <p>
                    It is a long process we can do this in one line of code using the “setdefault()” method. In this method we pass two arguments, the first argument checks the key and the second argument is the value for the key if the key does not exist. If the key does not exist, the setdefault() method returns the key’s value. Let’s look at the code for better understanding.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}ham = &#65371;'name':"Raju", 'age' : 5&#65373;
                                {"\n"}ham.setdefault('color', 'blue')
                                {"\n"}'blue'
                                <br/>

                                {"\n"}ham
                                {"\n"}&#65371;'name':'Raju', 'age' : 5, 'color': 'blue'&#65373;
                                <br/>

                                {"\n"}ham.setdefault('color','white')
                                {"\n"}'blue'
                                <br/>

                                {"\n"}ham
                                {"\n"}&#65371;'name':'Raju', 'age' : 5, 'color': 'blue'&#65373;
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, the setdefault () is called, then the directory in ham changes to &#65371;'name': 'Raju', 'age': 5, 'color': 'blue'&#65373;. In this, the method returns the value ‘black’ because the value is now set to key ‘color’. When we retry to reassign the color using setdefault() method to “white” in the next line of code, the value of the key does not change to ‘white’ because dictionary ham already has a key named ‘color’.
                </p>
                <p>
                    The setdefault() method is a nice shortcut to ensure that the key already exists in the dictionary. Let’s look at a short program that counts the number of occurrences of each letter in a string using setdefault() method.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}message = 'It was a bright hot day in April, and the clocks were striking thirteen.'
                                {"\n"}count = &#65371;&#65373;
                                <br/>

                                {"\n"}for character in message:
                                {"\n"}      count.setdefault(character, 0)
                                {"\n"}      count[character] = count[character] + 1
                                <br/>

                                {"\n"}print(count)
                                <br/>

                                {"\n"}&#65371;'I': 1, 't': 7, ' ': 13, 'w': 2, 'a': 4, 's': 3, 'b': 1, 'r': 5, 'i': 6, 'g': 2, 'h': 4, 'o': 2, 'd': 2, 'y': 1, 'n': 4, 'A': 1, 'p': 1, 'l': 2, ',': 1, 'e': 5, 'c': 2, 'k': 2, '.': 1&#65373;
                                <br/>
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above program the for loop, loops over every character in the message variable’s string, and counts how often each character appears. The setdefault() method call make sure that the key is in the dictionary (it has a default value of 0), so the program does not face any error when count[character] = count[character] + 1 is executed. 
                </p>

                <p>
                    In the above output we can see that lowercase letter ‘c’ appear 2 times and the space character appears 13 times, and uppercase A letter appears 1 time. 
                </p>

            </div>

            <div>
                <h3 className="subHead">Looping Through a Dictionary</h3>
                <p>
                    A dictionary can contain a few key-value pairs to millions of key-value pairs. Because the dictionary can contains large number of data, Python provide us to use loop throughout the dictionary. Because dictionaries can store data in variety of ways; therefore many different ways exist to loop through them. We can loop through all the dictionary’s key-value pairs, via a dictionary’s keys or its values.
                </p>
            </div>

            <div>
                <h3 className="subHead">Looping Through All Key-Value Pairs</h3>
                <p>
                    As we study above we can access a dictionary key-value pairs using any of its key or value, now let’s look at it using both code example. In below code example we loop through both the key and the value of the dictionary and print them.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}users = &#65371;
                                {"\n"}      'username' : "Hanuman",
                                {"\n"}      'first' : 'Jaggu',
                                {"\n"}      'last' : 'Bandar'
                                {"\n"}&#65373;
                                <br/>

                                {"\n"}for key, value in users.items():
                                {"\n"}      print("\nKey: " + key)
                                {"\n"}      print("Value: " + value)
                                <br/>
                                <br/>

                                {"\n"}Key: username
                                {"\n"}Value: Hanuman
                                <br/>
                                {"\n"}Key: first
                                {"\n"}Value: Jaggu
                                <br/>
                                {"\n"}Key: last
                                {"\n"}Value: Bandar
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we first created a dictionary and then used a for loop to access its keys and values. In the above for loop, we created two variables that hold the key and value in each key-value pair. We can choose any name for those variables as we want. After declaring the names we include the name of the dictionary which is then followed by the items() method, the items() method returns the key-value pairs. The variables are created early and are then used to store these key values. As we can see in the first print statement, we print the key of the dictionary using the first variable and in the second print statement, we print the value of the dictionary using the second variable. Let’s look at a more detailed example in Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}favorite_languages = &#65371;
                                {"\n"}      'Rohit': 'python',
                                {"\n"}      'Mohit': 'c',
                                {"\n"}      'edward': 'ruby',
                                {"\n"}      'phil': 'python',
                                {"\n"}&#65373;
                                <br/>

                                {"\n"}for name, language in favorite_languages.items():
                                {"\n"}      print(name.title() + "'s favorite language is " + language.title() + ".")
                                <br/>
                                <br/>

                                {"\n"}Rohit's favorite language is Python.
                                {"\n"}Mohit's favorite language is C.
                                {"\n"}Edward's favorite language is Ruby.
                                {"\n"}Phil's favorite language is Python.
                                
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we print the favorite programming language of the person using the same method we describe above.
                </p>
            </div>

            <div>
                <h3 className="subHead">Looping Through a Dictionary’s Keys in Order</h3>
                <p>
                     A dictionary always maintains a clean relationship between each key and its associated value, but we cannot get the items from a dictionary in a predictive order normally. It is not a big problem mainly because we can get the correct value by obtaining the correct key. 
                </p>
                <p>
                     We can return items in a certain order if we sort the keys as they are returned in the for loop. We can use sorted() function it get a copy of keys in sorted order. To know how it is written in Python let’s look at its code.
                </p>
                <p>
                    Note: -  the sorted() function can also sort the values of a dictionary just like keys. The code is also written below.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}favorite_languages = &#65371;
                                {"\n"}      'Rohit': 'python',
                                {"\n"}      'Mohit': 'c',
                                {"\n"}      'edward': 'ruby',
                                {"\n"}      'phil': 'python',
                                {"\n"}&#65373;
                                {"\n"}for name in sorted(favorite_languages.keys()):
                                {"\n"}      print(name.title() + ", thank you for taking the poll.")
                                <br/>
                                <br/>

                                {"\n"}Mohit, thank you for taking the poll.
                                {"\n"}Rohit, thank you for taking the poll.
                                {"\n"}Edward, thank you for taking the poll.
                                {"\n"}Phil, thank you for taking the poll.                              
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}favorite_languages = &#65371;
                                {"\n"}      'Rohit': 'python',
                                {"\n"}      'Mohit': 'c',
                                {"\n"}      'edward': 'ruby',
                                {"\n"}      'phil': 'python',
                                {"\n"}&#65373;
                                {"\n"}for value in sorted(favorite_languages.keys()):
                                {"\n"}      print(value.title() + ", is a computer programming language.")
                                <br/>
                                <br/>

                                {"\n"}C++, is a computer programming language.
                                {"\n"}C, is a computer programming language.
                                {"\n"}Python, is a computer programming language.
                                {"\n"}Ruby, is a computer programming language.                 
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Nesting</h3>
                <p>
                    Sometimes we need to store a set of dictionaries into a list or list of items as a value in a dictionary. This process is called nesting. We can nest a set of dictionaries inside a list or a list of items inside a dictionary, or we can even store a dictionary inside another dictionary. Nesting is a powerful feature and also quite complex to understand.
                </p>
            </div>

            <div>
                <h3 className="subHead">A list of Dictionaries</h3>
                <p>
                    Let's suppose we created a dictionary that contains a variety of information related to one type of data or thing, but now it has no space to store information about a second type of data or thing, which leads to less space for full data. How can we manage such a situation? One way is to make a list of any variable that is related to the dictionary and inside this list, we have all the dictionary information. For example, let us have a dictionary called alien_0 which has a certain type of information now we want to store another alien_1 which also has the same information we cannot store it same dictionary, therefore, we can create another dictionary to store its information but when we have many alien dictionary and we want to show them at a time we cannot to it therefore we store all this dictionaries inside a list and using for loop in this list we can print all the alien dictionary at a time. For better understanding lets look at the Python code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}alien_0 = &#65371;"color" : 'green', 'points' : 5, 'speed': 'slow'&#65373;
                                {"\n"}alien_1 = &#65371;"color" : 'yellow', 'points' : 10, 'speed': 'medium'&#65373;
                                {"\n"}alien_2 = &#65371;"color" : 'red', 'points' : 15, 'speed': 'fast'&#65373;
                                <br/>

                                {"\n"}aliens = [alien_0, alien_1, alien_2]
                                <br/>

                                {"\n"}for i in aliens:
                                {"\n"}      print(i)
                                <br/>
                                <br/>

                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;
                                {"\n"}&#65371;'color': 'yellow', 'points': 10, 'speed': 'medium'&#65373;
                                {"\n"}&#65371;'color': 'red', 'points': 15, 'speed': 'fast'&#65373;              
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we can see that we created three alien dictionaries and they all store the same type of data therefore we cannot store them inside one dictionary (which is a problem), we store them in three dictionaries and with the help of list we store these dictionaries in one list and using for loop print all these dictionaries at one time.
                </p>
                <p>
                    A more realistic and practical example is when we need to store more than three alien dictionaries inside the list and it must be done automatically. Below is the demo code to do this we created 30 aliens (they all have the same key and value for rapid creation) and stored them inside an empty list.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}<span className="codeComment"># First we make a empty list</span>
                                {"\n"}aliens = []
                                <br/>

                                {"\n"}<span className="codeComment"># Now we make 30 green aliens</span>
                                {"\n"}for alien_number in range(30):
                                {"\n"}      new_alien = &#65371;'color': 'green', 'points': 5, 'speed': 'slow'#65371;
                                {"\n"}      aliens.append(new_alien)   
                                <br/>

                                {"\n"}<span className="codeComment"># let's show the first 5 aliens:</span>
                                {"\n"}for alien in aliens[:5]:
                                {"\n"}      print(alien)
                                {"\n"}print('...')   
                                <br/>

                                {"\n"}<span className="codeComment"># let's print how many aliens are created</span>
                                {"\n"}print("Total number of aliens: " + str(len(aliens))) 
                                <br/>
                                <br/>

                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;
                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;
                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;
                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;
                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;  
                                <br/>

                                {"\n"}Total number of aliens: 30     
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above example we first created an empty list, then using range() function we tell Python how many times we want to repeat the for loop. Each time the loop completes one iteration it creates a new dictionary called new_alien. Then in the next line with the help of the append() method, we add these created dictionaries to the aliens' dictionary. 
                </p>
                <p>
                    In the next section of the code, we print the first five alien dictionaries from the alien's list using for loop, and at last we print the total number of alien dictionaries we created to check that we have 30 new_alien dictionaries.
                </p>
                <p>
                    Let’s suppose from the above example some aliens change their color and move much faster as they progress. To achieve this in the above code we can use the for loop and if statement to change the color of aliens for example let’s change the color of the first 3 aliens from green to yellow, speed from slow to medium, and points from 5 to 10. We can do this by adding the following lines code after we crated and append the all 30 aliens. For better understanding let’s write the whole code with this extra code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}<span className="codeComment"># First we make a empty list</span>
                                {"\n"}aliens = []
                                <br/>

                                {"\n"}<span className="codeComment"># Now we make 30 green aliens</span>
                                {"\n"}for alien_number in range(30):
                                {"\n"}      new_alien = &#65371;'color': 'green', 'points': 5, 'speed': 'slow'#65371;
                                {"\n"}      aliens.append(new_alien)   
                                <br/>

                                {"\n"}for alien in aliens[:3]:
                                {"\n"}      if alien['color'] == 'green':
                                {"\n"}              alien['color'] = 'yellow'
                                {"\n"}              alien['speed'] = 'medium'            
                                {"\n"}              alien['points'] = 10
                                <br/>

                                {"\n"}<span className="codeComment"># let's show the first 5 aliens:</span>
                                {"\n"}for alien in aliens[:5]:
                                {"\n"}      print(alien)
                                {"\n"}print('...')   
                                <br/>

                                {"\n"}<span className="codeComment"># let's print how many aliens are created</span>
                                {"\n"}print("Total number of aliens: " + str(len(aliens))) 
                                <br/>
                                <br/>

                                {"\n"}&#65371;'color': 'yellow', 'points': 10, 'speed': 'medium'&#65373;
                                {"\n"}&#65371;'color': 'yellow', 'points': 10, 'speed': 'medium'&#65373;
                                {"\n"}&#65371;'color': 'yellow', 'points': 10, 'speed': 'medium'&#65373;
                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;
                                {"\n"}&#65371;'color': 'green', 'points': 5, 'speed': 'slow'&#65373;  
                                <br/>

                                {"\n"}Total number of aliens: 30     
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">A list in a Dictionary</h3>
                <p>
                    Sometimes it's more beneficial to put a list inside a dictionary rather than a dictionary inside a list. Think about how you might explain a pizza that someone is ordering, for instance. The only thing you could store if you were to utilize a list would be the pizza's toppings. A list of toppings may only represent one component of the pizza you're describing when using a dictionary. 
                </p>
                <p>
                    Let’s look at an example in this example there are two kinds of information stored for each pizza: a type of crust and a list of toppings. In this, the list toppings are a value that is associated with the key ‘toppings’ just like any other value in the dictionary. The toppings have many values, instead of a single value. Let’s look at the code.
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}pizza = &#65371;
                                {"\n"}      'crust': 'thick',
                                {"\n"}      'toppings': ['mushrooms', 'extra cheese'],
                                {"\n"}&#65373;
                                <br/>

                                {"\n"}print("You ordered a " + pizza['crust'] + "-crust pizza " + "with the following toppings:")
                                {"\n"}for topping in pizza['toppings']:
                                {"\n"}      print("\t" + topping)
                                <br/>
                                <br/>

                                {"\n"}You ordered a thick-crust pizza with the following toppings:
                                {"\n"}mushrooms
                                {"\n"}extra cheese       
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we first created a dictionary called “pizza” which holds information related to pizza that has been ordered. The pizza dictionary has one key called ‘crust’ and it has a value of ‘thick’. The next key has a list as a value this list stores the toppings information. For the print statement, we summarize the order before we build the pizza. But as we can see that toppings has a list as value therefore we need to use the “for” loop to print and access the toppings key values. 
                </p>
                <p>
                    We can even nest a list inside a dictionary any time we need more than one value to be associated with a single key in a dictionary. Let’s update our previous favorite language dictionary in the new dictionary a user might have more than one favorite language. Rather than having a single language, the value linked to each individual in our dictionary loop would be a list of languages. We employ a second for loop inside the dictionaries for loop to iterate through the list of languages connected to each individual. Let’s look at a code example:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}favorite_languages  = &#65371;
                                {"\n"}      'Rohit': ['python','R', 'julia'],
                                {"\n"}      'Mohit': ['c', 'c++'],
                                {"\n"}      'edward': ['ruby','go'],
                                {"\n"}      'phil': ['python', 'haskell'],
                                {"\n"}&#65373;
                                <br/>

                                {"\n"}for name, languages in favorite_languages.items():
                                {"\n"}      print("\n" + name.title() +"'s favorite language are:")
                                {"\n"}      for language in languages:
                                {"\n"}      print("\t" + language.title())
                                <br/>
                                <br/>

                                {"\n"}Rohit's favorite language are:
                                {"\n"}      Python
                                {"\n"}      R
                                {"\n"}      julia
                                <br/>      

                                
                                {"\n"}Mohit's favorite language are:
                                {"\n"}      C
                                {"\n"}      C++
                                <br/>   

                                {"\n"}Edward's favorite language are:
                                {"\n"}      Ruby
                                {"\n"}      Go
                                <br/>            

                                {"\n"}Phil's favorite language are:
                                {"\n"}      Python
                                {"\n"}      Haskell
                                <br/>       
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                     In the above code, we can see that each key (name) has a value as a list. We can see that some key has one value (or favorite language) and other keys have many values (in a list). At first for loop we use variable name languages to hold each value from the dictionary, we already know that each value in the dictionary is a list. Inside the main loop, we use another for loop, this for loop runs through each person’s list of favorite languages. 
                </p>
                <p>
                    Note: we should not nest lists and dictionaries too deeply. If we’re nesting items much deeper than what we see in the preceding examples or we’re working with someone else’s code with a significant level of nesting, most likely a simpler way to solve the problem exists.
                </p>
            </div>

            <div>
                <h3 className="subHead">A Dictionary in a Dictionary</h3>
                <p>
                    If we need then we can nest a dictionary inside another dictionary, but our code becomes complicated quickly when we do it. For example, let's suppose we have a website that has many users and each user has a unique username, then we can use the username as keys in a dictionary. Then, by assigning a dictionary value to each user’s username, we may keep details about each user. We store three pieces of information about each user in the following listing: their location, last name, and first name. we’ll obtain this data by repeatedly iterating over the usernames and the data dictionary connected to each username. Let’s look at the Python code for this:
                </p>
                <div className="code-background" style={{ backgroundColor: "#a4f4e4", padding: "20px" }}>
                    <div className="code-container" style={{ backgroundColor: "#ffffff", padding: "20px" }}>
                        <pre>
                            <code>
                                {"\n"}users = &#65371;
                                {"\n"}      'aeinstein': &#65371;
                                {"\n"}              'first': 'albert',
                                {"\n"}              'last': 'einstein',
                                {"\n"}              'location': 'princeton',
                                {"\n"}      &#65373;,
                                {"\n"}      'mcurie':  &#65371;
                                {"\n"}              'first': 'marie',
                                {"\n"}              'last': 'curie',
                                {"\n"}              'location': 'paris',
                                {"\n"}      &#65373;,
                                {"\n"}&#65373;
                                <br/>

                                {"\n"}for username, user_info in users.items():
                                {"\n"}      print("\nUsername: " + username)
                                {"\n"}      full_name = user_info['first'] + " " + user_info['last']
                                {"\n"}      location = user_info['location']
                                {"\n"}      print("\tFull name: " + full_name.title())      
                                {"\n"}      print("\tLocation: " + location.title())
                                <br/>
                                <br/>

                                {"\n"}Username: aeinstein
                                {"\n"}      Full name: Albert Einstein
                                {"\n"}      Location: Princeton
                                <br/>      

                                
                                {"\n"}Username: mcurie
                                {"\n"}      C
                                {"\n"}      C++
                                <br/>   

                                {"\n"}Edward's favorite language are:
                                {"\n"}      Full name: Marie Curie
                                {"\n"}      Location: Paris
                                <br/>            
                            </code>
                        </pre>
                    </div>
                </div>
                <br/>
                <p>
                    In the above code, we define a dictionary that is called “users” It has two keys: one for each of the usernames ‘aeinstein’ and ‘mcurie’. In this key, the values that are associated with it are also a dictionary and it includes the first name, last name, and location. At first for loop, we go through the users' dictionary. In this loop, Python stores each key in a variable name called username, and the value which is, in this case, also a dictionary which is associated with each username variable goes into the variable user_info. After entering the first for loop we print the username at first print() statement.  
                </p>
                <p>
                After the print() statement, we start accessing the inner dictionary. In this inner dictionary the variable user_info has three keys: ‘first’, ‘last’, and ‘location’. Using each key, we produce a fully formatted name and location for every individual, and then we display a summary of the information we have about each user.
                </p>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                In this chapter, the focus is on Python dictionaries, which serve as powerful and flexible data structures utilizing key-value pairs. Dictionaries stand apart from lists by allowing keys of any data type to correspond to specific values, denoted by braces &#65371;&#65373;. Their syntax defines a dynamic means of information storage, enabling applications in various programming scenarios.
                </p>
                <p>  
                    Dictionaries, akin to lists, provide versatile supporting operations like looping and efficient item access. The “dict()” function initializes an empty dictionary, and key-value associations employ the colon(:) within the braces, offering a clean and effective representation of data relationships.
                </p>
                <p>
                    Real-world applications showcase the strength of dictionaries in accurately modeling objects through key-value pairs. The chapter demonstrates practical operations such as looping and accessing values, emphasizing the adaptability and efficiency of dictionaries in organizing and managing diverse data sets.
                </p>
                <p>
                    Dictionaries exhibit dynamic behavior, allowing seamless addition of new key-value pairs through square brackets and the assignments operator. Notably, the order of items in dictionaries is irrelevant, distinguishing them from lists, where consistent order is crucial for equality.
                </p>
                <p>
                    A comparison with lists emphasizes the contrast in ordering requirements, underlining the unique characteristics of dictionaries. Despite the potential for KeyError when handling missing keys, dictionaries showcase flexibility, evident in scenarios like updating birthday information through user input. 
                </p>
                <p>
                    In summary, this chapter underscores the adaptability and practicality of Python dictionaries in organizing diverse data sets, portraying them as potent tools in programming. The advanced aspects of dictionary usage, including looping techniques and nested structures for managing complex data scenarios, further enrich the understanding of these dynamic data structures.
                </p>
            </div>


        </div>
    );
};
export default Dictionary;