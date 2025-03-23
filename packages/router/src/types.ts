// ...
import React from 'react';

/**
 * Here in the types we are supposed to make the layout for the whole routing system in our architecture.
 * Within the stuff to build we have:
 *
 * A type including all possible applications. This is useful because it is.
 * A configuration interface for all possible routes within an application
 * A route configuration for determining attributes like is foreign and its parent app
 *
 * An AppRouteConfig that actually allow us to map all possible routes, including a basepath, the name of the app and a
 * Record for mapping <path, configuration using the route configuration interface>
 *
 * A breadcrumb type for implementing breadcrumb logic if we ever dive into it
 */

export type AppName =
    // Sorted by Relevance
    | 'management'
    | 'home'
    | 'teachers'
    | 'courses'
    | 'blog'
    | 'games'
    | 'discussion'
    | 'match'
    | 'about'
    | 'construction'
    | 'textEditor'
    | 'dashboard'

/**
 * Includes properties that help when a resource from an external app is being called
 */
export interface RouteConfig {
    path: string;
    label: string;
    isExternal?: boolean;
    parentAppName?: AppName;
}

// This is just a configuration schema
export interface AppRouteConfig {
    basePath: string;
    appName?: AppName;
    // Map a route /route with its configuration
    routes: Record<string, RouteConfig>;
}

// This has the types for the actual implementation
export interface ApplicationRoute {
    path: string,
    element: React.ReactNode;
    children?: ApplicationRoute;
}

/**
 * For whenever we get to actually implement this:
 * export type BreadcrumbItem = {
 *     path: string;
 *     label: string;
 * }
 */


export type RouteConfigMap = Record<AppName, AppRouteConfig>;

// This is supposed to be a nice base but I guess some tweaking is required. Anyways it can be modified at
// any moment. Let's go for the actual implementation now.