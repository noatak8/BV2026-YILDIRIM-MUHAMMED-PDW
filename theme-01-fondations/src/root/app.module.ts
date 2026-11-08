import { Module } from '@nestjs/common';

import { HealthModule } from '@core/health';

@Module({
  imports: [HealthModule],
})
export class AppModule {}
