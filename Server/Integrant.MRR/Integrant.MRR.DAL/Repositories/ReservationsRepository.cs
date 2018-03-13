using Integrant.MRR.Core.Interfaces.Repositories;
using Integrant.MRR.DAL.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Integrant.MRR.DAL.Repositories
{
    public class ReservationsRepository : Repository<Reservation>, IReservationRepository
    {
        public ReservationsRepository(IMongoDatabase Db) : base(Db)
        {

        }
    }
}
