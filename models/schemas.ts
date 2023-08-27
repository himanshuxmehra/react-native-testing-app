import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'media',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'location', type: 'string', isOptional: true },
        { name: 'uri', type: 'string', isIndexed: true },
        { name: 'is_on_backup', type: 'boolean', isIndexed: true },
        { name: 'last_modified_at', type: 'number' },
        { name: 'last_backup_at', type: 'number' },
        { name: 'timestamp', type: 'number' },
        { name: 'is_backup_on', type: 'boolean' }

      ]
    }),
  ]
})
