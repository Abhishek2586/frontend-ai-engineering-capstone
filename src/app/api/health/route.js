import { NextResponse } from 'next/server';
import { getHealthData } from '@/lib/health';

export async function GET() {
  const data = getHealthData();
  return NextResponse.json(data);
}
