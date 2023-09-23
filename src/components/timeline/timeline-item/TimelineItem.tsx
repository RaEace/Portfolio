type TimelineItemProps = {
  company: string;
  location: string;
  profession: string[];
  periodFrom: string;
  periodTo: string;
  body: JSX.Element[];
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  location,
  profession,
  periodFrom,
  periodTo,
  body,
}) => {
  return (
    <div className="item">
      <h5 className="company-name">{company}</h5>
      <div className="location">
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        {location}
      </div>
      <div className="job-info">
        <div className="title">
          {profession.map((item) => (
            <>
              {item} <br />
            </>
          ))}
        </div>
        <div>
          {periodFrom} - {periodTo}
        </div>
      </div>
      <div>
        <ul className="fa-ul">
          {body.map((text) => {
            return (
              <li>
                <i className="fa-li fa fa-hand-o-right"></i>
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
