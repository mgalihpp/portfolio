import client from '@/client';
import groq from 'groq';

interface IncrementViewsParams {
  blog_id: string;
}

export async function incrementViews({
  blog_id,
}: IncrementViewsParams): Promise<void> {
  try {
    const query = groq`*[_type == "post" && _id == "${blog_id}"][0].views`;

    const currentViews = await client.fetch<number>(query, {
      blog_id,
    });

    const updatedViews = currentViews + 1;

    const patchOperation = {
      set: {
        views: updatedViews,
      },
    };

    await client.transaction().patch(blog_id, patchOperation).commit();
  } catch (error) {
    console.error(error);
  }
}
