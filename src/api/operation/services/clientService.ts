const utils = require('@strapi/utils');
const { ApplicationError } = require('@strapi/utils').errors;

class clientService {

    async getClient(id?: any) {

        const user = await strapi.documents('api::client.client').findMany(
            {
                filters: {
                    documentId: id ? id : {}
                },
                populate: {
                    addresses: {},
                    cards: {}
                }
            }
        )

        if (!user) {
            return []
        }

        return user

    }

} export {clientService}