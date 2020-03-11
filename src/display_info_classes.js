export class ItemDisplayInfo {
  constructor(key, text, manufacturer, region, category) {
    this.key = key;
    this.text = text;
    this.manufacturer = manufacturer;
    this.region = region;
    this.category = category;
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
