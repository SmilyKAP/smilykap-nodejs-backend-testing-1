import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };
  let newPost: Post;

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    newPost = postsService.create(post);

    expect(newPost.text).toEqual(post.text);
  });

  it('should find a post', () => {
    const searchPost = postsService.find('1');
    expect(searchPost?.text).toEqual('Some pre-existing post');
  });
});