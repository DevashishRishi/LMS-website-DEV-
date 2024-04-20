import React from "react";

const AprioriAlgorithm = () => {
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Apriori Algorithm</h3>
                <p>
                    The Apriori algorithm stands out in association rule mining by identifying relationships between objects. Introduced by R. Agrawal and R. Srikant in 1994, it aims to discover frequent item sets within datasets. Named "Apriori" due to its utilization of prior knowledge about frequent itemset properties, this algorithm employs an iterative or level-wise approach to find k+1 itemsets based on k-frequent itemsets.
                </p>
                <p>
                    Its primary goal is to establish associations among different objects. Often referred to as frequent pattern mining, an illustrative example occurs in supermarkets where common items like butter, bread, and milk are placed together. This strategic arrangement is based on the likelihood that if a customer buys bread, they might also purchase milk and butter, enhancing both convenience for customers and the supermarket's sales performance.
                </p>
                <p>
                    Operating on large transactional databases like supermarket purchase records, the Apriori algorithm efficiently generates frequent itemsets by employing the Apriori property, which reduces the search space. It aids customers in their purchases and enhances sales performance wherever it's applied.
                </p>
                <p>
                Every non-empty subset of a frequent itemset must likewise be frequent, according to the Apriori Property. The fundamental idea of this approach is the anti-monotonicity of the support measure, which assumes that all of an itemset's supersets will likewise be uncommon if the itemset is infrequent.
                </p>
            </div>

            <div>
                <h3 className="subHead">Components of Apriori algorithm</h3>
                <p>
                There are three components in the apriori algorithm.
                </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li><p>Support</p></li>
                    <li><p>Confidence</p></li>
                    <li><p>Lift</p></li>
                </ol>
                <p>
                    <b>Support :-</b> It refers to the default popularity of any product. Support refers to the frequency or occurrence of a particular itemset in a dataset. It indicates how frequently an item set appears in the entire dataset.
                </p>
                <p>Mathematically, the support of an itemset A is calculated as :-</p>
                {/* Support(A)=(Transactions containing A)/(Total number of transactions) */}
                <p>
                    For instance, if you’re analyzing purchasing data and you have an itemset &#123;milk, bread&#125;, the support of this itemset is the number of transactions where both milk and bread are bought together divided by the total number of transactions in the dataset.
                </p>
                <p>
                Support is a crucial metric in the Apriori algorithm as it helps in identifying frequent itemsets. Apriori uses support to prune the search space, focusing on itemsets that meet a specified minimum support threshold. Itemsets that do not meet this threshold are considered infrequent and are eliminated from further consideration, which helps in reducing the number of combinations to be explored, thereby improving computational efficiency in finding frequent itermsets and associations rules.
                </p>
                <p>
                <b>Confidence :–</b> It is referred as the possibility of anything bought together with other thing or things or we can say that confidence is a measure used to evaluate the strength of association between items in association rules. It represents the conditional probability that a rule is true given that its antecedent (the items on the left-hand side) is present.
                </p>
                <p>Mathematically, the confidence of a rule &#123;A&#125; -&gt; &#123;B&#125; is calculated as:</p>
                {/* <p>Confidence(A →B)=  Support(A∪B)/(Support (A))</p> */}
                <p>
                    In above equation Support(A∪B) represents the frequency of occurrence of both items A and B together in the dataset, while Support(A) denotes the frequency of occurrence of item A alone.
                </p>
                <p>
                    High confidence implies a strong association between items A and B, suggesting that if item A is present, there’s high likelihood that item B will also be present. However, it’s essential to set a threshold for confidence, as high confidence doesn’t necessarily guarantee the usefulness or significance of a rule. Adjusting the confidence threshold help in filtering out less meaningful rules and focusing on those with stronger associations.
                </p>
                <p>
                    <b>Lift :–</b> Lift is a measure used to assess the strength of association between two items in an association rule beyond what would be expected based on the individual item frequencies.
                </p>
                <p>The lift of a rule &#123;A&#125; → &#123;B&#125; is calculated as:</p>
                {/* <p>Lift(A→B)=  Support(A∪B)/(Support(A)×Support(B) )</p> */}
                <p>
                     Left measures how much more often the items A and B occur together in transactions compared to what would be expected if their occurrences were statistically independent.
                </p>
                <p>Interpretation of lift values :-</p>
                <ol>
                    <li>
                        <p>
                        <b>Lift = 1 :-</b> Indicates independence. The occurrence of A does not affect the occurrence of B, and vice versa.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Lift &gt; 1 :-</b> Indicates that the presence of A positively influences the presence of B (and vice cersa), suggesting a correlation between A and B that is higher than would be expected from random chance.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Lift &lt; 1 :-</b> Indicates that the presence of A negatively influences the presence of B (and vice versa), suggesting a negative correlation or an avoidance relationship between A and B.
                        </p>
                    </li>
                </ol>
                <p>
                    High lift values generally suggest a strong association between the items in the rule. In the context of association rule mining, lift is used alongside support and confidence to evaluate and select meaningful rules, for analysis and decision-making.
                </p>
            </div>

            <div>
                <h3 className="subHead">Steps of Apriori Algorithm</h3>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>Initialization</p>
                        <ol style={{listStyleType:"lower-alpha"}}>
                            <li>
                                <p>Identify all unique items present in the dataset.</p>
                            </li>
                            <li>
                                <p>Determine the minimum support threshold (minimum frequency) required for an itemset to be considered frequent.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Generating candidate itemsets</p>
                        <ol style={{listStyleType:"lower-alpha"}}>
                            <li>
                                <p>Create candidate itemsets of length 1 (single items) containing all unique items from the dataset.</p>
                            </li>
                            <li>
                                <p>Filter these candidates based on the minimum support threshold to obtain frequent itemssets of length 1.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Generating longer itemsets</p>
                        <ol style={{listStyleType:"lower-alpha"}}>
                            <li>
                                <p>Use the frequent itemsets of length 1 to generate candidate itemsets of length 2 (item pairs).</p>
                            </li>
                            <li>
                                <p>Prune item pairs that contain subsets that are not frequent.</p>
                            </li>
                            <li>
                                <p>Again, filter these candidates based on the minimum support threshold to obtain frequent itemsets of length 2.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Iterative process for longer itemsets</p>
                        <ol style={{listStyleType:"lower-alpha"}}>
                            <li>
                                <p>Repeat the process of generating candidate itemsets and filtering them to obtain frequent itemsets of higher lengths (length&gt;2).</p>
                            </li>
                            <li>
                                <p>b.	Each iteration involves generating candidate itemsets, pruning based on the Apriori property (eliminating subsets that are not frequent), and filtering based on the support threshold.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Association rule generation</p>
                        <ol style={{listStyleType:"lower-alpha"}}>
                            <li>
                                <p>From the frequent itemsets obtained, generate association rules.</p>
                            </li>
                            <li>
                                <p>Create rules that have both high confidence and support, reflecting strong associations between items.</p>
                            </li>
                            <li>
                                <p>Association rules are in the form of “if X then Y”, where X and Y are itemsets.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Evaluation and Pruning</p>
                        <ol style={{listStyleType:"lower-alpha"}}>
                            <li>
                                <p>Evaluate generated rules based on predefined metrics like support, confidence, and lift.</p>
                            </li>
                            <li>
                                <p>Prune rules that do not meet the minimum threshold criteria to derive meaningful and actionable rules.</p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>Repeat or Terminate</p>
                        <ol style={{listStyleType:"lower-alpha"}}>
                            <li>
                                <p>The algorithm terminates when no new frequent itemsets can be generated or when the desired itemset length is reached.</p>
                            </li>
                            <li>
                                <p>Otherwise, iterate through the process until no more frequent itemsets can be found.</p>
                            </li>
                        </ol>
                    </li>
                </ol>
                <p>Let’s look these steps with an example and in details.</p>
                <p>Let we have following dataset shown in below image and we need to find the frequent itemsets and association rules generated for them.</p>

                <table border="1">
                    <tr>
                        <th>TID</th>
                        <th>Items</th>
                    </tr>
                    <tr>
                        <td>T1</td>
                        <td>I1, I2, I5</td>
                    </tr>
                    <tr>
                        <td>T2</td>
                        <td>I2, I4</td>
                    </tr>
                    <tr>
                        <td>T3</td>
                        <td>I2, I3</td>
                    </tr>
                    <tr>
                        <td>T4</td>
                        <td>I1, I2, I4</td>
                    </tr>
                    <tr>
                        <td>T5</td>
                        <td>I1, I3</td>
                    </tr>
                    <tr>
                        <td>T6</td>
                        <td>I2, I3</td>
                    </tr>
                    <tr>
                        <td>T7</td>
                        <td>I1, I3</td>
                    </tr>
                    <tr>
                        <td>T8</td>
                        <td>I1, I2, I3, I5</td>
                    </tr>
                    <tr>
                        <td>T9</td>
                        <td>I1, I2, I3</td>
                    </tr>
                </table>

                <p>
                    In the above image we can see that minimum support count is two and minimum confidence is 60%.
                </p>
                <p>
                    <b>Step-1 :-</b> (I) that is &#119870; = 1 – in this step we create a table which have support count for each item which is present in the above table/dataset. It is called &#119862;1 (candidate set).
                </p>
                <table border="1">
                    <tr>
                        <th>Itemset</th>
                        <th>Sub_Count</th>
                    </tr>
                    <tr>
                        <td>I1</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>I2</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>I3</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>I4</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I5</td>
                        <td>2</td>
                    </tr>
                </table>
                <p>
                    (II) now we compare candidate set item’s support count with their minimum support count (in this the minimum_support) is 2, if we get support_count of any candidate set item less then the minmimum_support then we need to remove those items. Afte the process is done we get the itemset &#119871;1.
                </p>
                <table border="1">
                    <tr>
                        <th>Itemset</th>
                        <th>Sub_Count</th>
                    </tr>
                    <tr>
                        <td>I1</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>I2</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>I3</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>I4</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I5</td>
                        <td>2</td>
                    </tr>
                </table>
                <p>Step – 2 :- here &#119870; = 2</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        In this step we need to generate another candidate set &#119862;2 with the help of &#119871;1 it is called join step. There is a condition of joining the &#119871;<sub>&#119896;-1</sub> and &#119871;<sub>&#119896;-1</sub> that is they should have (&#119870;-2) elements common between them.
                        </p>
                    </li>
                    <li>
                        <p>
                        Now we need to check all the subsets of an itemset which are frequent or not. If the itemset is not frequent then we remove that itemset.
                        </p>
                    </li>
                    <li>
                        <p>
                            After that we need to find the support count of these itemsets by searching in dataset. 
                        </p>
                    </li>
                </ol>
                <table border="1">
                    <tr>
                        <th>Itemset</th>
                        <th>Sub_Count</th>
                    </tr>
                    <tr>
                        <td>I1, I2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>I1, I3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>I1, I4</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>I1, I5</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I2, I3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>I2, I4</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I2, I5</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I3, I4</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>I3, I5</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>I4, I5</td>
                        <td>0</td>
                    </tr>
                </table>
                <p>
                    (II) now we compare candidate (&#119862;2) support_count of candidate set item is less than min_support then we remove those items) the process gives us the itemset &#119871;2.
                </p>
                <table border="1">
                    <tr>
                        <th>Itemset</th>
                        <th>Sub_Count</th>
                    </tr>
                    <tr>
                        <td>I1, I2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>I1, I3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>I1, I5</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I2, I3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>I2, I4</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I2, I5</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I2, I5</td>
                        <td>2</td>
                    </tr>
                </table>
                <p>Step – 3 :- </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            In this we generate the candidate set &#119862;3 using &#119871;2 (join step). In this the condition of joining &#119871;<sub>&#119896;-1</sub> and &#119871;<sub>k-1</sub> is that they should have (&#119870;-2) elements in common. Therefore &#119871;2’s, first element should match.
                        </p>
                        <p>
                        So, the itemset generated by joining &#119871;2 is &#65371;l1, l2, l3&#65373; &#65371;l1, l2, l5&#65373; &#65371;l1, l3, l5V &#65371;l2, l3, l4&#65373; &#65371;l2, l4, l5&#65373; &#65371;l2, l3, l5&#65373;.
                        </p>
                    </li>
                    <li>
                        <p>
                            Now we check that if all subsets of these itemsets are frequent or not, if they are not frequent then remove those itemset. (With the help of above table, we can see that subset of &#65371;l1, l2, l3&#65373; are &#65371;l1, l2,&#65373;, &#123;l2, l3&#65373;, &#65371;l1, l2&#65373; which are frequent. For &#65371;l2, l3, l4&#65373; subset &#65371;l3, l4&#65373; is not frequent so remove it. We check for all itemset similarly.)
                        </p>
                    </li>
                    <li>
                        <p>
                            Now we need to find the support count of these remaining itemset by searching in dataset.
                        </p>
                    </li>
                </ol>
                <table border="1">
                    <tr>
                        <th>Itemset</th>
                        <th>Sub_Count</th>
                    </tr>
                    <tr>
                        <td>I1, I2, I3</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I1, I2, I5</td>
                        <td>2</td>
                    </tr>
                </table>
                <p>
                    (II) now we compare the candidate (&#119862;3) support count with minimum support count (in this we also have min_support = 2 if support_count of candidate set item is less than min_support we remove those items). Which gives us itemset &#119871;3.
                </p>
                <table border="1">
                    <tr>
                        <th>Itemset</th>
                        <th>Sub_Count</th>
                    </tr>
                    <tr>
                        <td>I1, I2, I3</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>I1, I2, I5</td>
                        <td>2</td>
                    </tr>
                </table>
                <p>Step – 4 :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        Now we have to generate candidate set &#119862;4 using &#119871;3 (join step). The condition for joining the &#119871;<sub>&#119896;-1</sub> and &#119871;<sub>&#119896;-1</sub> (&#119870;=4) is that, they should have (&#119896;-2) elements in common. Therefore, for &#119871;3, the first 2 elements (items) should match.
                        </p>
                    </li>
                    <li>
                        <p>
                            Now we need to check all subsets of these itemsets which are frequent or not (in this the itemset formed by joining &#119871;3 that is &#65371;l1, l2, l3, l5&#65373; its subset have &#65371;l1, l3, l5&#65373;, which is not frequent) therefore no itemset in &#119862;4.
                        </p>
                    </li>
                    <li>
                        <p>
                        We need to stop here because no frequent itemsets are found further.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Advantages of Apriori Algorithm</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Efficient for large dataset :-</b> It efficiently handles large datasets by reducing the search space for frequent itemsets using candidate generation and pruning techniques.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Identifies frequent itemset :-</b> It accurately identifies frequent itemsets based on user-defined support thresholds, helping uncover commonly occurring item combinations in the data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Simple and understandable :-</b> The algorithm’s concept and implementation are relatedly straightforward, making it scalable to distributed computing environments, which is useful for big data scenarios.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Scalable and Parallelizable :-</b> Apriori can be parallelized, and various optimizations can be applied, making it scalable to distributed computing environments, which is useful for big data scenarios.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Basis for rule generation :-</b> It serves as a foundation for generating association rules that reveal interesting and actionable patterns in the data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Flexible Thresholds :-</b> Users can set different support thresholds to discover itemsets of varying frequencies, allowing for flexibility in the exploration of different patterns within the dataset.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Applications in Various Fields :-</b> The algorithm finds applications in diverse domains such as market basket analysis, recommender systems, bioinformatics, and more, providing insights into relationships between items or events.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Association Rule Generation :-</b> It generates association rules that express correlations between items, assisting in decision-making, targeted marketing, and business strategy formulation.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of Apriori Algorithm</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        <b>Computational Complexity :-</b> For datasets with a large number of transactions or items, the apriori algorithm an become computationally expensive due to its need to generate and test a vast number of candidates itemsets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Storage and Memory Requirements :-</b> Maintaining a large number of candidates itemsets and support counts can require significant memory storage, particularly for datasets with numerous unique items.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Generation of Numerous candidate itemset :-</b> The algorithm may generate a considerable number of candidates itemsets, leading to a large search space and increased processing time, especially in cases where minimum support thresholds are low. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Apriori Property Dependency :-</b> The Apriori algorithm relies on the Apriori property (i.e., if an itemset is infrequent, its supersets will also be infrequent), resulting in multiple scans of the dataset to generate candidate items, which might be inefficient.
                        </p>
                    </li>
                    <li>
                        <p>
                       <b> Sensitive to Support Threshold :-</b> Performance may vary significantly based on the chosen minimum support threshold. Setting a lower threshold might lead to the generation of numerous frequent itemsets, while a higher threshold might result in missing some relevant patterns.
                        </p>
                    </li>
                    <li>
                        <p>
                       <b> Inefficient Handling of Large Dataset :-</b> For datasets with a high number of transactions but low-density itemsets, the algorithm might not perform optimally due to the large number of potentially infrequent itemsets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Static Threshold Settings :- </b>The need for predefined support thresholds requires prior knowledge or trail-and-error to set appropriate values, which can impact the quality and relevance of discovered itemsets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Lack of Handling Continuous variables :-</b> Apriori primarily works with categorical or binary data and may require pre-processing for continuous variables.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    The Apriori algorithm is a classic method in association rule mining used to discover frequent itemsets in datasets. It works by iteratively generating candidate itemsets, pruning those that do not meet minimum support thresholds, and gradually finding sets of items that commonly occur together. It efficiently uncovers associations between items or events, leading to the generation of meaningful associations rules. Despite its scalability challenges with large datasets and dependency on predefined support thresholds, Apriori serves as a fundamental technique for revealing interesting patterns and relationships within data.
                </p>
            </div>

            <div>
                    <h3 className="subHead">Python Code</h3>
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
                            <span className="codeKey">from</span> mlxtend.frequent_patterns  <span className="codeKey">import</span> apriori, association_rules
                            {"\n"}<span className="codeKey">from</span> sklearn.datasets  <span className="codeKey">import</span> load_iris
                            {"\n"}<span className="codeKey">import</span> pandas  <span className="codeKey">as</span> pd
                            {"\n"}<span className="codeKey">from</span> sklearn.preprocessing <span className="codeKey">import</span> KBinsDiscretizer
                            <br/>

                            {"\n"}<span className="codeComment"># Load Iris dataset</span>
                            {"\n"}iris = load_iris()
                            {"\n"}df = pd.DataFrame(iris.data, columns=iris.feature_names)
                            <br/>

                            {"\n"}<span className="codeComment"># Discretize the dataset using KBinsDiscretizer for convenience</span>
                            {"\n"}discretizer = KBinsDiscretizer(n_bins=3, encode='ordinal', strategy='uniform')
                            {"\n"}df = pd.DataFrame(discretizer.fit_transform(df), columns=iris.feature_names)
                            <br/>

                            {"\n"}<span className="codeComment"># Convert to boolean if strictly required by apriori</span>
                            {"\n"}df = df.astype(bool)
                            <br/>

                            {"\n"}<span className="codeComment">Apply Apriori algorithm to find frequent itemsets</span>
                            {"\n"}frequent_itemsets = apriori(df, min_support=0.5, use_colnames=True)
                            <br/>

                            {"\n"}<span className="codeComment">Generate association rules</span>
                            {"\n"}rules = association_rules(frequent_itemsets, metric='lift', min_threshold=1)
                            <br/>

                            {"\n"}<span className="codeComment">Display association rules </span>
                            {"\n"}print(rules)
                            <br/>

                        </code>
                    </pre>
                    </div>
                </div>


            </div>

        </div>
    );
};
export default AprioriAlgorithm;