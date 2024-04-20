import React from "react";

const MachineLearningTypes = () => {
  return (
    <div>
      <br />
      <div>
        <h3 className="subHead">Machine Learning Types</h3>
        <p>
           There are different classifications of machine learning but at the broader level we can classify them into four types:-
        </p>
        <ol className="unoredered_list" style={{listStyleType:"disc"}}>
          <li>
            <p>Supervised Learning</p>
          </li>
          <li>
            <p>Unsupervised Learning</p>
          </li>
          <li>
            <p>Reinforcement Learning</p>
          </li>
          <li>
            <p>Semi-supervised Learning</p>
          </li>
        </ol>
      </div>
      <br/>

      <div id="supervisedLearning">
        <h3 className="subHead">Supervised Learning </h3>
        <p>
          In this, the training set we feed to the algorithm has solutions also has solutions called labels. We can also say that in supervised learning labeled datasets are given to the machine learning system for training, and after the training, the system can predict the results or outcomes. 
        </p>
        <table border="1">
          <tr>
            <th>Gender</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Label</th>
          </tr>
          <tr>
            <td>M</td>
            <td>47</td>
            <td>68</td>
            <td>Sick</td>
          </tr>
          <tr>
            <td>M</td>
            <td>68</td>
            <td>70</td>
            <td>Sick</td>
          </tr>
          <tr>
            <td>F</td>
            <td>58</td>
            <td>56</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>M</td>
            <td>49</td>
            <td>67</td>
            <td>Sick</td>
          </tr>
          <tr>
            <td>F</td>
            <td>32</td>
            <td>60</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>M</td>
            <td>34</td>
            <td>65</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>M</td>
            <td>21</td>
            <td>74</td>
            <td>Healthy</td>
          </tr>
        </table>
        <p>
          In above table contains the patient’s information in which we have labeled data set which is also called label in this and have two options Sick and Healthy. 
        </p>
        <div>
          <p>
              Very basic supervised learning can be divided into 2 sub-classes called ‘classification’ and ‘regression’. One good example of classification is filtering spam and spam emails. In this supervised learning model, we first trained the model with many example emails with their class which makes the model learn how to classify new emails. Another typical task is to predict the continuous values like the price of a car, house, or stock price prediction. Here are some most common supervised learning algorithms :-
          </p>
            <ol className="unordered_list" style={{listStyleType:"disc"}}>
            <li>
              <p>K-Nearest Neighbors</p>
            </li>
            <li>
              <p>Linear Regression</p>
            </li>
            <li>
              <p>Logistic Regression</p>
            </li>
            <li>
              <p>Support Vector Machines</p>
            </li>
            <li>
              <p>Decision Trees and Random Forests</p>
            </li>
            <li>
              <p>Neural Networks.</p>
            </li>

          </ol>
        </div>
      </div>
      <br/>

      <div id="UnsupervisedLearning ">
        <h3 className="subHead">Unsupervised Learning</h3>
        <p>
            In this process, we have a dataset but don’t have the labels that is we have unlabeled data. In its algorithms, classification or categorization is not added. We can also say that in unsupervised learning the machine tries to learn from itself without the help of supervision. In this, the machine tries to find useful insights or patterns from the data. Many recommendation systems are used to recommend movies and songs, next purchases are based on unsupervised learning. Clustering is also a good example of unsupervised learning. In this, we can say that the machine uses information that does not have labels or classifiers to allow it to act on that guidance or categories. In this, the main goal of the machine is to group the unsorted information according to similarities, patterns, and differences without any prior training of data.
          </p>
          <table border="1">
            <tr>
                <th>Gender</th>
                <th>Age</th>
                <th>Weight</th>
                </tr>
            <tr>
                <td>M</td>
                <td>47</td>
                <td>68</td>
            </tr>
           <tr>
                <td>M</td>
                <td>68</td>
                <td>70</td>
            </tr>
            <tr>
                <td>F</td>
                <td>58</td>
                <td>56</td> 
            </tr>
            <tr>
                <td>M</td>
                <td>49</td>
                <td>67</td>
            </tr>
            <tr>
                <td>F</td>
                <td>32</td>
                <td>60</td>   
            </tr>
            <tr>
                <td>M</td>
                <td>34</td>
                <td>65</td>    
            </tr>
            <tr>
                <td>M</td>
                <td>21</td>
                <td>74</td>
            </tr>
        </table>
        <br/>

        <ol className="unordered_number" style={{listStyleType:"disc"}}>
          <li>
              <p>Clustering</p>
              <ol style={{listStyleType:"circle"}}>
                  <li><p>K Means</p></li>
                  <li><p>DBSCAN</p></li>
                  <li><p>Hierarchical Cluster Analysis (HCA)</p></li>
              </ol>
          </li>
          <li>
              <p>Anomaly detection and novelty detection</p>
              <ol style={{listStyleType:"circle"}}>
                  <li><p>One-class SVM</p></li>
                  <li><p>Isolation Forest</p></li>
              </ol>
          </li>
          <li>
              <p>Visualization and dimensionality reduction</p>
              <ol style={{listStyleType:"circle"}}>
                  <li><p>Principal Component Analysis (PCA)</p></li>
                  <li><p>Kernel PCA</p></li>
                  <li><p>Locally Linear Embedding (LLE)</p></li>
                  <li><p>t-Distributed Stochastic Neighbor Embedding (t-SNE)</p></li>
              </ol>
          </li>
          <li>
              <p>Association rule learning</p>
              <ol style={{listStyleType:"circle"}}>
                  <li><p>Apriori</p></li>
                  <li><p>o	Eclat</p></li>
              </ol>
          </li>

        </ol>

      </div>
      <br/>

      <div id="reinforcementLearning">
        <h3 className="subHead">Reinforcement Learning</h3>
        <p>
          It is very different from both supervised learning and unsupervised learning. In this learning system, we have an agent or bot that observes the environment and selects an action or takes an action, this action then either gets a reward or penalty (penalty meaning negative reward) the model must learn by itself which is the best strategy by itself and maximizes the reward. For example – like when we train an animal, we reward them for doing a good thing or following our orders and punish them when they don’t follow the order by this, we train the animal we can imagine the same thing for reinforcement learning. When the bot or agent behaves well, it gets rewarded; when it behaves poorly, it gets penalized. One excellent example of reinforcement learning is the AlphaGo software developed by DeepMind. It is a Go player that made waves in newspapers in 2017 when it defected as the world champion. Through the analysis and self-play of millions of games, it learns its winning policies. It differs from supervised learning in that in supervised learning, the model is trained using the labels or answers of the training data; in contrast, in reinforcement learning, the model is not given any answers. The model agent chooses how to proceed with the assigned task. It employs what is known as the trial-and-error approach. Algorithms that use reinforcement learning are capable of learning from results and choosing the best course of action. Every time it takes an action, it evaluates it and gets input from the algorithm to help it decide if the decision was right or wrong. 
        </p>

      </div>
      <br/>

      <div id="semiSupervisedLearning">
        <h3 className="subHead">Semi-Supervised Learning</h3>
        <p>
          It is a time-consuming and costly affair, in this, there is plenty of unlabeled data or instances, and few labeled instances. In other words, we can say that semi-supervised learning is an approach to machine learning that combines small labeled data in which there is a large amount of data that is unlabeled during training. It falls between supervised and unsupervised learning. Google Photos are a good example of it. For if we upload all our family photos on it, it recognizes the same face and sorts them accordingly it is an unsupervised part of it, that is it makes clusters of similar person photos now it wants us to label them so in the future it can when we search photos it can do easily. 
        </p>
        <p>
          Most semi-supervised learning algorithms are a combination of supervised and unsupervised learning algorithms. The deep belief networks (DBNs) are based on unsupervised components called restricted Boltzmann machines (RBMs) stacked on top of one another. RBMs are trained sequentially in an unsupervised manner, and then the whole system is fine-tuned using supervised learning techniques. 
        </p>
        <p>
          There are also other types of machine learning types available like instance-based, model-based, batch learning, online learning, etc.
        </p>

      </div>

    </div>
  );
};

export default MachineLearningTypes;
