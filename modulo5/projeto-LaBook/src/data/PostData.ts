import { Post } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class PostData extends BaseDataBase {
  protected Table_name = "Post";

  insert = async (post: Post) => {
    try {
      await this.connection(this.Table_name).insert(post);
    } catch (error: any) {
      throw new Error("");
    }
  };

  select = async (id: string) => {
    try {
      const paramsResult = await this.connection(this.Table_name)
        .select()
        .where({ id });
      return paramsResult[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
