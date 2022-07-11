import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // calculate the time it takes to execute the request response

    console.time('Request-response time');
    console.log('Hi from middleware!');

    // we hook to the express finish event
    res.on('finish', () => console.timeEnd('Request-response time'));

    // we could long lasting methods to the database and keep track of how long
    // every API takes to complete.
    next();
  }
}
