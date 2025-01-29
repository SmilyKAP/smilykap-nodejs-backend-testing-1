import { Post, PostsService } from "./posts.service";

describe("PostsService", () => {
  let postsService: PostsService;
  const post: Omit<Post, "id" | "date"> = {
    text: "Mocked post",
  };
  let newPost: Post;

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: "Some pre-existing post" });
  });

  it("should add a new post", () => {
    // act
    newPost = postsService.create(post);

    // assert
    expect(newPost.id).toEqual("2");
  });

  it("should find a post", () => {
    // act
    postsService.create(post);
    let searchPost = postsService.find("2");

    // assert
    expect(searchPost?.id).toEqual("2");
    searchPost = postsService.find("3");
    expect(searchPost?.id).toBeFalsy();
  });
});
