import { TableClient } from "@azure/data-tables";

export class AzureTableProvider {
  private tableClient;


  constructor(connectionString: any, tableName: string) {
    // super(config);
    console.log(connectionString,tableName);

    this.tableClient = TableClient.fromConnectionString(
      connectionString,
      tableName
    );
  }

  async getTableMetadata(oDataQuery: string) {
    const query = `${oDataQuery}`;

    //const query = odata`PartitionKey eq 'ishu'`
    console.log(query);
  

    const entities = [];
    for await (const entity of this.tableClient.listEntities({
      queryOptions: { filter: query },
    })) {
      entities.push(entity);
    }
    return entities;
  }
}

export default AzureTableProvider;
