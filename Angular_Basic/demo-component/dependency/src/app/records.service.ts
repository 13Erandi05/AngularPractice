import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = ['Adam Taylor', 'E123', 'at@abc.net'];
  info2: string[] = ['Alan Taylor', 'E124', 'at@abc.net'];
  info3: string[] = ['Adam France', 'E125', 'af@abc.net'];

  getinfo1(): string[] {
    return this.info1;
  }

  getinfo2(): string[] {
    return this.info2;
  }

  getinfo3(): string[] {
    return this.info3;
  }
  constructor() {}
}
