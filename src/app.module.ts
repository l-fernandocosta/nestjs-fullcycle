import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './modules/tweets/tweets.module';

const uri = 'mongodb://root:root@localhost:27017/tweets?authSource=admin';

@Module({
  imports: [MongooseModule.forRoot(uri), TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
