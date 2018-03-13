using Integrant.MRR.DAL;
using Integrant.MRR.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Integrant.MRR.BL
{
    public class MeetingRoomManager
    {
        private MRRContext Context { get; }

        public MeetingRoomManager()
        {
            Context = new MRRContext();
        }

        public async Task<MeetingRoom> GetMeetingRoomById(string Id) => await Context.MeetingRoomRepository.GetById(Id);

        public async Task<MeetingRoom> CreateMeetingRoom(MeetingRoom meetingRoom) => await Context.MeetingRoomRepository.Create(meetingRoom);

        public async Task<MeetingRoom> DeleteMeetingRoom(MeetingRoom meetingRoom) => await Context.MeetingRoomRepository.Delete(meetingRoom);


    }
}
