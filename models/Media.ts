import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'
import { date } from '@nozbe/watermelondb/decorators'
export default class Media extends Model {
  static table = 'media'
//   static associations = {
//     comments: { type: 'has_many', foreignKey: 'post_id' },
//   }
  @text('title') title
  @text('uri') uri
  @field('is_on_backup') is_on_backup
  @date('last_modified_at') last_modified_at
  @date('last_backup_at') last_backup_at
  @date('timestamp') timestamp
  @text('is_backup_on') is_backup_on


}