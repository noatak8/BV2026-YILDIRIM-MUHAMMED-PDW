import { DynamicModule, Module } from '@nestjs/common';

import { ApiInterceptor, HttpExceptionFilter } from '@common/api';
import { AppConfigModule } from '@common/config';
import { DatabaseModule } from '@common/database';
import { ApplicationLifecycleLogger, LoggingModule } from '@common/logging';
import { HealthModule } from '@core/health';
import { AccountModule } from '@core/account';
import { AuthModule } from '@core/auth';

@Module({})
export class AppModule {
  static register(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        AppConfigModule.register(),
        LoggingModule,
        DatabaseModule,
        HealthModule,
        AccountModule,
        AuthModule,
      ],
      providers: [
        ApiInterceptor,
        HttpExceptionFilter,
        ApplicationLifecycleLogger,
      ],
    };
  }
}
