import React from "react";
import MachineLearningApproach from "../../assests/CourseImages/MachineLearning/Introduction/MachineLearningApproach.png";
import TraditionalApproach from "../../assests/CourseImages/MachineLearning/Introduction/TraditionalApproach.png";
const Introduction = () => {
    return(
        <div>
            <br/>
            <div>
                <h3 className="subHead"> Introduction</h3>
                <p>
                     When we think about machine learning we many times think of situations like those described in The Terminator movie in which machine starts to think on their own like humans and start a war against humanity, but things like this are still far away from reality because till now machines can only do one task at a time with precision even when they are trained on similar data or situation for long time or with many data. Therefore, when we think about machine learning we think that machines can think or be able to learn by themselves which is not fully true. Machine learning is a subfield of artificial intelligence we can say that artificial is a superset then machine learning is only a part or subset of machine learning but we often discuss them together. It allows the systems or computers to automatically learn from already available data. To do this machine learning uses various algorithms and mathematical formulas. In this, we will look at what is machine learning and its types and learn about them. 
                </p>
            <br/>
            
            </div>

            <div>
                <h3 className="subHead">First, we need to know what is machine learning.</h3>
                <p>
                    Machine learning is a field of computer science that allows computers the ability to which they can learn without being programmed heavily before. It tries to make computers act like or behave similarly to humans which is the ability to learn. It is very extensively used in today’s world. The term machine learning has been available since around 1959 when it was first used by Arthur Samuel. 
                    <br/>
                    Machine learning is the science or we also can say the art of programming computers which makes them learn from data. The more general definition would be: that machine learning is the field of study that gives computers the ability to learn without being explicitly programmed (Arthur Samuel; 1959). For a more engineering-oriented definition, we can say that: -<b>A computer program is said to learn from experience E concerning some task T and some performance measure P, if its performance on T, as measured by P, improves with experience E</b> (Tom Mitchell, 1977).
                </p>
            </div>
            <br/>
            
            <div>
                <h3 className="subHead">How does machine learning work?</h3>
                <p>
                     Mainly machine learning models try to predict the results, for doing prediction it first trains on previous data and learns from it then tries to predict the new outcome for new unseen data. The more the amount of data the better the model predicts generally, that is the models’ accuracy increases. By hard coding the problem we might face many challenges like it is a very complex task and also if we need to update the code then we need to go through all the written code for updating it which is costly and time-consuming. In machine learning instead of writing code, we just need to feed the data into the model’s algorithms, which automatically builds the logic based on the data and predicts the output. With this process, we can easily update the model with new data when we need to update the model.
                </p>
                <div className="image-container">
                    <img src={MachineLearningApproach} alt="Machine Learning Approach" />
                </div>
                <br/>
                <div className="image-container">
                    <img src={TraditionalApproach} alt="Traditional Approach" />
                </div>
            </div>
            <br/>

            <div>
            <h3 className="subHead">Why we should use machine learning?</h3>
            <p>
            We should use machine learning because it reduces the time and cost of tasks that previously took many lines of code and lots of effort. For example, now our email filters can filter ham and spam mail without our guidance which is possible because of machine learning if we try to do this task using the traditional coding approach it would take lots of time and hard coding even after that if the type of spam arrived we need to update the code manually which is a very difficult task and therefore if we use machine learning we can do this much easily and also for a new type of spam we need to just train our model with a new type of data which have these type of spam mails. This is only one example of why we should use machine learning there are countless options or applications available where we use machine learning or we might be able to use them in the future. Below are some key points that show the importance of Machine learning :- 
            </p>
            <br/>
                <div className="numbered_list">
                <ol className="listItem" style={{"listStyleType": "decimal"}}>
                    <li>
                        <p>Instant increment in the production of data.</p>
                    </li>
                    <li>
                        <p>Solving complex problems, which are difficult for humans like finding patterns in a dataset which have 1000 features.</p>
                    </li>
                    <li>
                        <p>Ability to decide on many sectors like finance, fraud, and anomaly detection.</p>
                    </li>
                    <li>
                        <p>Finding hidden patterns and extracting useful information from data.</p>
                    </li>
                </ol>
                </div>
            </div>
            <br/>

            <div>
            <h3 className="subHead">Examples of machine learning applications</h3>
            <div className="numbered_list">
                <ol className="listItem" style={{"listStyleType":"decimal"}}>
                    <li>
                        <p>Analyzing the image of the product on a production line to automatically classify them and detect the defective product. It is an example of anomaly detection as also can use image classification.</p>
                    </li>
                    <li>
                        <p>Detecting tumors in brain scans. It is an example of semantic segmentation in which every pixel of an image (or perhaps a medical image) is classified.</p>
                    </li>
                    <li>
                        <p>Automatically classify new articles. It is a natural language process (NLP), in which it can further be classified as a text classifier it can use recurrent neural networks or transformers.</p>
                    </li>
                    <li>
                        <p>Automatically flag offensive comments on discussion forums. It also uses text classification using NLP tools.</p> 
                    </li>
                    <li>
                        <p>Summarizing long documents automatically. It is also a subset of NLP which uses text summarization.</p> 
                    </li>
                    <li>
                        <p>Building a personal assistant or chatbot. It involves a number of NLP components, such as question-answering modules and natural language understanding (NLU).</p>
                    </li>
                    <li>
                        <p>Forecasting your company’s revenue next year, based on many performance metrics. It uses many different regression algorithms like linear regression, polynomial regression model, etc.</p>
                    </li>
                    <li>
                        <p>Make your app to react to voice commands. It is a speech recognition, which requires processing audio samples; because they are long and complex sequences, they mainly process RNNs, CNNs, or Transformers</p>
                    </li>
                    <li>
                        <p>Detecting credit card fraud. It is an example of anomaly detection.</p>
                    </li>
                </ol>
                <p>There are many more examples of machine learning in daily life usage. </p>
            </div>
            </div>
            <br/>

            <div>
                 <h3 className="subHead">Features of Machine Learning</h3>
                 <ol className="listItem" style={{listStyleType:"disc"}}>
                    <li>
                        <p>The certain growth in production data, because machine learning is a data-driven technology, large amount of data is generated by companies daily. The relationships between data and organization lead to better decisions.</p>
                    </li>
                    <li>
                        <p>It can learn from past data and improve its performance accordingly.</p>
                    </li>
                    <li>
                        <p>It can detect many or different patterns from data.</p> 
                    </li>
                    <li>
                        <p>It is data-driven technology.</p>
                    </li>
                    <li>
                        <p>It is very much similar to data mining because it can deal with huge amounts of data.</p>
                    </li>
                 </ol>
            </div>

            <div>
                <h3 className="subHead">Machine Learning Lifecycle</h3>
                <p>
                    The Machine learning lifecycle involves a series of steps which are :-
                </p>
                <p>
                    <b>Understanding the problem :–</b> It is the first step of the machine-learning process. In this process, we first try to understand the business problem and define its objective which is what the model must do.
                </p>
                <p>
                    <b>Data Collection :–</b> After the problem is defined, we need to collect the relevant data that we need to build the model. These datasets may come from various sources like databases, sensors, APIs, or web scraping.
                </p>
                <p>
                        <b>Data Preparation :–</b> Only collecting data will not help to make the machine learning model work properly that is when our data is collected it is necessary to check that is, is the data is proper and then convert it into the desired format so we can able to use it in machine learning model and the model will able to find the hidden patterns. This process has its small sub-processes these are :-
                        <br/>
                        <ol style={{listStyleType:'disc'}}>
                            <li><p>Data Cleaning</p></li>
                            <li><p>Data Transformation</p></li>
                            <li><p>Explanatory data analysis and feature engineering</p></li>
                            <li><p>Split the dataset for training and testing</p></li>
                        </ol>
                </p>
                <p>
                    <b>Model Selection :–</b> After clearing the data we now need to select the proper machine learning algorithm for our problem. To select the correct model, we must know the strengths and weaknesses of different algorithms. Many times, we need to use multiple models compare their results, and select the best algorithm among them for our requirements. 
                </p>
                <p>
                <b>Model Building and Training :–</b> When we select the proper algorithm for our model we need to build the model. It can be done using below three methods :-
                <br/>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>
                            In the traditional machine learning building approach, we just need to fine-tune some hyperparameter tunings.
                        </p>
                    </li>
                    <li>
                        <p>
                        In deep learning we need to first define the layer-wise architecture which includes input and output size, number of nodes in each layer, loss function, gradient descent optimizer, etc. 
                        </p>
                    </li>
                    <li>
                        <p>
                            At last, after the model is trained using the preprocessed dataset.
                        </p>
                    </li>
                </ol>
                </p>

                <p>
                <b>Model Evaluation :–</b> After the training is done, we can evaluate the models’ performance on the test dataset which helps to determine the accuracy and performance using different techniques like classification report, F1 score, precision, recall, ROC Curve, Mean Square error, absolute error, etc.
                </p>

                <p>
                    <b>Model Tuning :–</b> After the training and testing are done, we have the results of the model on the unseen dataset, now we might need to tune or optimize the algorithms’ hyperparameter so we can get the optimized result or performance. 
                </p>

                <p>
                    <b>Deployment :–</b> After the model is fine-tuned and we are satisfied with its performance we can deploy it on a production environment in which it now makes predictions on new unseen data. This step includes integrating the model into an existing software system or creating a new system for the model.
                </p>

                <p>
                    <b>Monitoring and Maintenance :–</b> Following deployment, it's critical to track the model's performance over time, keep an eye on the dataset in the production environment, and do any necessary maintenance. In this process, the model is updated if new data become available, retrained as necessary, and data drift is monitored for.
                </p>
            </div>

            <div>
                <h3 className="subHead">Main Challenges of Machine Learning</h3>
                <p>
                    The two things that go wrong with machine learning are “bad algorithms” and “bad data. Let's look at different aspects of both of these.
                </p>
                
                <p>
                    <b>Insufficient Quantity of Training Data :–</b> To make a machine learning model able to differentiate between an apple and a ball takes lots of data then the model’s algorithm can work properly. So we can say that for doing or solving very simple problems we mainly need thousands of examples, and for complex problems like speech recognition we may need millions of data or examples to make the model learn and perform well. Till now there are many fields in which we have limited or quite less or unexplored data which might not be able to create up-to-the-mark machine learning models.
                </p>

                <p>
                    <b>Nonrepresentative Training Data :–</b> The generalization of the data is very important whether we are using instance-based learning or model-based learning. It is important to generalize data well, and also crucial that our training data is representative of the new cases. If the new data is not representative or does not generalize well then, the model does not understand the data very well and may not be able to predict or give us the result.
                </p>

                <p>
                <b>Poor-Quality Data :–</b> If we train our model with training data that have plenty of errors, outliers, and noise, it will make the model harder to detect patterns inside the data or understand the data, as a result, our system or model performs less well. It is important to give effort and time to clean the training data for better performance of the model.
                </p>

                <p>
                    <b>Irrelevant Features :–</b> There is a very famous quote in machine learning and data science that is “garbage in garbage out” Our model performs well only we it is trained with data that have enough relevant features and not too many irrelevant ones. An important part of a successful machine learning project is to come up with a good set of features to train the model. This process is called “feature engineering” and it involves the following steps: - feature selection, feature extraction, and creating new features by gathering new data.
                </p>

                <p>
                    <b>Overfitting the Training Data :–</b> Overgeneralization is also bad for computer models or machine learning models. Overfitting means that our model generalizes too well with training data therefore it tries to understand or take outliers or noise in the training and learn them also as a feature as a result it performs very well with training data but when it faces unseen or test data it does not perform well because it also captures noise or outliers during training.
                </p>

                <p>
                    <b>Underfitting the training data :–</b> It's just the opposite of overfitting, thus the model does not generalize well with training data as a result it is not able to capture important features from the training data which leads to poor performance in training as well as in testing the model. In other words, we can say that underfitting the model is too simple to learn the underlying structure of the data.
                </p>

                <p>
                There are some other limitations also in machine learning like – it needs to have heterogeneity to learn meaningful insight. In it, an algorithm can rarely get information when there are no or few variations. For building and training the model it is recommended to have at least 20 observations per group to help the machine learn. It is useless until it is trained on training data means if we don’t have to train then it is no use. One of the main challenges of machine learning is the lack of data or its less diversity.
                </p>
            </div>
        </div>

    );
};
export default Introduction;