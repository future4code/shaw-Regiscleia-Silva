import { Post } from "../model/Post";
import { IdGenerator } from "../services/generetorId";
import { PostDTO } from "../types/postDTO";
import { PostData } from "../data/PostData";

export class PostBusiness {
  constructor(private genereitorId: IdGenerator, private postData: PostData) {}

  post = async (input: PostDTO) => {
    const { photo, description, date_create, role } = input;
    if (!photo || !description || !role) {
      throw new Error("preenchimento obrigatorio");
    }
    const id = this.genereitorId.generate();

    if (!id) {
      throw new Error("id não encontrado");
    }
    const post = new Post(id, photo, description, new Date(), role);
    await this.postData.insert(post);
    return post;
  };

  searchPost = async (id: string) => {
    if (!id) {
      throw new Error("necessario um Id");
    }
    const result = await this.postData.select(id);

    if (!result) {
      throw new Error("Post não encontrado");
    }
    return result;
  };
}
