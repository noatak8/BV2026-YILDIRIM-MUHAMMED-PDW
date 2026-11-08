import { DynamicModule, Module } from '@nestjs/common';

import { AppConfigModule } from '@common/config';
import { ApplicationLifecycleLogger, LoggingModule } from '@common/logging';
import { HealthModule } from '@core/health';

@Module({})
export class AppModule {
  static register(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        AppConfigModule.register(),
        LoggingModule,
        HealthModule,
      ],
      providers: [
        ApplicationLifecycleLogger,
      ],
    };
  }
}
