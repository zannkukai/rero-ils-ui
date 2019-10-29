/*
 * RERO ILS UI
 * Copyright (C) 2019 RERO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { Component, OnInit, Injector } from '@angular/core';
import { TranslateService } from '@rero/ng-core';

@Component({
  selector: 'public-search-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  lang: string = document.documentElement.lang;

   constructor(private injector: Injector) { }

  ngOnInit(): void {
    this.injector.get<TranslateService>(TranslateService).setLanguage(this.lang);
  }
}
