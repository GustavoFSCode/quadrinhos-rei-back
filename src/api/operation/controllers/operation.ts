/**
 * operation controller
 */

import { factories } from '@strapi/strapi'
import { clientService } from '../services/clientService';

export default factories.createCoreController('api::operation.operation', ({ strapi }) => ({
    async getClient(ctx){
        const sales = new clientService();
        return sales.getClient(ctx.request.query.id);
    },
    async createClient(ctx){
        const sales = new clientService();
        return sales.createClient(ctx.request.body);
    },
    async editClient(ctx){
        const sales = new clientService();
        return sales.editClient(ctx);
    }
 }));
