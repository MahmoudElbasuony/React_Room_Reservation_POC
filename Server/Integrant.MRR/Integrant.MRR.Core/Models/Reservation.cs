using Integrant.MRR.Core.Utilities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Integrant.MRR.DAL.Models
{
    public class Reservation : BaseModel
    {
        [Required(ErrorMessage = "Meeting Room Code must be provided")]
        public string MeetingRoomCode { get; set; }

        [Required(ErrorMessage = "From Time Stamp must be provided")]
        [DataType(DataType.Time, ErrorMessage = "Invalid Time")]
        public DateTime FromTimeStamp { get; set; }

        [Required(ErrorMessage = "To Time Stamp must be provided")]
        [DataType(DataType.Time, ErrorMessage = "Invalid Time")]
        public DateTime ToTimeStamp { get; set; }

        [Required(ErrorMessage = "Reserver Email must be provided")]
        [DataType(DataType.EmailAddress, ErrorMessage = "Invalid Email Format")]
        public string ReserverEmail { get; set; }

        [Required(ErrorMessage = "Reserver Name must be provided")]
        public string ReserverName { get; set; }

        [Required(ErrorMessage = "Purpose must be provided")]
        public string Purpose { get; set; }

        [DataType(DataType.DateTime, ErrorMessage = "Invalid Date & Time format")]
        public DateTime ReservationDate { get; set; } = DateTime.UtcNow;

        public bool IsApproved { get; set; }
    }
}
