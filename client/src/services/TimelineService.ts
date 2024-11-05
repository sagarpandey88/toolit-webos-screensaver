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

  
};
