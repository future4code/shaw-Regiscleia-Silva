import { Post } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class searchPostData extends BaseDataBase {
  protected table_name = "Post";
}
