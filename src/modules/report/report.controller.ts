import { Controller, Header, Get, NotFoundException } from '@nestjs/common';
import { ApiOkResponse, ApiProduces, ApiTags } from '@nestjs/swagger';
import { ReportService } from './report.service';

const XLSX_MIME =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

@ApiTags('Report')
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get(':groupId')
  @Header('Content-Type', XLSX_MIME)
  @Header('Content-Disposition', 'attachment; filename="Отчет.xlsx"')
  @ApiOkResponse({
    schema: {
      type: 'string',
      format: 'binary',
    },
    description: 'The report has been generated',
  })
  @ApiProduces(XLSX_MIME)
  public async generate(): Promise<Buffer> {
    const buffer = this.reportService.generate();

    if (!buffer) {
      throw new NotFoundException();
    }

    return buffer;
  }
}
