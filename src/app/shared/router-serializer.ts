import { RouterStateSerializer } from '@ngrx/router-store';
import {
  RouterStateSnapshot,
  Params,
  UrlSegment,
  Data,
  ParamMap
} from '@angular/router';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */

export interface RouterStateUrl {
  /** The URL string */
  url: string;
  /** The matrix parameters scoped to this route */
  params: Params;
  /** The query parameters shared by all the routes */
  queryParams: Params;
  /** The URL fragment shared by all the routes */
  fragment: string;
  /** The static and resolved data of this route */
  data: Data;

  paramMap: ParamMap;
  queryParamMap: ParamMap;
}

export class PttRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = routerState.root.params;
    const fragment = routerState.root.fragment;
    const data = routerState.root.data;
    const paramMap = routerState.root.paramMap;
    const queryParamMap = routerState.root.queryParamMap;

    return {
      url,
      queryParams,
      params,
      fragment,
      data,
      paramMap,
      queryParamMap
    };
  }
}
