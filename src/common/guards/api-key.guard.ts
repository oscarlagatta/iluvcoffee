import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // retreive  API key from the request that is not labled as public

    const request = context.switchToHttp().getRequest<Request>();

    // retrieve auth header
    const authHeader = request.header('Authorization');
    return authHeader === process.env.API_KEY; // we may want to leverage the config service to load the key
  }
}
