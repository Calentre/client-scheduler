interface PageProps {
  params: {
    'user-name': string;
    'event-name': string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

declare namespace NodeJS {
  interface ProcessEnv {
    baseUrl: string;
    databaseUrl: string;
  }
}
