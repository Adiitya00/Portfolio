import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

export const PrintableResume: React.FC = () => {
  return (
    <div
      className="print-container"
      style={{
        display: 'none', // Hidden during standard screen rendering; index.css print media will override this to 'block'
        maxWidth: '800px',
        margin: '0 auto',
        padding: '30px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.4',
        color: '#111111',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="resume-print-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Header */}
        <div style={{ borderBottom: '2px solid #334155', paddingBottom: '12px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#1e293b', marginBottom: '8px' }}>
            ADITYA KAMBLE
          </h1>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              fontSize: '13px',
              color: '#475569',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Phone size={12} /> +91 9359783376
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Mail size={12} /> adityakamble2022@gmail.com
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Globe size={12} /> linkedin.com/in/aditya
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Globe size={12} /> github.com/Adiitya00
            </span>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Professional Summary
          </h3>
          <p style={{ fontSize: '12px', color: '#334155', textAlign: 'justify' }}>
            AI/ML Developer with 1+ year of hands-on experience, currently working as Data & AI Trainee at Fujitsu. Proficient in Python, scikit-learn, TensorFlow, PyTorch, and LangChain, with proven experience building end-to-end AI solutions including RAG pipelines, NLP models, and LLM-powered applications. Experienced in ML model development, data preprocessing, exploratory data analysis, and model evaluation using real-world datasets. Strong problem-solving and analytical skills with a keen interest in predictive modelling, deep learning, and scalable AI applications.
          </p>
        </div>

        {/* Experience */}
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Professional Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            {/* Fujitsu */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>Data & AI Trainee</h4>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>Fujitsu</span>
                </div>
                <div style={{ textAlign: 'right', fontSize: '11px', color: '#64748b' }}>
                  <span>March 2026 – Present</span>
                  <br />
                  <span>Pune, India</span>
                </div>
              </div>
              <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '11.5px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <li>Successfully completed intensive training in Python and Machine Learning fundamentals with hands-on exposure to real-world datasets and enterprise AI workflows.</li>
                <li>Currently undergoing advanced training in Deep Learning and AI model development, focusing on model optimization, evaluation metrics, and predictive analytics.</li>
                <li>Gaining practical exposure to AI concepts, ML pipelines, and data-driven decision-making through real-time learning modules.</li>
              </ul>
            </div>

            {/* Kustodian */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>Software Developer Intern</h4>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>Kustodian.life</span>
                </div>
                <div style={{ textAlign: 'right', fontSize: '11px', color: '#64748b' }}>
                  <span>Feb 2025 – July 2025</span>
                  <br />
                  <span>Bengaluru, India</span>
                </div>
              </div>
              <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '11.5px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <li>Contributed to both frontend and backend development for internal and client-facing applications, ensuring smooth feature delivery and scalable performance.</li>
                <li>Developed REST APIs using FastAPI to enable secure and efficient data communication between services.</li>
                <li>Integrated NoSQL databases to support scalable data management and improve backend data flow.</li>
                <li>Built responsive and dynamic UI components using React.js and Vite, enhancing user experience and interface usability.</li>
                <li>Designed and deployed an automated email agent using n8n, leveraging LLM integration to read, understand, and respond to emails intelligently and in real time.</li>
                <li>Collaborated with cross-functional teams to troubleshoot issues, improve code quality, and align technical solutions with project requirements.</li>
                <li>Gained hands-on experience in foundational system design and scalable architecture principles, improving application structure and maintainability.</li>
              </ul>
            </div>

            {/* TCSiON */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>Intern</h4>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>TCSiON</span>
                </div>
                <div style={{ textAlign: 'right', fontSize: '11px', color: '#64748b' }}>
                  <span>Feb 2024 – May 2024</span>
                  <br />
                  <span>Pune, India</span>
                </div>
              </div>
              <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '11.5px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <li>Developed an NLP-based sentiment analysis model, improving feedback classification accuracy by 92% across large text datasets.</li>
                <li>Built the model to classify reviews into Positive, Negative, and Neutral categories, supporting both small and large-scale input volumes.</li>
                <li>Enhanced model performance through hyperparameter tuning, feature engineering, and algorithm optimization, resulting in significantly higher accuracy and reduced execution time.</li>
                <li>Optimized code efficiency and improved data preprocessing, ensuring smoother pipeline execution and faster inference results.</li>
                <li>Strengthened understanding of NLP workflows, supervised learning, text vectorization, and model evaluation metrics.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Technical Skills
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11.5px', color: '#334155' }}>
            <div>
              <strong>Languages:</strong> Python, C, C++
            </div>
            <div>
              <strong>Frameworks & Libraries:</strong> Flask, Django, FastAPI, NumPy, Pandas, LangChain, scikit-learn, PyTorch, TensorFlow
            </div>
            <div>
              <strong>Databases:</strong> MySQL, PostgreSQL, Firebase, Pinecone (Vector DB)
            </div>
            <div>
              <strong>AI/ML Specializations:</strong> Machine Learning, NLP, Deep Learning, RAG Pipelines, LLM Integration, Sentiment Analysis, Model Evaluation, Building Agents
            </div>
            <div>
              <strong>DevOps & Deployment:</strong> Docker, CI/CD, Git
            </div>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Academic & Independent Projects
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <strong style={{ fontSize: '12.5px', color: '#1e293b' }}>RAG Chatbot with Vector Search</strong>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Python, LangChain, Pinecone, Streamlit</span>
              </div>
              <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '11px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <li>Designed and implemented a Retrieval-Augmented Generation (RAG) chatbot, enabling accurate real-time query responses by combining vector search with LLM reasoning.</li>
                <li>Leveraged Pinecone for high-performance vector storage and similarity search, and used LangChain for orchestration to manage retrieval, prompt construction, and model interaction.</li>
                <li>Built an interactive Streamlit UI that allows users to upload PDFs and extract domain-specific knowledge, enabling seamless question-answering over custom datasets.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <strong style={{ fontSize: '12.5px', color: '#1e293b' }}>Food Delivery App with Sentiment Analysis</strong>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Android, Python, NLP</span>
              </div>
              <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '11px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <li>Built a user-friendly food delivery application that allows users to explore restaurants, view menus, and receive personalized food recommendations.</li>
                <li>Developed a sentiment analysis model in Python to analyze customer reviews and classify them as Positive, Negative, or Neutral, supporting intelligent food suggestions based on ratings and user sentiment.</li>
              </ul>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                <strong style={{ fontSize: '12.5px', color: '#1e293b' }}>E-Commerce Web Application</strong>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Django, PostgreSQL, REST APIs</span>
              </div>
              <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '11px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <li>Developed a full-stack e-commerce web application using Django, enabling users to browse products, add items to cart, and complete secure checkout.</li>
                <li>Implemented user authentication, role management, and session handling, supporting customers, admins, and vendors.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', borderBottom: '1px solid #cbd5e1', paddingBottom: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Education
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <div>
                <strong>Bachelor of Technology in Computer Science and Engineering</strong>
                <br />
                <span style={{ color: '#475569' }}>Tatyasaheb Kore Institute of Engineering and Technology, Warnanagar</span>
              </div>
              <div style={{ textAlign: 'right', color: '#64748b', fontSize: '11px' }}>
                <span>2020 – 2024</span>
                <br />
                <span>CGPA: 7.80</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <div>
                <strong>Honours in Data Science (AI/ML)</strong>
                <br />
                <span style={{ color: '#475569' }}>TCSiON</span>
              </div>
              <div style={{ textAlign: 'right', color: '#64748b', fontSize: '11px' }}>
                <span>2023 – 2024</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
