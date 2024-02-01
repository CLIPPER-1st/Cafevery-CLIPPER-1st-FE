import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse): Promise<void> => {
  const { query } = req.query;
  if (!query || typeof query !== 'string') {
    res.status(400).json({ message: 'Query parameter is required and must be a string.' });
    return;
  }

  const clientId = process.env.VITE_APP_NAVER_CLIENT_ID;
  const clientSecret = process.env.VITE_APP_NAVER_CLIENT_SECRET;

  // 환경 변수의 존재를 확인합니다.
  if (!clientId || !clientSecret) {
    res.status(500).json({ message: 'Server environment variables are not set.' });
    return;
  }

  try {
    const naverApiUrl = `https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(query)}`;
    const naverResponse = await fetch(naverApiUrl, {
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
    });

    if (!naverResponse.ok) {
      throw new Error(`Error from Naver API: ${naverResponse.statusText}`);
    }

    const naverData = await naverResponse.json();

    // CORS 헤더 설정
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.status(200).json(naverData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
