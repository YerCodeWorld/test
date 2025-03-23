// ...

import { RouteConfigMap, AppName } from "./types";

/**
 * Potentially useful if and just if we implement subdomains
 *
 * export const APP_DOMAINS: Record<AppName, string> = {
 *     // includes all app that get to have a subdomain, which is not going to happen in a while
 * };
 */

 // Do i need to explain this? No? ok
 export const BASE_PATHS: Record<AppName, string> = {
     management: '/management',
     home: '/home',
     teachers: '/teachers',
     courses: '/courses',
     blog: '/blog',
     games: '/games',
     discussion: '/discussion',
     match: '/match',
     about: '/about',
     textEditor: '/EduText',
     dashboard: '/dashboard',
     construction: '/construction'
 }

 export const ROUTE_CONFIG: RouteConfigMap = {
     // remember RouteConfigMap structure: AppName, and then the configuration properties of the routes

     management: {
         basePath: BASE_PATHS.management,
         appName: 'management',
         routes: {
             // none
         }
     },

     home: {
         basePath: BASE_PATHS.home,
         appName: 'home',
         routes: {
             // I will come to this every time a new route comes out in the app, this is... you know, spontaneous
            home: { path: '/', label: 'EduGuiders - Your EduPlatform' },

             // I believe the about page will have its quirks based on the parent app
             about: { path: '/about/home', label: 'Home - About' },
         }
     },

     // Repeat until you get all apps, currently mocking cause you uh oh we haven't built anything

     teachers: {
         basePath: BASE_PATHS.teachers,
         appName: 'teachers',
         routes: {
            // none
         }
     },

     courses: {
         basePath: BASE_PATHS.courses,
         appName: 'courses',
         routes: {
             // none
         }
     },

     blog: {
         basePath: BASE_PATHS.blog,
         appName: 'blog',
         routes: {
             // none
         }
     },

     games: {
         basePath: BASE_PATHS.games,
         appName: 'games',
         routes: {
             // none
         }
     },


     discussion: {
         basePath: BASE_PATHS.discussion,
         appName: 'discussion',
         routes: {
             // none
         }
     },

     match: {
         basePath: BASE_PATHS.match,
         appName: 'match',
         routes: {
             // none
         }
     },

     about: {
         basePath: BASE_PATHS.about,
         appName: 'about',
         routes: {
             home: { path: 'home', label: 'Home - About' },
             teachers: { path: 'teachers', label: 'Teachers - About' },
             games: { path: 'Games', label: 'Games - About' },
             blog: { path: 'blog', label: 'blog - About' },
             match: { path: 'match', label: 'Match - About' },
             courses: { path: 'courses', label: 'Courses - About' },
             us: { path: 'us', label: 'EduGuiders - Usage' },
             objective: { path: 'objective', label: 'EduGuiders - Objective' },
         }
     },

     construction: {
         basePath: BASE_PATHS.construction,
         appName: 'construction',
         routes: {
             teachers: { path: 'teachers', label: 'Teachers' },
             games: { path: 'Games', label: 'Games' },
             blog: { path: 'blog', label: 'blog' },
             match: { path: 'match', label: 'Match' },
             courses: { path: 'courses', label: 'Courses' },
             us: { path: 'us', label: 'EduGuiders' },
             objective: { path: 'objective', label: 'EduGuiders' },
             discussion: { path: 'discussion', label: 'EduGuiders' },
         }
     },

     dashboard: {
        basePath: BASE_PATHS.dashboard,
        appName: 'dashboard',
        routes: {} // Dont know so far}
     },

     textEditor: {
         basePath: BASE_PATHS.textEditor,
         appName: 'textEditor',
         routes: {}  // None so far
     }

 }

 // Right now this is looking like a nice structure.
// Let's keep going