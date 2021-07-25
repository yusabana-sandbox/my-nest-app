import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable, tap, map } from 'rxjs'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    console.log('Before... in interceptor')
    const now = Date.now()

    return next.handle().pipe(
      map((data) => {
        console.log(`After...  in interceptor ${Date.now() - now}ms`)
        return { data }
      })
    )
  }
}
