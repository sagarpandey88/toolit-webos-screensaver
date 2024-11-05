import TimelineItem from "./TimelineItem";
import ImageCarousel from "./Slider";
import { ITimelineMetadata } from "../../models/models";

const Timeline = (props: ITimelineConfiguration) => {
  const formatDateToDDMMMYYYY = (date: Date) => {
    date = new Date(date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Pad single-digit day with a leading zero
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedDay}-${month}-${year}`;
  };

  return (
    <div>
      {props.metadata.map((tl, idx) => {
        return (
          <TimelineItem
            date={formatDateToDDMMMYYYY(tl.eventDate)}
            title={tl.eventTitle}
            key={`tli-${idx}`}
          >
            <>
              <div className="timeline-imagecontainer" key={`tli-${idx}`}>
                {props.imagesAsCarousel && (
                  <ImageCarousel images={tl.eventPhotos} />
                )}
                {!props.imagesAsCarousel &&
                  tl.eventPhotos.map((ph, idx) => {
                    return (
                      <>
                        <img src={ph.src} key={`img-${tl.eventDate}${idx}`} />
                      </>
                    );
                  })}
              </div>
            </>
          </TimelineItem>
        );
      })}
    </div>
  );
};

export default Timeline;

export interface ITimelineConfiguration {
  imagesAsCarousel: boolean;
  metadata: ITimelineMetadata[];
}
