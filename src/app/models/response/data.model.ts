export class DataResponse {
  response: Data[];

  constructor(args: any) {
    if (!args) {
      return null;
    }

    for (const field in args) {
      if (args.hasOwnProperty(field)) {
        this[field] = args[field];
      }
    }

    this.response = [];
    if (args['response']) {
      args['response'].forEach(data => {
        this.response.push(new Data(data));
      });
    }
  }
}

export class Data {
  month: string;
  activeCards: number;
  fraudLoss: number;

  constructor(args: any) {
    if (!args) {
      return null;
    }

    for (const field in args) {
      if (args.hasOwnProperty(field)) {
        this[field] = args[field];
      }
    }
  }
}
