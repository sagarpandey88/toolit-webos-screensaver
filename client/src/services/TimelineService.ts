import { ITimelineMetadata } from "../models/models";

export const getTimeline = async (
  userId: string,
  tlId: string
): Promise<ITimelineMetadata[]> => {
  const obj = await fetch(
    `https://ca-toolit-imggal-001.gentleriver-bc9bacd0.centralindia.azurecontainerapps.io/loadImages?user=${userId}&tlId=${tlId}`,
    { method: "GET" }
  );
  return await obj.json();

  return [
    {
      eventDate: new Date("01-09-2023"),
      eventTitle: "Ishu`s birth",
      eventPhotos: [
        {
          src: "https://cdn.pixabay.com/photo/2023/07/04/09/36/baby-8105822_1280.jpg",
        },
        {
          src: "https://cdn.pixabay.com/photo/2023/07/04/09/36/baby-8105822_1280.jpg",
        },
      ],
    },
    {
      eventDate: new Date("03-11-2023"),
      eventTitle: "Ishu`s first smile",
      eventPhotos: [
        {
          src: "https://cdn.pixabay.com/photo/2023/07/04/09/36/baby-8105822_1280.jpg",
        },
      ],
    },
    {
      eventDate: new Date("03-11-2023"),
      eventTitle: "Ishu`s first smile",
      eventPhotos: [
        {
          src: "https://cdn.pixabay.com/photo/2023/07/04/09/36/baby-8105822_1280.jpg",
        },
      ],
    },
    {
      eventDate: new Date("03-11-2023"),
      eventTitle: "Ishu`s first smile",
      eventPhotos: [
        {
          src: "https://cdn.pixabay.com/photo/2023/07/04/09/36/baby-8105822_1280.jpg",
        },
      ],
    },
  ];
};
