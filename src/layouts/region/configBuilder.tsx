import type { TemplateConfig, Stream } from "@yext/pages";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const configBuilder: (
  id?: string,
  filter?: Stream["filter"]
) => TemplateConfig = (id?: string, filter?: Stream["filter"]) => ({
  stream: {
    $id: id || "directory-region",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "c_meta",
      // Directory List Fields
      "dm_directoryParents.slug",
      "dm_directoryParents.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.dm_baseEntityCount",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: filter || {
      savedFilterIds: ["dm_defaultDirectory_address_region"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
    },
  },
});
