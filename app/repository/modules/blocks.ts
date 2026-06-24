import { FetchFactory } from '~/repository/factory'

export class BlocksModule extends FetchFactory<unknown> {
  async getByRegion<T>(region: string) {
    return useAsyncData<T>(
      `blocks-${region}`,
      () => this.call('GET', `api/${region}`) as Promise<T>
    )
  }
}
