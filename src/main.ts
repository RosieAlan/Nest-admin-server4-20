import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './doc';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 创建文档
  app.useGlobalPipes(new ValidationPipe());
  generateDocument(app);
  await app.listen(3000);
}
bootstrap();
