interface PageProps {
  params?: {
    'user-name'?: string;
    'event-name'?: string;
  };
  searchParams?: any;
}

declare namespace NodeJS {
  interface ProcessEnv {
    baseUrl: string;
    databaseUrl: string;
  }
}
