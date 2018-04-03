using Integrant.MRR.BL;
using Integrant.MRR.Core.Utilities;
using Integrant.MRR.DAL.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Threading.Tasks;

namespace Integrant.MRR.Tests
{
    [TestClass]
    public class ReservationTest
    {
        ReservationManager reservationManager = new ReservationManager();

        Reservation NewReservation = new Reservation
        {
            ID = "5aa7ff7c995d3223e82c83d4",
            FromTimeStamp = DateTime.UtcNow,
            IsApproved = true,
            MeetingRoomCode = "1",
            Purpose = "XXXXX",
            ReservationDate = DateTime.UtcNow,
            ReserverEmail = "mahmoud.elbasuony@gmailc.om",
            ReserverName = "Mahmoud Elbasuony",
            ToTimeStamp = DateTime.UtcNow

        };


        [TestMethod]
        public async Task CreateMeetingRoom()
        {

            var created_reservation = await reservationManager.CreateReservation(NewReservation);


            Assert.IsNotNull(created_reservation);

            Assert.IsNotNull(created_reservation.ID);


        }

        [TestMethod]
        public async Task GetMeetingRoom()
        {

            var meetingRoom = await reservationManager.GetReservationById(NewReservation.ID);

            Assert.IsNotNull(meetingRoom);

        }


        [TestMethod]
        public async Task DeleteMeetingRoom()
        {

            var meetingRoom = await reservationManager.DeleteReservation(NewReservation);

            Assert.IsNotNull(meetingRoom);

        }



    }
}
