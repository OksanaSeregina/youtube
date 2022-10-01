import { IItem } from '../card';
import { IPageInfo } from './page-info.model';

export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: Array<IItem>;
}
