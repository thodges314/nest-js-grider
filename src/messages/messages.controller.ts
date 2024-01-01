import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}

// nest generate controller messages/messages --flat
// messages/messages means messages folder, messages class name
// flat means don't create an extra 'controllers' folder in messages
