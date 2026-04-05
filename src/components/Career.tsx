import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          {/* ATLASSIAN */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer II</h4>
                <h5>Atlassian</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Building Enterprise Posture Management systems to ensure compliance across Atlassian products.
              Designing scalable backend services to enforce standards like FedRAMP, HIPAA, and C5 across multi-environment systems.
            </p>
          </div>

          {/* SENTINELONE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Development Engineer</h4>
                <h5>SentinelOne</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Owned the Policy Service built on OPA (Rego), responsible for evaluating security policies in real-time.
              Designed scalable workflows to match cloud assets with policies, improving reliability, observability, and enforcement.
            </p>
          </div>

          {/* VMWARE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Member of Technical Staff II</h4>
                <h5>VMware</h5>
              </div>
              <h3>2022 - 2024</h3>
            </div>
            <p>
              Worked on VMware Aria Log Insight Cloud, enhancing observability and log analytics systems.
              Built scalable APIs, implemented circuit breakers, dynamic tagging, and improved distributed tracing and performance.
            </p>
          </div>

          {/* VERITAS */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Veritas Technologies</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>
              Contributed to EV.Cloud and Veritas Information Classifier, building backend services for data classification and enterprise systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;