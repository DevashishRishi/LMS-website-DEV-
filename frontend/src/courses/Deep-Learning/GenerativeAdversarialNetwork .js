import React from "react";
import Figure1 from "../../assests/CourseImages/DeepLearning/GenerativeAdversarialNetwork/Figure1.png"

const GenerativeAdversarialNetwork = () =>{
    return (
        <div>
            <br/>
            <div>
                <h3 className="subHead">Generative Adversarial Network </h3>
                <p>
                    Deep learning generative modeling is leading the way with Generative Adversarial Networks (GANs). The generator and the discriminator make up their two primary parts. Using random noise as input, the generator learns to produce data samples that are similar to the training set. In the meantime, the generator creates false samples, which the discriminator learns to differentiate from actual data samples from the training set.
                </p>

                <p>
                    The discriminator and generator play a min-max game during training. While the discriminator seeks to accurately discriminate between actual and fake samples, the generator seeks to produce samples that are identical to real data. Over time, both the discriminator and the generator get better because to this adversarial process.
                </p>

                <p>
                    The generator becomes better at creating realistic samples as training goes on, while the discriminator gets better at telling actual data from fake data. The generator eventually has the ability to create samples that are so lifelike that the discriminator is unable to tell them apart from actual data.
                </p>

                <p>
                    Applications for GANs can be found in many different fields, including text production, picture-to-image translation, and image generation. They have proven to be very adept at producing realistic, varied, and high-quality data, highlighting their promise for a wide range of useful applications in domains such as computer vision, graphics, and natural language processing.
                </p>

                <p>Generative Adversarial Networks (GANs) can be divided into three parts they are :-</p>

                <ol>
                    <li>
                        <p>
                        <b>Generative :-</b> Learning a model that can produce new data samples is the main goal of this GAN feature. It entails figuring out the data's underlying probability distribution and producing fresh examples that adhere to the same patterns.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Adversarial :-</b> The adversarial part of GANs consists of establishing a competition between the discriminator and generator neural networks. The discriminator is trained to distinguish between instances of real and fake data, and the generator's goal is to generate synthetic data that is persuasive enough to deceive it. 
                        </p>
                    </li>
                    <li>
                        <p>
                       <b> Networks :-</b> Deep neural networks, which are highly developed artificial intelligence systems, are used by GANs during their training phase. These networks consist of interconnected layers of nodes that use the data to learn complicated representations. Based on these learnt patterns, the nodes then use the information to generate new samples or make predictions. 
                        </p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Architecture of GAN</h3>
                <p>Basically, a Generative Adversarial Network (GAN) has two main parts, they are :-</p>
                <ol style={{listStyleType:"decimal"}}>
                    <li>
                        <p>Generator </p>
                    </li>
                    <li>
                        <p>Discriminator</p>
                    </li>
                </ol>
            </div>

            <div>
                <h3 className="subHead">Generator Model</h3>
                <p>
                    By producing new and precise data, the generator model is essential to Generative Adversarial Networks (GANs). It works by converting random noise into complex data samples, such as text or images, as input. The generator, which is commonly represented as a deep neural network, gains the ability to comprehend the training data's underlying distribution by means of its several configurable parameter layers. During training, the generator uses methods like as backpropagation to fine-tune its settings and produce samples that closely mimic real data. Its success with GANs stems from its capacity to generate diverse, high-quality samples that can successfully trick the discriminator.
                </p>
                <p>
                    <b>Generator Loss (JG) :-</b> In a Generative Adversarial Network (GAN), the generator loss quantifies the degree to which the generator is able to trick the discriminator. It shows how closely the produced samples resemble the original data.
                </p>
                <p>
                    The goal of the GAN generator is to minimize this loss function because it shows that the generator is generating more realistic samples when the loss is smaller. Typically, the loss function is a measure of the difference between the genuine labels (which indicate that the samples are phony) and the discriminator's predictions for created samples.
                </p>
                <p>
                     One common formulation for the generator loss is the binary cross-entropy loss, which is calculated as :
                </p>
                {/* Generator Loss = -1/m ∑_(i=1)^m▒log(D(G(z^((i)) )))  */}
                <p>Here :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p><span className="emFont">m</span> is the number of generated samples.</p>
                    </li>
                    <li>
                        <p><span className="emFont">Z<sup>(i)</sup></span> represents the random noise input to the generator for the ith sample.</p>
                    </li>
                    <li>
                        <p><span className="emFont">G(Z<sup>(i)</sup>)</span> is the output of the generator given the input z<sup>(i)</sup>.</p>
                    </li>
                    <li>
                        <p><span className="emFont">D(.)</span> represents the discriminator’s prediction function.</p>
                    </li>
                    <li>
                        <p><span className="emFont">Log(.)</span> denotes the natural logarithm.</p>
                    </li>
                </ol>
                <p>
                    Put more simply, the generator loss is determined by calculating the logarithm of the generated samples' discriminator predictions. Reducing this loss makes the generator more likely to generate samples that the discriminator will consider real, which enhances the generator's capacity to provide data that is realistic.
                </p>
            </div>

            <div>
                <h3 className="subHead">Discriminator Model</h3>
                <p>
                    The discriminator model is a crucial part of Generative Adversarial Networks (GANs) that is responsible for differentiating between generated and actual input data. It evaluates incoming samples and assigns probabilities to identify their legitimacy, functioning as a binary classifier. The discriminator gains the ability to distinguish between real data from the dataset and synthetic samples generated by the generator through iterative training. Through this procedure, the discriminator's capacity to correctly classify data is improved by progressively honing its settings.
                </p>
                <p>
                    Convolutional layers or other pertinent structures are frequently used in the creation of discriminators in designs intended for picture data. These elements provide the discriminator the ability to evaluate visual characteristics and determine authenticity with accuracy.
                </p>

                <p>
                    Maximizing the discriminator's ability to accurately classify genuine samples as legitimate and generated samples as fraudulent is the main goal of adversarial training. The discriminator gains a greater degree of discernment through the continuous interaction between the generator and discriminator, which enhances the GAN's overall capacity to produce extremely lifelike synthetic data.
                </p>

                <p>
                    <b>Discriminator loss (JD) :-</b> In a Generative Adversarial Network (GAN), the discriminator loss indicates how well the discriminator distinguishes between generated and actual input. It calculates the difference between the labels (false or real) and the discriminator's predictions.
                </p>

                <p>
                    One common formulation for discriminator loss is the binary cross-entropy loss, calculated as :-
                </p>

                {/* <p>Discriminator loss = -(1/m ∑_(i=1)^m▒log(D(y^((i)) )) +1/m ∑_(i=1)^m▒log(1-D(G(z^((i)) ))) )</p> */}

                <p>In the above formula :-</p>

                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p><span className="emFont">m </span>is the number of samples,</p>
                    </li>
                    <li>
                        <p><span className="emFont">y<sup>(i)</sup></span> represents the true for real data (1 for real samples),</p>
                    </li>
                    <li>
                        <p><span className="emFont">G(z<sup>(i)</sup>)</span> is the generated output of the generator given the input noise <span className="emFont">z<sup>(i)</sup></span>,</p>
                    </li>
                    <li>
                        <p><span className="emFont">D(.)</span> represents the discriminator’s prediction function,</p>
                    </li>
                    <li>
                        <p><span className="emFont">Log(.)</span> denotes the natural logarithm.</p>
                    </li>
                </ol>
                <p>
                    There are two terms in this loss function: the first term counts the mistake in identifying actual data, and the second term counts the mistake in identifying created data as fraudulent. The discriminator correctly classifies both actual and fraudulent data in an effort to reduce this loss.
                </p>

                <p>
                    To put it simply, reducing the discriminator loss makes the discriminator more adept at differentiating between generated and actual data, which enhances the GAN's overall performance.
                </p>

                <p>
                    <b>MinMax Loss :-</b> An essential part of training Generative Adversarial Networks (GANs) is the adversarial loss, or MinMax loss. In the context of the GAN framework, it represents the antagonistic interaction between the discriminator and generator.
                </p>
                <p>
                    The generator and discriminator play a game to determine the MinMax loss. The discriminator seeks to maximize this loss, whereas the generator seeks to decrease it. The objective is to locate a Nash equilibrium, in which neither party may unilaterally alter their approach to better their outcome.
                </p>
                <p>The MinMax loss is mainly expressed as :-</p>
                <span className="formula">MinMax Loss = &#120124;<sub>x~p<sub>data</sub>x</sub> [log⁡〖D(x)〗 ] + &#120124;<sub>z~p<sub>z</sub>z</sub> [log(1-D(G(z)))]</span>
                <p>Here :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p><span className="emFont">x</span> represents real data samples,</p>
                    </li>
                    <li>
                        <p><span className="emFont">p<sub>data</sub>(x)</span> is the distribution of real data,</p>
                    </li>
                    <li>
                        <p><span className="emFont">z</span> represents random noise input to the generator,</p>
                    </li>
                    <li>
                        <p><span className="emFont">p<sub>z</sub>(z)</span> is the distribution of the input noise,</p>
                    </li>
                    <li>
                        <p><span className="emFont">G(z)</span> is the output of the generator given input noise z,</p>
                    </li>
                    <li>
                        <p><span className="emFont">D(.)</span> is the discriminator’s prediction function,</p>
                    </li>
                    <li>
                        <p>&#120124; denotes the expected value, representing averaging over all possible inputs.</p>
                    </li>
                </ol>
                <p>
                    The discriminator's loss when categorizing created data as fake, and the discriminator's loss when classifying genuine data as real, are represented by the first and second terms, respectively, of the MinMax loss. 
                </p>
                <p>
                    The discriminator seeks to maximize this loss by accurately distinguishing genuine and fake data, while the generator seeks to minimize it by producing data that is indistinguishable from real data. The generator produces realistic data because of this adversarial process, which pushes both the discriminator and the generator to improve iteratively until an equilibrium is found.
                </p>
            </div>

            <div>
                <h3 className="subHead">How does a generative adversarial network work ?</h3>
                <p>
                    The discriminator and generator are two deep neural networks that make up a generative adversarial network (GAN). These networks play an adversarial game in which one produces fresh data and the other determines whether it is authentic or fraudulent.  
                </p>
                <p>This is a condensed description of how GANs function :-</p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            To comprehend the characteristics of the training data, the generating network evaluates it.
                        </p>
                    </li>
                    <li>
                        <p>
                            In order to identify its unique characteristics, the discriminator network examines the original data as well.
                        </p>
                    </li>
                    <li>
                        <p>
                            To create modified samples, the generator adds noise or random modifications to certain of the data's properties.
                        </p>
                    </li>
                    <li>
                        <p>
                            The discriminator receives these altered samples next.
                        </p>
                    </li>
                    <li>
                        <p>
                            The discriminator assesses how likely it is that the samples that are generated are part of the original dataset.
                        </p>
                    </li>
                    <li>
                        <p>
                            The generator modifies its procedure in order to lower noise in the following iteration based on the discriminator's input.
                        </p>
                    </li>
                    <li>
                        <p>
                            The discriminator seeks to reduce mistake, whereas the generator seeks to enhance the possibility of tricking it.
                        </p>
                    </li>
                    <li>
                        <p>
                            Both the generator and the discriminator compete and get better over several training iterations until they reach a point where the discriminator is unable to tell the difference between synthetic and real data. 
                        </p>
                    </li>
                    <li>
                        <p>
                            The training procedure ends when this equilibrium is attained. 
                        </p>
                    </li>
                </ol>
                <p>
                    In conclusion, the generator and discriminator work together continuously to enhance one another's performance until the generator can produce artificial data that is identical to genuine data.
                </p>
                <div className="figure-container">
                        <img src={Figure1} alt="" />
                </div>
            </div>
            <br/>

            <div>
                <h3 className="subHead">Different Types of GAN Models</h3>
                <p>
                    <b>Vanilla GAN :-</b> Comprising a generator and discriminator network, the Vanilla GAN is the most basic version of the GAN architecture. The discriminator gains the ability to distinguish between created and genuine samples, while the generator is trained to produce data that is indistinguishable from real data. This paradigm is the basis for several GAN technology innovations.
                </p>
                <p>
                    <b>Conditional GAN (cGAN) :-</b> To direct the generation process, supplementary data is given to the discriminator and generator in a Conditional GAN. More regulated and focused generation is made possible by this additional information, which is frequently in the form of labels or class information. Applications for cGANs include image-to-image translation, where it is possible to manipulate particular features or qualities of the generated output.
                </p>
                <p>
                    Convolutional neural networks (CNNs) are used by Deep Convolutional GANs (DCGANs) in both the generator and discriminator designs. DCGANs are especially good at producing realistic details in high-resolution photos by using convolutions. They have established themselves as a standard architecture in the GAN literature thanks to their outstanding performance in picture generating tasks.
                </p>
                <p>
                    Wasserstein GAN (WGAN): Compared to conventional GANs, the Wasserstein GAN offers more stable training dynamics by introducing a novel loss function based on the Wasserstein distance, also referred to as the Earth Mover's distance. Training convergence and generation quality are enhanced as WGANs tackle problems like mode collapse and training instability.
                </p>
                <p>
                    <b>Progressive GAN :-</b> During training, progressive GANs begin with low-resolution images and progressively increase it. This allows them to expand both the generator and discriminator architectures. The production of finely detailed, high-resolution photographs is made possible by this ongoing training procedure. In image synthesis tasks, progressive GANs have successfully produced photorealistic images and established new standards.
                </p>
                <p>
                    A particular version of Generative Adversarial Networks (GANs), Laplacian Pyramid GAN (LAPGAN) uses the idea of Laplacian pyramids to generate images. Motivated by the multi-scale decomposition of Laplacian pyramids, which are frequently employed in image processing, LAPGAN introduces a hierarchical structure to both the generator and discriminator networks. The generator in LAPGAN creates images at various resolutions and iteratively improves them based on the discriminator's feedback. By using a hierarchical technique, LAPGAN is able to produce images with fine details and excellent quality while retaining computational economy. Tasks including super-resolution, image completion, and texture generation have all been successfully handled with LAPGAN, demonstrating the tool's adaptability and potential to further generative modeling methods.
                </p>
                <p>
                 A specific kind of Generative Adversarial Network (GAN) designed to improve the resolution and quality of low-resolution images is called Super Resolution GAN (SRGAN). A discriminator network and a generator network are parts of its architecture. The generator uses residual blocks and skip connections to create high-resolution outputs from low-resolution input images processed by convolutional layers. Through adversarial training, the discriminator assesses the generated high-resolution images and feeds back to the generator, allowing SRGAN to generate aesthetically pleasing images that closely mimic genuine high-resolution equivalents. SRGAN is an effective tool for image restoration and medical imaging because of its impressive performance in a variety of super-resolution tasks.
                </p>
                <p>
                    To improve image processing tasks, Deep Convolutional GAN (DCGAN) leverages the power of convolutional neural networks (CNNs) inside the Generative Adversarial Networks (GANs) architecture. In DCGAN, the discriminator uses convolutional layers to classify data, and the generator uses transposed convolutions to upsample data distributions. In addition, DCGAN presents architectural rules designed to stabilize the training process and help produce images that are more dependable and efficient.
                </p>
            </div>

            <div>
                <h3 className="subHead">Application of Generative Aversarial Networks</h3>
                <p>
                    Because they produce realistic data samples, Generative Adversarial Networks, or GANs, have found a wide range of uses. Among the noteworthy uses of GANs are :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                        <b>Image Generation :-</b> High-quality, photorealistic photos are frequently produced by GANs. They can produce wholly new photos depending on predetermined criteria, or they can produce new images that mimic already-existing datasets.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Image-to-Image Translation :-</b> GANs can be used to transfer images between domains while maintaining their fundamental qualities. This covers activities including altering an image's design, improving image resolution, and turning sketches into realistic images.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Data Augmentation :-</b> By producing more synthetic data samples, GANs are used to enhance training datasets. This enhances machine learning models' performance, particularly in situations where there is a deficiency of training data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Style Transfer :-</b> GANs facilitate the artistic style transfer across images, enabling users to apply one image's features (such texture and color scheme) to another without affecting the content of the original.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Video creation :-</b> By extending their picture creation skills to the temporal domain, GANs are able to produce realistic video sequences. This covers tasks including frame interpolation, video synthesis, and video prediction.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Text-to-Image Synthesis :-</b> Using natural language inputs, GANs can produce images by using textual descriptions as a basis. This can help with content development and generate pictures based on text prompts.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Drug Discovery :-</b> To create molecular structures with desirable features, GANs are employed in drug discovery. They have the ability to quickly and effectively explore chemical space and suggest new molecules with particular characteristics, which could hasten the medication development process.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Anomaly Detection :-</b> By learning the normal distribution of data and spotting deviations from it, GANs can be used for anomaly detection jobs. Applications for this include cybersecurity, problem diagnostics, and fraud detection.
                        </p>
                    </li>
                </ol>
                <p>
                    Overall, because of their adaptability, Generative Adversarial Networks are useful tools in a variety of industries, including cybersecurity, computer vision, and graphics. It is anticipated that as GAN research advances, its applications will grow and change even more.
                </p>
            </div>

            <div>
                <h3 className="subHead">Advantages of Generative Adversarial Networks (GANs)</h3>
                <p>
                The following benefits of using Generative Adversarial Networks (GANs) make them an effective tool in the generative modeling and machine learning domains :-
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Realistic Data Generation :-</b> Whether it's images, text, audio, or other forms of data, GANs are able to produce synthetic data samples that bear a striking resemblance to genuine data. For applications like data augmentation, picture synthesis, and the creation of varied datasets for machine learning model training, the capacity to produce realistic data is indispensable.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Unsupervised Learning :-</b> Without labeled training examples, a model can learn to generate data on its own thanks to GANs. This is especially helpful in situations where obtaining tagged data is difficult or costly.
                        </p>
                    </li>
                    <li>
                        <p>
                          <b>Superior Outputs :-</b> GANs can generate outputs with realistic features and precise details that are of a high caliber. Adversarial training is used to do this, in which the generator continuously becomes better at producing data that is harder and harder for the discriminator to tell apart from actual data.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Versatility :-</b> GANs are adaptable and can be used for a variety of tasks, such as text production, style transfer, picture-to-image translation, and image generation. Their adaptability enables innovative applications in a range of fields.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Data Augmentation :-</b> By producing more synthetic data samples, GANs can be utilized to enhance training datasets. This enhances machine learning models' functionality and generalizability, particularly in situations where there is a dearth of training data.
                        </p>
                    </li>
                    <li>
                        <p>
                             <b>Transfer Learning :-</b> GANs that have been trained on sizable datasets are able to recognize the underlying data distributions and apply this understanding to challenges within the same area. Transfer learning is made possible by this, allowing trained GAN models to be adjusted for particular uses using less datasets.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Robustness to Adversarial assaults :-</b> It has been demonstrated that GANs are resilient to adversarial assaults, which involve the addition of tiny perturbations to input data in order to trick machine learning algorithms. In GANs, adversarial training enhances the robustness and resistance of the model against these kinds of attacks.
                        </p>
                    </li>
                </ol>
                <p>
                Generative Adversarial Networks are a useful tool for many applications in machine learning, computer vision, natural language processing, and other fields because of their many advantages. It is anticipated that GANs' capabilities will grow as research into them advances, opening up new avenues for generative modeling and artificial intelligence.
                </p>
            </div>

            <div>
                <h3 className="subHead">Disadvantages of Generative Adversarial Networks (GANs)</h3>
                <p>
                    Although Generative Adversarial Networks (GANs) have many benefits, they also have several drawbacks and difficulties.
                </p>
                <ol style={{listStyleType:"disc"}}>
                    <li>
                        <p>
                            <b>Mode Collapse :-</b> When a generator generates a restricted range of outputs while disregarding portions of the data distribution, it is known as mode collapse and affects GANs. As a result, just a portion of the potential outputs are covered by the generated samples, which lack diversity.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Training Instability :-</b> Hyperparameters, architecture selections, and initialization can all have an impact on how unstable GAN training is. Variations in training dynamics, vanishing gradients, and mode collapse are common problems that can impede convergence and reduce performance.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Evaluation Metrics :-</b> It can be difficult to compare various GAN models and judge the caliber of samples that are produced. It's possible that conventional evaluation criteria, like Inception Score or Frechet Inception Distance, don't always fairly represent the variety and perceptual quality of generated samples.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Computational Resources :-</b> A lot of processing power, such as strong GPUs or TPUs and lots of memory, are needed to train GANs. Their accessibility and usefulness are limited for certain applications due to their long training times, particularly for high-resolution picture generating jobs.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Raining Data Quality :-</b> The caliber and variety of the training data have a major impact on GAN performance. Biased or low-quality datasets can produce biased or artifact-filled samples as well as less-than-ideal outcomes.
                        </p>
                    </li>
                    <li>
                        <p>
                        <b>Mode Dropping :-</b> Unlike mode collapse, mode dropping happens when the generator ignores other modes and concentrates primarily on creating samples from a small number of the data distribution's modes. As a result, the data distribution is not fully covered, which could produce skewed or insufficient results.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Lack of Control :-</b> Because GANs do not provide explicit control over the outputs they produce, it is difficult to modify particular properties or traits of the samples they produce. While conditional GANs somewhat overcome this drawback, fine-grained control may still be subject to certain restrictions.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Ethical Concerns :-</b> Since GAN-generated samples are realistic, there are ethical questions about how they might be used improperly to create deepfakes, fake content, and misleading media. In order to ensure the responsible and ethical use of GAN technology, it is imperative to address certain ethical considerations.
                        </p>
                    </li>
                </ol>
                <p>
                    All things considered, while GANs have amazing generative modeling capabilities, these restrictions and difficulties must be resolved in order to realize their full potential and guarantee their responsible implementation in practical applications.
                </p>
            </div>

            <div>
                <h3 className="subHead">Summary</h3>
                <p>
                    Although they provide a groundbreaking method to generative modeling, Generative Adversarial Networks (GANs) have a number of significant problems. Mode collapse is a significant problem where the generator produces a limited range of outputs due to its inability to fully capture the diversity of the data distribution. Furthermore, hyperparameters, architectural decisions, and initialization can all have a significant impact on GAN training, which can frequently result in training instability that manifests as mode oscillations and disappearing gradients. Evaluating GAN performance accurately is a substantial difficulty as well, since the perceived quality and diversity of produced samples may not be adequately captured by typical metrics. Large datasets and robust hardware are prerequisites for training GANs because to their high computational needs. The quality and diversity of samples that are created can also be affected by mode dropping, a phenomena in which the generator ignores certain modes of the data distribution and concentrates excessively on others. Additionally, it is difficult to change particular qualities or characteristics because to the absence of explicit control over created outputs. Finally, the necessity for responsible GAN technology deployment and regulation is highlighted by ethical concerns about the possible exploitation of GAN-generated content, such as deepfakes and misleading media. In order to fully realize the transformational potential of GANs and ensure their responsible and ethical application across a range of fields, it is vital that these problems be addressed.
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
                            <span className="codeKey">import</span> tensorflow <span className="codeKey">as</span> tf
                            {"\n"}<span className="codeKey">from</span> tensorflow.keras <span className="codeKey">import</span> layers, models
                            {"\n"}<span className="codeKey">import</span> numpy <span className="codeKey">as</span> np
                            {"\n"}<span className="codeKey">import</span> matplotlib.pyplot <span className="codeKey">as</span> plt
                            <br/>

                            {"\n"}<span className="codeComment"># Load MNIST dataset</span>
                            {"\n"}(train_images, _), (_, _) = tf.keras.datasets.mnist.load_data()
                            {"\n"}train_images = train_images.reshape(train_images.shape[0], 28, 28, 1).astype('float32')
                            {"\n"}train_images = (train_images - 127.5) / 127.5  <span className="codeComment"># Normalize images to [-1, 1]</span>
                            <br/>

                            {"\n"}<span className="codeComment"># Define generator model</span>
                            {"\n"}<span className="codeKey">def</span> make_generator_model():
                            {"\n"}      model = models.Sequential()
                            {"\n"}      model.add(layers.Dense(7*7*256, use_bias=False, input_shape=(100,)))
                            {"\n"}      model.add(layers.BatchNormalization())
                            {"\n"}      model.add(layers.LeakyReLU())
                            <br/>

                            {"\n"}      model.add(layers.Reshape((7, 7, 256)))
                            {"\n"}      <span  className="codeKey">assert</span> model.output_shape == (None, 7, 7, 256) 
                            <br/>

                            {"\n"}      model.add(layers.Conv2DTranspose(128, (5, 5), strides=(1, 1), padding='same', use_bias=False))
                            {"\n"}      <span className="codeKey">assert</span> model.output_shape == (None, 7, 7, 128)    
                            {"\n"}      model.add(layers.BatchNormalization())
                            {"\n"}      model.add(layers.LeakyReLU())
                            <br/>

                            {"\n"}      model.add(layers.Conv2DTranspose(64, (5, 5), strides=(2, 2), padding='same', use_bias=False))
                            {"\n"}      <span className="codeKey">assert</span> model.output_shape == (None, 14, 14, 64)
                            {"\n"}      model.add(layers.BatchNormalization())
                            {"\n"}      model.add(layers.LeakyReLU())
                            <br/>

                            {"\n"}      model.add(layers.Conv2DTranspose(1, (5, 5), strides=(2, 2), padding='same', use_bias=False, 
                            {"\n"}      activation='tanh'))
                            {"\n"}      <span className="codeKey">assert</span> model.output_shape == (None, 28, 28, 1)
                            <br/>

                            {"\n"}      <span className="codeKey">return</span> model
                            <br/>

                            {"\n"}<span className="codeComment"># Define discriminator model</span>
                            {"\n"}<span className="codeKey">def</span> make_discriminator_model():
                            {"\n"}      model = models.Sequential()
                            {"\n"}      model.add(layers.Conv2D(64, (5, 5), strides=(2, 2), padding='same', input_shape=[28, 28, 1]))
                            {"\n"}      model.add(layers.LeakyReLU())
                            {"\n"}      model.add(layers.Dropout(0.3))
                            <br/>

                            {"\n"}      model.add(layers.Conv2D(128, (5, 5), strides=(2, 2), padding='same'))
                            {"\n"}      model.add(layers.LeakyReLU())
                            {"\n"}      model.add(layers.Dropout(0.3))
                            <br/>

                            {"\n"}      model.add(layers.Flatten())
                            {"\n"}      model.add(layers.Dense(1))
                            <br/>

                            {"\n"}      <span className="codeKey">return</span> model
                            <br/>

                            {"\n"}<span className="codeComment"># Define loss and optimizers</span>
                            {"\n"}cross_entropy = tf.keras.losses.BinaryCrossentropy(from_logits=True)
                            {"\n"}generator_optimizer = tf.keras.optimizers.Adam(1e-4)
                            {"\n"}discriminator_optimizer = tf.keras.optimizers.Adam(1e-4)
                            <br/>

                            {"\n"}<span className="codeComment"># Define training step</span>
                            {"\n"}@tf.function
                            {"\n"}<span className="codeKey">def</span> train_step(images):
                            {"\n"}      noise = tf.random.normal([BATCH_SIZE, noise_dim])
                            <br/>

                            {"\n"}      <span className="codeKey">with</span> tf.GradientTape() <span className="codeKey">as</span> gen_tape, tf.GradientTape() as disc_tape:
                            {"\n"}              generated_images = generator(noise, training=True)
                            <br/>

                            {"\n"}              real_output = discriminator(images, training=True)
                            {"\n"}              fake_output = discriminator(generated_images, training=True)
                            <br/>

                            {"\n"}              gen_loss = generator_loss(fake_output)
                            {"\n"}              disc_loss = discriminator_loss(real_output, fake_output)
                            <br/>

                            {"\n"}      gradients_of_generator = gen_tape.gradient(gen_loss, generator.trainable_variables)
                            {"\n"}      gradients_of_discriminator = disc_tape.gradient(disc_loss, discriminator.trainable_variables)
                            <br/>

                            {"\n"}      generator_optimizer.apply_gradients(zip(gradients_of_generator, generator.trainable_variables))
                            {"\n"}      discriminator_optimizer.apply_gradients(zip(gradients_of_discriminator, discriminator.trainable_variables))
                            <br/>

                            {"\n"}      <span className="codeKey">return</span> gen_loss, disc_loss
                            <br/>

                            {"\n"}<span className="codeComment"># Define loss functions</span>
                            {"\n"}<span className="codeKey">def</span> generator_loss(fake_output):
                            {"\n"}      <span className="codeKey">return</span> cross_entropy(tf.ones_like(fake_output), fake_output)
                            <br/>

                            {"\n"}<span className="codeKey">def</span> discriminator_loss(real_output, fake_output):
                            {"\n"}      real_loss = cross_entropy(tf.ones_like(real_output), real_output)
                            {"\n"}      fake_loss = cross_entropy(tf.zeros_like(fake_output), fake_output)
                            {"\n"}      total_loss = real_loss + fake_loss
                            {"\n"}      <span className="codeKey">return</span> total_loss
                            <br/>

                            {"\n"}<span className="codeComment"># Define models</span>
                            {"\n"}generator = make_generator_model()
                            {"\n"}discriminator = make_discriminator_model()
                            <br/>

                            {"\n"}<span className="codeComment"># Define hyperparameters</span>
                            {"\n"}EPOCHS = 100
                            {"\n"}noise_dim = 100
                            {"\n"}num_examples_to_generate = 16
                            {"\n"}BATCH_SIZE = 256
                            <br/>

                            {"\n"}<span className="codeComment"># Train the GAN</span>
                            {"\n"}<span className="codeKey">for</span> epoch <span className="codeKey">in</span> range(EPOCHS):
                            {"\n"}      gen_losses = []
                            {"\n"}      disc_losses = []
                            {"\n"}      <span className="codeKey">for</span> i <span className="codeKey">in</span> range(train_images.shape[0] // BATCH_SIZE):
                            {"\n"}              batch = train_images[i * BATCH_SIZE:(i + 1) * BATCH_SIZE]
                            {"\n"}              gen_loss, disc_loss = train_step(batch)
                            {"\n"}              gen_losses.append(gen_loss)
                            {"\n"}              disc_losses.append(disc_loss)
                            <br/>

                            {"\n"}      print(f'Epoch &#65371;epoch+1&#65373;, Loss: &#65371;np.mean(gen_losses):.4f&#65373;, &#65371;np.mean(disc_losses):.4f&#65373;')
                            <br/>

                            {"\n"}<span className="codeComment"># Generate images</span>
                            {"\n"}noise = tf.random.normal([num_examples_to_generate, noise_dim])
                            {"\n"}generated_images = generator(noise, training=False)
                            <br/>

                            {"\n"}<span className="codeComment"># Plot generated images</span>
                            {"\n"}plt.figure(figsize=(10, 10))
                            <span className="codeKey">for</span> i <span className="codeKey">in</span> range (num_examples_to_generate):
                            {"\n"}      plt.subplot(4, 4, i + 1)
                            {"\n"}      plt.imshow(generated_images[i, :, :, 0] * 127.5 + 127.5, cmap='gray')
                            {"\n"}      plt.axis('off')
                            {"\n"}plt.show()
                            <br/>

                        </code>
                    </pre>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default GenerativeAdversarialNetwork ;