import AzureTableProvider from "../providers/AzureTableProvider";
import { ITimelineMetadata } from "../models/Models";

class TimelineService {
  private _config;
  constructor(config: any) {
    this._config = config;
  }

  async getTimelineData(
    userId: string,
    timelineId: string
  ): Promise<ITimelineMetadata[]> {
    const azTblProv = new AzureTableProvider(
      this._config.AZ_STORAGE_CONNECTIONSTRING,
      this._config.AZ_TABLE_TIMELINE
    );
    const query = `PartitionKey eq '${userId}' and timelineId eq '${timelineId}'`;

    const rawEntities = await azTblProv.getTableMetadata(query); // maybe we can optimize by calling only the columns needed

    return rawEntities.map((re) => {
      return {
        eventDate: new Date(re.eventDate as string),
        eventPhotos: JSON.parse(re.eventPhotos as string),
        eventTitle: re.eventTitle as string,
      };
    });
  }
}

export default TimelineService;
