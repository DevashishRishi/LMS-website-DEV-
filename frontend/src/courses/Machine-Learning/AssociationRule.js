import React from "react";

const AssociationRule = () => {
    return (
        <div>
            <br/>

            <div>
                <h3 className="subHead">Association Rule</h3>
                <p>
                Association rule learning falls under the realm of unsupervised learning and primarily aims to uncover meaningful connections or associations between items in a dataset. The core objective is to identify interesting relations among various variables within a database. These association rules essentially depict the frequency of occurrence of a chosen item or set of items within a transaction.
                </p>
                <p>
                Market basket analysis is a well-known application of association rule mining. This technique explores relationships among products typically bought together. Consider a trip to a supermarket where items that tend to be purchased simultaneously are strategically placed close to each other. This arrangement is based on observed purchasing patterns; it's aimed at potentially encouraging additional purchases when customers pick up one item, suggesting that they might be interested in related products.
                </p>
                <p>
                The significance of association rule mining extends beyond retail settings. It finds applications in diverse fields like web usage mining, continuous production, and more. Essentially, it's utilized to unveil correlations and patterns in various datasets, enabling businesses and analysts to make informed decisions based on observed associations among items or variables.
                </p>
            </div>

            <div>
                <h3 className="subHead">Types of Association rule algorithm</h3>
                <ol style={{listStyleType:"decimal"}}>
                    <li><p>Apriori</p></li>
                    <li><p>Eclat</p></li>
                    <li><p>F-P Growth Algorithm</p></li>
                </ol>
                <p>
                        The Apriori algorithm operates on transactional databases to derive association rules from frequent datasets. It efficiently computes itemsets through breadth-first search and Hash trees. Its primary application lies in market basket analysis, although it's also applicable in fields like healthcare for discerning drug reactions among patients.
                </p>
                <p>
                Eclat, short for Equivalence Class Transformation, utilizes depth-first search to uncover frequent item sets in transaction databases. Notably, it offers faster performance compared to the Apriori algorithm.
                </p>
                <p>
                The F-P Growth algorithm, where F-P stands for frequent pattern, serves as an improved iteration of the Apriori algorithm. It organizes the database into a tree structure termed a frequent pattern tree, aiming to extract the most prevalent patterns within the data.
                </p>
            </div>

            <div>
                <h3 className="subHead">Working of Association rule</h3>
                <p>
                First, we need to know that basic definitions before we start defining the rule.
                </p>
                <p>
                <b>Support count (σ)  :-</b> It is the frequency of occurrence of an itemset.
                </p>
                <p><b>Frequent itemset :–</b> It is an itemset whose support is greater than or equal to minsup threshold.</p>
                <p>
                <b>Association rule :–</b> An implication expression of the form X -> Y, where X and Y are any 2 item sets.
                </p>
            </div>

            <div>
                <h3 className="subHead">Rule Evaluation Metrics</h3>
                <p>
                Support refers to the count of transactions containing items within both the &#119883; and &#119884; segments of rules, expressed as a percentage of the overall number of transactions. This metric gauges the frequency of occurrence of a set of items together as a percentage of the entire transaction volume.
                </p>
                <span className="formula">Support (σ)=(&#119883; + &#119884;) / total</span>
                <p>It is interpreted as fraction of transactions that contain both &#119883; and &#119884;.</p>
                <p>
                Confidence (&#119862;) :– Confidence measures the robustness of the relationship between two items. It's computed by dividing the number of transactions containing all items in set &#123;B&#125; by the number of transactions containing all items in set &#123;A&#125;.
                </p>
                <span className="formula">Conf(&#119883; =&gt; &#119884;)Supp(&#119883; ∪ &#119884;) / Supp(&#119883;)</span>
                <p>
                    The above equation measures how often each item in Y appears in transactions that contains items in &#119883; also.
                </p>
                <p>
                    Lift (&#119871;) :– Lift serves as a gauge of the association's strength between two items, considering the frequency of both items in the dataset. For the rule &#119883; =&gt; &#119884;, lift is determined by dividing the confidence of the rule by the anticipated confidence, assuming independence between item sets &#119883; and &#119884;. This anticipated confidence is calculated by dividing the confidence by the frequency of &#123;&#119884;&#125;.
                </p>
                {/* lift(X=>Y)=Conf(X=>Y)/(Supp(Y)) */}
                <p>
                That's a good summary! When the lift value is around 1, it suggests that X and Y generally appear together as expected. A lift greater than 1 signifies that their co-occurrence is more frequent than anticipated, while a value less than 1 indicates a lower than expected co-occurrence. Higher lift values denote a stronger association between the items.
                </p>
            </div>

            <div>
                <h3 className="subHead">Applications of Association Rule Learning</h3>
                <p>
                The association rule has quite a few applications in machine learning. Below are the some most popular application of it :-
                </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            <b>Market Basket Analysis :-</b> It is one of the most popular examples of the application of association rule mining. It is most widely used by big retailers worldwide to know or get the association between items. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Medical Diagnosis :-</b> It can help to cure the disease of a patient because it can help to identify the probability of illness for a particular disease.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Protein Sequnce :-</b> It can also help to determine the synthesis of artificial proteins.
                        </p>
                    </li>
                    <li>
                        <p>
                            We can also use it for catalog design and loss-leader analysis and many more other applications.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Advantages of Association Rule Mining</h3>
                <ol style={{listStyleType:"disc"}}>
                  <li>
                        <p>
                        <b>Insight into relationship :-</b> It reveals hidden patterns, dependencies, and associations among items or variables in large datasets, providing valuable insights into consumer behavior, market basket analysis, and more.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Simple and Interpretable rules :-</b> Association rules are easy to understand and interpret, making them accessible for non-technical users to derive actionable insights.
                        </p>
                    </li>
                    <li>
                        <p>
                       <b> Identification of co-occurring items :-</b> it efficiently discovers co-occurring items or events, aiding in recommendations and cross-selling strategies in retail, e-commerce, and various domains.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b> Identification of co-occurring items :-</b>helps in decision-making processes by providing information on item correlations, allowing for targeted marketing strategies or inventory management.
                        </p>
                    </li><li>
                        <p>
                        <b>Scalability :-</b> algorithms like Apriori and FP-Growth are scalable and can handle large datasets, making associations rule mining applicable in big data environments.
                        </p>
                    </li>
                    <li>
                        <p>
                        Flexibility in application: it’s versatile and applicable in diverse fields such as healthcare, finance, telecommunications, and more, offering insights into different types of associations within data sets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Scalability:- </b> Association rule mining serves as a foundation for more complex data mining techniques and can aid in feature selection or dimensionality reduction for machine learning tasks.
                        </p>
                    </li>
                    <li>
                        <p>
                       <b> Extraction of actionable patterns :-</b> enables the extraction of actionable patterns, help businesses optimize processes, improve sales strategies, or enhance customer experiences.
                        </p>
                    </li>
                </ol>

            </div>

            <div>
            <h3 className="subHead">Disadvantages of Association Rule Mining</h3>
                    <ol style={{listStyleType:"disc"}}>
                        <li>
                            <p>
                            <b>High Computational Complexity :-</b> Generating rules for large datasets can be computationally expensive, especially when dealing with a high number of transactions or items. This complexity can limit its scalability.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Generation of Numerous Rules :-</b> The algorithm can produce a vast number of rules, including many that might be trivial, redundant, or not actionable. Sorting through this volume to find meaningful associations can be challenging.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Handling of Noise and Spurious Correlations :-</b> Association rule mining might pick up spurious correlations or associations caused by noise or rare events, leading to unreliable or misleading rules.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Dependency on Threshold Settings :-</b> The quality and relevance of the rules heavily depend on the thresholds set for support and confidence. Determining these thresholds can be subjective and may impact the usefulness of the discovered rules.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Inability to Handle Continuous Variables :-</b> Association rule mining typically works with categorical or binary data, making it less suitable for continuous variables without preprocessing.
                            </p>
                        </li>
                        <li>
                            <p>
                           <b> Limited to binary relationships :-</b> It primarily discovers binary associations between items or features, potentially missing more complex relationships or interactions between multiple variables.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Assumptions of independence :-</b> Association rule mining assumes independence between items, which might not hold in all cases, particularly when dealing with sequential or time-related data.
                            </p>
                        </li>
                        <li>
                            <p>
                            <b>Contextual information exclusion :-</b> It might not consider contextual information or temporal relationships between items, limiting its applicability in certain scenarios. 
                            </p>
                        </li>
                        
                    </ol>

            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                Association rule mining is a data mining technique used to discover hidden patterns, correlations and relationships within large datasets. It identifies associations between items or variables, often used in market basket analysis, recommendation systems, and various domains. The method generates rules (that is if -then statements) that show the co-occurrence or dependency between items in the data. While it offers insights into item associations and supports decision-making processes, it has limitations such as computational complexity, generation of numbers rules, susceptibility to noise, and assumptions of independence between items. Despite these limitations, association rule mining remains valuable for uncovering valuable associations within datasets, aiding in business strategies, and providing insights into consumer behavior.
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
                            {"\n"}<span className="codeKey">import</span> matplotlib.pyplot  <span className="codeKey">as</span> plt
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

                            {"\n"}<span className="codeComment"># If apriori strictly requires boolean values:</span>
                            {"\n"}df = df.astype(bool)
                            <br/>

                            {"\n"}<span className="codeComment">Apply Apriori algorithm to find frequent itemsets </span>
                            {"\n"}frequent_itemsets = apriori(df, min_support=0.5, use_colnames=True)
                            <br/>

                            {"\n"}<span className="codeComment">Generate association rules </span>
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
export default AssociationRule;