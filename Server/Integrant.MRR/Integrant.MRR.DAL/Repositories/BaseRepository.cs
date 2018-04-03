using Integrant.MRR.Core.Interfaces.Repositories;
using Integrant.MRR.DAL.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.MRR.DAL.Repositories
{
    public abstract class Repository<T> : IRepository<T> where T : BaseModel
    {
        protected IMongoDatabase Db { get; }

        protected IMongoCollection<T> Collection { get; }

        protected FilterDefinitionBuilder<T> FilterBuilder { get; set; }

        protected UpdateDefinitionBuilder<T> UpdateBuilder { get; set; }

        public Repository(IMongoDatabase Db)
        {
            this.Db = Db;

            Collection = Db.GetCollection<T>(typeof(T).Name);

            FilterBuilder = Builders<T>.Filter;

            UpdateBuilder = Builders<T>.Update;
        }

        public async Task<T> Create(T Entity)
        {
            await Collection.InsertOneAsync(Entity);

            return Entity;
        }

        public async Task<T> Delete(T Entity)
            => await Collection.FindOneAndDeleteAsync<T>(en => en.ID == Entity.ID);


        public async Task<IEnumerable<T>> DeleteAll(IEnumerable<T> Entities)
        {
            var delete_query = FilterBuilder.In(en => en.ID, Entities.Select(e => e.ID));

            var delete_result = await Collection.DeleteManyAsync(delete_query);

            if (delete_result.IsAcknowledged)
                return Entities;

            else return null;
        }

        public async Task<IEnumerable<T>> GetAll()
            => await (await Collection.FindAsync<T>(new BsonDocument())).ToListAsync();


        public async Task<T> GetById(string ID)
            => await (await Collection.FindAsync<T>(e => e.ID == ID)).FirstOrDefaultAsync();


        public async Task<IEnumerable<T>> GetOn(Expression<Func<T, bool>> expression)
            => await (await Collection.FindAsync<T>(expression)).ToListAsync();

        public async Task<T> Update(T Entity)
        {
             
            if (string.IsNullOrWhiteSpace(Entity.ID))
                throw new Exception("Entity Id Missed");

            var fields_dictionary = Entity.ToBsonDocument().ToDictionary();

            UpdateDefinition<T> update_query = null;

            foreach (var entry in fields_dictionary)
            {
                if (update_query == null)
                    update_query = UpdateBuilder.Set(entry.Key, fields_dictionary[entry.Key]);
                else
                    update_query = UpdateBuilder.Combine(update_query, UpdateBuilder.Set(entry.Key, fields_dictionary[entry.Key]));
            }

            var result = await Collection.UpdateOneAsync(e => e.ID == Entity.ID, update_query);

            if (result.ModifiedCount == 0)
                throw new Exception("Update faild");

            else return Entity;
        }
    }
}
