import { Module } from '@nestjs/common';

import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController], // automatically added when generated
})
export class MessagesModule {}

// nest generate module Messages
