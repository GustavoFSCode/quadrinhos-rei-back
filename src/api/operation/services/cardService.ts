const utils = require('@strapi/utils');
const { ApplicationError } = require('@strapi/utils').errors;

class cardService {
    async createCard(ctx){
        try{
            const {clientDocumentId} = ctx.request.params; 
            const {card} = ctx.request.body;
            if(!clientDocumentId){
                throw new ApplicationError("ID nao localizado.");
            }
            const client = await strapi.documents('api::client.client').findOne({
                documentId: clientDocumentId,
                populate: ['addresses', 'cards', 'user']
            })

            if(!client){
                throw new ApplicationError("Cliente nao encontrado");
            }

            console.log("A")

            if(card.isFavorite){

                await client.cards.forEach(async (card) => {
                    console.log("B")

                    if(!card.isFavorite || card.isFavorite === null) return

                    await strapi.documents('api::card.card').update({
                        documentId: card.documentId,
                        data: {
                            isFavorite: false
                        }
                    })
                })
            }

            return await strapi.documents('api::card.card').create({data: {
                ...card,
                publishedAt: new Date(),
                client: client
            }});
            
        }catch(error){
            if (error instanceof ApplicationError) {
                throw new ApplicationError(error.message);
            }
            console.error(error);
            throw new ApplicationError("Ocorreu um erro, tente novamente");
        }
    }
} export { cardService }

