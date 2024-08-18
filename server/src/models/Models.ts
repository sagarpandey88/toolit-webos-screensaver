export interface ITimelineMetadata {
  eventDate: Date;
  eventTitle: string;
  eventPhotos: IPhotos[];
}

export interface IPhotos {
  src: string;
}
