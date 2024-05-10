import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getContent = async (id) => {
  try {
    const cf_entries = await client.getEntries({
      content_type: id,
    });

    return cf_entries.items.map((data) => {
      // console.log(cf_entries);
      return data.fields;
    });
  } catch (error) {
    console.log(error);
  }
};
