import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(_request, { params }) {
  const id = params.id;

  const result = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  return NextResponse.json({ result });
}
