import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/DecisionTrees/Figure1.png";
import Figure2 from "../../assests/CourseImages/MachineLearning/DecisionTrees/Figure2.png";

const DecisionTrees = () =>{
    return(
        <div>
            <br/>

            <div>
                <h3 className="subHead">Decision Trees</h3>
                <p>
                    <b>Data Preprocessing :–</b> At the onset of a machine learning endeavor, the initial step typically entails Exploratory Data Analysis (EDA). Within this phase, identifying missing values in the dataset often necessitates the utilization of imputation methods. Among these methodologies, the KNN Imputer emerges as a sophisticated and effective approach for addressing missing data.
                </p>

                <p>
                    <b>Pattern Recognition :–</b> The efficacy of the K-Nearest Neighbors (KNN) algorithm becomes evident, especially when it is trained using datasets like MNIST. Upon evaluation, this model consistently exhibits a high level of accuracy, showcasing the algorithm's proficiency in tasks centered around pattern recognition.
                </p>

                <p>
                    <b>Recommendation Engines :–</b> KNN serves as a cornerstone in recommendation engines. Its primary function involves assigning a new query point to an existing group established from comprehensive datasets. This functionality proves pivotal in recommender systems, as it enables the categorization of users into specific groups based on their preferences. Consequently, it facilitates the delivery of personalized recommendations tailored to the inclinations of these user groups.
                </p>
                
                <div className="figure-container">
                    <img src={Figure1} alt="Basic Structure of Decision Tree" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">Why we use Decision Trees ?</h3>
                <p>The two main reasons why we should use decision trees are :- </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            The decision trees try to mimic human thinking ability during making a decision, therefore it is easy to understand.
                        </p>
                    </li>
                    <li>
                        <p>
                            It is easy to understand because it shows a tree-like structure. 
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Decision tree terminologies</h3>
                <p>Key Terminologies in Decision Trees :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        <b>Root Node :-</b> Positioned at the tree's top, the root node encapsulates the entire dataset, serving as the initial point in the decision tree and the starting point for decision-making.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Decision/Internal Node :-</b> These nodes signify a choice related to an input feature. Internal nodes branch out, connecting either to leaf nodes or other internal nodes.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Leaf/Terminal Node :-</b> A terminal node lacks child nodes and denotes either a class label or a numerical value.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Splitting :-</b> This process involves dividing a node into two or more sub-nodes using a split criterion and a chosen feature.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Branch/Sub-tree :-</b> This segment of the decision tree initiates at an internal node and culminates at the leaf nodes.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Parent Node :-</b> The node from which one or more child nodes emerge upon splitting.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Child Node :-</b> These nodes arise when a parent node undergoes splitting.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Impurity :-</b> It measures the target variable's homogeneity within a subset of data, indicating how random or uncertain the dataset is. In decision trees, impurity metrics like "entropy" and "Gini Index" are frequently used for classification tasks.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Variance :-</b> Variance quantifies regression issues in decision trees by indicating the difference between the target variable and the predicted variable across various dataset samples. In decision tree regression tasks, metrics such as Mean Squared Error, Mean Absolute Error, Friedman MSE, or Half Poisson Deviance are commonly employed for measuring variance.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Information Gain :-</b> This metric quantifies the reduction in impurity achieved by splitting a dataset based on a particular feature in a decision tree. Determined by the feature offering the most information gain, it helps identify the most informative feature for splitting at each node, aiming to create more pure subsets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Pruning :-</b> The process of eliminating branches from the decision tree that do not contribute additional information or may lead to overfitting.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Attribute Selection Measures</h3>
                <p>
                    Constructing a Decision Tree involves a learning process where the source set is divided into subsets using Attribute Selection Measures (ASM). ASM is integral in decision tree algorithms as it assesses the usefulness of different attributes in splitting datasets. Its primary objective is to pinpoint attributes that yield the most uniform subsets post-splitting, thereby maximizing information gain. This recursive partitioning occurs for every subset or subtree, driving the iterative construction process of the decision tree.
                </p>
                <p>
                    One notable aspect is that the construction of a decision tree classifier doesn't necessitate prior domain knowledge or specific parameter settings, making it valuable for exploratory knowledge discovery. Additionally, decision trees are adept at handling high-dimensional data.
                </p>
                <p>
                    Entropy serves as a metric to gauge the level of randomness or uncertainty within a dataset. In classification-type datasets, entropy quantifies randomness based on the distribution of class labels within the dataset.
                </p>
                <p>
                    For a specific subset of the original dataset with K classes for the ith node, the entropy can be defined as a measure of disorder or uncertainty within that subset. This measure aids in evaluating the impurity of a node and guides attribute selection during the decision tree construction process. 
                    
                </p>
                <div>
                    {/* H_i=-∑<sub>&#x1D458;</sub>ϵK^n▒〖&#x1D45D;(i,&#x1D458;) 〖log〗_2 &#x1D45D;(i,&#x1D458;) 〗 */}
                    <p>In the above equation :-</p>
                    <ol style={{listStyleType:"disc"}}>
                        <li>
                            <p>
                            &#x1D446; is the dataset sample.
                            </p>
                        </li>
                        <li>
                            <p>
                            &#x1D458; is the particular class from &#x1D43E; classes
                            </p>
                        </li>
                        <li>
                            <p>
                            &#x1D45D;(&#x1D458;) is the proportion of the data that belong to class &#x1D458; to the total number of data points in datasets samples &#x1D446;.
                            {/* &#x1D45D;(k)=  1/n ∑▒I(y=&#x1D458;)   */}
                            </p>
                        </li>
                        <li>
                            <p>
                                in the equation &#x1D45D;(&#x1D456;,&#x1D458;) must not be equal to zero.
                            </p>   
                        </li>
                    </ol>
                </div>

                <div>
                    <p>There are some important points we should remember if we are using entropy, and they are :-</p>
                    <ol style={{listStyleType:"decimal"}}>
                        <li>
                            <p>
                                If the dataset is fully homogeneous then the entropy is 0, it means that every instance or data point in the dataset belong ton single class. It is the lowest entropy which indicates that there is no uncertainty in the dataset sample.
                            </p>
                        </li>
                        <li>
                            <p>
                                The entropy is the dataset's highest value if it is equally divided into several subclasses. This suggests that maximal uncertainty in the dataset sample is indicated by a uniform distribution of class labels, which is when entropy is highest.
                            </p>
                        </li>
                        <li>
                            <p>
                                Entropy can also be used to assess a split's quality. By dividing the dataset into more homogeneous subsets with regard to the class labels, the entropy function seeks to identify the characteristic that minimizes the entropy of the resulting subsets.
                            </p>
                        </li>
                        <li>
                            <p>
                                The attribute which has the highest information is chosen as the splitting criterion and this process continues to build the decision tree.
                            </p>
                        </li>
                    </ol>
                </div>

                <div>
                    <p>
                        <b>Gini Impurity or index :–</b> The Gini index serves as a metric to assess the accuracy of a split among classified groups, providing scores between 0 and 1. A score of 0 indicates that all observations belong to a single class, while a score of 1 signifies a random distribution of elements across classes. Hence, aiming for a lower Gini index score is ideal, indicating more homogeneous subsets after the split. This metric serves as an evaluation tool for decision tree models, allowing the assessment of the model's effectiveness in creating informative splits.
                    </p>
                    {/* Gini Impurity=1- ∑▒p_i^2  */}
                    <p>In the above equation &#x1D45D;<sub>&#x1D456;</sub> is the proportion of elements in the set that belongs to the &#x1D456;<sup>th</sup> category.</p>
                </div>

                <div>
                    <p>
                            <b>Information Gain :–</b> Information gain quantifies the decrease in entropy or variance resulting from splitting a dataset based on a particular attribute. In decision tree algorithms, it serves to assess the relevance of a feature by segregating the dataset into more uniform or homogeneous subsets concerning the class or target variable. A higher information gain signifies greater utility as a feature for predicting the target variable, indicating its significance in enhancing the homogeneity of subsets following a split.
                    </p>
                    <p>
                    The information gain of an attribute A, with respect to a dataset S, is calculated as follows: -
                    </p>
                    {/* Information Gain(H,A)=H- ∑▒|H_V |/|H|  H_v */}
                    <p>In the above equation :-</p>
                    <ol style={{listStyleType:"disc"}}>
                        <li>
                            <p>
                            &#x1D434; is the specific attribute or class label
                            </p>
                        </li>
                        <li>
                            <p>
                                |&#x1D43B;| is the entropy of dataset sample &#x1D446;.
                            </p>
                        </li>
                        <li>
                            <p>
                            |&#x1D43B;<sub>&#x1D449;</sub> | is the number of instances in the subset &#x1D446; that have the value &#x1D463; for attribute &#x1D434;.
                            </p>
                        </li>
                    </ol>
                </div>

                <p>
                    The attribute that yields the highest information gain becomes the primary splitting criterion for constructing the decision tree. Information gain quantifies the decrease in entropy or variance attained by dividing the dataset based on attribute &#x1D434;.
                </p>
                <p>
                    Information gain serves a purpose in both classification and regression decision trees. In classification trees, entropy gauges impurity, while in regression trees, variance is employed for this measure. The calculation for information gain remains consistent across both types, differing only in the usage of entropy or variance in place of the impurity measure within the formula.
                </p>
                
            </div>

            <div>
                <h3 className="subHead">Decision tree algorithm and its working</h3>
                <p>
                    The decision tree functions by examining the dataset to forecast its classification. It initiates its evaluation at the tree's root node. Here, the algorithm inspects the values of the root attribute and compares them to the attribute of the record within the dataset. Following this comparison, it navigates along the branches, moving to the subsequent node based on the specific attribute conditions observed at each step.
                </p>
                <p>
                    The analyzing and comparing the dataset or sub-dataset continued or repeats subsequently with the sub-nodes. This process continues till it does not reach the leaf node of the tree. The complete process can much better explain through the steps given below.
                </p>
                <ol>
                    <li>
                        <p>
                        Step 1 :– The tree starts with the root node, lets say S, which contains the complete dataset.
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 2 :– Now find the best attribute from the dataset suing Attribute Selection Measure (ASM).
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 3 :– Divide the S into subsets that contains possible values for the best attributes.
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 4 :– Now generate the decision tree node, which contains the best attribute.
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 5 :– Recursively make new decision trees using the subsets of the dataset created in step :– 3. This continues until a stage is reached where we cannot further classify the nodes and called the final node as a leaf nodeClassification or Regression tree algorithm.
                        </p>
                    </li>
                </ol>
                <p>
                    Let’s suppose there is a man who wants to buy a new mobile phone now he needs to decide which type of mobile phone he want to solve this problem we can use a decision tree and it starts with the operating system the use want after that we can split the node into parts which also have decision node, then if the user selects the operating system then it move to next node which is related to camera quality and then it split into different nodes (it also has decision node) after selecting the node it split into processor name and brand and then split into further category this process continues till we goes to leaf node (every node has its own decision node). Iby using this mechanism we can easily select or decide which mobile phone user want. 
                </p>
                <div className="figure-container">
                    <img src={Figure2} alt="Example of decision tree working in real life problem" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">Advantages of the Decision tree :-</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            It is easy to understand because it also tries to follow the same process which human follows to make a decision.
                        </p>
                    </li>
                    <li>
                        <p>
                            It is very useful in cases where we need to take a decision.
                        </p>
                    </li>
                    <li>
                        <p>
                            It can help to think what may also be the possible outcome of the problem and also what are the other results.
                        </p>
                    </li>
                    <li>
                        <p>
                            For this algorithm we need to clean the data less as compare to other algorithms.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of the Decision tree</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            The decision tree has lots of layers and if data is very heterogeneous then it adds more and more layers for them which make it more complex.
                        </p>
                    </li>
                    <li>
                        <p>
                            It may also have the overfitting issue; wit can be overcome by using Random Forest algorithm.
                        </p>
                    </li>
                    <li>
                        <p>
                            For more class labels, the computational complexity of the decision tree may increase.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Appropriate problems for Decision tree learning</h3>
                <p>Decision tree learning is particularly well-suited for problems characterized by the following traits :-</p>
                <ol style={{listStyleType:'disc'}}>
                    <li>
                        <p>
                        <b>Instances represented by attribute-value pairs :-</b> Commonly, instances are portrayed using attribute-value pairs, such as temperature and corresponding values like hot, cold, or mild. Ideally, attributes possess a finite set of distinct values, simplifying the construction of decision trees. Advanced versions of decision tree algorithms can handle attributes with continuous numerical values, allowing representation of variables like temperature on a numerical scale.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Discrete output values for the target function :-</b> Decision trees are commonly employed for categorical Boolean examples, such as binary outcomes like yes or no. While primarily used for dual outcomes, decision tree methods can be extended to handle functions with multiple distinct output values, albeit applications with numeric outputs are less frequent.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Need for disjunctive descriptions :-</b> Decision trees naturally accommodate disjunctive expressions, enabling effective representation of complex relationships within data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Resilience towards errors in training data :-</b> Decision tree learning techniques demonstrate resilience towards errors present in training data, including inconsistencies in categorization or discrepancies in feature details characterizing cases.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Handling missing attribute values in training data :-</b> In some cases, training data might have missing or absent characteristics. Despite encountering unknown features in certain training samples, decision tree approaches can still be applied effectively. For example, when considering humidity levels throughout the day, this data might be available for only a specific subset of training samples.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Practical issues in learning decision trees include</h3>
                <ol style={{listStyleType:"disc"}}>
                        <li>
                            <p>
                                Determining how deeply to grow the decision tree.
                            </p>
                        </li>
                        <li>
                            <p>
                                Determining how deeply to grow the decision tree.
                            </p>
                        </li>
                        <li>
                            <p>
                                Selecting an appropriate attribute selection measure.
                            </p>
                        </li>
                        <li>
                            <p>
                                Handling training data with missing attribute values.
                            </p>
                        </li>
                        <li>
                            <p>
                                Handling attributes with differing costs, and 
                            </p>
                        </li>
                        <li>
                            <p>
                                Improving computational efficiency.
                            </p>
                        </li>
                </ol>
                <p>
                    The CART (Classification and Regression Trees) algorithm serves to construct decision trees for both classification and regression tasks. It operates similarly to methods like Gini impurity or Information Gain, focusing on selecting the best split at each node based on a specified metric. The fundamental steps of the CART algorithm are as follows :-
                </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                        <b>Root Node Initialization :-</b> Begin with the root node of the tree, representing the complete training dataset.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Evaluate Feature Impurity :-</b> Evaluate each feature in the dataset to determine how contaminated the data is. Metrics used to quantify impurity include the Gini index and entropy for classification and the mean squared error, mean absolute error, friedman_mse, or half Poisson deviance for regression.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Select Feature with Highest Information Gain :-</b> Identify the features that yield the highest information gain or impurity reduction during the data split.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Split the Dataset :-</b> For each potential value of the selected feature, partition the dataset into two subsets (e.g., yes or no values based on the feature). The goal is to create subsets that are as pure as possible concerning the target value.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Assess Subset Impurity :-</b> Evaluate the impurity of each resulting subset based on the target variable.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Iterative Process :-</b> Repeat steps 2-5 iteratively for every subset, continuing until a stopping condition is met. Stopping conditions might include reaching a maximum tree depth, having a minimum number of samples required to make a split, or achieving a minimum impurity threshold. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Assign Values to Terminal Nodes :-</b> For each terminal node (leaf node) in the tree, assign the majority class for classification tasks or the mean value for regression tasks. This step ensures that the model can predict outcomes for new instances based on the learned patterns.
                        </p>
                    </li>
                </ol>
                <p>
                    These steps collectively facilitate the creation of an effective decision tree through iterative evaluation and feature splitting, catering to both classification and regression tasks.
                </p>
            </div>

            <div>
                <h3 className="subHead">Classification and Regression Tree algorithm for Classification</h3>
                <p>
                Let’s we have a data at node &#x1D45A; be &#x1D444;<sub>&#x1D45A;</sub> and it has &#x1D45B;<sub>&#x1D45A;</sub> samples, and &#x1D461;<sub>&#x1D45A;</sub> as the threshold for the node &#x1D45A;. Then, for classification and regression tree algorithm for classification can be written as :-
                </p>
                {/* G(Q_m,t_m )=  (n_m^Left)/n_m  H(Q_m^Left (t_m ))+(n_m^Right)/n_m  H(Q_m^Right (t_m )) */}
                <p>In the above equation, </p>
                <ol style={{listStyleType:'disc'}}>
                    <li>
                        <p>
                        &#x1D43B; is the measure of impurities of the left and right subsets at the node &#x1D45A;. the value of &#x1D43B; can be get through entropy or Gini impurity.
                        </p>
                    </li>
                    <li>
                        <p>
                        &#x1D45B;<sub>&#x1D45A;</sub> is the number of instances in the left and right sunsets at node &#x1D45A;.
                        </p>
                    </li>
                </ol>
                <p>
                    For selecting the parameter, we can write the equation as :-
                </p>
                <span className="formula">&#x1D461;<sub>&#x1D45A;</sub> = &#x1D461;<sub>&#x1D45A;</sub> &#x1D43B;(&#x1D444;<sub>&#x1D45A;</sub>,&#x1D461;<sub>&#x1D45A;</sub> )</span>
            </div>

            <div>
                <h3 className="subHead">Classification and Regression Tree algorithm for Regression</h3>
                <p>
                     For regression problems we can do the following to get the equation, let the data available at node &#x1D45A; be &#x1D444;<sub>&#x1D45A;</sub> and it has &#x1D45B;<sub>&#x1D45A;</sub> samples, and &#x1D461;<sub>&#x1D45A;</sub> as the threshold for the &#x1D45A;. Then, the classification and regression algorithm for regression can be written as:
                </p>
                {/* G(Q_m,t_m )=  (n_m^Left)/n_m  MSE(Q_m^Left (t_m ))+(n_m^Right)/n_m  MSE(Q_m^Right (t_m )) */}
                <ol style={{listStyleType:"disc"}}>
                <li>
                    <p>
                    In the above equation the MSE is the mean squared error.
                    {/* 〖MSE〗_(Q_m )=∑_(yϵQ_m)▒(y ̅_m-y)^2  */}
                    {/* Here, y ̅_m=  1/n_m  ∑_(yϵQ_m)▒y */}
                    </p>
                </li>
                <li>
                    <p>
                    n<sub>&#x1D45A;</sub> is the number of instances in the left and right subsets at node &#x1D45A;.
                    </p>
                </li>
            </ol>
                <p>For selecting the parameter, we can write the equation as:</p>
                <span className="formula">&#x1D461;<sub>&#x1D45A;</sub> = &#x1D461;<sub>&#x1D45A;</sub> &#x1D440;&#x1D446;&#x1D438;(&#x1D444;<sub>&#x1D45A;</sub>,&#x1D461;<sub>&#x1D45A;</sub> )</span>
            </div>

            <div>
                <h3 className="subHead">Strengths of the Decision Tree Approach</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Decision trees offer interpretability due to their rule-based nature, allowing easy comprehension of generated rules.
                        </p>
                    </li>
                    <li>
                        <p>
                            They perform classification tasks with minimal computational demand.
                        </p>
                    </li>
                    <li>
                        <p>
                            Capable of handling both continuous and categorical variables, making them versatile.
                        </p>
                    </li>
                    <li>
                        <p>
                            Highlighting the importance of fields for prediction or classification purposes.
                        </p>
                    </li>
                    <li>
                        <p>
                            Simplicity in usage and implementation, requiring no specialized expertise, rendering them accessible to a broad user base.
                        </p>
                    </li>
                    <li>
                        <p>
                            Scalability.
                        </p>
                    </li>
                    <li>
                        <p>
                            Tolerance towards missing values or data, making them suitable for incomplete or datasets with missing information.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ability to handle non-linear relationships between variables, enhancing suitability for complex datasets.
                        </p>
                    </li>
                    <li>
                        <p>
                            Adequacy in handling imbalanced datasets by adjusting node importance based on class distribution, ensuring functionality even with heavily skewed class representation.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Weaknesses of the Decision Tree Approach</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Decision trees are less effective for estimation tasks, especially when aimed at predicting continuous attribute values.
                        </p>
                    </li>
                    <li>
                        <p>
                            They tend to struggle in classification problems with numerous classes and a limited number of training examples, leading to higher error rates.
                        </p>
                    </li>
                    <li>
                        <p>
                            The computational expense in training decision trees can be notable, particularly when growing trees to fit larger datasets. Sorting candidate splits and searching for optimal combinations of fields during tree construction can be resource-intensive. Similarly, pruning algorithms can be costly as they involve forming and comparing numerous sub-trees.
                        </p>
                    </li>
                    <li>
                        <p>
                            There's a high risk of overfitting, particularly with complex and deep trees, impacting the performance on new, unseen data.
                        </p>
                    </li>
                    <li>
                        <p>
                            Small variations in training data might yield entirely different decision trees, complicating result comparison or reproduction.
                        </p>
                    </li>
                    <li>
                        <p>
                            Handling missing data poses a challenge for many decision tree models, often necessitating imputation or deletion of records with missing values.
                        </p>
                    </li>
                    <li>
                        <p>
                            Improper initial data splitting can lead to biased trees, especially with unbalanced datasets or rare classes, impacting the model's accuracy.
                        </p>
                    </li>
                    <li>
                        <p>
                            Decision trees can be sensitive to the scaling of input features, especially when using distance-based metrics or comparison-heavy decision rules.
                        </p>
                    </li>
                    <li>
                        <p>
                            Their ability to represent complex relationships between variables is limited, particularly concerning nonlinear or interactive effects, which might result in less accurate modeling of intricate relationships within the data.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    Decision trees are versatile supervised learning models used for both classification and regression tasks. They partition the data into segments based on features, creating a tree-like structure where each node represents a feature, each branch a decision based on that feature, and each leaf node an outcome or prediction. Decision threes are easy to interpret and visualize, capable of handling both numerical and categorical data. However, they can overfit if not pruned properly and may not capture complex relationships in data as effectively as other algorithms. Techniques like ensemble methods can improve their performance and robustness.
                </p>
            </div>

            <div>
                <h3 className="subHead">Python Code</h3>

                <div>
                    <h5 className="subHead">For classification task</h5>
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
                                <span className="codeKey">from</span> sklearn.datasets <span className="codeKey">import</span> load_iris
                                {"\n"}<span className="codeKey">from</span> sklearn.model_selection <span className="codeKey">import</span> train_test_split
                                {"\n"}<span className="codeKey">from</span> sklearn.tree  <span className="codeKey">import</span> DecisionTreeClassifier
                                {"\n"}<span className="codeKey">from</span> sklearn.metrics  <span className="codeKey">import</span> accuracy_score
                                {"\n"}<span className="codeKey">import</span> matplotlib.pyplot  <span className="codeKey">as</span> plt
                                {"\n"}<span className="codeKey">from</span> sklearn <span className="codeKey">import</span> tree
                                <br/>
                                {"\n"}<span className="codeComment"># Load the Iris dataset (classification)</span>
                                {"\n"}iris = load_iris()
                                {"\n"}X = iris.data
                                {"\n"}y = iris.target
                                <br/>
                                {"\n"}<span className="codeComment"># Extract only the first two features for visualization</span>
                                {"\n"}X = cancer.data[:, :2]
                                {"\n"}y = cancer.target
                                <br/>
                                {"\n"}<span className="codeComment"># BSplit the dataset into training and testing sets</span>
                                {"\n"}X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
                                <br/>
                                {"\n"}<span className="codeComment"># Create Decision Tree Classifier</span>
                                {"\n"}clf = DecisionTreeClassifier()
                                <br/>
                                {"\n"}<span className="codeComment"># Train the classifier</span>
                                {"\n"}clf.fit(X_train, y_train)
                                <br/>
                                {"\n"}<span className="codeComment"># Make predictions for test data</span>
                                {"\n"}y_pred = clf.predict(X_test)
                                <br/>
                                {"\n"}<span className="codeComment"># Evaluate accuracy</span>
                                {"\n"}accuracy = accuracy_score(y_test, y_pred)
                                {"\n"}print(f"Decision Tree Classifier Accuracy: &#x7B;accuracy&#x7D;")
                                <br/>
                                {"\n"}<span className="codeComment">#Plot the decision tree</span>
                                {"\n"}plt.figure(figsize=(12, 8))
                                {"\n"}tree.plot_tree(clf, filled=True, feature_names=iris.feature_names, class_names=iris.target_names)
                                {"\n"}plt.show()
                            </code>
                        </pre>
                        </div>
                    </div>
                    <br/>

                    
                </div>
                <br/>

                <div>
                    <h5 className="subHead">For Regression task</h5>
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
                                <span className="codeKey">from</span> sklearn.datasets <span className="codeKey">import</span> load_diabetes
                                {"\n"}<span className="codeKey">from</span> sklearn.model_selection <span className="codeKey">import</span> train_test_split
                                {"\n"}<span className="codeKey">from</span> sklearn.tree  <span className="codeKey">import</span> DecisionTreeRegressor
                                {"\n"}<span className="codeKey">from</span> sklearn.metrics <span className="codeKey">import</span> mean_squared_error
                                {"\n"}<span className="codeKey">import</span> matplotlib.pyplot <span className="codeKey">as</span> plt
                                {"\n"}<span className="codeKey">from</span> sklearn <span className="codeKey">import</span> tree
                                <br/>
                                {"\n"}<span className="codeComment"># Load the Diabetes dataset (regression)</span>
                                {"\n"}diabetes = load_diabetes()
                                {"\n"}X = diabetes.data
                                {"\n"}y = diabetes.target
                                <br/>
                                {"\n"}<span className="codeComment"># Split the dataset into training and testing sets</span>
                                {"\n"}X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
                                <br/>
                                {"\n"}<span className="codeComment"># Create Decision Tree Regressor</span>
                                {"\n"}reg = DecisionTreeRegressor()
                                <br/>
                                {"\n"}<span className="codeComment"># Train the regressor</span>
                                {"\n"}reg.fit(X_train, y_train)
                                <br/>
                                {"\n"}<span className="codeComment"># Make predictions for test data</span>
                                {"\n"}y_pred = reg.predict(X_test)
                                <br/>
                                {"\n"}<span className="codeComment"># Evaluate using Mean Squared Error (MSE) for test data</span>
                                {"\n"}mse = mean_squared_error(y_test, y_pred)
                                {"\n"}print(f"Decision Tree Regressor MSE: &#x7B;mse&#x7D;")
                                <br/>
                                {"\n"}<span className="codeComment"># Plot the decision tree</span>
                                {"\n"}plt.figure(figsize=(12, 8))
                                {"\n"}tree.plot_tree(reg, filled=True, feature_names=diabetes.feature_names)
                                {"\n"}plt.show()
                            </code>
                        </pre>
                        </div>
                    </div>
                    <br/>

                    
                </div>
            </div>
            

        </div>
    );
};
export default DecisionTrees;