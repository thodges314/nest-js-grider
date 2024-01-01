import { Controller } from '@nestjs/common';

@Controller('messages')
export class MessagesController {}

// nest generate controller messages/messages --flat
// messages/messages means messages folder, messages class name
// flat means don't create an extra 'controllers' folder in messages
