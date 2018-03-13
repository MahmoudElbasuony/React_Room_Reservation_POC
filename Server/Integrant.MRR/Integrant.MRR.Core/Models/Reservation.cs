using System;
using System.Collections.Generic;
using System.Text;

namespace Integrant.MRR.DAL.Models
{
    public class Reservation : BaseModel 
    {
        public string MeetingRoomCode { get; set; }
        public DateTime FromTimeStamp { get; set; }
        public DateTime ToTimeStamp { get; set; }
        public string ReserverEmail { get; set; }
        public string ReserverName { get; set; }
        public string Purpose { get; set; }
        public string ReservationDate { get; set; }
        public bool IsApproved { get; set; }
    }
}
