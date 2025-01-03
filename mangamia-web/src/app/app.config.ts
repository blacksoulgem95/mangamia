import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

const banner = `
███╗   ███╗ █████╗ ███╗   ██╗ ██████╗  █████╗     ███╗   ███╗██╗ █████╗ ██╗
████╗ ████║██╔══██╗████╗  ██║██╔════╝ ██╔══██╗    ████╗ ████║██║██╔══██╗██║
██╔████╔██║███████║██╔██╗ ██║██║  ███╗███████║    ██╔████╔██║██║███████║██║
██║╚██╔╝██║██╔══██║██║╚██╗██║██║   ██║██╔══██║    ██║╚██╔╝██║██║██╔══██║╚═╝
██║ ╚═╝ ██║██║  ██║██║ ╚████║╚██████╔╝██║  ██║    ██║ ╚═╝ ██║██║██║  ██║██╗
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝╚═╝  ╚═╝╚═╝

Manga Mia! Web Application

Copyright (C) 2024 Sofia Vicedomini (github.com/blacksoulgem95)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see https://www.gnu.org/licenses/
`

console.log(banner)
