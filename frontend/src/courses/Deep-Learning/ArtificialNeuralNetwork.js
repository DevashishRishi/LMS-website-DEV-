import React from "react";
import Figure1 from "../../assests/CourseImages/DeepLearning/ArtificialNeuralNetwork/Figure1.png"
import Figure2 from "../../assests/CourseImages/DeepLearning/ArtificialNeuralNetwork/Figure2.png"
import Figure3 from "../../assests/CourseImages/DeepLearning/ArtificialNeuralNetwork/Figure3.png"

const ArtificialNeuralNetwork = () => {
    return (
        <div>
            <div>
                <h3 className="subHead">Artificial Neural Network</h3>
                <p>
                Artificial Neural Networks (ANNs) are designed to replicate the workings of the human brain, aiming to simulate its functions. They constitute a subfield of artificial intelligence inspired by biological neural networks. Similar to the interconnected neurons in the human brain, artificial neuron networks consist of units connected across multiple layers.
                </p>
                <p>
                Artificial neurons, often referred to as units, are arranged in layers to form the network structure of an ANN. Depending on how complicated the network is, a layer may have a few hundred or millions of units in it. An artificial neural network typically consists of intermediate hidden layers, an output layer, and an input layer. External data is fed into the input layer so that the neural network may analyze or learn from it. After that, this data is transformed by processing it through one or more hidden layers. The output layer receives the changed data at this point and provides the network's reaction to the input data.
                </p>
                <p>
                Interconnections between most neural network units incorporate weights, dictating the impact of one unit on another. As information moves between units, the neural network accumulates knowledge about the data, leading to an output from the output layer.
                </p>
                <div className="figure-container">
                    <img src={Figure1} alt="Artificial Neural Network" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">What is Artificial Neural Network ?</h3>
                <p>
                The term “Artificial Neural Network” is derived from biological neural network which is present in human brain. Neuron on artificial neuron network has another more common name rather then units which is node most commonly we refer node for the neurons.
                </p>
                <p>Belo is the typical image of human neuron.</p>
                <div className="figure-container">
                    <img src={Figure2} alt="Human Brain Neuron" />
                </div>
                <p>
                    Dendrites from biological Neural Network represent inputs in Artificial Neural Networks, cell nucleus represents Nodes, synapse represents Weights, and Axon represents Output.
                </p>
                <table border="1">
                    <tr>
                        <th>Biological Neural Network</th>
                        <th>Artificial Neural Network</th>
                    </tr>
                    <tr>
                        <td>Dendrites</td>
                        <td>Inputs</td>
                    </tr>
                    <tr>
                        <td>Cell nucleus</td>
                        <td>Nodes</td>
                    </tr>
                    <tr>
                        <td>Synapse</td>
                        <td>Weights</td>
                    </tr>
                    <tr>
                        <td>Axon</td>
                        <td>Output</td>
                    </tr>
                </table>

                <p>
                    The artificial neural network emulates interconnected brain cells and is engineered by programmers. The human brain consists of approximately 100 billion neurons, each neuron having connections, ranging from 1,000 to 100,000 associations. An effective way to comprehend an artificial neural network is by considering a digital gate, which accepts an input and produces an output. 
                </p>
            </div>

            <div>
                <h3 className="subHead">How do Artificial Neural Networks learn ?</h3>
                <p>
                    The artificial neural network undergoes training using a training set. Consider teaching an ANN to recognize a dog: it's exposed to numerous dog images to learn the identification process. Once the training concludes, the network's ability to correctly identify dog images is tested. By presenting new images, the ANN determines whether they depict dogs or not. Human-provided descriptions verify the network's accuracy. If discrepancies arise, backpropagation comes into play. This technique fine-tunes the weights of connections in the ANN units, adjusting them based on the error rate. This iterative process continues until the network accurately identifies dogs in images, minimizing errors.
                </p>
            </div>

            <div>
                <h3 className="subHead">The architecture of an artificial neural network</h3>
                <p>
                    To grasp the workings of a neural network, understanding its components is crucial. A neural network comprises numerous artificial neurons, referred to as units, arranged in layers. Let's explore the different types of layers present in an artificial neural network. The diagram below illustrates the various layers within the network.
                </p>
                <div className="figure-container">
                    <img src={Figure3} alt="The different layers of Artificial Neuron Network" />
                </div>
                <ol >
                    <li>
                        <p>
                        <b>Input Layer :-</b> This layer, as implied, receives inputs in various formats provided by users or programmers.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Hidden Layer :-</b> Positioned between the input and output layers, the hidden layer undertakes calculations crucial for identifying hidden features and patterns within the dataset or training data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Output Layer :-</b> As its name suggests, this layer presents the final output to the programmer. The input undergoes a series of transformations facilitated by the hidden layer, resulting in the output conveyed through this layer.
                        </p>
                    </li>
                </ol>
                <p>
                    The artificial neural network processes inputs by computing the weighted sum of inputs along with a bias, represented through a transfer function.
                </p>
                {/* ∑_(i=1)^n▒〖Wi*Xi+b〗 */}
                <p>
                    It determines the weighted total and it is passed as an input of an activation function to produce the output. The activation function decides whether a node should fire are not. Only the fired node makes it to the output layer. There are many different activation functions available and we need to choose which activation is useful for which task.
                </p>
            </div>

            <div>
                <h3 className="subHead">Different types of Artificial Neural Networks</h3>
                <p>
                <b>Feedforward Neural Network :-</b> This basic neural network operates in a unidirectional manner, moving data only from the input layer to the output layer. It may or may not have a hidden layer and does not involve backpropagation.
                </p>
                <p>
                    <b>Convolutional Neural Network (CNN) :-</b> Similar to the feedforward neural network, the CNN incorporates weighted connections between units or nodes, determining the influence of one unit on another. It employs one or multiple convolutional layers that execute convolutional operations on input data and pass the obtained results to subsequent layers. CNNs are extensively utilized in tasks like image processing and speech recognition, particularly in computer vision applications.
                </p>
                <p>
                     <b>Modular Neural Network :-</b> Comprising multiple independent neural networks, a modular neural network operates distinctively, with no interaction among its components. Each network handles a specific sub-task with unique inputs. The advantage lies in its modular approach, breaking down complex computational processes into smaller components, and reducing complexity while obtaining the desired output.
                </p>
                <p>
                        <b>Radial Basis Function Neural Network :-</b> Utilizing the distance of a point concerning a center, this network employs only two layers. The initial layer maps radial basis functions in the hidden layer, followed by the output layer computing the subsequent output. They're typically used in models representing underlying trends or functions within data.
                </p>
                <p>
                    <b>Recurrent Neural Networks (RNNs) :-</b> RNNs differ by retaining the output of a layer and feeding it back to the input to enhance outcome prediction. It begins similarly to a feedforward neural network, with each node or unit in subsequent layers remembering information from previous steps, functioning akin to a memory cell to improve computational performance.
                </p>
                <p>We will look at these neural networks in much detail in further chapters.</p>
            </div>

            <div>
                <h3 className="subHead">Applications of Artificial Neural Networks</h3>
                <p>
                    <b>Social Media :-</b> Artificial neural networks play a pivotal role in various social media features, such as the "people you may know" suggestions, which analyze user profiles, interests, existing connections, and more to propose potential acquaintances. Facial recognition is another key application, leveraging convolutional neural networks by identifying facial reference points to match them with database records.
                </p>
                <p>
                    <b>Marketing and Sales :-</b> E-commerce platforms like Amazon or Flipkart employ machine learning to recommend products based on a user's browsing history. This personalized marketing spans various sectors like food services, hospitality, movies, and books. Artificial neural networks discern customer preferences, shopping history, and dislikes to tailor marketing strategies accordingly.
                </p>
                <p>
                    <b>Healthcare :-</b> Artificial neural networks find extensive use in healthcare, particularly in cancer detection. In oncology, they train algorithms to identify cancerous tissues at microscopic levels with accuracy akin to trained physicians. Additionally, facial analysis using photos aids in identifying rare diseases in their early stages, enhancing diagnostic capabilities, and augmenting medical care globally.
                </p>
                <p>
                    <b>Personal Assistants :-</b> Digital personal assistants like Siri and Alexa rely on speech recognition and Natural Language Processing (NLP) powered by artificial neural networks. NLP manages language syntax, semantics, speech accuracy, and ongoing conversations, enabling assistants to interact with users effectively.
                </p>
            </div>

            <div>
                <h3 className="subHead">Advantages of Artificial Neural Networks</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Adaptability to Complex Patterns :-</b> ANNs excel at recognizing and understanding patterns within data, including non-linear relationships and complex patterns that might be challenging for traditional algorithms to discern.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Learning Capabilities :-</b> they possess the ability to learn and improve from experience. Through iterations and adjustments to their internal parameters (weights), ANNs refine their predictive accuracy and decision-making abilities.
                        </p>
                    </li>
                    <li>
                        <p>
                         <b>Parallel Processing :-</b> ANNs can perform computations in parallel across multiple nodes/neurons, which enables them to handle large volumes of data and perform complex calculations more efficiently.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Generalization :-</b> ANNs can generalize from learned patterns to make predictions or classifications on unseen or new data. This ability to generalize helps prevent overfitting and enhances the model’s performance on new instances.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Feature Extraction :-</b> In some architectures like convolutional neural networks (CNNs) and recurrent neural networks (RNNs), ANNs can automatically extract relevant features from raw data, reducing the need for manual feature engineering.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Fault Tolerance :-</b> Due to their distributed nature and redundancy in information representation, ANNs can often tolerate errors or missing information without significantly affecting their overall performance. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Versatility :-</b> They can be applied to various domains, including image and speech recognition, natural language processing, time-series analysis, and recommendation systems, among others, showcasing their versatility across different problem types.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Continuous improvement :-</b> As new data becomes available, ANNs can continuously retain and adapt, enabling them to improve their performance and accuracy over time. 
                        </p>
                    </li>
                </ol>

            </div>

            <div>
                <h3 className="subHead">Disadvantages of Artificial Neural Networks</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Computational Complexity :-</b> Training large neural networks with many layers and neurons demands significant computational resources, leading to increased time and energy consumption.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>v</b> ANNs require a substantial amount of data for training to generalize well. Insufficient data might lead to overfitting or poor generalization.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Overfitting :-</b> Complex neural network architectures are prone to overfitting, especially when dealing with noisy or limited datasets. Regularization techniques or dropout layers are used to mitigate this issue.
                        </p>
                    </li>
                    <li>
                        <p>
                         <b>Hyperparameter Sensitivity :-</b> ANNs often involve a large number of hyperparameters (e.g., learning rate, network architecture, activation functions) that need fine-tuning. Choosing appropriate values can be challenging and significantly impact model performance.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Interpretability :-</b> understanding how ANNs arrive at their decisions can be difficult due to their black-box nature. this lack of interpretability might be problematic, especially in domains where transparency is crucial. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Training Time :-</b> training deep neural networks, particularly on large datasets, can be time-consuming, sometimes requiring extensive computational resources and time. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Vulnerability to Adversarial Attacks :-</b> ANNs may be susceptible to adversarial attacks, where minor, imperceptible changes to input data can lead to incorrect predictions. 
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Data Dependency :-</b> ANNs heavily rely on the quality and representativeness of the data they are trained on. Biased or unrepresentative datasets may lead to biased or inaccurate model predictions. 
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Hardware Dependency :-</b> Developing and training complex neural networks might require specialized hardware, making them less accessible or feasible for certain applications or environments.
                        </p>
                    </li>
                </ol>

            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    Artificial Neural Networks (ANNs) mimic the brain’s neural structure, comprising interconnected nodes organized into layers that process information. These networks learn from data by adjusting internal parameters iteratively, using algorithms like backpropagation. ANNs excel at recognizing complex patterns, handling various data types, and performing tasks like classification and regression across domains like image recognition, natural language processing, and finance. While offering adaptability and learning capabilities, they face challenges such as computational complexity, data dependency, and interpretability issues, yet they remain pivotal in driving advancements in machine learning, robotics, and AI due to their versatility and capacity to handle intricate tasks.
                </p>
            </div>

        </div>
    );
};
export default ArtificialNeuralNetwork;