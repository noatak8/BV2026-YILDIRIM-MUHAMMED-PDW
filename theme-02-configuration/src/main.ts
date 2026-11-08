import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { EnvService } from '@common/config';
import { AppModule } from '@root/app.module';

export const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule.register(),
  );

  const envService = app.get(EnvService);
  await app.listen(envService.appPort);
};

void bootstrap();
