export class DataService {
  private data: string[] = [];

  constructor() {
  }

  addData(data: string) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }


}
