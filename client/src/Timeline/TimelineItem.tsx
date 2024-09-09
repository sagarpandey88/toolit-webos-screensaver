import "./TimelineItem.css"; // This will be your custom CSS file

const TimelineItem = ({ date, title, children }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <div className="timeline-date">{date}</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
          <div className="timeline-line"></div>
        </div>
        <div className="timeline-content">
          <div className="timeline-date-mobile">{date}</div>
          <p className="timeline-header">{title}</p>

          {children}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
