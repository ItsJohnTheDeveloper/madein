export class ItemDisplayInfo {
  constructor(key, text, manufacturer, region, category, url) {
    this.key = key;
    this.text = text;
    this.manufacturer = manufacturer;
    this.region = region;
    this.category = category;
    this.url = url;
  }
}

export class ItemCreateObject {
  constructor(text, manufacturer, region, category) {
    this.text = text;
    this.manufacturer = manufacturer;
    this.region = region;
    this.category = category;
  }
}
