import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I’m a backend engineer at Atlassian, working on enterprise-scale systems focused on compliance, reliability, and distributed architecture.

          My work involves building scalable backend services and event-driven systems, ensuring products meet standards like FedRAMP, HIPAA, and C5 across multiple environments.

          Previously, I worked at SentinelOne where I owned the Policy Service built on OPA (Rego), enabling real-time security policy evaluation and improving system reliability and observability.

          At VMware, I contributed to Aria Log Insight Cloud, enhancing observability, log processing, and distributed system performance through features like circuit breakers and distributed tracing.

          I enjoy solving complex system design problems and building systems that operate reliably at scale.
        </p>
      </div>
    </div>
  );
};

export default About;