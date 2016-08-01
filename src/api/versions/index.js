// @flow
import ResourceBase from '../resourceBase';

type APIRes<T> = {
    _meta: Object,
    warnings: mixed,
    gw_api_response: Array<Object>,
    _metadata: Object,
    code: number,
    data: T,
    errors: mixed
};

type APIPromise<T> = Promise<AxiosXHR<APIRes<T>>>;

type GetData = [{
    minimum_ios_version: string,
    minimum_android_version: string,
    version: string
}];

export default class Versions extends ResourceBase {
    /**
     * @api {get} /v1/versions/current
     * @apiName Get
     * @apiDescription Get Version. Get the current API version, and the minimum mobile apps versions allowed
     * @apiExample {js} Example:
     *             gigwalk.versions.get({...})
     */
    get(): APIPromise<GetData> {
        const request: AxiosXHRConfig<any> = {
            url: '/v1/versions/current',
            method: 'get',
            data: null
        };

        return this.dispatch(request);
    }
}
