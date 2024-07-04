import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return NextResponse.json({ posts });
}

export async function POST(request) {
  const res = await request.json();
  const { title, content } = res;

  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: {
        create: {
          name: 'Jaehun',
        },
      },
      published: true,
    },
  });
  return NextResponse.json({ result });
}
