import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  formatDate(date: Date | null, formatStr: string = "yyyy/MM/dd HH:mm:ss") {
    const time = date || new Date();
    return formatDate(time, formatStr, 'zh-Hans');
  }

}
