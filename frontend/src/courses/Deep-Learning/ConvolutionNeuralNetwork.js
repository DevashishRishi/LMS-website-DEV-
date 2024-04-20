import React from "react";
import Figure1 from "../../assests/CourseImages/DeepLearning/ConvolutionNeuralNetwork/Figure1.png"
import Figure2 from "../../assests/CourseImages/DeepLearning/ConvolutionNeuralNetwork/Figure2.png"
import Figure3 from "../../assests/CourseImages/DeepLearning/ConvolutionNeuralNetwork/Figure3.png"
import Figure4 from "../../assests/CourseImages/DeepLearning/ConvolutionNeuralNetwork/Figure4.png"
import Figure5 from "../../assests/CourseImages/DeepLearning/ConvolutionNeuralNetwork/Figure5.png"
import Figure6 from "../../assests/CourseImages/DeepLearning/ConvolutionNeuralNetwork/Figure6.png"

const ConvolutionNeuralNetwork = () => {
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Convolution Neural Network</h3>
                <p>
                    The Convolutional Neural Network (CNN) operates on a feed-forward basis, its neuron connectivity pattern inspired by the visual cortex. This deep learning architecture is prominently used in computer vision, an artificial intelligence field focused on interpreting visual data.
                </p>
                <p>
                    A CNN is a more advanced version of a conventional artificial neural network that is designed specifically to extract features from datasets that resemble grids. These networks, also referred to as covnets, share parameters between layers. The convolutional layer of a CNN extracts relevant characteristics from input images by applying filters to them. In order to lessen computing load, a pooling layer also downsamples the image; in the end, the fully connected layer provides the final predictions. Gradient descent and backpropagation are how the CNN model determines which filters work best.
                </p>
                <p>
                It also generally has three layers like Artificial Neural Networks with same name which are input layer, hidden layer and output layer.
                </p>
                <div className="figure-container">
                        <img src={Figure1} alt="Working and Structure of Convolutional Neural Network" />
                </div>
                <br/>
                <p>
                    <b>Input layer :-</b> As the name implies, this layer receives input from the real world. Its neuron count aligns with the total number of features within the data (in image scenarios, this equates to the number of pixels).
                </p>
                <p>
                    <b>Hidden layer :-</b> Data moves on to the hidden layers after the input layer. The model and dataset size determine whether these layers are present and how many there are. The number of neurons in each hidden layer can vary, frequently exceeding the number of input features. Using learnable weights and biases, the output of each layer is calculated by multiplying its output by the matrix of the output of the layer before it. An activation function is applied to this outcome, adding non-linearity to the network.
                </p>
                <p>
                    <b>Output layer :-</b> Data processed through the hidden layers is then directed to a logistic function like sigmoid or softmax. These functions transform each class's output into probability scores for each class.
                </p>
                <p>
                    The outcome generated from this process is termed "feedforward." Subsequently, an error calculation takes place using an error function, such as cross-entropy or square loss error. These functions measure the network's performance or the magnitude of error. Following this, derivatives are computed in a step called backpropagation, primarily aimed at minimizing the loss.
                </p>
            </div>

            <div>
                <h3 className="subHead">Convolutional Neural Network Working</h3>
                <p>
                    The Convolutional neural network is an extension version of artificial neural networks. It extracts the features from the grid-like matrix dataset. It is very much use in images or videos in which data patterns play an extensive role.
                </p>
            </div>

            <div>
                <h3 className="subHead">CNN Architecture</h3>
                <p>
                    The CNN have multiple layers like input layer, convolutional layer, polling layer, and fully connected layers.
                </p>
                <div className="figure-container">
                        <img src={Figure2} alt="Different Layers of CNN" />
                </div>
                <br/>
                <p>
                    The first layer which interact with image is convolutional layer it applies filters to the input image to extract the features, the next layer is pooling layer which down samples the image to reduce the computation, and the fully connected layer makes the final prediction. To get the optimal filter the network does backpropagation and gradient descent.
                </p>
            </div>

            <div>
                <h3 className="subHead">How Convolutional Layers works</h3>
                <p>
                    Convolutional Neural Networks (CNNs) share parameters across layers. Consider an image, which can be visualized as a cuboid with length and width representing the image's dimensions and height depicting the channels (e.g., red, green, and blue channels in typical images). 
                </p>
                <div className="figure-container">
                        <img src={Figure3} alt="" />
                </div>
                <br/>
                <p>
                    Consider a scenario where we extract a small segment from an image and apply a neural network, referred to as a filter or kernel, to this segment, generating, for instance, K outputs arranged vertically. Extending this process across the entire image involves sliding this neural network across the image. Consequently, we obtain a modified image, differing in width, height, and depth. Unlike the traditional red, green, and blue channels (RGB), this image now possesses additional channels but reduced width and height. This process is known as Convolution. When the patch size aligns with the image size, it essentially operates as a conventional neural network. This use of smaller patches significantly reduces the number of weights involved.
                </p>
                <div className="figure-container">
                        <img src={Figure4} alt="" />
                </div>
                <br/>
                <p> Let’s look at the mathematics that is involve in this whole convolution process.</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Convolution layers consist of learnable filters, also known as kernels. These filters possess small widths and heights, matching the depth of the input volume (typically 3 for image inputs).
                        </p>
                    </li>
                    <li>
                        <p>
                            Suppose we have an image for convolution with dimensions 34x34x3. The size of the filter can be axax3, where 'a' can vary, such as 3, 5, or 7, but it must be smaller than the image's dimensions.
                        </p>
                    </li>
                    <li>
                        <p>
                            During the forward pass, each filter traverses the entire input volume, moving step by step. This step is referred to as the stride, which may have values like 2, 3, or 4 for high-dimensional images. For each step, the network computes the dot product between the kernel weights and the patch from the input volume.
                        </p>
                    </li>
                    <li>
                        <p>
                            As the filters slide, a 2-D output is obtained for each filter. These outputs are then stacked together, resulting in an output volume with a depth equivalent to the number of filters. Through this process, the network learns and adapts its filters..
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Layers used to build Convolutional Neural Network </h3>
                <p>
                    A convolutional neural network (CNN) comprises different layers, each transforming one volume into another using a differentiable function. Here's an overview using an example image of dimensions 32 x 32 x 3.
                </p>

                <p>
                    <b>Input Layer :-</b> This layer receives input from the external world, commonly images or image sequences in CNNs. It holds the original image data with a width of 32, height of 32, and depth of 3.
                </p>

                <p>
                    <b>Convolutional Layers :-</b> Here, the input dataset undergoes feature extraction. Kernels or learnable filters, typically 2x2, 3x3, or 5x5 matrices, are applied to the input images. These filters slide over the input data, performing dot products with corresponding patches. The resulting output is termed feature maps. For instance, if there are 12 filters in this layer, the output volume becomes 32x32x12.
                </p>

                <p>
                    <b>Activation Layer :-</b> Adding nonlinearity to the network, this layer applies an element-wise activation function to the convolutional layer output. Common activation functions include ReLU (max(0, x)), Tanh, Leaky ReLU, etc. This layer maintains the output volume dimensions as 32 x 32 x 12.
                </p>

                <p>
                    <b>Pooling Layer :-</b> Periodically integrated into the CNN, this layer aims to reduce data volume size for faster computation, less memory usage, and overfitting prevention. Common types are max pooling and average pooling. For instance, using 2x2 filters and a stride of 2 in max pooling would yield an output volume of 16x16x12.
                </p>

                <div className="figure-container">
                        <img src={Figure5} alt="Working of max pooling in 2x2 filters and stride 2." />
                </div>

                <p>
                    <b>Flattening :-</b> After passing through the convolutional and pooling layers, the resulting feature maps are flattened into a one-dimensional vector. This transformation allows them to be fed into a fully connected layer for categorical or regression problems.
                </p>

                <p>
                    <b>Fully Connected Layers :-</b> Positioned just before the output layer, this layer receives input from its preceding layer and computes the final classification or regression task.
                </p>

                <div className="figure-container">
                        <img src={Figure6} alt="Different layers of a CNN" />
                </div>

                <p>
                    <b>Output Layer :-</b> The fully connected layers' output is then input into a logistic function, which effectively converts the output of each class into the corresponding probability score that it falls below or falls within for classification tasks like sigmoid or softmax.
                </p>

            </div>

            <div>
                <h3 className="subHead">Advantages of Convolutional Neural Network</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Feature Learning :-</b> CNNs automatically learn hierarchical representations of features from input data. Convolutional layers extract low-level features like edges and textures, while deeper layers learn high-level representations like shapes and patterns. This hierarchical feature extraction reduces the need for manual feature engineering.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Spatial Hierarchies :-</b> CNNs preserve the spatial relationships between pixels in images due to their convolutional and pooling operations. This spatial awareness enables them to capture local patterns regardless of their location in the image.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Parameter Sharing :-</b> By using shared weights through convolutional kernels, CNNs can significantly reduce the number of trainable parameters, making them more efficient in terms of memory and computation. This sharing also allows them to generalize better to new, unseen data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Translation Invariance :-</b> CNNs exhibit a degree of translation invariance. This means they can recognize patterns regardless of their position in the image, enabling robustness to translations, rotations, and distortions.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Pooling Layers :-</b> Through pooling layers (e.g., max pooling), CNNs down sample feature maps, reducing computational requirements while retaining essential information. This down sampling aids in learning more robust and invariant features. 
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Versatility and transfer learning :-</b> pre-trained CNN models on large dataset (e.g., ImageNet) can be fine-tuned or used as feature extractors for other tasks, facilitating transfer learning across various domains with limited data.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>State-of-the-Art Performance :-</b> CNN architectures have achieved state-of-the-art performance in tasks such as image classification, object detection, semantic segmentation, and more, demonstrating their effectiveness In complex visual recognition tasks.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Scalability :-</b> CNNs can scale to process large and high-resolution images efficiently, making them suitable for real-world applications requiring analysis of high-dimensional data.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of Convolutional Neural Network</h3>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Computational Complexity :-</b> CNNs, especially deeper architectures, require substantial computational resources, making them computationally expensive and resource-intensive for training and inference. This complexity can hider their deployment in resource-constrained environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Large Data Requirements :-</b> CNNs generally require large labeled datasets for effective training. Inadequate data might lead to overfitting or suboptimal performance.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Tuning and Hyperparameters :-</b> Designing an optimal CNN architecture involves selecting appropriate hyperparameter (e.g., kernel size, number of layers) and tuning them, which can be challenging and time-consuming.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Limited interpretability :-</b> the intricate structure of CNNs makes it challenging to interpret how and why they make specific predictions. This lack of interpretability might be a concern in domain requiring transparency and accountability.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Overfitting :-</b> Deeper CNN architectures with a large number of parameters are prone to overfitting, especially when dealing with small datasets. Regularization techniques are often needed to prevent overfitting.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Hardware Requirements :-</b> Training Complex CNN models often necessitates specialized hardware (e.g., GPUs or TPUs), which may not be readily available or feasible for all users or applications.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Data Augmentation and preprocessing :-</b> preparing data for CNNs often involves extensive preprocessing and augmentation to ensure uniformity, cleanliness, and sufficiency. This process can be complex and time-consuming.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Lack of Rotation and Scale Invariance :-</b> while CNNs possess translation invariance, they may not inherently generalize well to rotations or scale variations in images without additional techniques or augmentation.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    Convolutional Neural Networks (CNNs) serve as the backbone of modern computer vision, exhibiting a sophisticated architecture designed for extracting intricate patterns from visual data. Their foundational components, like convolutional and pooling layers, facilitate the extraction of hierarchical features. The convolutional layers apply filters across input images, detecting diverse visual characteristics like edges and textures. Subsequently, pooling layers condense these features, preserving essential information while decreasing computational complexity. These networks harness hierarchical learning, progressing through layers to discern increasingly complex patterns by combining lower-level features. The integration of non-linear activation functions, such as Rectified Linear Units (ReLU), introduces flexibility and sophistication into the network’s learning process, enabling it to model complex relationships within images.
                </p>

                <p>
                    The prowess of CNNs extends across a spectrum of image-related tasks, from image classification and object detection to semantic segmentation. Despite their remarkable performance, CNNs demand substantial computational resources and extensive labeled datasets for training. Moreover, interpreting, CNNs stand as a pillar in reshaping machine understanding of visual information, propelling advancements in artificial intelligence and bolstering applications in diverse domain, from healthcare and autonomous vehicles to robotics and beyond.
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
                            <span className="codeKey">import</span> numpy <span className="codeKey">as</span> np
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras.datasets <span className="codeKey">import</span> mnist
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras.models <span className="codeKey">import</span> Sequential
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras.layers <span className="codeKey">import</span> Conv2D, MaxPooling2D, Flatten, Dense
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras.utils <span className="codeKey">import</span> to_categorical
                            {"\n"}<span className="codeKey">from</span> sklearn.metrics <span className="codeKey">import</span> accuracy_score, precision_score, recall_score, f1_score
                            <br/>

                            {"\n"}<span className="codeComment"># Load the MNIST dataset</span>
                            {"\n"}(train_images, train_labels), (test_images, test_labels) = mnist.load_data()
                            <br/>

                            {"\n"}<span className="codeComment"># Preprocess the data</span>
                            {"\n"}train_images = train_images.reshape((60000, 28, 28, 1)).astype('float32') / 255
                            {"\n"}test_images = test_images.reshape((10000, 28, 28, 1)).astype('float32') / 255
                            <br/>
                            {"\n"}train_labels = to_categorical(train_labels)
                            {"\n"}test_labels = to_categorical(test_labels)

                            {"\n"}<span className="codeComment"># Create the CNN model</span>
                            {"\n"}model = Sequential()
                            {"\n"}model.add(Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)))
                            {"\n"}model.add(MaxPooling2D((2, 2)))
                            {"\n"}model.add(Conv2D(64, (3, 3), activation='relu'))
                            {"\n"}model.add(MaxPooling2D((2, 2)))
                            {"\n"}model.add(Conv2D(64, (3, 3), activation='relu'))
                            {"\n"}model.add(Flatten())
                            {"\n"}model.add(Dense(64, activation='relu'))
                            {"\n"}model.add(Dense(10, activation='softmax'))
                            <br/>

                            {"\n"}<span className="codeComment">Compile the model</span>
                            {"\n"}model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
                            <br/>

                            {"\n"}<span className="codeComment"># Train the model</span>
                            {"\n"}model.fit(train_images, train_labels, epochs=5, batch_size=64, validation_split=0.2)
                            <br/>

                            {"\n"}<span className="codeComment"># Evaluate the model</span>
                            {"\n"}test_loss, test_accuracy = model.evaluate(test_images, test_labels)
                            <br/>

                            {"\n"}<span className="codeComment"># Make predictions</span>
                            {"\n"}predictions = model.predict(test_images)
                            {"\n"}predicted_labels = np.argmax(predictions, axis=1)
                            {"\n"}true_labels = np.argmax(test_labels, axis=1)
                            <br/>

                            {"\n"}<span className="codeComment"># Calculate metrics</span>
                            {"\n"}accuracy = accuracy_score(true_labels, predicted_labels)
                            {"\n"}precision = precision_score(true_labels, predicted_labels, average='weighted')
                            {"\n"}recall = recall_score(true_labels, predicted_labels, average='weighted')
                            {"\n"}f1 = f1_score(true_labels, predicted_labels, average='weighted')
                            <br/>

                            {"\n"}<span className="codeComment"># Print metrics</span>
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
export default ConvolutionNeuralNetwork;