import React from "react";
import Figure1 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure1.png"
import Figure2 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure2.png"
import Figure3 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure3.png"
import Figure4 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure4.png"
import Figure5 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure5.png"
import Figure6 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure6.png"
import Figure7 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure7.png"
import Figure8 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure8.png"
import Figure9 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure9.png"
import Figure10 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure10.png"
import Figure11 from "../../assests/CourseImages/DeepLearning/RecurrentNeuralNetworks/Figure11.png"

const RecurrentNeuralNetworks = () => {
    return (
        <div>
            <br/>
            <div>
               <h3 className="subHead">Recurrent Neural Networks</h3>
                <p>
                    One kind of neural network called a recurrent neural network (RNN) uses the output from the preceding stage as the input for the current step. They work particularly well with text and other sequential data types like Time-Series. RNNs are made to identify patterns in sequences of data, including spoken words, text, genomes, handwriting, and numerical time series gathered from a variety of sources, including government agencies, stock markets, and sensors. They can be used with well-known programs like Google Translate, Siri, and voice search.
                </p>
                <p>
                    A fundamental aspect of RNNs is their Hidden State, which retains information about a sequence, effectively acting as a memory state by recalling previous inputs to the network. RNNs use the same parameters for each input, performing consistent operations across all inputs and hidden layers to generate output. This parameter sharing reduces complexity in comparison to other neural networks. The output of an RNN is influenced by prior elements within the sequence. Additionally, parameter sharing across layers is a distinctive feature setting RNNs apart from other neural network architectures.   
                </p>
                <div className="figure-container">
                        <img src={Figure1} alt="Basic working RNN model" />
                </div>
                <br/>
                <p>
                    The backpropagation through time (BPTT) technique is used by recurrent neural networks (RNNs). It is a little different from regular backpropagation because it is designed for sequential data. The fundamental ideas of classical backpropagation are shared by BPTT: model training is accomplished by computing errors from the output layer to the input layer, which allows for model parameter modifications. But a crucial distinction is that, in contrast to feedforward networks, which do not need error summation because there is no layer-to-layer parameter sharing, BPTT sums errors at each time step.
                </p>

                <p>
                    RNNs often encounter issues termed as exploding and vanishing gradients, both related to the gradient's magnitude, which denotes the slope of the loss function along the error curve. Vanishing gradients occur when gradients become extremely small, leading to their continuous reduction until they approach insignificance (zero), halting learning. Conversely, exploding gradients manifest when gradients become exceedingly large, causing unstable model behavior and weight parameters reaching NaN representations. To mitigate these challenges, reducing the number of hidden layers within the neural network is a potential solution, alleviating some complexity inherent in RNN models.
                </p>
            </div>

            <div>
                <h3 className="subHead">How RNN is differ from Feedforward Neural Network ?</h3>
                <p>
                    An Artificial Neural Network (ANN) is a structure that is also referred to as a feedforward neural network because it lacks looping nodes. Information moves from the input layer to the output layer in this network, maybe going through hidden layers, in a strictly unidirectional fashion. Another name for these networks is multi-layer neural networks.
                </p>

                <p>
                    For applications where the input and output are independent, such as picture classification, feedforward neural networks are appropriate. They are unable to automatically remember data from prior inputs, though. They are less useful for examining sequential data because of this constraint.
                </p>

                <div className="figure-container">
                        <img src={Figure2} alt="RNN and Feed-forward NN working process" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">Recurrent Neuron and RNN Unfolding</h3>
                <p>
                    A recurrent neural network's basic processing unit isn't referred to as a "Recurrent Neuron." The capacity to remain hidden is one of this unit's unique characteristics. This feature keeps information from prior inputs while processing, enabling the network to grasp sequential dependencies. The ability of the RNN to handle long-term dependencies is improved by variations such as Gated Recurrent Unit (GRU) and Long Short-Term Memory (LSTM) versions.
                </p>
                <div className="figure-container">
                        <img src={Figure3} alt="Recurrent Neuron" />
                </div>
                <br/>
                <div className="figure-container">
                        <img src={Figure4} alt="Recurrent Neuron" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">Types Of RNN</h3>
                <p>
                    There are four types of RNNs based on the number of inputs and outputs in the network they are :-
                </p>
                <ol style={{listStyleType:'decimal'}}>
                    <li><p>One to One</p></li>
                    <li><p>One to Many</p></li>
                    <li><p>Many to One</p></li>
                    <li><p>Many to Many</p></li>
                </ol>
                <p>
                    <b>One to One :-</b> They are the very basic RNN and behaves also like a simple Neural Network it is also known as Vanilla Neural Network. In this type of recurrent neural network there is only one input and one output is present. 
                </p>
                <div className="figure-container">
                        <img src={Figure5} alt="one to one RNN" />
                </div>
                <br/>
                <p>
                <b>One to Many :-</b> as name suggest in this type of RNN there is one input and many outputs associated with it. It is very extensively used in image captioning in which a given image use to predict a sentence having many words.
                </p>
                <div className="figure-container">
                        <img src={Figure6} alt="RNN One-to-many type model type" />
                </div>
                <br/>
                <p>
                    <b>Many to One :-</b> It is essentially the many-to-one type paradigm in reverse; in this model, numerous inputs are sent to the network at various network states, and each input produces a single output. We apply this kind of network to sentiment analysis tasks. When solving problems involving sentiment analysis, we provide several words as input and anticipate the sentence's sentiment as the only outcome.
                </p>
                <div className="figure-container">
                        <img src={Figure7} alt="Many to one type RNN model" />
                </div>
                <br/>
                <p>
                    <b>Many to Many :-</b> Depending on the issue, this kind of neural network has a large number of inputs and outputs. One such issue type that uses many to many RNNs is language translation, where we give it several words in one language as input and it predicts many words in the other language as an output. 
                </p>
                <div className="figure-container">
                        <img src={Figure8} alt="Recurrent Neural Architecture" />
                </div>
            </div>

            <div>
                <h3 className="subHead">Recurrent Neural Network Architecture</h3>
                <p>
                    The architecture of RNNs' input and output is similar to that of other deep learning neural networks. The way information moves from the input layer to the output layer is where the differences lie, though. RNNs keep the same weights over the whole network, in contrast to deep neural networks, which have distinct weight matrices for every dense network. 
                </p>
                <div className="figure-container">
                        <img src={Figure9} alt="Recurrent Neural Architecture" />
                </div>
                <br/>
            </div>

            <div>
                <h3 className="subHead">Variant RNN architectures</h3>
                <p>
                    Bidirectional Recurrent Neural Networks (BRNN) represent a distinct variation within RNN architecture compared to unidirectional RNNs. While traditional RNNs rely solely on past inputs to make predictions, BRNNs incorporate future data, enhancing predictive accuracy. For example, in the phrase "feeling under the weather," the model can anticipate "under" as the second word more effectively by considering "weather" as the last word in the sequence.
                </p>
                <p>
                    Long Short-Term Memory (LSTM) networks, a prevalent RNN architecture, address challenges like the vanishing gradient problem and long-term dependencies. Developed by Hochreiter and Schmidhuber, LSTMs feature cells within hidden layers housing three gates: the input gate, output gate, and forget gate. These gates regulate the flow of information, crucial for accurate predictions. In scenarios where relevant information for prediction is located farther back in a sequence, LSTMs enable the network to retain and utilize this distant context, vital for tasks such as understanding a person's nut allergy across a series of sentences.
                </p>
                <p>
                    Gated Recurrent Units (GRUs), similar to LSTMs, combat the short-term memory limitations of traditional RNNs. However, GRUs, instead of employing dedicated "cell states" like LSTMs, utilize hidden states and incorporate two gates: the reset gate and the update gate. These gates control the quantity and type of information retained within the network, offering adaptability in learning from sequential data while maintaining computational simplicity compared to LSTMs.
                </p>
            </div>

            <div>
                <h3 className="subHead">How does RNN work ?</h3>
                <p>
                    The recurrent neural network (RNN) is undoubtedly made up of several fixed activation function units, usually one for every time step. Every unit preserves what is known as its "hidden state," which is its internal condition. Usually, the network's stored knowledge or information up to a particular time step is contained in this concealed state. This hidden state changes at every time step as the RNN analyzes sequential data, representing the network's changing comprehension or recollection of the past.
                </p>

                <p>
                    The update of the hidden state in an RNN can be represented using a recurrence relation or formula that defines how this hidden state evolves across time steps. The recurrence relation expresses the change or update in the hidden state based on the current input, previous hidden state, and possibly other parameters or inputs related to the network's architecture and task at hand. This recurrent formula essentially dictates how the network retains and updates its memory or knowledge as it processes sequential data.
                </p>

                <p>The formula for calculating the current state :-</p>

                <i><span className="formula">&#8462;<sub>t</sub> = f(&#8462;<sub>t-1</sub>,x<sub>t</sub> )</span></i>
                <p>here,</p>
                <ol>
                    <li>
                       <p><span className="emFont">h<sub>t</sub></span> → current state</p>
                    </li>
                    <li>
                        <p><span className="emFont">h<sub>t-1</sub></span> → current state</p>
                    </li>
                    <li>
                        <p><span className="emFont">x<sub>t</sub></span> → current state</p>
                    </li>
                </ol>
                <p>The formula for applying activation function (tanh)</p>
                <span className="formula">h<sub>t</sub> = tanh(W<sub>hh</sub> h<sub>t-1</sub> + W<sub>xh</sub> x<sub>t</sub> )</span>
                <p>Here,</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p><span className="emfont">W<sub>hh</sub></span> → weight at the recurrent neuron</p>
                    </li>
                    <li>
                        <p><span className="emFont">W<sub>xh</sub></span> → weight at input neuron</p>
                    </li>
                </ol>
                <p>The formula for calculating output :-</p>
                <span className="formula">y<sub>t</sub> = W<sub>hy</sub> h<sub>t</sub></span>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p><span className="emFont">W<sub>hy</sub></span> → weight at the output layer</p>
                    </li>
                    <li>
                        <p>	<span className="emFont">y<sub>t</sub></span> → output</p>
                    </li>
                </ol>
                <p>
                    Backpropagation is used to update each of these parameters. Since RNNs process sequential data, we employ updated backpropagation, sometimes referred to as backpropagation across time.
                </p>
            </div>

            <div>
                <h3 className="subHead">Backpropagation Through Time (BPTT)</h3>
                <p>
                    Since the RNN is an ordered neural network, each variable is computed individually in the predetermined sequence, such as h1 coming first, h2 coming next, h3 coming last, and so on. Consequently, we sequentially apply backpropagation to each of these hidden temporal stages.
                </p>
                <div className="figure-container">
                        <img src={Figure10} alt="Working of backpropagation through time (BPTT) in RNN" />
                </div>
                <br/>
                <p>In the above diagram the </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>	L(θ) (loss function) depends on h3</p>
                    </li>
                    <li>
                        <p>h3 in turn depends on h2 and W</p>
                    </li>
                    <li>
                        <p>h2 in turn depends on h1 and W</p>
                    </li>
                    <li>
                        <p>h1 in turn depends on h0 and W</p>
                    </li>
                    <li>
                        <p>where h0 is a constant starting state.</p>
                    </li>
                </ol>
                {/* (∂L(θ))/∂W= ∑_(t=1)^T▒(∂L(θ))/∂W */}
                <p>
                    For better understand the above equation, we will apply backpropagation on only one row
                </p>
                {/* (∂L(θ))/∂W=(∂L(θ))/〖∂h〗_3   〖∂h〗_3/∂W */}
                <p>We also know that how to compute this because it is the same as any simple deep neural network backpropagation.</p>
                {/* (∂L(θ))/〖∂h〗_3  */}
                <p>
                    We can also see how to apply the backpropagation to this term 〖∂h〗_3/∂W
                </p>
                <p>
                    Because we already know h3 = σ(Wh2+b)
                </p>
                <p>
                    In a network like this which is in ordered form, we can’t compute 〖∂h〗_3/∂W by simply treating h3 as a constant because it is also dependent on the W. the total derivative 〖∂h〗_3/∂W   has two parts:
                </p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>	Explicit: (〖∂h〗_3+)/∂W it treats all the other inputs as a constant</p>
                    </li>
                    <li>
                        <p>	Implicit: it sums over all indirect paths from h_3 to W</p>
                    </li>
                </ol>
                <div className="figure-container">
                        <img src={Figure11} alt="Recurrent Neural Architecture" />
                </div>
                <br/>
                <p>
                    For better understanding we short-circuit some of the paths and get this below equation.
                </p>
                {/* 〖∂h〗_3/∂W=(〖∂h〗_3^+)/∂W+〖∂h〗_3/〖∂h〗_2   (〖∂h〗_2^+)/∂W+〖∂h〗_3/〖∂h〗_1   (〖∂h〗_1^+)/∂W   */}
                <p>
                After further modifying the above equation, we get the below equation
                </p>
                {/* (∂L(θ))/∂W=(∂L(θ))/〖∂h〗_3 ∙〖∂h〗_3/∂W */}
                <p>
                Where 
                    {/* 〖∂h〗_3/∂W ∑_(k=1)^3▒〖〖∂h〗_3/〖∂h〗_k ∙〖∂h〗_k/∂W〗 */}
                </p>
                <p>
                Therefore,
                    {/* (∂L(θ))/∂W=(∂L(θ))/〖∂h〗_3  ∑_(k=1)^3▒〖〖∂h〗_3/〖∂h〗_k ∙〖∂h〗_k/∂W〗 */}

                </p>
                <p>
                     This algorithm is called backpropagation through time (BPTT) as we backpropagate over all previous time steps.
                </p>
            </div>

            <div>
                <h3 className="subHead">Training through RNN</h3>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>The network receives input for a single time step.</p>
                    </li>
                    <li>
                        <p>Using the current input and the previous state, it computes the current state.</p>
                    </li>
                    <li>
                        <p>The current state becomes the previous state for the next time step.</p>
                    </li>
                    <li>
                        <p>This process continues for multiple steps, allowing the network to incorporate information from all previous states.</p>
                    </li>
                    <li>
                        <p>Once all time steps are completed, the final current state is used to calculate the output.</p>
                    </li>
                    <li>
                        <p>The output is then compared to the target output, generating an error.</p>
                    </li>
                    <li>
                        <p>This error is back-propagated through the network, updating the weights. The RNN is trained using the backpropagation through time method, adjusting the network's parameters based on the calculated error.</p>
                    </li>
                    
                </ol>
            </div>

            <div>
                <h3>Advantages of RNN</h3>
                <p>
                    <b>Sequential Modeling :-</b> RNNs excel at modeling sequential data due to their ability to retain and utilize information from past observations. This makes them well-suited for tasks such as time series prediction, language modeling, and speech recognition.
                </p>
                <p>
                <b>Variable-Length Inputs :-</b> Unlike traditional feedforward networks, RNNs can handle variable-length sequences. They process input sequences of varying lengths by sharing parameters across different time steps, allowing flexibility in handling diverse data formats.
                </p>
                <p>
                 <b>Memory and Context Retention :-</b> RNNs possess memory cells that maintain information over time, enabling the network to capture long-term dependencies. This feature helps in learning and retaining context, crucial in tasks where understanding context is essential, like language translation or sentiment analysis.
                </p>
                <p>
                    <b>Flexibility in inputs and outputs :-</b> RNNs can process inputs and produce outputs of various data types (e.g., sequences, vectors, or even structural data). This flexibility allows them to perform diverse tasks, including sequence generation, sentiment analysis, and machine translation.
                </p>
                <p>
                    <b>Transfer Learning and Pretrained Models :-</b> Pretrained RNN models or embeddings learned on large text corpora can be leveraged for downstream tasks, facilitating transfer learning and reducing the need for extensive labeled data.
                </p>
                <p>
                    <b>Adaptability to Real-Time Data :-</b> RNNs can handle streaming data and perform computations in real-time, making them suitable for applications like online prediction, video analysis, and live speech recognition.
                </p>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of RNN</h3>
                <p>
                    <b>Vanishing/Expploding Gradient Problem :-</b> Because of vanishing or exploding gradients, RNNs may have trouble training over lengthy sequences. This happens when gradients propagate across time during backpropagation and either become exceedingly small (vanishing) or excessively large (exploding), making it difficult to understand long-range dependencies.
                </p>
                <p>
                    <b>Difficulty in capturing long-term dependencies :-</b> despite their ability to retain information across time steps, standard RNNs can struggle with capturing long-term dependencies effectively. This limitation arises because the network might forget or misinterpret crucial information from distant past inputs when processing lengthy sequences.
                </p>
                <p>
                    <b>Limited Short-term Memory :-</b> Traditional RNNs possess limitations in their short-term memory capacity. They might face challenges in retaining information for an extended duration, which can impact tasks where immediate context plays a significant role.
                </p>
                <p>
                    <b>Computationally inefficient :-</b> RNN are computationally demanding, especially when processing long sequence. The sequential nature of their computation’s limits parallelization, leading to slower training and inference times compared to feedforward networks.
                </p>
                <p>
                    <b>Sensitivity to Hyperparameters :-</b> RNNs are sensitive to hyperparameters like learning rate, network architecture, and initialization. Selecting appropriate hyperparameters can be challenging, and improper choices might hinder their learning capability.
                </p>
                <p>
                <b>Training Instability :-</b> Training RNNs can be unstable, especially when dealing with non-stationary data or noisy sequences. The network might have difficulties in converging or might be sensitive to data preprocessing.
                </p>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    Recurrent Neural Networks (RNNs) stand as a pivotal architecture in the realm of sequential data analysis. These networks are adept at processing sequences by incorporating memory to retain information from prior steps, rendering them ideal for a spectrum of tasks encompassing natural language processing, time series forecasting, and speech recognition. The distinctive feature of RNNs lies in their ability to model temporal dependencies within sequences, enabling them to comprehend and make predictions based on the context from previous inputs. Despite their proficiency, RNNs encounter challenges such as vanishing or exploding gradients during training, hindering their capability to effectively capture and leverage long-term dependencies. Additionally, they might face limitations in retaining short-term memory over extended sequences, impacting their understanding of immediate context.
                </p>
                <p>
                However, in order to address these drawbacks, RNNs have been significantly improved with the introduction of variants such as long short-term memory (LSTM), gated recurrent units (GRU), and attention mechanism. These improvements enable RNNs to comprehend sequential data more fully, minimize the vanishing gradient problem, and better capture long-term dependencies. RNNs are still the foundation of sequential data analysis, despite ongoing difficulties, providing important insights and capabilities for tasks requiring the comprehension and processing of sequential data.
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
                            <span className="codeKey">from</span> tensorflow.keras.datasets <span className="codeKey">import</span> imdb
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras.preprocessing <span className="codeKey">import</span> sequence
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras.models <span className="codeKey">import</span> Sequential
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras.layers <span className="codeKey">import</span> Embedding, SimpleRNN, Dense
                            {"\n"}<span className="codeKey">from</span> sklearn.metrics <span className="codeKey">import</span> accuracy_score, precision_score, recall_score, f1_score
                            <br/>

                            {"\n"}<span className="codeComment"># Number of words to consider as features</span>
                            {"\n"}max_features = 10000
                            <br/>

                            {"\n"}<span className="codeComment"># Cut texts after this number of words (among top max_features most common words)</span>
                            {"\n"}maxlen = 500
                            <br/>

                            {"\n"}<span className="codeComment"># Load the data</span>
                            {"\n"}(train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=max_features)
                            <br/>

                            {"\n"}<span className="codeComment"># Prepare the data by padding sequences to the same length</span>
                            {"\n"}train_data = sequence.pad_sequences(train_data, maxlen=maxlen)
                            {"\n"}test_data = sequence.pad_sequences(test_data, maxlen=maxlen)
                            <br/>

                            {"\n"}<span className="codeComment"># Create the RNN model</span>
                            {"\n"}model = Sequential()
                            {"\n"}model.add(Embedding(max_features, 32))
                            {"\n"}model.add(SimpleRNN(32))
                            {"\n"}model.add(Dense(1, activation='sigmoid'))
                            <br/>

                            {"\n"}<span className="codeComment"># Compile the model</span>
                            {"\n"}model.compile(optimizer='rmsprop', loss='binary_crossentropy', metrics=['accuracy'])
                            <br/>

                            {"\n"}<span className="codeComment"># Train the model</span>
                            {"\n"}model.fit(train_data, train_labels, epochs=5, batch_size=128, validation_split=0.2)
                            <br/>

                            {"\n"}<span className="codeComment"># Evaluate the model</span>
                            {"\n"}test_loss, test_accuracy = model.evaluate(test_data, test_labels)
                            <br/>

                            {"\n"}<span className="codeComment"># Make predictions</span>
                            {"\n"}predictions = model.predict(test_data)
                            {"\n"}predicted_labels = (predictions &gt; 0.5).astype('int32')
                            <br/>

                            {"\n"}<span className="codeComment"># Calculate metrics</span>
                            {"\n"}accuracy = accuracy_score(test_labels, predicted_labels)
                            {"\n"}precision = precision_score(test_labels, predicted_labels)
                            {"\n"}recall = recall_score(test_labels, predicted_labels)
                            {"\n"}f1 = f1_score(test_labels, predicted_labels)
                            <br/>

                            
                            {"\n"}<span className="codeComment">Print metrics</span>
                            {"\n"}print(f"Test accuracy: &#65371;test_accuracy&#65373;")
                            {"\n"}print(f"Accuracy: &#65371;accuracy&#65373;")
                            {"\n"}print(f"Precision: &#65371;precision&#65373;")
                            {"\n"}print(f"Recall: &#65371;recall&#65373;")
                            {"\n"}print(f"F1 Score: &#65371;f1&#65373;")
                            <br/>

                        </code>
                    </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RecurrentNeuralNetworks;