import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class ReportService {
  public async generate(): Promise<Buffer | null> {
    try {
      const result = await getConnection().query('SELECT * FROM group');
    } catch (e) {
    } finally {
      await getConnection().close();
    }
    return null;
  }
}
