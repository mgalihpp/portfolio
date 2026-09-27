import { createClient } from '@sanity/client';

export function getSanityClient() {
  const projectId = process.env.SANITY_PROJECT_ID ?? 'g4pufrpg';
  const dataset = process.env.SANITY_DATASET ?? 'production';
  const token = process.env.SANITY_TOKEN;
  return createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: '2021-08-31',
    token,
  });
}
