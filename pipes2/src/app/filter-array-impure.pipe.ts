import { Pipe, PipeTransform } from '@angular/core';

import { FilterArrayPipe } from './filter-array.pipe';

@Pipe({
  name: 'filterArrayImpure',
  pure: false
})
export class FilterArrayImpurePipe extends FilterArrayPipe {

}
