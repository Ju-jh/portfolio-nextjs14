'use client'

import { getGoogleAuthCode } from '@/api/getGoogleAuthCode';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAuth() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  console.log(code,'code...!!!>!!>!>>!!')

  useEffect(() => {
    if (code) {
      getGoogleAuthCode(code)
    }
  }, [code]);
}