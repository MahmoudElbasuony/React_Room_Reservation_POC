using Integrant.MRR.Core.Utilities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Integrant.MRR.DAL.Models
{
    public class MeetingRoom : BaseModel
    {

        [Required(ErrorMessage = "Code must be provided")]
        public string Code { get; set; }
        [Required(ErrorMessage = "Floor must be provided")]
        public int? Floor { get; set; }
        [Required(ErrorMessage = "Max seats count must be provided")]
        public int? MaxSeatsCount { get; set; }

        public bool HasSpeakers { get; set; }
        public bool HasMonitor { get; set; }
        public bool HasProjector { get; set; }

       

    }
}
