import React from "react";
import Figure1 from "../../assests/CourseImages/DeepLearning/Autoencoder/Figure1.png"
const Autoencoder = () => {
    return (
        <div>
            <br/>
            <div>
            <h3 className="subHead">Autoencoder</h3>
            <p>
                Neural networks, intricately linked systems modeled after the architecture of the human brain, are the foundation of deep learning. Neural networks are particularly good at finding complex patterns in large datasets, which makes them useful for tasks like categorization, prediction, and insight production. Autoencoders are an interesting subclass of neural networks in this domain, especially when it comes to unsupervised learning. Their approach is distinct in that it enables systems to acquire efficient data representations without the need for labeled samples. Deep learning is always evolving, and autoencoders have attracted a lot of attention for their adaptability and power in a variety of fields, such as anomaly detection and image processing.
            </p>
            <p>
              Algorithms that are specifically designed to learn effective data representations without the need for labeled samples are called autoencoders. They belong to a type of artificial neural networks designed mostly for problems involving unsupervised learning. Autoencoders work on the basic idea of learning how to reliably and compactly represent input data in a reduced-dimensional space, called the "latent space" or "encoding," without the need for explicit labeling. An encoder and a decoder make up the two halves of the structure that facilitate this procedure. The input data is converted into a condensed representation by the encoder, and the original input is then reconstructed from this representation by the decoder. Autoencoders provide efficient data representation and analysis by repeatedly encoding and decoding data to uncover significant patterns and characteristics.
            </p>
            </div>

            <div>
                <h3 className="subHead">Architecture of Autoencoder in Deep Learning</h3>
                <p>
                    The common architecture of an autoencoder deep learning includes an encoder, decoder, and bottleneck layer. Let’s see it in image 
                </p>
                <div className="figure-container">
                        <img src={Figure1} alt="" />
                </div>
                <br/>
                <p>
                    <b>Encoder :-</b> A neural network's encoder part begins by receiving the raw input data. The dimensionality of the data rapidly reduces as it moves through the hidden layers, enabling the network to identify important patterns and features. The encoder is made up of all these hidden levels. The bottleneck layer, sometimes referred to as the latent space, is where the data's dimensionality is drastically decreased. This layer is a condensed and compressed version of the input data and is the last step in the encoding process.
                </p>

                <p>
                     <b>Decoder :-</b> After receiving the encoded representation from the bottleneck layer, a neural network's decoder component expands it back to the original input's dimensionality. The dimensionality is progressively increased through a sequence of hidden layers in order to recover the original input. The compressed representation is unraveled and decoded by these hidden layers into a format that resembles the original data. In the end, the output layer produces the reconstructed output, making every effort to closely resemble the original data.
                </p>

                <p>
                    Autoencoders normally use a loss function, also known as a reconstruction loss, during the training phase. The difference between the input data and its reconstructed output is quantified by this function. When dealing with continuous data, the mean squared error (MSE) or binary cross-entropy are common choices for this loss function. The autoencoder seeks to reduce this reconstructive loss during training. In order to ensure that the encoded representation accurately reflects the crucial aspects of the input data, this forces the network to encode the most important attributes of the data within the bottleneck layer.
                </p>

                <p>
                    Normally, only the encoder part of the autoencoder is kept after the training phase is over in order to encode the same kinds of data that were encountered. The network can be restrained using a variety of techniques to improve its capacity to derive meaningful representations:
                </p>

                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Maintaining Small Hidden Layers :-</b> The network is forced to capture just the most representative elements of the data by keeping each hidden layer small, which leads to a more effective encoding process.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Regularization :-</b> By including a regularization term in the cost function, the network is encouraged to learn more than just how to replicate the input. This leads to the identification of more broadly applicable representations.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Denoising :-</b> This is an additional useful constraint mechanism that encourages the extraction of reliable and instructive features. It involves introducing noise to the input data during training and teaching the network to remove it.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Tuning Activation Functions :-</b> By modifying a node's activation function, a large percentage of nodes can be made to go dormant. This substantially lowers the complexity of the hidden layers and makes it easier to extract important data elements.
                        </p>
                    </li>
                </ol>
                <p>
                    By using these techniques, autoencoders can generate input data representations that are more condensed and informative, increasing their usefulness in a range of applications.
                </p>
            </div>

            <div>
                <h3 className="subHead">Types of Autoencoders</h3>
                <p>
                    There are many types of autoencoders and analyze the advantages and disadvantages associated with different variation :-
                </p>

                <p>
                    <b>Denoising autoencoder :-</b> In order to learn how to rebuild the original, undistorted version of the data, denoising autoencoders are trained on partially corrupted input data. This method successfully prevents the network from just reproducing the input, pushing it to identify the fundamental characteristics and underlying structure of the data instead.
                </p>
                <p>Advantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Feature Extraction :- By eliminating noise or extraneous features, denoising autoencoders are highly effective in identifying significant features from input data and producing more insightful representations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Data Augmentation :- Denoising autoencoders can function as a type of data augmentation by producing restored images from corrupted input, which can offer more training samples and improve the model's capacity for generalization.
                        </p>
                    </li>
                </ol>

                <p>Disdvantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        Noise Selection :- To get the best results, it can be difficult to decide what kind and amount of noise to add. In certain cases, domain expertise may be required.
                        </p>
                    </li>
                    <li>
                        <p>
                            Information Loss :- The accuracy of the reconstructed output may be impacted if certain crucial information from the original input is unintentionally lost during the denoising process.
                        </p>
                    </li>
                </ol>

                <p>
                    <b>Sparse Autoencoder :-</b> Compared to the input data, sparse autoencoders usually include more hidden units; however, only a portion of these units are allowed to be active at any given time. This property, referred to as network sparsity, can be modified in a number of ways, including by adding a loss component to the cost function, modifying activation functions, or manually zeroing specific hidden units.
                </p>
                <p>Advantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Filtering Out Noise and Irrelevant Features: During the encoding stage, the sparsity restriction contained in sparse autoencoders helps to remove noise and irrelevant features, producing more intelligible representations of the input.
                        </p>
                    </li>
                    <li>
                        <p>
                            Emphasis on Important Features: Because sparse autoencoders concentrate on sparse activations, they frequently give priority to learning significant and relevant features, which aids in the extraction of noteworthy data characteristics.
                        </p>
                    </li>
                </ol>

                <p>Disdvantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Hyperparameter Sensitivity: Appropriate hyperparameter selection has a significant impact on sparse autoencoder performance. For best results, it is essential to make sure that distinct inputs cause separate network nodes to activate.
                        </p>
                    </li>
                    <li>
                        <p>
                            Enhanced Computational difficulty: The sparsity constraint's implementation raises the computational difficulty of the training procedure, which may result in longer training periods and more resource requirements.
                        </p>
                    </li>
                </ol>

                <p>
                    <b>Variational Autoencoder :-</b> Variational autoencoders (VAEs) make assumptions regarding the distribution of latent variables and employ the Stochastic Gradient Variational Bayes estimator during training. They assume a Directed Graphical Model for data generation and aim to approximate qϕ(z∣x) to the conditional property qθ(z∣x), where ϕ and θ represent the parameters of the encoder and decoder respectively.
                </p>
                <p>Advantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Creation of New Data: VAEs are skilled in creating new data points that bear similarities to the initial training set. These samples provide a useful tool for data production tasks because they are learned from the latent space.
                        </p>
                    </li>
                    <li>
                        <p>
                        Probabilistic Framework: To learn compressed representations of data and identify underlying structures and variations, VAEs use a probabilistic framework. They can therefore be used to find patterns in data and identify anomalies.
                        </p>
                    </li>
                </ol>

                <p>Disdvantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Approximation Errors: In order to estimate the true distribution of latent variables, VAEs rely on approximations, which results in some degree of mistake. Both the accuracy of the learnt representations and the quality of the generated samples may be impacted by this.
                        </p>
                    </li>
                    <li>
                        <p>
                            Limited Diversity: Only a portion of the genuine data distribution may be covered by generated samples from VAEs, which results in a deficiency in diversity. The model's capacity to capture the entire range of data variances may be impacted by this constraint.
                        </p>
                    </li>
                </ol>

                <p>
                    <b>Convolutional autoencoder :-</b> Convolutional autoencoders are based on convolutional neural networks (CNNs), which are multilayer encoding and decoding systems. An image or grid is sent into the encoder, which uses a number of convolutional layers to transform it into a compressed representation. Conversely, this procedure is reversed by the decoder, which reconstructs the original image by deconvolving the compressed representation.
                </p>
                <p>Advantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Dimensionality reduction: High-dimensional picture data is efficiently compressed into a lower-dimensional format by    convolutional autoencoders. This improves the effectiveness of storage and makes image data transmission easier.
                        </p>
                    </li>
                    <li>
                        <p>
                             Picture Reconstruction: These autoencoders are robust for tasks involving picture completeness or variation handling because they can handle small variations in object position or orientation and recreate missing portions of an image.
                        </p>
                    </li>
                </ol>

                <p>Disdvantages :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            Overfitting: When working with complicated datasets, convolutional autoencoders are especially prone to overfitting. To assure generalization and reduce this problem, appropriate regularization techniques need to be used.
                        </p>
                    </li>
                    <li>
                        <p>
                        Compression of Data Trade-off: Although compression increases the effectiveness of storage and transmission, it can also cause data loss, which forces lower-quality images to be recreated. Maintaining critical data features while balancing compression is essential to preventing image quality loss.
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Applications of encoder</h3>
                <p>
                    Encoders are useful in many different fields because they can convert unprocessed input into meaningful representations. Typical uses for them include :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Image Recognition :-</b> Encoders are used in computer vision tasks to extract information from images, allowing computers to accurately classify images, detect patterns, and identify objects.
                        </p>
                    </li>
                    <li>
                        <p>
                             Encoders are essential to Natural Language Processing (NLP) applications like sentiment analysis, text classification, and language translation. They enable algorithms to efficiently evaluate and comprehend textual material by converting text data into numerical vectors.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Anomaly Detection :-</b> Normal data patterns are encoded by encoders in anomaly detection systems. These encoded representations are useful for identifying fraud, network breaches, and equipment malfunctions since any departure from them indicates a possible anomaly or outlier in the dataset.
                        </p>
                    </li>
                    <li>
                        <p>
                             <b>Recommendation Systems:</b> In recommendation systems, encoders aid in the creation of embeddings for item attributes or user preferences. Recommendation engines can offer users customized recommendations by encoding item properties or user behavior.
                        </p>
                    </li>
                    <li>
                        <p>
                             <b>Reducing Dimensionality :-</b> Encoders are used to make data less dimensional while maintaining its key characteristics. This is helpful when analyzing high-dimensional data through activities like feature selection, grouping, and data visualization.
                        </p>
                    </li>
                </ol>
                <p>
                    All things considered, encoders are essential parts of many machine learning and deep learning applications, making it possible to efficiently represent data, extract features, and recognize patterns in a variety of fields.
                </p>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    Encoders play a crucial role in deep learning and machine learning applications by helping to convert unprocessed data into meaningful representations. They are widely used in many different fields, including as dimensionality reduction, computer vision, natural language processing, anomaly detection, and recommendation systems. Encoders are used in image recognition jobs to extract features from images, which allows for precise pattern and object detection. They help with text categorization and sentiment analysis in natural language processing by converting text data into numerical vectors. In anomaly detection systems, encoders play a crucial role by encoding typical data patterns in order to spot anomalies or outliers. Moreover, encoders create embeddings for item attributes or user preferences in recommendation systems to offer customized recommendations. By streamlining high-dimensional data for feature selection, clustering, and visualization, encoders also aid in the decrease of dimensionality. All things considered, encoders are essential for improving the ability to represent data, extract features, and recognize patterns in a variety of machine learning applications.
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
                            <span className="codeKey">import</span> torch
                            {"\n"}<span className="codeKey">import</span> torch.nn <span className="codeKey">as</span> nn
                            {"\n"}<span className="codeKey">import</span> torchvision
                            {"\n"}<span className="codeKey">import</span> torchvision.transforms <span className="codeKey">as</span> transforms
                            {"\n"}<span className="codeKey">import</span> matplotlib.pyplot <span className="codeKey">as</span> plt
                            <br/>

                            {"\n"}<span className="codeComment"># Device configuration</span>
                            {"\n"}device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
                            <br/>

                            {"\n"}<span className="codeComment"># MNIST dataset (internal dataset)</span>
                            {"\n"}transform = transforms.Compose([ transforms.ToTensor(), transforms.Normalize((0.5,), (0.5,))])
                            <br/>


                            {"\n"}train_dataset = torchvision.datasets.MNIST(root='./data', train=True, transform=transform, download=True)
                            {"\n"}train_loader = torch.utils.data.DataLoader(dataset=train_dataset, batch_size=128, shuffle=True)
                            <br/>

                            {"\n"}<span className="codeComment"># Autoencoder model</span>
                            {"\n"}<span className="codeKey">class</span> Autoencoder(nn.Module):
                            {"\n"}      <span className="codeKey">def</span> __init__(self):
                            {"\n"}              super(Autoencoder, self).__init__()
                            {"\n"}              self.encoder = nn.Sequential(nn.Linear(28 * 28, 128), nn.ReLU(True), nn.Linear(128, 64), 
                            {"\n"}                 nn.ReLU(True), nn.Linear(64, 32) )
                            {"\n"}              self.decoder = nn.Sequential(
                                nn.Linear(32, 64),
                                nn.ReLU(True),
                                nn.Linear(64, 128),
                                nn.ReLU(True),
                                {"\n"}                  nn.Linear(128, 28 * 28),
                                nn.Tanh()
                            )
                            <br/>

                            {"\n"}      <span className="codeKey">def</span> forward(self, x):
                            {"\n"}              x = self.encoder(x)
                            {"\n"}              x = self.decoder(x)
                            {"\n"}              <span className="codeKey">return</span> x

                            {"\n"}<span className="codeComment"># Model initializationl</span>
                            {"\n"}model = Autoencoder().to(device)
                            <br/>

                            {"\n"}<span className="codeComment"># Loss and optimizer</span>
                            {"\n"}criterion = nn.MSELoss()
                            {"\n"}optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
                            <br/>

                            {"\n"}<span className="codeComment"># Training the autoencoder</span>
                            {"\n"}num_epochs = 10
                            {"\n"}<span className="codeKey">for</span> epoch <span className="codeKey">in</span> range(num_epochs):
                            {"\n"}      <span className="codeKey">for</span> data <span className="codeKey">in</span> train_loader:
                            {"\n"}              img, _ = data
                            {"\n"}              img = img.to(device)
                            {"\n"}              img = img.view(img.size(0), -1)
                            {"\n"}              <span className="codeComment"># Forward pass</span>
                            {"\n"}              output = model(img)
                            {"\n"}              loss = criterion(output, img)
                            {"\n"}              <span className="codeComment"># Backward pass and optimization</span>
                            {"\n"}              optimizer.zero_grad()
                            {"\n"}              loss.backward()
                            {"\n"}              optimizer.step()
                            {"\n"}      print(f'Epoch [&#65371;epoch+1&#65373;/&#65371;num_epochs&#65373;], Loss: &#65371;loss.item():.4f&#65373;')
                            <br/>

                            {"\n"}<span className="codeComment"># Testing the autoencoder</span>
                            {"\n"}<span className="codeKey">with</span> torch.no_grad():
                            {"\n"}      <span className="codeKey">for</span> data <span className="codeKey">in</span> train_loader:
                            {"\n"}              img, _ = data
                            {"\n"}              img = img.to(device)
                            {"\n"}              img = img.view(img.size(0), -1)
                            {"\n"}              output = model(img)
                            {"\n"}              <span className="codeKey">break</span>
                            <br/>

                            {"\n"}<span className="codeComment"># Plot original images and reconstructed images</span>
                            {"\n"}plt.figure(figsize=(10, 4))
                            {"\n"}<span className="codeKey">for</span> i <span className="codeKey">in</span> range(5):
                            {"\n"}      <span className="codeComment"># Original images</span>
                            {"\n"}      plt.subplot(2, 5, i + 1)
                            {"\n"}      plt.imshow(img[i].cpu().numpy().reshape(28, 28), cmap='gray')
                            {"\n"}      plt.title('Original')
                            {"\n"}      plt.axis('off')
                            {"\n"}      <span className="codeComment"># Reconstructed images</span>
                            {"\n"}      plt.subplot(2, 5, i + 6)
                            {"\n"}      plt.imshow(output[i].cpu().numpy().reshape(28, 28), cmap='gray')
                            {"\n"}      plt.title('Reconstructed')
                            {"\n"}      plt.axis('off')
                            {"\n"}plt.show()
                        </code>
                    </pre>
                    </div>
                </div>


            </div>
        </div>
    );
};
export default Autoencoder;