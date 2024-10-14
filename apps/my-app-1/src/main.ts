import { NestFactory } from '@nestjs/core';
import { MyApp1Module } from './my-app-1.module';

async function bootstrap() {
  const app = await NestFactory.create(MyApp1Module);
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
  });
}
bootstrap();
