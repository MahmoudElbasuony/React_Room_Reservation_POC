using Integrant.MRR.Core.Interfaces.Repositories;
using Integrant.MRR.DAL.Repositories;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.DAL
{
    public class MRRContext
    {
        private static MongoClient Client { get; set; }

        private IMongoDatabase Db { get; set; }

        public IMeetingRoomRepository MeetingRoomRepository { get; private set; }

        public IReservationRepository ReservationRepository { get; private set; }

        /// <summary>
        /// Connect to default server 
        /// </summary>
        public MRRContext()
        {

            Client = Client ?? new MongoClient();

            Db = GetMongoDatabase("MRRDB");

            Initialize();

        }

        /// <summary>
        /// Connect to server using provided connection string
        /// </summary>
        /// <param name="ConnectionString">Connection string for the server</param>
        public MRRContext(string ConnectionString)
        {

            if (string.IsNullOrWhiteSpace(ConnectionString))
                throw new ArgumentNullException();

            Client = Client ?? new MongoClient(ConnectionString);

            Db = GetMongoDatabase("MRRDB");

            Initialize();


        }

        /// <summary>
        /// Get database reference by providing database name 
        /// </summary>
        /// <param name="DbName">Database Name</param>
        /// <returns></returns>
        private IMongoDatabase GetMongoDatabase(string DbName)
        {
            // config models mapping with mongo serializer
            ModelsMapper.Map();

            if (Client != null)
                return Client.GetDatabase(DbName, new MongoDatabaseSettings { ReadEncoding = new UTF8Encoding(), WriteEncoding = new UTF8Encoding() });
            return null;
        }

        /// <summary>
        /// Initializes Repositories
        /// </summary>
        private void Initialize()
        {
            MeetingRoomRepository = new MeetingRoomsRepository(Db);

            ReservationRepository = new ReservationsRepository(Db);

        }

    }
}
