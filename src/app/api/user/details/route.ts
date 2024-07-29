import prisma from '@/helpers/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request | NextRequest) {
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get('user');

    await prisma.$connect();

    if (!username) {
      throw new Error('Invalid user');
    }

    const userProfileResponse = await prisma.user_profile.findUnique({
      where: { username },
    });

    const userDetails = {
      name: `${userProfileResponse?.first_name} ${userProfileResponse?.last_name}`,
      avatar: userProfileResponse?.profile_picture,
      userName: userProfileResponse?.username,
      description: userProfileResponse?.description,
    };

    return NextResponse.json({ user: userDetails, ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { user: null, error: `${error}`, ok: false },
      { status: 400 }
    );
  }
}
