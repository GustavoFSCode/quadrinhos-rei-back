/**
 * operation router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::operation.operation');

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/getClient",
            handler: "operation.getClient",
        },
        {
            method: "POST",
            path: "/createClient",
            handler: "operation.createClient",
        }
    ]
};