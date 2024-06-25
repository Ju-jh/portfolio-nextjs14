import prisma from '../../lib/prisma';

export const getPosts = async () => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true}
      }
    }
  })
  return posts;
}