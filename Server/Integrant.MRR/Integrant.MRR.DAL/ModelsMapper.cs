using Integrant.MRR.DAL.Models;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.DAL
{
    internal static class ModelsMapper
    {
        internal static void Map()
        {
            if (!BsonClassMap.IsClassMapRegistered(typeof(BaseModel)))
            {

                BsonClassMap.RegisterClassMap<BaseModel>((map) =>
                {
                    map.AddKnownType(typeof(MeetingRoom));
                    map.AddKnownType(typeof(Reservation));
                    map.AutoMap();
                    map.MapIdMember(en => en.ID).SetIdGenerator(new StringObjectIdGenerator());
                });
            }
            

        }
    }
}
