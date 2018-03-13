using Integrant.MRR.BL;
using Integrant.MRR.Core.Utilities;
using Integrant.MRR.DAL.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;

namespace Integrant.MRR.Tests
{
    [TestClass]
    public class MeetingRoomTest
    {
        MeetingRoomManager meetingRoomManager = new MeetingRoomManager();

        MeetingRoom NewMeetingRoom = new MeetingRoom
        {
            ID = "5aa7ff7c995d3223e82c83d4",
            Floor = 4,
            HasMonitor = true,
            HasProjector = true,
            HasSpeakers = true,
            MaxSeatsCount = 10
        };


        [TestMethod]
        public async Task CreateMeetingRoom()
        {
            
            var created_room = await meetingRoomManager.CreateMeetingRoom(NewMeetingRoom);
 

            Assert.IsNotNull(created_room);

            Assert.IsNotNull(created_room.ID);


        }

        [TestMethod]
        public async Task GetMeetingRoom()
        {

            var meetingRoom = await meetingRoomManager.GetMeetingRoomById(NewMeetingRoom.ID);

            Assert.IsNotNull(meetingRoom);

        }


        [TestMethod]
        public async Task DeleteMeetingRoom()
        {

            var meetingRoom = await meetingRoomManager.DeleteMeetingRoom(NewMeetingRoom);

            Assert.IsNotNull(meetingRoom);

        }



    }
}
