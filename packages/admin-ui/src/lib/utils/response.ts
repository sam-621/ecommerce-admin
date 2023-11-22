export class RouteResponse<T> {
  constructor(
    readonly data: T,
    readonly message: string[]
  ) {}
}
