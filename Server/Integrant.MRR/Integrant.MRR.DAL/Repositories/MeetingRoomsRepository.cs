using Integrant.MRR.Core.Interfaces.Repositories;
using Integrant.MRR.DAL.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.DAL.Repositories
{
    public class MeetingRoomsRepository : Repository<MeetingRoom>, IMeetingRoomRepository
    {
        public MeetingRoomsRepository(IMongoDatabase Db) : base(Db)
        {

        }
    }
}
