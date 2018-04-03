using Integrant.MRR.DAL;
using Integrant.MRR.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.MRR.BL
{
    public class ReservationManager
    {
        private MRRContext Context { get; }


        public ReservationManager()
        {
            Context = new MRRContext();

        }


        public async Task<IEnumerable<Reservation>> GetAllReservationsWhen(Expression<Func<Reservation, bool>> exp)
            => await Context.ReservationRepository.GetOn(exp);

        public async Task<Reservation> GetReservationById(string Id) => await Context.ReservationRepository.GetById(Id);

        public async Task<Reservation> CreateReservation(Reservation reservation)
        {

            var matched_reservation = await Context.ReservationRepository.GetOn((res) => res.MeetingRoomCode == reservation.MeetingRoomCode
                                                                                 && ((reservation.ToTimeStamp > res.FromTimeStamp)
                                                                                 && (reservation.FromTimeStamp < res.ToTimeStamp)));

            if (matched_reservation.Count() > 0)
            {
                throw new Exception("Multi reservations conflict with your reservation date");
            }

            return await Context.ReservationRepository.Create(reservation);

        }

        public async Task<Reservation> ApproveReservation(bool IsApprove, string Id)
        {
            var reservation = await Context.ReservationRepository.GetById(Id);

            if (reservation == null)
                throw new Exception("Reservation not found");

            reservation.IsApproved = IsApprove;

            return await Context.ReservationRepository.Update(reservation);
        }

        public async Task<Reservation> DeleteReservation(Reservation reservation) => await Context.ReservationRepository.Delete(reservation);


    }
}
