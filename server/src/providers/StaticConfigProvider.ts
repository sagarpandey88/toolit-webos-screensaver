class StaticConfigProvider {
  //extends ConfigProvider
  config = {};

  getConfig(...configurationKeys: string[]) {
    return process.env;
  }
}

export default StaticConfigProvider;
