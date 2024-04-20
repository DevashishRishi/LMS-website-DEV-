import React from "react";
import Figure1 from "../../assests/CourseImages/MachineLearning/RandomForest/Figure1.png";
import Figure2 from "../../assests/CourseImages/MachineLearning/RandomForest/Figure2.png";

const RandomForest = () => {
    return(
        <div>
            <br/>

            <div>
                <h3 className="subHead">Random Forest</h3>
                <p>
                    Random forest stands as a well-known supervised machine learning algorithm capable of addressing both classification and regression problems within ML. Operating on ensemble learning principles, it leverages the collective intelligence of multiple classifiers to tackle intricate problems. This method harnesses the strengths of various models, improving the overall performance of the learning system.
                </p>

                <p>
                    By amalgamating predictions from multiple decision trees, random forest effectively mitigates overfitting while enhancing accuracy. Individual decision trees inherently possess high variance. However, when these trees are integrated into a random forest in parallel, the resulting variance diminishes. This reduction occurs because each decision tree is trained on a specific sample of data, ensuring that the output relies not on a single tree but on multiple trees, thereby lowering the overall variance.
                </p>

                <p>
                    In random forest models, higher numbers of trees correspond to increased accuracy while concurrently preventing overfitting tendencies, establishing a robust and more reliable model.
                </p>

                <div className="figure-container">
                    <img src={Figure1} alt="Working of the Random Forest Algorithm" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">Types of Ensemble Methods</h3>
                <p>
                    There are many types of ensembles learning methods; they are :-
                </p>

                <p>
                    <b>Bagging (Bootstrap Aggregating) :–</b> In this method the training is done with multiple models on random subsets of the training data. After that the predictions from every model are combined, mainly by averaging.
                </p>

                <p>
                    <b>Boosting :–</b> It like sequence of model that is in the method the training is done in a sequence of models, in which each subsequent model focuses on the errors made by the previous model. In this method the prediction is combined by using the weighted voting scheme.
                </p>

                <p>
                <b>Stacking :–</b> In this method the prediction form one of the models is used as the features for another model. The final prediction is made by the second-level model.
                </p>
            </div>

            <div>
                <h3 className="subHead">Assumptions of Random Forest</h3>
                <p>
                    The random forest combines multiple decision tress so it can predict the class of the dataset, in this process it is possible that some decision may predict the right output and other may not predict the correct output. But in larger scale all the tress will predict the correct output. Lets’ look at two assumptions of Random Forest classifier :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            There must be some actual values in the feature variable of the dataset so that the classifier can predict accurate results rather than a guessed result.
                        </p>
                    </li>
                    <li>
                        <p>
                            The predictions from each tree must have low correlations.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Why should we use Random Forest ?</h3>
                <p>Below there are some reasons or point which explain why we should use Random Forest algorithm :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            It takes less time to training when it compares to other algorithms.
                        </p>
                    </li>
                    <li>
                        <p>
                            Its accuracy for prediction is really high, and also with large dataset it runs efficiently.
                        </p>
                    </li>
                    <li>
                        <p>
                            It can also maintain accuracy when a large proportion of data is missing.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Random Forest Algorithm working</h3>
                <p>
                    Random forest works in two-phase in first phase we need to combine the N decision tree, and in second phase the predictions for each tree created in the first phase is made. Let’s look at working process of random forest algorithm step-by-step.
                </p>

                <ol>
                    <li>
                        <p>
                            Step 1 :– Select the random K data points from the training set.
                        </p>
                    </li>
                    <li>
                        <p>
                            Step 2 :– Build the decision trees associated with the selected data points (subsets).
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 3 :– Choose the number N for decision trees that we want to build
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 4 :– Repeat step 1 & 2 
                        </p>
                    </li>
                    <li>
                        <p>
                        Step 5 :– For new data points, find the predictions of each decision tree, and assign the new data points to the category that wins the majority votes.
                        </p>
                    </li>
                </ol>

                <p>
                    To understand the working algorithm much better let’s look at one example. 
                </p>

                <p>
                    Let's say we have a dataset with lots of pictures of fruit in it. We now feed these photos to the random forest classifier method for the machine learning model. Following the dataset's input, the algorithm separates the data into subsets, which it then feeds to each decision tree. Every decision tree generates a prediction result during the training phase. The Random Forest classifier then predicts the outcome based on the majority of results when we add new data to the model. This is an illustration of how the algorithm should look like this. 
                </p>

                <div className="figure-container">
                    <img src={Figure2} alt="Working of the Random Forest Algorithm" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">Applications of Random Forest</h3>
                <p>
                    Let’s look at some applications of random forest where it mostly used :-
                </p>

                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Banking :–</b> It is used in banking sector very much especially in the section of loan to check and identify the risk associated to it.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Medicine :–</b> With the help of this algorithm, disease trends and risks of the disease can be identified.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Land Use :–</b> With the help of this algorithm we can identify the areas which have similar land.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Marking :–</b> Marking trends can be identified using this algorithm.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Predicting continuous Numerical Values :–</b> It can use to predict different numerical values like house prices, stock prices, or customer lifetime value.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Identifying Risk Factors :–</b> It can also detect the risk of factors for diseases, financial crises, or other negative events. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Handling High-Dimensional Data –</b> Because it uses decision trees inside it therefore it can analyze datasets which have large number of input features.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Capturing Complex Relationships :–</b> It can model complex relationships between input features and the target variables.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">What is Random Forest Regression ?</h3>
                <p>
                    Random forest regression, a technique in machine learning, leverages ensemble methods capable of handling both classification and regression tasks. It achieves this by employing multiple decision trees and a method known as Bootstrap Aggregation or "bagging." The fundamental concept underlying random forest involves amalgamating numerous decision trees to derive the final output instead of relying on individual trees.
                </p>

                <p>
                    One important feature of random forests is the use of many decision trees, each of which stands for a learning model. As part of the Bootstrap methodology, sample datasets are created for each model by randomly selecting rows and features from the dataset. Predicting outcomes using the Random Forest regression technique involves following the typical procedures akin to other machine learning methodologies.
                </p>

                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            First, we need to design a specific question or data and get the source to determine the required data.
                        </p>
                    </li>
                    <li>
                        <p>
                            We need to convert the data into accessible format if it is not. 
                        </p>
                    </li>
                    <li>
                        <p>
                            We need to specify all the noticeable anomalies and missing data points which may be necessary to require in the data.
                        </p>
                    </li>
                    <li>
                        <p>
                            Now we need to create a machine-learning model.
                        </p>
                    </li>
                    <li>
                        <p>
                            For machine learning to work properly we need to establish baseline model that we want to achieve.
                        </p>
                    </li>
                    <li>
                        <p>
                            After that we need to train the data machine learning model.
                        </p>
                    </li>
                    <li>
                        <p>
                            After training is done, we need to check its performance in unseen data or test data.
                        </p>
                    </li>
                    <li>
                        <p>
                            After that we need to compare the performance metrics of both the test data and the predicted data from the model.
                        </p>
                    </li>
                    <li>
                        <p>
                            If the model’s performance does not achieve our expectation, we can try to improve it using tuning the hyperparameters or modeling the data with other techniques.
                        </p>
                    </li>
                    <li>
                        <p>
                            At last, we interpret the data we have gained and report accordingly.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Out of bag score in Random Forest</h3>

                <p>
                    The Out-of-Bag (OOB) score, also known as the Bag score, serves as a validation technique predominantly employed in bagging algorithms to assess their performance. This method involves extracting a small portion of validation data from the main dataset. Predictions are made on this specific validation subset, and the outcomes are subsequently compared with other results.
                </p>

                <p>
                    The key advantage of the OOB score lies in the fact that the validation data remains unseen by the bagging algorithm. Consequently, the results obtained from the OOB score reflect the genuine performance of the bagging algorithm.
                </p>

                <p>
                    To obtain the OOB score for a specific Random Forest algorithm, it's essential to enable the "True" value for the OOB_Score parameter within the algorithm settings. This ensures the algorithm generates and utilizes the OOB score to gauge its effectiveness accurately.
                </p>
            </div>

            <div>
                <h3 className="subHead">Advantages of Random Forest Regression</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            We can easily use and it is less sensitive towards the training data compared to the decision tree.  
                        </p>
                    </li>
                    <li>
                        <p>
                            It is more accurate as compare to decision tree because it uses multiple decision trees inside it.
                        </p>
                    </li>
                    <li>
                        <p>
                            It can easily handle large and complex dataset which have many features.
                        </p>
                    </li>
                    <li>
                        <p>
                            It can also easily handle missing data, outliers and noisy features. 
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of Random Forest Regression</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            It can difficult to interpret.
                        </p>
                    </li>
                    <li>
                        <p>
                            It may require some domain expert to implement it properly like fixing or choosing correct or appropriate parameters like number of decision trees, the maximum depth of each tree, and the number of features to consider at each split.
                        </p>
                    </li>
                    <li>
                        <p>
                            It can be computationally expensive when we are dealing with large dataset.
                        </p>
                    </li>
                    <li>
                        <p>
                            It can also suffer with overfitting if the model is tool complex or the number of decision trees is too high.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    Random forest regression is a powerful tool for continuous and classification type prediction problems, it has advantages over traditional decision trees. It has capability to handle high-dimensional data, capture complex relationships, and reduce overfitting has made it one of the popular choices for using it in variety of problems and applications. In this each tree which is present inside its “votes” for most popular class (classification) or provide a prediction (regression). It can also be prune to overfitting when we use it with very deep random forest or very large and complex datasets. It might have lower interpretability compare to a single Decision tree.
                </p>
            </div>

            <div>
                <h3 className="subHead">Python Code</h3>

                <div>
                    <h5 className="subHead">For Classification Task</h5>
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
                            {"\n"}<span className="codeKey">from</span> sklearn.ensemble <span className="codeKey">import</span> RandomForestClassifier
                            {"\n"}<span className="codeKey">from</span> sklearn.metrics  <span className="codeKey">import</span> accuracy_score
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

                            {"\n"}<span className="codeComment"># Split the dataset into training and testing sets</span>
                            {"\n"}X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
                            <br/>

                            {"\n"}<span className="codeComment"># Create Random Forest Classifier</span>
                            {"\n"}clf = RandomForestClassifier(n_estimators=100, random_state=42)
                            <br/>

                            {"\n"}<span className="codeComment"># Train the classifier</span>
                            {"\n"}clf.fit(X_train, y_train)
                            <br/>

                            {"\n"}<span className="codeComment"># Make predictions for test data</span>
                            {"\n"}clf.fit(X_train, y_train)
                            <br/>

                            {"\n"}<span className="codeComment"># Evaluate accuracy</span>
                            {"\n"}accuracy = accuracy_score(y_test, y_pred)
                            {"\n"}print(f"Random Forest Classifier Accuracy: &#x7B;accuracy&#x7D;")
                            <br/>
                        </code>
                    </pre>
                    </div>
                    </div>
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
                            {"\n"}<span className="codeKey">from</span> sklearn.ensemble <span className="codeKey">import</span> RandomForestregressor
                            {"\n"}<span className="codeKey">from</span> sklearn.metrics  <span className="codeKey">import</span> mean_squared_error
                            <br/>

                            {"\n"}<span className="codeComment"># Load the Diabetes dataset (regression)</span>
                            {"\n"}diabetes = load_diabetes()
                            {"\n"}X = diabetes.data
                            {"\n"}y = diabetes.target
                            <br/>

                            {"\n"}<span className="codeComment"># Split the dataset into training and testing sets</span>
                            {"\n"}X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
                            <br/>

                            {"\n"}<span className="codeComment"># Create Random Forest Regressor</span>
                            {"\n"}reg = RandomForestRegressor(n_estimators=100, random_state=42)
                            <br/>

                            {"\n"}<span className="codeComment"># Train the classifier</span>
                            {"\n"}reg.fit(X_train, y_train)
                            <br/>

                            {"\n"}<span className="codeComment"># Make predictions for test data</span>
                            {"\n"}y_pred = reg.predict(X_test)
                            <br/>

                            {"\n"}<span className="codeComment"># Evaluate using Mean Squared Error (MSE) for test data</span>
                            {"\n"}mse = mean_squared_error(y_test, y_pred)
                            {"\n"}print(f"Random Forest Regressor MSE: &#x7B;mse&#x7D;")
                            <br/>
                        </code>
                    </pre>
                    </div>
                    </div>
                </div>    
      </div>

        </div>
    );
};
export default RandomForest;